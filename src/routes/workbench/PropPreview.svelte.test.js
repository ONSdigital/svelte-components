import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/svelte";
import { expect, test, vi } from "vitest";
import PropPreview from "./PropPreview.svelte";

test("prop preview applies live edits and reports both callback and dispatched click payloads", async () => {
	const onEvent = vi.fn();
	const schema = { name: "Button", canonical: "Button", file: "Button/Button.svelte", external: false, fields: [
		{ name: "children", type: "Snippet", kind: "snippet", defaultText: "undefined", initial: undefined, options: [], nullable: false, description: "", bindable: false },
		{ name: "onClick", type: "function", kind: "callback", defaultText: "undefined", initial: undefined, options: [], nullable: false, description: "", bindable: false },
		{ name: "disabled", type: "boolean", kind: "boolean", defaultText: "false", initial: false, options: [], nullable: false, description: "", bindable: false }
	] };
	const { rerender } = render(PropPreview, { schema, values: { children: "<span>Custom action</span>" }, onEvent });
	await fireEvent.click(screen.getByRole("button", { name: "Custom action" }));
	expect(onEvent.mock.calls.map(call => call.slice(0, 2))).toEqual([["callback", "onClick"], ["event", "click"]]);
	expect(onEvent.mock.calls[0][2]).toBe(onEvent.mock.calls[1][2]);
	await rerender({ values: { disabled: true } });
	expect(screen.getByRole("button")).toBeDisabled();
});

test("prop preview observes bindable input values and changes existing props live", async () => {
	const onEvent = vi.fn();
	/** @param {string} name @param {string} kind @param {unknown} initial @param {boolean} [bindable] */
	const field = (name, kind, initial, bindable = false) => ({ name, type: kind, kind, initial, bindable, defaultText: "undefined", options: [], nullable: true, description: "" });
	const schema = { name: "Input", canonical: "Input", file: "Input/Input.svelte", external: false, fields: [field("id", "string", null), field("label", "string", null), field("value", "string", null, true), field("onInput", "callback", undefined)] };
	const { rerender } = render(PropPreview, { schema, values: { value: "Before" }, onEvent });
	await fireEvent.input(screen.getByRole("textbox"), { target: { value: "Typed value" } });
	expect(onEvent.mock.calls.some(call => call[0] === "binding" && call[1] === "value" && call[2] === "Typed value")).toBe(true);
	await rerender({ values: { value: "After" } });
	expect(screen.getByRole("textbox")).toHaveValue("After");
});