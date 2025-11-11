<script>
	import Card from "$lib/layout/Card/Card.svelte";
	import Sparkline from "./Sparkline.svelte";

	/**
	 * Title of card
	 * @type {string|null}
	 */
	export let title = null;
	/**
	 * Optional: Subtitle of card
	 * @type {string|null}
	 */
	export let subtitle = null;
	/**
	 * Optional: URL link for card title
	 * @type {string|null}
	 */
	export let href = null;
	/**
	 * Big number (expects a pre-formatted text string)
	 * @type {string|number|null}
	 */
	export let value = null;
	/**
	 * Mode for the data tile
	 * @type {"number"|"sparkline"|"bar"}
	 */
	export let mode = "number";
	/**
	 * Text caption describing the number
	 * @type {string|null}
	 */
	export let caption = null;
	/**
	 * An array of data (required for charts)
	 * @type {object[]|null}
	 */
	export let data = null;
	/**
	 * Text describing the source of the data
	 * @type {string|null}
	 */
	export let source = null;
	/**
	 * Optional: Set an additional CSS class for the component
	 * @type {string|null}
	 */
	export let cls = null;
</script>

<Card {title} {href} mode="featured" {cls}>
	{#if subtitle}
		<p class="ons-card__subtitle ons-u-fs-s">{subtitle}</p>
	{/if}
	{#if mode === "sparkline" && data}
		<Sparkline {data} />
	{/if}
	{#if value}
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
