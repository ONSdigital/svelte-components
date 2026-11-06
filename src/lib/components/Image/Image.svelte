<script>
	/**
	 * @typedef {Object} Props
	 * @property {string|null} [src] - The URL of the image
	 * @property {string|null} [alt] - An alternative text for the image
	 * @property {string|null} [caption] - A visible caption for the image
	 * @property {string|null} [cls] - Optional: Set an additional CSS class for the component
	 */

	/** @type {Props} */
	let { src = null, alt = null, caption = null, cls = null } = $props();
</script>

<figure class="ons-image {cls}">
	<img class="ons-image__img" {src} {alt} />
	{#if caption}
		<figcaption class="ons-image__caption">{caption}</figcaption>
	{/if}
</figure>
