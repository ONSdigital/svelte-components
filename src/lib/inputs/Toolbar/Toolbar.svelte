<script>
	import { getContext, setContext } from "svelte";
	import { writable } from "svelte/store";

	/**
	 * Additional classes for the button
	 * @type {string}
	 */
	export let classes = "";
	/**
	 * aria label for button
	 * @type {string}
	 */
	export let ariaLabel = "";
	/**
	 * Orientation of the toolbar
	 * @type {'horizontal' | 'vertical'}
	 */
	export let orientation = "horizontal";

	// Set context for child components
	const orientationStore = writable(orientation);

	$effect(() => {
		orientationStore.set(orientation);
	});

	// Get the showHelpModals state from context
	const showHelpModals = getContext("showHelpModals");
	const showHelp = $derived(showHelpModals);
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

	{#if !showHelp}
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
