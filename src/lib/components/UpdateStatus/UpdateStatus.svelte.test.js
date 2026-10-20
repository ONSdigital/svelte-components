import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";
import UpdateStatus from "./UpdateStatus.svelte";

describe("UpdateStatus", () => {
	test("renders the recent update label without needing a date", () => {
		const { container } = render(UpdateStatus, {
			props: { recent: true }
		});

		expect(screen.getByText("Updated this week")).toBeInTheDocument();
		expect(container.querySelector(".ons-update-status__dot")).toBeInTheDocument();
	});

	test("renders the last updated date when not recent", () => {
		render(UpdateStatus, {
			props: { date: "1 September 2026" }
		});

		expect(screen.getByText("Last updated: 1 September 2026")).toBeInTheDocument();
	});

	test("renders the missing message when there is no date", () => {
		render(UpdateStatus, {
			props: { date: null }
		});

		expect(screen.getByText("No update date provided")).toBeInTheDocument();
	});

	test("updates its date state when props change", async () => {
		const { container, rerender } = render(UpdateStatus, {
			props: { date: "1 September 2026" }
		});

		expect(screen.getByText("Last updated: 1 September 2026")).toBeInTheDocument();

		await rerender({ recent: true, recentLabel: "Updated today", showRecentDot: false });

		expect(screen.getByText("Updated today")).toBeInTheDocument();
		expect(container.querySelector(".ons-update-status__dot")).not.toBeInTheDocument();
	});
});
