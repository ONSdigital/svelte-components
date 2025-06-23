<script>
	import List from "../../layout/List/List.svelte";

	/**
	 * Defines the title of the error
	 * @type {string}
	 */
	export let title = "";
	/**
	 * Define an array of errors/issues in the format {label, href?}
	 * @type {object[]}
	 */
	export let items = [];
	/**
	 * Optional: Set an additional CSS class for the component
	 * @type {string}
	 */
	export let cls = "";
</script>

<div aria-labelledby="alert" role="alert" tabindex="-1" class="ons-panel ons-panel--error {cls}">
	<div class="ons-panel__header">
		<h2 id="alert" data-qa="error-header" class="ons-panel__title ons-u-fs-r--b">{title}</h2>
	</div>
	<div class="ons-panel__body">
		{#if Array.isArray(items)}
			<List mode="number">
				{#each items as item}
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
		<slot />
	</div>
</div>

<style>
	.ons-panel {
		color: rgb(34, 34, 34);
	}
</style>
