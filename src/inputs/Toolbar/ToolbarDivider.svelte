<script lang="ts">
  //   import { getContext } from "svelte";
  //   import { TOOLBAR_CONTEXT_KEY } from "./toolbar-context.js";

  export let classes: string = "";

  // Get orientation from context, with fallback
  //   const context = getContext(TOOLBAR_CONTEXT_KEY) ?? { orientation: "horizontal" };
  //   export let orientation: "horizontal" | "vertical" = context.orientation;
  export let orientation: "horizontal" | "vertical" = "horizontal";
</script>

<div class="{`toolbar-divider ${orientation} ${classes}`}" aria-hidden="true"></div>

<style>
  .toolbar-divider {
    background-color: #ccc;
  }

  .toolbar-divider.horizontal {
    width: 1px;
    height: 1.5rem;
    margin: 0 0.5rem;
  }

  .toolbar-divider.vertical {
    width: 100%;
    height: 1px;
    margin: 0.5rem 0;
  }
</style>
