<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [title] - Title for the section
	 * @property {{ title: string; href: string }[] | object} [links] - Links in the form {title, href}
	 * @property {{ title?: string; links: { title: string; href: string }[] | object }[]} [related] - Define multiple links sections in the form {title, links: [{title, href}]} (overrides above options)
	 * @property {string|null} [cls] - Optional: Set an additional CSS class for the component
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { title = "Related content", links = [], related, cls = null, children } = $props();
	const sections = $derived(related ?? [{ title, links }]);
</script>

<aside class="ons-related-content {cls}" aria-label="Related content">
	{@render children?.()}
	{#each sections as section, sectionIndex (sectionIndex)}
		<div class="ons-related-content__section">
			{#if section.title}
				<h2
					class="ons-related-content__title ons-u-fs-r--b ons-u-mb-xs"
					id="related-help-with-the-census"
				>
					{section.title}
				</h2>
			{/if}
			{#if Array.isArray(section.links)}
				<div class="ons-related-content__content">
					<nav
						class="ons-related-content__navigation"
						aria-labelledby="related-help-with-the-census"
					>
						<ul class="ons-list ons-list--bare">
							{#each section.links as link, linkIndex (linkIndex)}
								<li class="ons-list__item">
									<a href={link.href} class="ons-list__link">{link.title}</a>
								</li>
							{/each}
						</ul>
					</nav>
				</div>
			{/if}
		</div>
	{/each}
</aside>
