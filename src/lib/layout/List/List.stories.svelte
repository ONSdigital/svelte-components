<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs, withStoryDocs } from "../../js/withParams.js";
	import List from "./List.svelte";
	import Li from "./Li.svelte";
	import componentDocs from "./docs/component.md?raw";
	import exampleDocs from "./docs/example.md?raw";

	const { Story } = defineMeta({
		title: "Layout/List",
		component: List,
		tags: ["autodocs"],
		argTypes: {},
		parameters: withComponentDocs(componentDocs)
	});
</script>

{#snippet template(args)}
	<List {...args}>
		<Li>First list item</Li>
		<Li>Second list item</Li>
		<Li>Third list item</Li>
	</List>
{/snippet}

<Story name="Default" args={{}} {template} />

<Story name="Dashed list" args={{ mode: "dash" }} {template} />

<Story name="Numeric list" args={{ mode: "number" }} {template} />

<Story name="Bare list" args={{ mode: "bare" }} {template} />

<Story name="Inline list" args={{ mode: "inline" }} {template} />

<Story
	name="List with items defined by an array"
	args={{ items: ["<strong>First</strong> list item", "Second list item", "Third list item"] }}
	parameters={withStoryDocs(exampleDocs)}
/>
