<script>
  import { getContext } from "svelte";
  const activeModalId = getContext("activeModalId");

  const showHelpModals = getContext("showHelpModals");
  export let id = "";
</script>

{#if $activeModalId === id && !$showHelpModals}
  <div class="tool-control" role="tabpanel" aria-labelledby="button-{id}" id="panel-{id}">
    <slot />
  </div>
{/if}

<style>
  .tool-control {
    max-width: 371px;
    padding: 8px;
  }
</style>
