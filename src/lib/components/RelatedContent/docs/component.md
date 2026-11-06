Dispay related content for a page.

When `related` is omitted, the default section follows changes to `title` and `links`. Ordinary children remain supported through the Svelte 5 `children` snippet.

Based on this [ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/related-content).

<!-- prettier-ignore -->
```html
<script>
  import { RelatedContent } from "@onsvisual/svelte-components";
</script>

<RelatedContent
  links={[
    { title: "How we will contact or visit you", href: "#0" },
    { title: "Media enquiries", href: "#0" }
  ]}/>
```
