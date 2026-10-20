<script>
	import { onMount, setContext, createEventDispatcher } from "svelte";
	import { writable } from "svelte/store";
	import { sleep } from "$lib/js/utils.js";
	import Tabs from "./tabs.js";

	/** @type {import("svelte").EventDispatcher<{ change: { id: string } }>} */
	const dispatch = createEventDispatcher();

	/** @type {{ children?: import("svelte").Snippet; compact?: boolean; border?: boolean; selected?: string | null; cls?: string | null; onChange?: (detail: { id: string }) => void }} */
	let {
		children,
		compact = false,
		border = false,
		selected = $bindable(null),
		cls = null,
		onChange = () => {}
	} = $props();

	/** @type {HTMLElement | undefined} */
	/** @type {HTMLElement | undefined} */
	let el;
	/** @type {import("svelte/store").Writable<HTMLElement[]>} */
	const sections = writable([]);
	setContext("sections", sections);

	/** @param {string} id */
	function updateSelection(id) {
		selected = id;
		const detail = { id };
		onChange(detail);
		dispatch("change", detail);
	}

	onMount(async () => {
		await sleep(0);
		if (!el) return;
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
			{#each $sections as section (section.id)}
				<li class="ons-tab__list-item ons-tab__list-item--row" role="presentation">
					<a
						onclick={() => updateSelection(section.id)}
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
	{@render children?.()}
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
