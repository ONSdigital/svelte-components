In this example, the radios are defined explicitly rather than via an array.

<!-- prettier-ignore -->
```html
<script>
  import { Radio, Radios } from "@onsvisual/svelte-components";
</script>

<Radios label="Select one">
  <Radio
    groupId="radios"
    id="house"
    label="House or bungalow"
    description="Includes terraced, semi-detached and detached homes."
  />
  <Radio groupId="radios" id="flat" label="Flat, maisonette or apartment" />
  <Radio groupId="radios" id="mobile" label="Caravan or other mobile or temporary structure" />
</Radios>
```
