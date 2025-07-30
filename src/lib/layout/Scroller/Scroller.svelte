<script context="module">
	// Based on svelte-scroller by Rich Harris
	// https://github.com/sveltejs/svelte-scroller
	// Extended to allow for split-screen mode, section IDs and on:change event
	const handlers = [];
	let manager;

	if (typeof window !== "undefined") {
		const run_all = () => handlers.forEach((fn) => fn());

		window.addEventListener("scroll", run_all);
		window.addEventListener("resize", run_all);
	}

	if (typeof IntersectionObserver !== "undefined") {
		const map = new Map();

		const observer = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				const update = map.get(entry.target);
				const index = handlers.indexOf(update);

				if (entry.isIntersecting) {
					if (index === -1) handlers.push(update);
				} else {
					update();
					if (index !== -1) handlers.splice(index, 1);
				}
			});
		},
		{
			rootMargin: "400px 0px"
		}
	);

		manager = {
			add: ({ outer, update }) => {
				const { top, bottom } = outer.getBoundingClientRect();

				if (top < window.innerHeight && bottom > 0) handlers.push(update);

				map.set(outer, update);
				observer.observe(outer);
			},

			remove: ({ outer, update }) => {
				if (map.get(outer)) {
					const index = handlers.indexOf(update);
					if (index !== -1) handlers.splice(index, 1);

					map.delete(outer);
					observer.unobserve(outer);
				}
			}
		};
	} else {
		manager = {
			add: ({ update }) => {
				handlers.push(update);
			},

			remove: ({ update }) => {
				const index = handlers.indexOf(update);
				if (index !== -1) handlers.splice(index, 1);
			}
		};
	}
</script>

