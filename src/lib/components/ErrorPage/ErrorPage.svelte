<script>
	import { getContext } from "svelte";
	import { readable } from "svelte/store";

	import Container from "$lib/components/Container/Container.svelte";

	/**
	 * @typedef {Object} Props
	 * @property {"narrow"|"medium"|"wide"|"wider"|"full"} [width] - Sets the width of the container
	 * @property {any} [page] - Optional: Pass the "page" store from "$app/state" in SvelteKit (gets read from context by default if it exists)
	 * @property {number|null} [status] - Optional: Explicitly pass a page status number, eg. 404 or 500.
	 * @property {string|null} [message] - Optional: Explicitly pass a page status message.
	 */

	/** @type {Props} */
	let { width = "narrow", page = getContext("page"), status, message } = $props();
	const pageStore = $derived(typeof page?.subscribe === "function" ? page : readable(page));
	const resolvedStatus = $derived(status === undefined ? ($pageStore?.status ?? null) : status);
	const resolvedMessage = $derived(
		message === undefined ? ($pageStore?.error?.message ?? null) : message
	);
</script>

<Container {width}>
	<main id="main" class="ons-page__main">
		{#if resolvedStatus === 404}
			<h1>{resolvedMessage || "Page not found"}</h1>
			<p>If you entered a web address, check it is correct.</p>
			<p>If you pasted the web address, check you copied the whole address.</p>
			<p>
				If the web address is correct or you selected a link or button, <a
					href="https://www.ons.gov.uk/feedback">contact us</a
				> for more help.
			</p>
		{:else}
			<h1>{resolvedMessage || "Sorry, there is a problem with the service"}</h1>
			<p>
				If you continue to experience problems with this service, please <a
					href="https://www.ons.gov.uk/feedback">contact us</a
				>.
			</p>
		{/if}
	</main>
</Container>
