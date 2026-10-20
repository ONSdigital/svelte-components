<script>
	/** @type {{ children?: import("svelte").Snippet; title?: string | null }} */
	let { children, title = null } = $props();
</script>

<div class="ons-timeline__item">
	<h2 class="ons-timeline__heading">{title}</h2>
	<div class="ons-timeline__content">
		{@render children?.()}
	</div>
</div>
