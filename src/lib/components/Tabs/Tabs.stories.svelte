<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import Tabs from "./Tabs.svelte";
	import Tab from "./Tab.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Layout/Tabs",
		component: Tabs,
		tags: ["autodocs"],
		argTypes: {},
		parameters: withComponentDocs(componentDocs)
	});
</script>

{#snippet template(args)}
	<Tabs {...args}>
		<Tab title="Tab one">Contents of tab panel one.</Tab>
		<Tab title="Tab two">Contents of tab panel two.</Tab>
		<Tab title="Tab three">Contents of tab panel three.</Tab>
	</Tabs>
{/snippet}

<Story name="Default" args={{}} {template} />

<Story name="Tab panel border" args={{ border: true }} {template} />

<Story name="Compact tab labels" args={{ compact: true }} {template} />
