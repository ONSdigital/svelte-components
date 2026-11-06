A component that displays a tooltip when the element it is wrapped around is hovered over or focused on.

In Svelte 5, nested child focus is handled through bubbling focus events. Changing placement, text or maximum width updates the tooltip; listeners and the Popper instance are disposed on replacement/unmount. The child content uses a `children` snippet, so ordinary markup remains supported.

<!-- prettier-ignore -->
```html
<script>
  import { Tooltip } from "@onsvisual/svelte-components";
</script>

<Tooltip text="Tooltip text">
  <!-- Child element -->
</Tooltip>
```
