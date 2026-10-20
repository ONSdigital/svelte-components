<script>
	import { createEventDispatcher, setContext } from "svelte";
	import { writable } from "svelte/store";
	import Checkbox from "../Checkbox/Checkbox.svelte";
	/** @typedef {{ id: string; label: string; description?: string | null; checked?: boolean; disabled?: boolean }} CheckboxItem */

	/** @type {import("svelte").EventDispatcher<{ change: { item: CheckboxItem; e: Event } }>} */
	const dispatch = createEventDispatcher();

	/** @type {{ children?: import("svelte").Snippet; title?: string | null; hideTitle?: boolean; label?: string | null; items?: CheckboxItem[] | null; compact?: boolean; value?: CheckboxItem[]; cls?: string | null; onChange?: (detail: { item: CheckboxItem; e: Event }) => void }} */
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
