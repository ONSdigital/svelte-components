<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  // @ts-ignore
  import componentDocs from "./docs/component.md?raw";

  import Toolbar from "./Toolbar.svelte";
  import ToolbarButton from "./ToolbarButton.svelte";
  import ToolbarDivider from "./ToolbarDivider.svelte";
  import HelpModal from "./HelpModal.svelte";

  import { withComponentDocs } from "../../js/withParams.js";
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
    <ToolbarButton
      icon="move"
      label="Move and Pan"
      helpText="Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction."
    />
    <ToolbarButton icon="polygon" label="Draw a polygon" helpText="Draw a polygon on the map">
      <HelpModal>
        <h3>Detailed Help</h3>
        <p>More complex help text or even HTML content</p>
        <ul>
          <li>With lists</li>
          <li>Or other elements</li>
        </ul>
      </HelpModal>
    </ToolbarButton>
    <ToolbarButton
      icon="radius"
      label="Draw a circle"
      helpText="Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction."
    />
    <ToolbarDivider />
    <ToolbarButton
      icon="zoomin"
      label="Zoom in"
      helpText="Left-click anywhere on the map and hold the button down while dragging the mouse to move the map in the desired direction."
    />
    <ToolbarButton icon="zoomout" label="Zoom out" />
    <ToolbarDivider />
    <ToolbarButton icon="undo" label="Undo last step" />
    <ToolbarButton icon="redo" label="Redo last step" />
  </Toolbar>
</Template>

<Story name="Default" args="{{ ariaLabel: 'Toolbar' }}" />
