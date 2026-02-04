Display content and links as cards. Can be used in combination with the `<Grid>` component to combine multiple cards.

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

## Examples

### Cards with links

<!-- prettier-ignore -->
```html
<script>
  import { Cards, Card } from "@onsvisual/svelte-components";
</script>

<Cards>
  <Card title="Card one" href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
  <Card title="Card two" href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
  <Card title="Card three" href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
</Cards>
```

### Cards with images

<!-- prettier-ignore -->
```html
<script>
  import { Cards, Card } from "@onsvisual/svelte-components";
</script>

<Cards>
  <Card
    title="Card one"
    href="#"
    image="https://service-manual.ons.gov.uk/img/small/placeholder-card.png">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </Card>
  <Card
    title="Card two"
    href="#"
    image="https://service-manual.ons.gov.uk/img/small/placeholder-card.png">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </Card>
  <Card
    title="Card three"
    href="#"
    image="https://service-manual.ons.gov.uk/img/small/placeholder-card.png">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </Card>
</Cards>
```

### Cards with spans

<!-- prettier-ignore -->
```html
<script>
  import { Cards, Card } from "@onsvisual/svelte-components";
</script>

<Cards>
  <Card title="Card one" rowspan={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
  <Card title="Card two" colspan={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
  <Card title="Card three">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
</Cards>
```
