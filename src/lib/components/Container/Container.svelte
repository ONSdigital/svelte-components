<script>
	import Theme from "$lib/components/Theme/Theme.svelte";

	/**
	 * @typedef {Object} Props
	 * @property {import("svelte").Snippet} [children] Child content (snippet)
	 * @property {string | null} [id] Optional: Set the unique ID of the container
	 * @property {string | null} [cls] Optional: Set an additional CSS class for the container
	 * @property {"narrow" | "medium" | "wide" | "wider" | "full"} [width] Sets the width of the container
	 * @property {number | string | null} [height] Sets the height of the container
	 * @property {boolean} [marginTop] Adds margin above container
	 * @property {boolean} [marginBottom] Adds margin below container
	 * @property {"light" | "dark" | "paleblue" | "blue" | "navyblue" | "grey" | null} [theme] Optional: Sets a base theme ("light", "dark" or null for no theme)
	 * @property {Record<string, string>} [themeOverrides] Optional: Define additional props to override the base theme
	 * @property {string | null} [background] Optional: Overrides the base theme background (accepts any valid CSS background value)
	 */
	/** @type {Props} */
	let {
		children,
		id = null,
		cls = null,
		width = "wide",
		height = null,
		marginTop = false,
		marginBottom = false,
		theme = null,
		themeOverrides = {},
		background = null
	} = $props();
</script>

<Theme {theme} overrides={themeOverrides} {background}>
	<div
		{id}
		class="ons-page__container {cls || ''}"
		class:ons-container={width !== "full"}
		class:ons-container--wide={width === "wider"}
		class:ons-u-mt-xl={marginTop}
		class:ons-u-mb-xl={marginBottom}
		style:height={typeof height === "number" ? `${height}px` : height === "full" ? "100vh" : height}
	>
		{#if width === "narrow"}
			<div class="ons-grid">
				<div class="ons-grid__col ons-col-10@m ons-col-8@l">
					{@render children?.()}
				</div>
			</div>
		{:else if width === "medium"}
			<div class="ons-grid">
				<div class="ons-grid__col ons-col-10@l">
					{@render children?.()}
				</div>
			</div>
		{:else}
			{@render children?.()}
		{/if}
	</div>
</Theme>
