<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import Hero from "./Hero.svelte";
	import componentDocs from "./docs/component.md?raw";
	import { lipsum } from "$lib/js/utils.js";

	const { Story } = defineMeta({
		title: "Layout/Hero",
		component: Hero,
		tags: ["autodocs"],
		argTypes: {
			theme: {
				control: { type: "select" }
			}
		},
		parameters: { ...withComponentDocs(componentDocs), layout: "fullscreen" }
	});
</script>

{#snippet template(args)}
	<Hero {...args}>
		{#if args.content}{@html args.content}{/if}
	</Hero>
{/snippet}

<Story
	name="Hero with action button"
	args={{
		width: "narrow",
		title: "Page title",
		lede: lipsum(1),
		actionButton: { label: "Get started", href: "#0" },
		theme: "paleblue"
	}}
	{template}
/>

<Story
	name="Blue theme"
	args={{
		width: "narrow",
		title: "Page title",
		lede: lipsum(1),
		actionButton: { label: "Get started", href: "#0" },
		theme: "blue"
	}}
	{template}
/>

<Story
	name="Article title block"
	args={{
		title: "This is a longer page title on multiple lines",
		pageType: "Statistical article",
		lede: lipsum(1),
		width: "wide",
		theme: "grey",
		natStatBadge: true,
		meta: [
			{ key: "Dataset ID", value: "RM169" },
			{ key: "Released", value: "2023-04-04" }
		]
	}}
	{template}
/>

<Story
	name="Title with badge, no background"
	args={{
		title: "Norwich",
		titleBadge: { label: "E07000148", color: "#206095" },
		lede: lipsum(1),
		width: "wide",
		theme: null
	}}
	{template}
/>
