A standard `<select>` component with Svelte bindings and events.

In Svelte 5, `onChange`, `onInput`, and `onBlur` callbacks receive `{ value, e }`. The selected `value` may be an option object or a string, and the matching dispatched events remain available with the same object on `event.detail`.

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
