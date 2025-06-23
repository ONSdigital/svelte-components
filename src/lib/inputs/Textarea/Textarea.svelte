<script>
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	/**
	 * ID for &lt;textarea&gt; element
	 * @type {string}
	 */
	export let id = "";
	/**
	 * A prop to bind to for the entered value
	 * @type {string}
	 */
	export let value = "";
	/**
	 * A label to describe the &lt;textarea&gt; element (expected for accessibility)
	 * @type {string}
	 */
	export let label = "Enter some text";
	/**
	 * Visually hide the label
	 * @type {boolean}
	 */
	export let hideLabel = false;
	/**
	 * An optional description to help users know what to enter
	 * @type {string}
	 */
	export let description = "";
	/**
	 * The maximum number of characters that can be entered (optional)
	 * @type {number|null}
	 */
	export let charLimit = null;
	/**
	 * The height of the &lt;textarea&gt; element in rows
	 * @type {number}
	 */
	export let rows = 8;
	/**
	 * The width of the &lt;textarea&gt; element in characters
	 * @type {number}
	 */
	export let width = 30;
	/**
	 * Optional: Set an additional CSS class for the component
	 * @type {string}
	 */
	export let cls = "";

	$: remaining = charLimit && value.length ? charLimit - value.length : charLimit || null;
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
		bind:value
		class="ons-input ons-input--textarea {Number.isInteger(width) ? `ons-input--w-${width}` : null}"
		class:ons-js-char-limit-input={charLimit}
		class:ons-input--limit-reached={remaining === 0}
		name={id}
		{rows}
		maxlength={charLimit}
		data-char-limit-ref="{id}-lim"
		aria-describedby="textarea-char-limit-lim"
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
		background: var(--background, white);
		border-color: currentColor;
	}
	.ons-input--textarea:focus {
		box-shadow:
			0 0 0 1px currentColor,
			0 0 0 4px #fbc900;
	}
</style>
