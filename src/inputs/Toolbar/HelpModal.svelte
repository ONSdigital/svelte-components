<script lang="ts">
  import { getContext } from "svelte";
  import { get } from "svelte/store";
  import { fly } from "svelte/transition";
  import Checkbox from "../Checkbox/Checkbox.svelte";
  import Button from "../Button/Button.svelte";

  export let triggerElement: HTMLElement | null = null;
  export let onClose: () => void;

  // Retrieve the stores from context
  const activeModalId = getContext("activeModalId");

  // Access button IDs from context
  const { buttonIds } = getContext("buttonIds");

  const showHelpModals = getContext("showHelpModals");

  let modalPosition = { top: 0, left: 0 };
  let notchPosition = { left: 0 };

  let dontShowMeAgain = false;

  $: if (triggerElement) {
    const rect = triggerElement.getBoundingClientRect();

    // Calculate the modal's position
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;
    const spaceRight = window.innerWidth - rect.right;

    // Default to position below the trigger element
    modalPosition = {
      top: rect.bottom + window.scrollY + 10,
      left: window.scrollX - 10,
    };

    // Align notch with the center of the trigger element
    notchPosition = {
      left: window.scrollX - modalPosition.left + rect.width / 2 - 10, // Adjust for the notch width
      right: "auto",
    };

    // If there's not enough space below, position above
    if (spaceBelow < 200 && spaceAbove > 200) {
      modalPosition.top = rect.top + window.scrollY - 10;
    }

    // Adjust if close to the right edge
    if (spaceRight < 300) {
      modalPosition.left = window.scrollX - 300; // Adjust for modal width
      notchPosition = {
        left: "auto",
        right: -340,
      };
    }
  }

  // Update localStorage if "Don't show me again" is checked
  function disableHelpModalsPermanently() {
    localStorage.setItem("showHelpModals", "false");
    sessionStorage.setItem("showHelpModals", "false");
    $showHelpModals = false;
  }

  // Hide modals until refresh
  function hideHelpModalsUntilRefresh() {
    sessionStorage.setItem("showHelpModals", "false");
    $showHelpModals = false;
  }

  // Navigate to the next modal
  function nextModal() {
    const ids = get(buttonIds);
    const currentIndex = ids.indexOf($activeModalId);
    if (currentIndex !== -1 && currentIndex < ids.length - 1) {
      activeModalId.set(ids[currentIndex + 1]);
      console.log("Navigating to next modal:", ids[currentIndex + 1]);
    }
    if (dontShowMeAgain) {
      disableHelpModalsPermanently(); // Disable help modals permanently
    }
  }

  function handleSkip() {
    if (dontShowMeAgain) {
      disableHelpModalsPermanently(); // Disable help modals permanently
    } else {
      hideHelpModalsUntilRefresh();
    }
  }

  // Navigate to the previous modal
  function previousModal() {
    const ids = get(buttonIds);
    const currentIndex = ids.indexOf($activeModalId);
    if (currentIndex > 0) {
      activeModalId.set(ids[currentIndex - 1]);
      console.log("Navigating to previous modal:", ids[currentIndex - 1]);
    }
    if (dontShowMeAgain) {
      disableHelpModalsPermanently(); // Disable help modals permanently
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Escape") onClose();
  }
</script>

<svelte:window on:keydown="{handleKeydown}" />
{#if $showHelpModals}
  <div
    class="help-modal-wrapper"
    style="top: {modalPosition.top}px; left: {modalPosition.left}px;"
    transition:fly="{{ duration: 200, y: 10 }}"
  >
    <!-- Notch -->
    <div
      class="help-modal-notch"
      style="left: {notchPosition.left}px;right: {notchPosition.right}px;"
    ></div>

    <!-- Modal Content -->
    <div class="help-modal" role="dialog" aria-modal="true">
      <slot />
      <button class="close-button" on:click="{onClose}" aria-label="Close help">×</button>

      <div class="ons-padding-4">
        <Checkbox
          id="dontShowMeAgain"
          label="Don't show me again"
          bind:checked="{dontShowMeAgain}"
          compact
        />
      </div>
      <div class="ons-grid--flex ons-grid--between ons-grid--vertical-center">
        <a on:click="{handleSkip}">Skip</a>
        {#if $buttonIds.indexOf($activeModalId) > 0}
          <span style="margin-left:auto; margin-right:10px">
            <Button variant="secondary" on:click="{previousModal}">Back</Button>
          </span>
        {/if}

        {#if $buttonIds.indexOf($activeModalId) != $buttonIds.length - 1}
          <Button on:click="{nextModal}">Next</Button>
        {/if}
        {#if $buttonIds.indexOf($activeModalId) == $buttonIds.length - 1}
          <Button on:click="{hideHelpModalsUntilRefresh}">Get started</Button>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
  .help-modal-wrapper {
    position: absolute;
    z-index: 10;
  }

  .help-modal-notch {
    position: absolute;
    top: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid white;
    z-index: 1;
  }

  .help-modal {
    position: absolute;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 16px;
    isolation: isolate;

    width: 360px;

    background: #ffffff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
    border-radius: 16px;

    /* Inside auto layout */
    flex: none;
    order: 2;
    flex-grow: 0;
  }

  .close-button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: none;
    border: none;
    font-size: 1.25rem;
    color: #666;
    cursor: pointer;
  }

  .close-button:hover {
    color: #333;
  }

  .ons-padding-4 {
    padding-top: var(--4-units, 16px);
    padding-bottom: var(--4-units, 16px);
  }
</style>
