<script lang="ts">
	import { getContext } from "svelte";
	// import { get, set } from "svelte/store";
	import { fly } from "svelte/transition";
	import Checkbox from "../Checkbox/Checkbox.svelte";
	import Button from "../Button/Button.svelte";
	import type { Writable } from "svelte/store";

	let {
		children,
		triggerElement = null,
		onClose = () => {}
	}: {
		children?: import("svelte").Snippet;
		triggerElement?: HTMLElement | null;
		onClose?: () => void;
	} = $props();

	// --- Context ---
	const activeModalId = getContext<Writable<string | null>>("activeModalId");
	const showHelpModals = getContext<Writable<boolean>>("showHelpModals");
	const { buttonIds } = getContext<{ buttonIds: Writable<string[]> }>("buttonIds");

	// --- Derived state from stores ---
	const ids = $derived(buttonIds);
	const currentActiveId = $derived(activeModalId);
	const showHelp = $derived(showHelpModals);

	// --- Local state ---
	let modalPosition = $state({ top: 50, left: -5 });
	let notchPosition = $state<{ left: number | "auto"; right: number | "auto" }>({
		left: 17,
		right: "auto"
	});
	let dontShowMeAgain = $state(false);
	let viewportWidth = $state(0);

	$effect(() => {
		if (!triggerElement) return;

		const anchor = triggerElement.closest(".toolbar-button-wrapper") ?? triggerElement;
		const rect = anchor.getBoundingClientRect();
		const width = Math.min(360, (viewportWidth || window.innerWidth) - 48);
		const left = Math.max(
			16,
			Math.min(rect.left - 10, document.documentElement.clientWidth - width - 16)
		);
		const offset = left - rect.left;
		modalPosition.left = offset;
		notchPosition.left = Math.max(10, Math.min(width - 30, rect.width / 2 - offset - 10));
		notchPosition.right = "auto";
	});

	// Update localStorage if "Don't show me again" is checked
	function disableHelpModalsPermanently() {
		localStorage.setItem("showHelpModals", "false");
		sessionStorage.setItem("showHelpModals", "false");
		showHelpModals.set(false);
	}

	// Hide modals until refresh
	function hideHelpModalsUntilRefresh() {
		sessionStorage.setItem("showHelpModals", "false");
		showHelpModals.set(false);
	}

	// Navigate to the next modal
	function nextModal() {
		const currentIndex = $currentActiveId === null ? -1 : $ids.indexOf($currentActiveId);
		if (currentIndex !== -1 && currentIndex < $ids.length - 1) {
			activeModalId.set($ids[currentIndex + 1]);
			// console.log("Navigating to next modal:", ids[currentIndex + 1]);
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
		const currentIndex = $currentActiveId === null ? -1 : $ids.indexOf($currentActiveId);
		if (currentIndex > 0) {
			activeModalId.set($ids[currentIndex - 1]);
			// console.log("Navigating to previous modal:", ids[currentIndex - 1]);
		}
		if (dontShowMeAgain) {
			disableHelpModalsPermanently(); // Disable help modals permanently
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === "Escape") onClose();
	}
</script>

<svelte:window onkeydown={handleKeydown} bind:innerWidth={viewportWidth} />
{#if $showHelp}
	<div class="help-modal-wrapper" style="top: {modalPosition.top}px; left: {modalPosition.left}px;">
		<!-- Notch -->
		<div
			class="help-modal-notch"
			style="left: {notchPosition.left}px;right: {notchPosition.right}px;"
		></div>

		<!-- Modal Content -->
		<div class="help-modal" role="dialog" aria-modal="true">
			{@render children?.()}
			<!-- <button class="close-button" on:click="{onClose}" aria-label="Close help">×</button> -->

			<div class="ons-padding-4">
				<Checkbox
					id="dontShowMeAgain"
					label="Don't show me again"
					bind:checked={dontShowMeAgain}
					compact
				/>
			</div>
			<div class="ons-grid-flex ons-grid-flex--between ons-grid-flex-vertical-center">
				<button class="btn-link" onclick={handleSkip} aria-label="Skip instructions">Skip</button>
				{#if $currentActiveId !== null && $ids.indexOf($currentActiveId) > 0}
					<span style="margin-left:auto; margin-right:10px">
						<Button variant="secondary" on:click={previousModal}>Back</Button>
					</span>
				{/if}

				{#if $currentActiveId !== null && $ids.indexOf($currentActiveId) != $ids.length - 1}
					<Button on:click={nextModal}>Next</Button>
				{/if}
				{#if $currentActiveId !== null && $ids.indexOf($currentActiveId) == $ids.length - 1}
					<Button on:click={hideHelpModalsUntilRefresh}>Get started</Button>
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

		box-sizing: border-box;
		width: min(360px, calc(100vw - 48px));

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

	button.btn-link {
		line-height: 1.3;
		color: var(--ons-color-text-link, #206095);
		background: none;
		margin: 0;
		padding: 0;
		border: none;
		text-decoration: underline;
		text-decoration-thickness: 1px;
		text-underline-position: under;
	}
	button.btn-link:hover {
		color: var(--ons-color-text-link-hover, #003c57) !important;
		text-decoration-thickness: 2px;
	}
	button.btn-link:focus {
		background-color: #fbc900 !important;
		box-shadow:
			0 -2px #fbc900,
			0 4px #222;
		color: #222 !important;
		outline: 3px solid transparent;
		outline-offset: 1px;
		text-decoration: none;
	}
</style>
