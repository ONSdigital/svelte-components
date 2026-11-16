<script>
	import { createEventDispatcher } from "svelte";
	/** @typedef {{ id: string; label: string; description?: string | null }} RadioItem */

	/** @type {import("svelte").EventDispatcher<{ change: { value: RadioItem; e: Event } }>} */
	const dispatch = createEventDispatcher();

	/** @param {string} id @param {string} label @param {string} description @returns {RadioItem} */
	function createItem(id, label, description) {
		return description ? { id, label, description } : { id, label };
	}

	/**
	 * @typedef {Object} Props
	 * @property {string | null} [id] Unique ID input
	 * @property {string | null} [label] Label for input
	 * @property {string | null} [description] Optional: Extended description for element
	 * @property {RadioItem} [item] Optional: Define the item as an object in the form {id, label, description?}
	 * @property {string} groupId ID/name for radio group (required)
	 * @property {RadioItem | null} [value] Binding selected option
	 * @property {boolean} [compact] Compact mode (no border)
	 * @property {(detail: { value: RadioItem; e: Event }) => void} [onChange] Callback for the `change` event, called with the same value as the event's `detail`
	 */
	/** @type {Props} */
	let {
		id = null,
		label = "",
		description = null,
		item = createItem(id ?? "", label ?? "", description ?? ""),
		groupId,
		value = $bindable(),
		compact = false,
		onChange = () => {}
	} = $props();

	// Defaults for bindable props are set here rather than in $props(): Svelte 5 throws an error if a
	// parent binds a prop that has a default to an undefined variable (eg. `let value = $state()`).
	// Setting them here also writes the default back to the bound variable, as in v1.
	if (value === undefined) value = null;

	/** @param {Event & { currentTarget: HTMLInputElement }} event */
	function handleChange(event) {
		if (event.currentTarget.checked) {
			value = item;
			const detail = { value, e: event };
			onChange(detail);
			dispatch("change", detail);
		}
	}
</script>

<span class="ons-radios__item" class:ons-radios__item--no-border={compact}>
	<span class="ons-radio" class:ons-radio--no-border={compact}>
		<input
			type="radio"
			id={item.id}
			value={item}
			checked={value?.id === item.id}
			name={groupId}
			class="ons-radio__input ons-js-radio"
			onchange={handleChange}
		/>
		<label
			class="ons-radio__label"
			class:ons-label--with-description={description}
			for={item.id}
			id="{item.id}-label"
			aria-describedby={item.description ? `${item.id}-label-description-hint` : null}
		>
			{item.label}
			{#if item.description}
				<span class="ons-label__aria-hidden-description" aria-hidden="true"
					><span class="ons-label__description ons-radio__label--with-description">
						{item.description}
					</span></span
				>
			{/if}
		</label>
		{#if item.description}
			<span
				class="ons-label__visually-hidden-description ons-u-vh"
				id="{id}-label-description-hint"
			>
				{item.description}
			</span>
		{/if}
	</span>
</span>
