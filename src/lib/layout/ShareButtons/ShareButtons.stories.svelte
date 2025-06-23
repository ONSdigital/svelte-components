<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import ShareButtons from "./ShareButtons.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Layout/ShareButtons",
		component: ShareButtons,
		tags: ["autodocs"],
		argTypes: {
			width: {
				control: { type: "select" }
			}
		},
		parameters: withComponentDocs(componentDocs)
	});
</script>

<Story name="Default" args={{}} />
