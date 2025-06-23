A button/link component that can be styled in various ways. It will render as an `<a>` link if it has an `href` property defined.

<!-- prettier-ignore -->
```html
<script>
  import { Button } from "@onsvisual/svelte-components";

  // Define your own function on click
  const handleClick = (e) => console.log(e);
</script>

<!-- Standard button with on:click function -->
<Button on:click="{handleClick}">Button text</Button>

<!-- Button-styled link with href -->
<Button href="#">Link text</Button>
```
