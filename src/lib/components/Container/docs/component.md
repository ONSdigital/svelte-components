A container to set the width and minimum height of a block of content.

Note that the this component includes the `<Theme>` component internally, allowing colour themes to be applied directly without adding an additional wrapper around it.

<!-- prettier-ignore -->
```html
<script>
  import { Container } from "@onsvisual/svelte-components";
</script>

<Container width="{narrow|medium|wide|wider|full}" theme="light">{child_components}</Container>
```
