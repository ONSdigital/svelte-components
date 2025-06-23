<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs, withStoryDocs } from "../../js/withParams.js";
	import ErrorSummary from "./ErrorSummary.svelte";
	import componentDocs from "./docs/component.md?raw";
	import exampleDocs from "./docs/example.md?raw";

	const { Story } = defineMeta({
		title: "Inputs/ErrorSummary",
		component: ErrorSummary,
		tags: ["autodocs"],
		argTypes: {},
		parameters: withComponentDocs(componentDocs)
	});

	const items = [
		{ label: "First issue description.", href: "#0" },
		{ label: "Second issue description." }
	];
</script>

{#snippet template(args)}
	<div style:padding="12px">
		<ErrorSummary {...args} />
	</div>
{/snippet}

<Story name="Default" args={{ title: "There are 2 problems with your answer", items }} {template} />

<Story name="Error defined as text" asChild parameters={withStoryDocs(exampleDocs)}>
	<div style:padding="12px">
		<ErrorSummary title="There was an error">This is a text to describe the error.</ErrorSummary>
	</div>
</Story>
