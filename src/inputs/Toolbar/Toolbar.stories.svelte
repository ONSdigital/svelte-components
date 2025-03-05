<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";

  import ToolbarsContainer from "./ToolbarsContainer.svelte";
  import Toolbar from "./Toolbar.svelte";
  import ToolbarButton from "./ToolbarButton.svelte";
  import ToolbarDivider from "./ToolbarDivider.svelte";
  import movepanimg from "./img/movepan.png";
  import Button from "../Button/Button.svelte";
  import ToolControls from "./ToolControls.svelte";
  import ToolControl from "./ToolControl.svelte";

  import { withComponentDocs } from "../../js/withParams.js";

  const toolbarContent = [
    {
      type: "button",
      id: "move",
      icon: "move",
      label: "Move and Pan",
      helpContent: `<h3>Move and pan</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p><img src='${movepanimg}' alt='Move and pan' />`,
    },
    {
      type: "button",
      id: "polygon",
      icon: "polygon",
      label: "Draw a polygon",
      helpContent:
        "<h3>Draw a polygon</h3><p>Left-click to add a point to the polygon. Double-click to finish drawing.</p>",
      hasAriaControls: true,
    },
    {
      type: "button",
      id: "circle",
      icon: "radius",
      label: "Draw a circle",
      helpContent:
        "<h3>Draw a circle</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>",
    },
    {
      type: "divider",
    },
    {
      type: "button",
      id: "zoomin",
      icon: "zoomin",
      label: "Zoom in",
      helpContent:
        "<h3>Zoom in</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>",
    },
    {
      type: "button",
      id: "zoomout",
      icon: "zoomout",
      label: "Zoom out",
      helpContent:
        "<h3>Zoom out</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>",
    },
    {
      type: "divider",
    },
    {
      type: "button",
      id: "undo",
      icon: "undo",
      label: "Undo last step",
      helpContent:
        "<h3>Undo last step</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>",
    },
    {
      type: "button",
      id: "redo",
      icon: "redo",
      label: "Redo last step",
      helpContent:
        "<h3>Redo last step</h3><p>Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction.</p>",
      disabled: true,
    },
    {
      type: "divider",
    },
    {
      type: "button",
      id: "search",
      icon: "search",
      label: "Search for an area",
      helpContent: "<h3>Search</h3><p>Search for an area by name or postcode.</p>",
    },
  ];
</script>

<Meta
  title="Inputs/Toolbar"
  component="{Toolbar}"
  argTypes="{{
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'select' },
    },
  }}"
  {...withComponentDocs(componentDocs)}
/>

<Template let:args>
  <ToolbarsContainer>
    <Toolbar orientation="{args.orientation}">
      {#each toolbarContent as { type, id, icon, label, helpContent, disabled, hasAriaControls }}
        {#if type === "button"}
          <ToolbarButton
            id="{id}"
            icon="{icon}"
            label="{label}"
            disabled="{disabled}"
            hasAriaControls="{hasAriaControls}"
          >
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
    <Toolbar>
      <ToolbarButton id="download" icon="download" label="Download area" />
      <ToolbarButton id="upload" icon="upload" label="Upload a geometry" />
      <ToolbarDivider />
      <ToolbarButton id="help" icon="help" label="Help" />
      <ToolbarDivider />
      <ToolbarButton id="getstarted" custom label="Get started">
        <div slot="custom">
          <Button disabled small>Build profile</Button>
        </div>
      </ToolbarButton>
    </Toolbar>
  </ToolbarsContainer>
</Template>

<Story name="Default" args="{{ ariaLabel: 'Toolbar' }}" />

<Story name="Vertical" args="{{ orientation: 'vertical' }}" />

<Story name="Sticky buttons">
  <ToolbarsContainer>
    <Toolbar>
      <ToolbarButton id="move" icon="move" label="Move and Pan" sticky />
      <ToolbarButton id="polygon" icon="polygon" label="Draw a polygon" sticky />
      <ToolbarButton id="circle" icon="radius" label="Draw a circle" sticky />
    </Toolbar>
  </ToolbarsContainer>
</Story>

<Story name="Transient buttons">
  <ToolbarsContainer>
    <Toolbar>
      <ToolbarButton
        id="zoomin"
        icon="zoomin"
        label="Zoom in"
        transient="{true}"
        selected="{false}"
      />
      <ToolbarButton id="zoomout" icon="zoomout" label="zoom out" transient />
    </Toolbar>
  </ToolbarsContainer>
</Story>

<Story name="No help modal">
  <ToolbarsContainer>
    <Toolbar>
      <ToolbarButton
        id="zoomin"
        icon="zoomin"
        label="Zoom in"
        transient="{true}"
        selected="{false}"
        disableHelp="{true}"
      />
      <ToolbarButton id="zoomout" icon="zoomout" label="zoom out" disableHelp="{true}" transient />
    </Toolbar>
  </ToolbarsContainer>
</Story>
