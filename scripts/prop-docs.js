// Prop documentation for components (read by Storybook's docgen and editor IntelliSense).
//
//   node scripts/prop-docs.js --report   Writes PROP_DOCS_REPORT.md: props without descriptions, and
//                                         descriptions that weren't carried over from v1.
//   node scripts/prop-docs.js --write    One-off migration: converts inline `/** @type {{ ... }} */`
//                                         prop types to `@typedef {Object} Props` + `@property` tags
//                                         and fills in missing descriptions from the v1-legacy branch
//                                         (or templates for snippets and callbacks).
//
// Both modes read v1 from the `v1-legacy` branch (local, or `origin/v1-legacy` after a fetch). Without
// it, --report can't tell new props from ones undocumented in v1, and leaves that split out.
//
// Per-prop descriptions need the @typedef form: a description comment can't be nested inside an
// inline `@type {{ ... }}` comment.

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { pathToFileURL } from "node:url";
import ts from "typescript";

const COMPONENTS = "src/lib/components";
const V1_REFS = ["v1-legacy", "origin/v1-legacy"];
/** @type {string | null | undefined} */
let v1RefCache;
/** The first v1 ref that resolves, or null (looked up once, when first needed) */
function v1Ref() {
	if (v1RefCache === undefined)
		v1RefCache =
			V1_REFS.find((ref) => {
				try {
					execFileSync("git", ["rev-parse", "--verify", "--quiet", `${ref}^{commit}`], {
						stdio: "ignore"
					});
					return true;
				} catch {
					return false;
				}
			}) ?? null;
	return v1RefCache;
}
const REPORT = "PROP_DOCS_REPORT.md";

/** Snippet props that replaced v1 named slots (see SVELTE_5_MIGRATION_GUIDE.md) */
const SNIPPETS = {
	children: "Child content",
	iconSlot: "Custom icon content, used instead of the `icon` prop",
	imageContent: "Custom image content, used instead of the `image` prop",
	titleContent: "Custom title content, used instead of the `title` prop",
	customContent: "Custom content for the button, shown when `custom` is true",
	before: "Content rendered before the main content",
	after: "Content rendered after the main content",
	beforeNav: "Content rendered above the contents navigation",
	afterNav: "Content rendered below the contents navigation",
	footer: "Content rendered below the sections and navigation",
	background: "Content for the fixed background layer",
	foreground: "Content for the scrolling foreground layer (eg. ScrollerSection components)",
	controls: "Toolbar controls"
};

/** @param {string} dir @returns {string[]} */
function listComponents(dir = COMPONENTS) {
	return fs
		.readdirSync(dir, { withFileTypes: true })
		.flatMap((entry) => {
			const file = path.join(dir, entry.name);
			if (entry.isDirectory()) return listComponents(file);
			return /\.svelte$/.test(entry.name) && !/\.(stories|test)\.svelte$/.test(entry.name)
				? [file]
				: [];
		})
		.sort();
}

/** @param {string} source */
function instanceScript(source) {
	for (const match of source.matchAll(/<script(\s[^>]*)?>([\s\S]*?)<\/script>/g)) {
		if (/\b(module|context=)/.test(match[1] ?? "")) continue;
		const start = /** @type {number} */ (match.index) + match[0].indexOf(">") + 1;
		const text = match[2];
		return {
			start,
			text,
			sf: ts.createSourceFile(
				"script.js",
				text,
				ts.ScriptTarget.Latest,
				true,
				/\blang=["']ts["']/.test(match[1] ?? "") ? ts.ScriptKind.TS : ts.ScriptKind.JS
			)
		};
	}
	return null;
}

/** @param {ts.Node} node @returns {ts.JSDoc[]} */
const jsDocs = (node) => /** @type {{ jsDoc?: ts.JSDoc[] }} */ (node).jsDoc ?? [];

/** @param {string | ts.NodeArray<ts.JSDocComment> | undefined} comment */
const clean = (comment) =>
	(ts.getTextOfJSDocComment(comment) ?? "").replace(/\s+/g, " ").replace(/^-\s*/, "").trim();

/** @param {string} file @returns {Map<string, string> | null} v1 prop name -> description ("" if undocumented) */
function v1Props(file) {
	const V1_REF = v1Ref();
	if (!V1_REF) return null;
	let source;
	try {
		source = execFileSync("git", ["show", `${V1_REF}:${file}`], {
			encoding: "utf8",
			stdio: ["ignore", "pipe", "ignore"]
		});
	} catch {
		return new Map(); // file didn't exist in v1
	}
	const script = instanceScript(source);
	const props = new Map();
	for (const statement of script?.sf.statements ?? []) {
		if (
			!ts.isVariableStatement(statement) ||
			!statement.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword)
		)
			continue;
		const doc = jsDocs(statement).at(-1);
		const typeTag = doc?.tags?.find(ts.isJSDocTypeTag);
		const description = [clean(doc?.comment), clean(typeTag?.comment)].filter(Boolean).join(" ");
		for (const declaration of statement.declarationList.declarations)
			props.set(declaration.name.getText(), description);
	}
	return props;
}

