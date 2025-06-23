<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import { ColumnChart } from "@onsvisual/svelte-charts";
	import data from "../demo-data/data.js";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Data visualisation/ColumnChart",
		component: ColumnChart,
		tags: ["autodocs"],
		argTypes: {
			mode: {
				options: ["default", "stacked", "grouped", "comparison", "marker"],
				control: { type: "select" }
			}
		},
		parameters: withComponentDocs(componentDocs)
	});
</script>

<Story
	name="Default"
	args={{
		data: data.filter((d) => d.group == "apples"),
		xKey: "year",
		yKey: "value",
		title: "Simple bar chart",
		footer: "Source: ONS.",
		mode: "default"
	}}
/>

<Story
	name="Stacked columns"
	args={{
		data,
		xKey: "year",
		yKey: "value",
		zKey: "group",
		title: "Stacked bar chart",
		footer: "Source: ONS.",
		mode: "default"
	}}
/>

<Story
	name="Grouped columns"
	args={{
		data,
		xKey: "year",
		yKey: "value",
		zKey: "group",
		title: "Grouped bar chart",
		footer: "Source: ONS.",
		mode: "grouped"
	}}
/>

<Story
	name="Comparison markers"
	args={{
		data,
		xKey: "year",
		yKey: "value",
		zKey: "group",
		title: "Comparison marker chart",
		footer: "Source: ONS.",
		mode: "comparison"
	}}
/>

<Story
	name="Barcode"
	args={{
		data,
		xKey: "year",
		yKey: "value",
		zKey: "group",
		title: "Barcode chart",
		footer: "Source: ONS.",
		mode: "marker"
	}}
/>
