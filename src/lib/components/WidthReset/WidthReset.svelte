<script>
	/**
	 * @typedef {Object} Props
	 * @property {import("svelte").Snippet} [children] Child content (snippet)
	 * @property {"legacy"} [mode] The page layout to break out of. "legacy" targets the article column of the older ONS website template (`#main > .wrapper > .col-wrap`)
	 */
	/** @type {Props} */
	let { children, mode = "legacy" } = $props();
</script>

<div class="full-width-reset full-width-reset--{mode}">
	{@render children?.()}
</div>

<style>
	/* Legacy ONS website template */
	/* Makes 100cqw = page width excluding the scrollbar */
	:global(#main) {
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
