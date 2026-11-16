<script>
	import { slugify } from "../../js/utils.js";
	import Container from "$lib/components/Container/Container.svelte";

	/**
	 * @typedef {Object} Props
	 * @property {import("svelte").Snippet} [children] Child content (snippet)
	 * @property {string | null} [id] Sets the unique ID of the section
	 * @property {string | null} [cls] Optional: Set an additional CSS class for the section
	 * @property {"narrow" | "medium" | "wide" | "wider" | "full"} [width] Sets the width of the container
	 * @property {number | string | null} [height] Sets the (minimum) height of the container
	 * @property {string | null} [title] Sets the title of the section
	 * @property {boolean} [hideTitle] Allows the h2 title tag for the section to be visually hidden
	 * @property {boolean} [marginTop] Adds margin above section
	 * @property {boolean} [marginBottom] Adds margin below section
	 */
	/** @type {Props} */
	let {
		children,
		id = null,
		cls = null,
		width = "narrow",
		height = null,
		title = null,
		hideTitle = false,
		marginTop = false,
		marginBottom = true
	} = $props();
</script>

<Container id={id ? id : slugify(title)} {cls} {width} {height} {marginTop} {marginBottom}>
	<section aria-label={title} class="ons-section__text">
		{#if title}
			<h2 class="section-title" class:ons-u-vh={hideTitle}>{title}</h2>
		{/if}
		{@render children?.()}
	</section>
</Container>

<style>
	.ons-section__text > :global(*:last-child) {
		margin-bottom: 0;
	}
</style>
