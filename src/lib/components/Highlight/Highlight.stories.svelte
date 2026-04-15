<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import Highlight from "./Highlight.svelte";
	import componentDocs from "./docs/component.md?raw";
	import { lipsum } from "../../js/utils.js";

	const { Story } = defineMeta({
		title: "Layout/Highlight",
		component: Highlight,
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
	<Highlight {...args}>
		<p>
			{lipsum(1)}
		</p>
	</Highlight>
{/snippet}

<Story name="Default" args={{}} {template} />
