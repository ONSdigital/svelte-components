<script>
	import Document from "./Document.svelte";

	/** Optional: Define the documents as an array of {id, title, checked, description?}
	 * @type {object[]|null}
	 */
	export let items = null;
	/**
	 * Optional: Set an additional CSS class for the component
	 * @type {string}
	 */
	export let cls = "";
</script>

<ul class="ons-document-list {cls}">
	<slot />
	{#if Array.isArray(items)}
		{#each items as item}
			<Document {...item} />
		{/each}
	{/if}
</ul>
