<script>
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	/**
	 * Bind to this variable to monitor visiblity (boolean true/false).
	 * @type {boolean}
	 */
	export let visible = false;
	/**
	 * Number of pixels before/after the viewport that component is considered "visible" (default = 0).
	 * @type {number}
	 */
	export let rootMargin = 0;

	const callback = (entries) => {
		entries.forEach((entry) => {
			let intersecting = entry.isIntersecting;
			if (!visible && intersecting) {
				dispatch("enter", entry);
				visible = true;
			}
			if (visible && !intersecting) {
				dispatch("exit", entry);
				visible = false;
			}
		});
	};

	function initObserver(el) {
		let options = { root: document, rootMargin: `${rootMargin}px` };

		const observer = new IntersectionObserver(callback, options);
		observer.observe(el);

		return {
			destroy: () => observer?.unobserve?.(el)
		};
	}
</script>

<div use:initObserver>
	<slot />
</div>
