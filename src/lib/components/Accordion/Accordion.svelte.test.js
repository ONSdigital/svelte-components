import "@testing-library/jest-dom/vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/svelte";
import { createRawSnippet } from "svelte";
import { beforeEach, describe, expect, test, vi } from "vitest";
import Accordion from "./Accordion.svelte";

describe("Accordion", () => {
	beforeEach(() => {
		vi.stubGlobal("localStorage", {
			getItem: vi.fn(() => null),
			setItem: vi.fn(),
			removeItem: vi.fn()
		});
	});

	test("forwards toggle detail to callback and dispatched event", async () => {
		const onToggle = vi.fn();
		const onLegacyToggle = vi.fn();
		const children = createRawSnippet(() => ({
			render: () =>
				'<div id="first" class="ons-details ons-js-details" data-group="workbench-accordion" data-open="false"><div class="ons-js-details-heading">First panel</div><div class="ons-js-details-content">First content</div></div>'
		}));
		render(Accordion, {
			props: { id: "workbench-accordion", children, onToggle },
			events: { toggle: onLegacyToggle }
		});

		expect(screen.getByText("First content")).toBeInTheDocument();
		await waitFor(() =>
			expect(document.querySelector(".ons-details--initialised")).toBeInTheDocument()
		);
		await fireEvent.click(screen.getByText("First panel"));

		expect(onToggle).toHaveBeenCalledOnce();
		expect(onToggle.mock.calls[0][0]).toMatchObject({ id: "first", open: true });
		expect(onLegacyToggle).toHaveBeenCalledOnce();
		expect(onLegacyToggle.mock.calls[0][0].detail).toBe(onToggle.mock.calls[0][0]);
	});
});
