<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import DescriptionList from "./DescriptionList.svelte";
	import componentDocs from "./docs/component.md?raw";

	const items = [
		{ key: "Survey", value: "Bricks & Blocks" },
		{ key: "RU Refs", value: [49900000118, 49300005832] },
		{ key: "To", value: "<a href='mailto:'>A Person</a>" }
	];

	const { Story } = defineMeta({
		title: "Layout/DescriptionList",
		component: DescriptionList,
		tags: ["autodocs"],
		argTypes: {},
		parameters: withComponentDocs(componentDocs)
	});
</script>

<Story name="Default" args={{ items }} />
