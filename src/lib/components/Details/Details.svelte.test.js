import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/svelte";
import { createRawSnippet } from "svelte";
import { describe, expect, test, vi } from "vitest";
import Details from "./Details.svelte";

describe("Details", () => {
	test("supports bindable open state and matching toggle APIs", async () => {
		const onToggle = vi.fn();
		const onLegacyToggle = vi.fn();
		const children = createRawSnippet(() => ({ render: () => "<p>Details content</p>" }));
		const { container } = render(Details, {
			props: { title: "More information", open: false, children, onToggle },
			events: { toggle: onLegacyToggle }
		});
		const details = container.querySelector("details");
		if (!details) throw new Error("Details did not render its native element");
		const summary = screen.getByText("More information").closest("summary");
		if (!summary) throw new Error("Details did not render its summary element");

		expect(screen.getByText("Details content")).toBeInTheDocument();
		await fireEvent.click(summary);
		await waitFor(() => expect(details).toHaveAttribute("open"));
		await fireEvent(details, new Event("toggle"));

		expect(onToggle).toHaveBeenCalledOnce();
		expect(onToggle.mock.calls[0][0].open).toBe(true);
		expect(onLegacyToggle).toHaveBeenCalledOnce();
		expect(onLegacyToggle.mock.calls[0][0].detail).toBe(onToggle.mock.calls[0][0]);
	});
});
