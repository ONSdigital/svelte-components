<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import Contents from "./Contents.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Layout/Contents",
		component: Contents,
		tags: ["autodocs"],
		argTypes: {},
		parameters: withComponentDocs(componentDocs)
	});
</script>

<Story
	name="Default"
	args={{
		links: [
			{ label: "Overview" },
			{ label: "Who should take part and why", href: "#0" },
			{ label: "How your information is used", href: "#0" },
			{ label: "The 2019 Census Rehearsal", href: "#0" },
			{ label: "Online census", href: "#0" }
		]
	}}
/>
