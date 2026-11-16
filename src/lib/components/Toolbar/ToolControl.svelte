<script>
	import { getContext } from "svelte";
	const activeModalId = getContext("activeModalId");
	const showHelpModals = getContext("showHelpModals");

	const currentModalId = $derived(activeModalId);
	const showHelp = $derived(showHelpModals);

	/**
	 * @typedef {Object} Props
	 * @property {import("svelte").Snippet} [children] Child content (snippet)
	 * @property {string} [id] The id of the ToolbarButton that shows this control
	 */

	/** @type {Props} */
	let { children, id = "" } = $props();
</script>

{#if $currentModalId === id && !$showHelp}
	<div class="tool-control" role="tabpanel" aria-labelledby={`button-${id}`} id={`panel-${id}`}>
		{@render children?.()}
	</div>
{/if}

<style>
	.tool-control {
		max-width: 371px;
		padding: 8px;
	}
</style>
