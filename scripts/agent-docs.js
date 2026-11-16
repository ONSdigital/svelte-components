// Agent-facing documentation for the package, in the llms.txt format (https://llmstxt.org):
//
//   node scripts/agent-docs.js <dir>   Writes <dir>/llms.txt (setup, rules and a component index)
//                                     and <dir>/llms-full.txt (the same, plus every component's props
//                                     and an example).
//
// It's generated from the source (src/lib/index.js, each component's props and docs/component.md),
// so it stays in step with the components. `prepack` writes it to dist/ (shipped in the npm package)
// and `build:docs` writes it to storybook-static/ (published with the docs site).

import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";
import { COMPONENTS, parseProps, isSnippet } from "./prop-docs.js";

const require = createRequire(import.meta.url);
const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
const NAME = pkg.name;
const SITE = pkg.homepage ?? "https://onsdigital.github.io/svelte-components";
const STORYBOOK = SITE.replace(/\/$/, "");
const PACKAGE_DIR = `node_modules/${NAME}/dist`;

/** @param {string} text */
const decode = (text) =>
	text
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">")
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")
		.replace(/&amp;/g, "&");

/**
 * @typedef {{ name: string; file: string; folder: string; group: string; aliases: string[]; kind: "component" | "function" }} Export
 */

/** Exports of src/lib/index.js, in order, with aliases folded into the component they alias */
export function readExports(source = fs.readFileSync("src/lib/index.js", "utf8")) {
	/** @type {Export[]} */
	const exports = [];
	let group = "Other";
	for (const line of source.split("\n")) {
		const heading = line.match(/^\/\/\s*(.+)$/);
		if (heading && !/ts-nocheck/.test(heading[1])) group = heading[1].trim();
		const component = line.match(
			/export \{ default as (\w+) \} from "\.\/components\/([^/]+)\/([^"]+)\.svelte"/
		);
		const named = line.match(/export \{ (\w+) \} from "\.\/components\/([^/]+)\/([^"]+)\.svelte"/);
		const match = component ?? named;
		if (!match) continue;
		const [, name, folder, base] = match;
		const file = `${folder}/${base}.svelte`;
		const original = component && exports.find((e) => e.kind === "component" && e.file === file);
		if (original) original.aliases.push(name);
		else
			exports.push({
				name,
				file,
				folder,
				group,
				aliases: [],
				kind: component ? "component" : "function"
			});
	}
	return exports;
}

/** Storybook section ("Layout", "Form elements", ...) for each stories file */
const storySections = new Map();

/** Storybook docs page for each component, from the `title` in its stories file */
function storyLinks() {
	/** @type {Map<string, string>} stories file name -> docs page url */
	const links = new Map();
	for (const folder of fs.readdirSync(COMPONENTS)) {
		const dir = path.join(COMPONENTS, folder);
		if (!fs.statSync(dir).isDirectory()) continue;
		for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".stories.svelte"))) {
			const title = fs.readFileSync(path.join(dir, file), "utf8").match(/title:\s*"([^"]+)"/)?.[1];
			if (!title) continue;
			const id = title
				.toLowerCase()
				.replace(/[^a-z0-9]+/g, "-")
				.replace(/^-|-$/g, "");
			links.set(file.replace(".stories.svelte", ""), `${STORYBOOK}/?path=/docs/${id}--docs`);
			storySections.set(file.replace(".stories.svelte", ""), title.split("/")[0]);
		}
	}
	return links;
}

/**
 * The opening paragraph of a component's docs, as plain text
 * @param {string} folder
 * @param {Set<string>} knownUrls
 */
function docsSummary(folder, knownUrls) {
	const file = path.join(COMPONENTS, folder, "docs", "component.md");
	if (!fs.existsSync(file)) return { summary: "", experimental: false };
	const paragraphs = fs
		.readFileSync(file, "utf8")
		.split(/\n\s*\n/)
		.map((p) => p.trim())
		.filter(Boolean);
	let experimental = false;
	/** @type {string[]} */
	const parts = [];
	for (const paragraph of paragraphs) {
		if (/class="ons-warning"/.test(paragraph) && /experimental/i.test(paragraph)) {
			experimental = true;
			continue;
		}
		if (/^(```|<!--|#)/.test(paragraph)) break;
		parts.push(paragraph);
		// A paragraph that introduces a list ("does two things:") needs the list too
		if (!/:$/.test(paragraph)) break;
	}
	const summary = parts
		.join(" ")
		// Drop HTML tags (eg. warning spans), but not ones quoted in `code`
		.split(/(`[^`]*`)/)
		.map((part) => (part.startsWith("`") ? part : part.replace(/<[^>]+>/g, "")))
		.join("")
		.replace(/\[([^\]]+)\]\((\/[^)]*)\)/g, (_, text, href) => {
			// Relative Storybook links: keep them only if they still point to a docs page
			const url = `${STORYBOOK}/?path=${href}`;
			return knownUrls.has(url) ? `[${text}](${url})` : text;
		})
		.replace(/\s+/g, " ")
		.trim();
	return { summary: decode(summary), experimental };
}

