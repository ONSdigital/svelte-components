import { render } from "svelte/server";
import { expect, test } from "vitest";
import BrowserWorkbench from "./BrowserWorkbench.svelte";
import { analyticsEvent } from "$lib/components/AnalyticsBanner/AnalyticsBanner.svelte";

test("5D fixtures render on the server without browser globals", () => {
	expect(() => analyticsEvent({ event: "ssr-test" })).not.toThrow();
	const { body } = render(BrowserWorkbench);
	for (const heading of [
		"Observe And LazyLoad",
		"Embed",
		"Header",
		"Toolbar",
		"ShareButtons",
		"AnalyticsBanner",
		"Footer",
		"Scroller"
	]) {
		expect(body).toContain(heading);
	}
	expect(body).not.toContain("googletagmanager.com");
});
