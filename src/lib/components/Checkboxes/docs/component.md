A component for defining a group of [checkbox](/docs/inputs-checkbox--docs) elements, whose checked values can be bound to Svelte variables, or grouped in an array.

Based on [this ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/checkboxes). (Note: In some use cases, it may be preferable to use raw HTML `<input type="checkbox">` components and style these using CSS.)

<!-- prettier-ignore -->
```html
<script>
  import { Checkboxes } from "@onsvisual/svelte-components";

  let items = [
    { id: "ice-cream", label: "Ice cream", checked: true },
    { id: "sprinkles", label: "Sprinkles", description: "Highly recommended!", checked: false },
    { id: "disabled", label: "Disabled option", checked: false, disabled: true },
  ];

  let selected = []; // An array of the selected items
</script>

<Checkboxes {items} bind:value={selected} label="Select items">
```
