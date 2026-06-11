<script>
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	/**
	 * ID for &lt;input&gt; element
	 * @type {string|null}
	 */
	export let id = null;
	/**
	 * Name attribute for &lt;input&gt; element
	 * @type {string|null}
	 */
	export let name = id;
	/**
	 * A prop to bind to for the entered value
	 * @type {string|null}
	 */
	export let value = null;
	/**
	 * A label to describe the &lt;input&gt; element (expected for accessibility)
	 * @type {string|null}
	 */
	export let label = null;
	/**
	 * Visually hide the label
	 * @type {boolean}
	 */
	export let hideLabel = false;
	/**
	 * An optional description to help users know what to enter
	 * @type {string|null}
	 */
	export let description = null;
	/**
	 * The maximum number of characters that can be entered (optional)
	 * @type {string|null}
	 */
	export let placeholder = null;
	/**
	 * A placeholder text for the input (optional)
	 * @type {number|null}
	 */
	export let charLimit = null;
	/**
	 * The width of the &lt;input&gt; in characters or a valid css width string (eg. "100px")
	 * @type {number|string|null}
	 */
	export let width = 20;
	/**
	 * An optional prefix (eg. £) to appear on the left of the input
	 * @type {string|null}
	 */
	export let prefix = null;
	/**
	 * An optional suffix (eg. %) to appear on the right of the input
	 * @type {string|null}
	 */
	export let suffix = null;
	/**
	 * An optional hidden description of the prefix (for accessibility)
	 * @type {string}
	 */
	export let unitLabel = prefix || suffix || "";
	/**
	 * An optional regex pattern foto limit the input (not currently used)
	 * @type {string|null}
	 */
	export let pattern = null;
	/**
	 * Set to `true` if the value should be a number
	 * @type {boolean}
	 */
	export let numeric = false;
	/**
	 * Set to `true` to make the input read-only
	 * @type {boolean}
	 */
	export let readonly = false;
	/**
	 * Set to `true` to give the input a disabled state
	 * @type {boolean}
	 */
	export let disabled = false;
	/**
	 * Set to `true` to highlight border in red
	 * @type {boolean}
	 */
	export let error = false;
	/**
	 * Optional: Set an additional CSS class for the component
	 * @type {string|null}
	 */
	export let cls = null;
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
					on:change={(e) => dispatch("change", { value, e })}
					on:input={(e) => dispatch("input", { value, e })}
					on:blur={(e) => dispatch("blur", { value, e })}
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
			on:change={(e) => dispatch("change", { value, e })}
			on:input={(e) => dispatch("input", { value, e })}
			on:blur={(e) => dispatch("blur", { value, e })}
		/>
	{/if}
</div>

<style>
	.ons-input--text {
		width: 100%;
	}
</style>
