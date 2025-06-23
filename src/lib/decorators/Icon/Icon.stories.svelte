<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import Icon from "./Icon.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Decorators/Icon",
		component: Icon,
		tags: ["autodocs"],
		argTypes: {
			type: {
				control: { type: "select" }
			},
			size: {
				control: { type: "select" }
			}
		},
		parameters: withComponentDocs(componentDocs)
	});
</script>

<Story name="Arrow icon" args={{ type: "arrow" }} />

<Story name="Arrow pointing down" args={{ type: "arrow", rotation: 90 }} />

<Story name="Search icon, large" args={{ type: "search", size: "3xl" }} />
