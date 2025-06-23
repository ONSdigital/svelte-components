<script>
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	/**
	 * A title for the element
	 * @type {string}
	 */
	export let title = "Title";
	/**
	 * Set the heading level for the title
	 * @type {"h2"|"h3"}
	 */
	export let headingTag = "h2";
	/**
	 * Option for element to be open/expanded by default
	 * @type {boolean}
	 */
	export let open = false;
	/**
	 * Optional: Set an additional CSS class for the component
	 * @type {string}
	 */
	export let cls = "";

	function doToggle(e) {
		dispatch("toggle", { open: e.newState === "open", e });
	}
</script>

<details
	class="ons-details ons-js-details ons-details--initialised {cls}"
	class:ons-details--open={open}
	bind:open
	on:toggle={doToggle}
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
				role="img"
				title="ons-icon-chevron"
			>
				<path
					d="M5.74,14.28l-.57-.56a.5.5,0,0,1,0-.71h0l5-5-5-5a.5.5,0,0,1,0-.71h0l.57-.56a.5.5,0,0,1,.71,0h0l5.93,5.93a.5.5,0,0,1,0,.7L6.45,14.28a.5.5,0,0,1-.71,0Z"
					transform="translate(-5.02 -1.59)"
				/>
			</svg></span
		>
	</summary>
	<div class="ons-details__content ons-js-details-content">
		<slot />
	</div>
</details>

<style>
	.ons-details__content {
		/* hack to ensure that contents can be found when closed by using ctrl-F */
		display: block;
	}
</style>
