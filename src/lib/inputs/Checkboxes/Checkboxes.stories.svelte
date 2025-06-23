<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs, withStoryDocs } from "../../js/withParams.js";
	import Checkbox from "../Checkbox/Checkbox.svelte";
	import Checkboxes from "./Checkboxes.svelte";
	import componentDocs from "./docs/component.md?raw";
	import exampleDocs from "./docs/example.md?raw";

	const { Story } = defineMeta({
		title: "Inputs/Checkboxes",
		component: Checkboxes,
		tags: ["autodocs"],
		argTypes: {},
		parameters: withComponentDocs(componentDocs)
	});

	const items = [
		{ id: "ice-cream", label: "Ice cream", checked: true },
		{ id: "sprinkles", label: "Sprinkles", description: "Highly recommended!", checked: false },
		{ id: "disabled", label: "Disabled option", checked: false, disabled: true }
	];
</script>

<Story name="Default" args={{ label: "Select items", items }} />

<Story name="Compact without label" args={{ items, compact: true }} />

<Story name="Individually defined checkboxes" asChild parameters={withStoryDocs(exampleDocs)}>
	<Checkboxes label="Select items">
		<Checkbox id="ice-cream" label="Ice cream" />
		<Checkbox id="sprinkles" label="Sprinkles" description="Highly recommended!" />
		<Checkbox id="disabled" label="Disabled option" disabled />
	</Checkboxes>
</Story>
