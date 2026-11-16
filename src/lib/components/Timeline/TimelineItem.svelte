<script>
	/**
	 * @typedef {Object} Props
	 * @property {import("svelte").Snippet} [children] Child content (snippet)
	 * @property {string | null} [title] Title of timeline item
	 */
	/** @type {Props} */
	let { children, title = null } = $props();
</script>

<div class="ons-timeline__item">
	<h2 class="ons-timeline__heading">{title}</h2>
	<div class="ons-timeline__content">
		{@render children?.()}
	</div>
</div>
