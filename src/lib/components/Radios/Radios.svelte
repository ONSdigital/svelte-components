<script>
	import { createEventDispatcher } from "svelte";
	import Radio from "./Radio.svelte";
	/** @type {import("svelte").EventDispatcher<{ change: { value: RadioItem; e: Event } }>} */
	const dispatch = createEventDispatcher();
	/** @typedef {{ id: string; label: string; description?: string | null }} RadioItem */

	/**
	 * @typedef {Object} Props
	 * @property {import("svelte").Snippet} [children] Child content (snippet)
	 * @property {string | null} [title] Title/legend for parent <fieldset>
	 * @property {boolean} [hideTitle] Visually hide the title/legend
	 * @property {string} [id] Unique ID/name for radio group (required)
	 * @property {string | null} [label] Descriptive "how to" label for inputs
	 * @property {RadioItem | null} [value] Binding for ID of selected option
	 * @property {RadioItem[]} [items] Optional: Define the radios as an array of {id, label, description?}
	 * @property {boolean} [compact] Compact mode (no border)
	 * @property {string | null} [cls] Optional: Set an additional CSS class for the component
	 * @property {(detail: { value: RadioItem; e: Event }) => void} [onChange] Callback for the `change` event, called with the same value as the event's `detail`
	 */
	/** @type {Props} */
	let {
		children,
		title = null,
		hideTitle = false,
		id = "radios",
		label = null,
		value = $bindable(),
		items = [],
		compact = false,
		cls = null,
		onChange = () => {}
	} = $props();

	// Defaults for bindable props are set here rather than in $props(): Svelte 5 throws an error if a
	// parent binds a prop that has a default to an undefined variable (eg. `let value = $state()`).
	// Setting them here also writes the default back to the bound variable, as in v1.
	if (value === undefined) value = null;

	/** @param {{ value: RadioItem; e: Event }} detail */
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
			<p class="ons-radios__label">{label}</p>
		{/if}
		<div class="ons-radios__items">
			{@render children?.()}
			{#each items as item (item.id)}
				<Radio {item} groupId={id} {compact} bind:value onChange={handleChange} />
			{/each}
		</div>
	</div>
</fieldset>
