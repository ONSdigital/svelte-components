<script>
	// @ts-nocheck

	import { onMount, createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();
	const sleep = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));
	const chevron = (opts) =>
		`<svg class="${opts?.className}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 11.75 7.7" width="18" style="z-index:1"><path fill="currentColor" d="m1.37.15 4.5 5.1 4.5-5.1a.37.37 0 0 1 .6 0l.7.7a.45.45 0 0 1 0 .5l-5.5 6.2a.37.37 0 0 1-.6 0l-5.5-6.1a.64.64 0 0 1 0-.6l.7-.7a.64.64 0 0 1 .6 0Z"></path></svg>`;

	let inputElement;
	let scriptLoaded;
	let accessibleAutocomplete;
	let hideMenu = false;

	/**
	 * Unique id for the element
	 * @type {string}
	 */
	export let id = "autocomplete";
	/**
	 * The mode can be either "default" or "search"
	 * @type {"default"|"search"}
	 */
	export let mode = "default";
	/**
	 * Defines whether the selection can be cleared
	 * @type {boolean}
	 */
	export let clearable = mode !== "search";
	/**
	 * Clear value on selection (default for "search" mode)
	 * @type {boolean}
	 */
	export let autoClear = mode === "search";
	/**
	 * A label to describe the element (expected for accessibility)
	 * @type {string}
	 */
	export let label = mode === "search" ? "Type to select" : "Select an option";
	/**
	 * Visually hide the label
	 * @type {boolean}
	 */
	export let hideLabel = false;
	/**
	 * An optional placeholder text
	 * @type {string}
	 */
	export let placeholder = mode === "search" ? "Enter text" : "Select one";
	/**
	 * A prop to bind to for the selected value
	 * @type {object}
	 */
	export let value = null;
	/**
	 * An array of options, formatted {id, label}
	 * @type {array}
	 */
	export let options = [];
	/**
	 * The attribute of an option that defines its label/name
	 * @type {string}
	 */
	export let labelKey = "label";
	/**
	 * The attribute of an option that defines its group (optional)
	 * @type {string}
	 */
	export let groupKey = "";
	/**
	 * Optional: Minimum query length to return results
	 * @type {number}
	 */
	export let minLength = mode === "search" ? 1 : 0;
	/**
	 * Optional: Override function for loading/filtering options based on the entered text
	 * @type {function}
	 */
	export let loadOptions = (query, populateResults) => {
		const filteredResults =
			mode !== "search" && options.map((opt) => opt[labelKey]).includes(query)
				? options
				: options.filter((opt) =>
						opt[labelKey].match(new RegExp(`\\b${query.replace(/[^\w\s]/gi, "")}`, "i"))
					);
		populateResults(filteredResults);
	};
	/**
	 * Optional: Override the default CDN URL for the accessible-autocomplete script
	 * @type {string}
	 */
	export let scriptUrl =
		"https://cdn.ons.gov.uk/vendor/accessible-autocomplete/3.0.1/accessible-autocomplete.min.js";

	// This clearing method is a bit of a hack, but no better options available at present
	// https://github.com/alphagov/accessible-autocomplete/issues/390
	/**
	 * Call this function externally to clear the input
	 * @type {function}
	 */
	export async function clearInput() {
		hideMenu = true;
		inputElement.value = "";
		await sleep(110);
		inputElement.focus({ preventScroll: true });
		inputElement.blur();
		hideMenu = false;
		dispatch("clear", value);
	}
	/**
	 * Optional: Set an additional CSS class for the component
	 * @type {string}
	 */
	export let cls = "";

	function inputValueTemplate(result) {
		return result && result[labelKey];
	}

	function highlight(text, query = "") {
		return text.replace(
			new RegExp(`\\b${query.replace(/[^\w\s]/gi, "")}`, "i"),
			(str) => `<b>${str}</b>`
		);
	}

	function suggestionTemplate(result) {
		const query = inputElement?.value || "";
		return (
			result &&
			(groupKey
				? `${highlight(result?.[labelKey] || "", query)} <span class="muted-text">${
						result[groupKey]
					}</span>`
				: highlight(result?.[labelKey] || "", query))
		);
	}

	async function select(option) {
		value = option;
		dispatch("change", value);
		if (value && autoClear) {
			await sleep(0);
			clearInput();
		}
	}

	function inputChange(e) {
		if (!e.target.value) select(null);
	}

	function handleScriptLoad() {
		if (!scriptLoaded && window?.accessibleAutocomplete) {
			accessibleAutocomplete = window.accessibleAutocomplete;
			scriptLoaded = true;
		}
	}

	function initAutocomplete(element) {
		accessibleAutocomplete({
			element,
			id,
			name: `${id}-input`,
			source: loadOptions,
			defaultValue: value?.[labelKey] || "",
			autoselect: true,
			onConfirm: select,
			confirmOnBlur: false,
			placeholder,
			displayMenu: "overlay",
			showAllValues: mode === "default",
			dropdownArrow: chevron,
			minLength,
			templates: {
				inputValue: inputValueTemplate,
				suggestion: suggestionTemplate
			}
		});
		inputElement = document.getElementById(id);
		inputElement.addEventListener("blur", inputChange);
	}

	onMount(handleScriptLoad);
