<script>
	/**
	 * @typedef {Object} Props
	 * @property {string|null} [title] - Sets the title of the list (for screen readers)
	 * @property {{ key: string; value: unknown }[]} [items] - Array of items in format {key, value} where "value" may be an array of multiple values
	 * @property {"default"|"inline"} [mode] - Option to change layout to "inline", eg. for title blocks
	 * @property {string|null} [cls] - Optional: Set an additional CSS class for the component
	 */

	/** @type {Props} */
	let { title = null, items = [], mode = "default", cls = null } = $props();
</script>

<dl
	class="ons-description-list ons-description-list__items ons-grid ons-grid--gutterless ons-u-mb-no {cls} {mode ===
	'inline'
		? 'ons-description-list--inline ons-u-mt-s ons-u-mt-l@l'
		: 'ons-u-cf'}"
	{title}
	aria-label={title}
>
	{#each items as item, index (index)}
		<div class="ons-description-list__item">
			<dt
				class="ons-description-list__term ons-grid__col {mode === 'inline'
					? 'ons-col-4@s@l'
					: 'ons-col-2@m'}"
			>
				{item.key}:
			</dt>
			{#each [item.value].flat() as value, valueIndex (valueIndex)}
				<dd
					class="ons-description-list__value ons-grid__col {mode === 'inline'
						? 'ons-col-8@s@l'
						: 'ons-col-10@m'}"
				>
					{@html value}
				</dd>
			{/each}
		</div>
	{/each}
</dl>

<style>
	/* Fix for inline wrapping on narrower container widths */
	.ons-description-list--inline {
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
	}
</style>
