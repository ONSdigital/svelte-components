<script>
	/**
	 * @typedef {Object} Props
	 * @property {import("svelte").Snippet} [children] Child content (snippet)
	 * @property {"default"|"legacy"} [mode] How the full width is worked out. "default" works in any column that is centred on the page. "legacy" targets the article column of the older ONS website template (`#main > .wrapper > .col-wrap`)
	 */
	/** @type {Props} */
	let { children, mode = "default" } = $props();
</script>

<div class="full-width-reset full-width-reset--{mode}">
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
</style>
