<script>
	import { onMount, onDestroy, getContext } from "svelte";
	import { slugify } from "../../js/utils.js";

	/** @type {{ children?: import("svelte").Snippet; title?: string; hideTitle?: boolean; id?: string }} */
	let { children, title = "Tab title", hideTitle = true, id = slugify(title) } = $props();

	/** @type {import("svelte/store").Writable<HTMLElement[]>} */
	const sections = getContext("sections");

	/** @type {HTMLElement | undefined} */
	let el;

	onMount(() => {
		const parent = el?.parentElement;
		if (sections && parent) {
			sections.update(() =>
				[...parent.getElementsByTagName("section")].filter(
					(section) => section.dataset.type === "Tab"
				)
			);
		}
	});

	onDestroy(() => {
		if (sections) {
			sections.update((currentSections) => currentSections.filter((section) => section.id !== id));
		}
	});
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_to_interactive_role -->
<section
	{id}
	data-title={title}
	data-type="Tab"
	class="ons-tabs__panel"
	tabindex="0"
	role="tabpanel"
	aria-labelledby="tab_{id}"
	bind:this={el}
>
	<h2 id="{id}-content-title" class="ons-u-vh" class:ons-u-vh={hideTitle}>{title}</h2>
	{@render children?.()}
</section>
