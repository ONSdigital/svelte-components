<script>
	import { onMount, onDestroy } from "svelte";

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

	let el, observer;

	const callback = (entries, observer) => {
		entries.forEach((entry) => {
			let intersecting = entry.isIntersecting;
			if (!entered && intersecting) {
				observer.unobserve(el);
				entered = true;
			}
		});
	};

	onMount(() => {
		let options = { root: document, rootMargin: `${rootMargin}px` };

		observer = new IntersectionObserver(callback, options);
		observer.observe(el);
	});

	onDestroy(() => observer.unobserve(el));
</script>

{#if entered}
	<slot />
{:else}
	<div bind:this={el} style:height="{+initialHeight || 100}px"></div>
{/if}
