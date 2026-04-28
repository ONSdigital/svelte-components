<script>
	import Container from "../Container/Container.svelte";

	/**
	 * Phase of project (alpha, beta, prototype etc.)
	 * @type {string}
	 */
	export let phase = "Beta";
	/**
	 * Message to describe the phase
	 * @type {string}
	 */
	export let description =
		phase === "Prototype" ? "This is a prototype." : "This is a new service.";
	/**
	 * URL of feedback form (relative or absolute)
	 * @type {string}
	 */
	export let href = "https://www.ons.gov.uk/feedback";
	/**
	 * Sets the width of the banner
	 * @type {"narrow"|"medium"|"wide"|"wider"|"full"}
	 */
	export let width = "wide";
	/**
	 * Optional: Set an additional CSS class for the component
	 * @type {string|null}
	 */
	export let cls = null;
</script>

<div class="ons-phase-banner {cls}" class:ons-phase-banner__full={width === "full"}>
	<Container {width}>
		<div
			class="ons-grid ons-grid-flex ons-grid--gutterless ons-grid-flex--vertical-center ons-grid-flex--no-wrap"
		>
			<div class="ons-grid__col ons-col-auto ons-u-flex-no-grow ons-u-flex-no-shrink">
				<strong class="ons-phase-banner__badge">{phase}</strong>
			</div>
			<div class="ons-grid__col ons-col-auto ons-u-flex-shrink">
				<p class="ons-phase-banner__desc ons-u-fs-s ons-u-mb-no">
					{description}
					{#if href}
						To help us improve it, <a
							{href}
							class="ons-external-link"
							target="_blank"
							rel="noopener"
						>
							<span class="ons-external-link__text">give feedback</span><span
								class="ons-external-link__icon"
								>&nbsp;<svg
									class="ons-icon"
									viewBox="0 0 12 12"
									xmlns="http://www.w3.org/2000/svg"
									focusable="false"
									aria-hidden="true"
									role="img"
									title="ons-icon-external-link"
								>
									<path
										d="M13.5,9H13a.5.5,0,0,0-.5.5v3h-9v-9h3A.5.5,0,0,0,7,3V2.5A.5.5,0,0,0,6.5,2h-4a.5.5,0,0,0-.5.5v11a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-4A.5.5,0,0,0,13.5,9Z"
										transform="translate(-2 -1.99)"
									/>
									<path
										d="M8.83,7.88a.51.51,0,0,0,.71,0l2.31-2.32,1.28,1.28A.51.51,0,0,0,14,6.49v-4a.52.52,0,0,0-.5-.5h-4A.51.51,0,0,0,9,2.52a.58.58,0,0,0,.14.33l1.28,1.28L8.12,6.46a.51.51,0,0,0,0,.71Z"
										transform="translate(-2 -1.99)"
									/>
								</svg></span
							><span class="ons-external-link__new-window-description ons-u-vh"
								>(opens in a new tab)</span
							></a
						>
					{/if}
				</p>
			</div>
		</div>
	</Container>
</div>

<style>
	.ons-phase-banner__full :global(.ons-page__container) {
		padding: 0 12px;
	}
</style>
