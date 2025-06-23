<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import Summary from "./Summary.svelte";
	import componentDocs from "./docs/component.md?raw";

	const items = [
		{ key: "First item", value: "Value of first item" },
		{ key: "Second item", value: "Value of second item (that can be changed)", href: "#" }
	];

	const { Story } = defineMeta({
		title: "Layout/Summary",
		component: Summary,
		tags: ["autodocs"],
		argTypes: {},
		parameters: withComponentDocs(componentDocs)
	});
</script>

<Story name="Default" args={{ items }} />
