Components for adding interactive scrollytelling sections to a feature article.

In v2 (Svelte 5), pass the fixed background content with `{#snippet background()}` and the scrolling captions with `{#snippet foreground()}`. These replace v1's `slot="background"` and `slot="foreground"` attributes. Place `ScrollerSection` components inside the `foreground` snippet; their ordinary child content is passed as the `children` snippet.

Use `$state` for values that change as the reader scrolls. The `onChange`, `onEnter`, and `onExit` callbacks receive `{ id, index, sectionId }` directly, rather than a DOM event. `index` is zero-based and can be `null` before a section is selected. Set a unique Scroller `id` and distinct ScrollerSection IDs if you need to identify them in callbacks.

The retained `on:change`, `on:enter`, and `on:exit` events expose the same payload through `event.detail`. Existing output bindings (`count`, `index`, `sectionId`, `offset`, `progress`, and `visible`) remain available.

<!-- prettier-ignore -->
```svelte
<script>
  import { Scroller, ScrollerSection, Container } from "@onsvisual/svelte-components";

  const colors = ["#ddd", "#777", "#222"];
  let backgroundColor = $state(colors[0]);

  function updateScroller(detail) {
    backgroundColor = colors[detail.index ?? 0];
  }
</script>

<Scroller onChange={updateScroller} id="example-scroller">
  {#snippet background()}
    <Container width="full" height="full" background={backgroundColor} />
  {/snippet}
  {#snippet foreground()}
    <ScrollerSection id="first-section">
      <p>When this caption is visible, the background is light grey.</p>
    </ScrollerSection>
    <ScrollerSection id="second-section">
      <p>When this caption is visible, the background is dark grey.</p>
    </ScrollerSection>
    <ScrollerSection id="third-section">
      <p>When this caption is visible, the background is black.</p>
    </ScrollerSection>
  {/snippet}
</Scroller>
```

`Container` is optional; it provides a convenient way to size the background. Replace it with your own background components inside the snippet. Set `splitscreen={true}` on Scroller to show captions on the left and the background on the right on larger screens.
