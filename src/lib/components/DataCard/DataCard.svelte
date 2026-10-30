<script>
	import Card from "$lib/components/Card/Card.svelte";
	import Sparkline from "./Sparkline.svelte";

	/** @type {{ title?: string | null; subtitle?: string | null; href?: string | null; value?: string | number | null; mode?: "number" | "sparkline" | "bar"; caption?: string | null; data?: Record<string, number>[] | null; source?: string | null; cls?: string | null }} */
	let {
		title = null,
		subtitle = null,
		href = null,
		value = null,
		mode = "number",
		caption = null,
		data = null,
		source = null,
		cls = null
	} = $props();
</script>

<Card {title} {href} mode="featured" {cls}>
	{#if subtitle}
		<p class="ons-card__subtitle ons-u-fs-s">{subtitle}</p>
	{/if}
	{#if mode === "sparkline" && data}
		<Sparkline {data} />
	{/if}
	{#if value != null && value !== ""}
		<p class="ons-card__figure ons-u-fs-3xl ons-u-fw-b ons-u-mb-no">{value}</p>
	{/if}
	{#if caption}
		<p class="ons-card__body">
			{@html caption}
		</p>
	{/if}
	{#if source}
		<p class="ons-u-fs-s ons-u-mt-s ons-u-mb-no">{source}</p>
	{/if}
</Card>
