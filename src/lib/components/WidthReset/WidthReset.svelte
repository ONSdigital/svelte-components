<script>
	/**
	 * @typedef {Object} Props
	 * @property {import("svelte").Snippet} [children] Child content (snippet)
	 * @property {"default"|"legacy"} [mode] How the full width is worked out. "default" works in any column that is centred on the page. "legacy" targets the article column of the older ONS website template (`#main > .wrapper > .col-wrap`)
	 * @property {string | null} [cls] Optional: Set an additional CSS class for the wrapper
	 */
	/** @type {Props} */
	let { children, mode = "default", cls = null } = $props();
</script>

<div class="full-width-reset full-width-reset--{mode} {cls || ''}">
	{@render children?.()}
</div>

<style>
	/*
	 * Each mode makes an ancestor a size container, so that 100cqw = page width
	 * excluding the scrollbar (100vw includes it, causing horizontal scrolling).
	 * :has() limits each global rule to pages using that mode. Browsers without
	 * :has() fall back to viewport units, which can overflow by the scrollbar width.
	 */

	/* Default: any column centred on the page */
	:global(html:has(.full-width-reset--default)) {
		container-type: inline-size;
	}

	.full-width-reset--default {
		width: 100cqw;
		margin-left: calc(50% - 50cqw);
		margin-right: 0;
	}

	/* Legacy ONS website template */
	:global(#main:has(.full-width-reset--legacy)) {
		container-type: inline-size;
	}

	.full-width-reset--legacy {
		width: 100cqw;
		margin-left: -16px; /* < 768px */
		margin-right: 0;
	}

	@media (min-width: 768px) {
		.full-width-reset--legacy {
			margin-left: calc(-1 * max(0px, (100cqw - 752px) / 2));
		}
	}

	@media (min-width: 992px) {
		.full-width-reset--legacy {
			margin-left: calc(-1 * max(0px, (100cqw - 944px) / 2));
		}
	}

	/*
	 * Containers inside a legacy reset are capped to the legacy .wrapper content
	 * width (752px / 944px), so their content lines up with the article column.
	 * .ons-container is border-box with 16px side padding, hence the extra 32px.
	 * Full-width containers (no .ons-container class) are left alone.
	 */
	@media (min-width: 768px) {
		.full-width-reset--legacy :global(.ons-page__container.ons-container) {
			max-width: calc(752px + 2rem);
		}
	}

	@media (min-width: 992px) {
		.full-width-reset--legacy :global(.ons-page__container.ons-container) {
			max-width: calc(944px + 2rem);
		}
	}
</style>
