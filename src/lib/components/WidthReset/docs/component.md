A simple wrapper component that can be used within standard columns on ONS website pages to break out to the full page width. Can be used, for example, to create a Svelte scrollytelling section within an article.

The `mode` prop sets which page layout to break out of. The default, `"legacy"`, targets the article column of the older ONS website template (inside `#main > .wrapper > .col-wrap`). Other modes may be added as page templates change.

_Note: The component preview below will be incorrectly offset as it does not sit within a regular ONS page._

<!-- prettier-ignore -->
```html
<script>
  import { WidthReset } from "@onsvisual/svelte-components";
</script>

<WidthReset mode="legacy">
  {child_components}
</WidthReset>
```
