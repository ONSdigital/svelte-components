import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/svelte";
import { createRawSnippet } from "svelte";
import { describe, expect, test } from "vitest";
import ButtonGroup from "./ButtonGroup.svelte";

const children = createRawSnippet(() => ({
	render: () => "<span>Options</span>"
}));

describe("ButtonGroup", () => {
	test("enables mobile stacking by default", () => {
		render(ButtonGroup, {
			props: { name: "options", legend: "Choose an option", children }
		});

		expect(screen.getByRole("group", { name: "Choose an option" })).toHaveClass("stack-on-mobile");
	});

	test("allows mobile stacking to be disabled and updated", async () => {
		const { rerender } = render(ButtonGroup, {
			props: { stackOnMobile: false, legend: "Choose an option", children }
		});
		const group = screen.getByRole("group", { name: "Choose an option" });

		expect(group).not.toHaveClass("stack-on-mobile");

		await rerender({ stackOnMobile: true });

		expect(group).toHaveClass("stack-on-mobile");
	});
});
