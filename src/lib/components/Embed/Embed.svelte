<script>
	import { onMount, createEventDispatcher } from "svelte";
	import pym from "pym.js";

	/** @typedef {{ sendMessage: (type: string, value: string) => void; remove: () => void }} PymChild */
	/** @typedef {{ href: string; parentUrl: string | null; pymChild: PymChild }} LoadDetail */
	/**
	 * @typedef {Object} Props
	 * @property {import("svelte").Snippet} [children] Child content (snippet)
	 * @property {string | null} [id] (Optional) ID for embed
	 * @property {PymChild | null} [pymChild] Binding for pymChild element (can be used to send messages to parent of iframe)
	 * @property {number | false} [polling] Frequency (in milliseconds) of iframe height updates. Set as "false" to disable polling.
	 * @property {(detail: LoadDetail) => void} [onLoad] Callback for the `load` event, called with the same value as the event's `detail`
	 */
	/** @type {Props} */
	let { children, id = null, pymChild = $bindable(), polling = 500, onLoad } = $props();

	// Defaults for bindable props are set here rather than in $props(): Svelte 5 throws an error if a
	// parent binds a prop that has a default to an undefined variable (eg. `let value = $state()`).
	// Setting them here also writes the default back to the bound variable, as in v1.
	if (pymChild === undefined) pymChild = null;
	/** @type {import("svelte").EventDispatcher<{ load: LoadDetail }>} */
	const dispatch = createEventDispatcher();

	onMount(() => {
		const Child = /** @type {new (options?: { id: string }) => PymChild} */ (
			/** @type {unknown} */ (pym.Child)
		);
		const child = id ? new Child({ id }) : new Child();
		pymChild = child;
		/** @type {ReturnType<typeof setInterval> | undefined} */
		let interval;

		if (polling) {
			interval = setInterval(() => {
				child.sendMessage(
					"height",
					String(Math.max(document.body.scrollHeight, document.body.offsetHeight))
				);
			}, polling);
		}

		const href = document.location.href;
		const parentUrl = new URLSearchParams(document.location.search).get("parentUrl");
		const detail = { href, parentUrl, pymChild: child };
		onLoad?.(detail);
		dispatch("load", detail);

		return () => {
			clearInterval(interval);
			child.remove();
			pymChild = null;
		};
	});
</script>

<div class="ons-svelte-embed-container" style:display="contents">
	{@render children?.()}
</div>

<style>
	.ons-svelte-embed-container :global(.ons-container) {
		padding: 0 !important;
	}
</style>
