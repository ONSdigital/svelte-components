<script>
	/**
	 * @typedef {Object} Props
	 * @property {import("svelte").Snippet} [children] Child content (snippet)
	 * @property {boolean} [entered] Bind to this variable to monitor whether the component has entered the viewport (boolean true/false).
	 * @property {number} [initialHeight] Set the initial "placeholder" height of the component in pixels.
	 * @property {number} [rootMargin] Set how many pixels from the viewport you want lazy loading to kick in.
	 */
	/** @type {Props} */
	let { children, entered = $bindable(false), initialHeight = 400, rootMargin = 200 } = $props();

	/** @type {IntersectionObserverCallback} */
	const callback = (entries, observer) => {
		entries.forEach((entry) => {
			let intersecting = entry.isIntersecting;
			if (!entered && intersecting) {
				observer.unobserve(entry.target);
				entered = true;
			}
		});
	};

	/** @param {HTMLDivElement} el */
	function initObserver(el) {
		if (typeof IntersectionObserver === "undefined") {
			entered = true;
			return;
		}
		let options = { root: document, rootMargin: `${rootMargin}px` };

		const observer = new IntersectionObserver(callback, options);
		observer.observe(el);

		return {
			destroy: () => observer.disconnect()
		};
	}
</script>

{#if entered}
	{@render children?.()}
{:else}
	<div use:initObserver style:height="{+initialHeight || 100}px"></div>
{/if}
