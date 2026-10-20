<script>
	import { setContext } from "svelte";
	import Container from "$lib/components/Container/Container.svelte";

	/** @type {{ children?: import("svelte").Snippet; id?: string | null; cls?: string | null; width?: "narrow" | "medium" | "wide" | "wider" | "full"; title?: string | null; hideTitle?: boolean; caption?: string | null; marginTop?: boolean; marginBottom?: boolean; colWidth?: "narrow" | "medium" | "wide" | "full"; rowHeight?: number | string | null; rowStretch?: boolean; gridGap?: "narrow" | "medium" | "wide" | "none" }} */
	let {
		children,
		id = null,
		cls = null,
		width = "wide",
		title = null,
		hideTitle = false,
		caption = null,
		marginTop = false,
		marginBottom = true,
		colWidth = "medium",
		rowHeight = null,
		rowStretch = true,
		gridGap = "medium"
	} = $props();

	setContext("width", () => width);
	setContext("colWidth", () => colWidth);
	setContext("rowHeight", () => rowHeight);
	setContext("gridGap", () => gridGap);
</script>

<Container {id} {cls} {width} {marginTop} {marginBottom}>
	{#if title}
		<h2 class="section-title" class:ons-u-vh={hideTitle}>{title}</h2>
	{/if}
	{#if caption}
		<figure class="ons-svelte-grid-container">
			<div
				class="ons-grid ons-grid--spaced"
				class:ons-grid--gutterless={gridGap === "none"}
				class:ons-grid--tight={gridGap === "narrow"}
				class:ons-grid--loose={gridGap === "wide"}
				class:ons-grid--stretch={rowStretch}
			>
				{@render children?.()}
			</div>
			<figcaption class="ons-image__caption">{caption}</figcaption>
		</figure>
	{:else}
		<div
			class="ons-grid ons-grid--spaced"
			class:ons-grid--gutterless={gridGap === "none"}
			class:ons-grid--tight={gridGap === "narrow"}
			class:ons-grid--loose={gridGap === "wide"}
			class:ons-grid--stretch={rowStretch}
		>
			{@render children?.()}
		</div>
	{/if}
</Container>

<style>
	/* This removes the default margins of the <figure> element */
	.ons-svelte-grid-container {
		margin: 0;
	}
	/* This is to allow this flex property without ons-grid--flex which breaks other things */
	.ons-grid--stretch {
		display: flex;
		flex-wrap: wrap;
		align-items: stretch;
	}
	/* This allows the grid to be used as a media container without any columns */
	.ons-grid > :global(*:not(.ons-grid__col)) {
		margin-left: 1rem;
	}
</style>
