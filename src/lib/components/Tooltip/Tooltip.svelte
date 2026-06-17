<script>
	/**
	 * Define the text to be displayed on the tooltip
	 * @type {string}
	 */
	export let text = "";
	/**
	 * Define the position of the tooltip relative to the element
	 * @type {"top"|"bottom"|"left"|"right"|"middle"}
	 */
	export let position = "bottom";
	/**
	 * Set a maximum width for the tooltip (beyond this width text will wrap)
	 * @type {number|null}
	 */
	export let width = null;

	let isHovered = false;

	function mouseOver() {
		isHovered = true;
		console.log("hovered");
	}
	function mouseLeave() {
		isHovered = false;
		console.log("unhovered");
	}
</script>

<div
	role="tooltip"
	class="tooltip-wrapper"
	on:mouseenter={mouseOver}
	on:mouseleave={mouseLeave}
	on:focusin={mouseOver}
	on:focusout={mouseLeave}
>
	<slot />
	{#if isHovered}
		<div
			class="tooltip tooltip-{position}"
			style:width={width != null ? `${width}px` : null}
			style:white-space={width == null ? "nowrap" : "wrap"}
		>
			{text}
		</div>
	{/if}
</div>

<style>
	.tooltip-wrapper {
		display: inline-block;
		position: relative;
	}
	.tooltip {
		position: absolute;
		pointer-events: none;
		font-size: 14px;
		line-height: 1.4;
		color: var(--ons-color-page-light);
		background: var(--ons-color-text);
		padding: 4px 6px;
		border-radius: 4px;
		box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
		word-break: keep-all;
	}
	.tooltip-top {
		bottom: calc(100% + 8px);
		left: 50%;
		transform: translateX(-50%);
	}
	.tooltip-bottom {
		top: calc(100% + 8px);
		left: 50%;
		transform: translateX(-50%);
	}
	.tooltip-left {
		top: 50%;
		right: calc(100% + 8px);
		transform: translateY(-50%);
	}
	.tooltip-right {
		top: 50%;
		left: calc(100% + 8px);
		transform: translateY(-50%);
	}
	.tooltip-middle {
		top: calc(50% + 8px);
		left: 50%;
		transform: translateX(-50%);
	}
	.tooltip::before {
		content: " ";
		position: absolute;
		border-width: 8px;
		border-style: solid;
	}
	.tooltip-bottom::before,
	.tooltip-middle::before {
		bottom: calc(100% - 1px);
		right: 50%;
		border-color: transparent transparent var(--ons-color-text) transparent;
		transform: translateX(50%);
	}
	.tooltip-top::before {
		top: calc(100% - 1px);
		right: 50%;
		border-color: var(--ons-color-text) transparent transparent transparent;
		transform: translateX(50%);
	}
	.tooltip-left::before {
		left: calc(100% - 1px);
		top: 50%;
		border-color: transparent transparent transparent var(--ons-color-text);
		transform: translateY(-50%);
	}
	.tooltip-right::before {
		right: calc(100% - 1px);
		top: 50%;
		border-color: transparent var(--ons-color-text) transparent transparent;
		transform: translateY(-50%);
	}
</style>
