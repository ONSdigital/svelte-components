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
				rootMargin: "400px 0px" // TODO why 400?
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
	import { onMount, setContext, createEventDispatcher } from "svelte";
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
	let height;
	let inverted;

	$: top_px = Math.round(top * wh);
	$: bottom_px = Math.round(bottom * wh);
	$: threshold_px = Math.round(threshold * wh);

	$: top, bottom, threshold, parallax, update();

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

		const visible_new = fg.top < wh && fg.bottom > 0;
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

		for (let i = 0; i < $sections.length; i++) {
			const section = $sections[i];
			const { top } = section.getBoundingClientRect();

			const next = $sections[i + 1];
			const bottom = next ? next.getBoundingClientRect().top : fg.bottom;

			offset = (threshold_px - top) / (bottom - top);
			if (bottom >= threshold_px) {
				if (index !== i) {
					index = i;
					sectionId = section.dataset.id ? section.dataset.id : null;
					dispatch("change", { id, index, sectionId });
				}
				break;
			}
		}

		if (entered) {
			dispatch("enter", { id, index, sectionId });
			dispatch("change", { id, index, sectionId });
		}
		if (exited) dispatch("exit", { id, index, sectionId });
	}
</script>

<svelte:window bind:innerHeight={wh} />

{#if marginTop}
	<div class="ons-u-mt-xl"></div>
{/if}

<svelte-scroller-outer {id} bind:this={outer} class={cls} class:splitscreen>
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
	<div class="ons-u-mb-xl"></div>
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
		padding: 40vh 0 100vh 0;
	}

	:global([slot="foreground"] section + section) {
		padding: 0 0 100vh 0;
	}

	:global([slot="foreground"] section:last-of-type) {
		padding: 0 0 70vh 0;
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
