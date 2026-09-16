<script>
	/**
	 * Highlighted change value, for example "7%" or "1.3pp"
	 * @type {string|number|null}
	 */
	export let value = null;
	/**
	 * Direction of change
	 * @type {"up"|"down"|"neutral"}
	 */
	export let direction = "neutral";
	/**
	 * Optional override for the descriptive label
	 * @type {string|null}
	 */
	export let label = null;
	/**
	 * Optional trailing context, for example "than last year"
	 * @type {string|null}
	 */
	export let context = null;
	/**
	 * Optional colour treatment
	 * @type {"default"|"positive"|"negative"|"subtle"}
	 */
	export let tone = "default";
	/**
	 * Optional: Set an additional CSS class for the component
	 * @type {string|null}
	 */
	export let cls = null;

	const directionLabels = {
		up: "higher",
		down: "lower",
		neutral: "unchanged"
	};

	$: hasValue = value !== null && value !== undefined && `${value}`.trim().length > 0;
	$: resolvedLabel = label || directionLabels[direction] || "";
</script>

<p
	class="ons-change-stat ons-u-fs-r {cls}"
	class:ons-change-stat--direction-up={direction === "up"}
	class:ons-change-stat--direction-down={direction === "down"}
	class:ons-change-stat--direction-neutral={direction === "neutral"}
	class:ons-change-stat--tone-positive={tone === "positive"}
	class:ons-change-stat--tone-negative={tone === "negative"}
	class:ons-change-stat--tone-subtle={tone === "subtle"}
>
	<span class="ons-change-stat__leading">
		{#if direction === "neutral" && hasValue}
			<svg
				class="ons-change-stat__icon"
				width="14"
				height="16"
				viewBox="0 0 12 14"
				aria-hidden="true"
			>
				<path d="M2 7H10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
			</svg>
		{:else if direction !== "neutral"}
			<svg
				class="ons-change-stat__icon"
				class:ons-change-stat__icon--down={direction === "down"}
				width="14"
				height="16"
				viewBox="0 0 12 14"
				aria-hidden="true"
			>
				<path
					d="M5.5 1.5L5.5 12.5M5.5 1.5L9.5 5.5M5.5 1.5L1.5 5.5"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		{/if}
		{#if hasValue}
			<span class="ons-change-stat__value">{value}</span>
		{/if}
		<span>{resolvedLabel}</span>
	</span>
	{#if context}
		<span class="ons-change-stat__context">{context}</span>
	{/if}
</p>

<style>
	.ons-change-stat {
		--ons-change-stat-accent: #c14e01;
		--ons-change-stat-background: rgb(247, 223, 207);
		--ons-change-stat-context: var(--ons-color-text-light);
		--ons-change-stat-text: var(--ons-color-text);
		align-items: center;
		border-radius: 0.125rem;
		background: var(--ons-change-stat-background);
		color: var(--ons-change-stat-text);
		display: inline-flex;
		flex-wrap: wrap;
		gap: 0.125rem 0.25rem;
		margin: 0;
		padding: 0.625rem 0.875rem;
	}

	.ons-change-stat__leading {
		align-items: center;
		display: inline-flex;
		flex-wrap: wrap;
		gap: 0.375rem;
	}

	.ons-change-stat__icon {
		color: var(--ons-change-stat-accent);
		display: block;
		flex: 0 0 auto;
	}

	.ons-change-stat__icon--down {
		transform: rotate(180deg);
	}

	.ons-change-stat__value {
		font-size: 1.75rem;
		font-weight: 700;
		line-height: 1;
	}

	.ons-change-stat__context {
		color: var(--ons-change-stat-context);
	}

	.ons-change-stat--tone-positive {
		--ons-change-stat-accent: #0b6a0b;
		--ons-change-stat-background: rgb(207, 225, 198);
	}

	.ons-change-stat--tone-negative {
		--ons-change-stat-accent: var(--ons-color-errors, #d4351c);
		--ons-change-stat-background: rgb(247, 223, 207);
	}

	.ons-change-stat--tone-subtle {
		--ons-change-stat-accent: var(--ons-color-text);
		--ons-change-stat-background: var(--ons-color-grey-10, #f3f2f1);
		--ons-change-stat-context: var(--ons-color-text);
	}

	.ons-change-stat--direction-up {
		--ons-change-stat-accent: #c14e01;
		--ons-change-stat-background: rgb(247, 223, 207);
	}

	.ons-change-stat--direction-down {
		--ons-change-stat-accent: #4f4b96;
		--ons-change-stat-background: rgb(221, 218, 242);
	}

	.ons-change-stat--direction-neutral {
		--ons-change-stat-accent: var(--ons-color-text);
		--ons-change-stat-background: rgb(230, 230, 230);
		--ons-change-stat-context: var(--ons-color-text);
	}
</style>
