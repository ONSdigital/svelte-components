<script>
	import Container from "../../wrappers/Container/Container.svelte";

	/**
	 * An array of links in the format {label, href}
	 * @type {object[]}
	 */
	export let links = [];
	/**
	 * Optional: Link href if component is used for a single back-link
	 * @type {string}
	 */
	export let backHref = "";
	/**
	 * Sets the width of the container
	 * @type {"narrow"|"medium"|"wide"|"wider"|"full"}
	 */
	export let width = "wide";
	/**
	 * Optional: Set an additional CSS class for the component
	 * @type {string}
	 */
	export let cls = "";
	/**
	 * Overrides the base theme background (accepts any valid CSS background value)
	 * @type {string|null}
	 */
	export let background = null;
</script>

<Container {width} {background} {cls}>
	<nav class="ons-breadcrumbs" aria-label="Breadcrumbs">
		<ol class="ons-breadcrumbs__items ons-u-fs-s">
			{#each backHref ? [{ label: "Back", href: backHref }] : links as link}
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
						role="img"
						title="ons-icon-chevron"
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
