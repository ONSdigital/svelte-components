<script>
	// Test fixture for Toolbar.svelte.test.js (excluded from the package by "!dist/**/*.test.*")
	import ToolbarsContainer from "./ToolbarsContainer.svelte";
	import Toolbar from "./Toolbar.svelte";
	import ToolbarButton from "./ToolbarButton.svelte";
	import ToolbarDivider from "./ToolbarDivider.svelte";
	import ToolControls from "./ToolControls.svelte";
	import ToolControl from "./ToolControl.svelte";

	/** @type {"horizontal" | "vertical"} */
	export let orientation = "horizontal";
	/** @type {(id: string) => void} */
	export let onClick = () => {};
	let selected = false;
</script>

<ToolbarsContainer>
	<Toolbar ariaLabel="Map tools" {orientation}>
		<ToolbarButton
			id="move"
			icon="move"
			label="Move"
			helpText="Drag the map to move it"
			on:click={() => onClick("move")}
		/>
		<ToolbarDivider />
		<ToolbarButton id="zoom" icon="zoomin" label="Zoom" helpText="Zoom in on the map" />
		<ToolbarButton id="toggle" icon="search" label="Search" toggle bind:selected disableHelp />
		<ToolControls slot="controls">
			<ToolControl id="move"><p>Move controls</p></ToolControl>
		</ToolControls>
	</Toolbar>
</ToolbarsContainer>
<p data-testid="selected">{selected}</p>
