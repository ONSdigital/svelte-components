<script>
	import { onMount, onDestroy, getContext } from "svelte";
	import Container from "$lib/components/Container/Container.svelte";

	/**
	 * @typedef {Object} Props
	 * @property {string|null} [id] - Sets the unique ID of the section (identifiable in associated scroll events)
	 * @property {string|null} [title] - Optional: Sets the title of the section
	 * @property {boolean} [hideTitle] - Allows the h2 title tag for the section to be visually hidden
	 * @property {string|null} [cls] - Optional: Set an additional CSS class for the component
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { id = null, title = null, hideTitle = false, cls = null, children } = $props();

	let section = $state();

	/** @type {import("svelte/store").Writable<HTMLElement[]>} */
	const sections = getContext("sections");
	const isSplit = getContext("isSplit");

	onMount(() => {
		if (sections) {
			$sections = [...$sections, section];
		}
	});

	onDestroy(() => {
		if (sections) {
			$sections = $sections.filter((s) => s !== section);
		}
	});
</script>

<section data-id={id} bind:this={section} class={cls}>
	<Container width={$isSplit ? "wider" : "narrow"}>
		<div class="ons-scroller-section">
			{#if title}
				<h2 class="section-title" class:ons-u-vh={hideTitle}>{title}</h2>
			{/if}
			{@render children?.()}
		</div>
	</Container>
</section>

<style>
	.ons-scroller-section {
		position: relative;
	}
	.ons-scroller-section::after {
		content: " ";
		position: absolute;
		z-index: -1;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: -1rem;
		background: var(--ons-color-page-light);
		opacity: 90%;
	}
</style>
