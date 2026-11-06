<script>
	import Container from "$lib/components/Container/Container.svelte";

	/**
	 * @typedef {Object} Props
	 * @property {string|null} [cls] - Optional: Set an additional CSS class for the section
	 * @property {string} title - Sets the title of the banner (required)
	 * @property {string} description - Sets the text content of the banner (required)
	 * @property {"black"|"red"|"teal"} [variant] - Sets the variant/colour of the banner
	 * @property {string|null} [linkHref] - Sets the text content of the banner
	 * @property {string|null} [linkText] - Sets the text content of the banner
	 * @property {boolean} [marginTop] - Adds margin above section
	 * @property {boolean} [marginBottom] - Adds margin below section
	 */

	/** @type {Props} */
	let {
		cls = null,
		title,
		description,
		variant = "teal",
		linkHref = null,
		linkText = null,
		marginTop = false,
		marginBottom = false
	} = $props();
</script>

<Container {cls} width="full" {marginTop} {marginBottom}>
	<div class="ons-announcement-banner__container ons-announcement-banner--{variant}">
		<div class="ons-container">
			<div class="ons-announcement-banner ons-announcement-banner--{variant}">
				<h2 class="ons-announcement-banner__title">{title}</h2>
				<p class="ons-announcement-banner__description">{description}</p>
				{#if linkHref}
					<a class="ons-announcement-banner__link" href={linkHref}>
						{linkText || linkHref.replace("https://", "")}
					</a>
				{/if}
			</div>
		</div>
	</div>
</Container>

<style>
	.ons-section__text > :global(*:last-child) {
		margin-bottom: 0;
	}
</style>
