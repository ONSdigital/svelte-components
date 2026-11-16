<script>
	/**
	 * @typedef {Object} Props
	 * @property {string | null} [date] Last updated date or label to display when the content is not recent
	 * @property {boolean} [recent] Whether the content has been updated recently
	 * @property {string} [recentLabel] Label used when recent is true
	 * @property {string} [prefix] Prefix used when showing the date
	 * @property {string} [missingLabel] Message shown when no date is available
	 * @property {boolean} [showRecentDot] Whether to show the status dot for recent updates
	 * @property {string | null} [cls] Optional: Set an additional CSS class for the component
	 */
	/** @type {Props} */
	let {
		date = null,
		recent = false,
		recentLabel = "Updated this week",
		prefix = "Last updated:",
		missingLabel = "No update date provided",
		showRecentDot = true,
		cls = null
	} = $props();

	let hasDate = $derived(typeof date === "string" ? date.trim().length > 0 : date != null);
</script>

<div class="ons-update-status-container {cls}">
	<p
		class="ons-update-status ons-u-fs-s"
		class:ons-update-status--recent={recent}
		class:ons-update-status--missing={!recent && !hasDate}
	>
		{#if recent}
			{#if showRecentDot}
				<span class="ons-update-status__dot" aria-hidden="true"></span>
			{/if}
			<span>{recentLabel}</span>
		{:else if !hasDate}
			{missingLabel}
		{:else}
			{prefix} {date}
		{/if}
	</p>
</div>

<style>
	.ons-update-status-container {
		display: flex;
		justify-content: flex-end;
	}

	.ons-update-status {
		color: var(--ons-color-text-light);
		margin: 0;
	}

	.ons-update-status--recent {
		align-items: center;
		color: var(--ons-color-text);
		display: inline-flex;
		gap: 0.375rem;
	}

	.ons-update-status--missing {
		color: var(--ons-color-errors, #d4351c);
		text-align: right;
	}

	.ons-update-status__dot {
		background: #69e073;
		border-radius: 50%;
		display: inline-block;
		flex: 0 0 auto;
		height: 0.625rem;
		width: 0.625rem;
	}
</style>
