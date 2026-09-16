<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs, withStoryDocs } from "../../js/withParams.js";
	import { Chart } from "@onsvisual/svelte-charts";
	import componentDocs from "./docs/component.md?raw";
	import exampleDocs from "./docs/example.md?raw";

	const barData = [
		{ x: 5315, y: "Portsmouth" },
		{ x: 5070, y: "Southampton" },
		{ x: 4596, y: "Slough" },
		{ x: 3969, y: "Reading" },
		{ x: 3522, y: "Brighton and Hove" }
	];
	const lineData = [
		{ z: "West Oxfordshire", x: "2002", y: 95961 },
		{ z: "West Oxfordshire", x: "2003", y: 97083 },
		{ z: "West Oxfordshire", x: "2004", y: 98038 },
		{ z: "West Oxfordshire", x: "2005", y: 98869 },
		{ z: "West Oxfordshire", x: "2006", y: 100316 },
		{ z: "West Oxfordshire", x: "2007", y: 102166 },
		{ z: "West Oxfordshire", x: "2008", y: 103016 },
		{ z: "West Oxfordshire", x: "2009", y: 103824 },
		{ z: "West Oxfordshire", x: "2010", y: 104706 },
		{ z: "West Oxfordshire", x: "2011", y: 105442 },
		{ z: "West Oxfordshire", x: "2012", y: 107164 },
		{ z: "West Oxfordshire", x: "2013", y: 107945 },
		{ z: "West Oxfordshire", x: "2014", y: 108095 },
		{ z: "West Oxfordshire", x: "2015", y: 108609 },
		{ z: "West Oxfordshire", x: "2016", y: 108748 },
		{ z: "West Oxfordshire", x: "2017", y: 109266 },
		{ z: "West Oxfordshire", x: "2018", y: 109800 },
		{ z: "West Oxfordshire", x: "2019", y: 110643 },
		{ z: "West Oxfordshire", x: "2020", y: 111758 },
		{ z: "South Oxfordshire", x: "2002", y: 128754 },
		{ z: "South Oxfordshire", x: "2003", y: 128920 },
		{ z: "South Oxfordshire", x: "2004", y: 129359 },
		{ z: "South Oxfordshire", x: "2005", y: 130050 },
		{ z: "South Oxfordshire", x: "2006", y: 130676 },
		{ z: "South Oxfordshire", x: "2007", y: 131626 },
		{ z: "South Oxfordshire", x: "2008", y: 132611 },
		{ z: "South Oxfordshire", x: "2009", y: 133466 },
		{ z: "South Oxfordshire", x: "2010", y: 133915 },
		{ z: "South Oxfordshire", x: "2011", y: 134961 },
		{ z: "South Oxfordshire", x: "2012", y: 135722 },
		{ z: "South Oxfordshire", x: "2013", y: 136328 },
		{ z: "South Oxfordshire", x: "2014", y: 137477 },
		{ z: "South Oxfordshire", x: "2015", y: 138177 },
		{ z: "South Oxfordshire", x: "2016", y: 139156 },
		{ z: "South Oxfordshire", x: "2017", y: 139767 },
		{ z: "South Oxfordshire", x: "2018", y: 140504 },
		{ z: "South Oxfordshire", x: "2019", y: 142057 },
		{ z: "South Oxfordshire", x: "2020", y: 143782 },
		{ z: "Winchester", x: "2002", y: 107844 },
		{ z: "Winchester", x: "2003", y: 108515 },
		{ z: "Winchester", x: "2004", y: 109179 },
		{ z: "Winchester", x: "2005", y: 109947 },
		{ z: "Winchester", x: "2006", y: 110628 },
		{ z: "Winchester", x: "2007", y: 111820 },
		{ z: "Winchester", x: "2008", y: 113267 },
		{ z: "Winchester", x: "2009", y: 114505 },
		{ z: "Winchester", x: "2010", y: 115789 },
		{ z: "Winchester", x: "2011", y: 116820 },
		{ z: "Winchester", x: "2012", y: 118074 },
		{ z: "Winchester", x: "2013", y: 119037 },
		{ z: "Winchester", x: "2014", y: 120290 },
		{ z: "Winchester", x: "2015", y: 121734 },
		{ z: "Winchester", x: "2016", y: 123100 },
		{ z: "Winchester", x: "2017", y: 123879 },
		{ z: "Winchester", x: "2018", y: 124295 },
		{ z: "Winchester", x: "2019", y: 124859 },
		{ z: "Winchester", x: "2020", y: 125925 }
	];

	const { Story } = defineMeta({
		title: "Data visualisation/Chart",
		component: Chart,
		tags: ["autodocs"],
		argTypes: {},
		parameters: withComponentDocs(componentDocs)
	});
</script>

<Story
	name="Bar"
	args={{
		type: "bar",
		data: barData,
		options: {
			id: "chart-density",
			title: "Densest local authorities in the South East, 2020",
			footer: "Source: Office for National Statistics",
			"padding-left": "120"
		}
	}}
/>

<Story
	name="Bar, robo-journalism case"
	args={{
		section: {
			id: "chart-density",
			chartType: "bar",
			data: barData,
			title: "Densest local authorities in the South East, 2020",
			footer: "Source: Office for National Statistics",
			"padding-left": "120"
		}
	}}
	parameters={withStoryDocs(exampleDocs)}
/>

<Story
	name="Line with highlight"
	args={{
		section: {
			id: "chart-timeseries",
			chartType: "line-highlight",
			title: "Largest local authorities in the South East, 2002-2020",
			footer: "Source: Office for National Statistics",
			data: lineData,
			selected: "Winchester",
			"padding-top": "20",
			"padding-right": "120",
			"padding-left": "80"
		}
	}}
/>
