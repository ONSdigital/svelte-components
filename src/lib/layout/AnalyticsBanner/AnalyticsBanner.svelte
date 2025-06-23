<script context="module">
	export function analyticsEvent(props) {
		if (window?.dataLayer) window.dataLayer.push(props);
	}
</script>

<script>
	import { onMount, getContext } from "svelte";

	/**
	 * Google analytics/tags manager ID
	 * @type {string}
	 */
	export let analyticsId = "GTM-MBCBVQS";
	/**
	 * Optional props to describe the content
	 * @type {object}
	 */
	export let analyticsProps = {};
	/**
	 * Optional: Pass the "page" store from "$app/state" in SvelteKit (gets read from context by default if it exists)
	 * @type {any}
	 */
	export let page = getContext("page");
	/**
	 * Use this to hide the banner (only initialises analytics if cookies already accepted)
	 * @type {boolean}
	 */
	export let hideBanner = false;
	/**
	 * Bind to this value if you need to know if cookies have been accepted
	 * @type {boolean}
	 */
	export let usageCookies = false;
	/**
	 * Set the width of the banner
	 * @type {"wide"|"wider"}
	 */
	export let width = "wide";
	/**
	 * Enable automatic pageView event on route changes
	 * @type {boolean}
	 */
	export let pageViewEnabled = true;

	let live; // Don't run analytics unless page is live on ONS site (re-set in the onMount function)
	let showBanner = false;
	let showConfirm = false;
	let message = "";
	let lang = "en";
	let baseurl = "https://www.ons.gov.uk";
	let location = null; // For keeping track of navigation multi-page apps

	function setPaths() {
		const url = page?.url || document.location;
		lang = url.host.startsWith("cy") ? "cy" : "en";
		baseurl = lang === "cy" ? "https://cy.ons.gov.uk" : "https://www.ons.gov.uk";
	}

	function hasCookiesPreferencesSet() {
		return -1 < document.cookie.indexOf("ons_cookie_message_displayed=true");
	}

	// extractValue extracts the value from a undecodeable json cookie string
	function extractValue(key, extractionString) {
		const extractionRegex = new RegExp(`'${key}':(.*?)[,}]`);
		const match = extractionString.match(extractionRegex);
		if (match) {
			return match[1];
		}

		return null;
	}

	// Check if usage cookies are allowed (for Google Analytics + Hotjar)
	// note: this ported function returns the inverse truth value to the dp-renderer code that it's based on
	// ----------------------
	// getUsageCookieValue reads the legacy cookies_policy and ons_cookie_policy to determine the user's usage preference.
	// The legacy policy takes precedence over the new policy. When no policy is found, the user is opted out by default.
	function getUsageCookieValue() {
		// TODO: this is the legacy cookie (cookies_policy) handling and will be removed in due course
		var legacyPolicyCookie = document.cookie.match(
			new RegExp("(^|;) ?cookies_policy=([^;]*)(;|$)")
		);
		if (legacyPolicyCookie) {
			console.debug("legacy cookies_policy found");
			var decodedCookie = decodeURIComponent(legacyPolicyCookie[2]);
			var cookieValue = JSON.parse(decodedCookie);
			console.debug("usage is", cookieValue.usage);
			return cookieValue.usage;
		}

		// ons_cookie_policy handler
		var policyCookie = document.cookie.match("(?:^|; )ons_cookie_policy=({.*?})");
		if (policyCookie) {
			console.debug("ons_cookie_policy found");

			var usageValue = extractValue("usage", policyCookie[1]);
			console.debug("usage is", usageValue);

			return usageValue === "true";
		}
		console.debug("no cookie found - opting out");
		return false;
	}

	// Set site cookie with 'all' or 'essential' cookies
	function setCookie(option) {
		let oneYearInSeconds = 60 * 60 * 24 * 365;
		let cookiesDomain = window.location.hostname;
		let cookiesPreference = !0;
		let acceptAllCookiesPolicy = `{'essential':true,'settings':true,'usage':true,'campaigns':true}`;
		let rejectAllCookiesPolicy = `{'essential':true,'settings':false,'usage':false,'campaigns':false}`;
		let cookiesPolicy = option == "all" ? acceptAllCookiesPolicy : rejectAllCookiesPolicy;
		let cookiesPath = "/";

		document.cookie = `ons_cookie_message_displayed=${cookiesPreference};max-age=${oneYearInSeconds};domain=${cookiesDomain};path=${cookiesPath};`;
		document.cookie = `ons_cookie_policy=${cookiesPolicy};max-age=${oneYearInSeconds};domain=${cookiesDomain};path=${cookiesPath};`;

		message = `You have ${option == "all" ? "accepted" : "rejected"} all additional cookies.`;
		if (option == "all") usageCookies = true;
		showConfirm = true;

		if (option == "all") initAnalytics();
	}

	// Initialise analytics and 'window.dataLayer' (which can be used throughout the app)
	function initAnalytics() {
		console.log("initialising analytics");
		window.dataLayer = [
			{
				analyticsOptOut: false,
				"gtm.whitelist": ["google", "hjtc", "lcl"],
				"gtm.blacklist": ["customScripts", "sp", "adm", "awct", "k", "d", "j"],
				...analyticsProps
			}
		];

		(function (w, d, s, l, i) {
			w[l] = w[l] || [];
			w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
			var f = d.head,
				j = d.createElement(s),
				dl = l != "dataLayer" ? "&l=" + l : "";
			j.async = true;
			j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
			f.appendChild(j);
		})(window, document, "script", "dataLayer", analyticsId);

		if ($page) location = `${$page.url.href}`.replace($page.url.hash, "");
	}

	// This code is only relevant for multi-page Svelte Kit apps. It sends an analytics event when the URL changes
	function onPageChange(page) {
		if (page && location) {
			const newlocation = `${page.url.href}`.replace(page.url.hash, "");
			if (newlocation !== location) {
				location = newlocation;
				analyticsEvent({
					event: "pageView",
					pageURL: location,
					...analyticsProps
				});
			}
		}
	}
	$: if (pageViewEnabled) onPageChange($page);

	onMount(() => {
		setPaths();
		live = true;
		//live = document.location.hostname == "www.ons.gov.uk" || document.location.hostname == "cy.ons.gov.uk";
		if (!page) lang = document.location.host.startsWith("cy") ? "cy" : "en";
		showBanner = !hasCookiesPreferencesSet();
		usageCookies = getUsageCookieValue();
		if (usageCookies && live) initAnalytics();
	});

	const texts = {
		"Cookies on ons.gov.uk": "Cwcis ar ons.gov.uk",
		"Cookies are small files stored on your device when you visit a website. We use some essential cookies to make this website work.":
			"Ffeiliau bach a gaiff eu storio ar eich dyfais pan fyddwch yn mynd ar wefan yw cwcis. Rydym ni’n defnyddio rhai cwcis hanfodol i wneud i’r wefan hon weithio.",
		"We would like to set": "Hoffem osod",
		"additional cookies": "cwcis ychwanegol",
		"to remember your settings and understand how you use the site. This helps us to improve our services.":
			"er mwyn cofio eich gosodiadau a deall sut rydych chi’n defnyddio’r wefan. Mae hyn yn ein helpu ni i wella ein gwasanaethau.",
		"Accept additional cookies": "Derbyn cwcis ychwanegol",
		"Reject additional cookies": "Gwrthod cwcis ychwanegol",
		"View cookies": "Gweld cwcis",
		"You have accepted all additional cookies.": "Rydych chi wedi derbyn yr holl gwcis ychwanegol.",
		"You have rejected all additional cookies.":
			"Rydych chi wedi gwrthod yr holl gwcis ychwanegol.",
		"You can": "Gallwch chi",
		"change your cookie preferences": "newid eich dewisiadau o ran cwcis",
		"at any time.": "ar unrhyw adeg.",
		Hide: "Cuddio",
		"Hide this message": "Cuddiwch y neges yma"
	};
	$: i18n = (text) => (lang === "cy" && texts[text] ? texts[text] : text);
