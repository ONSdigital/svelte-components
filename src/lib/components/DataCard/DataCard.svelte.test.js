import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/svelte";
import { expect, test } from "vitest";
import DataCard from "./DataCard.svelte";
import Sparkline from "./Sparkline.svelte";

test("DataCard displays zero and updates its value without remounting", async () => {
	const { rerender } = render(DataCard, { title: "Employment", value: 0 });
	expect(screen.getByText("0")).toBeInTheDocument();
	await rerender({ value: "12.5%" });
	expect(screen.getByText("12.5%")).toBeInTheDocument();
});

test("Sparkline recomputes scales and endpoint labels when data or keys change", async () => {
	const { container, rerender } = render(Sparkline, {
		data: [
			{ x: 2020, y: 1 },
			{ x: 2021, y: 2 }
		]
	});
	await rerender({
		data: [
			{ x: 2030, y: 30 },
			{ x: 2035, y: -10 }
		]
	});
	expect(container.querySelector("path")?.getAttribute("d")).toBe("M0,0L100,100");
	expect(screen.getByText("2035")).toBeInTheDocument();
	await rerender({
		data: [
			{ year: 2000, rate: 10 },
			{ year: 2010, rate: 20 }
		],
		xKey: "year",
		yKey: "rate"
	});
	expect(container.querySelector("path")?.getAttribute("d")).toBe("M0,100L100,0");
	expect(screen.getByText("2010")).toBeInTheDocument();
});

test.each([
	{ data: [] },
	{ data: [{ x: 1, y: 0 }] },
	{
		data: [
			{ x: 1, y: -5 },
			{ x: 2, y: -5 }
		]
	}
])("Sparkline handles empty, single-point and constant series: $data", ({ data }) => {
	const { container } = render(Sparkline, { data });
	if (!data.length) {
		expect(screen.getByText("No data available")).toBeInTheDocument();
		expect(container.querySelector("svg")).toBeNull();
	} else {
		expect(container.querySelector("path")?.getAttribute("d")).not.toMatch(/NaN|Infinity/);
	}
});
