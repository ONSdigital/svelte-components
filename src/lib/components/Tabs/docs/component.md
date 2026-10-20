Use tabs to help users navigate between short sections of related content within a single page, showing one section at a time.

In Svelte 5, the selected tab remains bindable with `bind:selected`. The `onChange` callback receives `{ id }`; the dispatched `change` event remains available with that object on `event.detail`.

Based on [this ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/tabs).

<!-- prettier-ignore -->
```html
<script>
  import { Tab, Tabs } from "@onsvisual/svelte-components";
</script>

<Tabs>
  <Tab title="Tab one">Contents of tab panel one.</Tab>
  <Tab title="Tab two">Contents of tab panel two.</Tab>
  <Tab title="Tab three">Contents of tab panel three.</Tab>
</Tabs>
```
