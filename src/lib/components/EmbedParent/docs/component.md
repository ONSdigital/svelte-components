Add responsive Pym.js iframes to a page. The child page `href` can be a relative or absolute path, or a full URL. When referencing another page within the same app, be sure to use SvelteKit's `resolve()` function to ensure that the path is correct wherever your app is deployed.

`onLoad(detail)` receives `{ href, id, title, pymParent }`. The retained `on:load` event exposes that same object through `event.detail`. Use `bind:pymParent` to access the parent instance, eg. to send/receive messages with the child page.

<!-- prettier-ignore -->
```html
<script>
  import { EmbedParent } from "@onsvisual/svelte-components";
</script>

<EmbedParent href="child_page_url" id="iframe" title="Accessible name" />
```
