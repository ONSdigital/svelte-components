<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import componentDocs from "./docs/component.md?raw";
	import ButtonGroup from "./ButtonGroup.svelte";
	import ButtonGroupItem from "./ButtonGroupItem.svelte";
	import { withComponentDocs } from "../../js/withParams.js";

	const { Story } = defineMeta({
		title: "Inputs/ButtonGroup",
		component: ButtonGroup,
		tags: ["autodocs"],
		argTypes: {
			legend: { control: "text" },
			visuallyHideLegend: { control: "boolean" }
		},
		parameters: withComponentDocs(componentDocs)
	});
</script>

{#snippet template(args)}
	<ButtonGroup {...args}>
		<ButtonGroupItem value="1" label="Option 1" />
		<ButtonGroupItem value="2" label="Option 2" />
		<ButtonGroupItem value="3" label="Option 3" />
	</ButtonGroup>
{/snippet}

<Story name="Default" args={{ name: "primary", legend: "Choose an option" }} {template} />

<Story
	name="With initial value"
	args={{ name: "primary", legend: "Choose an option", value: "2" }}
	{template}
/>

<Story
	name="Visually hide legend"
	args={{ name: "primary", legend: "Choose an option", visuallyHideLegend: true }}
	{template}
/>
