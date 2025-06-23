<script>
	import { getContext } from "svelte";
	import { slugify } from "$lib/js/utils.js";

	/**
	 * Sets the title of the accordion item
	 * @type {string}
	 */
	export let title = "";
	/**
	 * Sets the unique ID of the accordion item
	 * @type {string}
	 */
	export let id = slugify(title);
	/**
	 * Set the heading level for the accordion items
	 * @type {"h2"|"h3"}
	 */
	export let headingTag = "h2";

	const dataGroup = getContext("dataGroup");
</script>

<div {id} class="ons-details ons-js-details ons-details--accordion" data-group={dataGroup}>
	<div class="ons-details__heading ons-js-details-heading" role="button">
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
	</div>
	<div id="{id}-content" class="ons-details__content ons-js-details-content">
		<slot />
	</div>
</div>
