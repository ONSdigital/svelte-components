import "@testing-library/jest-dom/vitest";
import { render, screen, waitFor } from "@testing-library/svelte";
import { createRawSnippet } from "svelte";
import { get, writable } from "svelte/store";
import { describe, expect, test } from "vitest";
import Tab from "./Tab.svelte";

describe("Tab", () => {
	test("renders its child content and registers with the shared section store", async () => {
		const sections = writable(/** @type {HTMLElement[]} */ ([]));
		const children = createRawSnippet(() => ({ render: () => "<p>Tab panel content</p>" }));
		const context = new Map();
		context.set("sections", sections);
		render(Tab, {
			props: { id: "first-tab", title: "First tab", children },
			context
		});

		expect(screen.getByRole("tabpanel")).toHaveAttribute("id", "first-tab");
		expect(screen.getByText("Tab panel content")).toBeInTheDocument();
		await waitFor(() => expect(get(sections)).toHaveLength(1));
		expect(get(sections)[0].id).toBe("first-tab");
	});
});
