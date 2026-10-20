<script>
	import Document from "./Document.svelte";

	/** @type {{ children?: import("svelte").Snippet; items?: { title?: string | null; href?: string | null; description?: string | null; image?: string | boolean; featured?: boolean; meta?: string | null; headingTag?: "h2" | "h3" }[] | null; compact?: boolean; cls?: string | null }} */
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
