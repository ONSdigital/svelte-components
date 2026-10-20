import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";
import Paginator from "./Paginator.svelte";

describe("Paginator", () => {
	test("renders previous and next links with the expected page labels", () => {
		render(Paginator, {
			props: {
				pageCount: 5,
				pageCurrent: 3,
				prevHref: "/page/2",
				nextHref: "/page/4"
			}
		});

		expect(screen.getByRole("link", { name: /Previous page/ })).toHaveAttribute("href", "/page/2");
		expect(screen.getByText("2 of 5")).toBeInTheDocument();
		expect(screen.getByRole("link", { name: /Next page/ })).toHaveAttribute("href", "/page/4");
		expect(screen.getByText("4 of 5")).toBeInTheDocument();
	});
});
