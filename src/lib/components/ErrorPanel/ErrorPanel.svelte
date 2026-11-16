<script>
	/**
	 * @typedef {Object} Props
	 * @property {import("svelte").Snippet} [children] Child content (snippet)
	 * @property {string | null} [message] Set an error message
	 * @property {string | null} [cls] Optional: Set an additional CSS class for the component
	 */
	/** @type {Props} */
	let { children, message = null, cls = null } = $props();
</script>

<div class="ons-panel ons-panel--error ons-panel--no-title {cls}" id="number-of-employees-error">
	<span class="ons-panel__assistive-text ons-u-vh">Error: </span>
	<div class="ons-panel__body">
		{#if message}
			<p class="ons-panel__error">
				<strong>{message}</strong>
			</p>
		{/if}
		{@render children?.()}
	</div>
</div>
