A header component with compact mode and theming options.

In Svelte 5, replace the named `before` and `after` slots with snippets of the same names. Navigation handlers are released when the header unmounts.

```svelte
<Header>
	{#snippet before()}<p>Before the header</p>{/snippet}
	{#snippet after()}<p>After the header</p>{/snippet}
</Header>
```

<!-- prettier-ignore -->
```html
<script>
  import { Header } from "@onsvisual/svelte-components";
</script>

<Header />
<!-- page body -->
```
