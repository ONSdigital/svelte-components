<script>
	import GridCell from "../Grid/GridCell.svelte";

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
	 * Sets the title of the card
	 * @type {string}
	 */
	export let title = "";
	/**
	 * Allows the h2 title tag for the card to be visually hidden
	 * @type {boolean}
	 */
	export let hideTitle = false;
	/**
	 * Set the heading level for the card titles
	 * @type {"h2"|"h3"}
	 */
	export let headingTag = "h2";
	/**
	 * Setting mode to "featured" creates an inset card on a grey background
	 * @type {"default"|"featured"}
	 */
	export let mode = "default";
	/**
	 * Include a border at the bottom of the card
	 * @type {boolean}
	 */
	export let baseline = false;
	/**
	 * Optional: URL for title/image link
	 * @type {string}
	 */
	export let href = "";
	/**
	 * Optional: URL for image
	 * @type {string}
	 */
	export let image = "";
	/**
	 * Optional: Alt text for image
	 * @type {string}
	 */
	export let imageAlt = "";
	/**
	 * (If used in grid) How many columns the card should span across
	 * @type {number}
	 */
	export let colspan = 1;
</script>

<GridCell {colspan}>
	<div
		class="ons-card ons-u-mb-no {cls}"
		class:ons-card--feature={mode === "featured"}
		class:ons-u-p-l={mode === "featured"}
		class:ons-card--baseline={baseline}
	>
		{#if href}
			<a {href} class="ons-card__link">
				<slot name="image">
					{#if image}
						<img
							class="ons-card__image ons-u-mb-s"
							class:ons-card__image-expand={mode === "featured"}
							src={image}
							alt={imageAlt}
							loading="lazy"
						/>
					{/if}
				</slot>
				<slot name="title">
					{#if title && headingTag === "h3"}
						<h3 {id} class="ons-card__title ons-u-fs-m" class:ons-u-vh={hideTitle}>{title}</h3>
					{:else if title}
						<h2 {id} class="ons-card__title ons-u-fs-m" class:ons-u-vh={hideTitle}>{title}</h2>
					{/if}
				</slot>
			</a>
		{:else}
			{#if image}
				<img
					class="ons-card__image ons-u-mb-s"
					class:ons-card__image-expand={mode === "featured"}
					src={image}
					alt={imageAlt}
					loading="lazy"
				/>
			{/if}
			{#if title && headingTag === "h3"}
				<h3 {id} class="ons-card__title ons-u-fs-m" class:ons-u-vh={hideTitle}>{title}</h3>
			{:else if title}
				<h2 {id} class="ons-card__title ons-u-fs-m" class:ons-u-vh={hideTitle}>{title}</h2>
			{/if}
		{/if}
		<p id="text1">
			<slot />
		</p>
	</div>
</GridCell>

<style>
	.ons-card {
		height: 100%;
	}
	.ons-card__image {
		width: 100%;
	}
	.ons-card__image-expand {
		margin: -1.5rem -1.5rem 0;
		width: calc(100% + 3rem);
		max-width: calc(100% + 3rem);
	}
	.ons-card > :global(p:last-of-type) {
		margin-bottom: 0;
	}
	.ons-card--baseline {
		border-bottom: 2px solid var(--ons-color-borders-light);
	}
</style>
