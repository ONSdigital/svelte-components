<script lang="ts">
  import { onMount, createEventDispatcher, getContext } from "svelte";
  import Icon from "./Icon.svelte";
  import HelpModal from "./HelpModal.svelte";

  // Props for the ToolbarButton
  export let id: string = "";
  export let icon: string = "";
  export let label: string = "";
  export let disabled: boolean = false;
  export let classes: string = "";
  export let helpText: string | null = null;

  // // State for help modal
  // export let showHelp: boolean = false;

  const dispatch = createEventDispatcher();

  let buttonElement: HTMLElement;

  const activeModalId = getContext("activeModalId");
  const modalIds = getContext("buttonIds");

  // Reactive store subscription
  $: isActive = $activeModalId === id;

  // Subscribe to the store to determine if this modal is active
  function handleClick() {
    if (!disabled) {
      dispatch("click");
      activeModalId.set(isActive ? null : id); // Toggle the modal
    }
  }

  // function handleClick() {
  //   if (!disabled) {
  //     dispatch("click");
  //     // Toggle help modal if help text is provided
  //     // if (helpText) {
  //     showHelp = !showHelp;
  //     // }
  //   }
  // }

  // function closeHelp() {
  //   showHelp = false;
  // }

  // Add this ToolbarButton's ID to the modal list on mount
  onMount(() => {
    modalIds.update((ids) => [...ids, id]);
    return () => {
      modalIds.update((ids) => ids.filter((existingId) => existingId !== id));
    };
  });
</script>

<div class="toolbar-button-wrapper">
  <button
    type="button"
    aria-label="{label}"
    class="{`toolbar-button ${disabled ? 'disabled' : ''}  ${classes}`}"
    on:click="{handleClick}"
    disabled="{disabled}"
    bind:this="{buttonElement}"
  >
    {#if icon}
      <Icon type="{icon}" selected="{isActive ? true : false}" />
    {:else}
      {label}
    {/if}
  </button>

  <!-- {#if showHelp && helpText}
    <HelpModal triggerElement="{buttonElement}" onClose="{closeHelp}">
      <p>{helpText}</p>
    </HelpModal>
  {:else if showHelp && !helpText}
    <HelpModal triggerElement="{buttonElement}" onClose="{closeHelp}">
      <slot />
    </HelpModal>
  {/if} -->

  {#if isActive}
    {#if helpText}
      <HelpModal triggerElement="{buttonElement}" onClose="{() => activeModalId.set(null)}">
        <p>{helpText}</p>
      </HelpModal>
    {:else if !helpText}
      <HelpModal triggerElement="{buttonElement}" onClose="{() => activeModalId.set(null)}">
        <slot />
      </HelpModal>
    {/if}
  {/if}
</div>

<style>
  .toolbar-button-wrapper {
    position: relative;
  }
  .toolbar-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    background: none;
    border: none;
    cursor: pointer;
    flex-shrink: 0;
    flex-grow: 0;
  }

  .toolbar-button.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>
