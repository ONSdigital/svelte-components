<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import Accordion from "./Accordion.svelte";
	import AccordionItem from "./AccordionItem.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Layout/Accordion",
		component: Accordion,
		tags: ["autodocs"],
		argTypes: {},
		parameters: withComponentDocs(componentDocs)
	});
</script>

{#snippet template(args)}
	<Accordion {...args}>
		<AccordionItem title="First item">
			<p>Contents of first item.</p>
		</AccordionItem>
		<AccordionItem title="Second item">
			<p>Contents of second item.</p>
		</AccordionItem>
	</Accordion>
{/snippet}

<Story name="Default" args={{}} {template} />

<Story name="With 'show all' toggle" args={{ showToggle: true }} {template} />