/**
 * The first complete example in a component's docs, if it's short
 * @param {string} folder
 * @param {number} [maxLines]
 */
function docsExample(folder, maxLines = 40) {
	const file = path.join(COMPONENTS, folder, "docs", "component.md");
	if (!fs.existsSync(file)) return null;
	for (const match of fs
		.readFileSync(file, "utf8")
		.matchAll(/```(?:html|svelte)\n([\s\S]*?)```/g)) {
		const code = match[1].trimEnd();
		if (/<script/.test(code) && code.split("\n").length <= maxLines) return code;
	}
	return null;
}

/** The Design System version imported by src/lib/css/main.css */
export function designSystemVersion() {
	const css = fs.readFileSync("src/lib/css/main.css", "utf8");
	return css.match(/design-system\/([\d.]+)\/css\/main\.css/)?.[1] ?? null;
}

/** Chart components currently exported by @onsvisual/svelte-charts, if it's installed */
function chartLibrary() {
	try {
		// The package's `exports` don't include package.json, so read it from node_modules
		const dir = path.join(
			path.dirname(require.resolve("svelte/package.json")),
			"..",
			"@onsvisual",
			"svelte-charts"
		);
		const { version } = JSON.parse(fs.readFileSync(path.join(dir, "package.json"), "utf8"));
		const index = fs.readFileSync(path.join(dir, "index.mjs"), "utf8");
		const charts = [...index.matchAll(/^export \{ default as (\w*Chart) \}/gm)].map((m) => m[1]);
		return { version, charts };
	} catch {
		return null;
	}
}

/** @param {import("./prop-docs.js").Prop} prop */
const throwsWhenBoundUndefined = (prop) =>
	Boolean(
		prop.bindable &&
			!prop.defaultInScript &&
			prop.defaultValue !== undefined &&
			prop.defaultValue !== "undefined"
	);

/** @param {Export} e */
function importLine(e) {
	return `import { ${e.name} } from "${NAME}";`;
}

