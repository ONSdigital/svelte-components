import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/svelte";
import { describe, expect, test, vi } from "vitest";
import Checkboxes from "./Checkboxes.svelte";

describe("Checkboxes", () => {
	test("updates a selected item and emits matching callback and change detail", async () => {
		const onChange = vi.fn();
		const onLegacyChange = vi.fn();
		const items = [
			{ id: "ice-cream", label: "Ice cream", checked: false },
			{ id: "sprinkles", label: "Sprinkles", checked: false }
		];
		render(Checkboxes, {
			props: { title: "Dessert", items, value: [], onChange },
			events: { change: onLegacyChange }
		});

		const checkbox = screen.getByRole("checkbox", { name: "Sprinkles" });
		await fireEvent.click(checkbox);

		expect(checkbox).toBeChecked();
		expect(onChange).toHaveBeenCalledOnce();
		expect(onChange.mock.calls[0][0].item).toMatchObject({ id: "sprinkles", checked: true });
		expect(onLegacyChange).toHaveBeenCalledOnce();
		expect(onLegacyChange.mock.calls[0][0].detail).toBe(onChange.mock.calls[0][0]);
	});
});
