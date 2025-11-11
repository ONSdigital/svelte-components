<script>
	/**
	 * The URL of the image
	 * @type {string|null}
	 */
	export let src = null;
	/**
	 * An alternative text for the image
	 * @type {string|null}
	 */
	export let alt = null;
	/**
	 * A visible caption for the image
	 * @type {string|null}
	 */
	export let caption = null;
	/**
	 * Optional: Set an additional CSS class for the component
	 * @type {string|null}
	 */
	export let cls = null;
</script>

<figure class="ons-image {cls}">
	<img class="ons-image__img" {src} {alt} />
	{#if caption}
		<figcaption class="ons-image__caption">{caption}</figcaption>
	{/if}
</figure>
