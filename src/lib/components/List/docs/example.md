In this example, the list items are defined in an array. The items can include HTML tags.

<!-- prettier-ignore -->
```html
<script>
  import { List, Li } from "@onsvisual/svelte-components";

  const items = ["<strong>First</strong> list item", "Second list item", "Third list item"];
</script>

<List items="{items}"/>
```
