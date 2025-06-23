<script>
	import { onMount, setContext } from "svelte";
	import Accordion from "./accordion.js";
	import Details from "./details.js";
	import { slugify, sleep } from "$lib/js/utils.js";

	/**
	 * Optional: Set the unique ID of the accordion
	 * @type {string}
	 */
	export let id = slugify();
	/**
	 * Optional: Set an additional CSS class for the component
	 * @type {string}
	 */
	export let cls = "";
	/**
	 * Option to include a "show all" toggle above the accordion
	 * @type {boolean}
	 */
	export let showToggle = false;

	let el, buttonEl;

	setContext("dataGroup", id);

	onMount(async () => {
		await sleep(0);
		const detailsComponents = [...el.querySelectorAll(".ons-js-details")];
		const detailsEls = detailsComponents.map((element) => new Details(element));
		new Accordion(buttonEl, detailsEls);
	});
</script>

<div {id} class="ons-accordion {cls}" bind:this={el}>
	{#if showToggle}
		<button
			type="button"
			class="ons-btn ons-accordion__toggle-all ons-u-mb-s ons-u-d-no ons-btn--secondary ons-btn--small"
			class:hide-toggle={!showToggle}
			data-close-all="Hide all"
			data-group={id}
			bind:this={buttonEl}
		>
			<span class="ons-btn__inner ons-accordion__toggle-all-inner"
				><span class="ons-btn__text">Show all</span></span
			>
		</button>
	{/if}
	<slot />
</div>

<style>
	button.hide-toggle {
		display: none;
	}
</style>
