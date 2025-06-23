<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import Footer from "./Footer.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Layout/Footer",
		component: Footer,
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

<Story name="Compact variant" args={{ compact: true }} />

<Story name="Dark theme" args={{ theme: "dark" }} />
