import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen, within } from "@testing-library/svelte";
import { expect, test } from "vitest";
import Table from "./Table.svelte";

const columns = [
	{ key: "name", label: "Region" },
	{ key: "value", label: "Value", numeric: true }
];

test("Table sorts both directions without mutating input and applies sorting to replacement data", async () => {
	const data = [
		{ name: "West", value: 20 },
		{ name: "East", value: 0 },
		{ name: "North", value: null }
	];
	Object.freeze(data);
	const { container, rerender } = render(Table, { data, columns, sortable: true });
	const values = () => Array.from(container.querySelectorAll("tbody tr"), (row) => row.textContent);
	await fireEvent.click(screen.getByRole("button", { name: "Sort by Value" }));
	expect(values()).toEqual(["East0", "West20", "North\u2013"]);
	expect(screen.getByRole("columnheader", { name: "Value" })).toHaveAttribute(
		"aria-sort",
		"ascending"
	);
	await rerender({
		data: [
			{ name: "South", value: 100 },
			{ name: "Central", value: 3 }
		]
	});
	expect(values()).toEqual(["Central3", "South100"]);
	await fireEvent.click(screen.getByRole("button", { name: "Sort by Value" }));
	expect(values()).toEqual(["South100", "Central3"]);
	expect(data.map((row) => row.name)).toEqual(["West", "East", "North"]);
});

test("Table infers new columns when initially empty data is replaced", async () => {
	const { rerender } = render(Table, { data: [] });
	await rerender({ data: [{ year: 2026, total: 0 }] });
	expect(screen.getByRole("columnheader", { name: "year" })).toBeInTheDocument();
	expect(screen.getByRole("cell", { name: "0" })).toBeInTheDocument();
	await rerender({ data: [{ region: "Wales" }] });
	expect(screen.queryByRole("columnheader", { name: "year" })).not.toBeInTheDocument();
	expect(screen.getByRole("cell", { name: "Wales" })).toBeInTheDocument();
});

test("Table updates column formatting and retains caption and layout options", async () => {
	const { rerender } = render(Table, {
		title: "Rates",
		data: [{ value: 1.25 }],
		columns: [{ key: "value", label: "Rate", numeric: true, dp: 1 }],
		compact: true,
		responsive: true,
		height: 200
	});
	const table = screen.getByRole("table", { name: "Rates" });
	expect(table).toHaveClass("ons-table--compact", "ons-table--responsive", "sticky-header");
	expect(table.parentElement).toHaveStyle({ height: "200px", overflow: "auto" });
	expect(within(table).getByRole("cell", { name: "1.3" })).toBeInTheDocument();
	await rerender({
		columns: [{ key: "value", label: "Rate", numeric: true, formatter: (value) => `${value}%` }]
	});
	expect(screen.getByRole("cell", { name: "1.25%" })).toBeInTheDocument();
});
