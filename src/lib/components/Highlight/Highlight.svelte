<script>
	import Container from "$lib/components/Container/Container.svelte";

	/**
	 * @typedef {Object} Props
	 * @property {string|null} [id] - Optional: Set the unique ID of the section
	 * @property {string|null} [cls] - Optional: Set an additional CSS class for the section
	 * @property {boolean} [bigText] - Applies a larger default text size (by default)
	 * @property {"narrow"|"medium"|"wide"|"wider"|"full"} [width] - Sets the width of the container
	 * @property {number|string|null} [height] - Sets the (minimum) height of the container
	 * @property {"light"|"dark"|"paleblue"|"blue"|"navyblue"|"grey"|null} [theme] - Sets a predefined theme
	 * @property {Record<string, string>} [themeOverrides] - Define additional props to override the base theme
	 * @property {string|null} [background] - Overrides the background CSS for the section
	 * @property {boolean} [marginTop] - Adds margin above section
	 * @property {boolean} [marginBottom] - Adds margin below section
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let {
		id = null,
		cls = null,
		bigText = true,
		width = "narrow",
		height = null,
		theme = "paleblue",
		themeOverrides = {},
		background = null,
		marginTop = false,
		marginBottom = true,
		children
	} = $props();
</script>

<Container {id} {cls} {width} {marginTop} {marginBottom} {theme} {themeOverrides} {background}>
	<section
		class="ons-section__highlight ons-u-mt-xl ons-u-mb-xl"
		class:ons-u-fs-l={bigText}
		style:height={typeof height === "number" ? `${height}px` : height === "full" ? "100vh" : height}
	>
		<div>
			{@render children?.()}
		</div>
	</section>
</Container>

<style>
	.ons-section__highlight {
		display: flex;
		align-items: center;
		height: 100%;
	}
	.ons-section__highlight > div > :global(p:last-of-type) {
		margin-bottom: 0;
	}
</style>
