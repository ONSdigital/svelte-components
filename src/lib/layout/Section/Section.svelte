<script>
	import { slugify } from "../../js/utils.js";
	import Container from "../../wrappers/Container/Container.svelte";

	/**
	 * Sets the unique ID of the section
	 * @type {string}
	 */
	export let id = "";
	/**
	 * Optional: Set an additional CSS class for the section
	 * @type {string}
	 */
	export let cls = "";
	/**
	 * Sets the width of the container
	 * @type {"narrow"|"medium"|"wide"|"wider"|"full"}
	 */
	export let width = "narrow";
	/**
	 * Sets the (minimum) height of the container
	 * @type {number|string|null}
	 */
	export let height = null;
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
	 * Adds margin above section
	 * @type {boolean}
	 */
	export let marginTop = false;
	/**
	 * Adds margin below section
	 * @type {boolean}
	 */
	export let marginBottom = true;
</script>

<Container id={id ? id : slugify(title)} {cls} {width} {height} {marginTop} {marginBottom}>
	<section aria-label={title} class="ons-section__text">
		{#if title}
			<h2 class="section-title" class:ons-u-vh={hideTitle}>{title}</h2>
		{/if}
		<slot />
	</section>
</Container>

<style>
	.ons-section__text > :global(p:last-of-type) {
		margin-bottom: 0;
	}
</style>
