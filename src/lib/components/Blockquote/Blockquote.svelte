<script>
	/**
	 * @typedef {Object} Props
	 * @property {string|null} [attribution] - Attribution for the quote.
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { attribution = null, children } = $props();
</script>

<blockquote class="ons-quote">
	<svg
		class="ons-icon"
		viewBox="0 0 14 10"
		xmlns="http://www.w3.org/2000/svg"
		focusable="false"
		fill="currentColor"
		aria-hidden="true"
	>
		<path
			d="M13.44.77h-3l-2 4v6h6v-6h-3l2-4zm-8 0h-3l-2 4v6h6v-6h-3l2-4z"
			transform="translate(-0.44 -0.77)"
		/>
	</svg><span class="ons-quote__text ons-u-fs-l">{@render children?.()}</span>
	{#if attribution}
		<span class="ons-quote__ref">&mdash; {attribution}</span>
	{/if}
</blockquote>
