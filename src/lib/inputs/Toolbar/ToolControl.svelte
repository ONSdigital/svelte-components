<script>
  import { getContext } from "svelte";
  const activeModalId = getContext("activeModalId");
  const showHelpModals = getContext("showHelpModals");

  const currentModalId = $derived(activeModalId);
  const showHelp = $derived(showHelpModals);

  export let id = "";
</script>

{#if currentModalId === id && !showHelp}
  <div class="tool-control" role="tabpanel" aria-labelledby={`button-${id}`} id={`panel-${id}`}>
    <slot />
  </div>
{/if}

<style>
  .tool-control {
    max-width: 371px;
    padding: 8px;
  }
</style>
