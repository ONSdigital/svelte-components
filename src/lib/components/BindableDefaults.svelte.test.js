/* global $state -- runes are available in .svelte.test.js files */
import { render } from "@testing-library/svelte";
import { writable } from "svelte/store";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import AccordionItem from "./Accordion/AccordionItem.svelte";
import AnalyticsBanner from "./AnalyticsBanner/AnalyticsBanner.svelte";
import Checkbox from "./Checkbox/Checkbox.svelte";
import Checkboxes from "./Checkboxes/Checkboxes.svelte";
import Details from "./Details/Details.svelte";
import Dropdown from "./Dropdown/Dropdown.svelte";
import Embed from "./Embed/Embed.svelte";
import Input from "./Input/Input.svelte";
import LazyLoad from "./LazyLoad/LazyLoad.svelte";
import Observe from "./Observe/Observe.svelte";
import Radio from "./Radios/Radio.svelte";
import Radios from "./Radios/Radios.svelte";
import Scroller from "./Scroller/Scroller.svelte";
import Tabs from "./Tabs/Tabs.svelte";
import Textarea from "./Textarea/Textarea.svelte";
import ToolbarButton from "./Toolbar/ToolbarButton.svelte";

// Svelte 5 throws `props_invalid_value` when a parent binds a variable that starts undefined (eg.
// `let value = $state()`) to a prop that has a default in $props(). These components set the
// defaults of their bindable props in the script instead, which also writes the default back to the
// bound variable, as in v1. A bound variable is passed as a getter/setter pair, as `bind:` compiles.

const toolbarContext = new Map([
	["activeModalId", writable(null)],
	["orientation", writable("horizontal")],
	["showHelpModals", writable(false)],
	["buttonIds", { register: () => {}, unregister: () => {}, buttonIds: writable([]) }]
]);

/** @type {{ name: string; component: any; props?: Record<string, unknown>; context?: Map<string, unknown>; defaults: Record<string, unknown> }[]} */
const cases = [
	{
		name: "AccordionItem",
		component: AccordionItem,
		props: { title: "Item" },
		defaults: { open: false }
	},
	{ name: "AnalyticsBanner", component: AnalyticsBanner, defaults: { usageCookies: false } },
	{
		name: "Checkbox",
		component: Checkbox,
		props: { id: "c", label: "C" },
		defaults: {
			item: { id: "c", label: "C", description: null, checked: false },
			group: null,
			checked: false
		}
	},
	{
		name: "Checkboxes",
		component: Checkboxes,
		props: { label: "Group", items: [] },
		defaults: { value: [] }
	},
	{ name: "Details", component: Details, props: { title: "More" }, defaults: { open: false } },
	{
		name: "Dropdown",
		component: Dropdown,
		props: { id: "d", label: "D", options: [] },
		defaults: { value: null }
	},
	{ name: "Embed", component: Embed, defaults: { pymChild: expect.anything() } },
	{ name: "Input", component: Input, props: { id: "i", label: "I" }, defaults: { value: null } },
	{ name: "LazyLoad", component: LazyLoad, defaults: { entered: false } },
	{ name: "Observe", component: Observe, defaults: { visible: false } },
	{
		name: "Radio",
		component: Radio,
		props: { id: "r", label: "R", groupId: "g" },
		defaults: { value: null }
	},
	{
		name: "Radios",
		component: Radios,
		props: { id: "rs", label: "Rs", items: [] },
		defaults: { value: null }
	},
	{
		name: "Scroller",
		component: Scroller,
		defaults: { count: 0, index: null, sectionId: null, offset: 0, progress: 0, visible: false }
	},
	{ name: "Tabs", component: Tabs, defaults: { selected: null } },
	{
		name: "Textarea",
		component: Textarea,
		props: { id: "t", label: "T" },
		defaults: { value: null }
	},
	{
		name: "ToolbarButton",
		component: ToolbarButton,
		props: { id: "tb", label: "Tool" },
		context: toolbarContext,
		defaults: { selected: false }
	}
];

describe("bindable props accept a bound variable that starts undefined", () => {
	beforeEach(() => {
		vi.stubGlobal(
			"IntersectionObserver",
			class {
				observe() {}
				unobserve() {}
				disconnect() {}
				takeRecords() {
					return [];
				}
			}
		);
	});
	afterEach(() => vi.unstubAllGlobals());

	test.each(cases)("$name", ({ component, props = {}, context, defaults }) => {
		/** @type {Record<string, unknown>} */
		const bound = $state(Object.fromEntries(Object.keys(defaults).map((key) => [key, undefined])));
		const allProps = { ...props };
		for (const key of Object.keys(defaults))
			Object.defineProperty(allProps, key, {
				enumerable: true,
				get: () => bound[key],
				set: (v) => {
					bound[key] = v;
				}
			});

		expect(() => render(component, { props: allProps, context })).not.toThrow();
		for (const [key, value] of Object.entries(defaults)) expect(bound[key], key).toEqual(value);
	});
});
