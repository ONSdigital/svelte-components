import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/svelte";
import { createRawSnippet } from "svelte";
import { describe, expect, test } from "vitest";
import NavSections from "./NavSections.svelte";

describe("NavSections", () => {
	test("renders default, named, and footer snippets", () => {
		/** @param {string} content */
		const snippet = (content) => createRawSnippet(() => ({ render: () => `<p>${content}</p>` }));
		const { container } = render(NavSections, {
			props: {
				noContents: true,
				before: snippet("Before sections"),
				children: snippet("Section content"),
				beforeNav: snippet("Before navigation"),
				footer: snippet("Sections footer")
			}
		});

		expect(screen.getByText("Before sections")).toBeInTheDocument();
		expect(container.querySelector("#toc")).toBeInTheDocument();
		expect(screen.getByText("Section content")).toBeInTheDocument();
		expect(screen.getByText("Before navigation")).toBeInTheDocument();
		expect(screen.getByText("Sections footer")).toBeInTheDocument();
	});
});
