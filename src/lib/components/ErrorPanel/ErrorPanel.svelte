<script>
	/**
	 * Set an error message
	 * @type {string|null}
	 */
	export let message = null;
	/**
	 * Optional: Set an additional CSS class for the component
	 * @type {string|null}
	 */
	export let cls = null;
</script>

<div class="ons-panel ons-panel--error ons-panel--no-title {cls}" id="number-of-employees-error">
	<span class="ons-panel__assistive-text ons-u-vh">Error: </span>
	<div class="ons-panel__body">
		{#if message}
			<p class="ons-panel__error">
				<strong>{message}</strong>
			</p>
		{/if}
		<slot />
	</div>
</div>
