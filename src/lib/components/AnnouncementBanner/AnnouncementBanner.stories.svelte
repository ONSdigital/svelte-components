<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import AnnouncementBanner from "./AnnouncementBanner.svelte";
	import componentDocs from "./docs/component.md?raw";
	import { lipsum } from "../../js/utils.js";

	const { Story } = defineMeta({
		title: "Information and media/AnnouncementBanner",
		component: AnnouncementBanner,
		tags: ["autodocs"],
		argTypes: {
			width: {
				control: { type: "select" }
			}
		},
		parameters: withComponentDocs(componentDocs)
	});
</script>

{#snippet template(args)}
	<AnnouncementBanner {...args}>
		<p>
			{lipsum()}
		</p>
	</AnnouncementBanner>
{/snippet}

<Story
	name="Default"
	args={{
		title: "Important service announcement",
		description: "This is a website-wide service announcement",
		variant: "teal",
		linkHref: "#0",
		linkText: "More information"
	}}
	{template}
/>

<Story
	name="National emergency"
	args={{
		title: "National emergency",
		description: "This is a level 1 incident",
		variant: "red",
		linkHref: "#0",
		linkText: "More information"
	}}
	{template}
/>

<Story
	name="Notable death"
	args={{
		title: "His Royal Highness Henry VIII",
		description: "1491 to 1547",
		variant: "black",
		linkHref: "#0",
		linkText: "Find out more"
	}}
	{template}
/>
