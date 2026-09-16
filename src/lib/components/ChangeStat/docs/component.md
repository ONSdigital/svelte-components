Shows a short directional stat such as `7% lower`, `1.3pp higher`, or `69 (0.7%) fewer`.

The component separates **direction** from **tone**, so visual styling can reflect whether a change is good or bad without assuming that higher is always positive.

<!-- prettier-ignore -->
```html
<script>
  import { ChangeStat } from "@onsvisual/svelte-components";
</script>

<ChangeStat value="7%" direction="down" />
<ChangeStat value="1.3pp" direction="up" />
<ChangeStat value="69 (0.7%)" label="fewer" direction="down" tone="positive" />
```
