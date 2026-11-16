<script>
	import Document from "./Document.svelte";

	/**
	 * @typedef {Object} Props
	 * @property {import("svelte").Snippet} [children] Child content (snippet)
	 * @property {{ title?: string | null; href?: string | null; description?: string | null; image?: string | boolean; featured?: boolean; meta?: string | null; headingTag?: "h2" | "h3" }[] | null} [items] Optional: Define the documents as an array of {id, title, checked, description?}
	 * @property {boolean} [compact] Compact mode. Removes horizonatal lines between documents
	 * @property {string | null} [cls] Optional: Set an additional CSS class for the component
	 */
	/** @type {Props} */
	let { children, items = null, compact = false, cls = null } = $props();
</script>

<ul class="ons-document-list {cls}" class:ons-document-list--compact={compact}>
	{@render children?.()}
	{#if Array.isArray(items)}
		{#each items as item (item.title)}
			<Document {...item} />
		{/each}
	{/if}
</ul>

<style>
	.ons-document-list--compact > :global(.ons-document-list__item) {
		padding-bottom: 0;
		border: none;
	}
</style>
