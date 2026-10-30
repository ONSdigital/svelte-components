<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs, withStoryDocs } from "../../js/withParams.js";
	import DataCard from "./DataCard.svelte";
	import componentDocs from "./docs/component.md?raw";
	import exampleDocs from "./docs/example.md?raw";
	import data from "../../demo-data/data-scatter.js";

	const { Story } = defineMeta({
		title: "Data visualisation/DataCard",
		component: DataCard,
		tags: ["autodocs"],
		argTypes: {
			mode: {
				control: { type: "select" }
			}
		},
		parameters: withComponentDocs(componentDocs)
	});
</script>

<Story
	name="Big number"
	args={{
		title: "Consumer Price Index (CPI)",
		subtitle: "United Kingdom",
		value: "up 2.5%",
		caption: "in 12 months to December 2024",
		source: "Source: ONS"
	}}
/>

<Story
	name="Sparkline"
	args={{
		title: "Example sparkline",
		subtitle: "Value in £ million",
		mode: "sparkline",
		data: data.map((d) => ({ x: d.year, y: d.value })),
		value: "down 2.47",
		caption: `Change from 1979 to 2016`,
		source: "Source: ONS"
	}}
	parameters={withStoryDocs(exampleDocs)}
/>

<Story name="Zero value" args={{ title: "Zero is a value", value: 0 }} />

<Story name="Empty sparkline" args={{ title: "Empty series", mode: "sparkline", data: [] }} />
