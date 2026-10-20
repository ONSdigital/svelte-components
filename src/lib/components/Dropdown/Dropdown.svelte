<script>
	import { createEventDispatcher } from "svelte";

	/** @type {import("svelte").EventDispatcher<{ change: { value: object | string | null; e: Event }; input: { value: object | string | null; e: Event }; blur: { value: object | string | null; e: Event } }>} */
	const dispatch = createEventDispatcher();

	/** @type {{ id?: string | null; name?: string | null; label?: string | null; hideLabel?: boolean; description?: string | null; placeholder?: string; value?: object | string | null; options?: (object | string)[]; width?: number | string | null; cls?: string | null; onChange?: (detail: { value: object | string | null; e: Event }) => void; onInput?: (detail: { value: object | string | null; e: Event }) => void; onBlur?: (detail: { value: object | string | null; e: Event }) => void }} */
	let {
		id = null,
		name = id,
		label = null,
		hideLabel = false,
		description = null,
		placeholder = "Select an option",
		value = $bindable(null),
		options = [],
		width = 20,
		cls = null,
		onChange = () => {},
		onInput = () => {},
		onBlur = () => {}
	} = $props();

	/** @param {"change" | "input" | "blur"} type @param {Event} event */
	function emitInputEvent(type, event) {
		const detail = { value, e: event };
		if (type === "change") onChange(detail);
		else if (type === "input") onInput(detail);
		else onBlur(detail);
		dispatch(type, detail);
	}
</script>

<div class="ons-field {cls}">
	{#if label}
		<label
			class="ons-label"
			class:ons-label--with-description={description}
			class:ons-u-vh={hideLabel}
			aria-describedby={description ? `${id}-description-hint` : null}
			for={id}
		>
			{label}
		</label>
	{/if}
	{#if description}
		<span id="{id}-description-hint" class="ons-label__description ons-input--with-description">
			{description}
		</span>
	{/if}
	<select
		{id}
		{name}
		class="ons-input ons-input--select {Number.isInteger(width) ? `ons-input--w-${width}` : ''}"
		style:width={typeof width === "string" ? width : null}
		bind:value
		onchange={(event) => emitInputEvent("change", event)}
		oninput={(event) => emitInputEvent("input", event)}
		onblur={(event) => emitInputEvent("blur", event)}
	>
		{#if placeholder}
			<option value={null} selected disabled>{placeholder}</option>
		{/if}
		{#each options as option (option)}
			<option value={option}
				>{typeof option === "object" && option !== null && "label" in option
					? option.label
					: option}</option
			>
		{/each}
	</select>
</div>

<style>
	.ons-input--select {
		width: 100%;
	}
</style>
