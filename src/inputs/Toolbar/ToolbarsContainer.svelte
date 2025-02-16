<script lang="ts">
  import { setContext } from "svelte";
  import { writable } from "svelte/store";

  // Initialize a store for button IDs
  const buttonIds = writable([]);
  setContext("buttonIds", {
    register: (id: string) => {
      buttonIds.update((ids) => [...ids, id]);
    },
    unregister: (id: string) => {
      buttonIds.update((ids) => ids.filter((btnId) => btnId !== id));
    },
    buttonIds,
  });

  const activeModalStore = writable(null); // Tracks the ID of the active modal
  setContext("activeModalId", activeModalStore);
</script>

<div class="multi-toolbar-container">
  <slot />
</div>

<style>
  .multi-toolbar-container {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: space-between;
  }
</style>