<script>
	import { onMount, setContext, createEventDispatcher, onDestroy } from "svelte";
	import { writable } from "svelte/store";

	const dispatch = createEventDispatcher();

	// config
	/**
	 * Sets the unique ID of the scroller
	 * @type {string}
	 */
	export let id = null;
	/**
	 * Enables splitscreen view (captions appear on left on larger screens)
	 * @type {boolean}
	 */
	export let splitscreen = false;
	/**
	 * Adds a margin under the scroller section
	 * @type {boolean}
	 */
	export let marginTop = false;
	/**
	 * Adds a margin under the scroller section
	 * @type {boolean}
	 */
	export let marginBottom = true;
	/**
	 * Set the threshold for the transition between scroller sections (0-1)
	 * @type {number}
	 */
	export let threshold = 0.7;
	/**
	 * Container element to use for height calculations instead of viewport
	 * @type {HTMLElement|null}
	 */
	export let container = null;
	/**
	 * CSS height value for the scroller when no container is provided
	 * @type {string}
	 */
	export let height = "100vh";

	let top = 0;
	let bottom = 1;
	let parallax = false;

	// bindings
	/**
	 * Binding: Total number of sections within scroller
	 * @type {number}
	 */
	export let count = 0;
	/**
	 * Binding: Current section index (number)
	 * @type {number|null}
	 */
	export let index = null;
	/**
	 * Binding: Current section id, if it has one set
	 * @type {string|null}
	 */
	export let sectionId = null; // ID for current section within scroller
	/**
	 * Binding: The progress between the start of current scroller section and next (0-1)
	 * @type {number}
	 */
	export let offset = 0;
	/**
	 * Binding: The progress through the whole scroller (0-1)
	 * @type {number}
	 */
	export let progress = 0;
	/**
	 * Binding: Whether the scroller is visible on screen or not
	 * @type {boolean}
	 */
	export let visible = false;
	/**
	 * Optional: Set an additional CSS class for the component
	 * @type {string}
	 */
	export let cls = "";

	const sections = writable([]);
	setContext("sections", sections);

	let scroller;
	let outer;
	let foreground;
	let background;
	let left;
	let wh = 0;
	let fixed;
	let offset_top = 0;
	let width = 1;
	let inverted;
	let containerHeight = 0;
	let containerObserver;

	// Use container height if available, otherwise fall back to viewport height
	$: effectiveHeight = container ? containerHeight : wh;
	$: top_px = Math.round(top * effectiveHeight);
	$: bottom_px = Math.round(bottom * effectiveHeight);
	$: threshold_px = Math.round(threshold * effectiveHeight);

	// Update container height when container changes
	$: if (container) {
		updateContainerHeight();
	}

	$: top, bottom, threshold, parallax, effectiveHeight, update();

	function updateContainerHeight() {
		if (container) {
			containerHeight = container.clientHeight;
			
			if (!container.hasScrollListener) {
				container.addEventListener('scroll', update);
				container.hasScrollListener = true;
			}
		}
	}

	$: style = `
		position: ${fixed ? "fixed" : "absolute"};
		top: 0;
		transform: translate(0, ${offset_top}px);
		z-index: ${inverted ? 3 : 1};
	`;

	$: widthStyle = fixed ? `width:${width}px;` : "";

	function initSections(sections) {
		if (scroller) manager.remove(scroller);

		count = sections.length;

		update();

		scroller = { outer, update };

		manager.add(scroller);
		return () => manager.remove(scroller);
	}
	$: outer && initSections($sections);

	function update() {
		if (!foreground) return;

		// re-measure outer container
		const bcr = outer.getBoundingClientRect();
		left = bcr.left;
		width = bcr.right - left;

		// determine fix state
		const fg = foreground.getBoundingClientRect();
		const bg = background.getBoundingClientRect();

		// Get container bounds if available
		const containerBounds = container ? container.getBoundingClientRect() : { top: 0, bottom: effectiveHeight };
		const referenceTop = container ? containerBounds.top : 0;
		const referenceBottom = container ? containerBounds.bottom : effectiveHeight;

		const visible_new = fg.bottom > referenceTop && fg.top < referenceBottom;
		const entered = visible_new && !visible;
		const exited = !visible_new && visible;
		visible = visible_new;

		const foreground_height = fg.bottom - fg.top;
		const background_height = bg.bottom - bg.top;

		const available_space = bottom_px - top_px;
		progress = (top_px - fg.top) / (foreground_height - available_space);

		if (progress <= 0) {
			offset_top = 0;
			fixed = false;
		} else if (progress >= 1) {
			offset_top = parallax
				? foreground_height - background_height
				: foreground_height - available_space;
			fixed = false;
		} else {
			offset_top = parallax
				? Math.round(top_px - progress * (background_height - available_space))
				: top_px;
			fixed = true;
		}


		const containerThreshold = container ? 
			containerBounds.top + (threshold * (containerBounds.bottom - containerBounds.top)) : 
			threshold_px;

		let currentSection = 0; // Default to first section	

		// Replace the entire section detection loop with this:
		for (let i = 0; i < $sections.length; i++) {
			const section = $sections[i];
			const sectionBounds = section.getBoundingClientRect();
			
			const next = $sections[i + 1];
			const nextTop = next ? next.getBoundingClientRect().top : fg.bottom;
			
			// For container mode, calculate position relative to container's scroll position
			const containerScrollTop = container ? container.scrollTop : 0;
			const containerClientHeight = container ? container.clientHeight : wh;
			
			// Get section position within the scrollable content
			const sectionOffsetTop = section.offsetTop;
			const nextOffsetTop = next ? next.offsetTop : foreground.offsetHeight;
			
			// Calculate threshold position within container
			const thresholdPosition = containerScrollTop + (threshold * containerClientHeight);
			
			// Check if threshold is within this section's range
			if (sectionOffsetTop <= thresholdPosition && nextOffsetTop > thresholdPosition) {
				currentSection = i;
				offset = (thresholdPosition - sectionOffsetTop) / (nextOffsetTop - sectionOffsetTop);
				break;
			}
			
			// const containerThresholdRelative = threshold * (containerBounds.bottom - containerBounds.top);
			
			// console.log(`Section ${i}:`, { 
			// 	sectionTopRelative, 
			// 	nextTopRelative, 
			// 	containerThresholdRelative,
			// 	isActive: sectionTopRelative <= containerThresholdRelative && nextTopRelative > containerThresholdRelative
			// });
			
			// // Check if threshold is within this section's range
			// if (sectionTopRelative <= containerThresholdRelative && nextTopRelative > containerThresholdRelative) {
			// 	currentSection = i;
			// 	offset = (containerThresholdRelative - sectionTopRelative) / (nextTopRelative - sectionTopRelative);
			// 	break;
			// }
			
			// If we've passed all sections, use the last one
			if (i === $sections.length - 1) {
				currentSection = i;
			}
		}
			

		// Update index if it changed
		if (index !== currentSection) {
			console.log(`Index changing from ${index} to ${currentSection}`);
			index = currentSection;
			sectionId = $sections[currentSection].dataset.id ? $sections[currentSection].dataset.id : null;
			console.log(`Dispatching change event:`, { id, index, sectionId });
			dispatch("change", { id, index, sectionId });
		}
			
		// Add this right after the for loop in update()
		// $:console.log("Debug info:", {
		// sectionsCount: $sections.length,
		// containerThreshold,
		// currentIndex: index,
		// containerBounds: container ? container.getBoundingClientRect() : null,
		// foregroundBounds: fg
		// });

		if (entered) {
			dispatch("enter", { id, index, sectionId });
			dispatch("change", { id, index, sectionId });
		}
		if (exited) dispatch("exit", { id, index, sectionId });

		// Add this after the containerThreshold calculation
		// console.log("Container threshold:", containerThreshold);
		// console.log("Sections:", $sections.length);
		console.log("Current index:", index);
	}

	$: if (container && outer) {
		setupContainerObserver();
	}

	function setupContainerObserver() {
		if (containerObserver) {
			containerObserver.disconnect();
		}
		
		// For fixed containers, we need to listen to scroll events instead
		if (container) {
			container.addEventListener('scroll', update);
			// Also set up resize observer for container size changes
			if (typeof ResizeObserver !== 'undefined') {
				const resizeObserver = new ResizeObserver(() => {
					updateContainerHeight();
					update();
				});
				resizeObserver.observe(container);
			}
		}
	}

	onDestroy(() => {
		if (containerObserver) {
			containerObserver.disconnect();
		}
	});

	// $: console.log("Sections array updated:", $sections.length, $sections);

	// Force reactivity when index changes
	// $: if (index !== null) {
	// 	console.log("Index reactive update:", index);
	// 	// This ensures the parent component sees the change
	// }
