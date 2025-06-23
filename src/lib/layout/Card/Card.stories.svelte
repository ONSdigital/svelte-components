<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import { lipsum } from "$lib/js/utils.js";
	import Card from "./Card.svelte";
	import Grid from "../Grid/Grid.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Layout/Card",
		component: Card,
		tags: ["autodocs"],
		argTypes: {},
		parameters: withComponentDocs(componentDocs)
	});
</script>

{#snippet template(args)}
	<Grid>
		<Card title="Card one" {...args}>{lipsum(1)}</Card>
		<Card title="Card two" {...args}>{lipsum(1, 1)}</Card>
		<Card title="Card three" {...args}>{lipsum(1, 2)}</Card>
	</Grid>
{/snippet}

<Story name="Default" args={{}} {template} />

<Story name="Cards with links" args={{ href: "#0" }} {template} />

<Story name="Featured cards with baseline" args={{ mode: "featured", baseline: true }} {template} />

<Story
	name="Featured cards with image"
	args={{
		mode: "featured",
		image: "https://service-manual.ons.gov.uk/img/small/placeholder-card.png"
	}}
	{template}
/>
