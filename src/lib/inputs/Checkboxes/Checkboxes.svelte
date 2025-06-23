<script>
	import { setContext } from "svelte";
	import { writable } from "svelte/store";
	import Checkbox from "../Checkbox/Checkbox.svelte";

	/**
	 * Title/legend for parent <fieldset>
	 * @type {string}
	 */
	export let title = "";
	/**
	 * Visually hide the title/legend
	 * @type {boolean}
	 */
	export let hideTitle = false;
	/**
	 * Descriptive "how to" label for inputs
	 * @type {string}
	 */
	export let label = "";
	/** Optional: Define the checkboxes as an array of {id, label, checked, description?}
	 * @type {object[]|null}
	 */
	export let items = null;
	/** Compact mode (no borders)
	 * @type {boolean}
	 */
	export let compact = false;
	/** Binding for selected checkboxes (if checkboxes are defined as "items")
	 * @type {object[]}
	 */
	export let value = [];
	/**
	 * Optional: Set an additional CSS class for the component
	 * @type {string}
	 */
	export let cls = "";

	const checkboxes = writable([]);
	setContext("checkboxes", checkboxes);
</script>

<fieldset class="ons-fieldset {cls}">
	{#if title}
		<legend class="ons-fieldset__legend ons-u-mb-no">
			<span class="ons-fieldset__legend-title ons-u-pb-no" class:ons-u-vh={hideTitle}>{title}</span>
		</legend>
	{/if}
	<div class="ons-input-items">
		{#if label}
			<p class="ons-checkboxes__label">{label}</p>
		{/if}
		<div class="ons-checkboxes__items">
			<slot />
			{#if Array.isArray(items)}
				{#each items as item}
					<Checkbox {item} bind:group={value} {compact} on:change />
				{/each}
			{/if}
		</div>
	</div>
</fieldset>
