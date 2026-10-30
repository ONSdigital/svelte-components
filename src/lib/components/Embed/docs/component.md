A container for content designed to appear within an `<iframe>`. The component does two things:

1. Overrides padding, so that content can fill the full width of its iframe.
2. Initialises a Pym.js child for the iframe, so that it can communicate its height with its parent page.

`onLoad(detail)` receives `{ href, parentUrl, pymChild }`. The retained `on:load` event exposes that same object through `event.detail`. Use `bind:pymChild` to access the child instance. Set `polling={false}` to disable height polling; the polling timer and Pym child are disposed when the component unmounts.

<!-- prettier-ignore -->
```html
<script>
  import { Embed } from "@onsvisual/svelte-components";
</script>

<Embed>
  {child_components}
</Embed>
```
