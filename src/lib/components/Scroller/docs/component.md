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

<Scroller onChange={updateScroller} id="{any_unique_id}">
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
    <ScrollerSection id="{any_unique_id}">
      <p>First section caption.</p>
    </ScrollerSection>
    <ScrollerSection id="{any_unique_id}">
      <p>Second section caption.</p>
    </ScrollerSection>
    <ScrollerSection id="{any_unique_id}">
      <p>Third section caption.</p>
    </ScrollerSection>
  {/snippet}
</Scroller>
```
