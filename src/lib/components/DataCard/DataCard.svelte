<script>
	import Card from "$lib/components/Card/Card.svelte";
	import Sparkline from "./Sparkline.svelte";

	/**
	 * @typedef {Object} Props
	 * @property {string | null} [title] Title of card
	 * @property {string | null} [subtitle] Optional: Subtitle of card
	 * @property {string | null} [href] Optional: URL link for card title
	 * @property {string | number | null} [value] Big number (expects a pre-formatted text string)
	 * @property {"number" | "sparkline" | "bar"} [mode] Mode for the data tile
	 * @property {string | null} [caption] Text caption describing the number
	 * @property {Record<string, number>[] | null} [data] An array of data (required for charts)
	 * @property {string | null} [source] Text describing the source of the data
	 * @property {string | null} [cls] Optional: Set an additional CSS class for the component
	 */
	/** @type {Props} */
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
