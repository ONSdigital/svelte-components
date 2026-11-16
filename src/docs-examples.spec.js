import fs from "node:fs";
import path from "node:path";
import { compile } from "svelte/compiler";
import { expect, test } from "vitest";

// Code examples in each component's docs/*.md are shown in Storybook, shipped in the package and
// copied into llms-full.txt, so people and coding agents copy them. Check they compile as Svelte 5
// (runes mode) code, without deprecation warnings.
const root = "src/lib/components";
const ignoredWarnings = /^(a11y_|css_unused_selector|non_reactive_update|state_referenced_locally)/;

const examples = fs.readdirSync(root).flatMap((folder) => {
	const dir = path.join(root, folder, "docs");
	if (!fs.existsSync(dir)) return [];
	return fs
		.readdirSync(dir)
		.flatMap((file) =>
			[
				...fs
					.readFileSync(path.join(dir, file), "utf8")
					.matchAll(/```(?:html|svelte)\n([\s\S]*?)```/g)
			].map((match, i) => ({ id: `${folder}/docs/${file} example ${i + 1}`, code: match[1] }))
		);
});

test("there are docs examples to check", () => expect(examples.length).toBeGreaterThan(50));

test.each(examples)("$id compiles in runes mode", ({ code }) => {
	const { warnings } = compile(code, {
		runes: true,
		filename: "Example.svelte",
		generate: "client"
	});
	expect(
		warnings.filter((w) => !ignoredWarnings.test(w.code)).map((w) => `${w.code}: ${w.message}`)
	).toEqual([]);
});
