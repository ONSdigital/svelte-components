<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import Grid from "./Grid.svelte";
	import GridCell from "./GridCell.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Layout/Grid",
		component: Grid,
		tags: ["autodocs"],
		argTypes: {
			width: {
				control: { type: "select" }
			},
			colWidth: {
				control: { type: "select" }
			},
			gridGap: {
				control: { type: "select" }
			}
		},
		parameters: withComponentDocs(componentDocs)
	});
</script>

{#snippet template(args)}
	<Grid {...args}>
		<GridCell><div class="grid-cell">Grid cell one</div></GridCell>
		<GridCell><div class="grid-cell">Grid cell two</div></GridCell>
		<GridCell><div class="grid-cell">Grid cell three</div></GridCell>
		<GridCell><div class="grid-cell">Grid cell four</div></GridCell>
	</Grid>
{/snippet}

<Story name="Default" args={{}} {template} />

<Story name="Wide columns" args={{ colWidth: "wide" }} {template} />

<Story name="Narrow columns" args={{ colWidth: "narrow" }} {template} />

<Story name="Full width columns" args={{ colWidth: "full" }} {template} />

<style>
	.grid-cell {
		background: var(--ons-color-grey-10);
		padding: 12px;
		height: 100px;
	}
</style>
