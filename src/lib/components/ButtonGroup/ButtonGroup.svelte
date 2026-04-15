<script>
	import { setContext } from "svelte";
	import { writable } from "svelte/store";

	let {
		name = "",
		legend = "",
		value = $bindable(),
		visuallyHideLegend = false,
		children
	} = $props();

	// create the store
	const selectedValue = writable(value);

	//  When store changes and update prop
	$effect(() => {
		selectedValue.set(value);
	});

	const currentValue = $derived(selectedValue);

	$effect(() => {
		if ($currentValue !== value) {
			value = $currentValue;
		}
	});

	// Create a context to share with child Button components
	setContext("buttonGroup", {
		groupName: name,
		selectedValue
	});
</script>

<fieldset class="button-group">
	{#if legend}
		<legend class:ons-u-vh={visuallyHideLegend}>{legend}</legend>
	{/if}
	<div class="buttons">
		{@render children?.()}
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
</style>
