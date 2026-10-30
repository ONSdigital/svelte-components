<span class="ons-warning">This component is experimental</span>

A component for presenting key facts and figures as a grid of "cards".

Note: This component is experimental. Its attributes and options are likely to change. The intention is to include a range of simple chart types.

Under Svelte 5, props update reactively without remounting. Numeric `0` is displayed, rather than treated as missing. Use `mode="number"` for a figure or `mode="sparkline"` with numeric `{ x, y }` data. Replacing the series updates its scales and endpoint labels; empty arrays display "No data available", and single-point or constant series remain valid. The existing `bar` mode is reserved and does not render a bar chart.

`caption` retains its existing HTML rendering behavior. Only supply trusted or sanitized content.

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
