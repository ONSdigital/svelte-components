<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import Image from "./Image.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Layout/Image",
		component: Image,
		tags: ["autodocs"],
		argTypes: {},
		parameters: withComponentDocs(componentDocs)
	});
</script>

<Story
	name="Default"
	args={{
		src: "https://service-manual.ons.gov.uk/img/small/woman-in-purple-dress-shirt.jpg",
		alt: "Woman in a purple dress shirt using a laptop",
		caption: "Image 1 - Woman in a purple dress shirt using a laptop"
	}}
/>