</script>

{#if showBanner && !hideBanner}
	<div
		class="ons-cookies-banner"
		role="region"
		aria-label="Cookies banner"
		style:display={showBanner ? "block" : null}
	>
		{#if !showConfirm}
			<form
				action={baseurl + "/cookies/accept-all"}
				method="GET"
				id="global-cookie-message"
				aria-label="cookie banner"
			>
				<div
					class="ons-container ons-cookies-banner__primary"
					class:ons-page__container--wider={width === "wider"}
				>
					<div class="ons-grid">
						<div class="ons-grid__col ons-col-8@m">
							<h2 class="ons-cookies-banner__title ons-u-mb-xs">{i18n("Cookies on ons.gov.uk")}</h2>
							<div class="ons-cookies-banner__statement">
								<p>
									{i18n(
										"Cookies are small files stored on your device when you visit a website. We use some essential cookies to make this website work."
									)}
								</p>
								<p>
									{i18n("We would like to set")}
									<a href={baseurl + "/cookies"}>{i18n("additional cookies")}</a>
									{i18n(
										"to remember your settings and understand how you use the site. This helps us to improve our services."
									)}
								</p>
							</div>
						</div>
					</div>
					<div class="ons-grid ons-grid--flex ons-u-mt-s">
						<div class="ons-grid__col">
							<button
								type="submit"
								class="ons-btn ons-btn--small ons-js-accept-cookies ons-cookies-banner__btn"
								data-button="accept"
								on:click|preventDefault={() => setCookie("all")}
							>
								<span class="ons-btn__inner"
									><span class="ons-btn__text">{i18n("Accept additional cookies")}</span>
								</span>
							</button>
						</div>
						<div class="ons-grid__col">
							<button
								type="button"
								class="ons-btn ons-btn--small ons-js-reject-cookies ons-cookies-banner__btn"
								data-button="reject"
								on:click|preventDefault={() => setCookie("reject")}
							>
								<span class="ons-btn__inner"
									><span class="ons-btn__text">{i18n("Reject additional cookies")}</span>
								</span>
							</button>
						</div>
						<div class="ons-grid__col">
							<a class="ons-cookies-banner__link" href={baseurl + "/cookies"}
								>{i18n("View cookies")}</a
							>
						</div>
					</div>
				</div>
			</form>
		{:else}
			<div
				class="ons-container ons-cookies-banner__confirmation"
				class:ons-page__container--wider={width === "wider"}
			>
				<div
					class="ons-grid ons-grid--flex ons-grid--between ons-grid--gutterless ons-grid--no-wrap@s ons-grid--vertical-center"
				>
					<div class="ons-grid__col ons-grid__col--flex ons-col-auto ons-u-flex-shrink@s">
						<p class="ons-cookies-banner__desc ons-u-mb-no@s ons-u-mr-s@s">
							<span>{i18n(message)}</span>
							<span class="ons-cookies-banner__preferences-text"
								>{i18n("You can")}
								<a href={baseurl + "/cookies"}>{i18n("change your cookie preferences")}</a>
								{i18n("at any time")}.</span
							>
						</p>
					</div>
					<div class="ons-grid__col">
						<button
							type="button"
							class="ons-btn ons-btn--secondary ons-btn--small ons-js-hide-button"
							aria-label={i18n("Hide this message")}
							on:click={() => (showBanner = false)}
						>
							<span class="ons-btn__inner"><span class="ons-btn__text">{i18n("Hide")}</span> </span>
						</button>
					</div>
				</div>
			</div>
		{/if}
	</div>
{/if}

<style>
	.ons-cookies-banner {
		/* padding: 0; */
		background: var(--pale, #f0f0f0) !important;
	}
	.ons-page__container--wider {
		max-width: 1240px;
	}
</style>
