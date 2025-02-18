<script>
  import { getContext } from "svelte";
  const activeModalId = getContext("activeModalId");

  export let id = "";
</script>

{#if $activeModalId === id}
  <div class="tool-control" role="tabpanel" aria-labelledby="button-{id}" id="panel-{id}">
    <slot />
  </div>
{/if}

<style>
  .tool-control {
    max-width: 345px;
    padding: 8px;
  }
</style>
