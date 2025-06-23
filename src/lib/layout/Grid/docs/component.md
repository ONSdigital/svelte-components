A media grid component, useful for images and small multiple charts. Setting `colwidth` to **full** allows for a single cell/image/chart with an optional caption.

<!-- prettier-ignore -->
```html
<script>
  import { Grid, GridCell } from "@onsvisual/svelte-components";
</script>

<Grid>
  <GridCell>{grid_cell_content}</GridCell>
  <GridCell>{grid_cell_content}</GridCell>
  <GridCell>{grid_cell_content}</GridCell>
</Grid>
```
