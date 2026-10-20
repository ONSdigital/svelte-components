<script>
	import "$lib/css/main.css";
	import Button from "$lib/components/Button/Button.svelte";
	import BackLink from "$lib/components/BackLink/BackLink.svelte";
	import ChangeStat from "$lib/components/ChangeStat/ChangeStat.svelte";
	import Divider from "$lib/components/Divider/Divider.svelte";
	import Em from "$lib/components/Em/Em.svelte";
	import ErrorPanel from "$lib/components/ErrorPanel/ErrorPanel.svelte";
	import Icon from "$lib/components/Icon/Icon.svelte";
	import Input from "$lib/components/Input/Input.svelte";
	import Notice from "$lib/components/Notice/Notice.svelte";
	import Section from "$lib/components/Section/Section.svelte";
	import UpdateStatus from "$lib/components/UpdateStatus/UpdateStatus.svelte";
	import { base } from "$app/paths";

	/** @type {'primary' | 'secondary' | 'ghost'} */
	let buttonVariant = "primary";
	let buttonDisabled = false;
	let clickCount = 0;
	let fieldValue = "";
	/** @type {"up" | "down" | "neutral"} */
	let changeDirection = "up";
	/** @type {"default" | "positive" | "negative" | "subtle"} */
	let changeTone = "default";
	let changeValue = "7%";
	let statusDate = "20 October 2026";
	let statusRecent = false;
	let statusShowDot = true;
	/** @type {"arrow" | "tick" | "search"} */
	let iconType = "arrow";
	let iconRotation = 0;
	let iconMarginLeft = false;
	/** @type {"info" | "success" | "error" | "warning"} */
	let noticeMode = "warning";
	let sectionTitle = "Section preview";
	/** @type {"narrow" | "medium" | "wide" | "wider" | "full"} */
	let sectionWidth = "narrow";
	let sectionHideTitle = false;
	/** @type {"narrow" | "full" | null} */
	let dividerRule = "full";
	/** @type {"dark" | "light"} */
	let dividerMode = "dark";
	let emphasisColor = "#ffe08a";
	/** @type {"default" | "badge"} */
	let emphasisMode = "default";
	let errorMessage = "Example error message";
	/** @type {{ id: number; time: string; name: string; detail: string }[]} */
	let activity = [];
	let nextActivityId = 0;

	/** @param {string} name @param {string} detail */
	function addActivity(name, detail) {
		activity = [
			{
				id: ++nextActivityId,
				time: new Date().toLocaleTimeString(),
				name,
				detail
			},
			...activity
		].slice(0, 8);
	}

	/** @param {CustomEvent<MouseEvent>} event */
	function handleButtonClick(event) {
		clickCount += 1;
		addActivity("Button click event", event.detail?.type ?? "No event detail");
	}

	/** @param {CustomEvent<{ value: string | null; e: Event }>} event */
	function handleInput(event) {
		addActivity("Input event", event.detail.value || "(empty value)");
	}

	/** @param {CustomEvent<{ value: string | null; e: Event }>} event */
	function handleChange(event) {
		addActivity("Input change event", event.detail.value || "(empty value)");
	}

	function clearActivity() {
		activity = [];
	}
</script>

<svelte:head>
	<title>Component workbench | ONS Svelte components</title>
	<meta
		name="description"
		content="Interactive workbench for manually testing ONS Svelte components during migration."
	/>
</svelte:head>

