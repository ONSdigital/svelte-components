<script>
	import { getContext } from "svelte";

	/**
	 * @typedef {Object} Props
	 * @property {string} [classes] Additional CSS classes for the divider
	 */

	/** @type {Props} */
	let { classes = "" } = $props();

	// Get the orientation store from context
	/** @type {import("svelte/store").Writable<string>} */
	const orientationStore = getContext("orientation");

	// Subscribe to the store to get its value
	const orientation = $derived(orientationStore);
</script>

<div class={`toolbar-divider ${$orientation} ${classes}`} aria-hidden="true"></div>

<style>
	.toolbar-divider {
		background-color: #ccc;
	}

	.toolbar-divider.horizontal {
		width: 1px;
	}

	.toolbar-divider.vertical {
		width: 100%;
		height: 1px;
		margin: 0.5rem 0;
	}
</style>
