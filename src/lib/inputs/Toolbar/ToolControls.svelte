<script>
	import { getContext } from "svelte";
	const activeModalId = getContext("activeModalId");
	const id = $derived(activeModalId);
</script>

{#if id}
	<slot />
{/if}
