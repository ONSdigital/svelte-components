<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { withComponentDocs } from "../../js/withParams.js";
	import Scroller from "./Scroller.svelte";
	import ScrollerSection from "./ScrollerSection.svelte";
	import Container from "$lib/wrappers/Container/Container.svelte";
	import Em from "$lib/decorators/Em/Em.svelte";
	import componentDocs from "./docs/component.md?raw";

	const { Story } = defineMeta({
		title: "Layout/Scroller",
		component: Scroller,
		tags: ["autodocs"],
		argTypes: {},
		parameters: {
			...withComponentDocs(componentDocs),
			layout: "fullscreen",
			docs: { story: { inline: false, iframeHeight: 600 } }
		}
	});
</script>

<script>
	const scrollerColors = ["#ddd", "#777", "#222"];
	let scrollerColor = scrollerColors[0];
</script>

{#snippet template(args)}
	<Scroller {...args} on:change={(e) => (scrollerColor = scrollerColors[e.detail.index])}>
		<div slot="background">
			<Container width="full" height="full" background={scrollerColor} />
		</div>
		<div slot="foreground">
			<ScrollerSection>
				<p>
					When this first caption is visible, the background will appear <Em
						color={scrollerColors[0]}>light grey</Em
					>.
				</p>
			</ScrollerSection>
			<ScrollerSection>
				<p>
					When this first caption is visible, the background will appear <Em
						color={scrollerColors[1]}>dark grey</Em
					>.
				</p>
			</ScrollerSection>
			<ScrollerSection>
				<p>
					When this first caption is visible, the background will appear <Em
						color={scrollerColors[2]}>black</Em
					>.
				</p>
			</ScrollerSection>
		</div>
	</Scroller>
{/snippet}

<Story name="Default" args={{}} {template} />

<Story name="Split-screen mode" args={{ splitscreen: true }} {template} />
