<script>
	/**
	 * Title for the section
	 * @type {string}
	 */
	export let title = "Related content";
	/**
	 * Links in the form {title, href}
	 * @type {object[]|object}
	 */
	export let links = [];
	/**
	 * Define multiple links sections in the form {title, links: [{title, href}]} (overrides above options)
	 * @type {object[]}
	 */
	export let related = [{ title, links }];
	/**
	 * Optional: Set an additional CSS class for the component
	 * @type {string}
	 */
	export let cls = "";
</script>

<aside class="ons-related-content {cls}" aria-label="Related content">
	<slot />
	{#each related as section}
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
							{#each section.links as link}
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
