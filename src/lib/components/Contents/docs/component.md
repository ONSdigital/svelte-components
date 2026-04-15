Displays a table of contents based on an array of links. Can be used for in-page navigation, or for navigation between sibling pages.

Based on [this ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/table-of-contents).

<!-- prettier-ignore -->
```html
<script>
  import { Contents } from "@onsvisual/svelte-components";
</script>

<Contents links="{[
  { label: 'Overview' },
  { label: 'Who should take part and why', href: '#0' },
  { label: 'How your information is used', href: '#0' },
  { label: 'The 2019 Census Rehearsal', href: '#0' },
  { label: 'Online census', href: '#0' },
]}" />
```
