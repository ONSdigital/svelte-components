<script>
	/**
	 * Sets the title of the list (for screen readers)
	 * @type {string}
	 */
	export let title = "";
	/**
	 * Array of items in format {key, value} where "value" may be an array of multiple values
	 * @type {object[]}
	 */
	export let items = [];
	/**
	 * Option to change layout to "inline", eg. for title blocks
	 * @type {"default"|"inline"}
	 */
	export let mode = "default";
	/**
	 * Optional: Set an additional CSS class for the component
	 * @type {string}
	 */
	export let cls = "";
</script>

<dl
	class="ons-description-list ons-description-list__items ons-grid ons-grid--gutterless ons-u-mb-no {cls} {mode ===
	'inline'
		? 'ons-u-mt-s ons-u-mt-l@l'
		: 'ons-u-cf'}"
	class:ons-description-list--inline={mode === "inline"}
	{title}
	aria-label={title}
>
	{#each items as item}
		<div class="ons-description-list__item">
			<dt
				class="ons-description-list__term ons-grid__col {mode === 'inline'
					? 'ons-col-5@xs@l'
					: 'ons-col-2@m'}"
			>
				{item.key}:
			</dt>
			{#each [item.value].flat() as value}
				<dd
					class="ons-description-list__value ons-grid__col {mode === 'inline'
						? 'ons-col-7@xs@l'
						: 'ons-col-10@m'}"
				>
					{@html value}
				</dd>
			{/each}
		</div>
	{/each}
</dl>