</script>

<svelte:window bind:innerHeight={wh} />

{#if marginTop}
	<div class="ons-u-mt-xl" />
{/if}

<svelte-scroller-outer
	{id}
	bind:this={outer}
	class={cls}
	class:splitscreen
	style={container ? "" : `height: ${height};`}
>
	<svelte-scroller-background-container class="background-container" style="{style}{widthStyle}">
		<svelte-scroller-background bind:this={background}>
			<slot name="background" />
		</svelte-scroller-background>
	</svelte-scroller-background-container>

	<svelte-scroller-foreground bind:this={foreground}>
		<slot name="foreground" />
	</svelte-scroller-foreground>
</svelte-scroller-outer>

{#if marginBottom}
	<div class="ons-u-mb-xl" />
{/if}

<style>
	svelte-scroller-outer {
		display: block;
		position: relative;
	}

	svelte-scroller-background {
		display: block;
		position: relative;
		width: 100%;
	}

	svelte-scroller-foreground {
		display: block;
		position: relative;
		z-index: 2;
	}

	svelte-scroller-foreground::after {
		content: " ";
		display: block;
		clear: both;
	}

	svelte-scroller-background-container {
		display: block;
		position: absolute;
		width: 100%;
		max-width: 100%;
		pointer-events: none;
		/* height: 100%; */

		/* in theory this helps prevent jumping */
		will-change: transform;
		/* -webkit-transform: translate3d(0, 0, 0);
		-moz-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0); */
	}

	svelte-scroller-background-container {
		pointer-events: all !important;
	}

	:global([slot="foreground"] section) {
		padding: var(--scroller-section-padding-top, 40vh) 0 var(--scroller-section-padding-bottom, 100vh) 0;
	}

	:global([slot="foreground"] section + section) {
		padding: 0 0 var(--scroller-section-padding-bottom, 100vh) 0;
	}

	:global([slot="foreground"] section:last-of-type) {
		padding: 0 0 var(--scroller-section-padding-last, 70vh) 0;
	}

	:global([slot="foreground"] section > div) {
		position: relative;
	}

	:global([slot="foreground"] section > div:before) {
		background-color: var(--background, white);
		opacity: 80%;
	}

	:global([slot="foreground"] section div p) {
		margin: 0;
	}

	:global([slot="foreground"] section div p + p) {
		margin-top: 30px;
	}

	:global([slot="foreground"] section div h2),
	:global([slot="foreground"] section div h3) {
		margin: 10px 0 20px 0;
	}

	@media (min-width: 992px) {
		.splitscreen svelte-scroller-background {
			width: calc(100% - 480px) !important;
			min-width: 65%;
			margin: 0 0 0 auto;
		}
		:global(.splitscreen [slot="foreground"] section div::before) {
			opacity: 0;
		}
		:global(.splitscreen [slot="foreground"] section) {
			width: 480px;
			max-width: 35%;
			margin: 0 auto 0 0;
			background-color: var(--background, white);
		}
	}
</style>
