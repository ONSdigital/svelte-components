<script>
	import Card from "$lib/layout/Card/Card.svelte";
	import Sparkline from "./Sparkline.svelte";

	/**
	 * Title of card
	 * @type {string}
	 */
	export let title = "";
	/**
	 * Optional: Subtitle of card
	 * @type {string}
	 */
	export let subtitle = "";
	/**
	 * Optional: URL link for card title
	 * @type {string}
	 */
	export let href = "";
	/**
	 * Big number (expects a pre-formatted text string)
	 * @type {string|number}
	 */
	export let value = "";
	/**
	 * Mode for the data tile
	 * @type {"number"|"sparkline"|"bar"}
	 */
	export let mode = "number";
	/**
	 * Text caption describing the number
	 * @type {string}
	 */
	export let caption = "";
	/**
	 * An array of data (required for charts)
	 * @type {object[]|null}
	 */
	export let data = null;
	/**
	 * Text describing the source of the data
	 * @type {string}
	 */
	export let source = "";
	/**
	 * Optional: Set an additional CSS class for the component
	 * @type {string}
	 */
	export let cls = "";
</script>

<Card {title} {href} mode="featured" {cls}>
	{#if subtitle}
		<p class="ons-u-fs-s">{subtitle}</p>
	{/if}
	{#if mode === "sparkline" && data}
		<Sparkline {data} />
	{/if}
	{#if value}
		<p class="headline-figures__figure ons-u-fs-3xl ons-u-fs-2xl@m ons-u-mb-no">{value}</p>
	{/if}
	{#if caption}
		<p class="headline-figures__supporting-text ons-u-fs-r ons-u-mt-2xs ons-u-mb-no">
			{@html caption}
		</p>
	{/if}
	{#if source}
		<p class="ons-u-fs-s ons-u-mt-s ons-u-mb-no">{source}</p>
	{/if}
</Card>
