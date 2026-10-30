<script>
	import { createEventDispatcher } from "svelte";

	/** @type {import("svelte").EventDispatcher<{ enter: IntersectionObserverEntry; exit: IntersectionObserverEntry }>} */
	const dispatch = createEventDispatcher();
	/** @type {{ children?: import("svelte").Snippet; visible?: boolean; rootMargin?: number; onEnter?: (entry: IntersectionObserverEntry) => void; onExit?: (entry: IntersectionObserverEntry) => void }} */
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
