<script>
	import { onMount } from "svelte";
	import initNav from "./navLegacy.js";

	export let search = true;
	export let bilingual = true;
	export let lang = "en";
	export let baseurl = "https://www.ons.gov.uk";
	export let baseother = "https://cy.ons.gov.uk";
	export let path = "";
	export let i18n = (text) => text;

	let el;

	const menu = [
		{
			label_en: "Business, industry and trade",
			label_cy: "Busnes, diwydiant a masnach",
			url: "/businessindustryandtrade",
			children: [
				{ label_en: "Business", label_cy: "Busnes", url: "/businessindustryandtrade/business" },
				{
					label_en: "Changes to business",
					label_cy: "Newidiadau i fusnesau",
					url: "/businessindustryandtrade/changestobusiness"
				},
				{
					label_en: "Construction industry",
					label_cy: "Diwydiant adeiladu",
					url: "/businessindustryandtrade/constructionindustry"
				},
				{
					label_en: "IT and internet industry",
					label_cy: "Y diwydiant TG a'r rhyngrwyd",
					url: "/businessindustryandtrade"
				},
				{
					label_en: "International trade",
					label_cy: "Masnach ryngwladol",
					url: "/businessindustryandtrade/itandinternetindustry"
				},
				{
					label_en: "Manufacturing and production industry",
					label_cy: "Y diwydiant gweithgynhyrchu a chynhyrchu",
					url: "/businessindustryandtrade/manufacturingandproductionindustry"
				},
				{
					label_en: "Retail industry",
					label_cy: "Y diwydiant manwerthu",
					url: "/businessindustryandtrade/retailindustry"
				},
				{
					label_en: "Tourism industry",
					label_cy: "Y diwydiant twristiaeth",
					url: "/businessindustryandtrade/tourismindustry"
				}
			]
		},
		{
			label_en: "Economy",
			label_cy: "Yr economi",
			url: "/economy",
			children: [
				{
					label_en: "Economic output and productivity",
					label_cy: "Allgynnyrch economaidd a chynhyrchiant",
					url: "/economy/economicoutputandproductivity"
				},
				{
					label_en: "Environmental accounts",
					label_cy: "Cyfrifon amgylcheddol",
					url: "/economy/environmentalaccounts"
				},
				{
					label_en: "Government, public sector and taxes",
					label_cy: "Llywodraeth, y sector cyhoeddus a threthi",
					url: "/economy/governmentpublicsectorandtaxes"
				},
				{
					label_en: "Gross Domestic Product (GDP)",
					label_cy: "Cynnyrch Domestig Gros (CDG)",
					url: "/economy/grossdomesticproductgdp"
				},
				{
					label_en: "Gross Value Added (GVA)",
					label_cy: "Gwerth Ychwanegol Gros",
					url: "/economy/grossvalueaddedgva"
				},
				{
					label_en: "Inflation and price indices",
					label_cy: "Mynegeion chwyddiant a phrisiau",
					url: "/economy/inflationandpriceindices"
				},
				{
					label_en: "Investments, pensions and trusts",
					label_cy: "Buddsoddiadau, pensiynau ac ymddiriedolaethau",
					url: "/economy/investmentspensionsandtrusts"
				},
				{
					label_en: "National accounts",
					label_cy: "Cyfrifon gwladol",
					url: "/economy/nationalaccounts"
				},
				{
					label_en: "Regional accounts",
					label_cy: "Cyfrifon rhanbarthol",
					url: "/economy/regionalaccounts"
				}
			]
		},
		{
			label_en: "Employment and labour market",
			label_cy: "Cyflogaeth a'r farchnad lafur",
			url: "/employmentandlabourmarket",
			children: [
				{
					label_en: "People in work",
					label_cy: "Pobl mewn gwaith",
					url: "/employmentandlabourmarket/peopleinwork"
				},
				{
					label_en: "People not in work",
					label_cy: "Pobl nad ydynt mewn gwaith",
					url: "/employmentandlabourmarket/peoplenotinwork"
				}
			]
		},
		{
			label_en: "People, population and community",
			label_cy: "Pobl, y boblogaeth a chymunedau",
			url: "/peoplepopulationandcommunity",
			children: [
				{
					label_en: "Births, deaths and marriages",
					label_cy: "Genedigaethau, marwolaethau a phriodasau",
					url: "/peoplepopulationandcommunity/birthsdeathsandmarriages"
				},
				{
					label_en: "Crime and justice",
					label_cy: "Troseddu a chyfiawnder",
					url: "/peoplepopulationandcommunity/crimeandjustice"
				},
				{
					label_en: "Cultural identity",
					label_cy: "Hunaniaeth ddiwylliannol",
					url: "/peoplepopulationandcommunity/culturalidentity"
				},
				{
					label_en: "Education and childcare",
					label_cy: "Addysg a gofal plant",
					url: "/peoplepopulationandcommunity/educationandchildcare"
				},
				{
					label_en: "Elections",
					label_cy: "Etholiadau",
					url: "/peoplepopulationandcommunity/elections"
				},
				{
					label_en: "Health and social care",
					label_cy: "Iechyd a gofal cymdeithasol",
					url: "/peoplepopulationandcommunity/healthandsocialcare"
				},
				{
					label_en: "Household characteristics",
					label_cy: "Nodweddion aelwydydd",
					url: "/peoplepopulationandcommunity/householdcharacteristics"
				},
				{ label_en: "Housing", label_cy: "Tai", url: "/peoplepopulationandcommunity/housing" },
				{
					label_en: "Leisure and tourism",
					label_cy: "Hamdden a thwristiaeth",
					url: "/peoplepopulationandcommunity/leisureandtourism"
				},
				{
					label_en: "Personal and household finances",
					label_cy: "Cyllid personol a chyllid aelwydydd",
					url: "/peoplepopulationandcommunity/personalandhouseholdfinances"
				},
				{
					label_en: "Population and migration",
					label_cy: "Poblogaeth ac ymfudo",
					url: "/peoplepopulationandcommunity/populationandmigration"
				},
				{
					label_en: "Well-being",
					label_cy: "Lles",
					url: "/peoplepopulationandcommunity/wellbeing"
				}
			]
		},
		{ label_en: "Taking part in a survey?", label_cy: "Cymryd rhan mewn arolwg?", url: "/surveys" },
		{
			label_en: "Release calendar",
			label_cy: "Calendar datganiadau",
			url: "/releasecalendar",
			secondary: true
		},
		{ label_en: "Methodology", label_cy: "Methodoleg", url: "/methodology", secondary: true },
		{ label_en: "Media", label_cy: "Media", url: "/news", secondary: true },
		{ label_en: "About", label_cy: "Amdanom ni", url: "/aboutus", secondary: true },
		{ label_en: "Blog", label_cy: "Blog", url: "https://blog.ons.gov.uk/", secondary: true }
	];

	onMount(() => {
		initNav();
	});
