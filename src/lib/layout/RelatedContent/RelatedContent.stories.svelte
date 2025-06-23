<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import RelatedContent from "./RelatedContent.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Layout/RelatedContent",
		component: RelatedContent,
		tags: ["autodocs"],
		argTypes: {},
		parameters: withComponentDocs(componentDocs)
	});

	const related = [
		{
			title: "Help with the census",
			links: [
				{ title: "I’m moving house", href: "#0" },
				{ title: "What if I’m away or abroad on Census Day?", href: "#0" },
				{ title: "Get an access code or paper census", href: "#0" }
			]
		},
		{
			title: "Related content",
			links: [
				{ title: "How we will contact or visit you", href: "#0" },
				{ title: "Media enquiries", href: "#0" }
			]
		}
	];
</script>

<Story name="Single section" args={{ links: related[1].links }} />

<Story name="Multiple sections" args={{ related }} />
