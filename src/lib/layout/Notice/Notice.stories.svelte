<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import Notice from "./Notice.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Layout/Notice",
		component: Notice,
		tags: ["autodocs"],
		argTypes: {
			mode: {
				control: { type: "select" }
			}
		},
		parameters: withComponentDocs(componentDocs)
	});
</script>

{#snippet template(args)}
	<div style:padding="12px">
		<Notice {...args}>
			{@html args.content}
		</Notice>
	</div>
{/snippet}

<Story
	name="Default"
	args={{
		content: "This is some helpful information."
	}}
	{template}
/>

<Story
	name="Warning style"
	args={{
		mode: "warning",
		content: "This is some important information you need to know."
	}}
	{template}
/>

<Story
	name="Success style"
	args={{
		mode: "success",
		content: "You successfully submitted some information."
	}}
	{template}
/>

<Story
	name="Error style"
	args={{
		mode: "error",
		content: "An unexpected error has occurred."
	}}
	{template}
/>
