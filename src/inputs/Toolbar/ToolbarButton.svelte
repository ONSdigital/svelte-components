<script lang="ts">
  import { createEventDispatcher, getContext } from "svelte";
  import Icon from "./Icon.svelte";
  import HelpModal from "./HelpModal.svelte";

  //   import { TOOLBAR_CONTEXT_KEY } from "./toolbar-context.ts";

  // Props for the ToolbarButton
  export let icon: string = "";
  export let label: string = "";
  export let disabled: boolean = false;
  export let classes: string = "";
  export let helpText: string | null = null;

  // Get orientation from context, with fallback
  //   const context = getContext(TOOLBAR_CONTEXT_KEY) ?? { orientation: "horizontal" };
  //   export let orientation: "horizontal" | "vertical" = context.orientation;

  // State for help modal
  export let showHelp: boolean = false;

  const dispatch = createEventDispatcher();

  let buttonElement: HTMLElement;

  function handleClick() {
    if (!disabled) {
      dispatch("click");
      // Toggle help modal if help text is provided
      if (helpText) {
        showHelp = !showHelp;
      }
    }
  }

  function closeHelp() {
    showHelp = false;
  }
</script>

<div class="toolbar-button-wrapper">
  <button
    type="button"
    aria-label="{label}"
    class="{`toolbar-button ${disabled ? 'disabled' : ''} ${classes}`}"
    on:click="{handleClick}"
    disabled="{disabled}"
  >
    {#if icon}
      <Icon type="{icon}" />
    {:else}
      {label}
    {/if}
  </button>

  {#if showHelp && helpText}
    <HelpModal triggerElement="{buttonElement}" onClose="{closeHelp}">
      <p>{helpText}</p>
    </HelpModal>
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

  .help-modal {
    position: relative;
    background: white;
    border: 1px solid #ccc;
    padding: 1rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 10;
  }
</style>
