import { createRawSnippet } from "svelte";
import { base } from "$app/paths";

/** @typedef {import('./prop-schema.server.js').ComponentSchema} ComponentSchema */

const items = [{ id: "first", label: "First option" }, { id: "second", label: "Second option" }];
const series = [{ x: 2022, y: 10 }, { x: 2023, y: 30 }, { x: 2024, y: 20 }];

/** @param {ComponentSchema} schema @returns {Record<string, unknown>} */
export function fixtureValues(schema) {
	const name = schema.canonical;
	/** @type {Record<string, Record<string, unknown>>} */
	const fixtures = {
		Button: { children: "<span>Example action</span>" },
		AnnouncementBanner: { title: "Announcement", description: "Release information", linkText: "Read release", linkHref: "#preview" },
		Hero: { title: "Release title", width: "full", lede: "Illustrative release information" },
		Card: { title: "Example card", href: "#preview" },
		Input: { id: "prop-input", label: "Example input", value: "Example value" },
		Textarea: { id: "prop-textarea", label: "Example textarea", value: "Example text" },
		Dropdown: { id: "prop-dropdown", label: "Example dropdown", options: ["First", "Second"] },
		Select: { id: "prop-select", label: "Example select", options: items },
		Checkbox: { id: "prop-checkbox", label: "Example checkbox", item: { id: "prop-checkbox", label: "Example checkbox", checked: false } },
		Checkboxes: { title: "Choose options", items: items.map(item => ({ ...item, checked: false })) },
		Radio: { id: "prop-radio", label: "Example radio", groupId: "prop-radio-group" },
		Radios: { title: "Choose one", items },
		ButtonGroupItem: { id: "prop-group-item", value: "first", label: "First option" },
		Accordion: { id: "prop-accordion", showToggle: true },
		AccordionItem: { title: "Accordion item" },
		Tab: { id: "prop-tab", title: "Example tab" },
		NavSection: { id: "prop-section", title: "Example section" },
		Document: { title: "Example document", href: "#preview" },
		TimelineItem: { title: "Example event" },
		DataCard: { title: "Example indicator", value: 0, mode: "sparkline", data: series },
		Sparkline: { data: series },
		Table: { title: "Example table", sortable: true, data: [{ region: "West", value: 10 }, { region: "East", value: 0 }] },
		DescriptionList: { title: "Metadata", items: [{ key: "Publisher", value: "ONS" }] },
		Image: { src: `${base}/favicon.png`, alt: "Workbench favicon", caption: "Example image" },
		Icon: { type: "tick" },
		Em: { children: "<span>Emphasized content</span>" },
		ChangeStat: { value: "7%" },
		UpdateStatus: { date: "10 November 2026" },
		Breadcrumb: { width: "full", links: [{ label: "Home", href: "#preview" }, { label: "Current page" }] },
		Contents: { links: [{ label: "Preview", href: "#preview" }] },
		RelatedContent: { links: [{ title: "Related release", href: "#preview" }] },
		Summary: { items: [{ key: "Name", value: "Example", href: "#preview" }] },
		Tooltip: { text: "Tooltip content", children: "<button type=\"button\">Focus or hover</button>" },
		ErrorSummary: { title: "Check these values", items: [{ label: "Example error", href: "#preview" }] },
		ErrorPage: { status: 404 },
		Header: { title: "Component preview", skipHref: null },
		Embed: { polling: false },
		AnalyticsBanner: { analyticsId: "" },
		ToolbarButton: { id: "prop-tool", label: "Example tool", icon: "search" },
		ToolbarIcon: { type: "search" },
		ToolControl: { id: "prop-controls" },
		HelpModal: { children: "<p>Help content</p>" },
		Scroller: { id: "prop-scroller", background: '<div style="height:240px;background:#e6f4f3">Background</div>' },
		ScrollerSection: { id: "prop-scroll-section", title: "Example caption" }
	};
	if (schema.external) return name === "Chart" ? { type: "bar", data: [{ x: 10, y: "First" }, { x: 20, y: "Second" }], options: { "padding-right": "24" } } : { data: series, xKey: "x", yKey: "y", padding: { top: 8, right: 24, bottom: 28, left: 55 } };
	return fixtures[name] ?? {};
}

