<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import Header from "./Header.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Layout/Header",
		component: Header,
		tags: ["autodocs"],
		argTypes: {
			theme: {
				control: { type: "select" }
			}
		},
		parameters: { ...withComponentDocs(componentDocs), layout: "fullscreen" }
	});
</script>

<Story name="Default" args={{}} />

<Story name="Compact" args={{ compact: true }} />

<Story name="Compact with page title" args={{ compact: true, title: "Page title" }} />

<Story name="Compact dark theme" args={{ compact: true, title: "Page title", theme: "dark" }} />
