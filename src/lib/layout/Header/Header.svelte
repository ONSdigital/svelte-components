<script>
	import { onMount, getContext } from "svelte";
	import Theme from "$lib/wrappers/Theme/Theme.svelte";
	import SkipLink from "$lib/layout/SkipLink/SkipLink.svelte";
	import HeaderNav from "./HeaderNav.svelte";
	import HeaderNavLegacy from "./HeaderNavLegacy.svelte";

	const page = getContext("page");

	/**
	 * Display compact header without menus
	 * @type {boolean}
	 */
	export let compact = false;
	/**
	 * Use the legacy nav header
	 * @type {boolean}
	 */
	export let legacy = true;
	/**
	 * Optional product title
	 * @type {string|null}
	 */
	export let title = null;
	/**
	 * Optional link for product title
	 * @type {string|null}
	 */
	export let titleHref = null;
	/**
	 * Sets a predefined theme
	 * @type {"light"|"dark"|"paleblue"|"blue"|"navyblue"|"grey"|null}
	 */
	export let theme = null;
	/**
	 * Define additional props to override the base theme
	 * @type {object}
	 */
	export let themeOverrides = {};
	/**
	 * Set to true to include an English/Welsh language link
	 * @type {boolean}
	 */
	export let bilingual = true;
	/**
	 * Anchor link to skip to main body content (default "#main")
	 * @type {string}
	 */
	export let skipHref = "#main";

	let lang = "en";
	let baseurl = "https://www.ons.gov.uk";
	let baseother = "https://cy.ons.gov.uk";
	let path = "";

	function setPaths() {
		const url = page?.url || document.location;
		lang = url.host.startsWith("cy") ? "cy" : "en";
		baseurl = lang === "cy" ? "https://cy.ons.gov.uk" : "https://www.ons.gov.uk";
		baseother = lang === "cy" ? "https://www.ons.gov.uk" : "https://cy.ons.gov.uk";
		path = url.pathname;
	}

	const texts = {
		Home: "Hafan",
		Search: "Chwilio",
		Menu: "Dewislen",
		"Hide search": "Cuddio",
		"Office for National Statistics logo": "Logo Swyddfa Ystadegau Gwladol",
		Homepage: "Hafan",
		"Search for a keyword(s) or time series ID": "Chwilio am allweddair neu ID cyfres amser"
	};

	$: i18n = (text) => (lang === "cy" && texts[text] ? texts[text] : text);

	onMount(() => {
		setPaths();
	});
</script>

<header class="ons-header" role="banner">
	{#if skipHref}
		<SkipLink href={skipHref} />
	{/if}
	<slot name="before" />
	<Theme {theme} overrides={themeOverrides}>
		<!-- <div id="pagePath" class="hide">{path}</div> -->
		{#if legacy && !compact}
			<HeaderNavLegacy {bilingual} {lang} {baseurl} {baseother} {path} {i18n} />
		{:else}
			<HeaderNav {compact} {title} {baseurl} {i18n} />
		{/if}
		{#if title}
			<div class="ons-header__main">
				<div class="ons-container">
					<div
						class="ons-grid ons-grid-flex ons-grid-flex--between ons-grid-flex--vertical-center ons-grid-flex--no-wrap ons-grid--gutterless"
					>
						<div class="ons-grid__col ons-col-auto ons-u-flex-shrink">
							{#if titleHref}
								<a class="ons-header__title-link" href={titleHref}>
									<div class="ons-header__title">{title}</div>
								</a>
							{:else}
								<div class="ons-header__title">{title}</div>
							{/if}
						</div>
					</div>
				</div>
			</div>
		{/if}
	</Theme>
</header>

<style>
	.ons-header__top {
		background: var(--ons-color-page-light);
	}
	.ons-icon--logo__group--primary,
	.ons-icon--logo__group--text {
		fill: var(--ons-color-text-link-hover);
	}
	.ons-header__top--compact {
		border-bottom: 1px solid var(--ons-color-borders);
	}
</style>
