<script>
	/**
	 * @typedef {Object} Props
	 * @property {import("svelte").Snippet} [children] Child content (snippet)
	 */
	/** @type {Props} */
	let { children } = $props();
</script>

<div class="full-width-reset">
	{@render children?.()}
</div>

<style>
	/* Makes 100cqw = page width excluding the scrollbar */
	:global(#main) {
		container-type: inline-size;
	}

	.full-width-reset {
		width: 100cqw;
		margin-left: -16px; /* < 768px */
		margin-right: 0;
	}

	@media (min-width: 768px) {
		.full-width-reset {
			margin-left: calc(-1 * max(0px, (100cqw - 752px) / 2));
		}
	}

	@media (min-width: 992px) {
		.full-width-reset {
			margin-left: calc(-1 * max(0px, (100cqw - 944px) / 2));
		}
	}
</style>
