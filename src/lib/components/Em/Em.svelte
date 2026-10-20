<script>
	import { contrastColor } from "../../js/utils";

	/** @type {{ children?: import("svelte").Snippet; color?: string; mode?: "default" | "badge"; fontSize?: string | null; nowrap?: boolean; ariaLabel?: string | null }} */
	let {
		children,
		color = "lightgrey",
		mode = "default",
		fontSize = null,
		nowrap = true,
		ariaLabel = null
	} = $props();

	let text = $derived(contrastColor(color));
</script>

<mark
	class:ons-svelte-mark={mode === "default"}
	class:ons-svelte-badge={mode === "badge"}
	class:ons-u-nowrap={nowrap}
	style:background={color}
	style:color={text}
	style:font-size={fontSize}
	role="presentation"
	aria-label={ariaLabel}
>
	{@render children?.()}
</mark>

<style>
	.ons-svelte-mark {
		padding: 1px 4px 1px 4px;
	}
	.ons-svelte-badge {
		display: inline-block;
		line-height: 1;
		padding: 6px 8px;
		border-radius: 4px;
		box-shadow: none;
		transform: translateY(-4px);
	}
</style>
