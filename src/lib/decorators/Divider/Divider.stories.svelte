<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import Divider from "./Divider.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Decorators/Divider",
		component: Divider,
		tags: ["autodocs"],
		argTypes: {
			hr: {
				control: { type: "select" }
			},
			width: {
				control: { type: "select" }
			}
		},
		parameters: withComponentDocs(componentDocs)
	});
</script>

<Story name="Default" args={{}} />

<Story name="Light mode" args={{ mode: "light" }} />

<Story name="Narrow divider" args={{ hr: "narrow" }} />

<Story name="Invisible divider" args={{ hr: null }} />
