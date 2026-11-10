import { render } from "svelte/server";
import { expect, test } from "vitest";
import { getPropSchemas } from "./prop-schema.server.js";
import PropPreview from "./PropPreview.svelte";
import ComponentInputs from "./ComponentInputs.svelte";

const schemas = getPropSchemas();
test.each(schemas.map(schema => ({ name: schema.name, schema })))("$name has a valid default prop fixture and context", ({ schema }) => {
	expect(() => render(PropPreview, { props: { schema, values: {} } })).not.toThrow();
});

test("component inspector renders a collapsed Input Options panel and isolated preview", () => {
	const { body } = render(ComponentInputs, { props: { schemas } });
	expect(body).toContain("Input Options");
	expect(body).toContain("/workbench/props/");
	expect(body).not.toMatch(/<details[^>]*\sopen(?:[\s=>])/);
});