<script>
	import { onMount, getContext } from "svelte";
	import initNav from "./nav.js";
	import Theme from "$lib/components/Theme/Theme.svelte";
	import Container from "../Container/Container.svelte";
	import SkipLink from "$lib/components/SkipLink/SkipLink.svelte";
	import HeaderNav from "./HeaderNav.svelte";
	import HeaderNavCompact from "./HeaderNavCompact.svelte";
	import HeaderNavLegacy from "./HeaderNavLegacy.svelte";

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
	 * Sets the width of the header (does not apply to legacy mode)
	 * @type {"narrow"|"medium"|"wide"|"wider"|"full"}
	 */
	export let width = "wide";
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
	 * Optional: Pass the "page" store from "$app/state" in SvelteKit (gets read from context by default if it exists)
	 * @type {any}
	 */
	export let page = getContext("page");
	/**
	 * Anchor link to skip to main body content (default "#main")
	 * @type {string|null}
	 */
	export let skipHref = "#main";
	/**
	 * Optional: Nav links below title (only works in combination with title block). An array of links in the format {label, href}
	 * @type {{label: string, href: string}[]|null}
	 */
	export let navLinks = null;

	let el; // Header HTML element

	let url = null;
	let lang = "en";
	let baseurl = "https://www.ons.gov.uk";
	let baseother = "https://cy.ons.gov.uk";
	let path = "";

	function setPaths() {
		url = page?.url || document.location;
		lang = url.host.startsWith("cy") ? "cy" : "en";
		baseurl = lang === "cy" ? "https://cy.ons.gov.uk" : "https://www.ons.gov.uk";
		baseother = lang === "cy" ? "https://www.ons.gov.uk" : "https://cy.ons.gov.uk";
		path = url.pathname;
	}

	function getActiveLink(navLinks, path) {
		const candidates = navLinks.filter((link) => path.endsWith(link.href));
		return candidates.length ? candidates[candidates.length - 1] : null;
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
	$: activeLink =
		Array.isArray(navLinks) && url?.pathname ? getActiveLink(navLinks, url.pathname) : null;

	onMount(() => {
		setPaths();

		if ((!compact && !legacy) || (title && Array.isArray(navLinks))) {
			const hasBodyClass = "className" in document.body || {};
			const bodyClassString = document.body?.className || "";
			if (hasBodyClass && !bodyClassString.includes("ons-js-enabled"))
				document.body.className = bodyClassString + " ons-js-enabled";
			initNav(el?.parentElement || document);
		}
	});
</script>

<header
	class="ons-header"
	class:ons-header--basic={!compact && !legacy}
	class:ons-header__full={width === "full"}
	role="banner"
	bind:this={el}
>
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
			<Container {width}>
				<p class="ons-browser-banner__content">
					<span class="ons-browser-banner__lead">This website no longer supports your browser.</span
					><span class="ons-browser-banner__cta">
						You can <a class="ons-browser-banner__link" href="https://www.ons.gov.uk/help/browsers"
							>upgrade your browser to the latest version</a
						>.</span
					>
				</p>
			</Container>
		</div>
		{#if compact}
			<HeaderNavCompact {width} {headerBorder} {baseurl} {i18n} />
		{:else if !legacy}
			<HeaderNav
				{width}
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
				<Container {width}>
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
						{#if Array.isArray(navLinks)}
							<div class="ons-grid__col ons-col-auto ons-u-flex-no-shrink ons-u-d-no@l">
								<button
									type="submit"
									class="ons-btn ons-u-ml-2xs ons-u-d-no ons-js-navigation-button ons-u-d-no@l ons-btn--mobile ons-btn--ghost"
									aria-label="Toggle main menu"
									aria-controls="main-nav"
									aria-expanded="false"
								>
									<span class="ons-btn__inner"
										><span class="ons-btn__text">Menu</span><svg
											class="ons-icon ons-u-ml-2xs"
											viewBox="0 0 8 13"
											xmlns="http://www.w3.org/2000/svg"
											focusable="false"
											fill="currentColor"
											role="img"
											aria-hidden="true"
										>
											<path
												d="M5.74,14.28l-.57-.56a.5.5,0,0,1,0-.71h0l5-5-5-5a.5.5,0,0,1,0-.71h0l.57-.56a.5.5,0,0,1,.71,0h0l5.93,5.93a.5.5,0,0,1,0,.7L6.45,14.28a.5.5,0,0,1-.71,0Z"
												transform="translate(-5.02 -1.59)"
											/>
										</svg></span
									>
								</button>
							</div>
						{/if}
					</div>
				</Container>
			</div>
			{#if Array.isArray(navLinks)}
				<div class="ons-navigation-wrapper">
					<Container {width}>
						<nav
							class="ons-navigation ons-navigation--main ons-js-navigation"
							id="main-nav"
							aria-label="Main menu"
							data-analytics="header-navigation"
						>
							<ul class="ons-navigation__list">
								{#each navLinks as link (link.href)}
									<li
										class="ons-navigation__item"
										class:ons-navigation__item--active={activeLink?.href === link.href}
									>
										<a class="ons-navigation__link" href={link.href}> {link.label} </a>
									</li>
								{/each}
							</ul>
						</nav>
					</Container>
				</div>
			{/if}
		{/if}
	</Theme>
</header>

<style>
	.ons-header__full :global(.ons-page__container) {
		padding: 0 12px;
	}
</style>
