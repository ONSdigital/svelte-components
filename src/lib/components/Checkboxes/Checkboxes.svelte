<script>
	import { createEventDispatcher, setContext } from "svelte";
	import { writable } from "svelte/store";
	import Checkbox from "../Checkbox/Checkbox.svelte";
	/** @typedef {{ id: string; label: string; description?: string | null; checked?: boolean; disabled?: boolean }} CheckboxItem */

	/** @type {import("svelte").EventDispatcher<{ change: { item: CheckboxItem; e: Event } }>} */
	const dispatch = createEventDispatcher();

	/**
	 * @typedef {Object} Props
	 * @property {import("svelte").Snippet} [children] Child content (snippet)
	 * @property {string | null} [title] Title/legend for parent <fieldset>
	 * @property {boolean} [hideTitle] Visually hide the title/legend
	 * @property {string | null} [label] Descriptive "how to" label for inputs
	 * @property {CheckboxItem[] | null} [items] Optional: Define the checkboxes as an array of {id, label, checked, description?}
	 * @property {boolean} [compact] Compact mode (no borders)
	 * @property {CheckboxItem[]} [value] Binding for selected checkboxes (if checkboxes are defined as "items")
	 * @property {string | null} [cls] Optional: Set an additional CSS class for the component
	 * @property {(detail: { item: CheckboxItem; e: Event }) => void} [onChange] Callback for the `change` event, called with the same value as the event's `detail`
	 */
	/** @type {Props} */
	let {
		children,
		title = null,
		hideTitle = false,
		label = null,
		items = null,
		compact = false,
		value = $bindable([]),
		cls = null,
		onChange = () => {}
	} = $props();

	const checkboxes = writable([]);
	setContext("checkboxes", checkboxes);

	/** @param {{ item: CheckboxItem; e: Event }} detail */
	function handleChange(detail) {
		onChange(detail);
		dispatch("change", detail);
	}
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
			{@render children?.()}
			{#if Array.isArray(items)}
				{#each items as item, index (item.id)}
					<Checkbox bind:item={items[index]} bind:group={value} {compact} onChange={handleChange} />
				{/each}
			{/if}
		</div>
	</div>
</fieldset>
