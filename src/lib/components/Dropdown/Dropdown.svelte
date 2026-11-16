<script>
	import { createEventDispatcher } from "svelte";

	/** @type {import("svelte").EventDispatcher<{ change: { value: object | string | null; e: Event }; input: { value: object | string | null; e: Event }; blur: { value: object | string | null; e: Event } }>} */
	const dispatch = createEventDispatcher();

	/**
	 * @typedef {Object} Props
	 * @property {string | null} [id] Unique id for the &lt;select&gt; element
	 * @property {string | null} [name] Name for the &lt;select&gt; element
	 * @property {string | null} [label] A label to describe the &lt;select&gt; element (expected for accessibility)
	 * @property {boolean} [hideLabel] Visually hide the label
	 * @property {string | null} [description] An optional description to help users know what to enter
	 * @property {string} [placeholder] An optional placeholder text
	 * @property {object | string | null} [value] A prop to bind to for the selected value
	 * @property {(object | string)[]} [options] An array of options, formatted {id, label}
	 * @property {number | string | null} [width] The width of the &lt;input&gt; in characters or a valid css width string (eg. "100px")
	 * @property {string | null} [cls] Optional: Set an additional CSS class for the component
	 * @property {(detail: { value: object | string | null; e: Event }) => void} [onChange] Callback for the `change` event, called with the same value as the event's `detail`
	 * @property {(detail: { value: object | string | null; e: Event }) => void} [onInput] Callback for the `input` event, called with the same value as the event's `detail`
	 * @property {(detail: { value: object | string | null; e: Event }) => void} [onBlur] Callback for the `blur` event, called with the same value as the event's `detail`
	 */
	/** @type {Props} */
	let {
		id = null,
		name = id,
		label = null,
		hideLabel = false,
		description = null,
		placeholder = "Select an option",
		value = $bindable(),
		options = [],
		width = 20,
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
