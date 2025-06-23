<script>
	/**
	 * Sets the title of the contents block
	 * @type {string}
	 */
	export let title = "Contents";
	/**
	 * Visually hides the title of the block
	 * @type {boolean}
	 */
	export let hideTitle = false;
	/**
	 * An array of links for the contentents block in the form {label, href?}. Excluding href renders an item as plain text and marks it as the current section for screenreaders.
	 * @type {object[]}
	 */
	export let links = [];
	/**
	 * An anchor link URL to the main content of the page (to skip contents)
	 * @type {string}
	 */
	export let skipHref = "";
	/**
	 * Optional: Set an additional CSS class for the component
	 * @type {string}
	 */
	export let cls = "";
</script>

<aside class="ons-table-of-contents-container {cls}" role="complementary">
	{#if skipHref}
		<a class="ons-skip-to-content" href="#0">Skip to guide content</a>
	{/if}
	<nav class="ons-table-of-contents" aria-label="Pages in this guide">
		{#if title}
			<h2 class="ons-table-of-contents__title ons-u-fs-r--b ons-u-mb-s" class:ons-u-vh={hideTitle}>
				{title}
			</h2>
		{/if}
		<ol class="ons-list ons-u-mb-l ons-list--dashed">
			{#each links as link}
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
