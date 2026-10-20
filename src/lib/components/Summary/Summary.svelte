<script>
	import { createEventDispatcher } from "svelte";

	/** @type {import("svelte").EventDispatcher<{ change: { item: object } }>} */
	const dispatch = createEventDispatcher();

	/** @type {{ id?: string | null; title?: string | null; items?: { key: string; value: string; href?: string; editable?: boolean }[]; cls?: string | null; onChange?: (detail: { item: { key: string; value: string; href?: string; editable?: boolean } }) => void }} */
	let { id = null, title = null, items = [], cls = null, onChange = () => {} } = $props();

	/** @param {{ key: string; value: string; href?: string; editable?: boolean }} item */
	function handleChange(item) {
		const detail = { item };
		onChange(detail);
		dispatch("change", detail);
	}
</script>

<div class="ons-summary {cls}">
	<div {id} class="ons-summary__group">
		{#if title}<h2 class="ons-summary__group-title">{title}</h2>{/if}
		<dl class="ons-summary__items">
			{#each items as item (item.key)}
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
								onclick={() => handleChange(item)}
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
