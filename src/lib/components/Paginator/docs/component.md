A very simple next/previous page paginator.

Based on the simpler version of this [ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/pagination).

<!-- prettier-ignore -->
```html
<script>
  import { Paginator } from "@onsvisual/svelte-components";
</script>

<Paginator 
  pageCount={10},
  pageCurrent={2},
  nextHref="#3",
  prevHref="#1"/>
```
