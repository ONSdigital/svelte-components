An extended alternative to an HTML `<select>` component (see Dropdown), with auto-complete and the ability to have a custom **loadOptions** function.

This component is a Svelte wrapper for the GOV.UK [accessible-autocomplete](https://github.com/alphagov/accessible-autocomplete).

(Note: This component is not fully compatible with a previous version of the same component based on svelte-select.)

## Migration guide (svelte-select -> AccessibleSelect)

The previous Select component was built on svelte-select and supported a different API. Use this guide to update existing usage.

### Component name and import

Replace the old component with `AccessibleSelect`.

<!-- prettier-ignore -->
```diff
- import { Select } from "@onsvisual/svelte-components";
+ import { AccessibleSelect } from "@onsvisual/svelte-components";

- <Select {options} bind:value />
+ <AccessibleSelect {options} bind:value />
```

### Options and labels

- Options are still objects, but the default label field is `label`.
- If you used a different field (for example, `name`), pass `labelKey`.

<!-- prettier-ignore -->
```diff
- const options = [{ id: "1", name: "one" }];
- <Select {options} bind:value />
+ const options = [{ id: "1", name: "one" }];
+ <AccessibleSelect {options} labelKey="name" bind:value />
```

### Grouped options

If you used grouped options, provide `groupKey` to display the group name in results.

<!-- prettier-ignore -->
```html
<AccessibleSelect {options} groupKey="group" bind:value />
```

### Events

- The new component dispatches `change` with the selected option object.
- There is also a `clear` event when the selection is cleared.

<!-- prettier-ignore -->
```html
<AccessibleSelect
  {options}
  bind:value
  on:change={(e) => console.log(e.detail)}
  on:clear={() => console.log("cleared")}
/>
```

### Search mode vs default mode

The previous component behaved like a searchable select. The new component supports two modes:

- `mode="default"` shows all options on focus.
- `mode="search"` behaves like a typeahead and clears on select.

<!-- prettier-ignore -->
```html
<AccessibleSelect mode="search" {options} bind:value />
```

### Clearing values

- Use `clearable` to show the clear button when a value is selected.
- Use `autoClear` to clear the value after selecting (default in search mode).

<!-- prettier-ignore -->
```html
<AccessibleSelect clearable autoClear={false} {options} bind:value />
```

### Custom filtering

If you previously used a custom filter function, map it to `loadOptions`.

<!-- prettier-ignore -->
```html
<AccessibleSelect
  {options}
  loadOptions={(query, populateResults) => {
    const filtered = options.filter((opt) =>
      opt.label.toLowerCase().startsWith(query.toLowerCase())
    );
    populateResults(filtered);
  }}
/>
```

<!-- prettier-ignore -->
```html
<script>
  import { AccessibleSelect } from "@onsvisual/svelte-components";

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

<AccessibleSelect {options} bind:value on:change="{handleChange}" />
```
