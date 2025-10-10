<script lang="ts">
  import { getContext } from "svelte";
  import { subscribe } from "svelte/store";

  export let classes: string = "";

  // Get the orientation store from context
  const orientationStore = getContext("orientation");

  // Subscribe to the store to get its value
  let orientation;
  orientationStore.subscribe((value) => {
    orientation = value;
  });
</script>

<div class="{`toolbar-divider ${orientation} ${classes}`}" aria-hidden="true"></div>

<style>
  .toolbar-divider {
    background-color: #ccc;
  }

  .toolbar-divider.horizontal {
    width: 1px;
  }

  .toolbar-divider.vertical {
    width: 100%;
    height: 1px;
    margin: 0.5rem 0;
  }
</style>
