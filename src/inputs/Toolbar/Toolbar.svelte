<script>
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  // import { TOOLBAR_CONTEXT_KEY } from "./toolbar-context.js";

  /**
   * Additional classes for the button
   * @type {string}
   */
  export let classes = "";
  /**
   * aria label for button
   * @type {string}
   */
  export let ariaLabel = "";
  /**
   * Orientation of the toolbar
   * @type {'horizontal' | 'vertical'}
   */
  export let orientation = "horizontal";

  // Set context for child components
  const orientationStore = writable(orientation);
  $: setContext("orientation", orientationStore);
</script>

<!-- Toolbar container -->
<div
  role="toolbar"
  aria-label="{ariaLabel}"
  class="{`toolbar ${orientation === 'vertical' ? 'flex-col' : 'flex'} ${classes}`}"
>
  <slot />
</div>

<style>
  .toolbar {
    display: flex;
    align-items: center;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    padding: 8px;
    justify-content: flex-start;
    align-content: flex-start;
    flex-wrap: nowrap;
    width: auto;
    max-width: fit-content;
  }

  .flex-col {
    flex-direction: column;
  }
</style>