/** @param {ComponentSchema} schema */
export function editorFields(schema) {
	const defaults = fixtureValues(schema);
	return schema.fields.map(field => ({ ...field, initial: Object.hasOwn(defaults, field.name) ? defaults[field.name] : field.kind === "callback" ? true : field.initial, defaultText: Object.hasOwn(defaults, field.name) ? "Fixture sample" : field.defaultText.length > 180 ? `${field.defaultText.slice(0, 180)}...` : field.defaultText, description: field.kind === "callback" ? "Capture callback calls and payloads." : field.kind === "snippet" ? "HTML content for this snippet." : field.kind === "reference" ? "Component-owned reference; inspect callback/binding output below." : field.description }));
}

/** @param {unknown} value @returns {unknown} */
export function serializable(value) {
	const seen = new WeakSet();
	try {
		return JSON.parse(JSON.stringify(value, (key, entry) => {
			if (typeof entry === "function") return "[Function]";
			if (typeof Event !== "undefined" && entry instanceof Event) return { type: entry.type, value: entry.target && "value" in entry.target ? entry.target.value : undefined };
			if (typeof Element !== "undefined" && entry instanceof Element) return { tag: entry.tagName, id: entry.id };
			if (entry && typeof entry === "object") { if (seen.has(entry)) return "[Circular]"; seen.add(entry); }
			return entry;
		}) ?? "null");
	} catch { return String(value); }
}

/** @param {unknown} value @returns {unknown} */
function revive(value) {
	if (Array.isArray(value)) return value.map(revive);
	if (value && typeof value === "object") {
		if ("$function" in value) {
			const mode = value.$function;
			return /** @param {unknown} input */ (input) => mode === "percent" ? `${input}%` : mode === "uppercase" ? String(input).toUpperCase() : String(input);
		}
		return Object.fromEntries(Object.entries(value).map(([key, entry]) => [key, revive(entry)]));
	}
	return value;
}

/** @param {ComponentSchema} schema @param {Record<string, unknown>} values @param {import('svelte').Snippet} children @param {(type: string, name: string, detail: unknown) => void} report */
export function previewProps(schema, values, children, report) {
	const merged = { ...fixtureValues(schema), ...values };
	/** @type {Record<string, unknown>} */
	const props = {};
	for (const field of schema.fields) {
		const supplied = Object.hasOwn(merged, field.name);
		const value = merged[field.name];
		if (field.kind === "callback") {
			if (value !== false && value !== null) props[field.name] = /** @param {unknown} detail */ (detail) => report("callback", field.name, detail);
		} else if (field.kind === "snippet") {
			if (supplied && typeof value === "string") props[field.name] = createRawSnippet(() => ({ render: () => `<div>${value}</div>` }));
			else if (value === null) props[field.name] = undefined;
			else if (field.name === "children") props.children = children;
		} else if (field.kind === "function" && supplied && value !== "default") {
			props[field.name] = /** @param {...unknown} args */ (...args) => {
				report("function", field.name, args);
				if (field.name === "loadOptions" && typeof args[1] === "function") return args[1](value === "empty" ? [] : items);
				if (value === "empty") return "";
				return field.name === "i18n" ? `Sample ${args[0]}` : String(args[0] ?? "");
			};
		} else if (supplied && field.kind !== "reference" && field.kind !== "function") {
			props[field.name] = revive(value);
			const page = props.page;
			if (field.name === "page" && page && typeof page === "object" && "url" in page && typeof page.url === "string") props.page = { ...page, url: new URL(page.url) };
		}
		if (field.bindable && field.kind !== "reference" && (supplied ? value !== undefined : field.initial !== undefined)) {
			let boundValue = supplied ? revive(value) : field.initial;
			Object.defineProperty(props, field.name, { enumerable: true, configurable: true, get: () => boundValue, set: (next) => { boundValue = next; values[field.name] = next; report("binding", field.name, next); } });
		}
	}
	return props;
}