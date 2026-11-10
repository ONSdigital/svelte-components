import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/svelte";
import { expect, test, vi } from "vitest";
import InputOptions from "./InputOptions.svelte";

test("Input Options starts collapsed and edits typed inputs without publishing invalid JSON", async () => {
	const onChange = vi.fn();
	const { container } = render(InputOptions, { componentName: "Example", fields: [
		{ name: "label", type: "string", kind: "string", initial: "Example" },
		{ name: "disabled", type: "boolean", kind: "boolean", initial: false },
		{ name: "items", type: "object[]", kind: "json", initial: [] }
	], onChange });
	expect(container.querySelector("details")).not.toHaveAttribute("open");
	await fireEvent.click(screen.getByText("Input Options"));
	await fireEvent.input(screen.getByLabelText("label"), { target: { value: "Updated" } });
	expect(onChange).toHaveBeenLastCalledWith({ label: "Updated" });
	await fireEvent.click(screen.getByLabelText("disabled"));
	expect(onChange).toHaveBeenLastCalledWith({ label: "Updated", disabled: true });
	await fireEvent.input(screen.getByLabelText("items"), { target: { value: "[invalid" } });
	expect(screen.getByRole("alert")).toBeInTheDocument();
	expect(onChange).toHaveBeenCalledTimes(2);
	await fireEvent.input(screen.getByLabelText("items"), { target: { value: '[{"label":"One"}]' } });
	expect(screen.queryByRole("alert")).not.toBeInTheDocument();
	expect(onChange.mock.calls.at(-1)?.[0].items).toEqual([{ label: "One" }]);
	await fireEvent.click(screen.getByRole("button", { name: "Reset all" }));
	expect(onChange).toHaveBeenLastCalledWith({});
});