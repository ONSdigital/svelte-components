<script>
	/**
	 * The title of the document
	 * @type {string}
	 */
	export let title = "";
	/**
	 * Set the heading level for the title
	 * @type {"h2"|"h3"}
	 */
	export let headingTag = "h2";
	/**
	 * The URL of the document
	 * @type {string}
	 */
	export let href = "";
	/**
	 * A description of the document
	 * @type {string}
	 */
	export let description = "";
	/**
	 * Optional: URL of image to represent the document (use "true" for a placeholder)
	 * @type {string|boolean}
	 */
	export let image = false;
	/**
	 * Highlight document as a featured item (inset on grey background)
	 * @type {boolean}
	 */
	export let featured = false;
	/**
	 * Metadata about the type of document linked to (can include HTML)
	 * @type {string}
	 */
	export let meta = "";
</script>

<li class="ons-document-list__item" class:ons-document-list__item--featured={featured}>
	{#if image}
		<div
			class="ons-document-list__item-image ons-document-list__item-image--file"
			aria-hidden="true"
		>
			<a
				class="ons-document-list__image-link"
				class:ons-document-list__image-link--placeholder={image === true}
				{href}
				tabindex="-1"
			>
				{#if typeof image === "string"}
					<img src={image} alt="" loading="lazy" />
				{/if}
			</a>
		</div>
	{/if}
	<div class="ons-document-list__item-content">
		<div class="ons-document-list__item-header">
			{#if headingTag === "h3"}
				<h3 class="ons-document-list__item-title ons-u-fs-m ons-u-mt-no ons-u-mb-2xs">
					<a {href}
						>{title}
						{#if meta}<span class="ons-u-vh">{meta}</span>{/if}
					</a>
				</h3>
			{:else}
				<h2 class="ons-document-list__item-title ons-u-fs-m ons-u-mt-no ons-u-mb-2xs">
					<a {href}
						>{title}
						{#if meta}<span class="ons-u-vh">{meta}</span>{/if}
					</a>
				</h2>
			{/if}
			{#if meta}
				<ul class="ons-document-list__item-metadata ons-u-mb-2xs">
					<li class="ons-document-list__item-attribute" aria-hidden="true">{@html meta}</li>
				</ul>
			{/if}
		</div>
		{#if description}
			<div class="ons-document-list__item-description">
				<slot />
				{@html description}
			</div>
		{/if}
	</div>
</li>

<style>
	.ons-document-list__item-image--file .ons-document-list__image-link--placeholder {
		display: block;
		height: 136px;
	}
	.ons-document-list__image-link--placeholder {
		background-clip: padding-box;
		background-color: var(--ons-color-placeholder);
		background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3e%3cpath fill='%23fff' d='M0 19.39c.49-1 1-2 1.55-2.93A31.59 31.59 0 0 1 0 11.72v7.67ZM3 0S0 0 0 3.7v2a34.85 34.85 0 0 0 2.17 9.76A31.2 31.2 0 0 1 8.3 8.3c4.84-4.16 11.36-7 20.21-8.29Zm28.84 2c-10.11 1-17 3.86-22 8.1a29.78 29.78 0 0 0-6.49 8C7.26 25.65 14.66 31.19 27 32h1.21A3.71 3.71 0 0 0 32 27.91V2a.41.41 0 0 1-.16 0Zm-26 21.49a25.94 25.94 0 0 1-3-4.4A48 48 0 0 0 0 25.71V32h20.23a26.41 26.41 0 0 1-14.39-8.49Z'/%3e%3c/svg%3e");
		background-position: center;
		background-repeat: no-repeat;
		background-size: 32px 32px;
		height: 100%;
	}
</style>
