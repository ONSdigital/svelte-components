<script>
	import { onMount, createEventDispatcher } from "svelte";
	import pym from "pym.js";
	import { slugify } from "$lib/js/utils";

	let {
		id = slugify(),
		href,
		title = null,
		name = null,
		pymParent = $bindable(null),
		onLoad = () => null
	} = $props();
	const dispatch = createEventDispatcher();

	onMount(() => {
		pymParent = pym.Parent(id, href, {
			id: `${id}-iframe`,
			title,
			name: !name && title ? slugify(title) : name
		});

		const detail = { id, href, title, pymParent };
		onLoad?.(detail);
		dispatch("load", detail);

		return {
			destroy: () => {
				pymParent.remove();
				pymParent = null;
			}
		};
	});
</script>

<div {id}></div>
