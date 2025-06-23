<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import Breadcrumb from "./Breadcrumb.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Layout/Breadcrumb",
		component: Breadcrumb,
		tags: ["autodocs"],
		argTypes: {},
		parameters: withComponentDocs(componentDocs)
	});
</script>

<Story
	name="Default"
	args={{
		links: [
			{ label: "Home", href: "/" },
			{ label: "Parent page", href: "/parent" }
		]
	}}
/>

<Story
	name="Single back link"
	args={{
		href: "/"
	}}
/>
