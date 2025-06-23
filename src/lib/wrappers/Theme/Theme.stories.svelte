<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import Theme from "./Theme.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Wrappers/Theme",
		component: Theme,
		tags: ["autodocs"],
		argTypes: {
			theme: {
				control: { type: "select" }
			}
		},
		parameters: withComponentDocs(componentDocs)
	});
</script>

{#snippet template(args)}
	<Theme {...args}>
		<div style:padding="12px">
			<h2>Title</h2>
			<p>Text with a <a href="#0">hyperlink</a>.</p>
		</div>
	</Theme>
{/snippet}

<Story name="Default light theme" args={{}} {template} />

<Story
	name="Dark theme"
	args={{
		theme: "dark"
	}}
	{template}
/>

<Story
	name="Pale blue theme"
	args={{
		theme: "paleblue"
	}}
	{template}
/>

<Story
	name="Blue theme"
	args={{
		theme: "blue"
	}}
	{template}
/>

<Story
	name="Navy blue theme"
	args={{
		theme: "navyblue"
	}}
	{template}
/>

<Story
	name="Dark with background override"
	args={{
		theme: "dark",
		background: "var(--ons-color-aqua-teal)"
	}}
	{template}
/>
