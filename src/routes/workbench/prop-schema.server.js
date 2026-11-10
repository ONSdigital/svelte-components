import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";
import { parse } from "svelte/compiler";

const componentDirectory = fileURLToPath(new URL("../../lib/components/", import.meta.url));

/** @typedef {{ name: string; type: string; kind: string; nullable: boolean; initial: unknown; options: (string | number)[]; defaultText: string; description: string; bindable: boolean }} PropSchema */
/** @typedef {{ name: string; canonical: string; file: string; external: boolean; fields: PropSchema[] }} ComponentSchema */
/** @typedef {{ name: string; type: ts.TypeNode | undefined; description: string }} Metadata */

/** @param {ts.Node | undefined} node @returns {unknown} */
function literal(node) {
	if (!node) return undefined;
	if (ts.isStringLiteralLike(node)) return node.text;
	if (ts.isNumericLiteral(node)) return Number(node.text);
	if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
	if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
	if (node.kind === ts.SyntaxKind.NullKeyword) return null;
	if (ts.isPrefixUnaryExpression(node) && ts.isNumericLiteral(node.operand)) return node.operator === ts.SyntaxKind.MinusToken ? -Number(node.operand.text) : Number(node.operand.text);
	if (ts.isCallExpression(node) && node.expression.getText() === "$bindable") return literal(node.arguments[0]);
	if (ts.isArrayLiteralExpression(node)) return node.elements.map(literal);
	if (ts.isObjectLiteralExpression(node)) return Object.fromEntries(node.properties.filter(ts.isPropertyAssignment).map(property => [property.name.getText().replace(/^["']|["']$/g, ""), literal(property.initializer)]));
	return undefined;
}

/** @param {ts.TypeNode | undefined} node @returns {(string | number)[]} */
function choices(node) {
	if (!node) return [];
	if (ts.isUnionTypeNode(node)) return node.types.flatMap(choices);
	if (ts.isLiteralTypeNode(node)) {
		const value = literal(node.literal);
		return typeof value === "string" || typeof value === "number" ? [value] : [];
	}
	return [];
}

/** @param {ts.TypeNode | ts.JSDocTypeLiteral | undefined} type @returns {Metadata[]} */
function members(type) {
	if (!type) return [];
	if (ts.isTypeLiteralNode(type)) return type.members.filter(ts.isPropertySignature).map(member => ({ name: member.name.getText().replace(/^["']|["']$/g, ""), type: member.type, description: "" }));
	if (ts.isJSDocTypeLiteral(type)) return (type.jsDocPropertyTags ?? []).map(member => ({ name: member.name.getText(), type: member.typeExpression?.type, description: typeof member.comment === "string" ? member.comment : "" }));
	return [];
}

/** @param {string} source @param {string} filename @returns {PropSchema[]} */
export function extractProps(source, filename) {
	const ast = parse(source, { modern: true });
	const scripts = [ast.module, ast.instance].flatMap(script => {
		if (!script) return [];
		const content = /** @type {typeof script.content & { start: number; end: number }} */ (script.content);
		return [ts.createSourceFile(`${filename}.ts`, source.slice(content.start, content.end), ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)];
	});
	/** @type {Map<string, Metadata[]>} */
	const aliases = new Map();
	for (const script of scripts) for (const statement of script.statements) {
		if (ts.isInterfaceDeclaration(statement)) aliases.set(statement.name.text, members(ts.factory.createTypeLiteralNode(statement.members)));
		if (ts.isTypeAliasDeclaration(statement)) aliases.set(statement.name.text, members(statement.type));
		for (const tag of ts.getJSDocTags(statement)) if (ts.isJSDocTypedefTag(tag)) {
			const name = tag.fullName?.getText() ?? tag.name?.getText();
			if (name) aliases.set(name, members(tag.typeExpression));
		}
	}
	/** @type {PropSchema[]} */
	const fields = [];
	for (const script of scripts) for (const statement of script.statements) {
		if (!ts.isVariableStatement(statement)) continue;
		const annotation = ts.getJSDocTypeTag(statement)?.typeExpression?.type;
		const properties = annotation && ts.isTypeReferenceNode(annotation) ? aliases.get(annotation.typeName.getText()) ?? [] : members(annotation);
		for (const declaration of statement.declarationList.declarations) {
			const props = ts.isObjectBindingPattern(declaration.name) && declaration.initializer && ts.isCallExpression(declaration.initializer) && declaration.initializer.expression.getText() === "$props";
			const exported = statement.modifiers?.some(modifier => modifier.kind === ts.SyntaxKind.ExportKeyword) && ts.isIdentifier(declaration.name);
			if (!props && !exported) continue;
			const typed = declaration.type;
			const declared = typed && ts.isTypeReferenceNode(typed) ? aliases.get(typed.typeName.getText()) ?? properties : typed ? members(typed) : properties;
			const bindings = props ? declaration.name.elements.filter(element => !element.dotDotDotToken) : [{ name: declaration.name, propertyName: undefined, initializer: declaration.initializer, type: declaration.type }];
			for (const binding of bindings) {
				const name = binding.propertyName?.getText() ?? binding.name.getText();
				const metadata = declared.find(property => property.name === name);
				const typeNode = metadata?.type ?? (exported ? declaration.type ?? annotation : undefined);
				const initial = literal(binding.initializer);
				const type = typeNode?.getText() ?? (initial === null || initial === undefined ? "unknown" : Array.isArray(initial) ? "unknown[]" : typeof initial);
				const options = choices(typeNode);
				const nullable = /\bnull\b/.test(type) || initial === null;
				const callable = /=>|\bFunction\b/.test(type) || binding.initializer && (ts.isArrowFunction(binding.initializer) || ts.isFunctionExpression(binding.initializer));
				const mixed = /\bnumber\b/.test(type) && (/\bstring\b/.test(type) || options.some(option => typeof option === "string"));
				const kind = type.includes("Snippet") || ["children", "before", "after", "background", "foreground", "iconSlot", "imageContent", "titleContent", "customContent", "controls", "beforeNav", "afterNav", "footer"].includes(name) && callable ? "snippet" : /^on[A-Z]/.test(name) ? "callback" : /HTMLElement|Element\b|PymChild/.test(type) ? "reference" : callable ? "function" : mixed ? "mixed" : options.length ? "enum" : /\bboolean\b/.test(type) || typeof initial === "boolean" ? "boolean" : /\bnumber\b/.test(type) || typeof initial === "number" ? "number" : /\[\]|\barray\b|Array<|\bobject\b|Record<|\{|\bany\b|\bunknown\b/.test(type) || initial && typeof initial === "object" ? "json" : "string";
				fields.push({ name, type, kind, nullable, initial, options, defaultText: binding.initializer?.getText() ?? "undefined", description: metadata?.description ?? "", bindable: Boolean(binding.initializer && ts.isCallExpression(binding.initializer) && binding.initializer.expression.getText() === "$bindable") });
			}
		}
	}
	return fields;
}

/** @returns {ComponentSchema[]} */
export function getPropSchemas() {
	/** @type {ComponentSchema[]} */
	const schemas = [];
	for (const entry of fs.readdirSync(componentDirectory, { withFileTypes: true })) {
		if (!entry.isDirectory()) continue;
		for (const filename of fs.readdirSync(path.join(componentDirectory, entry.name))) {
			if (!filename.endsWith(".svelte") || filename.endsWith(".stories.svelte")) continue;
			const relative = `${entry.name}/${filename}`;
			schemas.push({ name: filename.replace(".svelte", ""), canonical: filename.replace(".svelte", ""), file: relative, external: false, fields: extractProps(fs.readFileSync(path.join(componentDirectory, relative), "utf8"), relative) });
		}
	}
	const index = ts.createSourceFile("index.js", fs.readFileSync(new URL("../../lib/index.js", import.meta.url), "utf8"), ts.ScriptTarget.Latest, true);
	for (const statement of index.statements) if (ts.isExportDeclaration(statement) && statement.exportClause && ts.isNamedExports(statement.exportClause) && statement.moduleSpecifier && ts.isStringLiteral(statement.moduleSpecifier)) {
		for (const element of statement.exportClause.elements) if (element.propertyName?.text === "default" && !schemas.some(schema => schema.name === element.name.text)) {
			const file = statement.moduleSpecifier.text.replace("./components/", "");
			const original = schemas.find(schema => schema.file === file);
			if (original) schemas.push({ ...original, name: element.name.text });
		}
	}
	for (const name of ["Chart", "BarChart", "ColumnChart", "LineChart", "ScatterChart", "DotPlotChart"]) {
		const file = fileURLToPath(new URL(`../../../node_modules/@onsvisual/svelte-charts/src/charts/${name}.svelte`, import.meta.url));
		schemas.push({ name, canonical: name, file: name, external: true, fields: extractProps(fs.readFileSync(file, "utf8"), file) });
	}
	return schemas.sort((first, second) => first.name.localeCompare(second.name));
}