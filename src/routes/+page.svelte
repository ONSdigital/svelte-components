<script>
	import "$lib/css/main.css";
	import Header from "$lib/components/Header/Header.svelte";
	import Section from "$lib/components/Section/Section.svelte";
	import Footer from "$lib/components/Footer/Footer.svelte";
	import Notice from "$lib/components/Notice/Notice.svelte";
</script>

<Header skipHref={null} legacy={false} title="Svelte components library" />

<Section marginTop>
	<p>Welcome to the ONS Svelte components library.</p>
	<p>
		It is easiest to develop and preview the components in Storybook by running the following
		command in the terminal:
	</p>
	<pre>&gt; npm run storybook</pre>
	<Notice
		>Note that Storybook cannot simulate progressive enhancement. To test components without
		JavaScript, you may wish to add them to this page temporarily and then disable JavaScript within
		your web browser.</Notice
	>
</Section>

<Footer compact />

<style>
	pre {
		color: var(--ons-color-page-light);
		background: var(--ons-color-grey-100);
		font-weight: bold;
		margin: 1.5em 0 2em;
		padding: 6px;
	}
</style>
