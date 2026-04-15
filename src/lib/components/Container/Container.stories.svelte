<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import Container from "./Container.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Wrappers/Container",
		component: Container,
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
	<Container {...args}>
		<div style:padding="24px 12px" style:background="var(--ons-color-grey-10)">
			<p style:margin="0">Contents of container.</p>
		</div>
	</Container>
{/snippet}

<Story name="Default" args={{}} {template} />

<Story name="Narrow" args={{ width: "narrow" }} {template} />

<Story name="Medium" args={{ width: "medium" }} {template} />

<Story name="Wide" args={{ width: "wide" }} {template} />

<Story name="Wider" args={{ width: "wider" }} {template} />

<Story name="Full" args={{ width: "full" }} {template} />
