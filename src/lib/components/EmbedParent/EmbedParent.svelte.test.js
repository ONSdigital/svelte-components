/* global $state */
import "@testing-library/jest-dom/vitest";
import { render } from "@testing-library/svelte";
import { beforeEach, expect, test, vi } from "vitest";
import EmbedParent from "./EmbedParent.svelte";

const parent = vi.hoisted(() => ({ remove: vi.fn(), construct: vi.fn() }));
vi.mock("pym.js", () => ({
	default: {
		Parent: class {
			/** @param {string} id @param {string} url @param {object} config */
			constructor(id, url, config) {
				parent.construct(id, url, config, document.getElementById(id));
				this.id = id;
				this.url = url;
				this.remove = parent.remove;
			}
		}
	}
}));
beforeEach(() => {
	vi.clearAllMocks();
});

test("EmbedParent constructs a Pym parent in its container and pairs load events", () => {
	const onLoad = vi.fn();
	const legacyLoad = vi.fn();
	const { container } = render(EmbedParent, {
		props: { id: "chart", href: "/child/", title: "Population chart", onLoad },
		events: { load: legacyLoad }
	});
	const el = container.querySelector("#chart");
	expect(el).toBeInTheDocument();
	expect(parent.construct).toHaveBeenCalledExactlyOnceWith(
		"chart",
		"/child/",
		{ id: "chart-iframe", title: "Population chart", name: "population-chart" },
		el
	);
	expect(onLoad).toHaveBeenCalledOnce();
	const detail = onLoad.mock.calls[0][0];
	expect(detail).toMatchObject({
		id: "chart",
		iframeId: "chart-iframe",
		href: "/child/",
		title: "Population chart"
	});
	expect(detail.pymParent).toMatchObject({ id: "chart", url: "/child/" });
	expect(legacyLoad).toHaveBeenCalledOnce();
	expect(legacyLoad.mock.calls[0][0].detail).toBe(detail);
});

test("EmbedParent keeps an explicit name and generates a container id by default", () => {
	const { container } = render(EmbedParent, {
		props: { href: "/child/", title: "Title", name: "frame" }
	});
	const el = /** @type {HTMLElement} */ (container.querySelector("div[id]"));
	expect(el.id).not.toBe("");
	const [id, , config, target] = parent.construct.mock.calls[0];
	expect(id).toBe(el.id);
	expect(target).toBe(el);
	expect(config).toEqual({ id: `${el.id}-iframe`, title: "Title", name: "frame" });
});

test("EmbedParent binds pymParent from an undefined start and clears it on unmount", () => {
	let pymParent = $state();
	const props = { href: "/child/" };
	Object.defineProperty(props, "pymParent", {
		get: () => pymParent,
		set: (value) => {
			pymParent = value;
		},
		enumerable: true
	});
	const { unmount } = render(EmbedParent, { props });
	expect(pymParent).toMatchObject({ url: "/child/" });
	unmount();
	expect(parent.remove).toHaveBeenCalledOnce();
	expect(pymParent).toBe(null);
});
