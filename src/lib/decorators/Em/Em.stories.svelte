<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import Em from "./Em.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Decorators/Em",
		component: Em,
		tags: ["autodocs"],
		argTypes: {
			color: {
				control: { type: "color" }
			}
		},
		parameters: withComponentDocs(componentDocs)
	});
</script>

{#snippet template(args)}
	<Em {...args}>{args.text}</Em>
{/snippet}

<Story name="Mark mode" args={{ text: "Text on grey background" }} {template} />

<Story
	name="Badge mode"
	args={{ text: "Text on badge", color: "navy", mode: "badge" }}
	{template}
/>
