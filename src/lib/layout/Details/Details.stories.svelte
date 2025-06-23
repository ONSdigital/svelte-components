<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import Details from "./Details.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Layout/Details",
		component: Details,
		tags: ["autodocs"],
		argTypes: {},
		parameters: withComponentDocs(componentDocs)
	});
</script>

{#snippet template(args)}
	<Details {...args}>
		<p>{@html args.content || ""}</p>
	</Details>
{/snippet}

<Story
	name="Default"
	args={{ title: "Title of twisty", content: "Contents of twisty." }}
	{template}
/>

<Story
	name="Open by default"
	args={{ title: "Title of twisty", content: "Contents of twisty.", open: true }}
	{template}
/>
