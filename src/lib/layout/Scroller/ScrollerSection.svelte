<script>
	import { onMount, onDestroy, getContext } from "svelte";
	import Container from "$lib/wrappers/Container/Container.svelte";

	/**
	 * Sets the unique ID of the section (identifiable in associated scroll events)
	 * @type {string}
	 */
	export let id = "";
	/**
	 * Optional: Sets the title of the section
	 * @type {string}
	 */
	export let title = "";
	/**
	 * Allows the h2 title tag for the section to be visually hidden
	 * @type {boolean}
	 */
	export let hideTitle = false;
	/**
	 * Optional: Set an additional CSS class for the component
	 * @type {string}
	 */
	export let cls = "";

	let section;

	const sections = getContext("sections");

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
	<Container width="narrow">
		<div class="ons-scroller-section">
			{#if title}
				<h2 class="section-title" class:ons-u-vh={hideTitle}>{title}</h2>
			{/if}
			<slot />
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
