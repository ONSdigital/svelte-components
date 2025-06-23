<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import Textarea from "./Textarea.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Inputs/Textarea",
		component: Textarea,
		tags: ["autodocs"],
		argTypes: {},
		parameters: withComponentDocs(componentDocs)
	});
</script>

{#snippet template(args)}
	<div style:padding="12px">
		<Textarea {...args} />
	</div>
{/snippet}

<Story
	name="Default"
	args={{
		id: "text",
		label: "Enter some text"
	}}
	{template}
/>

<Story
	name="Hidden label and character limit"
	args={{
		id: "text",
		label: "Enter some text",
		hideLabel: true,
		charLimit: 200
	}}
	{template}
/>
