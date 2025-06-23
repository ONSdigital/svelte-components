<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import { ScatterChart } from "@onsvisual/svelte-charts";
	import data from "../demo-data/data-scatter.js";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Data visualisation/ScatterChart",
		component: ScatterChart,
		tags: ["autodocs"],
		argTypes: {},
		parameters: withComponentDocs(componentDocs)
	});
</script>

<Story
	name="Default"
	args={{
		data,
		xKey: "year",
		yKey: "value",
		title: "Simple scatter chart",
		footer: "Source: ONS."
	}}
/>

<Story
	name="Scatter chart radius and groups"
	args={{
		data,
		xKey: "year",
		yKey: "value",
		zKey: "group",
		rKey: "alt",
		r: [3, 15],
		title: "Scatter chart radius and groups",
		footer: "Source: ONS.",
		legend: true
	}}
/>

<Story
	name="Beeswarm chart radius and groups"
	args={{
		data,
		xKey: "value",
		zKey: "group",
		rKey: "alt",
		r: [3, 15],
		title: "Beeswarm chart radius and groups",
		footer: "Source: ONS.",
		legend: true
	}}
/>
