<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import NavSections from "./NavSections.svelte";
	import NavSection from "./NavSection.svelte";
	import componentDocs from "./docs/component.md?raw";
	import { lipsum } from "$lib/js/utils.js";

	const { Story } = defineMeta({
		title: "Layout/NavSections",
		component: NavSections,
		tags: ["autodocs"],
		argTypes: {},
		parameters: withComponentDocs(componentDocs)
	});
</script>

{#snippet template(args)}
	<NavSections>
		<NavSection title="Section one">
			<p>
				{lipsum()}
			</p>
		</NavSection>
		<NavSection title="Subsection A" subsection>
			<p>
				{lipsum(4, 1)}
			</p>
		</NavSection>
		<NavSection title="Subsection B" subsection>
			<p>
				{lipsum(4, 2)}
			</p>
		</NavSection>
		<NavSection title="Section two">
			<p>
				{lipsum(4, 3)}
			</p>
		</NavSection>
		<NavSection title="Section three">
			<p>
				{lipsum()}
			</p>
		</NavSection>
	</NavSections>
{/snippet}

<Story name="Default" args={{}} {template} />
