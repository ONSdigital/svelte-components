import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/svelte";
import { createRawSnippet } from "svelte";
import { describe, expect, test } from "vitest";
import DocumentList from "./DocumentList.svelte";

describe("DocumentList", () => {
	test("renders documents from items and children", () => {
		const children = createRawSnippet(() => ({
			render: () => '<li class="ons-document-list__item">Manually provided document</li>'
		}));
		render(DocumentList, {
			props: {
				items: [{ title: "Census guide", href: "/guide", description: "Read the guide." }],
				children
			}
		});

		expect(screen.getByRole("link", { name: "Census guide" })).toHaveAttribute("href", "/guide");
		expect(screen.getByText("Read the guide.")).toBeInTheDocument();
		expect(screen.getByText("Manually provided document")).toBeInTheDocument();
	});
});
