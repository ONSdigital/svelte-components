<script>
	/**
	 * Bind to this variable to monitor whether the component has entered the viewport (boolean true/false).
	 * @type {boolean}
	 */
	export let entered = false;
	/**
	 * Set the initial "placeholder" height of the component in pixels.
	 * @type {number}
	 */
	export let initialHeight = 400;
	/**
	 * Set how many pixels from the viewport you want lazy loading to kick in.
	 * @type {number}
	 */
	export let rootMargin = 200;

	const callback = (entries, observer) => {
		entries.forEach((entry) => {
			console.log(entry);
			let intersecting = entry.isIntersecting;
			if (!entered && intersecting) {
				observer.unobserve(entry.target);
				entered = true;
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

{#if entered}
	<slot />
{:else}
	<div use:initObserver style:height="{+initialHeight || 100}px"></div>
{/if}
