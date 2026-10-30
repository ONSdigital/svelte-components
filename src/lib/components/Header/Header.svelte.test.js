import { expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/svelte";
import initNav from "./nav.js";
import HeaderNavLegacy from "./HeaderNavLegacy.svelte";

const ticks = vi.hoisted(() => ({ add: vi.fn() }));
vi.mock("tick-manager", () => ({ AddTick: ticks.add }));
vi.mock("viewport-details", () => ({ getViewportDetails: () => ({ resized: true }) }));

test("Header navigation disposes its click and viewport callbacks", () => {
	const root = document.createElement("header");
	root.innerHTML =
		'<button class="ons-js-navigation-button"></button><nav class="ons-js-navigation"></nav>';
	document.body.append(root);
	const button = root.querySelector("button");
	const navigation = root.querySelector("nav");
	if (!button || !navigation) throw new Error("Header test markup missing");
	const dispose = initNav(root);
	button.click();
	expect(navigation.getAttribute("aria-hidden")).toBe("false");
	dispose();
	button.click();
	expect(navigation.getAttribute("aria-hidden")).toBe("false");
	root.remove();
});

test("Legacy Header submenus open on mobile and release handlers on unmount", async () => {
	vi.stubGlobal(
		"matchMedia",
		vi.fn(() => ({ matches: true }))
	);
	try {
		const { unmount } = render(HeaderNavLegacy);
		await fireEvent.click(screen.getByRole("link", { name: "Menu", exact: true }));
		const submenu = screen.getByRole("link", { name: "Business, industry and trade sub menu" });
		await fireEvent.click(submenu);
		expect(submenu.getAttribute("aria-expanded")).toBe("true");
		unmount();
		submenu.addEventListener("click", (event) => event.preventDefault(), { once: true });
		submenu.click();
		expect(submenu.getAttribute("aria-expanded")).toBe("true");
	} finally {
		vi.unstubAllGlobals();
	}
});
