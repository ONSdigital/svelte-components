<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import Embed from "./Embed.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Wrappers/Embed",
		component: Embed,
		tags: ["autodocs"],
		argTypes: {},
		parameters: withComponentDocs(componentDocs)
	});
</script>

{#snippet template(args)}
	<Embed {...args}>
		<div style:padding="24px 0" style:background="var(--ons-color-grey-10)">
			<p style:margin="0">Embedded content.</p>
		</div>
	</Embed>
{/snippet}

<Story name="Default" args={{}} {template} />
