<script>
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	/**
	 * Unique id for the &lt;select&gt; element
	 * @type {string|null}
	 */
	export let id = null;
	/**
	 * Name for the &lt;select&gt; element
	 * @type {string|null}
	 */
	export let name = id;
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
	 * The width of the &lt;input&gt; in characters or a valid css width string (eg. "100px")
	 * @type {number|string|null}
	 */
	export let width = 20;
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
		{name}
		class="ons-input ons-input--select {Number.isInteger(width)
			? `ons-input--w-${width}`
			: ''}"
		style:width={typeof width === "string" ? width : null}
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

<style>
	.ons-input--select {
		width: 100%;
	}
</style>