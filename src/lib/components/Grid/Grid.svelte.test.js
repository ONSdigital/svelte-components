import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/svelte";
import { createRawSnippet } from "svelte";
import { describe, expect, test } from "vitest";
import Grid from "./Grid.svelte";
import GridCell from "./GridCell.svelte";

describe("Grid", () => {
	test("renders child content and updates layout props", async () => {
		const children = createRawSnippet(() => ({
			render: () => '<div class="grid-test-cell">Grid content</div>'
		}));
		const { container, rerender } = render(Grid, {
			props: { width: "wide", gridGap: "narrow", rowStretch: true, children }
		});

		expect(screen.getByText("Grid content")).toBeInTheDocument();
		expect(container.querySelector(".ons-grid--tight")).toBeInTheDocument();
		expect(container.querySelector(".ons-grid--stretch")).toBeInTheDocument();

		await rerender({ gridGap: "wide", rowStretch: false });

		expect(container.querySelector(".ons-grid--loose")).toBeInTheDocument();
		expect(container.querySelector(".ons-grid--stretch")).not.toBeInTheDocument();
	});

	test("GridCell derives its span and height from shared context", () => {
		const children = createRawSnippet(() => ({ render: () => "<span>Cell content</span>" }));
		const context = new Map();
		context.set("width", () => "wide");
		context.set("colWidth", () => "medium");
		context.set("rowHeight", () => 96);
		const { container } = render(GridCell, {
			props: { colspan: 2, children },
			context
		});
		const cell = container.querySelector(".ons-grid__col");

		expect(cell).toHaveClass("ons-col-8@l");
		expect(cell).toHaveStyle({ height: "96px" });
		expect(screen.getByText("Cell content")).toBeInTheDocument();
	});
});
