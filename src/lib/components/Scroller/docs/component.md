Components for adding interactive scrollytelling sections to a feature article.

<!-- prettier-ignore -->
```html
<script>
  import { Scroller, ScrollerSection, Container } from "@onsvisual/svelte-components";

  function updateScroller(e) {
    // Function to update scroller background components, using the following props:
    // 1. e.detail.id - the ID of the Scroller
    // 2. e.detail.index - the index of the current ScrollerSection
    // 3. e.detail.sectionId - the (optional) ID of the current ScrollerSection
  }
</script>

<Scroller on:change="{updateScroller}" id="{any_unique_id}" fullBleed="{true}">
  <div slot="background">
    <!--
      The <Container> component is optional here.
      It is a useful way to set the height and width of the background.
    -->
    <Container width="full" height="full">
      {background_components}
    </Container>
  </div>
  <div slot="foreground">
    <ScrollerSection id="{any_unique_id}">
      <p>First section caption.</p>
    </ScrollerSection>
    <ScrollerSection id="{any_unique_id}">
      <p>Second section caption.</p>
    </ScrollerSection>
    <ScrollerSection id="{any_unique_id}">
      <p>Third section caption.</p>
      </p>
    </ScrollerSection>
  </div>
</Scroller>
```

Use `fullBleed="{true}"` when the scroller is embedded inside an existing content column but should fill the viewport width. The background slot should still provide its own viewport height, for example with `<Container width="full" height="full">`. Avoid placing the embed inside an ancestor with `overflow: hidden`, as that can clip the viewport-width breakout.
