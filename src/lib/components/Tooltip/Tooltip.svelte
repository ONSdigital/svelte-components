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
	export let maxWidth = null;

	let isHovered = false;
	let currentPos = {};

	function mouseOver(event) {
		const bboxEl = event.target.getBoundingClientRect();
		const bboxPt = event?.target?.offsetParent?.getBoundingClientRect?.() || { top: 0, left: 0 };
		const x = window.pageXOffset;
		const y = window.pageYOffset;
		const bbox = {
			top: bboxEl.top - bboxPt.top - y,
			bottom: bboxEl.bottom - bboxPt.top - y,
			left: bboxEl.left - bboxPt.left - x,
			right: bboxEl.right - bboxPt.left - x
		};
		currentPos = {
			top:
				(position === "bottom"
					? bbox.bottom
					: position === "top"
						? bbox.top
						: (bbox.top + bbox.bottom) / 2) + window.pageYOffset,
			left:
				(position === "right"
					? bbox.right
					: position === "left"
						? bbox.left
						: (bbox.left + bbox.right) / 2) + window.pageXOffset
		};
		isHovered = true;
	}
	function mouseLeave() {
		isHovered = false;
	}
	function renderDim(dim) {
		return dim ? `${dim}px` : null;
	}
</script>

<div
	class="tooltip-wrapper"
	on:mouseenter={mouseOver}
	on:mouseleave={mouseLeave}
	on:focusin={mouseOver}
	on:focusout={mouseLeave}
>
	<slot />
</div>
{#if isHovered}
	<div
		class="tooltip tooltip-{position}"
		style:left={renderDim(currentPos.left)}
		style:right={renderDim(currentPos.right)}
		style:top={renderDim(currentPos.top)}
		style:bottom={renderDim(currentPos.bottom)}
		style:max-width={renderDim(maxWidth)}
	>
		{text}
	</div>
{/if}

<style>
	.tooltip-wrapper {
		display: inline-block;
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
	}
	.tooltip-top {
		transform: translate(-50%, -100%) translateY(-8px);
	}
	.tooltip-bottom {
		transform: translate(-50%, 8px);
	}
	.tooltip-left {
		transform: translate(-100%, -50%) translateX(-8px);
	}
	.tooltip-right {
		transform: translate(8px, -50%);
	}
	.tooltip-middle {
		transform: translate(-50%, 8px);
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
