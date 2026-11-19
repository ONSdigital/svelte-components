<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import WidthReset from "./WidthReset.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Wrappers/WidthReset",
		component: WidthReset,
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
	<WidthReset {...args}>
		<div style:padding="24px 12px" style:background="var(--ons-color-grey-10)">
			<p style:margin="0">Contents of reset container.</p>
		</div>
	</WidthReset>
{/snippet}

<Story name="Default" args={{}} {template} />
