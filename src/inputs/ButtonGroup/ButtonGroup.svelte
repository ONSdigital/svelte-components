<script>
  import { setContext } from "svelte";
  import { writable } from "svelte/store";

  export let name = "";
  export let legend = "";
  export let value;
  export let visuallyHideLegend = false;

  // create the store
  const selectedValue = writable(value);

  // Sync the store with the prop on mount and when the prop changes
  $: selectedValue.set(value);

  //  When store changes and update prop

  $: if ($selectedValue !== value) {
    value = $selectedValue;
  }

  // Create a context to share with child Button components
  setContext("buttonGroup", {
    groupName: name,
    selectedValue,
  });
</script>

<fieldset class="button-group">
  {#if legend}
    <legend class:ons-u-vh="{visuallyHideLegend}">{legend}</legend>
  {/if}
  <div class="buttons">
    <slot />
  </div>
</fieldset>

<style>
  .button-group {
    display: inline-block;
  }

  legend {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .buttons {
    display: flex;
    gap: 8px;
    background: #f5f5f6;
    padding: 4px;
    border-radius: 8px;
    justify-content: space-between;
  }
</style>
