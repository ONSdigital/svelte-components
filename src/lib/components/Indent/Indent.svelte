<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children] Child content (snippet)
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<div class="ons-text-indent">
	{@render children?.()}
</div>
