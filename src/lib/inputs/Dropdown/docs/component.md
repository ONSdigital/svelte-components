A standard `<select>` component with Svelte bindings and events.

<!-- prettier-ignore -->
```html
<script>
  import { Dropdown } from "@onsvisual/svelte-components";

  const values = [
    { id: "1", label: "one" },
    { id: "2", label: "two" },
    { id: "3", label: "three" },
  ];

  // Bind the <select> value to a variable (reactive)
  let value;

  // Define your own function on change
  const handleChange = (e) => console.log(e);
</script>

<Dropdown {options} bind:value on:change="{handleChange}" />
```
