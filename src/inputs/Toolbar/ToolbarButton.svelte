<script lang="ts">
  import { onMount, onDestroy, createEventDispatcher, getContext } from "svelte";
  import Icon from "./Icon.svelte";
  import HelpModal from "./HelpModal.svelte";
  import { nanoid } from "nanoid";

  // Props for the ToolbarButton
  export let id: string = nanoid(6);
  export let icon: string = "";
  export let label: string = "";
  export let disabled: boolean = false;
  export let classes: string = "";
  export let helpText: string | null = null;
  export let selected: boolean = false;
  export let custom: boolean = false;

  const dispatch = createEventDispatcher();

  let buttonElement: HTMLElement;

  // Get activeModalId store from context
  const activeModalId = getContext("activeModalId");

  // Retrieve button registry from context
  const { register, unregister } = getContext("buttonIds");

  // Register button on mount
  onMount(() => {
    register(id);
  });

  // Unregister button on destroy
  onDestroy(() => {
    unregister(id);
  });

  // Reactive store subscription
  $: isActive = $activeModalId === id;

  // Subscribe to the store to determine if this modal is active
  function handleClick() {
    if (!disabled) {
      dispatch("click");
      activeModalId.set(isActive ? null : id); // Toggle the modal
      // maybe something here to check if selected
    }
  }
</script>

<div class="toolbar-button-wrapper">
  {#if custom}
    <div on:click="{handleClick}" bind:this="{buttonElement}">
      <slot name="custom" />
    </div>
  {:else}
    <button
      type="button"
      aria-label="{label}"
      class="{`toolbar-button ${disabled ? 'disabled' : ''}  ${
        isActive ? 'selected' : ''
      } ${classes}`}"
      on:click="{handleClick}"
      disabled="{disabled}"
      bind:this="{buttonElement}"
      id="button-{id}"
      aria-controls="panel-{id}"
    >
      {#if icon}
        <Icon type="{icon}" selected="{isActive ? true : false}" />
      {:else}
        {label}
      {/if}
    </button>
  {/if}

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

  .selected {
    background: #e9eff4;
    border-radius: 8px;
  }
</style>
