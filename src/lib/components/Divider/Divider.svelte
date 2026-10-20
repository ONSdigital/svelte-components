<script>
	import Container from "$lib/components/Container/Container.svelte";

	/** @type {{ hr?: "narrow" | "full" | null; width?: "narrow" | "medium" | "wide" | "wider" | "full"; mode?: "dark" | "light"; marginTop?: boolean; marginBottom?: boolean; cls?: string | null }} */
	let {
		hr = "full",
		width = "wide",
		mode = "dark",
		marginTop = !!hr,
		marginBottom = true,
		cls = null
	} = $props();
</script>

<Container {width} {marginTop} {marginBottom} {cls}>
	<hr
		class="ons-u-mt-no"
		class:ons-u-vh={!hr}
		class:ons-svelte-hr-narrow={hr === "narrow"}
		class:ons-svelte-hr-light={hr && mode === "light"}
	/>
</Container>

<style>
	.ons-svelte-hr-narrow {
		width: 75px;
	}
	.ons-svelte-hr-light {
		border-color: var(--ons-color-borders-light);
	}
</style>
