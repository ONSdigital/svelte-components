<script>
	/**
	 * Total number of pages
	 * @type {number}
	 */
	export let pageCount = 1;
	/**
	 * Number of the current page
	 * @type {number}
	 */
	export let pageCurrent = 1;
	/**
	 * URL of next page (use null if on last page)
	 * @type {string|null}
	 */
	export let nextHref = null;
	/**
	 * URL of previous page (use null if on first page)
	 * @type {string|null}
	 */
	export let prevHref = null;
	/**
	 * (Optional) title of next page (with no label, will default to 'page {x-1} of {n}')
	 * @type {string|null}
	 */
	export let nextTitle = null;
	/**
	 * (Optional) title of previous page (with no label, will default to 'page {x+1} of {n}')
	 * @type {string|null}
	 */
	export let prevTitle = null;
</script>

<nav class="ons-content-pagination" aria-label="Guide pagination">
	<ul class="ons-content-pagination__list">
		{#if prevHref}
			<li class="ons-content-pagination__item">
				<a href={prevHref} class="ons-content-pagination__link" rel="prev">
					<span class="ons-content-pagination__link-title"
						><svg
							class="ons-icon ons-icon--m"
							viewBox="0 0 17 13"
							xmlns="http://www.w3.org/2000/svg"
							focusable="false"
							fill="currentColor"
							role="img"
							title="ons-icon-arrow-previous"
						>
							<path
								d="M6.4.2.3 6.4c-.2.2-.2.4 0 .6l6.2 5.8c.2.2.4.1.6 0l.8-.9c.2-.2.1-.4 0-.6l-4-3.7h12.5c.2 0 .4-.2.4-.4V6c0-.2-.2-.4-.4-.4H3.8l4-4c.2-.1.2-.4.1-.5L7 .2c-.1-.1-.4-.1-.6 0z"
							/>
						</svg><span class="ons-content-pagination__link-text">Previous page</span>
					</span>
					<span class="ons-content-pagination__link-label"
						>{prevTitle || `${pageCurrent - 1} of ${pageCount}`}</span
					>
				</a>
			</li>
		{/if}
		{#if nextHref}
			<li class="ons-content-pagination__item">
				<a href={nextHref} class="ons-content-pagination__link" rel="next">
					<span class="ons-content-pagination__link-title">
						<svg
							class="ons-icon ons-icon--m"
							viewBox="0 0 17 13"
							xmlns="http://www.w3.org/2000/svg"
							focusable="false"
							fill="currentColor"
							role="img"
							title="ons-icon-arrow-next"
						>
							<path
								d="m10 .2-.9.9c-.1.1-.1.4 0 .5l4 4H.6c-.2 0-.4.2-.4.4v1.2c0 .2.2.4.4.4h12.5l-3.9 3.7c-.2.2-.2.4 0 .6l.8.9c.2.2.4.2.6 0L16.8 7c.2-.2.2-.4 0-.6L10.7.3c-.3-.2-.5-.2-.7-.1z"
							/>
						</svg><span class="ons-content-pagination__link-text">Next page</span>
					</span>
					<span class="ons-content-pagination__link-label"
						>{nextTitle || `${pageCurrent + 1} of ${pageCount}`}</span
					>
				</a>
			</li>
		{/if}
	</ul>
</nav>
