<script>
	import { setContext } from "svelte";
	import Container from "$lib/wrappers/Container/Container.svelte";

	/**
	 * Optional: Sets the unique ID of the section
	 * @type {string}
	 */
	export let id = "";
	/**
	 * Optional: Set an additional CSS class for the component
	 * @type {string}
	 */
	export let cls = "";
	/**
	 * Sets the width of the section
	 * @type {"narrow"|"medium"|"wide"|"wider"|"full"}
	 */
	export let width = "wide";
	/**
	 * Sets the title of the section
	 * @type {string}
	 */
	export let title = "";
	/**
	 * Allows the h2 title tag for the section to be visually hidden
	 * @type {boolean}
	 */
	export let hideTitle = false;
	/**
	 * Optional: Caption for the grid (if used as a media container, eg. for an image)
	 * @type {string}
	 */
	export let caption = "";
	/**
	 * Adds margin above section
	 * @type {boolean}
	 */
	export let marginTop = false;
	/**
	 * Adds margin below section
	 * @type {boolean}
	 */
	export let marginBottom = true;
	/**
	 * Sets the width of the columns
	 * @type {"narrow"|"medium"|"wide"|"full"}
	 */
	export let colWidth = "medium";
	/**
	 * Set the minimum height of a grid row (can be a number in pixels, or a valid CSS height)
	 * @type {number|string|null}
	 */
	export let rowHeight = null;
	/**
	 * Stretch the height of grid cells to match their  siblings
	 * @type {boolean}
	 */
	export let rowStretch = true;
	/**
	 * Set the grid gap, in pixels
	 * @type {"narrow"|"medium"|"wide"|"none"}
	 */
	export let gridGap = "medium";

	setContext("width", width);
	setContext("colWidth", colWidth);
	setContext("rowHeight", rowHeight);
	setContext("gridGap", gridGap);
</script>

<Container {id} {cls} {width} {marginTop} {marginBottom}>
	{#if title}
		<h2 class="section-title" class:ons-u-vh={hideTitle}>{title}</h2>
	{/if}
	{#if caption}
		<figure class="ons-svelte-grid-container">
			<div
				class="ons-grid ons-grid--spaced"
				class:ons-grid--gutterless={gridGap === "none"}
				class:ons-grid--tight={gridGap === "narrow"}
				class:ons-grid--loose={gridGap === "wide"}
				class:ons-grid--stretch={rowStretch}
			>
				<slot />
			</div>
			<figcaption class="ons-image__caption">{caption}</figcaption>
		</figure>
	{:else}
		<div
			class="ons-grid ons-grid--spaced"
			class:ons-grid--gutterless={gridGap === "none"}
			class:ons-grid--tight={gridGap === "narrow"}
			class:ons-grid--loose={gridGap === "wide"}
			class:ons-grid--stretch={rowStretch}
		>
			<slot />
		</div>
	{/if}
</Container>

<style>
	/* This removes the default margins of the <figure> element */
	.ons-svelte-grid-container {
		margin: 0;
	}
	/* This is to allow this flex property without ons-grid--flex which breaks other things */
	.ons-grid--stretch {
		display: flex;
		flex-wrap: wrap;
		align-items: stretch;
	}
	/* This allows the grid to be used as a media container without any columns */
	.ons-grid > :global(*:not(.ons-grid__col)) {
		margin-left: 1rem;
	}
</style>
