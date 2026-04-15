In this example, the child textboxes are defined explicitly.

<!-- prettier-ignore -->
```html
<script>
  import { Checkbox, Checkboxes } from "@onsvisual/svelte-components";

  let selected = []; // An array of the selected items
</script>

<Checkboxes label="Select items">
  <Checkbox id="ice-cream" label="Ice cream" bind:group={selected} />
  <Checkbox id="sprinkles" label="Sprinkles" description="Highly recommended!" bind:group={selected} />
  <Checkbox id="disabled" label="Disabled option" bind:group={selected} />
</Checkboxes>
```
