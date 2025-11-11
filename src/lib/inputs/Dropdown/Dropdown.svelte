<script>
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	/**
	 * Unique id for the &lt;select&gt; element
	 * @type {string|null}
	 */
	export let id = null;
	/**
	 * A label to describe the &lt;select&gt; element (expected for accessibility)
	 * @type {string|null}
	 */
	export let label = null;
	/**
	 * Visually hide the label
	 * @type {boolean}
	 */
	export let hideLabel = false;
	/**
	 * An optional placeholder text
	 * @type {string}
	 */
	export let placeholder = "Select an option";
	/**
	 * A prop to bind to for the selected value
	 * @type {object|null}
	 */
	export let value = null;
	/**
	 * An array of options, formatted {id, label}
	 * @type {object[]}
	 */
	export let options = [];
	/**
	 * Optional: Set an additional CSS class for the component
	 * @type {string|null}
	 */
	export let cls = null;
</script>

<div class="ons-field {cls}">
	{#if label}
		<label class="ons-label" for={id} class:ons-u-vh={hideLabel}>{label}</label>
	{/if}
	<select
		{id}
		name={id}
		class="ons-input ons-input--select"
		bind:value
		on:change={(e) => dispatch("change", e)}
	>
		{#if placeholder}
			<option value={null} selected disabled>{placeholder}</option>
		{/if}
		{#each options as option}
			<option value={option}>{option?.label || option}</option>
		{/each}
	</select>
</div>
