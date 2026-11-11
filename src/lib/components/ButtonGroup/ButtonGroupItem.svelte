<script>
	import { getContext } from "svelte";

	let { value = "", id = value, label = value } = $props();

	// Get the parent ButtonGroup context
	const buttonGroup = getContext("buttonGroup");
	const { groupName, selectedValue } = buttonGroup;

	// Subscribe to selectedValue store
	const currentSelected = $derived(selectedValue);
	const selected = $derived($currentSelected === value);

	function handleChange() {
		selectedValue.set(value); // Update the store
	}

	let buttonRef;
</script>

<div class="button-container">
	<input
		type="radio"
		{id}
		name={groupName}
		{value}
		checked={selected}
		class="radio-input"
		onchange={handleChange}
		aria-checked={selected}
		bind:this={buttonRef}
	/>
	<label for={id} class="radio-label" data-label={label}>
		<span class="label-text">{label}</span>
	</label>
</div>

<style>
	.button-container {
		display: flex;
	}

	.radio-input {
		position: absolute;
		opacity: 0;
		width: 0;
		height: 0;
	}

	.radio-label {
		display: grid;
		flex-grow: 1;
		padding: 4px 8px;
		border: none;
		background: transparent;
		font-size: 14px;
		cursor: pointer;
		border-radius: 6px;
		transition:
			background 0.2s ease,
			color 0.2s ease;
		color: #707071;
		text-align: center;
	}

	/* Reserve the selected text width without changing the visible font weight. */
	.radio-label::after {
		content: attr(data-label);
		font-weight: bold;
		visibility: hidden;
	}

	.label-text,
	.radio-label::after {
		grid-area: 1 / 1;
	}

	.radio-label:hover {
		background-color: #e8e8e8;
	}

	.radio-input:checked + .radio-label {
		background: white;
		font-weight: bold;
		color: var(--ons-color-text-link);
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
	}

	.radio-input:focus + .radio-label {
		background: var(--ons-color-focus);
		color: var(--ons-color-text);
	}
</style>
