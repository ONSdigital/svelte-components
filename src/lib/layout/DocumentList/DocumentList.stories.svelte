<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs, withStoryDocs } from "../../js/withParams.js";
	import Document from "./Document.svelte";
	import DocumentList from "./DocumentList.svelte";
	import componentDocs from "./docs/component.md?raw";
	import exampleDocs from "./docs/example.md?raw";

	const { Story } = defineMeta({
		title: "Layout/DocumentList",
		component: DocumentList,
		tags: ["autodocs"],
		argTypes: {},
		parameters: withComponentDocs(componentDocs)
	});

	const items1 = [
		{
			title: "Including everyone in Census",
			href: "#0",
			image: true,
			meta: "Poster, PDF, 499KB, 1 page",
			description: "Empty belly poster, aimed at advertising census events."
		},
		{
			title: "Community handbook for Census 2021",
			href: "#0",
			meta: "Booklet,PDF, 3.3MB, 16 pages",
			image: true,
			description:
				"This handbook explains what the census is, why it matters to everyone and how we can work together to spread the word within your community."
		}
	];

	const items2 = [
		{
			title: "Including everyone in Census",
			href: "#0",
			featured: true,
			image: "https://service-manual.ons.gov.uk/img/large/census-monuments-lights-featured.jpg",
			meta: "Poster, PDF, 499KB, 1 page",
			description: "Empty belly poster, aimed at advertising census events."
		},
		{
			title: "Community handbook for Census 2021",
			href: "#0",
			meta: "Booklet,PDF, 3.3MB, 16 pages",
			description:
				"This handbook explains what the census is, why it matters to everyone and how we can work together to spread the word within your community."
		}
	];
</script>

<Story name="Document list with images" args={{ items: items1 }} />

<Story name="Article list with featured item" args={{ items: items2 }} />

<Story name="Individually defined documents" asChild parameters={withStoryDocs(exampleDocs)}>
	<DocumentList>
		<Document
			href="#0"
			title="Including everyone in Census"
			meta="Poster, PDF, 499KB, 1 page"
			description="Empty belly poster, aimed at advertising census events."
		/>
		<Document
			href="#0"
			title="Community handbook for Census 2021"
			meta="Booklet,PDF, 3.3MB, 16 pages"
			description="This handbook explains what the census is, why it matters to everyone and how we can work together to spread the word within your community."
		/>
	</DocumentList>
</Story>
