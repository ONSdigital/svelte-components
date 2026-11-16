<script>
	import { onMount, createEventDispatcher } from "svelte";
	import pym from "pym.js";
	import { slugify } from "$lib/js/utils";

	/** @typedef {{ id: string; url: string; el: HTMLElement; iframe: HTMLIFrameElement; sendMessage: (type: string, message: string) => void; onMessage: (type: string, callback: (message: string) => void) => void; remove: () => void }} PymParent */
	/** @typedef {{ id: string; iframeId: string; href: string; title: string | null; pymParent: PymParent }} LoadDetail */
	const uid = $props.id();
	/**
	 * @typedef {Object} Props
	 * @property {string} [id]
	 * @property {string} href
	 * @property {string | null} [title]
	 * @property {string | null} [name]
	 * @property {PymParent | null} [pymParent]
	 * @property {(detail: LoadDetail) => void} [onLoad] Callback for the `load` event, called with the same value as the event's `detail`
	 */
	/** @type {Props} */
	let { id = uid, href, title = null, name = null, pymParent = $bindable(), onLoad } = $props();
	if (pymParent === undefined) pymParent = null;
	/** @type {import("svelte").EventDispatcher<{ load: LoadDetail }>} */
	const dispatch = createEventDispatcher();

	onMount(() => {
		const iframeId = `${id}-iframe`;
		const Parent =
			/** @type {new (id: string, url: string, config?: { id?: string; title?: string | null; name?: string | null }) => PymParent} */ (
				/** @type {unknown} */ (pym.Parent)
			);
		const parent = new Parent(id, href, {
			id: iframeId,
			title,
			name: !name && title ? slugify(title) : name
		});
		pymParent = parent;

		const detail = { id, iframeId, href, title, pymParent: parent };
		onLoad?.(detail);
		dispatch("load", detail);

		return () => {
			parent.remove();
			pymParent = null;
		};
	});
</script>

<div {id}></div>
