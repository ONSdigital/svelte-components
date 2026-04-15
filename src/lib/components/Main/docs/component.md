This component creates a styled `<main>` element to wrap the primary contents of a page (generally everything between the page header and footer).

This component is useful for screen readers to identify the primary content of the page. The standard header component also contains a visually hidden "Skip to content" link that will bring users to it.

<!-- prettier-ignore -->
```html
<script>
  import { Main } from "@onsvisual/svelte-components";
</script>

<!-- Header goes here -->
<Main>
  {child_components}
</Main>
<!-- Footer goes here -->
```
