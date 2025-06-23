Use this layou component to allow users to quickly jump to sections of a long page of content.

As the user scrolls down the page, the table of contents will remain accessible at the top of the viewport and will highlight the subheading of the section in view.

Note: These examples will not preview correctly in the iframes on this page. You can select the examples from the menu instead.

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
