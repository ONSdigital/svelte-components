import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/svelte";
import { createRawSnippet } from "svelte";
import { describe, expect, test } from "vitest";
import Timeline from "./Timeline.svelte";

describe("Timeline", () => {
	test("renders data-driven and nested timeline items", () => {
		const children = createRawSnippet(() => ({ render: () => "<p>Custom timeline entry</p>" }));
		render(Timeline, {
			props: {
				items: [{ title: "2026", content: "Data-driven entry" }],
				children
			}
		});

		expect(screen.getByRole("heading", { name: "2026" })).toBeInTheDocument();
		expect(screen.getByText("Data-driven entry")).toBeInTheDocument();
		expect(screen.getByText("Custom timeline entry")).toBeInTheDocument();
	});
});
