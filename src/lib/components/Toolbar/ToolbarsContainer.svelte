<script>
	import { setContext, onMount } from "svelte";
	import { writable } from "svelte/store";

	// Initialize a store for button IDs
	/** @type {import("svelte/store").Writable<string[]>} */
	const buttonIds = writable([]);
	setContext("buttonIds", {
		/** @param {string} id */
		register: (id) => {
			buttonIds.update((ids) => [...ids, id]);
		},
		/** @param {string} id */
		unregister: (id) => {
			buttonIds.update((ids) => ids.filter((btnId) => btnId !== id));
		},
		buttonIds
	});

	// Whether to show the help modals (set from session or local storage when mounted, as storage
	// isn't available when rendering on the server)
	const showHelpModals = writable(true);
	setContext("showHelpModals", showHelpModals);

	/** @type {import("svelte/store").Writable<string | null>} */
	const activeModalStore = writable(null); // Tracks the ID of the active modal
	setContext("activeModalId", activeModalStore);

	onMount(() => {
		const sessionValue = sessionStorage.getItem("showHelpModals");
		const localValue = localStorage.getItem("showHelpModals");
		showHelpModals.set(sessionValue === "false" ? false : localValue === "false" ? false : true);

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
