<script module>
	// @ts-ignore
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import Select from "./Select.svelte";
	import componentDocs from "./docs/component.md?raw";
	import options from "../../js/menuOptions.js";

	const { Story } = defineMeta({
		title: "Inputs/Select",
		component: Select,
		tags: ["autodocs"],
		argTypes: {
			mode: {
				options: ["search", "dropdown"],
				control: { type: "select" }
			}
		},
		parameters: withComponentDocs(componentDocs)
	});
</script>

{#snippet template(args)}
	<div style:padding="0 0 200px">
		<Select {...args} />
	</div>
{/snippet}

<Story
	name="Default"
	args={{ id: "default", value: options[0], label: "Select an option", options }}
	{template}
/>

<Story
	name="Hidden label"
	args={{ id: "hidden-label", label: "Select an option", hideLabel: true, options }}
	{template}
/>

<Story
	name="Search mode"
	args={{
		id: "search",
		mode: "search",
		label: "Type to select",
		options
	}}
	{template}
/>

<Story
	name="Options with group as suffix"
	args={{
		id: "group-suffix",
		label: "Select an option",
		groupKey: "group",
		options
	}}
	{template}
/>
