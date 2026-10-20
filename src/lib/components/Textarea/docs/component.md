A standard `<textarea>` element with Svelte bindings and events.

In Svelte 5, `onInput`, `onChange`, and `onBlur` callbacks receive `{ value, e }`, where `e` is the native event. The matching dispatched events remain supported with the same object on `event.detail`.

<!-- prettier-ignore -->
```html
<script>
  import { Input } from "@onsvisual/svelte-components";

  // Bind the <input> value to a variable (reactive)
  let value;

  // Define your own function on change
  const handleChange = (e) => console.log(e);
</script>

<Input bind:value on:change="{handleChange}" />
```
