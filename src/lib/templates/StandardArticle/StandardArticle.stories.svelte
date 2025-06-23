<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import componentDocs from "./docs/component.md?raw";
	import Header from "../../layout/Header/Header.svelte";
	import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb.svelte";
	import Hero from "../../layout/Hero/Hero.svelte";
	import Section from "../../layout/Section/Section.svelte";
	import Grid from "../../layout/Grid/Grid.svelte";
	import Blockquote from "../../decorators/Blockquote/Blockquote.svelte";
	import Footer from "../../layout/Footer/Footer.svelte";

	const { Story } = defineMeta({
		title: "Templates/Standard article",
		component: Header,
		tags: ["autodocs"],
		argTypes: {},
		parameters: { ...withComponentDocs(componentDocs), layout: "fullscreen" }
	});
</script>

<Story name="Default" args={{}} asChild>
	<Header />
	<Breadcrumb
		links={[
			{ label: "Home", href: "/" },
			{ label: "Parent", href: "/parent/" }
		]}
	/>
	<Hero title="Page title" theme="grey" meta={[{ key: "Release date", value: "1 January 2025" }]}
	></Hero>

	<Section title="Section title" marginTop={true}>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
		<Blockquote attribution="A. Person"
			>This is a blockquote, white comprises of a large block of inset text.</Blockquote
		>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</Section>

	<Grid width="medium" colWidth="full" caption="This is a caption text">
		<div class="grid-cell"></div>
	</Grid>

	<Section title="Another section title">
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</Section>

	<Section title="Yet another section title">
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</Section>

	<Footer theme="dark" />
</Story>

<style>
	.grid-cell {
		background: var(--ons-color-grey-10);
		min-height: 300px;
		width: 100%;
	}
</style>
