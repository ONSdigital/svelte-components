Display content and links as cards. Can be used in combination with the `<Grid>` component to combine multiple cards.

In Svelte 5, ordinary children use the `children` snippet. Replace the linked card's named `image` and `title` slots with `imageContent` and `titleContent` snippets. The existing string props remain fallback content; snippet overrides retain their existing linked-card scope.

<!-- prettier-ignore -->
```html
<script>
  import { Grid, Card } from "@onsvisual/svelte-components";
</script>

<Grid>
  <Card title="Card one">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
  <Card title="Card two">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
  <Card title="Card three">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
</Grid>
```
