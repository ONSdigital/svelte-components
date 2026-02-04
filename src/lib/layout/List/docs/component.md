A list component with modes for numbered, bulleted, dashed and bare lists. There is also an option to define list items as an array.

<!-- prettier-ignore -->
```html
<script>
  import { List, Li } from "@onsvisual/svelte-components";
</script>

<List>
  <Li>First list item</Li>
  <Li>Second list item</Li>
  <Li>Third list item</Li>
</List>
```

## Examples

### Items defined in an array

In this example, the list items are defined in an array. The items can include HTML tags.

<!-- prettier-ignore -->
```html
<script>
  import { List, Li } from "@onsvisual/svelte-components";

  const items = ["<strong>First</strong> list item", "Second list item", "Third list item"];
</script>

<List items="{items}"/>
```
