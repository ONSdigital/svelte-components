<script>
	/** @type {{ children?: import("svelte").Snippet; id?: string }} */
	let { children, id = "main" } = $props();
</script>

<main {id}>
	{@render children?.()}
</main>
