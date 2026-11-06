<script>
	import "$lib/css/main.css";
	import Main from "$lib/components/Main/Main.svelte";
	import ErrorPage from "$lib/components/ErrorPage/ErrorPage.svelte";
	let mode = $state("main");
</script>

<svelte:head><title>Main and ErrorPage workbench</title></svelte:head>
<div class="controls">
	<label for="landmark-mode">Page view</label><select id="landmark-mode" bind:value={mode}
		><option value="main">Main</option><option value="404">Not found</option><option value="500"
			>Service error</option
		></select
	>
</div>
{#if mode === "main"}
	<Main id="landmark-main"
		><h1>Article content</h1>
		<p>Main child snippet</p></Main
	>
{:else}
	<ErrorPage width="full" status={Number(mode)} />
{/if}

<style>
	.controls {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 1rem;
	}
	:global(main) {
		padding: 0 1rem;
	}
</style>
