<script>
	import { slugify } from "../../js/utils.js";
	import Container from "$lib/components/Container/Container.svelte";

	/** @type {{ children?: import("svelte").Snippet; id?: string | null; cls?: string | null; width?: "narrow" | "medium" | "wide" | "wider" | "full"; height?: number | string | null; title?: string | null; hideTitle?: boolean; marginTop?: boolean; marginBottom?: boolean }} */
	let {
		children,
		id = null,
		cls = null,
		width = "narrow",
		height = null,
		title = null,
		hideTitle = false,
		marginTop = false,
		marginBottom = true
	} = $props();
</script>

<Container id={id ? id : slugify(title)} {cls} {width} {height} {marginTop} {marginBottom}>
	<section aria-label={title} class="ons-section__text">
		{#if title}
			<h2 class="section-title" class:ons-u-vh={hideTitle}>{title}</h2>
		{/if}
		{@render children?.()}
	</section>
</Container>

<style>
	.ons-section__text > :global(*:last-child) {
		margin-bottom: 0;
	}
</style>
