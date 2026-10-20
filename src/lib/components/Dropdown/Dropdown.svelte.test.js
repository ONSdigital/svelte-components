import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/svelte";
import { describe, expect, test, vi } from "vitest";
import Dropdown from "./Dropdown.svelte";

describe("Dropdown", () => {
	test("binds the selected option and dispatches matching change details", async () => {
		const onChange = vi.fn();
		const onLegacyChange = vi.fn();
		render(Dropdown, {
			props: {
				id: "region",
				label: "Region",
				options: ["North", "South"],
				value: null,
				onChange
			},
			events: { change: onLegacyChange }
		});

		const select = screen.getByRole("combobox", { name: "Region" });
		await fireEvent.change(select, { target: { value: "South" } });

		expect(select).toHaveValue("South");
		expect(onChange).toHaveBeenCalledOnce();
		expect(onChange.mock.calls[0][0].value).toBe("South");
		expect(onChange.mock.calls[0][0].e).toBeInstanceOf(Event);
		expect(onLegacyChange).toHaveBeenCalledOnce();
		expect(onLegacyChange.mock.calls[0][0].detail).toBe(onChange.mock.calls[0][0]);
	});
});
