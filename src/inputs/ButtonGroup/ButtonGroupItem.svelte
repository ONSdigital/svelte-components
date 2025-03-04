<script>
  import { getContext } from "svelte";

  export let value = "";
  export let label = "";

  // Get the parent ButtonGroup context
  const buttonGroup = getContext("buttonGroup");
  const { selectedValue } = buttonGroup;

  // Reactive variable to track selection
  let selected = false;

  // Subscribe to selectedValue store
  $: selectedValue.subscribe(($selectedValue) => {
    selected = $selectedValue === value;
  });

  function handleClick() {
    selectedValue.set(value); // Update the store
  }

  let buttonRef;

  function handleKeydown(event) {
    const buttons = Array.from(document.querySelectorAll(`[name="${buttonGroup.groupName}"]`));
    const currentIndex = buttons.indexOf(buttonRef);

    let newIndex = -1;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      newIndex = (currentIndex + 1) % buttons.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      newIndex = (currentIndex - 1 + buttons.length) % buttons.length;
    } else if (event.key === "Enter" || event.key === " ") {
      handleClick();
      return;
    }

    if (newIndex !== -1) {
      buttons[newIndex].focus();
    }
  }
</script>

<div class="button-container">
  <input
    type="radio"
    id="{value}"
    name="{buttonGroup.groupName}"
    value="{value}"
    checked="{selected}"
    class="radio-input"
    on:click="{handleClick}"
    on:keydown="{handleKeydown}"
    aria-checked="{selected}"
    tabindex="0"
    bind:this="{buttonRef}"
  />
  <label for="{value}" class="button" class:selected="{selected}" on:click="{handleClick}">
    {label || value}
  </label>
</div>

<style>
  .button-container {
    display: flex;
  }

  .radio-input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  .button {
    flex-grow: 0;
    min-width: 100px;
    padding: 8px 16px;
    border: none;
    background: transparent;
    font-size: 14px;
    cursor: pointer;
    border-radius: 6px;
    transition: background 0.2s ease, color 0.2s ease;
    color: #707071;
    text-align: center;
  }

  .button:hover {
    background-color: #e8e8e8;
  }

  .button:focus {
    box-shadow: orange 0 0 0 2px;
  }

  .button.selected {
    background: white;
    font-weight: bold;
    color: #206095;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
</style>
