<script lang="ts">
	import { onMount, onDestroy, createEventDispatcher, getContext } from "svelte";
	import Icon from "./ToolbarIcon.svelte";
	import HelpModal from "./HelpModal.svelte";
	import { slugify } from "$lib/js/utils.js";

	// Props for the ToolbarButton
	let {
		id = slugify(),
		icon = "",
		label = "",
		disabled = false,
		classes = "",
		helpText = null,
		selected = $bindable(false),
		toggle = false,
		custom = false,
		hasAriaControls = false,
		hasTooltip = true,
		sticky = false,
		transient = false,
		disableHelp = false
	}: {
		id?: string;
		icon?: string;
		label?: string;
		disabled?: boolean;
		classes?: string;
		helpText?: string | null;
		selected?: boolean;
		toggle?: boolean;
		custom?: boolean;
		hasAriaControls?: boolean;
		hasTooltip?: boolean;
		sticky?: boolean;
		transient?: boolean;
		disableHelp?: boolean;
	} = $props();

	const dispatch = createEventDispatcher();

	let buttonElement: HTMLElement;

	// Get activeModalId store from context
	const activeModalId = getContext("activeModalId");
	const currentActiveId = $derived(activeModalId);
	const isActive = $derived($currentActiveId === id);
	const orientation = getContext("orientation");
	const currentOrientation = $derived(orientation);
	let showTooltip = $state(false);

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

	// Subscribe to the store to determine if this modal is active
	function handleClick() {
		if (!disabled) {
			if (transient) {
				// If it's a transient button, just trigger the action and return
				dispatch("click");
				return;
			} else if (toggle) {
				selected = !selected;
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
		<div
			tabindex="0"
			onclick={handleClick}
			onmouseover={() => (showTooltip = true)}
			onmouseout={() => (showTooltip = false)}
			onfocus={() => (showTooltip = true)}
			onblur={() => (showTooltip = false)}
			bind:this={buttonElement}
		>
			<slot name="custom" />
		</div>
	{:else if toggle}
		<input
			type="checkbox"
			class="ons-u-vh"
			onclick={handleClick}
			onfocus={() => (showTooltip = true)}
			onblur={() => (showTooltip = false)}
			{disabled}
			bind:this={buttonElement}
			id={`button-${id}`}
			checked={selected}
		/>
		<label
			for={`button-${id}`}
			class="toolbar-button {classes}"
			onmouseover={() => (showTooltip = true)}
			onmouseout={() => (showTooltip = false)}
			class:selected={selected || (isActive && !transient)}
		>
			{#if icon}
				<Icon type={icon} selected={selected || (isActive && !transient)} {disabled} /><span
					class="ons-u-vh">{label}</span
				>
			{:else}
				{label}
			{/if}
		</label>
	{:else}
		<button
			type="button"
			aria-label={label}
			class="toolbar-button {classes}"
			class:selected={selected || (isActive && !transient)}
			onclick={handleClick}
			onmouseover={() => (showTooltip = true)}
			onmouseout={() => (showTooltip = false)}
			onfocus={() => (showTooltip = true)}
			onblur={() => (showTooltip = false)}
			{disabled}
			bind:this={buttonElement}
			id={`button-${id}`}
			aria-controls={hasAriaControls ? `panel-${id}` : undefined}
		>
			{#if icon}
				<Icon type={icon} selected={selected || (isActive && !transient)} {disabled} /><span
					class="ons-u-vh">{label}</span
				>
			{:else}
				{label}
			{/if}
		</button>
	{/if}

	{#if isActive}
		{#if helpText && !disableHelp}
			<HelpModal triggerElement={buttonElement} onClose={() => activeModalId.set(null)}>
				<p>{helpText}</p>
			</HelpModal>
		{:else if !helpText && !disableHelp}
			<HelpModal triggerElement={buttonElement} onClose={() => activeModalId.set(null)}>
				<slot />
			</HelpModal>
		{/if}
	{/if}

	{#if hasTooltip && showTooltip}
		<div
			class="toolbar-tooltip ons-u-fs-s"
			class:toolbar-tooltip-vertical={$currentOrientation === "vertical"}
		>
			{label}
		</div>
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

	button.toolbar-button[disabled="disabled"],
	button.toolbar-button:disabled {
		/* opacity: 0.5; */
		cursor: not-allowed;
	}
	.toolbar-tooltip {
		position: absolute;
		z-index: 10;
		pointer-events: none;
		text-align: center;
		width: calc(100% + 40px);
		top: calc(100% + 8px);
		left: 50%;
		transform: translate(-50%, 0);
		color: var(--ons-color-page-light);
		background: var(--ons-color-text);
		padding: 4px;
		border-radius: 4px;
		box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
	}
	.toolbar-tooltip-vertical {
		left: calc(100% + 8px);
		top: 50%;
		transform: translate(0, -50%);
	}
	.toolbar-tooltip::before {
		content: " ";
		position: absolute;
		bottom: calc(100% - 1px); /* At the top of the tooltip */
		right: 50%;
		border-width: 8px;
		border-style: solid;
		border-color: transparent transparent var(--ons-color-text) transparent;
		pointer-events: none;
		transform: translate(50%, 0);
	}
	.toolbar-tooltip-vertical::before {
		bottom: 50%;
		right: 100%;
		border-width: 8px;
		border-color: transparent var(--ons-color-text) transparent transparent;
		transform: translate(0, 50%);
	}

	.selected {
		background: #e9eff4;
		border-radius: 8px;
	}

	.toolbar-button:hover {
		background-color: #f5f5f6;
		border-radius: 8px;
	}

	.toolbar-button:focus,
	input:focus + .toolbar-button {
		outline: 2px solid #fbc900;
		outline-offset: 2px;
		box-shadow: 0 0 2px 2px #222222;
		border-radius: 8px;
	}
	input[type="checkbox"] {
		appearance: none;
	}
</style>
