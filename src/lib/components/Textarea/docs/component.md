A standard `<textarea>` element with Svelte bindings and events.

In Svelte 5, `onInput`, `onChange`, and `onBlur` callbacks receive `{ value, e }`, where `e` is the native event. The matching dispatched events remain supported with the same object on `event.detail`.

<!-- prettier-ignore -->
```html
<script>
  import { Textarea } from "@onsvisual/svelte-components";

  // Bind the <textarea> value to a variable (start it as null, not undefined)
  let value = $state(null);

  // Define your own function on change
  const handleChange = ({ value }) => console.log(value);
</script>

<Textarea bind:value onChange={handleChange} />
```
