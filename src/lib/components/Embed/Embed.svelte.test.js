import "@testing-library/jest-dom/vitest";
import { render } from "@testing-library/svelte";
import { afterEach, expect, test, vi } from "vitest";
import Embed from "./Embed.svelte";

const child = vi.hoisted(() => ({ sendMessage: vi.fn(), remove: vi.fn(), construct: vi.fn() }));
vi.mock("pym.js", () => ({
	default: {
		Child: class {
			constructor(options) {
				child.construct(options);
				return child;
			}
		}
	}
}));
afterEach(() => vi.useRealTimers());

test("Embed pairs load events and disposes polling and child on unmount", () => {
	vi.useFakeTimers();
	const onLoad = vi.fn();
	const legacyLoad = vi.fn();
	const { unmount } = render(Embed, {
		props: { id: "parent-frame", polling: 100, onLoad },
		events: { load: legacyLoad }
	});
	expect(child.construct).toHaveBeenCalledExactlyOnceWith({ id: "parent-frame" });
	expect(onLoad).toHaveBeenCalledOnce();
	expect(legacyLoad.mock.calls[0][0].detail).toBe(onLoad.mock.calls[0][0]);
	vi.advanceTimersByTime(100);
	expect(child.sendMessage).toHaveBeenCalledOnce();
	unmount();
	expect(child.remove).toHaveBeenCalledOnce();
	vi.advanceTimersByTime(300);
	expect(child.sendMessage).toHaveBeenCalledOnce();
});
