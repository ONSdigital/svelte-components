<span class="ons-warning">This component is experimental</span>

A toolbar component. Use `ToolbarsContainer` even if using one toolbar as it contains a store for all the IDs and the activeID.

`ToolbarButton` accepts child content for custom help, or the `helpText` prop for plain text. In Svelte 5, replace Toolbar's named `controls` slot with a `controls` snippet. Replace ToolbarButton's named `custom` slot with a `customContent` snippet; the boolean `custom` prop is unchanged. `onClick(detail)` receives `null`, matching the retained `on:click` event's detail.

```svelte
<ToolbarsContainer>
	<Toolbar>
		<ToolbarButton id="search" icon="search" label="Search" hasAriaControls />
		{#snippet controls()}
			<ToolControls>
				<ToolControl id="search"><input aria-label="Search query" /></ToolControl>
			</ToolControls>
		{/snippet}
	</Toolbar>
</ToolbarsContainer>
```

Each `ToolControl` will display content underneath the row of buttons. The `id` needs to match the `id` of the button.

Use the prop `hasAriaControls` on a button to link the controls to the button.

<!-- prettier-ignore -->
```html
<script>
  import { ToolbarsContainer,Toolbar,ToolbarButton, ToolbarDivider,ToolControls,ToolControl, HelpModal } from "@onsvisual/svelte-components";
</script>

  <ToolbarsContainer>

    <Toolbar orientation="horizontal">
      <ToolbarButton id="polygon" icon="polygon" label="Draw a polygon" hasAriaControls>
          <h3>Detailed Help</h3>
          <p>More complex help text or even HTML content</p>
          <ul>
            <li>With lists</li>
            <li>Or other elements</li>
          </ul>
      </ToolbarButton>
      <ToolbarButton
        icon="radius"
        label="Draw a circle"
        helpText="Draw a circle using this tool"
      />
      <ToolbarDivider />
      <ToolbarButton
        icon="zoomin"
        label="Zoom in"
      />
      <ToolbarButton icon="zoomout" label="Zoom out" />
      {#snippet controls()}
        <ToolControls>
          <ToolControl id="polygon">
            <p>Text to display when polygon tool is selected, or even an input</p>
          </ToolControl>
        </ToolControls>
      {/snippet}
    </Toolbar>


    <!-- Second toolbar -->
    <Toolbar>
      <ToolbarButton id="upload" icon="upload"/>
      <ToolbarButton id="download" icon="download"/>
    </Toolbar>
  </ToolbarsContainer>
```

## Sticky buttons

```html
<ToolbarsContainer>
	<Toolbar>
		<ToolbarButton id="move" icon="move" label="Move and Pan" sticky />
		<ToolbarButton id="polygon" icon="polygon" label="Draw a polygon" sticky />
		<ToolbarButton id="circle" icon="radius" label="Draw a circle" sticky />
	</Toolbar>
</ToolbarsContainer>
```

## Transient buttons

```html
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
```

## No help modal

```html
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
```
