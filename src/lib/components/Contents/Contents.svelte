<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [title] - Sets the title of the contents block
	 * @property {boolean} [hideTitle] - Visually hides the title of the block
	 * @property {{ label: string; href?: string }[]} [links] - An array of links for the contentents block in the form {label, href?}. Excluding href renders an item as plain text and marks it as the current section for screenreaders.
	 * @property {string|null} [skipHref] - An anchor link URL to the main content of the page (to skip contents)
	 * @property {string|null} [cls] - Optional: Set an additional CSS class for the component
	 */

	/** @type {Props} */
	let { title = "Contents", hideTitle = false, links = [], skipHref = null, cls = null } = $props();
</script>

<aside class="ons-table-of-contents-container {cls}">
	{#if skipHref}
		<a class="ons-skip-to-content" href={skipHref}>Skip to guide content</a>
	{/if}
	<nav class="ons-table-of-contents" aria-label="Pages in this guide">
		{#if title}
			<h2 class="ons-table-of-contents__title ons-u-fs-r--b ons-u-mb-s" class:ons-u-vh={hideTitle}>
				{title}
			</h2>
		{/if}
		<ol class="ons-list ons-u-mb-l ons-list--dashed">
			{#each links as link, index (index)}
				{#if link.href}
					<li class="ons-list__item">
						<a href={link.href} class="ons-list__link">{link.label}</a>
					</li>
				{:else}
					<li class="ons-list__item" aria-current="true">{link.label}</li>
				{/if}
			{/each}
		</ol>
	</nav>
</aside>
