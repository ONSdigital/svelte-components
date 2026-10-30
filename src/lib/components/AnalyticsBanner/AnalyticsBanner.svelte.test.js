import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/svelte";
import { afterEach, expect, test } from "vitest";
import AnalyticsBanner from "./AnalyticsBanner.svelte";

afterEach(() => {
	for (const name of ["ons_cookie_policy", "ons_cookie_message_displayed"]) {
		document.cookie = `${name}=;max-age=0;path=/`;
	}
});

test("consent can be accepted without loading analytics when analyticsId is empty", async () => {
	render(AnalyticsBanner, {
		props: { analyticsId: "", page: { url: new URL("https://example.test/") } }
	});
	await fireEvent.click(screen.getByRole("button", { name: "Accept additional cookies" }));
	expect(screen.getByText("You have accepted all additional cookies.")).toBeInTheDocument();
	expect(document.querySelector('script[src*="googletagmanager"]')).toBeNull();
	await fireEvent.click(screen.getByRole("button", { name: "Hide this message" }));
	expect(screen.queryByRole("region", { name: "Cookies banner" })).not.toBeInTheDocument();
});

test("consent rejection is reflected in the confirmation", async () => {
	render(AnalyticsBanner, { props: { analyticsId: "" } });
	await fireEvent.click(screen.getByRole("button", { name: "Reject additional cookies" }));
	expect(screen.getByText("You have rejected all additional cookies.")).toBeInTheDocument();
});