/** @returns {{ index: string; full: string }} */
export function generate() {
	const exports = readExports();
	const links = storyLinks();
	const knownUrls = new Set(links.values());
	const dsVersion = designSystemVersion();
	const charts = chartLibrary();
	const peers = Object.keys(pkg.peerDependencies ?? {}).filter((p) => p !== "svelte");

	/** Props for each component file */
	const propsFor = (/** @type {Export} */ e) =>
		parseProps(fs.readFileSync(path.join(COMPONENTS, e.file), "utf8"))?.props ?? [];

	// Bindable props that still have a default: binding an `undefined` variable to them throws
	const bindWarnings = exports
		.filter((e) => e.kind === "component")
		.flatMap((e) =>
			propsFor(e)
				.filter(throwsWhenBoundUndefined)
				.map((p) => `${e.name} \`${p.name}\``)
		);

	const header = [
		`# ${NAME}`,
		"",
		`> Svelte 5 components that render ONS Design System markup and styles, for ONS web pages, articles and data visualisations. Version ${pkg.version}.`,
		"",
		`- Storybook docs, with examples of every component: ${STORYBOOK}/`,
		`- Workbench, to try out components and their props: ${STORYBOOK}/workbench/`,
		`- Full reference, with every component's props and an example: \`${PACKAGE_DIR}/llms-full.txt\` (or ${STORYBOOK}/llms-full.txt)`,
		`- Each component's docs and types are in the package: \`${PACKAGE_DIR}/components/<Folder>/docs/component.md\` and \`${PACKAGE_DIR}/components/<Folder>/<Name>.svelte.d.ts\``,
		"",
		"## Setup",
		"",
		`- Install: \`npm install ${NAME}\`. Version 2 needs Svelte 5. (Svelte 3/4 projects use version 1: \`npm install ${NAME}@v1-legacy\`.)`,
		`- Import the CSS once, eg. in the root \`+layout.svelte\`: \`import "${NAME}/css/main.css";\``,
		`- Import components by name: \`import { Header, Section, Footer } from "${NAME}";\``,
		peers.length
			? `- Peer dependencies, needed by some components: ${peers.map((p) => `\`${p}\``).join(", ")}.`
			: "",
		"",
		"## Rules for using the components",
		"",
		"- Write Svelte 5 (runes) code: `$state`, `$derived`, `$props`, snippets and `onclick`-style attributes, not `export let`, `$:`, `<slot>` or `on:click`.",
		"- Events: use the callback props, eg. `<Button onClick={...}>` or `<Input onChange={({ value }) => ...}>`. Each callback gets the same value as the matching dispatched event's `detail`. The dispatched events (`on:click` etc.) still work, but are only for Svelte 4-style code.",
		'- Named slots are now snippet props, eg. `{#snippet titleContent()}...{/snippet}` inside a Card, or Scroller\'s `background` and `foreground`. Content passed with `slot="..."` is silently not rendered. Child content is the `children` snippet, as normal.',
		bindWarnings.length
			? `- Bindings: start a bound variable with a value, eg. \`let value = $state(null);\`, not \`let value;\` or \`$state()\`. These props throw \`props_invalid_value\` if the bound variable starts \`undefined\`: ${bindWarnings.join(", ")}.`
			: `- Bindings: use \`bind:\` with a \`$state\` variable, eg. \`let value = $state(null);\` and \`<Input bind:value />\`. If the variable starts \`undefined\`, the component sets it to the prop's default (version 2.3.0 and later; earlier 2.x versions throw \`props_invalid_value\` for some props, so start bound variables with a value there).`,
		"- Layout: `Section` already renders a `Container` (narrow width, with a bottom margin), so don't put a `Container` inside a `Section`. Use one or the other, and set `width` and the margins on it.",
		"- Extra CSS classes: most components take a `cls` prop (Toolbar components use `classes`).",
		"- Some props render trusted HTML with `{@html}`, with no sanitising: List items, DescriptionList values, Table cells, DataCard captions and Theme head styles. Never pass user input to them.",
		"- Form components (Input, Dropdown, Select, Radios, Checkboxes, Textarea) need a `label` for accessibility, and an `id` if the label is hidden.",
		"- Check a component's props in its `.d.ts` file or in the full reference before using it. Don't guess prop names.",
		"",
		"## ONS Design System CSS",
		"",
		dsVersion
			? `The package CSS includes version ${dsVersion} of the ONS Design System CSS, so any \`ons-*\` class from that version can be used directly in markup, eg. the grid (\`ons-grid\`, \`ons-grid__col\`, \`ons-col-6@m\`), utility classes such as \`ons-u-mb-l\` (bottom margin) or \`ons-u-fs-r--b\` (bold text), and Design System components that this package doesn't wrap. See https://service-manual.ons.gov.uk/design-system (it documents the latest version, which may be newer than ${dsVersion}). Prefer the components in this package where one exists.`
			: "The package CSS includes the ONS Design System CSS, so any `ons-*` class can be used directly in markup. See https://service-manual.ons.gov.uk/design-system.",
		""
	];

	/** @param {Export} e */
	const describe = (e) => {
		const main = path.basename(e.file, ".svelte") === e.folder;
		const parent = exports.find(
			(x) => x.kind === "component" && x.file === `${e.folder}/${e.folder}.svelte`
		);
		const { summary, experimental } = docsSummary(e.folder, knownUrls);
		const url = links.get(path.basename(e.file, ".svelte")) ?? links.get(e.folder);
		const aliases = e.aliases.length
			? ` (also exported as ${e.aliases.map((a) => `\`${a}\``).join(", ")})`
			: "";
		const flag = experimental ? " Experimental." : "";
		if (e.kind === "function")
			return { line: `\`${e.name}()\`: function exported alongside ${e.folder}.`, url };
		if (!main && parent)
			return {
				line: `\`${e.name}\`${aliases}: used with \`${parent.name}\`; see its docs.${flag}`,
				url
			};
		return { line: `\`${e.name}\`${aliases}: ${summary || "(no description yet)"}${flag}`, url };
	};

	// Group the index as Storybook does, falling back to the comments in index.js
	for (const e of exports)
		e.group =
			storySections.get(path.basename(e.file, ".svelte")) ?? storySections.get(e.folder) ?? e.group;
	const groups = [...new Set(exports.map((e) => e.group))];
	const index = groups.flatMap((group) => [
		`### ${group}`,
		"",
		...exports
			.filter((e) => e.group === group)
			.map((e) => {
				const { line, url } = describe(e);
				return `- ${url ? `[${e.name}](${url})` : e.name}: ${line.replace(/^`[^`]+`(\s\([^)]*\))?: /, (m, a) => (a ? `${a.trim()} ` : ""))}`;
			}),
		""
	]);

	const external = [
		"## Charts and maps (separate packages)",
		"",
		"These packages are developed separately, have fewer options, and may change more than this one. Check their docs and types before using them.",
		"",
		charts
			? `- \`@onsvisual/svelte-charts\` (version ${charts.version} when this file was generated): ${charts.charts.map((c) => `\`${c}\``).join(", ")}. Their docs and examples are also on the Storybook site under "Data visualisation", and in \`${PACKAGE_DIR}/components/<ChartName>/docs/\`. They're written in Svelte 4 style, so use \`on:\` events with them. In a Vite/SvelteKit app, add \`@onsvisual/svelte-charts\` and \`layercake\` to \`ssr.noExternal\`.`
			: "- `@onsvisual/svelte-charts`: Bar, Column, Line, Scatter and DotPlot charts, plus a `Chart` wrapper. Written in Svelte 4 style, so use `on:` events with them.",
		"- `@onsvisual/svelte-maps`: MapLibre maps (`Map`, `MapSource`, `MapLayer`, `MapTooltip`). Its components still dispatch Svelte 4-style events, so use `on:` and `bind:` with them.",
		""
	];

	const reference = exports.flatMap((e) => {
		const { line, url } = describe(e);
		if (e.kind === "function") return [`### ${e.name}()`, "", line, ""];
		const props = propsFor(e);
		const propLines = props.map((p) => {
			const bits = [
				p.type ? `\`${p.type}\`` : "",
				p.defaultValue !== undefined
					? `default \`${p.defaultValue}\``
					: p.optional
						? ""
						: "required",
				p.bindable ? "bindable" : ""
			].filter(Boolean);
			const warn = throwsWhenBoundUndefined(p)
				? " Start a bound variable with a value, not `undefined`."
				: "";
			const kind = isSnippet(p) && !/Snippet/.test(p.type) ? " (snippet)" : "";
			const desc = decode(p.description).replace(/\s*\(snippet\)$/, "");
			return `- \`${p.name}\`${kind} (${bits.join(", ")}): ${desc || "(no description)"}${warn}`;
		});
		const example = path.basename(e.file, ".svelte") === e.folder ? docsExample(e.folder) : null;
		return [
			`### ${e.name}`,
			"",
			line.replace(/^`[^`]+`(\s\([^)]*\))?: /, (m, a) =>
				a ? `${a.trim().replace(/^\(|\)$/g, "")}. ` : ""
			),
			"",
			`\`${importLine(e)}\`${url ? ` · Docs: ${url}` : ""}`,
			"",
			...(propLines.length ? ["Props:", "", ...propLines, ""] : ["No props.", ""]),
			...(example ? ["Example:", "", "```svelte", example, "```", ""] : [])
		];
	});

	const indexText = [...header, "## Components", "", ...index, ...external]
		.filter((l, i, a) => !(l === "" && a[i - 1] === ""))
		.join("\n");
	const fullText = [
		...header,
		"## Components",
		"",
		...index,
		...external,
		"## Component reference",
		"",
		...reference
	]
		.filter((l, i, a) => !(l === "" && a[i - 1] === ""))
		.join("\n");
	return { index: indexText.trimEnd() + "\n", full: fullText.trimEnd() + "\n" };
}

const isMain = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (isMain) {
	const dir = process.argv[2];
	if (!dir) {
		console.error("Usage: node scripts/agent-docs.js <output directory>");
		process.exit(1);
	}
	const { index, full } = generate();
	fs.mkdirSync(dir, { recursive: true });
	fs.writeFileSync(path.join(dir, "llms.txt"), index);
	fs.writeFileSync(path.join(dir, "llms-full.txt"), full);
	console.log(
		`Wrote ${dir}/llms.txt (${index.length} chars) and ${dir}/llms-full.txt (${full.length} chars)`
	);
}
