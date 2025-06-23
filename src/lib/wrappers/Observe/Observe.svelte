<script>
	import { onMount, onDestroy, createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	/**
	 * Bind to this variable to monitor visiblity (boolean true/false).
	 * @type {boolean}
	 */
	export let visible = false;

	let el, observer;

	const callback = (entries) => {
		entries.forEach((entry) => {
			let intersecting = entry.isIntersecting;
			if (!visible && intersecting) dispatch("enter", entry);
			if (visible && !intersecting) dispatch("exit", entry);
			visible = intersecting;
		});
	};

	onMount(() => {
		let options = {};

		observer = new IntersectionObserver(callback, options);
		observer.observe(el);
	});

	onDestroy(() => observer.unobserve(el));
</script>

<div bind:this={el}>
	<slot />
</div>
