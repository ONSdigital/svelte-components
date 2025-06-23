<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import ErrorPanel from "./ErrorPanel.svelte";
	import Input from "../Input/Input.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Inputs/ErrorPanel",
		component: ErrorPanel,
		tags: ["autodocs"],
		argTypes: {},
		parameters: withComponentDocs(componentDocs)
	});
</script>

{#snippet template(args)}
	<div style:padding="12px">
		<ErrorPanel {...args}>
			<Input />
		</ErrorPanel>
	</div>
{/snippet}

<Story name="Default" args={{ message: "You entered the wrong text" }} {template} />
