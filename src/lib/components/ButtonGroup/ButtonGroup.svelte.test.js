import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/svelte";
import { createRawSnippet } from "svelte";
import { describe, expect, test } from "vitest";
import ButtonGroup from "./ButtonGroup.svelte";
import ButtonGroupFixture from "./ButtonGroupFixture.test.svelte";

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

	test("checks the item for the bound value, and updates it when an item is chosen", async () => {
		render(ButtonGroupFixture);
		expect(screen.getByRole("radio", { name: "B" })).toBeChecked();
		expect(screen.getByRole("radio", { name: "A" })).not.toBeChecked();

		await fireEvent.click(screen.getByRole("radio", { name: "C" }));
		expect(screen.getByRole("radio", { name: "C" })).toBeChecked();
		expect(screen.getByTestId("value")).toHaveTextContent("c");
	});

	test("follows changes to the value from outside", async () => {
		const { rerender } = render(ButtonGroupFixture);
		await rerender({ value: "a" });
		expect(screen.getByRole("radio", { name: "A" })).toBeChecked();
		expect(screen.getByRole("radio", { name: "B" })).not.toBeChecked();
	});
});
