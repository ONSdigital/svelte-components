<script>
	import { base } from "$app/paths";
	import Theme from "$lib/components/Theme/Theme.svelte";
	import Container from "$lib/components/Container/Container.svelte";
	import Card from "$lib/components/Card/Card.svelte";
	import Hero from "$lib/components/Hero/Hero.svelte";
	import Highlight from "$lib/components/Highlight/Highlight.svelte";
	import Tooltip from "$lib/components/Tooltip/Tooltip.svelte";
	import Indent from "$lib/components/Indent/Indent.svelte";
	import AnnouncementBanner from "$lib/components/AnnouncementBanner/AnnouncementBanner.svelte";
	import Blockquote from "$lib/components/Blockquote/Blockquote.svelte";
	import DescriptionList from "$lib/components/DescriptionList/DescriptionList.svelte";
	import ErrorSummary from "$lib/components/ErrorSummary/ErrorSummary.svelte";
	import Image from "$lib/components/Image/Image.svelte";
	import List from "$lib/components/List/List.svelte";
	import Li from "$lib/components/List/Li.svelte";
	import PhaseBanner from "$lib/components/PhaseBanner/PhaseBanner.svelte";
	import Breadcrumb from "$lib/components/Breadcrumb/Breadcrumb.svelte";
	import Contents from "$lib/components/Contents/Contents.svelte";
	import RelatedContent from "$lib/components/RelatedContent/RelatedContent.svelte";
	import SkipLink from "$lib/components/SkipLink/SkipLink.svelte";

	let mounted = $state(true);
	/** @type {"light" | "dark" | "paleblue" | "blue" | "navyblue" | "grey"} */
	let theme = $state("light");
	/** @type {"narrow" | "medium" | "wide" | "wider" | "full"} */
	let width = $state("medium");
	let height = $state(120);
	let clientOverrides = $state(false);
	let customCard = $state(false);
	let title = $state("Statistical release");
	let tooltipText = $state("Updated 6 November 2026");
	/** @type {"top" | "bottom" | "left" | "right"} */
	let placement = $state("bottom");
	let alternate = $state(false);
	const links = $derived([
		{
			title: alternate ? "Updated dataset" : "Related dataset",
			href: "#remaining-workbench-heading"
		}
	]);
	const image = `${base}/favicon.png`;
</script>

