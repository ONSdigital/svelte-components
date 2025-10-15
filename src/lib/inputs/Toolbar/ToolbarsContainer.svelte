<script lang="ts">
	import { setContext, onMount } from "svelte";
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
		buttonIds
	});

	let showHelpState = $state(true);

	$effect(() => {
		const sessionValue = sessionStorage.getItem("showHelpModals");
		const localValue = localStorage.getItem("showHelpModals");
		showHelpState = sessionValue === "false" ? false : localValue === "false" ? false : true;
	});

	const showHelpModals = writable(showHelpState);
	// Set context for showHelpModals
	setContext("showHelpModals", showHelpModals);

	// Reactively update the initial state
	$effect(() => {
		showHelpModals.set(showHelpState);
	});

	const activeModalStore = writable(null); // Tracks the ID of the active modal
	setContext("activeModalId", activeModalStore);

	onMount(() => {
		window.addEventListener("beforeunload", () => {
			sessionStorage.removeItem("showHelpModals");
		});
		let unsubscribe = buttonIds.subscribe((ids) => {
			if (ids.length > 0) {
				activeModalStore.set(ids[0]); // Set first button as active
			}
		});

		return unsubscribe;
	});

	export function resetHelp() {
		sessionStorage.setItem("showHelpModals", "true");
		showHelpModals.set(true);
	}
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
		pointer-events: none;
		flex-wrap: wrap;
	}
</style>
