<script>
	import { getContext } from "svelte";

	/** @type {string} */
	export let classes = "";

	// The orientation store from the parent Toolbar
	const orientation = getContext("orientation");
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
