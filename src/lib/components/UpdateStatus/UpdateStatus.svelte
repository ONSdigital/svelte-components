<script>
	/**
	 * Last updated date or label to display when the content is not recent
	 * @type {string|null}
	 */
	export let date = null;
	/**
	 * Whether the content has been updated recently
	 * @type {boolean}
	 */
	export let recent = false;
	/**
	 * Label used when recent is true
	 * @type {string}
	 */
	export let recentLabel = "Updated this week";
	/**
	 * Prefix used when showing the date
	 * @type {string}
	 */
	export let prefix = "Last updated:";
	/**
	 * Message shown when no date is available
	 * @type {string}
	 */
	export let missingLabel = "No update date provided";
	/**
	 * Whether to show the status dot for recent updates
	 * @type {boolean}
	 */
	export let showRecentDot = true;
	/**
	 * Optional: Set an additional CSS class for the component
	 * @type {string|null}
	 */
	export let cls = null;

	$: hasDate = typeof date === "string" ? date.trim().length > 0 : date != null;
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
