<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import LazyLoad from "./LazyLoad.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Wrappers/LazyLoad",
		component: LazyLoad,
		tags: ["autodocs"],
		argTypes: {},
		parameters: withComponentDocs(componentDocs)
	});
</script>

{#snippet template(args)}
	{#each Array.from(Array(15).keys()) as i}
		<LazyLoad {...args}>
			<div class="img-container">
				<img src="https://picsum.photos/400/300?random={i}" alt="" />
			</div>
		</LazyLoad>
	{/each}
{/snippet}

<Story name="Default" args={{}} {template} />

<style>
	.img-container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 500px;
		background: #eee;
		margin-bottom: 10px;
	}
</style>
