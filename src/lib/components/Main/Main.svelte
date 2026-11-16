<script>
	/**
	 * @typedef {Object} Props
	 * @property {import("svelte").Snippet} [children] Child content (snippet)
	 * @property {string} [id] Sets the unique ID that can be targetted by hyperlinks
	 */
	/** @type {Props} */
	let { children, id = "main" } = $props();
</script>

<main {id}>
	{@render children?.()}
</main>
