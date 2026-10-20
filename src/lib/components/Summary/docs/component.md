A summary table for selected variables etc.

Based on this [ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/summary).

In Svelte 5, `onChange` receives `{ item }` for the selected summary row. The dispatched `change` event remains supported with the same object on `event.detail`.

<!-- prettier-ignore -->
```html
<script>
  import { Summary } from "@onsvisual/svelte-components";

  let items = [
    { key: "First item", value: "Value of first item" },
    { key: "Second item", value: "Value of second item (that can be changed)", href: "#" }
  ];
</script>

<Summary {items}/>
```
