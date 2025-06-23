<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import Input from "./Input.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Inputs/Input",
		component: Input,
		tags: ["autodocs"],
		argTypes: {},
		parameters: withComponentDocs(componentDocs)
	});
</script>

{#snippet template(args)}
	<div style:padding="12px">
		<Input {...args} />
	</div>
{/snippet}

<Story
	name="Default"
	args={{
		id: "text",
		label: "Enter some text"
	}}
	{template}
/>

<Story
	name="With hidden label"
	args={{
		id: "text",
		label: "Enter some text",
		hideLabel: true
	}}
	{template}
/>

<Story
	name="With description"
	args={{
		id: "text",
		label: "Enter some text",
		description: "This is a hint on what to enter"
	}}
	{template}
/>

<Story
	name="Numeric with prefix"
	args={{
		id: "text",
		label: "Enter some text",
		prefix: "£",
		unitLabel: "British pounds sterling",
		numeric: true,
		width: 5,
		charLimit: 8
	}}
	{template}
/>

<Story
	name="Input error"
	args={{
		id: "text",
		label: "Enter some text",
		error: true
	}}
	{template}
/>
