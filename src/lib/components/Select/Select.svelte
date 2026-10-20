<script>
	// @ts-nocheck
	import { onMount, createEventDispatcher } from "svelte";
	import Dropdown from "../Dropdown/Dropdown.svelte";
	import Input from "../Input/Input.svelte";

	/** @type {import("svelte").EventDispatcher<{ change: object | string; clear: null }>} */
	const dispatch = createEventDispatcher();
	const sleep = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));
	const chevron = (opts) =>
		`<svg class="${opts?.className}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 11.75 7.7" width="18" style="z-index:1"><path fill="currentColor" d="m1.37.15 4.5 5.1 4.5-5.1a.37.37 0 0 1 .6 0l.7.7a.45.45 0 0 1 0 .5l-5.5 6.2a.37.37 0 0 1-.6 0l-5.5-6.1a.64.64 0 0 1 0-.6l.7-.7a.64.64 0 0 1 .6 0Z"></path></svg>`;

	let mounted = $state(false);
	let inputElement;
	let accessibleAutocomplete;
	let hideMenu = $state(false);

	/** @type {{ id?: string; name?: string; mode?: "default" | "search"; clearable?: boolean; autoClear?: boolean; autoFocus?: boolean; label?: string | null; hideLabel?: boolean; description?: string | null; placeholder?: string; value?: object | string | null; options?: object[]; labelKey?: string; groupKey?: string | null; renderFallback?: boolean; minLength?: number; loadOptions?: (query: string, populateResults: (results: object[]) => void) => void; clearInput?: () => void; cls?: string | null; onChange?: (value: object | string) => void; onClear?: (value: null) => void }} */
	let {
		id = "autocomplete",
		name = id,
		mode = "default",
		clearable = mode !== "search",
		autoClear = mode === "search",
		autoFocus = false,
		label = mode === "search" ? "Type to select" : "Select an option",
		hideLabel = false,
		description = null,
		placeholder = mode === "search" ? "Enter text" : "Select one",
		value = $bindable(null),
		options = [],
		labelKey = "label",
		groupKey = null,
		renderFallback = false,
		minLength = mode === "search" ? 1 : 0,
		loadOptions = (query, populateResults) => {
			if (mode !== "search" && (!query || options.map((opt) => opt?.[labelKey]).includes(query)))
				populateResults(options);
			else {
				const regex = new RegExp(`\\b${query.replace(/[^\w\s]/gi, "")}`, "i");
				const filteredResults = options.filter((opt) => regex.test(opt?.[labelKey]));
				populateResults(filteredResults);
			}
		},
		clearInput = clearSelection,
		cls = null,
		onChange = () => {},
		onClear = () => {}
	} = $props();

	function clearSelection() {
		value = null;
		onClear(null);
		dispatch("clear", null);
	}

	// This method is a bit of a hack, but no better options available at present
	// https://github.com/alphagov/accessible-autocomplete/issues/390
	async function setInputValue(textValue) {
		hideMenu = true;
		inputElement.value = textValue || "";
		await sleep(110);
		inputElement.focus({ preventScroll: true });
		inputElement.blur();
		hideMenu = false;
	}

	function inputValueTemplate(result) {
		return result?.[labelKey] || result || "";
	}

	function highlight(text, query = "") {
		return typeof text === "string"
			? text.replace(
					new RegExp(`\\b${query.replace(/[^\w\s]/gi, "")}`, "i"),
					(str) => `<b>${str}</b>`
				)
			: "";
	}

	function suggestionTemplate(result) {
		const query = inputElement?.value || "";
		return groupKey && result?.[groupKey]
			? `${highlight(result?.[labelKey] || "", query)} <span class="muted-text">${
					result[groupKey]
				}</span>`
			: highlight(result?.[labelKey] || result || "", query);
	}

	async function select(option) {
		if (option && value !== option) {
			value = option;
			onChange(value);
			dispatch("change", value);
			if (value && autoClear) {
				await sleep(0);
				clearInput();
			}
		}
	}

	function inputChange(e) {
		if (!e.target.value) select(null);
	}

	async function initAutocomplete(element) {
		if (!accessibleAutocomplete)
			accessibleAutocomplete = (await import("accessible-autocomplete")).default;

		accessibleAutocomplete({
			element,
			id,
			name,
			defaultValue: value?.[labelKey] || value || undefined,
			source: loadOptions,
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
		inputElement = element.querySelector(`#${id}`);
		// setInputValue(value?.[labelKey] || "");
		inputElement.addEventListener("blur", inputChange);
		if (autoFocus) inputElement.focus();
	}

	// In case input value is updated from outside component
	function bindInputValue(value) {
		if (inputElement) {
			const textValue = value?.[labelKey];
			if (textValue && inputElement.value !== textValue) setInputValue(textValue);
			else if (!value && inputElement.value) setInputValue("");
		}
	}
	$effect(() => bindInputValue(value));

	onMount(async () => {
		mounted = true;
	});
</script>

{#if renderFallback && !mounted}
	{#if mode === "search"}
		<Input {id} {name} {label} {hideLabel} value={value?.[labelKey]} width={null} />
	{:else}
		<Dropdown {id} {name} {options} {label} {hideLabel} {placeholder} {value} width={null} />
	{/if}
{:else}
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
		<div class="ons-autocomplete-wrapper">
			{#if mounted}
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
						onclick={clearInput}
						class="ons-autocomplete-clear"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							viewBox="0 0 14 14"
							width="18"
						>
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
{/if}

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
