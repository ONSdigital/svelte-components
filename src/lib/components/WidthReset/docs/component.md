A simple wrapper component that can be used within standard columns on ONS website pages to break out to the full page width. Can be used, for example, to create a Svelte scrollytelling section within an article.

_Note: The component preview below will be incorrectly offset as it does not sit within a regular ONS page._

<!-- prettier-ignore -->
```html
<script>
  import { WidthReset } from "@onsvisual/svelte-components";
</script>

<WidthReset>
  {child components}
</WidthReset>
```
