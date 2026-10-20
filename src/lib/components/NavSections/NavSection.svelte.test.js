import "@testing-library/jest-dom/vitest";
import { render, screen, waitFor } from "@testing-library/svelte";
import { createRawSnippet } from "svelte";
import { get, writable } from "svelte/store";
import { describe, expect, test } from "vitest";
import NavSection from "./NavSection.svelte";

describe("NavSection", () => {
	test("renders section content and registers its metadata in context", async () => {
		const sections = writable(
			/** @type {{ id: string; dataset: { title?: string; subsection?: string } }[]} */ ([])
		);
		const observer = writable(/** @type {IntersectionObserver | null} */ (null));
		const children = createRawSnippet(() => ({ render: () => "<p>Section body</p>" }));
		const context = new Map();
		context.set("sections", sections);
		context.set("observer", observer);
		context.set("tocId", "contents");
		render(NavSection, {
			props: { id: "population", title: "Population", subsection: true, children },
			context
		});

		expect(screen.getByRole("heading", { name: "Population" })).toBeInTheDocument();
		expect(screen.getByText("Section body")).toBeInTheDocument();
		await waitFor(() =>
			expect(get(sections)).toContainEqual({
				id: "population",
				dataset: { title: "Population", subsection: "true" }
			})
		);
	});
});
