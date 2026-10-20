<script>
	import { createEventDispatcher } from "svelte";

	/** @type {import("svelte").EventDispatcher<{ change: { value: string | null; e: Event }; input: { value: string | null; e: Event }; blur: { value: string | null; e: Event } }>} */
	const dispatch = createEventDispatcher();

	/** @type {{ id?: string | null; name?: string | null; value?: string | null; label?: string | null; hideLabel?: boolean; description?: string | null; placeholder?: string | null; charLimit?: number | null; width?: number | string | null; prefix?: string | null; suffix?: string | null; unitLabel?: string; pattern?: string | null; numeric?: boolean; readonly?: boolean; disabled?: boolean; error?: boolean; cls?: string | null; onChange?: (detail: { value: string | null; e: Event }) => void; onInput?: (detail: { value: string | null; e: Event }) => void; onBlur?: (detail: { value: string | null; e: Event }) => void }} */
	let {
		id = null,
		name = id,
		value = $bindable(null),
		label = null,
		hideLabel = false,
		description = null,
		placeholder = null,
		charLimit = null,
		width = 20,
		prefix = null,
		suffix = null,
		unitLabel = prefix || suffix || "",
		pattern = null,
		numeric = false,
		readonly = false,
		disabled = false,
		error = false,
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

	/** @param {Event} event */
	function handleChange(event) {
		emitInputEvent("change", event);
	}

	/** @param {Event} event */
	function handleInput(event) {
		emitInputEvent("input", event);
	}

	/** @param {Event} event */
	function handleBlur(event) {
		emitInputEvent("blur", event);
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
	{#if prefix || suffix}
		<span class="ons-input-type" class:ons-input-type--prefix={prefix}>
			<span class="ons-input-type__inner">
				<input
					type="text"
					{id}
					{name}
					bind:value
					{placeholder}
					maxlength={charLimit}
					pattern={pattern ? pattern : numeric ? "[0-9]*" : null}
					inputmode={numeric ? "numeric" : null}
					class="ons-input ons-input--text ons-input-type__input {Number.isInteger(width)
						? `ons-input--w-${width}`
						: ''}"
					style:width={typeof width === "string" ? width : null}
					class:ons-input--error={error}
					aria-labelledby="{id} {id}-unit"
					aria-describedby={description ? `${id}-description-hint` : null}
					{disabled}
					{readonly}
					onchange={handleChange}
					oninput={handleInput}
					onblur={handleBlur}
				/>
				<abbr
					id="{id}-unit"
					class="ons-input-type__type ons-js-input-abbr"
					aria-label={unitLabel}
					role="figure"
					title={unitLabel}>{prefix || suffix}</abbr
				>
			</span>
		</span>
	{:else}
		<input
			type="text"
			{id}
			{name}
			bind:value
			{placeholder}
			pattern={pattern ? pattern : numeric ? "[0-9]*" : null}
			inputmode={numeric ? "numeric" : null}
			class="ons-input ons-input--text ons-input-type__input {Number.isInteger(width)
				? `ons-input--w-${width}`
				: ''}"
			style:width={typeof width === "string" ? width : null}
			class:ons-input--error={error}
			aria-describedby={description ? `${id}-description-hint` : null}
			{disabled}
			{readonly}
			onchange={handleChange}
			oninput={handleInput}
			onblur={handleBlur}
		/>
	{/if}
</div>

<style>
	.ons-input--text {
		width: 100%;
	}
</style>
