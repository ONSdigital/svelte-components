<script>
	import { onMount, setContext, createEventDispatcher } from "svelte";
	import { writable } from "svelte/store";
	import { sleep } from "$lib/js/utils.js";
	import Tabs from "./tabs.js";

	const dispatch = createEventDispatcher();

	/**
	 * Make tabs smaller/more compact
	 * @type {boolean}
	 */
	export let compact = false;
	/**
	 * Include a border around the tab panel
	 * @type {boolean}
	 */
	export let border = false;
	/**
	 * The ID of selected tab (for binding)
	 * @type {string|null}
	 */
	export let selected = null;
	/**
	 * Optional: Set an additional CSS class for the component
	 * @type {string}
	 */
	export let cls = "";

	let el;

	const sections = writable([]);
	setContext("sections", sections);

	function updateSelection(id) {
		selected = id;
		dispatch("change", { id });
	}

	onMount(async () => {
		await sleep(0);
		new Tabs(el);
		selected = $sections?.[0]?.id;
	});
</script>

<section
	class="ons-tabs {cls}"
	class:ons-tabs__border={border}
	class:ons-tabs__compact={compact}
	bind:this={el}
>
	<h2 class="ons-tabs__title ons-u-fs-r--b ons-u-mt-no ons-u-fs-m ons-u-vh">Contents</h2>
	<div class="ons-tabs__container">
		<ul class="ons-tabs__list ons-tabs__list--row" role="tablist">
			{#each $sections as section}
				<li class="ons-tab__list-item ons-tab__list-item--row" role="presentation">
					<a
						on:click={() => updateSelection(section.id)}
						href="#{section.id}"
						class="ons-tab ons-tab--row"
						id="tab_{section.id}"
						role="tab"
						aria-controls={section.id}>{section.dataset.title}</a
					>
				</li>
			{/each}
		</ul>
	</div>
	<slot />
</section>

<style>
	/* css to extend display options compared to design system */
	.ons-tabs__compact .ons-tab--row {
		font-size: 16px;
		height: 2.2rem;
		padding: 0.1rem 0.75rem;
	}
	.ons-tabs__border .ons-tabs__container {
		border: none;
	}
	.ons-tabs__border :global(.ons-tabs__panel) {
		border: 1px solid var(--ons-color-borders);
		border-radius: 0 3px 3px 3px;
		padding-left: 12px;
		padding-right: 12px;
	}
</style>
