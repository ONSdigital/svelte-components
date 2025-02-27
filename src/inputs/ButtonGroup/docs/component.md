Radio inputs dressed up as a button group.

<!-- prettier-ignore -->
```html
<ButtonGroup name="primary" legend="Choose an option">
      <Button value="1" label="Option 1" />
      <Button value="2" label="Option 2" />
      <Button value="3" label="Option 3" />
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
