<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import ChangeStat from "./ChangeStat.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Information and media/ChangeStat",
		component: ChangeStat,
		tags: ["autodocs"],
		argTypes: {
			direction: {
				control: { type: "select" }
			},
			tone: {
				control: { type: "select" }
			}
		},
		parameters: withComponentDocs(componentDocs)
	});
</script>

{#snippet template(args)}
	<div style:padding="12px">
		<ChangeStat {...args} />
	</div>
{/snippet}

<Story
	name="Lower"
	args={{
		value: "7%",
		direction: "down",
		context: "than last year"
	}}
	{template}
/>

<Story
	name="Higher"
	args={{
		value: "1.3pp",
		direction: "up",
		context: "than the previous quarter"
	}}
	{template}
/>

<Story
	name="No change"
	args={{
		label: "No change",
		direction: "neutral"
	}}
	{template}
/>

<Story
	name="Fewer"
	args={{
		value: "69 (0.7%)",
		label: "fewer",
		direction: "down",
		tone: "positive"
	}}
	{template}
/>
