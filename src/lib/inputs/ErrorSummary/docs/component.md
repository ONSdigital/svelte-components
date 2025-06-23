A panel to summarise errors on a form/input. The errors can be defined in an `items` array, or as plain text/html within the component.

Based on [this ONS Design System pattern](https://service-manual.ons.gov.uk/design-system/patterns/error-status-pages).

<!-- prettier-ignore -->
```html
<script>
  import { ErrorSummary } from "@onsvisual/svelte-components";

  const items = [
    { label: "First issue description.", href: "#0" },
    { label: "Second issue description." },
  ];
</script>

<ErrorSummary title="There are 2 problems with your answer" {items} />
```
