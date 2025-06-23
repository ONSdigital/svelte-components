<script>
	import { contrastColor } from "../../js/utils";

	/**
	 * Any valid CSS colour
	 * @type {string}
	 */
	export let color = "lightgrey";
	/**
	 * Any valid CSS colour (CSS variables will not be parsed)
	 * @type {"default"|"badge"}
	 */
	export let mode = "default";
	/**
	 * Override the font size of the surrounding text
	 * @type {string}
	 */
	export let fontSize = "";
	/**
	 * Don't break text across lines
	 * @type {boolean}
	 */
	export let nowrap = true;

	$: text = contrastColor(color);
</script>

<mark
	class:ons-svelte-mark={mode === "default"}
	class:ons-svelte-badge={mode === "badge"}
	class:ons-u-nowrap={nowrap}
	style:background-color={color}
	style:color={text}
	style:font-size={fontSize}
	role="presentation"
>
	<slot />
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
