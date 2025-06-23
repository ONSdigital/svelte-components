A wrapper component that uses IntersectionObserver to monitor whether the elements in contains are within the current viewport.

This component can be useful for triggering actions such as lazy loading of data/images or scroll-driven interactions.

This component has **enter** and **exit** events, triggered when it enters or leaves the viewport. It also has a **visible** binding which has a value of **true** when it is within the viewport.

<!-- prettier-ignore -->
```html
<script>
  import { Observe } from "@onsvisual/svelte-components";

  const colors = ["yellow", "green", "blue", "purple", "red", "orange"];
</script>

{#each colors as color}
<Observe
  on:enter={() => console.log(`${color} entered`)}
  on:exit={() => console.log(`${color} exited`)}>
  <div class="section" style:background={color} style:height="400px"/>
</Observe>
{/each}
```
