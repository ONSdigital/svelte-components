<script>
	import { createEventDispatcher } from "svelte";
	/** @typedef {{ id: string; label: string; description?: string | null }} RadioItem */

	/** @type {import("svelte").EventDispatcher<{ change: { value: RadioItem; e: Event } }>} */
	const dispatch = createEventDispatcher();

	/** @param {string} id @param {string} label @param {string} description @returns {RadioItem} */
	function createItem(id, label, description) {
		return description ? { id, label, description } : { id, label };
	}

	/** @type {{ id?: string | null; label?: string | null; description?: string | null; item?: RadioItem; groupId: string; value?: RadioItem | null; compact?: boolean; onChange?: (detail: { value: RadioItem; e: Event }) => void }} */
	let {
		id = null,
		label = "",
		description = null,
		item = createItem(id ?? "", label ?? "", description ?? ""),
		groupId,
		value = $bindable(null),
		compact = false,
		onChange = () => {}
	} = $props();

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
