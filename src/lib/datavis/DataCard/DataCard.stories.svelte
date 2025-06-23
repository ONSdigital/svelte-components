<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import DataCard from "./DataCard.svelte";
	import componentDocs from "./docs/component.md?raw";
	import data from "../demo-data/data-scatter.js";

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
/>
