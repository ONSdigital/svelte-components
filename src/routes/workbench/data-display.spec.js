import { render } from "svelte/server";
import { expect, test } from "vitest";
import DataWorkbench from "./DataWorkbench.svelte";
import {
	BarChart,
	ColumnChart,
	LineChart,
	ScatterChart,
	DotPlotChart,
	Chart
} from "@onsvisual/svelte-charts";

test("5E workbench renders data components and the chart integration on the server", () => {
	const { body } = render(DataWorkbench);
	expect(body).toContain("DataCard And Sparkline");
	expect(body).toContain("Illustrative regional values");
	expect(body).toContain("Chart Previews");
	expect(body).not.toMatch(/NaN|Infinity/);
});

const props = {
	data: [
		{ x: 1, y: 2 },
		{ x: 2, y: 4 }
	],
	xKey: "x",
	yKey: "y"
};
test.each([
	{ name: "BarChart", renderChart: () => render(BarChart, { props }) },
	{ name: "ColumnChart", renderChart: () => render(ColumnChart, { props }) },
	{ name: "LineChart", renderChart: () => render(LineChart, { props }) },
	{
		name: "ScatterChart",
		renderChart: () => render(ScatterChart, { props: { data: props.data, xKey: "x" } })
	},
	{ name: "DotPlotChart", renderChart: () => render(DotPlotChart, { props }) }
])("external $name renders under Svelte 5 SSR", ({ renderChart }) => {
	const { body } = renderChart();
	expect(body).toContain("<div");
});

test("external Chart wrapper renders under Svelte 5 SSR", () => {
	expect(() =>
		render(Chart, {
			props: { type: "bar", data: [{ x: 1, y: "First" }], options: { title: "Wrapper chart" } }
		})
	).not.toThrow();
});
