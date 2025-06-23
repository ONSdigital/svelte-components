<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import Section from "./Section.svelte";
	import componentDocs from "./docs/component.md?raw";
	import { lipsum } from "../../js/utils.js";

	const { Story } = defineMeta({
		title: "Layout/Section",
		component: Section,
		tags: ["autodocs"],
		argTypes: {
			width: {
				control: { type: "select" }
			}
		},
		parameters: withComponentDocs(componentDocs)
	});
</script>

{#snippet template(args)}
	<Section {...args}>
		<p>
			{lipsum()}
		</p>
	</Section>
{/snippet}

<Story name="Default" args={{ title: "Section title" }} {template} />

<Story name="Medium" args={{ width: "medium", title: "Section title" }} {template} />

<Story name="Wide" args={{ width: "wide", title: "Section title" }} {template} />
