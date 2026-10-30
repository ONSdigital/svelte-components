<script module>
	// Based on svelte-scroller by Rich Harris
	// https://github.com/sveltejs/svelte-scroller
	// Extended to allow for split-screen mode, section IDs and on:change event
	/** @typedef {{ outer: HTMLElement; update: () => void }} ScrollerEntry */
	/** @type {(() => void)[]} */
	const handlers = [];
	/** @type {{ add: (entry: ScrollerEntry) => void; remove: (entry: ScrollerEntry) => void }} */
	let manager;

	let subscribers = 0;
	const run_all = () => handlers.forEach((fn) => fn());
	function subscribe() {
		if (subscribers++ === 0) {
			window.addEventListener("scroll", run_all);
			window.addEventListener("resize", run_all);
		}
		return () => {
			if (--subscribers === 0) {
				window.removeEventListener("scroll", run_all);
				window.removeEventListener("resize", run_all);
			}
		};
	}

	if (typeof IntersectionObserver !== "undefined") {
		/** @type {Map<Element, () => void>} */
		const map = new Map();

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const update = map.get(entry.target);
					if (!update) return;
					const index = handlers.indexOf(update);

					if (entry.isIntersecting) {
						if (index === -1) handlers.push(update);
						update();
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
	import { onMount, untrack, setContext, createEventDispatcher } from "svelte";
	import { writable } from "svelte/store";

	const dispatch = createEventDispatcher();
	/** @typedef {{ id: string | null; index: number | null; sectionId: string | null }} ScrollDetail */

	// config

	let top = 0;
	let bottom = 1;
	let parallax = false;

	// bindings

	/**
	 * @typedef {Object} Props
	 * @property {string | null} [id] - Sets the unique ID of the scroller
	 * @property {boolean} [splitscreen] - Enables splitscreen view (captions appear on left on larger screens)
	 * @property {boolean} [marginTop] - Adds a margin under the scroller section
	 * @property {boolean} [marginBottom] - Adds a margin under the scroller section
	 * @property {number} [threshold] - Set the threshold for the transition between scroller sections (0-1)
	 * @property {number} [count] - Binding: Total number of sections within scroller
	 * @property {number|null} [index] - Binding: Current section index (number)
	 * @property {string|null} [sectionId] - Binding: Current section id, if it has one set - ID for current section within scroller
	 * @property {number} [offset] - Binding: The progress between the start of current scroller section and next (0-1)
	 * @property {number} [progress] - Binding: The progress through the whole scroller (0-1)
	 * @property {boolean} [visible] - Binding: Whether the scroller is visible on screen or not
	 * @property {string|null} [cls] - Optional: Set an additional CSS class for the component
	 * @property {import('svelte').Snippet} [background]
	 * @property {import('svelte').Snippet} [foreground]
	 * @property {(detail: ScrollDetail) => void} [onChange]
	 * @property {(detail: ScrollDetail) => void} [onEnter]
	 * @property {(detail: ScrollDetail) => void} [onExit]
	 */

	/** @type {Props} */
	let {
		id = null,
		splitscreen = false,
		marginTop = false,
		marginBottom = true,
		threshold = 0.7,
		count = $bindable(0),
		index = $bindable(null),
		sectionId = $bindable(null),
		offset = $bindable(0),
		progress = $bindable(0),
		visible = $bindable(false),
		cls = null,
		background,
		foreground,
		onChange,
		onEnter,
		onExit
	} = $props();

	/** @param {"change" | "enter" | "exit"} type */
	function emit(type) {
		const detail = { id, index, sectionId };
		if (type === "change") onChange?.(detail);
		else if (type === "enter") onEnter?.(detail);
		else onExit?.(detail);
		dispatch(type, detail);
	}
	onMount(subscribe);

	/** @type {ScrollerEntry | undefined} */
	let scroller;
	let outer = $state();
	let foregroundElement = $state();
	let backgroundElement = $state();
	let left;
	let wh = $state(0);
	let ww = $state(0);
	let fixed = $state();
	let offset_top = $state(0);
	let width = $state(1);
	let inverted;

	/** @type {import("svelte/store").Writable<HTMLElement[]>} */
	const sections = writable([]);
	setContext("sections", sections);

	const isSplit = writable();
	setContext("isSplit", isSplit);

	/** @param {HTMLElement[]} sections */
	function initSections(sections) {
		if (scroller) manager.remove(scroller);

		count = sections.length;

		update();

		scroller = { outer, update };

		manager.add(scroller);
		const currentScroller = scroller;
		return () => manager.remove(currentScroller);
	}

	function update() {
		if (!foregroundElement || !backgroundElement || !outer) return;

		// re-measure outer container
		const bcr = outer.getBoundingClientRect();
		left = bcr.left;
		width = bcr.right - left;

		// determine fix state
		const fg = foregroundElement.getBoundingClientRect();
		const bg = backgroundElement.getBoundingClientRect();

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
					emit("change");
				}
				break;
			}
		}

		if (entered) {
			emit("enter");
			emit("change");
		}
		if (exited) emit("exit");
	}
	$effect(() => {
		isSplit.set(splitscreen && ww >= 992);
	});
	let top_px = $derived(Math.round(top * wh));
	let bottom_px = $derived(Math.round(bottom * wh));
	let threshold_px = $derived(Math.round(threshold * wh));
	$effect(() => {
		threshold_px;
		wh;
		ww;
		untrack(update);
	});
	let style = $derived(`
		position: ${fixed ? "fixed" : "absolute"};
		top: 0;
		transform: translate(0, ${offset_top}px);
		z-index: ${inverted ? 3 : 1};
	`);
	let widthStyle = $derived(fixed ? `width:${width}px;` : "");
	$effect(() => {
		const registeredSections = $sections;
		if (outer && foregroundElement && backgroundElement) {
			return untrack(() => initSections(registeredSections));
		}
	});
