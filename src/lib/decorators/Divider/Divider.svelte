<script>
	import Container from "../../wrappers/Container/Container.svelte";

	/**
	 * Optional: Include a horizontal rule
	 * @type {"narrow"|"full"|null}
	 */
	export let hr = "full";
	/**
	 * Sets the width of the container
	 * @type {"narrow"|"medium"|"wide"|"wider"|"full"}
	 */
	export let width = "wide";
	/**
	 * Sets the mode/colour of the line
	 * @type {"dark"|"light"}
	 */
	export let mode = "dark";
	/**
	 * Adds margin above section
	 * @type {boolean}
	 */
	export let marginTop = !!hr;
	/**
	 * Adds margin below section
	 * @type {boolean}
	 */
	export let marginBottom = true;
	/**
	 * Optional: Set an additional CSS class for the component
	 * @type {string}
	 */
	export let cls = "";
</script>

<Container {width} {marginTop} {marginBottom} {cls}>
	<hr
		class="ons-u-mt-no"
		class:ons-u-vh={!hr}
		class:ons-svelte-hr-narrow={hr === "narrow"}
		class:ons-svelte-hr-light={hr && mode === "light"}
	/>
</Container>

<style>
	.ons-svelte-hr-narrow {
		width: 75px;
	}
	.ons-svelte-hr-light {
		border-color: var(--ons-color-borders-light);
	}
</style>