/**
 * @typedef {{ name: string; type: string; optional: boolean; description: string; defaultValue?: string; bindable?: boolean }} Prop
 * @typedef {{ style: "inline" | "typedef" | "ts" | "untyped" | "none"; props: Prop[]; script: NonNullable<ReturnType<typeof instanceScript>>; typeDoc?: ts.JSDoc; typedefDoc?: ts.JSDoc; members?: ts.PropertySignature[] }} Parsed
 */

/** @param {string} source @returns {Parsed | null} */
function parseProps(source) {
	const script = instanceScript(source);
	if (!script) return null;
	/** @type {Map<string, ts.JSDoc>} */
	const typedefs = new Map();
	/** @type {Map<string, ts.TypeLiteralNode>} */
	const interfaces = new Map();
	for (const statement of script.sf.statements) {
		if (ts.isInterfaceDeclaration(statement))
			interfaces.set(statement.name.text, ts.factory.createTypeLiteralNode(statement.members));
		if (ts.isTypeAliasDeclaration(statement) && ts.isTypeLiteralNode(statement.type))
			interfaces.set(statement.name.text, statement.type);
	}
	for (const statement of script.sf.statements)
		for (const doc of jsDocs(statement))
			for (const tag of doc.tags ?? [])
				if (ts.isJSDocTypedefTag(tag) && tag.name) typedefs.set(tag.name.getText(), doc);
	for (const statement of script.sf.statements) {
		if (!ts.isVariableStatement(statement)) continue;
		const declaration = statement.declarationList.declarations.find(
			(d) =>
				d.initializer &&
				ts.isCallExpression(d.initializer) &&
				d.initializer.expression.getText() === "$props" &&
				ts.isObjectBindingPattern(d.name)
		);
		if (!declaration) continue;
		const elements = /** @type {ts.ObjectBindingPattern} */ (declaration.name).elements.filter(
			(e) => !e.dotDotDotToken
		);
		const names = elements.map((e) => (e.propertyName ?? e.name).getText());
		// Default values and $bindable() from the destructuring, eg. `value = $bindable(null)`
		/** @type {Map<string, { defaultValue?: string; bindable: boolean }>} */
		const bindings = new Map();
		for (const e of elements) {
			let init = e.initializer;
			const bindable =
				Boolean(init) &&
				ts.isCallExpression(/** @type {ts.Expression} */ (init)) &&
				/** @type {ts.CallExpression} */ (init).expression.getText() === "$bindable";
			if (bindable) init = /** @type {ts.CallExpression} */ (init).arguments[0];
			bindings.set((e.propertyName ?? e.name).getText(), {
				defaultValue: init?.getText().replace(/\s*\n\s*/g, " "),
				bindable
			});
		}
		/** @param {Prop[]} props @returns {Prop[]} */
		const withBindings = (props) =>
			props.map((prop) => ({ ...prop, ...(bindings.get(prop.name) ?? { bindable: false }) }));
		const typeDoc = jsDocs(statement).find((doc) => doc.tags?.some(ts.isJSDocTypeTag));
		const type = typeDoc?.tags?.find(ts.isJSDocTypeTag)?.typeExpression.type;
		if (type && ts.isTypeLiteralNode(type)) {
			const props = type.members.filter(ts.isPropertySignature).map((member) => ({
				name: member.name.getText().replace(/^["']|["']$/g, ""),
				type: (member.type?.getText() ?? "any").replace(/\s*\n\s*/g, " "),
				optional: Boolean(member.questionToken),
				description: ""
			}));
			return { style: "inline", props: withBindings(props), script, typeDoc };
		}
		const typedefDoc =
			type && ts.isTypeReferenceNode(type) ? typedefs.get(type.typeName.getText()) : undefined;
		if (typedefDoc) {
			const tag = /** @type {ts.JSDocTypedefTag} */ (typedefDoc.tags?.find(ts.isJSDocTypedefTag));
			const literal =
				tag.typeExpression && ts.isJSDocTypeLiteral(tag.typeExpression)
					? tag.typeExpression
					: undefined;
			const props = (literal?.jsDocPropertyTags ?? []).map((p) => ({
				name: p.name.getText(),
				type: p.typeExpression?.type.getText() ?? "any",
				optional: p.isBracketed,
				description: clean(p.comment)
			}));
			return { style: "typedef", props: withBindings(props), script, typedefDoc };
		}
		const tsType =
			declaration.type && ts.isTypeReferenceNode(declaration.type)
				? interfaces.get(declaration.type.typeName.getText())
				: declaration.type;
		if (tsType && ts.isTypeLiteralNode(tsType)) {
			const members = tsType.members.filter(ts.isPropertySignature);
			const props = members.map((member) => ({
				name: member.name.getText().replace(/^["']|["']$/g, ""),
				type: (member.type?.getText() ?? "any").replace(/\s*\n\s*/g, " "),
				optional: Boolean(member.questionToken),
				description: clean(jsDocs(member).at(-1)?.comment)
			}));
			return { style: "ts", props: withBindings(props), script, members };
		}
		return {
			style: "untyped",
			props: withBindings(
				names.map((name) => ({ name, type: "", optional: true, description: "" }))
			),
			script
		};
	}
	return { style: "none", props: [], script };
}

/** @param {Prop} prop */
const isSnippet = (prop) =>
	/\bSnippet\b/.test(prop.type) || (prop.name === "children" && !prop.type);

/** @param {Prop} prop @param {string} source @returns {string} */
function template(prop, source) {
	if (isSnippet(prop) && SNIPPETS[/** @type {keyof typeof SNIPPETS} */ (prop.name)])
		return `${SNIPPETS[/** @type {keyof typeof SNIPPETS} */ (prop.name)]} (snippet)`;
	const callback = prop.name.match(/^on([A-Z]\w*)$/);
	if (callback) {
		const event = callback[1][0].toLowerCase() + callback[1].slice(1);
		// Either dispatch("event", ...) or a shared handler like `if (type === "event") ...; dispatch(type, detail)`
		const direct = new RegExp(`dispatch\\(\\s*["'\`]${event}["'\`]`).test(source);
		const shared =
			/dispatch\(\s*\w+\s*,/.test(source) && new RegExp(`===\\s*["'\`]${event}["'\`]`).test(source);
		if (direct || shared)
			return `Callback for the \`${event}\` event, called with the same value as the event's \`detail\``;
	}
	return "";
}

/** @param {string} text @param {number} index */
const indentAt = (text, index) =>
	text.slice(text.lastIndexOf("\n", index - 1) + 1, index).match(/^\s*/)?.[0] ?? "";

/** @param {string} file */
function migrate(file) {
	const source = fs.readFileSync(file, "utf8");
	const parsed = parseProps(source);
	if (!parsed || parsed.style === "untyped" || parsed.style === "none")
		return { changed: false, flagged: [], untyped: parsed?.style === "untyped" };
	const v1 = v1Props(file);
	/** @type {string[]} */
	const flagged = [];
	const describe = (/** @type {Prop} */ prop) => {
		if (prop.description) return prop.description;
		const old = v1?.get(prop.name);
		if (old) {
			if (/\bslot|\bevent|dispatch|\bon:|\bbind:/i.test(old)) flagged.push(`${prop.name}: ${old}`);
			return old;
		}
		return template(prop, source);
	};
	const { script } = parsed;
	let text = script.text;
	if (parsed.style === "inline") {
		const doc = /** @type {ts.JSDoc} */ (parsed.typeDoc);
		const indent = indentAt(text, doc.getStart(script.sf));
		const lines = parsed.props.map((prop) => {
			const description = describe(prop);
			return `${indent} * @property {${prop.type}} ${prop.optional ? `[${prop.name}]` : prop.name}${description ? ` ${description}` : ""}`;
		});
		const block = [
			`/**`,
			`${indent} * @typedef {Object} Props`,
			...lines,
			`${indent} */`,
			`${indent}/** @type {Props} */`
		].join("\n");
		text = text.slice(0, doc.getStart(script.sf)) + block + text.slice(doc.end);
	} else if (parsed.style === "ts") {
		// TypeScript components: add a /** description */ comment above each undocumented member (last first, so offsets stay valid).
		const members = /** @type {ts.PropertySignature[]} */ (parsed.members);
		for (let i = members.length - 1; i >= 0; i--) {
			const description = parsed.props[i].description ? "" : describe(parsed.props[i]);
			if (!description) continue;
			const start = members[i].getStart(script.sf);
			text = `${text.slice(0, start)}/** ${description} */\n${indentAt(text, start)}${text.slice(start)}`;
		}
	} else {
		const doc = /** @type {ts.JSDoc} */ (parsed.typedefDoc);
		let block = text.slice(doc.getStart(script.sf), doc.end);
		for (const prop of parsed.props) {
			const description = describe(prop);
			const name = prop.name.replace(/\$/g, "\\$");
			const pattern = new RegExp(
				`^(.*@property\\s+\\{.*\\}\\s+(?:\\[\\s*${name}(?:=[^\\]]*)?\\]|${name}))(?=\\s|$)(.*)$`,
				"m"
			);
			block = block.replace(pattern, (_, head) => `${head}${description ? ` ${description}` : ""}`);
		}
		text = text.slice(0, doc.getStart(script.sf)) + block + text.slice(doc.end);
	}
	const output =
		source.slice(0, script.start) + text + source.slice(script.start + script.text.length);
	if (output !== source) fs.writeFileSync(file, output);
	return { changed: output !== source, flagged, untyped: false };
}

function report() {
	const V1_REF = v1Ref();
	/** @type {{ file: string; name: string; reason: string }[]} */
	const missing = [];
	/** @type {{ file: string; name: string; description: string }[]} */
	const written = [];
	/** @type {string[]} */
	const untyped = [];
	for (const file of listComponents()) {
		const parsed = parseProps(fs.readFileSync(file, "utf8"));
		if (!parsed || parsed.style === "none") continue;
		if (parsed.style === "inline" || parsed.style === "untyped")
			untyped.push(`${file} (${parsed.style})`);
		const v1 = v1Props(file);
		for (const prop of parsed.props) {
			const old = v1?.get(prop.name);
			if (!prop.description)
				missing.push({
					file,
					name: prop.name,
					reason: old === undefined ? "New in v2" : "Undocumented in v1"
				});
			else if (v1 && !old) written.push({ file, name: prop.name, description: prop.description });
		}
	}
	const rel = (/** @type {string} */ file) => path.relative(COMPONENTS, file);
	/**
	 * @template {{ file: string }} T
	 * @param {T[]} rows
	 * @param {(row: T) => string} line
	 */
	const grouped = (rows, line) => {
		const files = [...new Set(rows.map((r) => r.file))];
		return files.length
			? files
					.map(
						(file) =>
							`- **${rel(file)}**\n${rows
								.filter((r) => r.file === file)
								.map((r) => `  - ${line(r)}`)
								.join("\n")}`
					)
					.join("\n")
			: "None.";
	};
	const name = (/** @type {{ name: string }} */ r) => `\`${r.name}\``;
	const missingSections = V1_REF
		? [
				"### New in v2",
				"",
				grouped(
					missing.filter((m) => m.reason === "New in v2"),
					name
				),
				"",
				"### Undocumented in v1",
				"",
				grouped(
					missing.filter((m) => m.reason === "Undocumented in v1"),
					name
				)
			]
		: [
				"The `v1-legacy` branch wasn't found (run `git fetch origin v1-legacy`), so these aren't split into new and undocumented-in-v1 props.",
				"",
				grouped(missing, name)
			];
	const writtenSections = V1_REF
		? [
				"",
				`## Descriptions not carried over from v1 (${written.length})`,
				"",
				"Written for v2 (including drafted snippet and callback descriptions), so worth a review.",
				"",
				grouped(written, (r) => `\`${r.name}\`: ${r.description}`)
			]
		: [];
	const md = [
		"# Prop documentation report",
		"",
		"Generated by `npm run docs:props`. Don't edit by hand. Descriptions come from the `@property` tags in each component's `@typedef {Object} Props` (or member comments in TypeScript components), which Storybook shows in its controls table and editors show in IntelliSense. Chart props come from `@onsvisual/svelte-charts` and aren't covered.",
		"",
		`## Props without a description (${missing.length})`,
		"",
		...missingSections,
		"",
		`## Components whose props can't carry descriptions (${untyped.length})`,
		"",
		untyped.length ? untyped.map((u) => `- ${rel(u)}`).join("\n") : "None.",
		...writtenSections,
		""
	].join("\n");
	fs.writeFileSync(REPORT, md);
	console.log(
		`Wrote ${REPORT}: ${missing.length} props without descriptions, ${untyped.length} components whose props can't carry descriptions.`
	);
	if (!V1_REF)
		console.warn(
			"Warning: v1-legacy branch not found, so the report leaves out the comparison with v1."
		);
}

const isMain = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
const mode = isMain ? process.argv[2] : null;
if (!isMain) {
	// Imported by another script (eg. scripts/agent-docs.js): only export the helpers.
} else if (mode === "--write") {
	if (!v1Ref()) {
		console.error(
			"The v1-legacy branch is needed to copy v1 descriptions: run `git fetch origin v1-legacy`."
		);
		process.exit(1);
	}
	for (const file of listComponents()) {
		const { changed, flagged, untyped } = migrate(file);
		if (changed) console.log(`updated ${file}`);
		if (untyped) console.log(`UNTYPED (convert by hand) ${file}`);
		for (const f of flagged) console.log(`  REVIEW v1 description in ${file}: ${f}`);
	}
} else if (mode === "--report") {
	report();
} else {
	console.error("Usage: node scripts/prop-docs.js --report | --write");
	process.exit(1);
}

export { COMPONENTS, listComponents, parseProps, isSnippet };