</script>

<svelte:window bind:innerHeight={wh} bind:innerWidth={ww} />

{#if marginTop}
	<div class="ons-u-mt-xl"></div>
{/if}

<svelte-scroller-outer {id} bind:this={outer} class={cls} class:splitscreen>
	<svelte-scroller-background-container class="background-container" style="{style}{widthStyle}">
		<svelte-scroller-background bind:this={backgroundElement}>
			{@render background?.()}
		</svelte-scroller-background>
	</svelte-scroller-background-container>

	<svelte-scroller-foreground bind:this={foregroundElement}>
		{@render foreground?.()}
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

	:global(svelte-scroller-foreground section) {
		padding: 40vh 0 100vh 0;
	}

	:global(svelte-scroller-foreground section + section) {
		padding: 0 0 100vh 0;
	}

	:global(svelte-scroller-foreground section:last-of-type) {
		padding: 0 0 70vh 0;
	}

	:global(svelte-scroller-foreground section > div) {
		position: relative;
	}

	:global(svelte-scroller-foreground section > div:before) {
		background-color: var(--ons-color-page-light);
		opacity: 80%;
	}

	:global(svelte-scroller-foreground section div p) {
		margin: 0;
	}

	:global(svelte-scroller-foreground section div p + p) {
		margin-top: 30px;
	}

	:global(svelte-scroller-foreground section div h2),
	:global(svelte-scroller-foreground section div h3) {
		margin: 10px 0 20px 0;
	}

	@media (min-width: 992px) {
		.splitscreen svelte-scroller-background {
			width: calc(100% - 480px) !important;
			min-width: 65%;
			margin: 0 0 0 auto;
		}
		:global(.splitscreen svelte-scroller-foreground section div::before) {
			opacity: 0;
		}
		:global(.splitscreen svelte-scroller-foreground section) {
			width: 480px;
			max-width: 35%;
			margin: 0 auto 0 0;
			background-color: var(--ons-color-page-light);
		}
	}
</style>
