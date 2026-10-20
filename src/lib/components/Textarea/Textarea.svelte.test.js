import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/svelte";
import { describe, expect, test, vi } from "vitest";
import Textarea from "./Textarea.svelte";

describe("Textarea", () => {
	test("binds text, reports the remaining character count, and dispatches matching input detail", async () => {
		const onInput = vi.fn();
		const onLegacyInput = vi.fn();
		render(Textarea, {
			props: { id: "response", label: "Response", value: "", charLimit: 4, onInput },
			events: { input: onLegacyInput }
		});

		const textarea = screen.getByRole("textbox", { name: "Response" });
		await fireEvent.input(textarea, { target: { value: "abcd" } });

		expect(textarea).toHaveValue("abcd");
		expect(screen.getByText("You have 0 characters remaining")).toBeInTheDocument();
		expect(onInput).toHaveBeenCalledOnce();
		expect(onInput.mock.calls[0][0].value).toBe("abcd");
		expect(onLegacyInput).toHaveBeenCalledOnce();
		expect(onLegacyInput.mock.calls[0][0].detail).toBe(onInput.mock.calls[0][0]);
	});
});
