<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import Observe from "./Observe.svelte";
	import componentDocs from "./docs/component.md?raw";

	const colors = ["yellow", "green", "blue", "purple", "red", "orange"];

	const { Story } = defineMeta({
		title: "Wrappers/Observe",
		component: Observe,
		tags: ["autodocs"],
		argTypes: {},
		parameters: withComponentDocs(componentDocs)
	});
</script>

{#snippet template(args)}
	{#each colors as color}
		<Observe
			on:enter={() => console.log(`${color} entered`)}
			on:exit={() => console.log(`${color} exited`)}
		>
			<div style:background={color} style:height="400px"></div>
		</Observe>
	{/each}
{/snippet}

<Story name="Default" args={{}} {template} />
