<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import UpdateStatus from "./UpdateStatus.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Information and media/UpdateStatus",
		component: UpdateStatus,
		tags: ["autodocs"],
		parameters: withComponentDocs(componentDocs)
	});
</script>

{#snippet template(args)}
	<div style:padding="12px">
		<UpdateStatus {...args} />
	</div>
{/snippet}

<Story
	name="Recent flag"
	args={{
		recent: true
	}}
	{template}
/>

<Story
	name="Last updated date"
	args={{
		date: "1 September 2026"
	}}
	{template}
/>

<Story
	name="Custom recent label"
	args={{
		recent: true,
		recentLabel: "Updated recently"
	}}
	{template}
/>

<Story
	name="Missing date fallback"
	args={{
		date: null
	}}
	{template}
/>
