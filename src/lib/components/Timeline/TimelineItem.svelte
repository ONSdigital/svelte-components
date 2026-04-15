<script>
	/**
	 * Title of timeline item
	 * @type {string|null}
	 */
	export let title = null;
</script>

<div class="ons-timeline__item">
	<h2 class="ons-timeline__heading">{title}</h2>
	<div class="ons-timeline__content">
		<slot />
	</div>
</div>
