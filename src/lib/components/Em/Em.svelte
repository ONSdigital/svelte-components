<script>
	import { contrastColor } from "../../js/utils";

	/**
	 * @typedef {Object} Props
	 * @property {import("svelte").Snippet} [children] Child content (snippet)
	 * @property {string} [color] Any valid CSS colour
	 * @property {"default" | "badge"} [mode] Any valid CSS colour (CSS variables will not be parsed)
	 * @property {string | null} [fontSize] Override the font size of the surrounding text
	 * @property {boolean} [nowrap] Don't break text across lines
	 * @property {string | null} [ariaLabel] Descriptive text for screen readers if not self-explanatory
	 */
	/** @type {Props} */
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
