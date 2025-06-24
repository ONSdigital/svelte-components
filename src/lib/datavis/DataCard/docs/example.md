For sparklines, an array of data needs to be passed into the component.

<!-- prettier-ignore -->
```html
<script>
  import { DataCard } from "@onsvisual/svelte-components";

  const data = [
    { x: 1979, y: 7.19 },
    { x: 1980, y: 7.83 },
    { x: 1981, y: 7.24 },
    etc...
  ];
</script>

<DataCard
  title="Example sparkline",
  subtitle="Value in £ million"
  mode="sparkline"
  data={data}
  value="down 2.47",
  caption="Change from 1979 to 2016",
  source="Source: ONS"
/>
```
