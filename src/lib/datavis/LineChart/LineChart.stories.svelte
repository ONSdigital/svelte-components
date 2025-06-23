<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import { LineChart } from "@onsvisual/svelte-charts";
	import data from "../demo-data/data.js";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Data visualisation/LineChart",
		component: LineChart,
		tags: ["autodocs"],
		argTypes: {
			mode: {
				options: ["default", "stacked"],
				control: { type: "select" }
			}
		},
		parameters: withComponentDocs(componentDocs)
	});
</script>

<Story
	name="Default"
	args={{
		data,
		xKey: "year",
		yKey: "value",
		zKey: "group",
		title: "Simple line chart",
		footer: "Source: ONS.",
		mode: "default",
		legend: true
	}}
/>

<Story
	name="Line chart with inline labels"
	args={{
		data,
		xKey: "year",
		yKey: "value",
		zKey: "group",
		title: "Line chart with inline labels",
		footer: "Source: ONS.",
		mode: "default",
		padding: { top: 0, bottom: 28, left: 35, right: 100 },
		labels: "all"
	}}
/>

<Story
	name="Stacked area chart"
	args={{
		data,
		xKey: "year",
		yKey: "value",
		zKey: "group",
		title: "Stacked area chart",
		footer: "Source: ONS.",
		mode: "stacked",
		line: false,
		legend: true
	}}
/>
