<script>
	import Container from "$lib/wrappers/Container/Container.svelte";

	/**
	 * Optional: Set the unique ID of the section
	 * @type {string}
	 */
	export let id = "";
	/**
	 * Optional: Set an additional CSS class for the section
	 * @type {string}
	 */
	export let cls = "";
	/**
	 * Applies a larger default text size (by default)
	 * @type {boolean}
	 */
	export let bigText = true;
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
	 * Sets a predefined theme
	 * @type {"light"|"dark"|"paleblue"|"blue"|"navyblue"|"grey"|null}
	 */
	export let theme = "paleblue";
	/**
	 * Define additional props to override the base theme
	 * @type {object}
	 */
	export let themeOverrides = {};
	/**
	 * Overrides the background CSS for the section
	 * @type {string|null}
	 */
	export let background = null;
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

<Container {id} {cls} {width} {marginTop} {marginBottom} {theme} {themeOverrides} {background}>
	<section
		class="ons-section__highlight ons-u-mt-xl ons-u-mb-xl"
		class:ons-u-fs-l={bigText}
		style:height={typeof height === "number" ? `${height}px` : height === "full" ? "100vh" : height}
	>
		<div>
			<slot />
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
