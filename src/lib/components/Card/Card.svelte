<script>
	import GridCell from "../Grid/GridCell.svelte";

	/** @type {{ children?: import("svelte").Snippet; imageContent?: import("svelte").Snippet; titleContent?: import("svelte").Snippet; id?: string | null; cls?: string | null; colCls?: string | null; title?: string | null; hideTitle?: boolean; headingTag?: "h2" | "h3"; mode?: "default" | "featured"; baseline?: boolean; href?: string | null; image?: string | null; imageAlt?: string | null; colspan?: number }} */
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
