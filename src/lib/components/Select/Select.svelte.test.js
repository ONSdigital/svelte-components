/* global $state -- runes are available in .svelte.test.js files */
import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/svelte";
import { describe, expect, test, vi } from "vitest";

const autocompleteMock = vi.hoisted(() => ({ configure: vi.fn() }));

vi.mock("accessible-autocomplete", () => ({
	/** @param {{ id: string; element: HTMLElement }} configuration */
	default: (configuration) => {
		autocompleteMock.configure(configuration);
		const input = document.createElement("input");
		input.id = configuration.id;
		configuration.element.append(input);
	}
}));

import Select from "./Select.svelte";

describe("Select", () => {
	test("calls selection and clear callbacks with matching dispatched events", async () => {
		const onChange = vi.fn();
		const onClear = vi.fn();
		const onLegacyChange = vi.fn();
		const onLegacyClear = vi.fn();
		const option = { id: "north", label: "North" };
		render(Select, {
			props: {
				id: "region",
				label: "Region",
				options: [option],
				value: null,
				onChange,
				onClear
			},
			events: { change: onLegacyChange, clear: onLegacyClear }
		});

		await waitFor(() => expect(autocompleteMock.configure).toHaveBeenCalledOnce());
		const configuration = autocompleteMock.configure.mock.calls[0][0];
		await configuration.onConfirm(option);

		expect(onChange).toHaveBeenCalledWith(option);
		expect(onLegacyChange).toHaveBeenCalledOnce();
		expect(onLegacyChange.mock.calls[0][0].detail).toEqual(option);

		await fireEvent.click(screen.getByRole("button", { name: "Clear selection" }));

		expect(onClear).toHaveBeenCalledWith(null);
		expect(onLegacyClear).toHaveBeenCalledOnce();
		expect(onLegacyClear.mock.calls[0][0].detail).toBeNull();
	});

	test("binds value and clearInput to variables that start undefined, as in v1", async () => {
		autocompleteMock.configure.mockClear();
		const onClear = vi.fn();
		const option = { id: "north", label: "North" };
		// The same as bind:value={value} and bind:clearInput={clearInput} in a parent component
		let value = $state();
		let clearInput = $state();
		render(Select, {
			props: {
				id: "bound",
				label: "Region",
				options: [option],
				onClear,
				get value() {
					return value;
				},
				set value(v) {
					value = v;
				},
				get clearInput() {
					return clearInput;
				},
				set clearInput(v) {
					clearInput = v;
				}
			}
		});

		expect(value).toBeNull();
		expect(clearInput).toBeTypeOf("function");

		await waitFor(() => expect(autocompleteMock.configure).toHaveBeenCalledOnce());
		await autocompleteMock.configure.mock.calls[0][0].onConfirm(option);
		expect(value).toEqual(option);

		clearInput();
		expect(value).toBeNull();
		expect(onClear).toHaveBeenCalledWith(null);
	});
});
