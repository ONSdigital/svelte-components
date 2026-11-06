<script>
	import Theme from "$lib/components/Theme/Theme.svelte";

	/** @type {{ children?: import("svelte").Snippet; id?: string | null; cls?: string | null; width?: "narrow" | "medium" | "wide" | "wider" | "full"; height?: number | string | null; marginTop?: boolean; marginBottom?: boolean; theme?: "light" | "dark" | "paleblue" | "blue" | "navyblue" | "grey" | null; themeOverrides?: Record<string, string>; background?: string | null }} */
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
