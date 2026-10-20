<script>
	import { createEventDispatcher } from "svelte";

	/** @type {import("svelte").EventDispatcher<{ toggle: { open: boolean; e: Event } }>} */
	const dispatch = createEventDispatcher();

	/** @type {{ children?: import("svelte").Snippet; title?: string; headingTag?: "h2" | "h3"; open?: boolean; cls?: string | null; onToggle?: (detail: { open: boolean; e: Event }) => void }} */
	let {
		children,
		title = "Title",
		headingTag = "h2",
		open = $bindable(false),
		cls = null,
		onToggle = () => {}
	} = $props();

	/** @param {Event & { newState?: string; currentTarget: HTMLDetailsElement }} e */
	function doToggle(e) {
		const detail = { open: e.newState ? e.newState === "open" : e.currentTarget.open, e };
		onToggle(detail);
		dispatch("toggle", detail);
	}
</script>

<details
	class="ons-details ons-js-details ons-details--initialised {cls}"
	class:ons-details--open={open}
	bind:open
	ontoggle={doToggle}
>
	<summary
		class="ons-details__heading ons-js-details-heading"
		aria-expanded={open}
		data-ga-action={open ? "Close panel" : "Open panel"}
	>
		{#if headingTag === "h3"}
			<h3 class="ons-details__title ons-u-fs-r--b">{title}</h3>
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
	</summary>
	<div class="ons-details__content ons-js-details-content">
		{@render children?.()}
	</div>
</details>

<style>
	.ons-details__content {
		/* hack to ensure that contents can be found when closed by using ctrl-F */
		display: block;
	}
</style>
