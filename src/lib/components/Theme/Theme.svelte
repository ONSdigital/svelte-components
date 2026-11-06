<script>
	import themes from "./themes.js";

	/** @typedef {keyof typeof themes | null} ThemeName */
	/** @type {{ children?: import("svelte").Snippet; theme?: ThemeName; overrides?: Record<string, string>; background?: string | null; global?: boolean; allowClientOverrides?: boolean; cls?: string | null }} */
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
