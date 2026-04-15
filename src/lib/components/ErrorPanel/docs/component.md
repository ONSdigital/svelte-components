Use this component to show validation errors by wrapping form inputs and fieldsets.

Based on [this ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/error).

<!-- prettier-ignore -->
```html
<script>
  import { ErrorPanel, Input } from "@onsvisual/svelte-components";
</script>

<ErrorPanel message="You enterered the wrong text">
  <Input/>
</ErrorPanel>
```
