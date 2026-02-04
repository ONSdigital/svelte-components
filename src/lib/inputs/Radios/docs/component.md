A component for defining a group of radio inputs, where the selected item id can be bound to a Svelte variable.

Based on [this ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/radios). (Note: In some use cases, it may be preferable to use raw HTML `<input type="radio">` components and style these using CSS.)

<!-- prettier-ignore -->
```html
<script>
  import { Radios } from "@onsvisual/svelte-components";

  let items = [
    {
      id: "house",
      label: "House or bungalow",
      description: "Includes terraced, semi-detached and detached homes.",
    },
    { id: "flat", label: "Flat, maisonette or apartment" },
    { id: "mobile", label: "Caravan or other mobile or temporary structure" },
  ];

  let selected; // A binding for the selected item
</script>

<Radios {items} bind:value={selected} label="Select one">
```

## Examples

### Individually defined radios

In this example, the radios are defined explicitly rather than via an array.

<!-- prettier-ignore -->
```html
<script>
  import { Radio, Radios } from "@onsvisual/svelte-components";

  let selected; // A binding for the selected item ID
</script>

<Radios label="Select one">
  <Radio
    groupId="radios"
    id="house"
    label="House or bungalow"
    description="Includes terraced, semi-detached and detached homes."
  />
  <Radio groupId="radios" id="flat" label="Flat, maisonette or apartment" />
  <Radio groupId="radios" id="mobile" label="Caravan or other mobile or temporary structure" />
</Radios>
```
