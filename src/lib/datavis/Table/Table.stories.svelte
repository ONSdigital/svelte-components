<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import Table from "./Table.svelte";
	import componentDocs from "./docs/component.md?raw";

	const data = [
		{ country: "Scotland", mountain: "Ben Nevis", height: 1345 },
		{ country: "Wales", mountain: "Snowdon", height: 1085 },
		{ country: "England", mountain: "Scarfell Pike", height: 978 },
		{ country: "Northern Ireland", mountain: "Slieve Donard", height: 850 }
	];
	const columns = [
		{ key: "country", label: "Country", sortable: true },
		{ key: "mountain", label: "Highest mountain" },
		{ key: "height", label: "Height in metres", sortable: true, numeric: true }
	];

	const { Story } = defineMeta({
		title: "Data visualisation/Table",
		component: Table,
		tags: ["autodocs"],
		argTypes: {},
		parameters: withComponentDocs(componentDocs)
	});
</script>

<Story name="Default" args={{ data, columns }} />

<Story name="Fixed height with sticky header" args={{ data, columns, height: 200 }} />

<Story name="Compact mode" args={{ data, columns, compact: true }} />
