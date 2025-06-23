A checkbox element with various styling and labelling options. Its "checked" attribute can be bound to a Svelte boolean (true/false) variable.

Based on [this ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/checkboxes).

<!-- prettier-ignore -->
```html
<script>
  import { Checkbox } from "@onsvisual/svelte-components";

  let checked = false;
</script>

<Checkbox id="checkbox" label="Select this" bind:checked />
```
