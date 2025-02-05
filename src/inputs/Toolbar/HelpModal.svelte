<script lang="ts">
  import { fly } from "svelte/transition";

  export let triggerElement: HTMLElement | null = null;
  export let onClose: () => void;
  export let helpText: string | null = null;

  let modalPosition = { top: 0, left: 0 };
  let hasSlotContent = false;

  $: if (triggerElement) {
    const rect = triggerElement.getBoundingClientRect();

    // Determine positioning based on available space
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    const spaceRight = window.innerWidth - rect.right;
    const spaceLeft = rect.left;

    // Prefer positioning below, then above, then right, then left
    if (spaceBelow > 200) {
      modalPosition = {
        top: rect.bottom + window.scrollY + 10,
        left: rect.left + window.scrollX,
      };
    } else if (spaceAbove > 200) {
      modalPosition = {
        top: rect.top + window.scrollY - 10,
        left: rect.left + window.scrollX,
      };
    } else if (spaceRight > 200) {
      modalPosition = {
        top: rect.top + window.scrollY,
        left: rect.right + window.scrollX + 10,
      };
    } else {
      modalPosition = {
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX - 10,
      };
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      onClose();
    }
  }

  function checkSlotContent(node: HTMLElement) {
    hasSlotContent = node.children.length > 0;
    return { destroy() {} };
  }
</script>

<svelte:window on:keydown="{handleKeydown}" />

<div
  class="help-modal"
  style="top: {modalPosition.top}px; left: {modalPosition.left}px;"
  transition:fly="{{ duration: 200, y: 50 }}"
  role="dialog"
  aria-modal="true"
>
  <div use:checkSlotContent>
    <slot>
      {#if helpText}
        <p>{helpText}</p>
      {/if}
    </slot>
  </div>
  <button class="close-button" on:click="{onClose}" aria-label="Close help"> × </button>
</div>

<style>
  .help-modal {
    position: absolute;
    background: white;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 1rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 10;
    max-width: 300px;
    width: max-content;
  }

  .close-button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #666;
  }

  .close-button:hover {
    color: #000;
  }
</style>
