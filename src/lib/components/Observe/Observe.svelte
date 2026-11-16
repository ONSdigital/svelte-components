<script>
	import { createEventDispatcher } from "svelte";

	/** @type {import("svelte").EventDispatcher<{ enter: IntersectionObserverEntry; exit: IntersectionObserverEntry }>} */
	const dispatch = createEventDispatcher();
	/**
	 * @typedef {Object} Props
	 * @property {import("svelte").Snippet} [children] Child content (snippet)
	 * @property {boolean} [visible] Bind to this variable to monitor visiblity (boolean true/false).
	 * @property {number} [rootMargin] Number of pixels before/after the viewport that component is considered "visible" (default = 0).
	 * @property {(entry: IntersectionObserverEntry) => void} [onEnter] Callback for the `enter` event, called with the same value as the event's `detail`
	 * @property {(entry: IntersectionObserverEntry) => void} [onExit] Callback for the `exit` event, called with the same value as the event's `detail`
	 */
	/** @type {Props} */
	let { children, visible = $bindable(false), rootMargin = 0, onEnter, onExit } = $props();

	/** @param {IntersectionObserverEntry[]} entries */
	const callback = (entries) => {
		entries.forEach((entry) => {
			let intersecting = entry.isIntersecting;
			if (!visible && intersecting) {
				onEnter?.(entry);
				dispatch("enter", entry);
				visible = true;
			}
			if (visible && !intersecting) {
				onExit?.(entry);
				dispatch("exit", entry);
				visible = false;
			}
		});
	};

	/** @param {HTMLDivElement} el */
	function initObserver(el) {
		if (typeof IntersectionObserver === "undefined") return;
		let options = { root: document, rootMargin: `${rootMargin}px` };

		const observer = new IntersectionObserver(callback, options);
		observer.observe(el);

		return {
			destroy: () => observer.disconnect()
		};
	}
</script>

<div use:initObserver>
	{@render children?.()}
</div>
