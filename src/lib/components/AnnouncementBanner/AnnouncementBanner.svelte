<script>
	import Container from "$lib/components/Container/Container.svelte";

	/**
	 * Optional: Set an additional CSS class for the section
	 * @type {string|null}
	 */
	export let cls = null;
	/**
	 * Sets the title of the banner (required)
	 * @type {string}
	 */
	export let title;
	/**
	 * Sets the text content of the banner (required)
	 * @type {string}
	 */
	export let description;
	/**
	 * Sets the variant/colour of the banner
	 * @type {"black"|"red"|"teal"}
	 */
	export let variant = "teal";
	/**
	 * Sets the text content of the banner
	 * @type {string|null}
	 */
	export let linkHref = null;
	/**
	 * Sets the text content of the banner
	 * @type {string|null}
	 */
	export let linkText = null;
	/**
	 * Adds margin above section
	 * @type {boolean}
	 */
	export let marginTop = false;
	/**
	 * Adds margin below section
	 * @type {boolean}
	 */
	export let marginBottom = false;
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
