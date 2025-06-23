<script>
	import { onMount, onDestroy, getContext } from "svelte";
	import { slugify } from "../../js/utils.js";

	/**
	 * Title of tab/panel
	 * @type {string}
	 */
	export let title = "Tab title";
	/**
	 * Hide the title within the panel
	 * @type {boolean}
	 */
	export let hideTitle = true;
	/**
	 * ID/slug for tab (auto-generated from title if not set)
	 * @type {string}
	 */
	export let id = slugify(title);

	const sections = getContext("sections");

	let el;

	onMount(() => {
		if (sections) {
			$sections = [...el.parentElement.getElementsByTagName("section")].filter(
				(s) => s.dataset.type === "Tab"
			);
		}
	});

	onDestroy(() => {
		if (sections) {
			$sections = $sections.filter((s) => s.id !== id);
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
	<slot />
</section>
