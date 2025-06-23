<script module>
	// @ts-ignore
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import Button from "./Button.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Inputs/Button",
		component: Button,
		tags: ["autodocs"],
		argTypes: {
			type: {
				options: ["button", "submit", "reset"],
				control: { type: "select" }
			},
			variant: {
				options: ["primary", "secondary", "ghost"],
				control: { type: "select" }
			},
			icon: {
				options: ["", "arrow", "search", "download", "tick", "print", "externalLink"],
				control: { type: "select" }
			},
			iconPosition: {
				options: ["before", "after"],
				control: { type: "select" }
			}
		},
		parameters: withComponentDocs(componentDocs)
	});
</script>

{#snippet template(args)}
	<div
		style:padding="12px"
		style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
	>
		<Button {...args}>{args.text}</Button>
	</div>
{/snippet}

<Story name="Default" args={{ text: "Primary button" }} {template} />

<Story name="Link" args={{ text: "Button-styled link", href: "#" }} {template} />

<Story name="Secondary" args={{ text: "Secondary button", variant: "secondary" }} {template} />

<Story name="Ghost" args={{ text: "Ghost button", variant: "ghost" }} {template} />

<Story name="Small" args={{ text: "Small button", small: true }} {template} />

<Story name="Icon before" args={{ text: "Download", icon: "download" }} {template} />

<Story
	name="Icon after"
	args={{ text: "Continue", icon: "arrow", iconPosition: "after" }}
	{template}
/>

<Story
	name="Icon only, hidden text"
	args={{ text: "Search", icon: "search", hideLabel: true }}
	{template}
/>
