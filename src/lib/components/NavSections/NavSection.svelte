<script>
	import { onMount, onDestroy, getContext } from "svelte";
	import { slugify } from "../../js/utils.js";
	import BackLink from "../BackLink/BackLink.svelte";
	/** @typedef {{ id: string; dataset: { title?: string; subsection?: string } }} RegisteredNavSection */

	/**
	 * @typedef {Object} Props
	 * @property {import("svelte").Snippet} [children] Child content (snippet)
	 * @property {string} [title] Sets the title of the section
	 * @property {string} [id] Sets the unique ID of the section (if not set, this will be slugified from the title)
	 * @property {string | null} [cls] Optional: Set an additional CSS class for the section
	 * @property {boolean} [hideTitle] Allows the h2 title tag for the section to be visually hidden
	 * @property {boolean} [subsection] Treat a section as sub-section. It will have an h3 title, and will be indented in the contents table
	 */
	/** @type {Props} */
	let {
		children,
		title = "Section title",
		id = slugify(title),
		cls = null,
		hideTitle = false,
		subsection = false
	} = $props();

	/** @type {import("svelte/store").Writable<RegisteredNavSection[]>} */
	const sections = getContext("sections");
	/** @type {import("svelte/store").Writable<IntersectionObserver | null>} */
	const observer = getContext("observer");
	const tocIdContext = getContext("tocId");
	let tocId = $derived(typeof tocIdContext === "function" ? tocIdContext() : tocIdContext);

	/** @type {HTMLElement | undefined} */
	let section;
	let mounted = $state(false);
	let observed = $state(false);

	$effect(() => {
		const sectionData = { id, dataset: { title, subsection: String(subsection) } };
		sections.update((currentSections) => [
			...currentSections.filter((current) => current.id !== id),
			sectionData
		]);
	});

	// This allows sections to be highlighted on the toc after hydration,
	// and for sections to be added/removed gracefully from the DOM
	/** @param {IntersectionObserver | null} observer @param {boolean} mounted */
	function addToObserver(observer, mounted) {
		const sectionElement = section;
		const parent = sectionElement?.parentElement;
		if (mounted && observer && !observed && parent && sectionElement) {
			$sections = /** @type {RegisteredNavSection[]} */ (
				[...parent.getElementsByTagName("section")].filter(
					(candidate) => candidate.dataset.type === "NavSection"
				)
			);
			observer.observe(sectionElement);
			observed = true;
		}
	}
	$effect(() => addToObserver($observer, mounted));

	onMount(() => (mounted = true));

	onDestroy(() => {
		if ($observer && section) $observer.unobserve(section);
		sections.update((currentSections) => currentSections.filter((current) => current.id !== id));
		mounted = observed = false;
	});
</script>

<section
	{id}
	data-title={title}
	data-type="NavSection"
	data-subsection={subsection}
	class={cls}
	aria-label={title}
	bind:this={section}
>
	{#if title}
		{#if subsection}
			<h3 class="subsection-title" class:ons-u-vh={hideTitle}>{title}</h3>
		{:else}
			<h2 class="section-title" class:ons-u-vh={hideTitle}>
				{title}
			</h2>
		{/if}
	{/if}
	{@render children?.()}
	{#if tocId}
		<BackLink href="#{tocId}" cls="ons-u-d-no@m" />
	{/if}
</section>
