import "@testing-library/jest-dom/vitest";
import { act, render, screen } from "@testing-library/svelte";
import { createRawSnippet } from "svelte";
import { afterEach, describe, expect, test, vi } from "vitest";
import Observe from "./Observe.svelte";
import LazyLoad from "../LazyLoad/LazyLoad.svelte";

describe("Viewport components", () => {
	afterEach(() => vi.unstubAllGlobals());

	function mockObserver() {
		/** @type {IntersectionObserverCallback | undefined} */
		let callback;
		const observer = {
			observe: vi.fn(),
			unobserve: vi.fn(),
			disconnect: vi.fn(),
			takeRecords: () => [],
			root: null,
			rootMargin: "0px",
			thresholds: [0]
		};
		vi.stubGlobal(
			"IntersectionObserver",
			class {
				/** @param {IntersectionObserverCallback} handler */
				constructor(handler) {
					callback = handler;
					return observer;
				}
			}
		);
		return {
			observer,
			/** @param {boolean} isIntersecting */
			async intersect(isIntersecting) {
				const entry = /** @type {IntersectionObserverEntry} */ ({
					isIntersecting,
					target: observer.observe.mock.calls[0][0]
				});
				await act(() => callback?.([entry], /** @type {IntersectionObserver} */ (observer)));
				return entry;
			}
		};
	}

	test("Observe pairs callbacks and events and disconnects on unmount", async () => {
		const { observer, intersect } = mockObserver();
		const onEnter = vi.fn();
		const onExit = vi.fn();
		const legacyEnter = vi.fn();
		const legacyExit = vi.fn();
		const { unmount } = render(Observe, {
			props: { onEnter, onExit },
			events: { enter: legacyEnter, exit: legacyExit }
		});
		const entry = await intersect(true);
		await intersect(true);
		expect(onEnter).toHaveBeenCalledOnce();
		expect(legacyEnter.mock.calls[0][0].detail).toBe(entry);
		const exit = await intersect(false);
		expect(onExit).toHaveBeenCalledOnce();
		expect(legacyExit.mock.calls[0][0].detail).toBe(exit);
		unmount();
		expect(observer.disconnect).toHaveBeenCalledOnce();
	});

	test("LazyLoad renders children on entry and releases its observer", async () => {
		const { observer, intersect } = mockObserver();
		const children = createRawSnippet(() => ({ render: () => "<p>Loaded content</p>" }));
		render(LazyLoad, { props: { children } });
		expect(screen.queryByText("Loaded content")).not.toBeInTheDocument();
		await intersect(true);
		expect(screen.getByText("Loaded content")).toBeInTheDocument();
		expect(observer.unobserve).toHaveBeenCalledOnce();
		expect(observer.disconnect).toHaveBeenCalledOnce();
	});
});
