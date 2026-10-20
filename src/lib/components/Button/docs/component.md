A button/link component that can be styled in various ways. It will render as an `<a>` link if it has an `href` property defined.

## Svelte 5 callbacks

Use the `onClick` callback for a native `MouseEvent`. The dispatched `click` event remains available; its `detail` is that same `MouseEvent`.

```svelte
<Button onClick={(event) => console.log(event.type)}>Button text</Button>
```

Custom icon content formerly provided with the named `icon` slot can be passed as an `iconSlot` snippet:

```svelte
{#snippet customIcon()}
	<span aria-hidden="true">+</span>
{/snippet}

<Button iconSlot={customIcon}>Add item</Button>
```

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
