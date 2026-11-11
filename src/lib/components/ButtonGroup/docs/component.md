<span class="ons-warning">This component is experimental</span>

Radio inputs dressed up as a button group.

Items stack vertically on viewports below 740px and remain horizontal on larger screens.
Stacked items share the width of the widest label, including padding, rather than filling the page.
Space is reserved for bold selected labels so the group does not resize when the selection changes.
Set `stackOnMobile={false}` to keep a group horizontal at every screen size:

```svelte
<ButtonGroup name="horizontal" legend="Choose an option" stackOnMobile={false}>
	<ButtonGroupItem value="1" label="Option 1" />
	<ButtonGroupItem value="2" label="Option 2" />
</ButtonGroup>
```

<!-- prettier-ignore -->
```html
<ButtonGroup name="primary" legend="Choose an option">
      <ButtonGroupItem value="1" label="Option 1" />
      <ButtonGroupItem value="2" label="Option 2" />
      <ButtonGroupItem value="3" label="Option 3" />
</ButtonGroup>
```

To see what is selected, bind `value` to a variable e.g.

<!-- prettier-ignore -->
```html
let selectedValue;

<ButtonGroup name="primary" legend="Choose an option" bind:value="{selectedValue}">
...
</ButtonGroup>
```
