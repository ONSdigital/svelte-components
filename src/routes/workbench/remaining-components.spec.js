import { render } from "svelte/server";
import { expect, test } from "vitest";
import RemainingWorkbench from "./RemainingWorkbench.svelte";
import Landmarks from "./landmarks/+page.svelte";
import Theme from "$lib/components/Theme/Theme.svelte";
import { createRawSnippet } from "svelte";
import PreviewSection from "./PreviewSection.svelte";

test("remaining fixtures render on the server without browser globals", () => {
	const { body } = render(RemainingWorkbench);
	for (const text of [
		"Theme And Container",
		"Card, Hero And Highlight",
		"Tooltip",
		"Content And Messaging",
		"Main And ErrorPage"
	])
		expect(body).toContain(text);
	expect(body).not.toContain("<main");
	expect(body).toContain("/workbench/landmarks/");
});

test("landmark fixture renders one Main with child content", () => {
	const { body } = render(Landmarks);
	expect(body.match(/<main\b/g)).toHaveLength(1);
	expect(body).toContain("Main child snippet");
});

test("global Theme emits server head styles while preserving children", () => {
	const children = createRawSnippet(() => ({ render: () => "<p>Themed content</p>" }));
	const { body, head } = render(Theme, { props: { global: true, theme: "dark", children } });
	expect(head).toContain(":root");
	expect(head).toContain("--ons-color-text:var(--ons-color-white)");
	expect(body).toContain("Themed content");
});

test("preview sections preserve heading levels, anchors and example content", () => {
	const children = createRawSnippet(() => ({ render: () => "<p>Preview content</p>" }));
	const { body } = render(PreviewSection, { props: { headingId: "preview-heading", title: "Example component", level: "h3", id: "preview-anchor", children } });
	expect(body).toContain('aria-labelledby="preview-heading"');
	expect(body).toContain('id="preview-anchor"');
	expect(body).toMatch(/<h3[^>]*id="preview-heading"[^>]*>Example component/);
	expect(body).toContain("<hr");
	expect(body).toContain("Preview content");
});
