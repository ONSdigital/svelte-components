<script>
	import { getContext } from "svelte";

	/** @type {string} The id of the ToolbarButton that shows this control */
	export let id = "";

	const currentModalId = getContext("activeModalId");
	const showHelp = getContext("showHelpModals");
</script>

{#if $currentModalId === id && !$showHelp}
	<div class="tool-control" role="tabpanel" aria-labelledby={`button-${id}`} id={`panel-${id}`}>
		<slot />
	</div>
{/if}

<style>
	.tool-control {
		max-width: 371px;
		padding: 8px;
	}
</style>
