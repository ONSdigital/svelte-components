<script>
	import Li from "./Li.svelte";

	/**
	 * Type of list
	 * @type {"bullet"|"dash"|"number"|"bare"|"inline"}
	 */
	export let mode = "bullet"; // dash | bullet | number | bare
	/**
	 * Optional: Array of HTML strings representing items in list
	 * @type {string[]|null}
	 */
	export let items = null;
	/**
	 * Optional: Set an additional CSS class for the component
	 * @type {string}
	 */
	export let cls = "";
</script>

{#if mode === "number"}
	<ol class="ons-list {cls}">
		<slot>
			{#if items}
				{#each items as item}
					<Li>{@html item}</Li>
				{/each}
			{/if}
		</slot>
	</ol>
{:else}
	<ul
		class="ons-list"
		class:ons-list--dashed={mode === "dash"}
		class:ons-list--bare={["bare", "inline"].includes(mode)}
		class:ons-list--inline={mode === "inline"}
	>
		<slot>
			{#if items}
				{#each items as item}
					<Li>{@html item}</Li>
				{/each}
			{/if}
		</slot>
	</ul>
{/if}
