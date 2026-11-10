<script>
	import Divider from "$lib/components/Divider/Divider.svelte";

	/** @type {{ headingId: string; title: string; level?: "h2" | "h3"; id?: string; children?: import("svelte").Snippet }} */
	let { headingId, title, level = "h2", id, children } = $props();
</script>

<section {id} aria-labelledby={headingId} class="preview-section">
	<Divider width="full" mode="light" marginTop={false} marginBottom={false} />
	<header class="preview-section__heading">
		<svelte:element this={level} id={headingId}>{title}</svelte:element>
	</header>
	<div class="preview-section__content">
		{@render children?.()}
	</div>
</section>

<style>
	.preview-section {
		min-width: 0;
		scroll-margin-top: 1rem;
	}

	.preview-section__heading {
		border-left: 4px solid var(--ons-color-grey-75, #707070);
		background: var(--ons-color-grey-5, #f5f5f5);
		padding: 0.75rem 1rem;
	}

	.preview-section__heading :global(h2),
	.preview-section__heading :global(h3) {
		margin: 0;
		font-size: 1.25rem;
		line-height: 1.4;
		overflow-wrap: anywhere;
	}

	.preview-section__content {
		min-width: 0;
		padding: 1.25rem 0 1.75rem;
	}
</style>