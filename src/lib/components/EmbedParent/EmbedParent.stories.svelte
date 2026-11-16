<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import EmbedParent from "./EmbedParent.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Wrappers/EmbedParent",
		component: EmbedParent,
		tags: ["autodocs"],
		argTypes: {},
		parameters: withComponentDocs(componentDocs)
	});
</script>

{#snippet template(args)}
	<EmbedParent {...args} />
{/snippet}

<Story
	name="Default"
	args={{ href: "https://onsdigital.github.io/sveltekit-starter/embed/" }}
	{template}
/>
