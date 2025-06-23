<script>
	import TimelineItem from "./TimelineItem.svelte";
	/**
	 * Timeline items in the format {title, content}, where content can be an HTML string
	 * @type {object[]}
	 */
	export let items = [];
</script>

<div class="ons-timeline">
	<slot />
	{#each items as item}
		<TimelineItem title={item.title}>
			{@html item.content}
		</TimelineItem>
	{/each}
</div>
