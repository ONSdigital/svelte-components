<script>
	import { run } from "svelte/legacy";

	import { onMount, getContext } from "svelte";
	import initNav from "./nav.js";
	import Theme from "$lib/components/Theme/Theme.svelte";
	import Container from "../Container/Container.svelte";
	import SkipLink from "$lib/components/SkipLink/SkipLink.svelte";
	import HeaderNav from "./HeaderNav.svelte";
	import HeaderNavCompact from "./HeaderNavCompact.svelte";
	import HeaderNavLegacy from "./HeaderNavLegacy.svelte";

	/**
	 * @typedef {Object} Props
	 * @property {string|null} [title] - Optional product title
	 * @property {string|null} [titleHref] - Optional link for product title
	 * @property {"narrow"|"medium"|"wide"|"wider"|"full"} [width] - Sets the width of the header (does not apply to legacy mode)
	 * @property {"light"|"dark"|"paleblue"|"blue"|"navyblue"|"grey"|null} [theme] - Sets a predefined theme
	 * @property {object} [themeOverrides] - Define additional props to override the base theme
	 * @property {string|null} [cls] - Optional: Set an additional CSS class for the container
	 * @property {boolean} [compact] - Display compact header without menus
	 * @property {boolean} [search] - Include site search
	 * @property {boolean} [bilingual] - Set to true to include an English/Welsh language link
	 * @property {boolean} [headerBorder] - Include a border/line under the header. For use if hero is transparent
	 * @property {boolean} [menuBorder] - Include a border/line under the menu when open. For use if hero colour matches menu
	 * @property {boolean} [legacy] - Use the legacy nav header
	 * @property {any} [page] - Optional: Pass the "page" state from "$app/state" in SvelteKit (gets read from context by default if it exists)
	 * @property {string|null} [skipHref] - Anchor link to skip to main body content (default "#main")
	 * @property {{label: string, href: string}[]|null} [navLinks] - Optional: Nav links below title (only works in combination with title block). An array of links in the format {label, href}
	 * @property {import('svelte').Snippet} [before]
	 * @property {import('svelte').Snippet} [after]
	 */

	/** @type {Props} */
	let {
		title = null,
		titleHref = null,
		width = "wide",
		theme = null,
		themeOverrides = {},
		cls = null,
		compact = false,
		search = true,
		bilingual = true,
		headerBorder = false,
		menuBorder = false,
		legacy = false,
		page = getContext("page"),
		skipHref = "#main",
		navLinks = null,
		before,
		after
	} = $props();

	let el = $state(); // Header HTML element

	let lang = $state("en");
	let baseurl = $state("https://www.ons.gov.uk");
	let baseother = $state("https://cy.ons.gov.uk");
	let path = $state("");
	let activeLink = $state(null);

	function setPaths(page) {
		if (!page) return;
		const url = page.url;
		lang = url.host.startsWith("cy") ? "cy" : "en";
		baseurl = lang === "cy" ? "https://cy.ons.gov.uk" : "https://www.ons.gov.uk";
		baseother = lang === "cy" ? "https://www.ons.gov.uk" : "https://cy.ons.gov.uk";
		path = url.pathname;
		activeLink = Array.isArray(navLinks) ? getActiveLink(navLinks, path) : null;
	}

	function getActiveLink(navLinks, path) {
		const candidates = navLinks.filter((link) => path.includes(link.href));
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
	let i18n = $derived((text) => (lang === "cy" && texts[text] ? texts[text] : text));

	onMount(() => {
		setPaths(page || { url: document?.location });

		if ((!compact && !legacy) || (title && Array.isArray(navLinks))) {
			document.body.classList.add("ons-js-enabled");
			return initNav(el || document);
		}
	});
	run(() => {
		setPaths(page);
	});
</script>

<header
	class="ons-header {cls}"
	class:ons-header--basic={!compact && !legacy}
	class:ons-header__full={width === "full"}
	role="banner"
	bind:this={el}
>
	{#if skipHref}
		<SkipLink href={skipHref} />
	{/if}
	{@render before?.()}
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
	{@render after?.()}
</header>

<style>
	.ons-header__full :global(.ons-page__container) {
		padding: 0 12px;
	}
</style>
