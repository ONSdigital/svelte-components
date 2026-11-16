<script>
	import { createEventDispatcher } from "svelte";

	/** @type {import("svelte").EventDispatcher<{ change: { value: string | null; e: Event }; input: { value: string | null; e: Event }; blur: { value: string | null; e: Event } }>} */
	const dispatch = createEventDispatcher();

	/**
	 * @typedef {Object} Props
	 * @property {string | null} [id] ID for &lt;input&gt; element
	 * @property {string | null} [name] Name attribute for &lt;input&gt; element
	 * @property {string | null} [value] A prop to bind to for the entered value
	 * @property {string | null} [label] A label to describe the &lt;input&gt; element (expected for accessibility)
	 * @property {boolean} [hideLabel] Visually hide the label
	 * @property {string | null} [description] An optional description to help users know what to enter
	 * @property {string | null} [placeholder] The maximum number of characters that can be entered (optional)
	 * @property {number | null} [charLimit] A placeholder text for the input (optional)
	 * @property {number | string | null} [width] The width of the &lt;input&gt; in characters or a valid css width string (eg. "100px")
	 * @property {string | null} [prefix] An optional prefix (eg. £) to appear on the left of the input
	 * @property {string | null} [suffix] An optional suffix (eg. %) to appear on the right of the input
	 * @property {string} [unitLabel] An optional hidden description of the prefix (for accessibility)
	 * @property {string | null} [pattern] An optional regex pattern foto limit the input (not currently used)
	 * @property {boolean} [numeric] Set to `true` if the value should be a number
	 * @property {boolean} [readonly] Set to `true` to make the input read-only
	 * @property {boolean} [disabled] Set to `true` to give the input a disabled state
	 * @property {boolean} [error] Set to `true` to highlight border in red
	 * @property {string | null} [cls] Optional: Set an additional CSS class for the component
	 * @property {(detail: { value: string | null; e: Event }) => void} [onChange] Callback for the `change` event, called with the same value as the event's `detail`
	 * @property {(detail: { value: string | null; e: Event }) => void} [onInput] Callback for the `input` event, called with the same value as the event's `detail`
	 * @property {(detail: { value: string | null; e: Event }) => void} [onBlur] Callback for the `blur` event, called with the same value as the event's `detail`
	 */
	/** @type {Props} */
	let {
		id = null,
		name = id,
		value = $bindable(),
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

	// Defaults for bindable props are set here rather than in $props(): Svelte 5 throws an error if a
	// parent binds a prop that has a default to an undefined variable (eg. `let value = $state()`).
	// Setting them here also writes the default back to the bound variable, as in v1.
	if (value === undefined) value = null;

	/** @param {"change" | "input" | "blur"} type @param {Event} event */
	function emitInputEvent(type, event) {
		const detail = { value: value ?? null, e: event };
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
