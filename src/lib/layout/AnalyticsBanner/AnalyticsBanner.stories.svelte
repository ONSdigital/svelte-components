<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import AnalyticsBanner from "./AnalyticsBanner.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Layout/AnalyticsBanner",
		component: AnalyticsBanner,
		tags: ["autodocs"],
		argTypes: {},
		parameters: { ...withComponentDocs(componentDocs), layout: "fullscreen" }
	});
</script>

<Story name="Default" args={{}} />
