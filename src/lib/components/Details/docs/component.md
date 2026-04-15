An expandable `<details>` ("twisty") component, which can be open or closed by default.

This component is based on this [ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/details), but intentionally uses the vanilla HTML `<details>` component to ensure that its content can be found when searching the page.

<!-- prettier-ignore -->
```html
<script>
  import { Details } from "@onsvisual/svelte-components";
</script>

<Details title="Title of twisty">
  <p>Contents of twisty</p>
</Details>
```
