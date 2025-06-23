<script>
	import { onMount, setContext } from "svelte";
	import { writable } from "svelte/store";
	import Container from "../../wrappers/Container/Container.svelte";

	/**
	 * ID for back-linking to table of contents
	 * @type {string}
	 */
	export let id = "toc";
	/**
	 * Optional: Set an additional CSS class for the section
	 * @type {string}
	 */
	export let cls = "";
	/**
	 * Sets the width of the container
	 * @type {"narrow"|"medium"|"wide"|"wider"|"full"}
	 */
	export let width = "wide";
	/**
	 * A label for the page contents nav
	 * @type {string}
	 */
	export let contentsLabel = "Page contents";
	/**
	 * Don't include table of contents (allows for custom uses of nav panel)
	 * @type {boolean}
	 */
	export let noContents = false;
	/**
	 * Adds margin above section
	 * @type {boolean}
	 */
	export let marginTop = false;
	/**
	 * Adds margin below section
	 * @type {boolean}
	 */
	export let marginBottom = true;

	let active;

	setContext("tocId", id);

	const sections = writable([]);
	setContext("sections", sections);

	const observer = writable();
	setContext("observer", observer);

	function formatSections(sections) {
		const secs = [];
		let sec = { subsections: [] };
		for (const section of sections) {
			if (section.dataset.subsection !== "true") {
				if (sec.title || sec.subsections.length > 0) secs.push(sec);
				sec = { id: section.id, title: section.dataset.title, subsections: [] };
			} else {
				sec.subsections.push({ id: section.id, title: section.dataset.title });
			}
		}
		return [...secs, sec];
	}
	$: formattedSections = formatSections($sections);

	onMount(() => {
		if (!noContents) {
			$observer = new IntersectionObserver(
				(entries, observer) => {
					console.log(entries);
					for (let i = 0; i < entries.length; i++) {
						if (entries[i].isIntersecting) {
							active = entries[i].target.id;
							console.log({ active });
							break;
						}
					}
				},
				{
					root: null,
					rootMargin: "-20% 0px -80%",
					threshold: 0
				}
			);
		}
	});
</script>

<Container {cls} {width} {marginTop} {marginBottom}>
	<div class="ons-grid ons-grid--spaced ons-grid--loose ons-js-toc-container">
		<div class="ons-grid__col ons-grid__col--sticky@m ons-col-4@m">
			<aside class="ons-table-of-contents-container" role="complementary">
				<slot name="before-nav" />
				{#if !noContents}
					<nav class="ons-table-of-contents" aria-label="Sections in this page">
						{#if contentsLabel}
							<h2 class="ons-table-of-contents__title ons-u-fs-r--b ons-u-mb-s">Contents</h2>
						{/if}
						<ol class="ons-list ons-u-mb-l ons-list--dashed">
							{#if formattedSections}
								{#each formattedSections as section}
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
												{#each section.subsections as subsection}
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
							{/if}
						</ol>
					</nav>
				{/if}
				<slot name="after-nav" />
			</aside>
		</div>
		<div class="ons-grid__col ons-col-8@m">
			<slot name="before" />
			{#if $observer}
				<slot />
			{/if}
			<slot name="after" />
		</div>
	</div>
	<slot name="footer" />
</Container>
