<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs, withStoryDocs } from "../../js/withParams.js";
	import Radio from "./Radio.svelte";
	import Radios from "./Radios.svelte";
	import componentDocs from "./docs/component.md?raw";
	import exampleDocs from "./docs/example.md?raw";

	const { Story } = defineMeta({
		title: "Inputs/Radios",
		component: Radios,
		tags: ["autodocs"],
		argTypes: {},
		parameters: withComponentDocs(componentDocs)
	});

	let items = [
		{
			id: "house",
			label: "House or bungalow",
			description: "Includes terraced, semi-detached and detached homes."
		},
		{ id: "flat", label: "Flat, maisonette or apartment" },
		{ id: "mobile", label: "Caravan or other mobile or temporary structure" }
	];
</script>

{#snippet template(args)}
	<div style:padding="12px">
		<Radios {...args} />
	</div>
{/snippet}

<Story name="Default" args={{ label: "Select one", id: "radios", items }} {template} />

<Story name="Compact without label" args={{ id: "radios", items, compact: true }} {template} />

<Story name="Individually defined radios" asChild parameters={withStoryDocs(exampleDocs)}>
	<div style:padding="12px">
		<Radios label="Select one">
			<Radio
				groupId="radios"
				id="house"
				label="House or bungalow"
				description="Includes terraced, semi-detached and detached homes."
			/>
			<Radio groupId="radios" id="flat" label="Flat, maisonette or apartment" />
			<Radio groupId="radios" id="mobile" label="Caravan or other mobile or temporary structure" />
		</Radios>
	</div>
</Story>
