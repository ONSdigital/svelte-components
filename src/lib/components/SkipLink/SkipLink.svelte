<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [href] - Anchor link to <main> page element
	 */

	/** @type {Props} */
	let { href = "#main" } = $props();
</script>

<a class="ons-skip-to-content" {href}>Skip to main content</a>
