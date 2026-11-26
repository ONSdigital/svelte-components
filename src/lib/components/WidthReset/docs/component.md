A simple wrapper component that can be used within a column on a page to break out to the full page width. Can be used, for example, to create a full-width scrollytelling section within an article on the ONS website.

The `mode` prop sets how the full width is worked out:

- `"default"` works in any column that is centred on the page, whatever its width. The component's direct parent must be centred, and its contents span the page width excluding the scrollbar.
- `"legacy"` targets the article column of the older ONS website template (inside `#main > .wrapper > .col-wrap`), using that template's fixed column widths and breakpoints.

In `"legacy"` mode, any `Container` (or other `.ons-page__container.ons-container` element) inside the component is capped to the width of the legacy `.wrapper` (752px from 768px, 944px from 992px, plus the container's own padding), so its contents line up with the article text above and below. Backgrounds still span the full page width. Containers with `width="full"` are not affected.

Either mode measures the page width from a container element (`<html>` for `"default"`, `#main` for `"legacy"`). An element between that and the component with its own CSS `container-type` will be measured instead, giving the wrong width.

_Note: The `"legacy"` preview below will be incorrectly offset as it does not sit within a regular ONS page. The `"default"` preview will only display correctly when opened as a full-page preview from the left menu._

<!-- prettier-ignore -->
```html
<script>
  import { WidthReset } from "@onsvisual/svelte-components";
</script>

<WidthReset mode="legacy">
  {child_components}
</WidthReset>
```
