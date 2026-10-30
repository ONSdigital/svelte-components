<script>
	import Observe from "$lib/components/Observe/Observe.svelte";
	import LazyLoad from "$lib/components/LazyLoad/LazyLoad.svelte";
	import Scroller from "$lib/components/Scroller/Scroller.svelte";
	import ScrollerSection from "$lib/components/Scroller/ScrollerSection.svelte";
	import Embed from "$lib/components/Embed/Embed.svelte";
	import Header from "$lib/components/Header/Header.svelte";
	import Footer from "$lib/components/Footer/Footer.svelte";
	import ShareButtons from "$lib/components/ShareButtons/ShareButtons.svelte";
	import AnalyticsBanner from "$lib/components/AnalyticsBanner/AnalyticsBanner.svelte";
	import ToolbarsContainer from "$lib/components/Toolbar/ToolbarsContainer.svelte";
	import Toolbar from "$lib/components/Toolbar/Toolbar.svelte";
	import ToolbarButton from "$lib/components/Toolbar/ToolbarButton.svelte";
	import ToolbarDivider from "$lib/components/Toolbar/ToolbarDivider.svelte";
	import ToolControls from "$lib/components/Toolbar/ToolControls.svelte";
	import ToolControl from "$lib/components/Toolbar/ToolControl.svelte";

	let mounted = $state(true);
	let visible = $state(false);
	let entered = $state(false);
	let transitions = $state(0);
	let embedLoads = $state(0);
	let toolbarClicks = $state(0);
	let selected = $state(false);
	let headerMode = $state("standard");
	let compactFooter = $state(true);
	let consentVisible = $state(false);
	let usageCookies = $state(false);
	let count = $state(0);
	/** @type {number | null} */
	let index = $state(null);
	let progress = $state(0);
	let scrollEvents = $state(0);
</script>

<section aria-labelledby="browser-workbench-heading" class="browser-workbench">
	<h2 id="browser-workbench-heading">Browser Lifecycle And Integrations</h2>
	<div class="settings">
		<label><input type="checkbox" bind:checked={mounted} /> Mount browser components</label>
	</div>
	{#if mounted}
		<section aria-labelledby="observe-heading">
			<h3 id="observe-heading">Observe And LazyLoad</h3>
			<Observe bind:visible onEnter={() => transitions++} onExit={() => transitions++}>
				<p>Observed content</p>
			</Observe>
			<p>Visible: {visible}; transitions: {transitions}</p>
			<LazyLoad bind:entered initialHeight={120}>
				<p>Lazy content loaded</p>
			</LazyLoad>
			<p>Entered: {entered}</p>
		</section>

		<section aria-labelledby="embed-heading">
			<h3 id="embed-heading">Embed</h3>
			<Embed polling={false} onLoad={() => embedLoads++}>
				<p>Embedded child content</p>
			</Embed>
			<p>Load events: {embedLoads}</p>
		</section>

		<section aria-labelledby="header-heading">
			<h3 id="header-heading">Header</h3>
			<label for="header-mode">Variant</label>
			<select id="header-mode" bind:value={headerMode}>
				<option value="standard">Standard</option>
				<option value="compact">Compact</option>
				<option value="legacy">Legacy</option>
			</select>
			{#key headerMode}
				<Header
					title="Component library"
					compact={headerMode === "compact"}
					legacy={headerMode === "legacy"}
					skipHref={null}
				/>
			{/key}
		</section>

		<section aria-labelledby="toolbar-heading">
			<h3 id="toolbar-heading">Toolbar</h3>
			<ToolbarsContainer>
				<Toolbar ariaLabel="Workbench tools">
					<ToolbarButton
						id="wb-search"
						icon="search"
						label="Search tool"
						helpText="Search tool"
						onClick={() => toolbarClicks++}
					/>
					<ToolbarDivider />
					<ToolbarButton
						id="wb-toggle"
						label="Toggle selection"
						toggle
						bind:selected
						onClick={() => toolbarClicks++}
					/>
					<ToolbarButton
						id="wb-action"
						icon="download"
						label="Download action"
						transient
						onClick={() => toolbarClicks++}
					/>
					{#snippet controls()}
						<ToolControls
							><ToolControl id="wb-search"><p>Search control panel</p></ToolControl></ToolControls
						>
					{/snippet}
				</Toolbar>
			</ToolbarsContainer>
			<p>Actions: {toolbarClicks}; selected: {selected}</p>
		</section>

		<section aria-labelledby="sharing-heading">
			<h3 id="sharing-heading">ShareButtons</h3>
			<ShareButtons marginBottom={false} />
		</section>

		<section aria-labelledby="analytics-heading">
			<h3 id="analytics-heading">AnalyticsBanner</h3>
			<label><input type="checkbox" bind:checked={consentVisible} /> Show consent banner</label>
			{#if consentVisible}
				<AnalyticsBanner analyticsId="" bind:usageCookies />
			{/if}
			<p>Usage consent: {usageCookies}</p>
		</section>

		<section aria-labelledby="footer-heading">
			<h3 id="footer-heading">Footer</h3>
			<label><input type="checkbox" bind:checked={compactFooter} /> Compact footer</label>
			<Footer compact={compactFooter} />
		</section>

		<section aria-labelledby="scroller-heading">
			<h3 id="scroller-heading">Scroller</h3>
			<p>
				Sections: {count}; index: {index ?? "none"}; progress: {Number.isFinite(progress)
					? progress.toFixed(2)
					: "0.00"}; events: {scrollEvents}
			</p>
			<Scroller
				id="workbench-scroller"
				bind:count
				bind:index
				bind:progress
				onChange={() => scrollEvents++}
			>
				{#snippet background()}
					<div class="scroll-background">Current section: {index ?? "none"}</div>
				{/snippet}
				{#snippet foreground()}
					<div>
						<ScrollerSection id="wb-scroll-one" title="First scroll section"
							><p>First caption</p></ScrollerSection
						>
						<ScrollerSection id="wb-scroll-two" title="Second scroll section"
							><p>Second caption</p></ScrollerSection
						>
					</div>
				{/snippet}
			</Scroller>
		</section>
	{/if}
</section>

<style>
	.browser-workbench {
		margin-top: 2rem;
		min-width: 0;
	}
	.browser-workbench > section {
		border-top: 1px solid #b1b4b6;
		padding: 1.5rem 0;
		min-width: 0;
	}
	.settings {
		margin-bottom: 1rem;
	}
	.scroll-background {
		height: 100vh;
		display: grid;
		place-items: center;
		background: #e6f4f3;
		color: #222;
		font-weight: 700;
	}
</style>
