<script>
	import * as Charts from "@onsvisual/svelte-charts";
	import Accordion from "$lib/components/Accordion/Accordion.svelte";
	import AccordionItem from "$lib/components/Accordion/AccordionItem.svelte";
	import Tabs from "$lib/components/Tabs/Tabs.svelte";
	import Tab from "$lib/components/Tabs/Tab.svelte";
	import Grid from "$lib/components/Grid/Grid.svelte";
	import GridCell from "$lib/components/Grid/GridCell.svelte";
	import NavSections from "$lib/components/NavSections/NavSections.svelte";
	import NavSection from "$lib/components/NavSections/NavSection.svelte";
	import DocumentList from "$lib/components/DocumentList/DocumentList.svelte";
	import Document from "$lib/components/DocumentList/Document.svelte";
	import Timeline from "$lib/components/Timeline/Timeline.svelte";
	import TimelineItem from "$lib/components/Timeline/TimelineItem.svelte";
	import ButtonGroup from "$lib/components/ButtonGroup/ButtonGroup.svelte";
	import ButtonGroupItem from "$lib/components/ButtonGroup/ButtonGroupItem.svelte";
	import Checkboxes from "$lib/components/Checkboxes/Checkboxes.svelte";
	import ToolbarsContainer from "$lib/components/Toolbar/ToolbarsContainer.svelte";
	import Toolbar from "$lib/components/Toolbar/Toolbar.svelte";
	import ToolbarButton from "$lib/components/Toolbar/ToolbarButton.svelte";
	import ToolControl from "$lib/components/Toolbar/ToolControl.svelte";
	import Scroller from "$lib/components/Scroller/Scroller.svelte";
	import ScrollerSection from "$lib/components/Scroller/ScrollerSection.svelte";
	import { previewProps } from "./prop-fixtures.js";

	const modules = import.meta.glob(["/src/lib/components/**/*.svelte", "!/src/lib/components/**/*.stories.svelte"], { eager: true, import: "default" });
	/** @type {{ schema: import('./prop-fixtures.js').ComponentSchema; values?: Record<string, unknown>; onEvent?: (type: string, name: string, detail: unknown) => void }} */
	let { schema, values = $bindable({}), onEvent = () => {} } = $props();
	const Component = $derived(/** @type {any} */ (schema.external ? /** @type {Record<string, unknown>} */ (Charts)[schema.name] : modules[`/src/lib/components/${schema.file}`]));
	const resolvedProps = $derived(previewProps(schema, values, content, onEvent));
	const events = Object.fromEntries(["click", "change", "input", "blur", "toggle", "clear", "enter", "exit", "load"].map(name => [name, /** @param {CustomEvent} event */ event => onEvent("event", name, event.detail)]));
	const canonical = $derived(schema.canonical);
</script>

{#snippet content()}
	{#if canonical === "Accordion"}<AccordionItem title="First item"><p>Accordion content</p></AccordionItem>
	{:else if canonical === "Tabs"}<Tab id="prop-first" title="First tab"><p>First tab content</p></Tab><Tab id="prop-second" title="Second tab"><p>Second tab content</p></Tab>
	{:else if canonical === "Grid"}<GridCell><p>First cell</p></GridCell><GridCell><p>Second cell</p></GridCell>
	{:else if canonical === "NavSections"}<NavSection id="prop-nav-section" title="Example section"><p>Section content</p></NavSection>
	{:else if canonical === "DocumentList"}<Document title="Example document" href="#preview" />
	{:else if canonical === "Timeline"}<TimelineItem title="Example event"><p>Timeline content</p></TimelineItem>
	{:else if canonical === "ButtonGroup"}<ButtonGroupItem value="first" label="First" /><ButtonGroupItem value="second" label="Second" />
	{:else if canonical === "Toolbar"}<ToolbarButton id="prop-native-tool" label="Example tool" icon="search" />
	{:else if canonical === "ToolbarsContainer"}<Toolbar><ToolbarButton id="prop-contained-tool" label="Example tool" icon="search" /></Toolbar>
	{:else if canonical === "ToolControls"}<ToolControl id="prop-controls"><p>Control content</p></ToolControl>
	{:else if canonical === "Scroller"}<ScrollerSection id="prop-caption" title="First caption"><p>Scroll content</p></ScrollerSection>
	{:else if canonical === "Main"}<h2>Main content</h2><p>Example content</p>
	{:else}<span>Example content</span>{/if}
{/snippet}

{#snippet preview()}<Component {...resolvedProps} {...{ $$events: events }} />{/snippet}

{#if canonical === "AccordionItem"}<Accordion id="prop-parent-accordion">{@render preview()}</Accordion>
{:else if canonical === "Tab"}<Tabs>{@render preview()}</Tabs>
{:else if canonical === "GridCell"}<Grid>{@render preview()}</Grid>
{:else if canonical === "NavSection"}<NavSections>{@render preview()}</NavSections>
{:else if canonical === "Document"}<DocumentList>{@render preview()}</DocumentList>
{:else if canonical === "TimelineItem"}<Timeline>{@render preview()}</Timeline>
{:else if canonical === "ButtonGroupItem"}<ButtonGroup>{@render preview()}</ButtonGroup>
{:else if canonical === "Checkbox"}<Checkboxes>{@render preview()}</Checkboxes>
{:else if canonical === "ScrollerSection"}<Scroller id="prop-parent-scroller">{#snippet background()}<div style="height:200px;background:#e6f4f3">Background</div>{/snippet}{#snippet foreground()}{@render preview()}{/snippet}</Scroller>
{:else if ["Toolbar", "ToolbarButton", "ToolbarDivider", "ToolbarIcon", "HelpModal", "ToolControls", "ToolControl"].includes(canonical)}
	<ToolbarsContainer><Toolbar><ToolbarButton id="prop-controls" label="Control panel" disableHelp />{@render preview()}</Toolbar></ToolbarsContainer>
{:else}{@render preview()}{/if}