<script>
	import { onMount, onDestroy, getContext, createEventDispatcher } from "svelte";
	/** @typedef {{ id: string; label: string; description?: string | null; checked?: boolean; disabled?: boolean }} CheckboxItem */

	/** @type {import("svelte").EventDispatcher<{ change: { item: CheckboxItem; e: Event } }>} */
	const dispatch = createEventDispatcher();

	/** @type {{ id?: string; label?: string; description?: string | null; checked?: boolean; disabled?: boolean; item?: CheckboxItem; groupName?: string | null; group?: CheckboxItem[] | null; variant?: "default" | "ghost"; compact?: boolean; cls?: string | null; onChange?: (detail: { item: CheckboxItem; e: Event }) => void }} */
	let {
		id = "",
		label = "",
		description = null,
		item = $bindable({ id, label, description, checked: false }),
		checked = $bindable(item.checked ?? false),
		disabled = false,
		groupName = null,
		group = $bindable(null),
		variant = "default",
		compact = false,
		cls = null,
		onChange = () => {}
	} = $props();

	/** @type {import("svelte/store").Writable<HTMLInputElement[]>} */
	const checkboxes = getContext("checkboxes");
	/** @type {HTMLInputElement | null} */
	let el = null;

	/** @param {HTMLElement} element @param {string} cls @returns {HTMLElement | null} */
	function findAncestor(element, cls) {
		let parent = element.parentElement;
		while (parent && !parent.classList.contains(cls)) parent = parent.parentElement;
		return parent;
	}

	function updateGroup() {
		if (!Array.isArray(group) || !Array.isArray($checkboxes)) return;
		/** @type {Record<string, CheckboxItem>} */
		const groupIndex = {};
		for (const groupItem of group) groupIndex[groupItem.id] = groupItem;
		const newGroupIds = $checkboxes
			.filter((checkbox) => checkbox.checked)
			.map((checkbox) => checkbox.id);
		if (newGroupIds.length !== group.length)
			group = newGroupIds.map((groupId) => groupIndex[groupId] || item);
	}

	/** @param {Event & { currentTarget: HTMLInputElement }} e */
	function doChange(e) {
		checked = _checked = e.currentTarget.checked;
		item.checked = checked;
		if (Array.isArray(group) && Array.isArray($checkboxes)) {
			updateGroup();
		}
		const detail = { item, e };
		onChange(detail);
		dispatch("change", detail);
	}

	// Track changes to checked from bind:checked outside component
	let _checked = checked ?? false;
	$effect(() => {
		if (_checked !== checked) {
			item.checked = _checked = checked;
		}
	});

	onMount(() => {
		if (Array.isArray(group) && Array.isArray($checkboxes)) {
			const root = el ? findAncestor(el, "ons-checkboxes__items") : null;
			if (root) {
				$checkboxes = [...root.getElementsByTagName("input")];
				updateGroup();
			}
		}
	});

	onDestroy(() => {
		if (Array.isArray(group) && Array.isArray($checkboxes)) {
			$checkboxes = $checkboxes.filter((checkbox) => checkbox.id !== item.id);
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
			{disabled}
			aria-disabled={disabled}
			onchange={doChange}
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
