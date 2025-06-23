<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import componentDocs from "./docs/component.md?raw";

	import Main from "$lib/wrappers/Main/Main.svelte";
	import Header from "$lib/layout/Header/Header.svelte";
	import Hero from "$lib/layout/Hero/Hero.svelte";
	import Container from "$lib/wrappers/Container/Container.svelte";
	import Highlight from "$lib/layout/Highlight/Highlight.svelte";
	import Section from "$lib/layout/Section/Section.svelte";
	import Grid from "$lib/layout/Grid/Grid.svelte";
	import GridCell from "$lib/layout/Grid/GridCell.svelte";
	import Blockquote from "$lib/decorators/Blockquote/Blockquote.svelte";
	import Em from "$lib/decorators/Em/Em.svelte";
	import Divider from "$lib/decorators/Divider/Divider.svelte";
	import Scroller from "$lib/layout/Scroller/Scroller.svelte";
	import ScrollerSection from "$lib/layout/Scroller/ScrollerSection.svelte";
	import Footer from "$lib/layout/Footer/Footer.svelte";

	const { Story } = defineMeta({
		title: "Templates/Feature article",
		component: Header,
		tags: ["autodocs"],
		argTypes: {},
		parameters: {
			...withComponentDocs(componentDocs),
			layout: "fullscreen",
			docs: { story: { inline: false, iframeHeight: 600 } }
		}
	});
</script>

<script>
	const scrollerColors = ["#ddd", "#777", "#222"];
	let scrollerColor = scrollerColors[0];
</script>

<Story name="Default" args={{}} asChild>
	<Header compact />
	<Main>
		<Hero
			theme="blue"
			title="This is an article title"
			lede="This is a short, introductory sentence"
			height={400}
		>
			1 January 2025
		</Hero>

		<Highlight height={400} marginBottom={false}>
			<p>This is a test paragraph.</p>
			<p>This is another test paragraph.</p>
		</Highlight>

		<Section title="Section title" marginTop={true}>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
			<Blockquote attribution="A. Person"
				>This is a blockquote, white comprises of a large block of inset text.</Blockquote
			>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</Section>

		<Grid colWidth="medium" caption="This is a caption text">
			<GridCell><div class="placeholder"></div></GridCell>
			<GridCell><div class="placeholder"></div></GridCell>
			<GridCell><div class="placeholder"></div></GridCell>
		</Grid>

		<Divider />

		<Section title="Another section title">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</Section>

		<Scroller
			id="scroller"
			splitscreen
			on:change={(e) => {
				scrollerColor = scrollerColors[e.detail.index];
				console.debug("change", e);
			}}
			on:enter={(e) => console.debug("enter", e)}
			on:exit={(e) => console.debug("exit", e)}
		>
			<div slot="background">
				<Container width="full" height="full" background={scrollerColor} />
			</div>
			<div slot="foreground">
				<ScrollerSection>
					<p>
						When this first caption is visible, the background will appear <Em
							color={scrollerColors[0]}>light grey</Em
						>.
					</p>
				</ScrollerSection>
				<ScrollerSection>
					<p>
						When this section caption is visible, the background will appear <Em
							color={scrollerColors[1]}>dark grey</Em
						>.
					</p>
				</ScrollerSection>
				<ScrollerSection>
					<p>
						When this third caption is visible, the background will appear <Em
							color={scrollerColors[2]}>black</Em
						>.
					</p>
				</ScrollerSection>
			</div>
		</Scroller>

		<Section title="Yet another section title">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</Section>
	</Main>
	<Footer compact />
</Story>

<style>
	.placeholder {
		background: var(--ons-color-grey-10);
		padding: 12px;
		height: 200px;
	}
</style>
