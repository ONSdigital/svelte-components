import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/svelte";
import { describe, expect, test, vi } from "vitest";
import Summary from "./Summary.svelte";

describe("Summary", () => {
	test("calls onChange and dispatches the same item detail", async () => {
		const onChange = vi.fn();
		const onLegacyChange = vi.fn();
		const item = { key: "Name", value: "Ada", editable: true };
		render(Summary, {
			props: { items: [item], onChange },
			events: { change: onLegacyChange }
		});

		await fireEvent.click(screen.getByRole("link", { name: "Change value" }));

		expect(onChange).toHaveBeenCalledOnce();
		expect(onChange.mock.calls[0][0].item).toEqual(item);
		expect(onLegacyChange).toHaveBeenCalledOnce();
		expect(onLegacyChange.mock.calls[0][0].detail).toBe(onChange.mock.calls[0][0]);
	});
});
