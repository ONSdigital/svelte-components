<script>
	import { onMount, setContext } from "svelte";
	import { writable } from "svelte/store";
	import Container from "$lib/components/Container/Container.svelte";

	/** @typedef {{ id?: string; title?: string; subsections: { id?: string; title?: string }[] }} ContentsSection */
	/** @typedef {{ id: string; dataset: { title?: string; subsection?: string } }} RegisteredSection */

	/** @type {{ before?: import("svelte").Snippet; children?: import("svelte").Snippet; after?: import("svelte").Snippet; beforeNav?: import("svelte").Snippet; afterNav?: import("svelte").Snippet; footer?: import("svelte").Snippet; id?: string; cls?: string | null; width?: "narrow" | "medium" | "wide" | "wider" | "full"; contentsLabel?: string; noContents?: boolean; marginTop?: boolean; marginBottom?: boolean }} */
	let {
		before,
		children,
		after,
		beforeNav,
		afterNav,
		footer,
		id = "toc",
		cls = null,
		width = "wide",
		contentsLabel = "Contents",
		noContents = false,
		marginTop = false,
		marginBottom = true
	} = $props();

	/** @type {HTMLElement | undefined} */
	let el;
	/** @type {string | null} */
	let active = $state(null);
	let mounted = $state(false);

	/** @type {import("svelte/store").Writable<RegisteredSection[]>} */
	const sections = writable([]);
	/** @type {import("svelte/store").Writable<IntersectionObserver | null>} */
	const observer = writable(null);

	setContext("tocId", () => id);
	setContext("sections", sections);
	setContext("observer", observer);

	/** @param {RegisteredSection[]} sectionElements @returns {ContentsSection[]} */
	function formatSections(sectionElements) {
		if (sectionElements.length === 0) return [];
		/** @type {ContentsSection[]} */
		const formattedSections = [];
		/** @type {ContentsSection} */
		let currentSection = { subsections: [] };

		for (const section of sectionElements) {
			if (section.dataset.subsection !== "true") {
				if (currentSection.title || currentSection.subsections.length > 0) {
					formattedSections.push(currentSection);
				}
				currentSection = {
					id: section.id,
					title: section.dataset.title,
					subsections: []
				};
			} else {
				currentSection.subsections.push({
					id: section.id,
					title: section.dataset.title
				});
			}
		}

		return [...formattedSections, currentSection];
	}

	onMount(() => {
		if (!noContents && typeof IntersectionObserver !== "undefined") {
			$observer = new IntersectionObserver(
				(entries) => {
					for (const entry of entries) {
						if (entry.isIntersecting) {
							active = entry.target.id;
							break;
						}
					}
				},
				{
					root: null,
					rootMargin: "-25% 0px -75%",
					threshold: 0
				}
			);
		}

		if (el?.lastElementChild) el.prepend(el.lastElementChild);
		mounted = true;
	});
</script>

<Container {id} {cls} {width} {marginTop} {marginBottom}>
	<div
		class="ons-grid ons-grid--spaced ons-grid--loose ons-js-toc-container"
		class:flip-display-order={!mounted}
		bind:this={el}
	>
		<div class="ons-nav-sections-content ons-grid__col ons-col-8@m">
			{@render before?.()}
			{@render children?.()}
			{@render after?.()}
		</div>
		<div class="ons-nav-sections-toc ons-grid__col ons-grid__col--sticky@m ons-col-4@m">
			<aside class="ons-table-of-contents-container">
				{@render beforeNav?.()}
				{#if !noContents}
					<nav class="ons-table-of-contents" aria-label="Sections in this page">
						{#if contentsLabel}
							<h2 class="ons-table-of-contents__title ons-u-fs-r--b ons-u-mb-s">{contentsLabel}</h2>
						{/if}
						<ol class="ons-list ons-u-mb-l ons-list--dashed">
							{#each formatSections($sections) as section (section.id || section.title)}
								<li class="ons-list__item">
									{#if section.id && section.title}
										<a
											href="#{section.id}"
											class="ons-list__link"
											class:ons-table-of-contents__link-active={section.id === active}
										>
											{section.title}
										</a>
									{/if}
									{#if section.subsections.length > 0}
										<ol class="ons-list ons-u-mb-no ons-list--dashed">
											{#each section.subsections as subsection (subsection.id)}
												<li class="ons-list__item">
													<a
														href="#{subsection.id}"
														class="ons-list__link"
														class:ons-table-of-contents__link-active={subsection.id === active}
													>
														{subsection.title}
													</a>
												</li>
											{/each}
										</ol>
									{/if}
								</li>
							{/each}
						</ol>
					</nav>
				{/if}
				{@render afterNav?.()}
			</aside>
		</div>
	</div>
	{@render footer?.()}
</Container>

<style>
	.flip-display-order {
		direction: rtl;
	}
	.flip-display-order > * {
		direction: initial;
	}
</style>
