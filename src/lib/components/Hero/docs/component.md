A hero/title block suitable for a standard pages, with optional metadata block.

Svelte 5 uses `before` and `after` snippets in place of those named slots. Ordinary child markup remains supported through `children`. Title, introduction, metadata and theme inputs update reactively.

Based on this [ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/hero).

<!-- prettier-ignore -->
```html
<script>
  import { Hero } from "@onsvisual/svelte-components";
</script>

<Hero title="Page title" lede="A description of the page">
  {optional_additonal_content}
</Hero>
```
