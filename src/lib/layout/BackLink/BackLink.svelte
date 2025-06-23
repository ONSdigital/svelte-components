<script>
	/**
	 * Href for top of page or contents section
	 * @type {string}
	 */
	export let href = "#top";
	/**
	 * Optional: Add a CSS class to the link
	 * @type {string}
	 */
	export let cls = "";
</script>

<div class="ons-back-to-top ons-js-back-to-top ons-back-to-top__enabled ons-u-mb-l {cls || ''}">
	<a {href} class="ons-back-to-top__link">
		<span
			><svg
				class="ons-icon ons-icon--xs"
				viewBox="0 0 13 20"
				xmlns="http://www.w3.org/2000/svg"
				focusable="false"
				fill="currentColor"
				role="img"
				title="ons-icon-arrow-up"
			>
				<path fill="currentColor" d="M6.5 0L0 6.5 1.4 8l4-4v12.7h2V4l4.3 4L13 6.4z"></path>
			</svg><span class="ons-back-to-top__description">Back to top</span>
		</span>
	</a>
</div>
