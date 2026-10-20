<script>
	import { createEventDispatcher } from "svelte";

	/** @type {import("svelte").EventDispatcher<{ change: { value: string | null; e: Event }; input: { value: string | null; e: Event }; blur: { value: string | null; e: Event } }>} */
	const dispatch = createEventDispatcher();

	/** @type {{ id?: string | null; name?: string | null; value?: string | null; label?: string | null; hideLabel?: boolean; description?: string | null; charLimit?: number | null; rows?: number; width?: number; readonly?: boolean; disabled?: boolean; cls?: string | null; onChange?: (detail: { value: string | null; e: Event }) => void; onInput?: (detail: { value: string | null; e: Event }) => void; onBlur?: (detail: { value: string | null; e: Event }) => void }} */
	let {
		id = null,
		name = id,
		value = $bindable(null),
		label = "Enter some text",
		hideLabel = false,
		description = null,
		charLimit = null,
		rows = 8,
		width = 30,
		readonly = false,
		disabled = false,
		cls = null,
		onChange = () => {},
		onInput = () => {},
		onBlur = () => {}
	} = $props();

	let remaining = $derived(
		charLimit && value?.length ? charLimit - value.length : charLimit || null
	);

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
			class="ons-label ons-label--with-description"
			class:ons-u-vh={hideLabel}
			aria-describedby={description ? `${id}-description-hint` : null}
			for={id}>{label}</label
		>
	{/if}
	{#if description}
		<span id="{id}-description-hint" class="ons-label__description ons-input--with-description"
			>{description}</span
		>
	{/if}
	<textarea
		{id}
		{name}
		bind:value
		class="ons-input ons-input--textarea {Number.isInteger(width) ? `ons-input--w-${width}` : null}"
		class:ons-js-char-limit-input={charLimit}
		class:ons-input--limit-reached={remaining === 0}
		{rows}
		maxlength={charLimit}
		data-char-limit-ref="{id}-lim"
		aria-describedby="textarea-char-limit-lim"
		{disabled}
		{readonly}
		oninput={(event) => emitInputEvent("input", event)}
		onchange={(event) => emitInputEvent("change", event)}
		onblur={(event) => emitInputEvent("blur", event)}
	></textarea>
	{#if Number.isInteger(remaining)}
		<span
			id="textarea-char-limit-lim"
			class="ons-input__limit ons-u-fs-s--b ons-u-mt-xs"
			class:ons-input__limit--reached={remaining === 0}
			data-charcount-singular="You have {remaining} character remaining"
			data-charcount-plural="You have {remaining} characters remaining"
			data-charcount-limit-singular=""
			data-charcount-limit-plural=""
			aria-live={remaining === 0 ? "assertive" : "polite"}
		>
			You have {remaining}
			{remaining === 1 ? "character" : "characters"} remaining
		</span>
	{/if}
</div>

<style>
	.ons-input--textarea {
		background: var(--ons-color-page-light);
		border-color: currentColor;
	}
	.ons-input--textarea:focus {
		box-shadow:
			0 0 0 1px currentColor,
			0 0 0 4px #fbc900;
	}
</style>
