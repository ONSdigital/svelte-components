<script>
	import Container from "$lib/components/Container/Container.svelte";

	/**
	 * @typedef {Object} Props
	 * @property {{ label: string; href?: string }[]} [links] - An array of links in the format {label, href}
	 * @property {string|null} [backHref] - Optional: Link href if component is used for a single back-link
	 * @property {"narrow"|"medium"|"wide"|"wider"|"full"} [width] - Sets the width of the container
	 * @property {string|null} [cls] - Optional: Set an additional CSS class for the component
	 * @property {"light"|"dark"|"paleblue"|"blue"|"navyblue"|"grey"|null} [theme] - Optional: Sets a base theme ("light", "dark", null etc)
	 * @property {Record<string, string>} [themeOverrides] - Optional: Define additional props to override the base theme
	 * @property {string|null} [background] - Optional: Overrides the base theme background (accepts any valid CSS background value)
	 */

	/** @type {Props} */
	let {
		links = [],
		backHref = null,
		width = "wide",
		cls = null,
		theme = null,
		themeOverrides = {},
		background = null
	} = $props();
</script>

<Container {width} {theme} {themeOverrides} {background} {cls}>
	<nav class="ons-breadcrumbs" aria-label="Breadcrumbs">
		<ol class="ons-breadcrumbs__items ons-u-fs-s">
			{#each backHref ? [{ label: "Back", href: backHref }] : links as link, index (index)}
				<li class="ons-breadcrumbs__item">
					{#if link.href}
						<a class="ons-breadcrumbs__link" href={link.href}>{link.label}</a>
					{:else}
						{link.label}
					{/if}
					<svg
						class="ons-icon"
						viewBox="0 0 8 13"
						xmlns="http://www.w3.org/2000/svg"
						focusable="false"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							d="M5.74,14.28l-.57-.56a.5.5,0,0,1,0-.71h0l5-5-5-5a.5.5,0,0,1,0-.71h0l.57-.56a.5.5,0,0,1,.71,0h0l5.93,5.93a.5.5,0,0,1,0,.7L6.45,14.28a.5.5,0,0,1-.71,0Z"
							transform="translate(-5.02 -1.59)"
						/>
					</svg>
				</li>
			{/each}
		</ol>
	</nav>
</Container>