</script>

<svelte:head>
	<script src={scriptUrl} on:load={handleScriptLoad}></script>
</svelte:head>

<div class="ons-field {cls}">
	{#if label}<label for={id} class="ons-label" class:ons-u-vh={hideLabel}>{label}</label>{/if}
	<div class="ons-autocomplete-wrapper">
		{#if scriptLoaded}
			<div
				id="{id}-container"
				class="ons-autocomplete"
				class:hide-menu={hideMenu}
				use:initAutocomplete
			></div>
			{#if clearable && !autoClear && value}
				<button
					type="reset"
					title="Clear selection"
					aria-label="Clear selection"
					on:click={clearInput}
					class="ons-autocomplete-clear"
				>
					<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14" width="18">
						<path
							fill="currentColor"
							d="M13.6 1 l -0.71 -0.71 a 0.5 0.5 0 0 0 -0.71 0 l -5.25 5.25 l -5.25 -5.25 a 0.51 0.51 0 0 0 -0.71 0 l -0.71 0.71 a 0.5 0.5 0 0 0 0 0.71 l 5.25 5.25 l -5.25 5.25 a 0.5 0.5 0 0 0 0 0.71 l 0.71 0.71 a 0.5 0.5 0 0 0 0.71 0 l 5.25 -5.25 l 5.25 5.25 a 0.5 0.5 0 0 0 0.71 0 l 0.71 -0.71 a 0.5 0.5 0 0 0 0 -0.71 l -5.25 -5.25 l 5.25 -5.25 a 0.5 0.5 0 0 0 0 -0.71Z"
						></path>
					</svg>
				</button>
			{/if}
		{/if}
	</div>
</div>

<style>
	.ons-autocomplete-wrapper {
		position: relative;
	}
	.ons-autocomplete-clear {
		position: absolute;
		display: flex;
		align-items: center;
		align-content: center;
		z-index: 1;
		right: 3px;
		top: calc(50% - 14px);
		height: 28px;
		width: 28px;
		border: none;
		background: var(--ons-color-input-bg, white);
	}
	.ons-autocomplete-clear:focus {
		outline: 3px solid var(--ons-color-focus, #fbc900) !important;
	}
	.hide-menu :global(.autocomplete__menu) {
		display: none;
	}
	.ons-autocomplete :global(.autocomplete__input) {
		border-radius: 3px !important;
		border-width: 1px !important;
		background: var(--ons-color-input-bg, white);
	}
	.ons-autocomplete :global(.autocomplete__input--focused) {
		box-shadow: inset 0 0 0 1px black !important;
		outline-color: var(--ons-color-focus, #fbc900) !important;
	}
	.ons-autocomplete :global(.autocomplete__dropdown-arrow-down) {
		width: 18px !important;
		transform: translateY(-2px);
	}
	.ons-autocomplete :global(.muted-text) {
		opacity: 0.8;
		font-size: smaller;
	}
	.ons-autocomplete-wrapper :global(*) {
		font-size: 18px;
	}
	.ons-autocomplete-wrapper :global(.autocomplete__hint),
	.ons-autocomplete-wrapper :global(.autocomplete__input) {
		height: 40px;
	}
	.ons-autocomplete-wrapper :global(.autocomplete__option) {
		margin: 0;
	}
	.ons-autocomplete-wrapper :global(.autocomplete__menu) {
		transform: translateY(5px);
		border: 1px solid currentColor;
		border-radius: 3px;
	}
	.ons-autocomplete-wrapper :global(.autocomplete__option--focused),
	.ons-autocomplete-wrapper :global(.autocomplete__option:hover) {
		background-color: var(--ons-color-branded-secondary, #003c57);
	}
	.ons-autocomplete-wrapper :global(.autocomplete__option:focus) {
		outline: none !important;
	}
	.ons-autocomplete-wrapper :global(input) {
		padding: 0 35px 0 8px;
	}
</style>
