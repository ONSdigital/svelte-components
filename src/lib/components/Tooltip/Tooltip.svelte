<script>
	import { onMount } from "svelte";
	import { createPopper } from "@popperjs/core";

	/**
	 * Define the text to be displayed on the tooltip
	 * @type {string}
	 */
	export let text = "";
	/**
	 * Define the position of the tooltip relative to the element
	 * @type {"top"|"bottom"|"left"|"right"}
	 */
	export let position = "bottom";
	/**
	 * Set a maximum width for the tooltip (beyond this width text will wrap)
	 * @type {number|null}
	 */
	export let width = null;
	/**
	 * Set z-index of tooltip, to ensure it appears in front of other elements
	 * @type {number}
	 */
	export let zIndex = 1;

	let wrapper, tooltip; // HTML element bindings
	let showToolip = null;

	function init() {
		const popper = createPopper(wrapper, tooltip, {
			placement: position,
			modifiers: [
				{
					name: "offset",
					options: {
						offset: [0, 8]
					}
				}
			]
		});

		function show() {
			// Make the tooltip visible
			showToolip = "";

			// Enable the event listeners
			popper.setOptions((options) => ({
				...options,
				modifiers: [...options.modifiers, { name: "eventListeners", enabled: true }]
			}));

			// Update its position
			popper.update();
		}

		function hide() {
			// Hide the tooltip
			showToolip = null;

			// Disable the event listeners
			popper.setOptions((options) => ({
				...options,
				modifiers: [...options.modifiers, { name: "eventListeners", enabled: false }]
			}));
		}

		const showEvents = ["mouseenter", "focus"];
		const hideEvents = ["mouseleave", "blur"];

		for (const event of showEvents) wrapper.addEventListener(event, show);
		for (const event of hideEvents) wrapper.addEventListener(event, hide);

		return {
			destroy: () => {
				for (const event of showEvents) wrapper.removeEventListener(event, show);
				for (const event of hideEvents) wrapper.removeEventListener(event, hide);
				popper.destroy();
			}
		};
	}
	onMount(init);
</script>

<div class="tooltip-wrapper" bind:this={wrapper}>
	<slot />
</div>

<div class="tooltip" role="tooltip" data-show={showToolip} bind:this={tooltip}>
	{text}
	<div class="tooltip-arrow" data-popper-arrow></div>
</div>

<style>
	.tooltip-wrapper {
		display: inline-block;
	}
	.tooltip {
		font-size: 14px;
		line-height: 1.4;
		color: var(--ons-color-page-light);
		background: var(--ons-color-text);
		padding: 4px 6px;
		border-radius: 4px;
		box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
		word-break: keep-all;
		display: none;
	}
	.tooltip[data-show] {
		display: block;
	}
	.tooltip-arrow,
	.tooltip-arrow::before {
		position: absolute;
		width: 10px;
		height: 10px;
		background: inherit;
	}

	.tooltip-arrow {
		visibility: hidden;
	}

	.tooltip-arrow::before {
		visibility: visible;
		content: "";
		transform: rotate(45deg);
	}

	:global(.tooltip[data-popper-placement^="top"] > .tooltip-arrow) {
		bottom: -5px;
	}

	:global(.tooltip[data-popper-placement^="bottom"] > .tooltip-arrow) {
		top: -5px;
	}

	:global(.tooltip[data-popper-placement^="left"] > .tooltip-arrow) {
		right: -5px;
	}

	:global(.tooltip[data-popper-placement^="right"] > .tooltip-arrow) {
		left: -5px;
	}
</style>
