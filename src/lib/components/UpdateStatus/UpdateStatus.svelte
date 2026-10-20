<script>
	/** @type {{ date?: string | null; recent?: boolean; recentLabel?: string; prefix?: string; missingLabel?: string; showRecentDot?: boolean; cls?: string | null }} */
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
