<script>
	import { getContext } from "svelte";
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children] Child content (snippet)
	 */

	/** @type {Props} */
	let { children } = $props();
	const activeModalId = getContext("activeModalId");
	const id = $derived(activeModalId);
</script>

{#if id}
	{@render children?.()}
{/if}
