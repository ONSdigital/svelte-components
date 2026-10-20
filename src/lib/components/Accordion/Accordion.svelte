<script>
	import { onMount, setContext, createEventDispatcher, tick } from "svelte";
	import Accordion from "./accordion.js";
	import Details from "./details.js";
	import { slugify } from "$lib/js/utils.js";

	/** @type {import("svelte").EventDispatcher<{ toggle: { id: string; open: boolean; el: HTMLElement } }>} */
	const dispatch = createEventDispatcher();

	/** @type {{ children?: import("svelte").Snippet; id?: string; cls?: string | null; showToggle?: boolean; onToggle?: (detail: { id: string; open: boolean; el: HTMLElement }) => void }} */
	let { children, id = slugify(), cls = null, showToggle = false, onToggle = () => {} } = $props();

	setContext("dataGroup", () => id);

	onMount(async () => {
		await tick();
		const accordionElement = document.getElementById(id);
		const buttonElement = accordionElement?.querySelector("button.ons-accordion__toggle-all");
		if (!accordionElement || !buttonElement) return;
		const detailsComponents = [...accordionElement.querySelectorAll(".ons-js-details")];
		const detailsEls = detailsComponents.map(
			(detailsElement) =>
				new Details(
					/** @type {HTMLElement} */ (detailsElement),
					(/** @type {{ id: string; open: boolean }} */ data) => {
						const detail = { ...data, el: /** @type {HTMLElement} */ (detailsElement) };
						onToggle(detail);
						dispatch("toggle", detail);
					}
				)
		);
		new Accordion(/** @type {HTMLButtonElement} */ (buttonElement), detailsEls);
	});
</script>

<div {id} class="ons-accordion {cls}">
	<button
		type="button"
		class="ons-btn ons-accordion__toggle-all ons-u-mb-s ons-u-d-no ons-btn--secondary ons-btn--small"
		class:hide-toggle={!showToggle}
		data-close-all="Hide all"
		data-group={id}
	>
		<span class="ons-btn__inner ons-accordion__toggle-all-inner"
			><span class="ons-btn__text">Show all</span></span
		>
	</button>
	{@render children?.()}
</div>

<style>
	button.hide-toggle {
		display: none;
	}
</style>
