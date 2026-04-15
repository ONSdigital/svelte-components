<script>
	import { onMount, createEventDispatcher } from "svelte";
	import pym from "pym.js";

	/**
	 * Binding for pymChild element (can be used to send messages to parent of iframe)
	 * @type {object}
	 */
	export let pymChild = null;
	/**
	 * Frequency (in milliseconds) of iframe height updates. Set as "false" to disable polling.
	 * @type {number|false}
	 */
	export let polling = 500;

	const dispatch = createEventDispatcher();

	onMount(() => {
		pymChild = new pym.Child();

		if (polling) {
			setInterval(() => {
				pymChild.sendMessage(
					"height",
					Math.max(document.body.scrollHeight, document.body.offsetHeight)
				);
			}, polling);
		}

		const href = document.location.href;
		const parentUrl = new URLSearchParams(document.location.search).get("parentUrl");
		dispatch("load", { href, parentUrl, pymChild });
	});
</script>

<div class="ons-svelte-embed-container" style:display="contents">
	<slot />
</div>

<style>
	.ons-svelte-embed-container :global(.ons-container) {
		padding: 0 !important;
	}
</style>
