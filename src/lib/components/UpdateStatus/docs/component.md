Shows a short status message for recently updated content, or falls back to a standard "Last updated" label.

Useful for dashboard cards and article metadata where the recency logic is handled outside the component.

<!-- prettier-ignore -->
```html
<script>
  import { UpdateStatus } from "@onsvisual/svelte-components";
</script>

<UpdateStatus recent />
<UpdateStatus date="1 September 2026" />
```
