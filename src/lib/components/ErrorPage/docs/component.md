An error page component that will display generic error messages for "page not found" (404) or other errors.

The `page` input accepts a page-state object or a page store and follows reactive updates. Explicit `status` and `message` props override inferred page values. ErrorPage owns a main landmark; do not place it inside another `<main>`.

Based on [this ONS Design System pattern](https://service-manual.ons.gov.uk/design-system/patterns/error-status-pages).

<!-- prettier-ignore -->
```html
<script>
  import { page } from "$app/stores";
  import { ErrorPage } from "@onsvisual/svelte-components";
</script>

<ErrorPage page="{page}" />
```
