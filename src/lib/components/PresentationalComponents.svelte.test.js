import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/svelte";
import { createRawSnippet } from "svelte";
import { describe, expect, test } from "vitest";
import BackLink from "$lib/components/BackLink/BackLink.svelte";
import Divider from "$lib/components/Divider/Divider.svelte";
import Em from "$lib/components/Em/Em.svelte";
import ErrorPanel from "$lib/components/ErrorPanel/ErrorPanel.svelte";
import Icon from "$lib/components/Icon/Icon.svelte";
import Notice from "$lib/components/Notice/Notice.svelte";
import Section from "$lib/components/Section/Section.svelte";

/** @param {string} content */
function contentSnippet(content) {
	return createRawSnippet(() => ({ render: () => `<span>${content}</span>` }));
}

describe("Presentational components", () => {
	test("BackLink forwards its destination and custom class", () => {
		const { container } = render(BackLink, {
			props: { href: "#summary", cls: "workbench-back-link" }
		});

		expect(screen.getByRole("link", { name: /Back to top/ })).toHaveAttribute("href", "#summary");
		expect(container.firstElementChild).toHaveClass("workbench-back-link");
	});

	test("Divider applies width and colour modes", () => {
		const { container } = render(Divider, {
			props: { hr: "narrow", mode: "light" }
		});
		const rule = container.querySelector("hr");

		expect(rule).toHaveClass("ons-svelte-hr-narrow", "ons-svelte-hr-light");
		expect(screen.getByRole("separator")).toBe(rule);
	});

	test("Em derives readable text styling when its colour changes", async () => {
		const { container, rerender } = render(Em, {
			props: { color: "white", children: contentSnippet("Highlighted text") }
		});
		const mark = container.querySelector("mark");
		if (!mark) throw new Error("Em did not render its mark element");
		const initialTextColor = mark.style.color;

		await rerender({ color: "black", mode: "badge", nowrap: false, ariaLabel: "Highlighted text" });

		expect(mark).toHaveClass("ons-svelte-badge");
		expect(mark).not.toHaveClass("ons-u-nowrap");
		expect(mark).toHaveAttribute("aria-label", "Highlighted text");
		expect(screen.getByText("Highlighted text")).toBeInTheDocument();
		expect(mark.style.color).not.toBe(initialTextColor);
	});

	test("ErrorPanel renders its message and slotted details", () => {
		render(ErrorPanel, {
			props: {
				message: "Check your answer",
				children: contentSnippet("Enter a valid response.")
			}
		});

		expect(screen.getByText("Check your answer")).toBeInTheDocument();
		expect(screen.getByText("Enter a valid response.")).toBeInTheDocument();
	});

	test("Icon renders the selected path and size", () => {
		const { container } = render(Icon, {
			props: { type: "tick", size: "xl", marginLeft: true }
		});
		const icon = container.querySelector("svg");

		expect(icon).toHaveAttribute("viewBox", "1.5 3 13 10");
		expect(icon).toHaveClass("ons-icon--xl", "ons-u-ml-2xs");
	});

	test("Notice renders its selected mode and content", () => {
		const { container } = render(Notice, {
			props: { mode: "warning", children: contentSnippet("Review these details.") }
		});

		expect(container.querySelector(".ons-panel--warn")).toBeInTheDocument();
		expect(screen.getByText("Warning:")).toBeInTheDocument();
		expect(screen.getByText("Review these details.")).toBeInTheDocument();
	});

	test("Section forwards its id and renders a hidden heading and content", () => {
		const { container } = render(Section, {
			props: {
				id: "overview",
				title: "Overview",
				hideTitle: true,
				marginTop: true,
				children: contentSnippet("Section content")
			}
		});
		const heading = screen.getByRole("heading", { name: "Overview" });

		expect(container.querySelector("#overview")).toBeInTheDocument();
		expect(heading).toHaveClass("ons-u-vh");
		expect(screen.getByText("Section content")).toBeInTheDocument();
	});
});
