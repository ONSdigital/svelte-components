<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import ToolbarsContainer from "./ToolbarsContainer.svelte";
	import Toolbar from "./Toolbar.svelte";
	import ToolbarButton from "./ToolbarButton.svelte";
	import ToolbarDivider from "./ToolbarDivider.svelte";
	import movepanimg from "./img/movepan.png";
	import Button from "../Button/Button.svelte";
	import ToolControls from "./ToolControls.svelte";
	import ToolControl from "./ToolControl.svelte";
	import componentDocs from "./docs/component.md?raw";

	let container;

	const toolbarContent = [
		{
			type: "button",
			id: "move",
			icon: "move",
			label: "Move and Pan",
			helpContent: `<h3>Move and pan</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p><img src='${movepanimg}' alt='Move and pan' />`
		},
		{
			type: "button",
			id: "polygon",
			icon: "polygon",
			label: "Draw a polygon",
			helpContent:
				"<h3>Draw a polygon</h3><p>Left-click to add a point to the polygon. Double-click to finish drawing.</p>",
			hasAriaControls: true
		},
		{
			type: "button",
			id: "circle",
			icon: "radius",
			label: "Draw a circle",
			helpContent:
				"<h3>Draw a circle</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>"
		},
		{
			type: "divider"
		},
		{
			type: "button",
			id: "zoomin",
			icon: "zoomin",
			label: "Zoom in",
			helpContent:
				"<h3>Zoom in</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>"
		},
		{
			type: "button",
			id: "zoomout",
			icon: "zoomout",
			label: "Zoom out",
			helpContent:
				"<h3>Zoom out</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>"
		},
		{
			type: "divider"
		},
		{
			type: "button",
			id: "undo",
			icon: "undo",
			label: "Undo last step",
			helpContent:
				"<h3>Undo last step</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>"
		},
		{
			type: "button",
			id: "redo",
			icon: "redo",
			label: "Redo last step",
			helpContent:
				"<h3>Redo last step</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>",
			disabled: true
		},
		{
			type: "divider"
		},
		{
			type: "button",
			id: "search",
			icon: "search",
			label: "Search for an area",
			helpContent: "<h3>Search</h3><p>Search for an area by name or postcode.</p>"
		}
	];

	const { Story } = defineMeta({
		title: "Inputs/Toolbar",
		component: ToolbarsContainer,
		tags: ["autodocs"],
		argTypes: {
			orientation: {
				options: ["horizontal", "vertical"],
				control: { type: "select" }
			}
		},
		parameters: withComponentDocs(componentDocs)
	});
</script>

{#snippet template(args)}
	<ToolbarsContainer bind:this={container}>
		<Toolbar orientation={args.orientation} ariaLabel={args.ariaLabel}>
			{#each toolbarContent as { type, id, icon, label, helpContent, disabled, hasAriaControls }}
				{#if type === "button"}
					<ToolbarButton {id} {icon} {label} {disabled} {hasAriaControls}>
						{@html helpContent}
					</ToolbarButton>
				{:else}
					<ToolbarDivider />
				{/if}
			{/each}
			<ToolControls slot="controls">
				<ToolControl id="polygon">
					<p>
						Click or tap an area on the map to add a node to the shape. To apply a shape, close it
						by clicking or tapping on the starting node.
					</p>
					<Button variant="secondary" disabled>Clear shape</Button>
					<Button variant="primary">Apply shape</Button>
				</ToolControl>
			</ToolControls>
		</Toolbar>
		<Toolbar orientation={args.orientation}>
			<ToolbarButton id="download" icon="download" label="Download area" />
			<ToolbarButton id="upload" icon="upload" label="Upload a geometry" />
			<ToolbarDivider />
			<ToolbarButton id="help" icon="help" label="Help" on:click={container.resetHelp} />
			<ToolbarDivider />
			<ToolbarButton id="getstarted" custom label="Get started">
				<div slot="custom">
					<Button disabled small>Build profile</Button>
				</div>
			</ToolbarButton>
		</Toolbar>
	</ToolbarsContainer>
{/snippet}

{#snippet transient(args)}{/snippet}

<Story name="Default" args={{ ariaLabel: "Toolbar" }} {template} />

<Story name="Vertical" args={{ orientation: "vertical" }} {template} />
