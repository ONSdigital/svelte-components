<script>
	import GridCell from "../Grid/GridCell.svelte";

	/**
	 * @typedef {Object} Props
	 * @property {import("svelte").Snippet} [children] Child content (snippet)
	 * @property {import("svelte").Snippet} [imageContent] Custom image content, used instead of the `image` prop (snippet)
	 * @property {import("svelte").Snippet} [titleContent] Custom title content, used instead of the `title` prop (snippet)
	 * @property {string | null} [id] Sets the unique ID of the section
	 * @property {string | null} [cls] Optional: Set an additional CSS class for the section
	 * @property {string | null} [colCls] Optional: Override default column class for the card
	 * @property {string | null} [title] Sets the title of the card
	 * @property {boolean} [hideTitle] Allows the h2 title tag for the card to be visually hidden
	 * @property {"h2" | "h3"} [headingTag] Set the heading level for the card titles
	 * @property {"default" | "featured"} [mode] Setting mode to "featured" creates an inset card on a grey background
	 * @property {boolean} [baseline] Include a border at the bottom of the card
	 * @property {string | null} [href] Optional: URL for title/image link
	 * @property {string | null} [image] Optional: URL for image
	 * @property {string | null} [imageAlt] Optional: Alt text for image
	 * @property {number} [colspan] (If used in grid) How many columns the card should span across
	 */
	/** @type {Props} */
	let {
		children,
		imageContent,
		titleContent,
		id = null,
		cls = null,
		colCls = null,
		title = null,
		hideTitle = false,
		headingTag = "h2",
		mode = "default",
		baseline = false,
		href = null,
		image = null,
		imageAlt = null,
		colspan = 1
	} = $props();
</script>

<GridCell {colspan} {colCls}>
	<div
		class="ons-card ons-u-mb-no {cls}"
		class:ons-card--feature={mode === "featured"}
		class:ons-u-p-l={mode === "featured"}
		class:ons-card--baseline={baseline}
	>
		{#if href}
			<a {href} class="ons-card__link">
				{#if imageContent}
					{@render imageContent()}
				{:else if image}
					<img
						class="ons-card__image ons-u-mb-s"
						class:ons-card__image-expand={mode === "featured"}
						src={image}
						alt={imageAlt}
						loading="lazy"
					/>
				{/if}
				{#if titleContent}
					{@render titleContent()}
				{:else if title && headingTag === "h3"}
					<h3 {id} class="ons-card__title ons-u-fs-m" class:ons-u-vh={hideTitle}>{title}</h3>
				{:else if title}
					<h2 {id} class="ons-card__title ons-u-fs-m" class:ons-u-vh={hideTitle}>{title}</h2>
				{/if}
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
		{@render children?.()}
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
