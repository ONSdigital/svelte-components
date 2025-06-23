<script>
	import themes from "./themes.js";

	/**
	 * Sets a base theme ("light", "dark" or null for no theme)
	 * @type {"light"|"dark"|"paleblue"|"blue"|"navyblue"|"grey"|null}
	 */
	export let theme = null;
	/**
	 * Define additional props to override the base theme
	 * @type {object}
	 */
	export let overrides = {};
	/**
	 * Overrides the base theme background (accepts any valid CSS background value)
	 * @type {string|null}
	 */
	export let background = null;
	/**
	 * Sets the theme at html body level (only use this at the top level)
	 * @type {boolean}
	 */
	export let global = false;
	/**
	 * Allows client imported CSS for embeddable content
	 * @type {boolean}
	 */
	export let allowClientOverrides = false;
	/**
	 * Optional: Set an additional CSS class for the theme container
	 * @type {string}
	 */
	export let cls = "";

	function makeStyle(theme, overrides) {
		if (theme) {
			const _theme = { ...themes[theme], ...overrides };
			return Object.keys(_theme)
				.map(
					(key) => `${key}:${_theme[key].startsWith("--") ? `var(${_theme[key]})` : _theme[key]};`
				)
				.join("");
		}
		return "";
	}
	$: style = makeStyle(theme, overrides);
</script>

<svelte:head>
	{#if global && (style || background)}
		{@html "<st" +
			`yle>:root{${style}background:${background || "var(--ons-color-page-light)"};color:var(--ons-color-text);</st` +
			"yle>"}
	{/if}
</svelte:head>

{#if global || !(theme || background)}
	<slot />
{:else}
	<div class="ons-svelte-theme-wrapper {cls}" {style} style:background>
		{#if allowClientOverrides}
			<div class="client-css-override" style:display="contents">
				<slot />
			</div>
		{:else}
			<slot />
		{/if}
	</div>
{/if}

<style>
	.ons-svelte-theme-wrapper {
		background: var(--ons-color-page-light);
		color: var(--ons-color-text);
	}
</style>
