<script>
  import { setContext } from "svelte";
  import { writable } from "svelte/store";

  export let name = "";
  export let legend = "";
  export let value;

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
    <legend>{legend}</legend>
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
    flex-wrap: wrap;
    gap: 0.5rem;
  }
</style>
