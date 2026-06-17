<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import Tooltip from "./Tooltip.svelte";
	import Button from "../Button/Button.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Decorators/Tooltip",
		component: Tooltip,
		tags: ["autodocs"],
		argTypes: {},
		parameters: withComponentDocs(componentDocs)
	});
</script>

{#snippet template(args)}
	<Tooltip {...args}>
		<Button icon="search" hideLabel>Search text</Button>
	</Tooltip>
{/snippet}

<Story name="Default" args={{ text: "Search for something", position: "right" }} {template} />
