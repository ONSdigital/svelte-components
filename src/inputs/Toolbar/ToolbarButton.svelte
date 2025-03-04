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
  export let hasAriaControls: boolean = false;
  export let sticky: boolean = false;
  export let transient: boolean = false;

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
      if (transient) {
        // If it's a transient button, just trigger the action and return
        dispatch("click");
        return;
      }

      dispatch("click");
      if ($activeModalId === id && sticky) {
        // If it's already active and sticky, keep it selected
        return;
      }
      activeModalId.set(isActive ? null : id); // Toggle the modal
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
      class="toolbar-button {disabled ? 'disabled' : ''} {isActive && !transient
        ? 'selected'
        : ''} {classes}"
      on:click="{handleClick}"
      disabled="{disabled}"
      bind:this="{buttonElement}"
      id="button-{id}"
      aria-controls="{hasAriaControls ? `panel-${id}` : undefined}"
    >
      {#if icon}
        <Icon
          type="{icon}"
          selected="{!transient ? (isActive ? true : false) : false}"
          disabled="{disabled}"
        />
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

<!-- 

/* /* Slightly darker gray when clicked */

/* 
button:active {
  background-color: #d6d6d6; 
}

button.active {
  background-color: #ddd; /* Selected button background */
  border: 2px solid #333; /* Active button border */
}

button:hover:active {
  background-color: #ccc; /* Slightly more contrast when active */
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: #f2f2f2;
  border: 1px solid #ddd;
}

button:hover:disabled {
  background-color: #f2f2f2; /* Keep it the same so disabled buttons don’t change on hover */
  border: 1px solid #ddd;
} */
 -->

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
    /* opacity: 0.5; */
    cursor: not-allowed;
  }

  .selected {
    background: #e9eff4;
    border-radius: 8px;
  }

  button:hover {
    background-color: #f5f5f6;
    border-radius: 8px;
  }

  button:focus {
    outline: 2px solid #fbc900;
    outline-offset: 2px;
    box-shadow: 0 0 2px 2px #222222;
    border-radius: 8px;
  }
</style>
