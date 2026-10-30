A table component with various customisation options.

Svelte 5 props are reactive: replacing `data` refreshes the rows, and omitted `columns` are inferred from the current first row, including when an initially empty dataset is populated. Sorting uses a copy of the input array and retains the selected column/direction across data updates. Changing column metadata updates labels and formatting; only the active sort column has an ascending/descending `aria-sort` value.

Numeric columns support `dp` or a custom `formatter(value)`. Zero is displayed; missing values use a dash. Existing compact, responsive, row-hover and fixed-height/sticky-header options remain available. Table has no component-event API to replace; its native sort buttons remain keyboard-operable.

Cell values retain the existing HTML rendering API. Only supply trusted or sanitized HTML; the component does not sanitize it.

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
    { key: "col2", label: "Numeric column", numeric: true},
  ];
</script>

<Table {data} {columns} />
```
