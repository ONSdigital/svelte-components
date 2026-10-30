<script>
	/** @type {{ children?: import("svelte").Snippet; entered?: boolean; initialHeight?: number; rootMargin?: number }} */
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
