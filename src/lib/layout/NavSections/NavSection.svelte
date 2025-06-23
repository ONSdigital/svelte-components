<script>
	import { onMount, onDestroy, getContext } from "svelte";
	import { slugify } from "../../js/utils.js";
	import BackLink from "../BackLink/BackLink.svelte";

	/**
	 * Sets the title of the section
	 * @type {string}
	 */
	export let title = "Section title";
	/**
	 * Sets the unique ID of the section (if not set, this will be slugified from the title)
	 * @type {string}
	 */
	export let id = slugify(title);
	/**
	 * Optional: Set an additional CSS class for the section
	 * @type {string}
	 */
	export let cls = "";
	/**
	 * Allows the h2 title tag for the section to be visually hidden
	 * @type {boolean}
	 */
	export let hideTitle = false;
	/**
	 * Treat a section as sub-section. It will have an h3 title, and will be indented in the contents table
	 * @type {boolean}
	 */
	export let subsection = false;

	const sections = getContext("sections");
	const observer = getContext("observer");
	const tocId = getContext("tocId");

	let section;

	onMount(() => {
		if (sections && observer) {
			$sections = [...section.parentElement.getElementsByTagName("section")].filter(
				(s) => s.dataset.type === "NavSection"
			);
			$observer.observe(section);
		}
	});

	onDestroy(() => {
		if (sections && observer) {
			$sections = $sections.filter((s) => s.id !== id);
			$observer.unobserve(section);
		}
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
	<slot />
	{#if tocId}
		<BackLink href="#{tocId}" cls="ons-u-d-no@m" />
	{/if}
</section>
