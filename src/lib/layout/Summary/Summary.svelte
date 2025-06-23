<script>
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	/**
	 * A unique ID for the summary table
	 * @type {string}
	 */
	export let id = "";
	/**
	 * Title for summary table
	 * @type {string}
	 */
	export let title = "";
	/**
	 * Array of items in format {key, value, href?}
	 * @type {object[]}
	 */
	export let items = [];
	/**
	 * Optional: Set an additional CSS class for the component
	 * @type {string}
	 */
	export let cls = "";

	function handleChange(item) {
		dispatch("change", { item });
	}
</script>

<div class="ons-summary {cls}">
	<div {id} class="ons-summary__group">
		{#if title}<h2 class="ons-summary__group-title">{title}</h2>{/if}
		<dl class="ons-summary__items">
			{#each items as item}
				<div class="ons-summary__item">
					<dt class="ons-summary__item-title">
						<div class="ons-summary__item--text">{item.key}</div>
					</dt>
					<dd class="ons-summary__values">
						<span class="ons-summary__text">{item.value}</span>
					</dd>
					<dd class="ons-summary__actions" id="sales-dates">
						{#if item.href || item.editable}
							<a
								href={item.href || "#0"}
								on:click={() => handleChange(item)}
								class="ons-summary__button"
							>
								<span class="ons-summary__button-text" aria-hidden="true">Change</span>
								<span class="ons-u-vh">Change value</span>
							</a>
						{/if}
					</dd>
				</div>
			{/each}
		</dl>
	</div>
</div>
