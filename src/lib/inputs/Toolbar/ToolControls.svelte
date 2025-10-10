<script>
  import { getContext } from "svelte";
  const activeModalId = getContext("activeModalId");
</script>

{#if $activeModalId}
  <slot />
{/if}
