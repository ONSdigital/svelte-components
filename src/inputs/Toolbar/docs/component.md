A toolbar made up of buttons and dividers

<!-- prettier-ignore -->
```html
<script>
  import { Toolbar } from "@onsvisual/svelte-components";

  <Toolbar orientation="horizontal">
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

</script>
```
