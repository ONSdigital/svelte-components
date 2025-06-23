<script>
	import { getContext } from "svelte";

	import Container from "$lib/wrappers/Container/Container.svelte";

	/**
	 * Sets the width of the container
	 * @type {"narrow"|"medium"|"wide"|"wider"|"full"}
	 */
	export let width = "narrow";
	/**
	 * Optional: Pass the "page" store from "$app/state" in SvelteKit (gets read from context by default if it exists)
	 * @type {any}
	 */
	export let page = getContext("page");
	/**
	 * Optional: Explicitly pass a page status number, eg. 404 or 500.
	 * @type {number}
	 */
	export let status = $page ? $page?.status : null;
	/**
	 * Optional: Explicitly pass a page status message.
	 * @type {string}
	 */
	export let message = $page ? $page?.error?.message : "";
</script>

<Container {width}>
	<main id="main" class="ons-page__main">
		{#if status === 404}
			<h1>{message || "Page not found"}</h1>
			<p>If you entered a web address, check it is correct.</p>
			<p>If you pasted the web address, check you copied the whole address.</p>
			<p>
				If the web address is correct or you selected a link or button, <a
					href="https://www.ons.gov.uk/feedback">contact us</a
				> for more help.
			</p>
		{:else}
			<h1>{message || "Sorry, there is a problem with the service"}</h1>
			<p>
				If you continue to experience problems with this service, please <a
					href="https://www.ons.gov.uk/feedback">contact us</a
				>.
			</p>
		{/if}
	</main>
</Container>
