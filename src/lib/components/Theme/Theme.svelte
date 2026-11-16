<script>
	import themes from "./themes.js";

	/** @typedef {keyof typeof themes | null} ThemeName */
	/**
	 * @typedef {Object} Props
	 * @property {import("svelte").Snippet} [children] Child content (snippet)
	 * @property {ThemeName} [theme] Sets a base theme ("light", "dark" or null for no theme)
	 * @property {Record<string, string>} [overrides] Define additional props to override the base theme
	 * @property {string | null} [background] Overrides the base theme background (accepts any valid CSS background value)
	 * @property {boolean} [global] Sets the theme at html body level (only use this at the top level)
	 * @property {boolean} [allowClientOverrides] Allows client imported CSS for embeddable content
	 * @property {string | null} [cls] Optional: Set an additional CSS class for the theme container
	 */
	/** @type {Props} */
	let {
		children,
		theme = null,
		overrides = {},
		background = null,
		global = false,
		allowClientOverrides = false,
		cls = null
	} = $props();

	/** @param {ThemeName} theme @param {Record<string, string>} overrides */
	function makeStyle(theme, overrides) {
		if (theme) {
			/** @type {Record<string, string>} */
			const _theme = { ...themes[theme], ...overrides };
			return Object.keys(_theme)
				.map(
					(key) => `${key}:${_theme[key].startsWith("--") ? `var(${_theme[key]})` : _theme[key]};`
				)
				.join("");
		}
		return "";
	}
	const style = $derived(makeStyle(theme, overrides));
</script>

<svelte:head>
	{#if global && (style || background)}
		{@html "<st" +
			`yle>:root{${style}background:${background || "var(--ons-color-page-light)"};color:var(--ons-color-text);</st` +
			"yle>"}
	{/if}
</svelte:head>

{#if global || !(theme || background)}
	{@render children?.()}
{:else}
	<div class="ons-svelte-theme-wrapper {cls}" {style} style:background>
		{#if allowClientOverrides}
			<div class="client-css-override" style:display="contents">
				{@render children?.()}
			</div>
		{:else}
			{@render children?.()}
		{/if}
	</div>
{/if}

<style>
	.ons-svelte-theme-wrapper {
		background: var(--ons-color-page-light);
		color: var(--ons-color-text);
	}
</style>
