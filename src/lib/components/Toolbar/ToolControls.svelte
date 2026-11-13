<script>
	import { getContext } from "svelte";
	const id = getContext("activeModalId");
</script>

{#if id}
	<slot />
{/if}
