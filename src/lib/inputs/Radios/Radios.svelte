<script>
	import Radio from "./Radio.svelte";

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
	 * Unique ID for radio group (required)
	 * @type {string}
	 */
	export let id = "name";
	/**
	 * Descriptive "how to" label for inputs
	 * @type {string}
	 */
	export let label = "";
	/**
	 * Binding for ID of selected option
	 * @type {object|null}
	 */
	export let value = null;
	/** Optional: Define the radios as an array of {id, label, description?}
	 * @type {object[]}
	 */
	export let items = [];
	/**
	 * Compact mode (no border)
	 * @type {boolean}
	 */
	export let compact = false;
	/**
	 * Optional: Set an additional CSS class for the component
	 * @type {string}
	 */
	export let cls = "";
</script>

<fieldset class="ons-fieldset {cls}">
	{#if title}
		<legend class="ons-fieldset__legend ons-u-mb-no">
			<span class="ons-fieldset__legend-title ons-u-pb-no" class:ons-u-vh={hideTitle}>{title}</span>
		</legend>
	{/if}
	<div class="ons-input-items">
		{#if label}
			<p class="ons-radios__label">{label}</p>
		{/if}
		<div class="ons-radios__items">
			<slot />
			{#each items as item}
				<Radio {item} groupId={id} {compact} bind:value on:change />
			{/each}
		</div>
	</div>
</fieldset>
