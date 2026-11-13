import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/svelte";
import { afterEach, describe, expect, test, vi } from "vitest";
import ToolbarFixture from "./ToolbarFixture.test.svelte";

afterEach(() => {
	sessionStorage.clear();
	localStorage.clear();
});

const help = () => document.querySelector(".help-modal");

describe("Toolbar", () => {
	test("shows the first button's help on load, and steps through the help", async () => {
		render(ToolbarFixture);
		expect(screen.getByRole("toolbar", { name: "Map tools" })).toBeInTheDocument();
		expect(help()).toHaveTextContent("Drag the map to move it");
		expect(screen.queryByRole("button", { name: "Back" })).not.toBeInTheDocument();

		await fireEvent.click(screen.getByRole("button", { name: "Next" }));
		expect(help()).toHaveTextContent("Zoom in on the map");
		expect(screen.getByRole("button", { name: "Back" })).toBeInTheDocument();

		await fireEvent.click(screen.getByRole("button", { name: "Back" }));
		expect(help()).toHaveTextContent("Drag the map to move it");
	});

	test("skipping hides the help for the session and shows the tool controls", async () => {
		const onClick = vi.fn();
		render(ToolbarFixture, { props: { onClick } });
		await fireEvent.click(screen.getByRole("button", { name: "Skip instructions" }));
		expect(help()).not.toBeInTheDocument();
		expect(sessionStorage.getItem("showHelpModals")).toBe("false");

		// The first button is still active, so its controls are shown
		expect(screen.getByRole("tabpanel")).toHaveTextContent("Move controls");

		// Clicking the active button deselects it and hides its controls
		await fireEvent.click(screen.getByRole("button", { name: "Move" }));
		expect(onClick).toHaveBeenCalledWith("move");
		expect(screen.queryByRole("tabpanel")).not.toBeInTheDocument();
		expect(screen.getByRole("button", { name: "Move" })).not.toHaveClass("selected");

		await fireEvent.click(screen.getByRole("button", { name: "Move" }));
		expect(screen.getByRole("button", { name: "Move" })).toHaveClass("selected");
		expect(screen.getByRole("tabpanel")).toHaveTextContent("Move controls");
	});

	test("doesn't show the help if it was turned off", () => {
		localStorage.setItem("showHelpModals", "false");
		render(ToolbarFixture);
		expect(help()).not.toBeInTheDocument();
	});

	test("a toggle button updates its bound selected value", async () => {
		render(ToolbarFixture);
		const toggle = screen.getByRole("checkbox", { name: "Search" });
		expect(screen.getByTestId("selected")).toHaveTextContent("false");
		await fireEvent.click(toggle);
		expect(screen.getByTestId("selected")).toHaveTextContent("true");
	});

	test("shows tooltips and follows the orientation", async () => {
		const { rerender } = render(ToolbarFixture);
		await fireEvent.mouseOver(screen.getByRole("button", { name: "Zoom" }));
		expect(document.querySelector(".toolbar-tooltip")).toHaveTextContent("Zoom");
		expect(document.querySelector(".toolbar-divider")).toHaveClass("horizontal");

		await rerender({ orientation: "vertical" });
		expect(document.querySelector(".toolbar-divider")).toHaveClass("vertical");
		expect(document.querySelector(".toolbar-tooltip")).toHaveClass("toolbar-tooltip-vertical");
	});
});
