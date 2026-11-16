<script>
	import Container from "$lib/components/Container/Container.svelte";

	/**
	 * @typedef {Object} Props
	 * @property {"narrow" | "full" | null} [hr] Optional: Include a horizontal rule
	 * @property {"narrow" | "medium" | "wide" | "wider" | "full"} [width] Sets the width of the container
	 * @property {"dark" | "light"} [mode] Sets the mode/colour of the line
	 * @property {boolean} [marginTop] Adds margin above section
	 * @property {boolean} [marginBottom] Adds margin below section
	 * @property {string | null} [cls] Optional: Set an additional CSS class for the component
	 */
	/** @type {Props} */
	let {
		hr = "full",
		width = "wide",
		mode = "dark",
		marginTop = !!hr,
		marginBottom = true,
		cls = null
	} = $props();
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