{#snippet cardTitle()}<h3>Custom card title</h3>{/snippet}
{#snippet cardImage()}<img src={image} width="32" height="32" alt="Workbench favicon" />{/snippet}

<section class="remaining-workbench" aria-labelledby="remaining-workbench-heading">
	<h2 id="remaining-workbench-heading">Wrappers, Content And Navigation</h2>
	<label><input type="checkbox" bind:checked={mounted} /> Mount remaining components</label>
	{#if mounted}
		<section aria-labelledby="wrappers-heading">
			<h3 id="wrappers-heading">Theme And Container</h3>
			<div class="settings">
				<label for="wrapper-theme">Theme</label><select id="wrapper-theme" bind:value={theme}
					>{#each ["light", "dark", "paleblue", "blue", "navyblue", "grey"] as value (value)}<option
							{value}>{value}</option
						>{/each}</select
				>
				<label for="wrapper-width">Container width</label><select
					id="wrapper-width"
					bind:value={width}
					>{#each ["narrow", "medium", "wide", "wider", "full"] as value (value)}<option {value}
							>{value}</option
						>{/each}</select
				>
				<label for="wrapper-height">Height</label><input
					id="wrapper-height"
					type="number"
					min="80"
					max="400"
					bind:value={height}
				/>
				<label><input type="checkbox" bind:checked={clientOverrides} /> Client CSS wrapper</label>
			</div>
			<Theme {theme} allowClientOverrides={clientOverrides}
				><Container {width} height={height ?? null}><p>Container content</p></Container></Theme
			>
		</section>
		<section aria-labelledby="card-hero-heading">
			<h3 id="card-hero-heading">Card, Hero And Highlight</h3>
			<div class="settings">
				<label for="hero-title">Release title</label><input
					id="hero-title"
					bind:value={title}
				/><label><input type="checkbox" bind:checked={customCard} /> Custom card snippets</label>
			</div>
			<Hero {title} width="full" lede="Latest illustrative statistics">
				{#snippet before()}<p class="ons-u-fs-s">Official statistics</p>{/snippet}
				<p>Hero child content</p>
				{#snippet after()}<p class="ons-u-fs-s">Release date: 6 November 2026</p>{/snippet}
			</Hero>
			<div class="card-example">
				<Card
					title="Linked card"
					href="#remaining-workbench-heading"
					titleContent={customCard ? cardTitle : undefined}
					imageContent={customCard ? cardImage : undefined}><p>Card child content</p></Card
				>
			</div>
			<Highlight width="full"><p>Highlighted release information</p></Highlight>
		</section>
		<section aria-labelledby="tooltip-heading">
			<h3 id="tooltip-heading">Tooltip</h3>
			<div class="settings">
				<label for="tooltip-text">Tooltip text</label><input
					id="tooltip-text"
					bind:value={tooltipText}
				/><label for="tooltip-placement">Placement</label><select
					id="tooltip-placement"
					bind:value={placement}
					><option value="top">Top</option><option value="bottom">Bottom</option><option
						value="left">Left</option
					><option value="right">Right</option></select
				>
			</div>
			<Tooltip text={tooltipText} position={placement} width={200}
				><button type="button" class="ons-btn">Release details</button></Tooltip
			>
		</section>
		<section aria-labelledby="content-heading" id="remaining-main">
			<h3 id="content-heading">Content And Messaging</h3>
			<AnnouncementBanner
				title="Release announcement"
				description="The latest illustrative release is available."
				linkHref="#remaining-workbench-heading"
				linkText="Read release"
			/>
			<PhaseBanner phase="Beta" href="#remaining-workbench-heading" width="full" />
			<Indent
				><Blockquote attribution="Office for National Statistics"
					>Statistics for the public good.</Blockquote
				></Indent
			>
			<DescriptionList
				title="Release metadata"
				items={[
					{ key: "Publisher", value: "ONS" },
					{ key: "Release", value: "6 November 2026" }
				]}
			/>
			<List><Li>First list item</Li><Li>Second list item</Li></List>
			<div class="image-example">
				<Image src={image} alt="Workbench favicon" caption="Sample image" />
			</div>
			<ErrorSummary title="Check these values"><p>Release date is required.</p></ErrorSummary>
		</section>
		<section aria-labelledby="navigation-heading">
			<h3 id="navigation-heading">Breadcrumb, Contents, RelatedContent And SkipLink</h3>
			<label><input type="checkbox" bind:checked={alternate} /> Alternate related links</label>
			<Breadcrumb
				width="full"
				links={[
					{ label: "Workbench", href: "#remaining-workbench-heading" },
					{ label: "Current section" }
				]}
			/>
			<Contents
				title="In this release"
				skipHref="#remaining-main"
				links={[
					{ label: "Release details", href: "#content-heading" },
					{ label: "Current section" }
				]}
			/>
			<RelatedContent title="Related statistics" {links}
				><p>Related content child snippet</p></RelatedContent
			>
			<SkipLink href="#remaining-main" />
		</section>
		<section aria-labelledby="landmarks-heading">
			<h3 id="landmarks-heading">Main And ErrorPage</h3>
			<iframe src={`${base}/workbench/landmarks/`} title="Main and ErrorPage fixture"></iframe>
		</section>
	{/if}
</section>

<style>
	.remaining-workbench {
		margin-top: 2rem;
		min-width: 0;
	}
	.remaining-workbench > section {
		border-top: 1px solid #b1b4b6;
		padding: 1.5rem 0;
		min-width: 0;
	}
	.settings {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-bottom: 1rem;
	}
	.settings input {
		max-width: 100%;
		min-width: 0;
	}
	.settings input[type="number"] {
		width: 6rem;
	}
	.card-example {
		max-width: 32rem;
		margin: 1rem 0;
	}
	.image-example {
		max-width: 5rem;
		margin: 1rem 0;
	}
	iframe {
		display: block;
		width: 100%;
		height: 340px;
		border: 1px solid #b1b4b6;
	}
</style>
