/* global $state -- runes are available in .svelte.test.js files */
import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/svelte";
import { flushSync } from "svelte";
import { describe, expect, test } from "vitest";
import Checkbox from "./Checkbox.svelte";

// Props with checked bound to state.checked, the same as bind:checked={state.checked} in a parent
// component. (Spreading an object with a getter would copy its value instead of binding it.)
/** @param {{ checked?: boolean }} state */
const boundProps = (state) =>
	Object.defineProperty({ id: "animate", label: "Animate" }, "checked", {
		get: () => state.checked,
		set: (v) => {
			state.checked = v;
		},
		enumerable: true
	});

describe("Checkbox", () => {
	test("is unchecked by default", () => {
		render(Checkbox, { props: { id: "animate", label: "Animate" } });
		expect(screen.getByRole("checkbox", { name: "Animate" })).not.toBeChecked();
	});

	test("shows an initial checked value from bind:checked", async () => {
		const state = $state({ checked: true });
		render(Checkbox, { props: boundProps(state) });
		const checkbox = screen.getByRole("checkbox", { name: "Animate" });
		flushSync();
		expect(checkbox).toBeChecked();

		await fireEvent.click(checkbox);
		expect(checkbox).not.toBeChecked();
		expect(state.checked).toBe(false);
	});

	test("binds checked to a variable that starts undefined, as in v1", async () => {
		const state = $state({ checked: undefined });
		render(Checkbox, { props: boundProps(state) });
		expect(state.checked).toBe(false);

		await fireEvent.click(screen.getByRole("checkbox", { name: "Animate" }));
		expect(state.checked).toBe(true);
	});

	test("follows changes to checked from outside", () => {
		const state = $state({ checked: false });
		render(Checkbox, { props: boundProps(state) });
		state.checked = true;
		flushSync();
		expect(screen.getByRole("checkbox", { name: "Animate" })).toBeChecked();
	});

	test("uses item.checked when checked isn't given", () => {
		render(Checkbox, { props: { item: { id: "animate", label: "Animate", checked: true } } });
		flushSync();
		expect(screen.getByRole("checkbox", { name: "Animate" })).toBeChecked();
	});
});
