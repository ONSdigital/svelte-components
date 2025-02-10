<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";

  import Toolbar from "./Toolbar.svelte";
  import ToolbarButton from "./ToolbarButton.svelte";
  import ToolbarDivider from "./ToolbarDivider.svelte";
  import movepanimg from "./img/movepan.png";

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

  const buttonIds = toolbarContent.filter((item) => item.type === "button").map((item) => item.id);
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
  <Toolbar orientation="{args.orientation}">
    {#each toolbarContent as { type, id, icon, label, helpContent }}
      {#if type === "button"}
        <ToolbarButton id="{id}" icon="{icon}" label="{label}">
          {@html helpContent}
        </ToolbarButton>
      {:else}
        <ToolbarDivider />
      {/if}
    {/each}
  </Toolbar>
</Template>

<Story name="Default" args="{{ ariaLabel: 'Toolbar' }}" />

<Story name="Vertical" args="{{ orientation: 'vertical' }}" />
