Components for adding interactive scrollytelling sections to a feature article.

Svelte 5 uses `background` and `foreground` snippets in place of named slots. `onChange`, `onEnter`, and `onExit` receive `{ id, index, sectionId }`; the retained `on:change`, `on:enter`, and `on:exit` events expose the same payload through `event.detail`. Existing output bindings remain available. Shared scroll/resize listeners are removed after the last Scroller unmounts.

<!-- prettier-ignore -->
```html
<script>
  import { Scroller, ScrollerSection, Container } from "@onsvisual/svelte-components";

  function updateScroller(detail) {
    // Function to update scroller background components, using the following props:
    // 1. detail.id - the ID of the Scroller
    // 2. detail.index - the index of the current ScrollerSection
    // 3. detail.sectionId - the (optional) ID of the current ScrollerSection
  }
</script>

<Scroller onChange={updateScroller} id={any_unique_id}>
  {#snippet background()}
    <!--
      The <Container> component is optional here.
      It is a useful way to set the height and width of the background.
    -->
    <Container width="full" height="full">
      {background_components}
    </Container>
  {/snippet}
  {#snippet foreground()}
    <ScrollerSection id={any_unique_id}>
      <p>First section caption.</p>
    </ScrollerSection>
    <ScrollerSection id={any_unique_id}>
      <p>Second section caption.</p>
    </ScrollerSection>
    <ScrollerSection id={any_unique_id}>
      <p>Third section caption.</p>
    </ScrollerSection>
  {/snippet}
</Scroller>
```

## Full-bleed mode

Use the `fullBleed` prop when the scroller is embedded inside an existing content column but should fill the viewport width:

```html
<Scroller fullBleed>
	{#snippet background()}
	<Container width="full" height="full"> {background_components} </Container>
	{/snippet} {#snippet foreground()}
	<!-- ScrollerSection components -->
	{/snippet}
</Scroller>
```

**Important caveats:**

- The breakout uses `100vw`, which includes the vertical scrollbar width (~15px on desktop). To prevent an unwanted horizontal scrollbar, add `overflow-x: clip` to the page root (`html` or `body`).
- The margin calculation (`margin-left: calc(50% - 50vw)`) assumes the embedding column is horizontally centered on the viewport. In off-center layouts (e.g. with a sidebar), the section may be offset. Ensure the column is centered or adjust margins as needed.
- Avoid placing the scroller inside ancestors with `overflow: hidden`, as that clips the viewport-width breakout.
