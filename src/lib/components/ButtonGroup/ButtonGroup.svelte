<script>
	import { setContext } from "svelte";
	import { writable, get } from "svelte/store";

	/** @type {string} */
	export let name = "";
	/** @type {string} */
	export let legend = "";
	/** @type {string | undefined} The selected value (bindable) */
	export let value = undefined;
	/** @type {boolean} */
	export let visuallyHideLegend = false;
	/** @type {boolean} */
	export let stackOnMobile = true;

	// A store shared with the child ButtonGroupItems
	/** @type {import("svelte/store").Writable<string | undefined>} */
	const selectedValue = writable(value);

	// Keep the store and value in sync both ways: when value is set from outside, and when an item is
	// chosen. (The checks stop each update triggering the other again.)
	$: if (get(selectedValue) !== value) selectedValue.set(value);
	selectedValue.subscribe((v) => {
		if (v !== value) value = v;
	});

	// Create a context to share with child Button components
	setContext("buttonGroup", {
		groupName: name,
		selectedValue
	});
</script>

<fieldset class="button-group" class:stack-on-mobile={stackOnMobile}>
	{#if legend}
		<legend class:ons-u-vh={visuallyHideLegend}>{legend}</legend>
	{/if}
	<div class="buttons">
		<slot />
	</div>
</fieldset>

<style>
	.button-group {
		display: block;
	}

	legend {
		font-weight: bold;
		margin-bottom: 0.5rem;
	}

	.buttons {
		display: inline-flex;
		gap: 8px;
		background: #f5f5f6;
		padding: 4px;
		border-radius: 8px;
		justify-content: space-between;
	}

	@media (max-width: 739.98px) {
		.stack-on-mobile {
			min-width: 0;
		}

		.stack-on-mobile .buttons {
			flex-direction: column;
		}
	}
</style>
