<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import Blockquote from "./Blockquote.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Decorators/Blockquote",
		component: Blockquote,
		tags: ["autodocs"],
		argTypes: {},
		parameters: withComponentDocs(componentDocs)
	});
</script>

{#snippet template(args)}
	<Blockquote {...args}>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua.
	</Blockquote>
{/snippet}

<Story name="Default" args={{ attribution: "A N Other" }} {template} />

<Story name="Quote without attribution" args={{}} {template} />
