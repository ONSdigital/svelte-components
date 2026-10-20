<script>
	/** @type {{ children?: import("svelte").Snippet; message?: string | null; cls?: string | null }} */
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
