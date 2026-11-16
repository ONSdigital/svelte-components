<script>
	import { getContext } from "svelte";
	import { slugify, sleep } from "$lib/js/utils.js";

	/**
	 * @typedef {Object} Props
	 * @property {import("svelte").Snippet} [children] Child content (snippet)
	 * @property {string | null} [title] Sets the title of the accordion item
	 * @property {string} [id] Sets the unique ID of the accordion item
	 * @property {"h2" | "h3"} [headingTag] Set the heading level for the accordion items
	 * @property {boolean} [open] Set the initial status of the accordion item to open (non-reactive)
	 */
	/** @type {Props} */
	let {
		children,
		title = null,
		id = slugify(title),
		headingTag = "h2",
		open = $bindable()
	} = $props();

	// Defaults for bindable props are set here rather than in $props(): Svelte 5 throws an error if a
	// parent binds a prop that has a default to an undefined variable (eg. `let value = $state()`).
	// Setting them here also writes the default back to the bound variable, as in v1.
	if (open === undefined) open = false;

	const getDataGroup = getContext("dataGroup");
	let dataGroup = $derived(typeof getDataGroup === "function" ? getDataGroup() : getDataGroup);

	// Sync open state to allow binding
	// Note: This is a one-way binding. Changing the state from outside does not open/close
	let lastState = $state(open ? "Open panel" : "Close panel");
	/** @param {Event & { currentTarget: HTMLElement }} e */
	async function syncOpenState(e) {
		await sleep(0);
		const state = e.currentTarget?.dataset?.gaAction;
		if (state && state !== lastState) {
			open = state === "Open panel";
			lastState = state;
		}
	}
</script>

<div
	{id}
	class="ons-details ons-js-details ons-details--accordion"
	data-group={dataGroup}
	data-open={open}
>
	<div
		class="ons-details__heading ons-js-details-heading"
		role="button"
		tabindex="0"
		onclick={syncOpenState}
		onkeyup={syncOpenState}
	>
		{#if headingTag === "h3"}
			<h3 class="ons-details__title ons-u-fs-r--b">
				{title}
			</h3>
		{:else}
			<h2 class="ons-details__title ons-u-fs-r--b">{title}</h2>
		{/if}
		<span class="ons-details__icon">
			<svg
				class="ons-icon"
				viewBox="0 0 8 13"
				xmlns="http://www.w3.org/2000/svg"
				focusable="false"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					d="M5.74,14.28l-.57-.56a.5.5,0,0,1,0-.71h0l5-5-5-5a.5.5,0,0,1,0-.71h0l.57-.56a.5.5,0,0,1,.71,0h0l5.93,5.93a.5.5,0,0,1,0,.7L6.45,14.28a.5.5,0,0,1-.71,0Z"
					transform="translate(-5.02 -1.59)"
				/>
			</svg></span
		>
	</div>
	<div id="{id}-content" class="ons-details__content ons-js-details-content">
		{@render children?.()}
	</div>
</div>
