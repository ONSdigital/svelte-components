<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import Paginator from "./Paginator.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Navigation/Paginator",
		component: Paginator,
		tags: ["autodocs"],
		argTypes: {},
		parameters: withComponentDocs(componentDocs)
	});
</script>

<Story
	name="Default"
	args={{
		pageCount: 10,
		pageCurrent: 2,
		nextHref: "#3",
		prevHref: "#1"
	}}
/>

<Story
	name="Custom page titles"
	args={{
		pageCount: 10,
		pageCurrent: 2,
		nextHref: "#3",
		prevHref: "#1",
		prevTitle: "Introduction",
		nextTitle: "Another page"
	}}
/>
