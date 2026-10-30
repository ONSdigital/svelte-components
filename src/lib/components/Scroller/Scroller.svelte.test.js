import "@testing-library/jest-dom/vitest";
import { fireEvent, render } from "@testing-library/svelte";
import { act } from "@testing-library/svelte";
import { createRawSnippet } from "svelte";
import { afterEach, expect, test, vi } from "vitest";
import Scroller from "./Scroller.svelte";

const intersections = vi.hoisted(() => {
	/** @type {IntersectionObserverCallback | undefined} */
	let callback;
	vi.stubGlobal("IntersectionObserver", class {
		/** @param {IntersectionObserverCallback} handler */
		constructor(handler) { callback = handler; }
		observe = vi.fn();
		unobserve = vi.fn();
	});
	return {
		/** @param {Element} target */
		enter(target) {
			callback?.([/** @type {IntersectionObserverEntry} */ ({ target, isIntersecting: true })], /** @type {IntersectionObserver} */ ({}));
		}
	};
});

afterEach(() => vi.restoreAllMocks());

test("Scroller emits matching entry detail and removes window listeners on unmount", async () => {
	vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockReturnValue(
		/** @type {DOMRect} */ ({ top: 0, bottom: 2000, left: 0, right: 800, width: 800, height: 2000 })
	);
	const remove = vi.spyOn(window, "removeEventListener");
	const onEnter = vi.fn();
	const legacyEnter = vi.fn();
	const content = createRawSnippet(() => ({ render: () => "<div>Scroll content</div>" }));
	const { unmount } = render(Scroller, {
		props: { id: "test-scroll", background: content, foreground: content, onEnter },
		events: { enter: legacyEnter }
	});
	await fireEvent.resize(window);
	expect(onEnter).toHaveBeenCalledOnce();
	expect(legacyEnter.mock.calls[0][0].detail).toBe(onEnter.mock.calls[0][0]);
	unmount();
	expect(remove.mock.calls.some(([name]) => name === "scroll")).toBe(true);
	expect(remove.mock.calls.some(([name]) => name === "resize")).toBe(true);
});

test("Scroller refreshes immediately on intersection without a second scroll event", async () => {
	let top = 2000;
	vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(() => new DOMRect(0, top, 800, 2000));
	const onEnter = vi.fn();
	const { container } = render(Scroller, { props: { onEnter } });
	expect(onEnter).not.toHaveBeenCalled();
	const outer = container.querySelector("svelte-scroller-outer");
	if (!outer) throw new Error("Scroller outer missing");
	top = 0;
	await act(() => intersections.enter(outer));
	expect(onEnter).toHaveBeenCalledOnce();
});
