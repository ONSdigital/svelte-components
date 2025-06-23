<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import Checkbox from "./Checkbox.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Inputs/Checkbox",
		component: Checkbox,
		tags: ["autodocs"],
		argTypes: {},
		parameters: withComponentDocs(componentDocs)
	});
</script>

{#snippet template(args)}
	<div
		style:padding="12px"
		style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
		style:color={args?.variant === "ghost" ? "white" : null}
	>
		<Checkbox {...args} />
	</div>
{/snippet}

<Story name="Default" args={{ id: "checkbox1", label: "Select this" }} {template} />

<Story name="Compact" args={{ id: "checkbox2", label: "Select this", compact: true }} {template} />

<Story
	name="Ghost checkbox"
	args={{ id: "checkbox3", label: "Select this", variant: "ghost" }}
	{template}
/>
