import fs from "node:fs";
import { describe, expect, test } from "vitest";
import { designSystemVersion, generate, readExports } from "../scripts/agent-docs.js";

// The llms.txt files shipped in the package (and on the docs site) are generated from the source.
// These checks stop them drifting from src/lib/index.js and the component props.
describe("agent docs (llms.txt)", () => {
	const { index, full } = generate();
	const source = fs.readFileSync("src/lib/index.js", "utf8");
	const exported = [...source.matchAll(/export \{ (?:default as )?(\w+) \}/g)].map((m) => m[1]);

	test("index and full reference cover every export of src/lib/index.js", () => {
		expect(exported.length).toBeGreaterThan(70);
		for (const name of exported) {
			const canonical = readExports(source).find(
				(e) => e.name === name || e.aliases.includes(name)
			);
			expect(canonical, name).toBeDefined();
			expect(index, name).toContain(canonical?.name === name ? `[${name}]` : `\`${name}\``);
			expect(full, name).toMatch(new RegExp(`^### ${canonical?.name}(\\(\\))?$`, "m"));
		}
	});

	test("every prop has a description in the full reference", () => {
		expect(full).not.toContain("(no description)");
		expect(index).not.toContain("(no description yet)");
	});

	test("states the ONS Design System version from main.css", () => {
		const version = designSystemVersion();
		expect(version).toMatch(/^\d+\.\d+\.\d+$/);
		expect(index).toContain(`version ${version} of the ONS Design System`);
	});

	test("examples use Svelte 5 syntax only", () => {
		const examples = [...full.matchAll(/```svelte\n([\s\S]*?)```/g)].map((m) => m[1]);
		expect(examples.length).toBeGreaterThan(20);
		for (const example of examples)
			expect(example).not.toMatch(/\bon:[a-z]|export let|^\s*let \w+;$/m);
	});
});
