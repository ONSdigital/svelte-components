<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import PhaseBanner from "./PhaseBanner.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Layout/PhaseBanner",
		component: PhaseBanner,
		tags: ["autodocs"],
		argTypes: {},
		parameters: withComponentDocs(componentDocs)
	});
</script>

<Story name="Default" args={{}} />

<Story
	name="Prototype with custom link"
	args={{
		phase: "Prototype",
		href: "https://example.com"
	}}
/>
