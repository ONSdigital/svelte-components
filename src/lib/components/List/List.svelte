<script>
	import Li from "./Li.svelte";

	/**
	 * @typedef {Object} Props
	 * @property {"bullet"|"dash"|"number"|"bare"|"inline"} [mode] - Type of list - dash | bullet | number | bare
	 * @property {string[]|null} [items] - Optional: Array of HTML strings representing items in list
	 * @property {string|null} [cls] - Optional: Set an additional CSS class for the component
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { mode = "bullet", items = null, cls = null, children } = $props();
</script>

{#if mode === "number"}
	<ol class="ons-list {cls}">
		{#if children}{@render children()}{:else if items}
			{#each items as item, index (index)}
				<Li>{@html item}</Li>
			{/each}
		{/if}
	</ol>
{:else}
	<ul
		class="ons-list"
		class:ons-list--dashed={mode === "dash"}
		class:ons-list--bare={["bare", "inline"].includes(mode)}
		class:ons-list--inline={mode === "inline"}
	>
		{#if children}{@render children()}{:else if items}
			{#each items as item, index (index)}
				<Li>{@html item}</Li>
			{/each}
		{/if}
	</ul>
{/if}
