<span class="ons-warning">This component is experimental</span>

A component for presenting key facts and figures as a grid of "cards".

Note: This component is experimental. Its attributes and options are likely to change. The intention is to include a range of simple chart types.

<!-- prettier-ignore -->
```html
<script>
  import { DataCard } from "@onsvisual/svelte-components";
</script>

<DataCard
  title="Consumer Price Index (CPI)"
  subtitle="Consumer Price Index (CPI)"
  value="up 2.5%"
  caption="in 12 months to December 2024"
  source="Source: ONS"
/>
```

## Examples

### Sparkline mode

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