</script>

<div class="ons-container">
	<div class="header col-wrap">
		<div class="col col--lg-one-third col--md-one-third">
			<a
				href="{baseurl}/"
				aria-label="{i18n('Office for National Statistics logo')} - {i18n('Homepage')}"
			>
				<svg
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 595.3 116.3"
					aria-hidden="true"
					class="logo"
				>
					<title>{i18n("Office for National Statistics logo")} - {i18n("Homepage")}</title>
					<path
						class="ons-icon--logo__group ons-icon--logo__group--secondary"
						d="M0,70.5c1.8-3.7,3.6-7.2,5.6-10.7C3.3,54.2,1.5,48.5,0,42.6V70.5 M10.9,0C10.9,0,0,0,0,13.5v7.2
	C1,33,3.6,45,7.9,56.2c6.1-9.6,13.4-18.4,22.3-26C47.8,15.1,71.5,4.7,103.7,0.1L10.9,0z"
						fill="#a8bd3a"
					/>
					<path
						class="ons-icon--logo__group ons-icon--logo__group--primary"
						d="M115.9,7.3c-36.8,3.5-62,14-80,29.4c-9.7,8.3-17.3,18-23.6,29c14.1,27.4,41.1,47.6,86,50.5h4.4
	c0,0,13.8,0.5,13.8-14.9V7.2L115.9,7.3 M21.2,85.4c-4.2-4.9-7.9-10.3-11-16C6.3,76.9,2.9,84.9,0,93.4v22.7l73.6,0.1
	C50.7,110.7,33.5,99.8,21.2,85.4"
						fill="#003c57"
					/>
					<path
						class="ons-icon--logo__group ons-icon--logo__group--text"
						d="M161,51.9c-11.3,0-16.3-9.3-16.3-20.8c0-11.4,5-20.8,16.3-20.8s16.3,9.5,16.3,20.8
	C177.2,42.6,172.2,51.9,161,51.9 M161,13.6c-8.3,0-11.3,9.1-11.3,17.4c0,8.2,2.7,17.3,11.3,17.3s11.2-9.1,11.2-17.3
	C172.2,22.7,169.3,13.6,161,13.6 M191.2,22.5v28.7h-4.5V22.6H182v-2.8h4.7v-4.6c0-5.7,3.4-9.9,10-9.9c0.5,0,1.1,0.1,1.1,0.1v2.9
	h-0.5c-3.2,0-6,2.1-6,6.4v5.1h6.6v2.8L191.2,22.5L191.2,22.5z M210.1,22.5v28.7h-4.5V22.6h-4.7v-2.8h4.7v-4.6c0-5.7,3.4-9.9,10-9.9
	c0.5,0,1.1,0.1,1.1,0.1v2.9h-0.5c-3.2,0-6,2.1-6,6.4v5.1h6.6v2.8L210.1,22.5L210.1,22.5z M224.1,13.7c-1.6,0-2.9-1.2-2.9-2.8
	s1.3-2.9,2.9-2.9c1.6,0,2.9,1.3,2.9,2.9S225.8,13.7,224.1,13.7 M221.8,19.7h4.6v31.5h-4.6V19.7z M246.1,51.9
	c-7.4,0-13.2-6.4-13.2-16.5c0-10.3,5.8-16.5,13.4-16.5c3.8,0,6.3,1.1,7.7,2.2l-1.2,2.8c-1-0.8-2.9-1.7-5.5-1.7
	c-6.4,0-9.7,5.5-9.7,13c0,7.7,3.7,13.2,9.5,13.2c2.4,0,4.3-0.8,5.6-1.7l1.2,3C252.6,50.9,249.9,51.9,246.1,51.9 M261.4,37.3
	c0.6,7.4,4.7,11.1,11.1,11.1c3.9,0,6.8-1,8.5-1.9l1.3,3.2c-2,1.1-5.7,2.1-10.2,2.1c-8.8,0-15.1-5.3-15.1-16.6
	c0-10.8,5.8-16.4,13.7-16.4c8,0,12.9,4.9,12.9,15.4L261.4,37.3L261.4,37.3z M270.5,22c-5.1,0-9.4,4-9.3,12.8l17.9-2.5
	C279,25,275.5,22,270.5,22 M312.7,22.5v28.7h-4.5V22.6h-4.7v-2.8h4.7v-4.6c0-5.7,3.4-9.9,10-9.9c0.5,0,1.1,0.1,1.1,0.1v2.9h-0.5
	c-3.2,0-6,2.1-6,6.4v5.1h6.6v2.8L312.7,22.5z M335.9,51.9c-9.3,0-13.5-7.2-13.5-16.5s4.2-16.5,13.5-16.5s13.5,7.2,13.5,16.5
	C349.4,44.8,345.2,51.9,335.9,51.9 M335.9,22.1c-6.9,0-8.8,7-8.8,13.4c0,6.5,2.1,13.1,8.8,13.1c6.9,0,8.9-6.6,8.9-13.1
	S342.8,22.1,335.9,22.1 M369.2,22.7c-2.9-0.8-7.1-0.6-9.1,0.6v27.9h-4.6V21.1c3.3-1.4,6.6-2.2,12.5-2.2h2.4
	C370.4,19,369.2,22.7,369.2,22.7L369.2,22.7z M171.3,114.8l-17.8-27.5c-1.3-2.1-2.3-4.1-2.3-4.1h-0.1c0,0,0.2,2.3,0.2,4.8v26.8h-5.8
	V74.7h6.6l16.9,25.8c1.5,2.3,2.4,4.1,2.4,4.1h0.1c0,0-0.2-2.3-0.2-4.7V74.6h5.9v40.1L171.3,114.8L171.3,114.8z M196.3,115.6
	c-9.2,0-13.6-3.7-13.6-9.7c0-8.5,8.8-10.7,19.4-11.7v-1.8c0-4.3-2.9-5.6-7.2-5.6c-3.1,0-6.6,0.9-8.5,1.8l-1.6-3.8
	c2.2-0.9,6.3-2.3,11.3-2.3c7,0,12.3,2.9,12.3,10.9v19.9C205.7,114.7,201.5,115.6,196.3,115.6 M202.1,97.4c-7.8,0.8-13,2.3-13,8.3
	c0,4.2,3,6.1,7.7,6.1c2.2,0,4.1-0.5,5.3-1.1V97.4z M226.6,115.5c-6.6,0-9.1-4.3-9.1-8.5V87.5h-4.4v-4.1h4.4v-7l6.7-1.9v8.9h6.1v4.1
	h-6.1v19.2c0,2.5,1.4,4.4,4.3,4.4c0.6,0,1.2-0.1,1.8-0.3v4.1C229.7,115.1,228.4,115.5,226.6,115.5 M239,77.9c-2.1,0-3.9-1.6-3.9-3.5
	s1.8-3.5,3.9-3.5c2.1,0,3.9,1.6,3.9,3.5C242.9,76.4,241.1,77.9,239,77.9 M235.6,83.4h6.8v31.4h-6.8V83.4z M262.5,115.6
	c-9.6,0-14.4-7.1-14.4-16.5s4.8-16.6,14.4-16.6c9.6,0,14.3,7.2,14.3,16.6C276.9,108.5,272.1,115.6,262.5,115.6 M262.5,86.9
	c-5.8,0-7.5,6.1-7.5,12.2s1.8,11.9,7.5,11.9c5.8,0,7.5-5.8,7.5-11.9C270,92.9,268.3,86.9,262.5,86.9 M301.8,114.8V92.3
	c0-4-3.4-5.5-7.3-5.5c-2.1,0-4.1,0.4-5.4,0.9v27.1h-6.7v-30c2.9-1.3,7.6-2.3,12.5-2.3c8.2,0,13.7,2.8,13.7,9.7v22.6L301.8,114.8
	L301.8,114.8z M327.5,115.6c-9.2,0-13.6-3.7-13.6-9.7c0-8.5,8.9-10.7,19.4-11.7v-1.8c0-4.3-2.9-5.6-7.2-5.6c-3.1,0-6.6,0.9-8.5,1.8
	l-1.6-3.8c2.2-0.9,6.3-2.3,11.3-2.3c7,0,12.3,2.9,12.3,10.9v19.9C336.9,114.7,332.7,115.6,327.5,115.6 M333.3,97.4
	c-7.8,0.8-13,2.3-13,8.3c0,4.2,3,6.1,7.7,6.1c2.2,0,4.1-0.5,5.3-1.1V97.4z M346.5,114.8V69h6.7v45.8H346.5z M385.1,115.6
	c-4.8,0-8.7-1.1-10.9-2.3l1.9-4.9c1.6,0.9,4.6,1.9,7.7,1.9c4.7,0,8-2.7,8-6.7c0-8.8-16.7-5.4-16.7-17.9c0-6.4,5.2-11.9,13.3-11.9
	c4.3,0,7.8,1.2,9.7,2.3l-1.7,4.4c-1.5-0.9-4.2-1.9-7-1.9c-4.3,0-7.2,2.6-7.2,6.4c0,8.6,17.1,4.9,17.1,18.2
	C399.2,110.3,393.3,115.6,385.1,115.6 M416.2,115.5c-6.6,0-9.1-4.3-9.1-8.5V87.5h-4.4v-4.1h4.4v-7l6.7-1.9v8.9h6.1v4.1h-6.1v19.2
	c0,2.5,1.5,4.4,4.3,4.4c0.6,0,1.2-0.1,1.8-0.3v4.1C419.3,115.1,417.9,115.5,416.2,115.5 M437.1,115.6c-9.2,0-13.6-3.7-13.6-9.7
	c0-8.5,8.9-10.7,19.4-11.7v-1.8c0-4.3-2.9-5.6-7.2-5.6c-3.1,0-6.6,0.9-8.5,1.8l-1.6-3.8c2.2-0.9,6.3-2.3,11.3-2.3
	c7,0,12.3,2.9,12.3,10.9v19.9C446.6,114.7,442.3,115.6,437.1,115.6 M442.9,97.4c-7.8,0.8-13,2.3-13,8.3c0,4.2,3,6.1,7.7,6.1
	c2.2,0,4.1-0.5,5.3-1.1V97.4z M467.5,115.5c-6.6,0-9.1-4.3-9.1-8.5V87.5H454v-4.1h4.4v-7l6.7-1.9v8.9h6.1v4.1h-6.1v19.2
	c0,2.5,1.5,4.4,4.3,4.4c0.6,0,1.2-0.1,1.8-0.3v4.1C470.5,115.1,469.2,115.5,467.5,115.5 M479.8,77.9c-2.1,0-3.9-1.6-3.9-3.5
	s1.8-3.5,3.9-3.5s3.9,1.6,3.9,3.5C483.7,76.4,482,77.9,479.8,77.9 M476.4,83.4h6.8v31.4h-6.8V83.4z M497.8,115.6
	c-3.9,0-7.6-1.1-9.5-2.3l1.8-4.3c1.3,0.9,4,1.9,6.9,1.9c3.4,0,6.2-2.2,6.2-4.9c0-7.5-13.8-4-13.8-14.2c0-4.7,4.2-9.2,11-9.2
	c3.9,0,6.7,1,8.8,2.3l-1.8,3.9c-1-0.7-3.1-1.8-5.7-1.8c-3.5,0-5.6,2.1-5.6,4.5c0,7,14,3.9,14,14.4
	C510.1,110.8,505.4,115.6,497.8,115.6 M527.2,115.5c-6.6,0-9.1-4.3-9.1-8.5V87.5h-4.4v-4.1h4.4v-7l6.7-1.9v8.9h6.1v4.1h-6.1v19.2
	c0,2.5,1.4,4.4,4.3,4.4c0.6,0,1.2-0.1,1.8-0.3v4.1C530.3,115.1,528.9,115.5,527.2,115.5 M539.5,77.9c-2.1,0-3.9-1.6-3.9-3.5
	s1.8-3.5,3.9-3.5c2.1,0,3.9,1.6,3.9,3.5C543.5,76.4,541.7,77.9,539.5,77.9 M536.2,83.4h6.8v31.4h-6.8V83.4z M562.4,115.6
	c-7.7,0-13.6-6.3-13.6-16.6c0-10.4,6.1-16.5,13.7-16.5c3.9,0,6.6,1.1,8,2.3l-1.5,3.8c-1-0.7-2.7-1.5-4.9-1.5
	c-5.5,0-8.3,4.7-8.3,11.8c0,7.2,3.3,11.9,8.2,11.9c2.1,0,3.8-0.8,4.9-1.6l1.7,4.1C569.1,114.5,566.4,115.6,562.4,115.6 M583,115.6
	c-3.9,0-7.6-1.1-9.5-2.3l1.8-4.3c1.3,0.9,4,1.9,6.9,1.9c3.4,0,6.2-2.2,6.2-4.9c0-7.5-13.8-4-13.8-14.2c0-4.7,4.2-9.2,11-9.2
	c3.9,0,6.7,1,8.9,2.3l-1.8,3.9c-1-0.7-3.1-1.8-5.7-1.8c-3.5,0-5.6,2.1-5.6,4.5c0,7,14,3.9,14,14.4
	C595.3,110.8,590.5,115.6,583,115.6"
						fill="#003c57"
					/>
				</svg>
			</a>
		</div>
		<div
			class="col col--lg-two-thirds col--md-two-thirds hide--sm print--hide language--js__container"
		>
			<div class="language" style:min-height="20px">
				{#if bilingual && lang == "en"}
					<span>English (EN) | </span>
					<a href="{baseother}{path}" class="language__link" lang="cy">Cymraeg (CY)</a>
				{:else if bilingual}
					<a href="{baseother}{path}" class="language__link" lang="en">English (EN)</a>
					<span> | Cymraeg (CY)</span>
				{/if}
			</div>
		</div>
		<div class="secondary-nav col col--lg-two-thirds col--md-two-thirds print--hide">
			<ul class="secondary-nav__list js-nav-clone__list">
				{#each menu.filter((d) => d.secondary) as item (item.url)}
					<li class="secondary-nav__item">
						<a class="secondary-nav__link js-nav-clone__link" href="{baseurl}{item.url}"
							>{item["label_" + lang]}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
<div class="primary-nav print--hide">
	<!-- Controls -->
	<nav aria-label="Header links">
		<ul class="nav--controls">
			<li class="nav--controls__item">
				<a
					href="#nav-primary"
					id="menu-toggle"
					aria-controls="nav-primary"
					aria-expanded="false"
					class="nav--controls__menu"
				>
					<span class="nav--controls__text">{i18n("Menu")}</span>
				</a>
			</li>
			<li class="nav--controls__item">
				<a
					href="#nav-search"
					id="search-toggle"
					aria-controls="nav-search"
					aria-expanded="false"
					class="nav--controls__search"
				>
					<span class="nav--controls__text">{i18n("Search")}</span>
				</a>
			</li>
		</ul>

		<!-- Main Navigation -->
		<ul
			class="ons-container nav-main--hidden primary-nav__list"
			id="nav-primary"
			aria-expanded="false"
		>
			<!-- Home Link -->
			<li class="primary-nav__item js-nav">
				<a class="primary-nav__link col col--md-7 col--lg-9" href="{baseurl}/">{i18n("Home")}</a>
			</li>

			<!-- Menu Items -->
			{#each menu.filter((d) => !d.secondary) as item, i (item.url)}
				{#if item.children}
					<li class="primary-nav__item js-nav js-expandable">
						<a
							class="primary-nav__link col col--md-8 col--lg-10"
							href="{baseurl}{item.url}"
							aria-expanded="false"
							aria-label="{item['label_' + lang]} sub menu"
							on:click={(e) => toggle_sm(e, i)}
						>
							<span aria-hidden="true" class="expansion-indicator"></span>
							<span class="submenu-title">
								{item[`label_${lang}`]}
							</span>
						</a>
						<ul
							class="primary-nav__child-list col col--md-16 col--lg-20 js-expandable__content js-nav-hidden jsEnhance"
							aria-expanded="false"
							aria-label="submenu"
						>
							{#each [...item.children].sort( (a, b) => a[`label_${lang}`].localeCompare(b[`label_${lang}`]) ) as child (child.url)}
								<li class="primary-nav__child-item js-expandable__child">
									<a class="primary-nav__child-link" tabindex="-1" href="{baseurl}{child.url}"
										>{child[`label_${lang}`]}</a
									>
								</li>
							{/each}
						</ul>
					</li>
				{:else}
					<li class="primary-nav__item js-nav">
						<a class="primary-nav__link col col--md-8 col--lg-10" href="{baseurl}{item.url}">
							{item["label_" + lang]}
						</a>
					</li>
				{/if}
			{/each}

			<!-- Language Switcher -->
			<li class="hide--md primary-nav__language">
				{#if lang == "en"}
					<span>English (EN) | </span>
					<a href="{baseother}{path}" class="language__link" lang="cy">Cymraeg (CY)</a>
				{:else}
					<a href="{baseother}{path}" class="language__link" lang="en">English (EN)</a>
					<span> | Cymraeg (EN)</span>
				{/if}
			</li>
		</ul>
	</nav>
</div>
{#if search}
	<div class="search nav-search--hidden print--hide" id="searchBar">
		<div class="ons-container" role="search">
			<form class="col-wrap search__form" action="{baseurl}/search">
				<label class="search__label col col--md-23 col--lg-24" for="nav-search"
					>{i18n("Search for a keyword(s) or time series ID")}</label
				>
				<input
					type="search"
					autocomplete="off"
					class="search__input col col--md-21 col--lg-32"
					id="nav-search"
					name="q"
					value=""
				/>
				<button
					type="submit"
					class="search__button col--md-3 col--lg-3"
					id="nav-search-submit"
					aria-label={i18n("Search")}
				>
					<span class="icon-search--light">
						<svg
							class="ons-svg-icon ons-svg-icon--m"
							viewBox="0 0 12 12"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							fill="currentColor"
						>
							<path
								d="M11.86 10.23 8.62 6.99a4.63 4.63 0 1 0-6.34 1.64 4.55 4.55 0 0 0 2.36.64 4.65 4.65 0 0 0 2.33-.65l3.24 3.23a.46.46 0 0
								0 .65 0l1-1a.48.48 0 0 0 0-.62Zm-5-3.32a3.28 3.28 0 0 1-2.31.93 3.22 3.22 0 1 1 2.35-.93Z"
							></path>
						</svg>
					</span>
				</button>
			</form>
		</div>
	</div>
{/if}
