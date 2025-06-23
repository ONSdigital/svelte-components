<script>
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	/**
	 * Unique ID input
	 * @type {string}
	 */
	export let id = "";
	/**
	 * Label for input
	 * @type {string}
	 */
	export let label = "";
	/**
	 * Optional: Extended description for element
	 * @type {string}
	 */
	export let description = "";
	/**
	 * Optional: Define the item as an object in the form {id, label, description?}
	 * @type {object}
	 */
	export let item = { id, label, description };
	/**
	 * ID for radio group (required)
	 * @type {string}
	 */
	export let groupId;
	/**
	 * Binding selected option
	 * @type {object|null}
	 */
	export let value = null;
	/**
	 * Compact mode (no border)
	 * @type {boolean}
	 */
	export let compact = false;
</script>

<span class="ons-radios__item" class:ons-radios__item--no-border={compact}>
	<span class="ons-radio" class:ons-radio--no-border={compact}>
		<input
			type="radio"
			id={item.id}
			value={item}
			name={groupId}
			class="ons-radio__input ons-js-radio"
			on:change={(e) => {
				if (e?.target?.checked) {
					value = item;
					dispatch("change", { value, e });
				}
			}}
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
