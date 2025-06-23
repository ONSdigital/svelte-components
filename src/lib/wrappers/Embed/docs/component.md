A container for content designed to appear within an `<iframe>`. The component does two things:

1. Overrides padding, so that content can fill the full width of its iframe.
2. Initialises a Pym.js child for the iframe, so that it can communicate its height with its parent page.

<!-- prettier-ignore -->
```html
<script>
  import { Embed } from "@onsvisual/svelte-components";
</script>

<Embed>
  {child_components}
</Embed>
```
