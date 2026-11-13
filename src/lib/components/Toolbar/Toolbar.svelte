<script>
	import { getContext, setContext } from "svelte";
	import { writable } from "svelte/store";

	/** @type {string | null} Additional classes for the toolbar */
	export let classes = null;
	/** @type {string | null} aria label for the toolbar */
	export let ariaLabel = null;
	/** @type {"horizontal" | "vertical"} Orientation of the toolbar */
	export let orientation = "horizontal";

	// Set context for child components
	const orientationStore = writable(orientation);
	setContext("orientation", orientationStore);
	$: orientationStore.set(orientation);

	// Get the showHelpModals store from context
	const showHelp = getContext("showHelpModals");
</script>

<!-- Toolbar container -->
<div
	role="toolbar"
	aria-label={ariaLabel}
	class={`toolbar ${orientation === "vertical" ? "" : "flex-col"} ${classes}`}
>
	<!-- slot for helpModal -->
	<div class={`grid--flex ${orientation === "vertical" ? "flex-col" : ""}`}>
		<slot />
	</div>

	{#if !$showHelp}
		<slot name="controls" />
	{/if}
</div>

<style>
	.grid--flex {
		display: flex;
		gap: 4px;
	}

	.toolbar {
		display: flex;
		align-items: center;
		box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
		border-radius: 8px;
		padding: 8px;
		justify-content: flex-start;
		align-content: flex-start;
		flex-wrap: nowrap;
		width: auto;
		max-width: fit-content;
		height: 100%;
		margin: 8px;
		background: white;
		pointer-events: all;
	}

	.flex-col {
		flex-direction: column;
	}
</style>
