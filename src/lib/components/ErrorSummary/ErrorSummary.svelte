<script>
	import List from "$lib/components/List/List.svelte";

	/**
	 * @typedef {Object} Props
	 * @property {string|null} [title] - Defines the title of the error
	 * @property {{ label: string; href?: string }[]} [items] - Define an array of errors/issues in the format {label, href?}
	 * @property {string|null} [cls] - Optional: Set an additional CSS class for the component
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { title = null, items = [], cls = null, children } = $props();
</script>

<div aria-labelledby="alert" role="alert" tabindex="-1" class="ons-panel ons-panel--error {cls}">
	<div class="ons-panel__header">
		<h2 id="alert" data-qa="error-header" class="ons-panel__title ons-u-fs-r--b">{title}</h2>
	</div>
	<div class="ons-panel__body">
		{#if Array.isArray(items)}
			<List mode="number">
				{#each items as item, index (index)}
					<li>
						{#if item.href}
							<a href={item.href}>{item.label}</a>
						{:else}
							{item.label}
						{/if}
					</li>
				{/each}
			</List>
		{/if}
		{@render children?.()}
	</div>
</div>

<style>
	.ons-panel {
		color: rgb(34, 34, 34);
	}
</style>
