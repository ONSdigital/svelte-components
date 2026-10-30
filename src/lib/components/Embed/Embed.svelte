<script>
	import { onMount, createEventDispatcher } from "svelte";
	import pym from "pym.js";

	/** @typedef {{ sendMessage: (type: string, value: string) => void; remove: () => void }} PymChild */
	/** @typedef {{ href: string; parentUrl: string | null; pymChild: PymChild }} LoadDetail */
	/** @type {{ children?: import("svelte").Snippet; id?: string | null; pymChild?: PymChild | null; polling?: number | false; onLoad?: (detail: LoadDetail) => void }} */
	let { children, id = null, pymChild = $bindable(null), polling = 500, onLoad } = $props();
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