<main class="workbench">
	<header class="workbench__header">
		<a class="workbench__back" href="{base}/">Component library home</a>
		<p class="workbench__eyebrow">Svelte 5 migration</p>
		<h1>Component workbench</h1>
		<p>Exercise real library components and inspect the events they emit.</p>
	</header>

	<Notice mode="info">
		This page is a manual smoke-test surface. Automated behavior checks are kept in Vitest.
	</Notice>

	<div class="workbench__layout">
		<section aria-labelledby="button-heading">
			<h2 id="button-heading">Button</h2>
			<p>Change the variant, toggle its disabled state, and activate the button.</p>

			<div class="workbench__controls">
				<label for="button-variant">Variant</label>
				<select id="button-variant" bind:value={buttonVariant}>
					<option value="primary">Primary</option>
					<option value="secondary">Secondary</option>
					<option value="ghost">Ghost</option>
				</select>
				<label class="workbench__toggle">
					<input type="checkbox" bind:checked={buttonDisabled} />
					Disabled
				</label>
			</div>

			<Button variant={buttonVariant} disabled={buttonDisabled} on:click={handleButtonClick}>
				Test button
			</Button>
			<p class="workbench__result" aria-live="polite">Activated {clickCount} times</p>
		</section>

		<section aria-labelledby="input-heading">
			<h2 id="input-heading">Input</h2>
			<p>Type text and inspect input and change event details.</p>

			<Input
				id="workbench-input"
				label="Test value"
				description="Enter text to exercise the component binding."
				bind:value={fieldValue}
				on:input={handleInput}
				on:change={handleChange}
			/>
			<p class="workbench__result" aria-live="polite">Current value: {fieldValue || "(empty)"}</p>
		</section>
	</div>

	<div class="workbench__layout">
		<section aria-labelledby="change-stat-heading">
			<h2 id="change-stat-heading">ChangeStat</h2>
			<div class="workbench__controls">
				<label for="change-stat-value">Value</label>
				<input id="change-stat-value" bind:value={changeValue} />
				<label for="change-stat-direction">Direction</label>
				<select id="change-stat-direction" bind:value={changeDirection}>
					<option value="up">Up</option>
					<option value="down">Down</option>
					<option value="neutral">Neutral</option>
				</select>
				<label for="change-stat-tone">Tone</label>
				<select id="change-stat-tone" bind:value={changeTone}>
					<option value="default">Default</option>
					<option value="positive">Positive</option>
					<option value="negative">Negative</option>
					<option value="subtle">Subtle</option>
				</select>
			</div>
			<ChangeStat
				value={changeValue}
				direction={changeDirection}
				tone={changeTone}
				context="since last period"
			/>
		</section>

		<section aria-labelledby="update-status-heading">
			<h2 id="update-status-heading">UpdateStatus</h2>
			<div class="workbench__controls">
				<label for="update-status-date">Date</label>
				<input id="update-status-date" bind:value={statusDate} />
				<label class="workbench__toggle">
					<input type="checkbox" bind:checked={statusRecent} />
					Recent
				</label>
				<label class="workbench__toggle">
					<input type="checkbox" bind:checked={statusShowDot} />
					Show dot
				</label>
			</div>
			<UpdateStatus date={statusDate} recent={statusRecent} showRecentDot={statusShowDot} />
		</section>
	</div>

	<div class="workbench__layout">
		<section aria-labelledby="icon-heading">
			<h2 id="icon-heading">Icon</h2>
			<div class="workbench__controls">
				<label for="icon-type">Type</label>
				<select id="icon-type" bind:value={iconType}>
					<option value="arrow">Arrow</option>
					<option value="tick">Tick</option>
					<option value="search">Search</option>
				</select>
				<label for="icon-rotation">Rotation</label>
				<input
					id="icon-rotation"
					type="range"
					min="0"
					max="360"
					step="45"
					bind:value={iconRotation}
				/>
				<label class="workbench__toggle">
					<input type="checkbox" bind:checked={iconMarginLeft} />
					Left margin
				</label>
			</div>
			<p>
				<Icon type={iconType} rotation={iconRotation} marginLeft={iconMarginLeft} /> Icon preview
			</p>
		</section>

		<section aria-labelledby="back-link-heading">
			<h2 id="back-link-heading">BackLink</h2>
			<p>Check the destination and link presentation.</p>
			<BackLink href="#button-heading" />
		</section>
	</div>

	<div class="workbench__layout">
		<section aria-labelledby="notice-heading">
			<h2 id="notice-heading">Notice</h2>
			<div class="workbench__controls">
				<label for="notice-mode">Mode</label>
				<select id="notice-mode" bind:value={noticeMode}>
					<option value="info">Information</option>
					<option value="success">Success</option>
					<option value="warning">Warning</option>
					<option value="error">Error</option>
				</select>
			</div>
			<Notice mode={noticeMode}>Notice content preview.</Notice>
		</section>

		<section aria-labelledby="section-heading">
			<h2 id="section-heading">Section</h2>
			<div class="workbench__controls">
				<label for="section-title">Title</label>
				<input id="section-title" bind:value={sectionTitle} />
				<label for="section-width">Width</label>
				<select id="section-width" bind:value={sectionWidth}>
					<option value="narrow">Narrow</option>
					<option value="medium">Medium</option>
					<option value="wide">Wide</option>
					<option value="full">Full</option>
				</select>
				<label class="workbench__toggle">
					<input type="checkbox" bind:checked={sectionHideTitle} />
					Hide title
				</label>
			</div>
			<Section
				id="workbench-section"
				title={sectionTitle}
				width={sectionWidth}
				hideTitle={sectionHideTitle}
			>
				Section content preview.
			</Section>
		</section>
	</div>

	<div class="workbench__layout">
		<section aria-labelledby="divider-heading">
			<h2 id="divider-heading">Divider</h2>
			<div class="workbench__controls">
				<label for="divider-rule">Rule</label>
				<select id="divider-rule" bind:value={dividerRule}>
					<option value="full">Full</option>
					<option value="narrow">Narrow</option>
					<option value={null}>Hidden</option>
				</select>
				<label for="divider-mode">Mode</label>
				<select id="divider-mode" bind:value={dividerMode}>
					<option value="dark">Dark</option>
					<option value="light">Light</option>
				</select>
			</div>
			<Divider hr={dividerRule} mode={dividerMode} />
		</section>

		<section aria-labelledby="em-heading">
			<h2 id="em-heading">Em</h2>
			<div class="workbench__controls">
				<label for="em-color">Highlight colour</label>
				<input id="em-color" type="color" bind:value={emphasisColor} />
				<label for="em-mode">Mode</label>
				<select id="em-mode" bind:value={emphasisMode}>
					<option value="default">Highlight</option>
					<option value="badge">Badge</option>
				</select>
			</div>
			<Em color={emphasisColor} mode={emphasisMode} ariaLabel="Highlighted sample"
				>Highlighted sample</Em
			>
		</section>
	</div>

	<div class="workbench__layout">
		<section aria-labelledby="error-panel-heading">
			<h2 id="error-panel-heading">ErrorPanel</h2>
			<div class="workbench__controls">
				<label for="error-panel-message">Message</label>
				<input id="error-panel-message" bind:value={errorMessage} />
			</div>
			<ErrorPanel message={errorMessage}>Additional error detail preview.</ErrorPanel>
		</section>
	</div>

	<section class="workbench__activity" aria-labelledby="activity-heading">
		<div class="workbench__activity-heading">
			<div>
				<h2 id="activity-heading">Recent events</h2>
				<p>Most recent interactions appear first.</p>
			</div>
			<button type="button" on:click={clearActivity}>Clear history</button>
		</div>

		{#if activity.length}
			<ol aria-live="polite">
				{#each activity as item (item.id)}
					<li>
						<time>{item.time}</time>
						<strong>{item.name}</strong>
						<span>{item.detail}</span>
					</li>
				{/each}
			</ol>
		{:else}
			<p>No events recorded yet.</p>
		{/if}
	</section>
</main>

<style>
	.workbench {
		box-sizing: border-box;
		max-width: 76rem;
		margin: 0 auto;
		padding: 2rem 1.5rem 4rem;
	}

	.workbench__header {
		margin-bottom: 2rem;
		padding-bottom: 1.5rem;
		border-bottom: 1px solid var(--ons-color-grey-300);
	}

	.workbench__back {
		display: inline-block;
		margin-bottom: 1.5rem;
	}

	.workbench__eyebrow {
		margin-bottom: 0.25rem;
		color: var(--ons-color-grey-600);
		font-weight: 700;
	}

	.workbench__layout {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.workbench__layout section,
	.workbench__activity {
		min-width: 0;
		padding-top: 1.25rem;
		border-top: 2px solid var(--ons-color-grey-300);
	}

	.workbench__controls {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 1rem;
	}

	.workbench__controls select {
		min-height: 2.5rem;
		padding: 0.25rem 0.5rem;
	}

	.workbench__toggle {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
	}

	.workbench__result {
		margin-top: 1rem;
		font-weight: 700;
	}

	.workbench__activity {
		margin-top: 2.5rem;
	}

	.workbench__activity-heading {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	.workbench__activity ol {
		margin: 1rem 0 0;
		padding: 0;
		list-style: none;
	}

	.workbench__activity li {
		display: grid;
		grid-template-columns: minmax(7rem, auto) minmax(10rem, 1fr) minmax(8rem, 2fr);
		gap: 0.75rem;
		padding: 0.75rem 0;
		border-top: 1px solid var(--ons-color-grey-300);
		overflow-wrap: anywhere;
	}

	@media (max-width: 48rem) {
		.workbench__layout {
			grid-template-columns: 1fr;
		}

		.workbench__activity li {
			grid-template-columns: 1fr;
			gap: 0.25rem;
		}
	}
</style>
