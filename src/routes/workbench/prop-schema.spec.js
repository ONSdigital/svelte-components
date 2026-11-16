import { expect, test } from "vitest";
import { extractProps, getPropSchemas } from "./prop-schema.server.js";

test("schema inventory covers implementations, public aliases and external chart examples", () => {
	const schemas = getPropSchemas();
	expect(schemas.length).toBeGreaterThan(70);
	for (const name of [
		"Button",
		"Input",
		"Card",
		"AccordionItem",
		"Sparkline",
		"Cards",
		"Twisty",
		"AccessibleSelect",
		"Chart",
		"DotPlotChart"
	])
		expect(schemas.some((schema) => schema.name === name)).toBe(true);
	const button = schemas.find((schema) => schema.name === "Button");
	expect(button?.fields.find((field) => field.name === "variant")?.options).toEqual([
		"primary",
		"secondary",
		"ghost"
	]);
	expect(button?.fields.find((field) => field.name === "onClick")?.kind).toBe("callback");
	expect(button?.fields.find((field) => field.name === "children")?.kind).toBe("snippet");
	expect(
		schemas
			.find((schema) => schema.name === "Input")
			?.fields.find((field) => field.name === "value")?.bindable
	).toBe(true);
	for (const schema of schemas)
		expect(new Set(schema.fields.map((field) => field.name)).size).toBe(schema.fields.length);
});

test("schema extraction reads TS props and legacy external props without evaluating defaults", () => {
	const modern = extractProps(
		'<script lang="ts">interface Props { label?: string; disabled?: boolean } let { label = "Example", disabled = false } : Props = $props();</script>',
		"Example.svelte"
	);
	expect(modern.map((field) => field.name)).toEqual(["label", "disabled"]);
	expect(modern[1].kind).toBe("boolean");
	const documented = extractProps(
		'<script lang="ts">let { label = "" }: {\n\t/** Button label */\n\tlabel?: string;\n} = $props();</script>',
		"Documented.svelte"
	);
	expect(documented[0].description).toBe("Button label");
	const legacy = extractProps(
		"<script>/** @type {number} */ export let value = 5;</script>",
		"Legacy.svelte"
	);
	expect(legacy[0]).toMatchObject({ name: "value", initial: 5, kind: "number" });
});
test("schema extraction reads JSDoc @typedef props with types and descriptions", () => {
	const fields = extractProps(
		'<script>\n/**\n * @typedef {Object} Props\n * @property {"a" | "b"} [variant] - Style variant\n * @property {import("svelte").Snippet} [children] Default content\n */\n\n/** @type {Props} */\nlet { variant = "a", children } = $props();\n</script>',
		"Typedef.svelte"
	);
	expect(fields[0]).toMatchObject({
		name: "variant",
		kind: "enum",
		options: ["a", "b"],
		description: "Style variant"
	});
	expect(fields[1]).toMatchObject({
		name: "children",
		kind: "snippet",
		description: "Default content"
	});
});
