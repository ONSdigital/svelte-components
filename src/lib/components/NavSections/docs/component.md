Use this component to allow users to quickly jump to named sections within a long page of content.

As the user scrolls down the page, a table of contents will remain visible on the left of the viewport and will highlight the subheading of the section currently in view.

<!-- prettier-ignore -->
```html
<script>
  import { NavSections, NavSection } from "@onsvisual/svelte-components";
</script>

<NavSections>
  <NavSection title="Section one">
    <p>Contents of first section.</p>
  </NavSection>
  <NavSection title="Subsection A" subsection>
    <p>Contents of subsection.</p>
  </NavSection>
  <NavSection title="Subsection B" subsection>
    <p>Contents of subsection.</p>
  </NavSection>
  <NavSection title="Section two">
    <p>Contents of third section.</p>
  </NavSection>
</NavSections>
```
