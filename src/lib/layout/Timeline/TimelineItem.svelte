<script>
	/**
	 * Title of timeline item
	 * @type {string}
	 */
	export let title = "";
</script>

<div class="ons-timeline__item">
	<h2 class="ons-timeline__heading">{title}</h2>
	<div class="ons-timeline__content">
		<slot />
	</div>
</div>
