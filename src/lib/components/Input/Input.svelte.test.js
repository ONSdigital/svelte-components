import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/svelte";
import { describe, expect, test, vi } from "vitest";
import Input from "./Input.svelte";

describe("Input", () => {
	test("binds value and sends matching callback and dispatched input details", async () => {
		const onInput = vi.fn();
		const onLegacyInput = vi.fn();
		render(Input, {
			props: { id: "name", label: "Name", value: "", onInput },
			events: { input: onLegacyInput }
		});

		const input = screen.getByRole("textbox", { name: "Name" });
		await fireEvent.input(input, { target: { value: "Ada" } });

		expect(input).toHaveValue("Ada");
		expect(onInput).toHaveBeenCalledOnce();
		expect(onInput.mock.calls[0][0].value).toBe("Ada");
		expect(onInput.mock.calls[0][0].e).toBeInstanceOf(Event);
		expect(onLegacyInput).toHaveBeenCalledOnce();
		expect(onLegacyInput.mock.calls[0][0].detail).toBe(onInput.mock.calls[0][0]);
	});
});
