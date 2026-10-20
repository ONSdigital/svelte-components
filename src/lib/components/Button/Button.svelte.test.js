import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen } from "@testing-library/svelte";
import { createRawSnippet } from "svelte";
import { describe, expect, test, vi } from "vitest";
import Button from "./Button.svelte";

describe("Button", () => {
	test("calls onClick and dispatches the legacy click event with the same event", async () => {
		const onClick = vi.fn();
		const onLegacyClick = vi.fn();
		const children = createRawSnippet(() => ({ render: () => "<span>Continue</span>" }));
		render(Button, { props: { children, onClick }, events: { click: onLegacyClick } });

		await fireEvent.click(screen.getByRole("button", { name: "Continue" }));

		expect(onClick).toHaveBeenCalledOnce();
		expect(onClick.mock.calls[0][0]).toBeInstanceOf(MouseEvent);
		expect(onLegacyClick).toHaveBeenCalledOnce();
		expect(onLegacyClick.mock.calls[0][0].detail).toBe(onClick.mock.calls[0][0]);
	});
});
