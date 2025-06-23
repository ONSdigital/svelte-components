<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import Dropdown from "./Dropdown.svelte";
	import componentDocs from "./docs/component.md?raw";
	import options from "../../js/menuOptions.js";

	const { Story } = defineMeta({
		title: "Inputs/Dropdown",
		component: Dropdown,
		tags: ["autodocs"],
		argTypes: {},
		parameters: withComponentDocs(componentDocs)
	});
</script>

{#snippet template(args)}
	<div style:padding="12px">
		<Dropdown {...args} />
	</div>
{/snippet}

<Story
	name="Default"
	args={{
		id: "topic",
		label: "Question topic",
		options
	}}
	{template}
/>

<Story
	name="Hidden label"
	args={{
		id: "topic",
		label: "Question topic",
		hideLabel: true,
		options
	}}
	{template}
/>

<Story
	name="Custom placeholder text"
	args={{
		id: "topic",
		label: "Question topic",
		hideLabel: true,
		placeholder: "Some custom text",
		options
	}}
	{template}
/>
