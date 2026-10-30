import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/svelte";
import { writable, get } from "svelte/store";
import { afterEach, expect, test, vi } from "vitest";
import ToolbarButton from "./ToolbarButton.svelte";
import HelpModal from "./HelpModal.svelte";

afterEach(() => {
	vi.restoreAllMocks();
	vi.unstubAllGlobals();
});

test("ToolbarButton emits both event APIs without selecting transient actions and unregisters", async () => {
	const register = vi.fn();
	const unregister = vi.fn();
	const onClick = vi.fn();
	const legacyClick = vi.fn();
	const active = writable(null);
	const context = new Map();
	context.set("activeModalId", active);
	context.set("orientation", writable("horizontal"));
	context.set("buttonIds", { register, unregister });
	const { unmount } = render(ToolbarButton, {
		props: { id: "selection", label: "Selection", transient: true, onClick },
		events: { click: legacyClick },
		context
	});
	await fireEvent.click(screen.getByRole("button", { name: "Selection" }));
	expect(register).toHaveBeenCalledWith("selection");
	expect(onClick).toHaveBeenCalledExactlyOnceWith(null);
	expect(legacyClick.mock.calls[0][0].detail).toBeNull();
	expect(get(active)).toBeNull();
	unmount();
	expect(unregister).toHaveBeenCalledWith("selection");
});

test("Toolbar help anchors to the visible wrapper and stays inside a narrow viewport", () => {
	vi.stubGlobal("innerWidth", 390);
	vi.spyOn(document.documentElement, "clientWidth", "get").mockReturnValue(375);
	const wrapper = document.createElement("div");
	wrapper.className = "toolbar-button-wrapper";
	vi.spyOn(wrapper, "getBoundingClientRect").mockReturnValue(new DOMRect(200, 0, 44, 44));
	const trigger = document.createElement("input");
	wrapper.append(trigger);
	const context = new Map();
	context.set("activeModalId", writable("toggle"));
	context.set("showHelpModals", writable(true));
	context.set("buttonIds", { buttonIds: writable(["toggle"]) });
	const { container } = render(HelpModal, { props: { triggerElement: trigger }, context });
	const modalWrapper = container.querySelector(".help-modal-wrapper");
	if (!(modalWrapper instanceof HTMLElement)) throw new Error("Help modal wrapper missing");
	expect(modalWrapper.style.left).toBe("-183px");
	expect(screen.getByRole("dialog")).toBeInTheDocument();
});
