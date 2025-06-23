<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs, withStoryDocs } from "../../js/withParams.js";
	import Timeline from "./Timeline.svelte";
	import TimelineItem from "./TimelineItem.svelte";
	import componentDocs from "./docs/component.md?raw";
	import exampleDocs from "./docs/example.md?raw";

	const { Story } = defineMeta({
		title: "Layout/Timeline",
		component: Timeline,
		tags: ["autodocs"],
		argTypes: {},
		parameters: withComponentDocs(componentDocs)
	});

	const items = [
		{
			title: "November 2020",
			content: "ONS to provide you with content for magazines and publications"
		},
		{
			title: "January to March 2021",
			content: "ONS to provide a range of press releases for external use"
		},
		{ title: "February to April 2021", content: "Promote your local Census Support Centres" }
	];
</script>

<Story name="Default" args={{ items }} />

<Story name="Individually defined timeline items" asChild parameters={withStoryDocs(exampleDocs)}>
	<Timeline>
		<TimelineItem title="November 2020">
			<p>ONS to provide you with content for magazines and publications</p>
		</TimelineItem>
		<TimelineItem title="January to March 2021">
			<p>ONS to provide a range of press releases for external use</p>
		</TimelineItem>
		<TimelineItem title="February to April 2021">
			<p>Promote your local Census Support Centres</p>
		</TimelineItem>
	</Timeline>
</Story>
