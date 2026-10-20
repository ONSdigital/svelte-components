<script>
	import { createEventDispatcher } from "svelte";
	import Radio from "./Radio.svelte";
	/** @type {import("svelte").EventDispatcher<{ change: { value: RadioItem; e: Event } }>} */
	const dispatch = createEventDispatcher();
	/** @typedef {{ id: string; label: string; description?: string | null }} RadioItem */

	/** @type {{ children?: import("svelte").Snippet; title?: string | null; hideTitle?: boolean; id?: string; label?: string | null; value?: RadioItem | null; items?: RadioItem[]; compact?: boolean; cls?: string | null; onChange?: (detail: { value: RadioItem; e: Event }) => void }} */
	let {
		children,
		title = null,
		hideTitle = false,
		id = "radios",
		label = null,
		value = $bindable(null),
		items = [],
		compact = false,
		cls = null,
		onChange = () => {}
	} = $props();

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
