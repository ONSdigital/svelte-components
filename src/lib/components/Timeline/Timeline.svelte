<script>
	import TimelineItem from "./TimelineItem.svelte";

	/**
	 * @typedef {Object} Props
	 * @property {import("svelte").Snippet} [children] Child content (snippet)
	 * @property {{ title: string; content: string }[]} [items] Timeline items in the format {title, content}, where content can be an HTML string
	 */
	/** @type {Props} */
	let { children, items = [] } = $props();
</script>

<div class="ons-timeline">
	{@render children?.()}
	{#each items as item (item.title)}
		<TimelineItem title={item.title}>
			{@html item.content}
		</TimelineItem>
	{/each}
</div>
