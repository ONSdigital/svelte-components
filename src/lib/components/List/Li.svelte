<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children] Child content (snippet)
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<li class="ons-list__item">
	{@render children?.()}
</li>
