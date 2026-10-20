import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/svelte";
import { describe, expect, test, vi } from "vitest";
import Radios from "./Radios.svelte";

describe("Radios", () => {
	test("selects an item and sends matching callback and dispatched change details", async () => {
		const onChange = vi.fn();
		const onLegacyChange = vi.fn();
		const items = [
			{ id: "house", label: "House" },
			{ id: "flat", label: "Flat" }
		];
		render(Radios, {
			props: { id: "housing", label: "Housing type", items, value: null, onChange },
			events: { change: onLegacyChange }
		});

		const radio = screen.getByRole("radio", { name: "Flat" });
		await fireEvent.click(radio);

		expect(radio).toBeChecked();
		expect(onChange).toHaveBeenCalledOnce();
		expect(onChange.mock.calls[0][0].value).toEqual(items[1]);
		expect(onLegacyChange).toHaveBeenCalledOnce();
		expect(onLegacyChange.mock.calls[0][0].detail).toBe(onChange.mock.calls[0][0]);
	});
});
