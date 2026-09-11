import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";
import ChangeStat from "./ChangeStat.svelte";

describe("ChangeStat", () => {
	test("renders a lower stat change", () => {
		render(ChangeStat, {
			props: { value: "7%", direction: "down" }
		});

		expect(screen.getByText("7%")).toBeInTheDocument();
		expect(screen.getByText("lower")).toBeInTheDocument();
	});

	test("renders a higher stat change with context", () => {
		render(ChangeStat, {
			props: { value: "1.3pp", direction: "up", context: "than the previous quarter" }
		});

		expect(screen.getByText("1.3pp")).toBeInTheDocument();
		expect(screen.getByText("higher")).toBeInTheDocument();
		expect(screen.getByText("than the previous quarter")).toBeInTheDocument();
	});

	test("renders unchanged for neutral direction", () => {
		render(ChangeStat, {
			props: { value: "0.0pp", direction: "neutral" }
		});

		expect(screen.getByText("unchanged")).toBeInTheDocument();
	});
});
