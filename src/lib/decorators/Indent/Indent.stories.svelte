<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import Indent from "./Indent.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Decorators/Indent",
		component: Indent,
		tags: ["autodocs"],
		argTypes: {},
		parameters: withComponentDocs(componentDocs)
	});
</script>

{#snippet template(args)}
	<Indent {...args}>
		<p>An indented paragraph of text.</p>
	</Indent>
{/snippet}

<Story name="Default" args={{}} {template} />
