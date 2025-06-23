A table component with various customisation options.

<!-- prettier-ignore -->
```html
<script>
  import { Table } from "@onsvisual/svelte-components";

  const data = [
    { col1: "Item one", col2: 10 },
    { col1: "Item two", col2: 20 },
    { col1: "Item three", col2: 30 },
  ];
  const columns = [
    { key: "col1", label: "Text column" },
    { key: "col2", label: "Numeric column", numeric: true, sortable: true },
  ];
</script>

<Table {data} {columns} />
```
