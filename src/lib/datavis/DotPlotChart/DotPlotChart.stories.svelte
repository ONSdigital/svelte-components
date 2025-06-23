<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import { DotPlotChart } from "@onsvisual/svelte-charts";
	import data from "../demo-data/data.js";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Data visualisation/DotPlotChart",
		component: DotPlotChart,
		tags: ["autodocs"],
		argTypes: {},
		parameters: withComponentDocs(componentDocs)
	});
</script>

<Story
	name="Default"
	args={{
		data: data.filter((d) => d.group == "apples"),
		xKey: "value",
		yKey: "year",
		title: "Dot plot chart",
		footer: "Source: ONS.",
		mode: "default"
	}}
/>

<Story
	name="Multiple dots"
	args={{
		data,
		xKey: "value",
		yKey: "year",
		zKey: "group",
		title: "Dot plot with multiple points",
		footer: "Source: ONS.",
		mode: "default"
	}}
/>
