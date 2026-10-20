An accordion component.

In Svelte 5, `onToggle` receives `{ id, open, el }` for a toggled panel. The dispatched `toggle` event remains available with the same object on `event.detail`.

Based on [this ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/accordion).

<!-- prettier-ignore -->
```html
<script>
  import { Accordion, AccordionItem } from "@onsvisual/svelte-components";
</script>

<Accordion>
  <AccordionItem title="First item">
    <p>Contents of first item.</p>
  </AccordionItem>
  <AccordionItem title="Second item">
    <p>Contents of second item.</p>
  </AccordionItem>
</Accordion>
```
