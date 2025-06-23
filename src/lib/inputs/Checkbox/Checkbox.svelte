<script>
	import { onMount, onDestroy, getContext, createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	/**
	 * ID for input element
	 * @type {string}
	 */
	export let id;
	/**
	 * Label for input
	 * @type {string}
	 */
	export let label;
	/**
	 * Optional: Extended description for element
	 * @type {string}
	 */
	export let description = "";
	/**
	 * Binding for checked state of input
	 * @type {boolean}
	 */
	export let checked = false;
	/**
	 * Option to disable input
	 * @type {boolean}
	 */
	export let disabled = false;
	/**
	 * Optional: Define the item as an object in the form {id, label, description?}
	 * @type {object}
	 */
	export let item = { id, label, description, checked, disabled };
	/**
	 * Optional: Name of checkbox group
	 * @type {string}
	 */
	export let groupName = "";
	/**
	 * Binding for checked state of input
	 * @type {object[]|null}
	 */
	export let group = null;
	/**
	 * Set display mode of checkbox
	 * @type {"default"|"ghost"}
	 */
	export let variant = "default";
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

	const checkboxes = getContext("checkboxes");

	let el;

	function findAncestor(el, cls) {
		while ((el = el.parentElement) && !el.classList.contains(cls));
		return el;
	}

	function updateGroup() {
		const groupIndex = {};
		for (const g of group) groupIndex[g.id] = g;
		const newGroupIds = $checkboxes.filter((c) => c.checked).map((c) => c?.id);
		if (newGroupIds.length !== group.length)
			group = newGroupIds.map((id) => groupIndex[id] || item);
	}

	function doChange(e) {
		checked = item.checked;
		if (Array.isArray(group) && Array.isArray($checkboxes)) {
			updateGroup();
		}
		dispatch("change", { item, e });
	}

	onMount(() => {
		if (Array.isArray(group) && Array.isArray($checkboxes)) {
			const root = findAncestor(el, "ons-checkboxes__items");
			$checkboxes = [...root.getElementsByTagName("input")];
			updateGroup();
		}
	});

	onDestroy(() => {
		if (Array.isArray(group) && Array.isArray($checkboxes)) {
			$checkboxes = $checkboxes.filter((c) => c.id !== id);
			updateGroup();
		}
	});
</script>

<span
	class="ons-checkboxes__item {cls}"
	class:ons-checkboxes__item--ghost={variant === "ghost"}
	class:ons-checkboxes__item--no-border={compact}
>
	<span class="ons-checkbox" class:ons-checkbox--no-border={compact}>
		<input
			type="checkbox"
			id={item.id}
			name={groupName}
			value={item}
			bind:checked={item.checked}
			class="ons-checkbox__input ons-js-checkbox"
			disabled={item.disabled}
			aria-disabled={item.disabled}
			on:change={doChange}
			bind:this={el}
		/>
		<label
			class="ons-checkbox__label"
			class:ons-label--with-description={item.description}
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
				id="{item.id}-label-description-hint"
			>
				{item.description}
			</span>
		{/if}
	</span>
</span>

<style>
	.ons-checkboxes__item--ghost .ons-checkbox__label::before {
		background: rgba(0, 0, 0, 0);
		border-color: var(--ons-color-text-inverse);
		border-width: 2px;
		opacity: 60%;
	}
	.ons-checkboxes__item--ghost .ons-checkbox__input,
	.ons-checkboxes__item--ghost .ons-checkbox__input::after {
		background: rgba(0, 0, 0, 0);
		border-color: var(--ons-color-text-inverse);
	}
	.ons-checkboxes__item--ghost .ons-checkbox__input:focus + .ons-checkbox__label::before {
		box-shadow:
			0 0 0 1px var(--ons-color-input-border),
			0 0 0 4px var(--ons-color-focus);
		opacity: 100%;
	}
	.ons-checkboxes__item--ghost
		.ons-checkbox__input:checked:not(:focus)
		+ .ons-checkbox__label::before {
		box-shadow: 0 0 0 1px var(--ons-color-text-inverse);
	}
</style>
