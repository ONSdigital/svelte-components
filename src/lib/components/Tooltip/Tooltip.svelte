<script>
	import { createPopper } from "@popperjs/core";

	/** @type {{ children?: import("svelte").Snippet; text?: string; position?: "top" | "bottom" | "left" | "right"; width?: number | null; zIndex?: number | null }} */
	let { children, text = "", position = "bottom", width = null, zIndex = null } = $props();
	/** @type {HTMLDivElement | undefined} */
	let wrapper = $state();
	/** @type {HTMLDivElement | undefined} */
	let tooltip = $state();
	/** @type {string | null} */
	let showToolip = $state(null);

	$effect(() => {
		if (!wrapper || !tooltip) return;
		const reference = wrapper;
		text;
		width;
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
				modifiers: [...(options.modifiers ?? []), { name: "eventListeners", enabled: true }]
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
				modifiers: [...(options.modifiers ?? []), { name: "eventListeners", enabled: false }]
			}));
		}

		const showEvents = ["mouseenter", "focusin"];
		const hideEvents = ["mouseleave", "focusout"];

		for (const event of showEvents) reference.addEventListener(event, show);
		for (const event of hideEvents) reference.addEventListener(event, hide);

		return () => {
			for (const event of showEvents) reference.removeEventListener(event, show);
			for (const event of hideEvents) reference.removeEventListener(event, hide);
			popper.destroy();
		};
	});
</script>

<div class="tooltip-wrapper" bind:this={wrapper}>
	{@render children?.()}
</div>

<div
	class="tooltip"
	role="tooltip"
	data-show={showToolip}
	bind:this={tooltip}
	style:z-index={zIndex}
	style:max-width={width === null ? null : `${width}px`}
>
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
