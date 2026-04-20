<script>
	import { onMount, getContext } from "svelte";
	import Theme from "$lib/components/Theme/Theme.svelte";
	import SkipLink from "$lib/components/SkipLink/SkipLink.svelte";
	import HeaderNav from "./HeaderNav.svelte";
	import HeaderNavCompact from "./HeaderNavCompact.svelte";
	import HeaderNavLegacy from "./HeaderNavLegacy.svelte";

	const page = getContext("page");

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
	 * Display compact header without menus
	 * @type {boolean}
	 */
	export let compact = false;
	/**
	 * Include site search
	 * @type {boolean}
	 */
	export let search = true;
	/**
	 * Set to true to include an English/Welsh language link
	 * @type {boolean}
	 */
	export let bilingual = true;
	/**
	 * Include a border/line under the header. For use if hero is transparent
	 * @type {boolean}
	 */
	export let headerBorder = false;
	/**
	 * Include a border/line under the menu when open. For use if hero colour matches menu
	 * @type {boolean}
	 */
	export let menuBorder = false;
	/**
	 * Use the legacy nav header
	 * @type {boolean}
	 */
	export let legacy = false;
	/**
	 * Anchor link to skip to main body content (default "#main")
	 * @type {string|null}
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
		"Search the ONS": "Chwiliwch y SYG",
		Menu: "Dewislen",
		"Hide search": "Cuddio",
		"Office for National Statistics": "Swyddfa Ystadegau Gwladol",
		"Office for National Statistics logo": "Logo Swyddfa Ystadegau Gwladol",
		Homepage: "Hafan",
		"Search for a keyword(s) or time series ID": "Chwilio am allweddair neu ID cyfres amser",
		"Popular searches": "Chwiliadau poblogaidd",
		Cymraeg: "English",
		"Newid iaith i": "Change language to"
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
	<Theme
		{theme}
		overrides={themeOverrides}
		cls={["dark", "blue", "navyblue"].includes(theme) ? "dark-mode" : null}
	>
		<!-- <div id="pagePath" class="hide">{path}</div> -->
		<div class="ons-browser-banner">
			<div class="ons-container">
				<p class="ons-browser-banner__content">
					<span class="ons-browser-banner__lead">This website no longer supports your browser.</span
					><span class="ons-browser-banner__cta">
						You can <a class="ons-browser-banner__link" href="https://www.ons.gov.uk/help/browsers"
							>upgrade your browser to the latest version</a
						>.</span
					>
				</p>
			</div>
		</div>
		{#if compact}
			<HeaderNavCompact {headerBorder} {baseurl} {i18n} />
		{:else if !legacy}
			<HeaderNav
				{headerBorder}
				{menuBorder}
				{search}
				{bilingual}
				{lang}
				{baseurl}
				{baseother}
				{path}
				{i18n}
			/>
		{:else}
			<HeaderNavLegacy {search} {bilingual} {lang} {baseurl} {baseother} {path} {i18n} />
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
