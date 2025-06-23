A wrapper component that offers a simplified way to use charts with sensible preset defaults.

The config for this component can either be defined via `type`, `data` and `options` props, or via a single comboned `section` object. The latter use case is optimised for robo-journalism projects (see second example below).

Note: This component is part of the **@onsvisual/svelte-charts** library. See [more examples here](https://onsvisual.github.io/svelte-charts/).

<!-- prettier-ignore -->
```html
<script>
  import { Chart } from "@onsvisual/svelte-charts";

  const data = [
    {"x": 5315, "y": "Portsmouth"},
    {"x": 5070, "y": "Southampton"},
    {"x": 4596, "y": "Slough"},
    {"x": 3969, "y": "Reading"},
    {"x": 3522, "y": "Brighton and Hove"}
  ];
  const options = {
    "id": "chart-density",
    "title": "Densest local authorities in the South East, 2020",
    "footer": "Source: Office for National Statistics",
    "padding-left": "120"
  };
</script>

<Chart
  type="bar"
  data="{data}"
  options="{options}"/>
```
