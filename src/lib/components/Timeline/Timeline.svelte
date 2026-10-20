<script>
	import TimelineItem from "./TimelineItem.svelte";

	/** @type {{ children?: import("svelte").Snippet; items?: { title: string; content: string }[] }} */
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
