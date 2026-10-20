<script>
	import "$lib/css/main.css";
	import Button from "$lib/components/Button/Button.svelte";
	import BackLink from "$lib/components/BackLink/BackLink.svelte";
	import Checkboxes from "$lib/components/Checkboxes/Checkboxes.svelte";
	import Accordion from "$lib/components/Accordion/Accordion.svelte";
	import AccordionItem from "$lib/components/Accordion/AccordionItem.svelte";
	import ChangeStat from "$lib/components/ChangeStat/ChangeStat.svelte";
	import Document from "$lib/components/DocumentList/Document.svelte";
	import DocumentList from "$lib/components/DocumentList/DocumentList.svelte";
	import Details from "$lib/components/Details/Details.svelte";
	import Divider from "$lib/components/Divider/Divider.svelte";
	import Dropdown from "$lib/components/Dropdown/Dropdown.svelte";
	import Em from "$lib/components/Em/Em.svelte";
	import ErrorPanel from "$lib/components/ErrorPanel/ErrorPanel.svelte";
	import Grid from "$lib/components/Grid/Grid.svelte";
	import GridCell from "$lib/components/Grid/GridCell.svelte";
	import Icon from "$lib/components/Icon/Icon.svelte";
	import Input from "$lib/components/Input/Input.svelte";
	import Notice from "$lib/components/Notice/Notice.svelte";
	import NavSection from "$lib/components/NavSections/NavSection.svelte";
	import NavSections from "$lib/components/NavSections/NavSections.svelte";
	import Section from "$lib/components/Section/Section.svelte";
	import Paginator from "$lib/components/Paginator/Paginator.svelte";
	import Radios from "$lib/components/Radios/Radios.svelte";
	import Select from "$lib/components/Select/Select.svelte";
	import Summary from "$lib/components/Summary/Summary.svelte";
	import Tab from "$lib/components/Tabs/Tab.svelte";
	import Tabs from "$lib/components/Tabs/Tabs.svelte";
	import Timeline from "$lib/components/Timeline/Timeline.svelte";
	import TimelineItem from "$lib/components/Timeline/TimelineItem.svelte";
	import Textarea from "$lib/components/Textarea/Textarea.svelte";
	import UpdateStatus from "$lib/components/UpdateStatus/UpdateStatus.svelte";
	import { base } from "$app/paths";

	/** @type {'primary' | 'secondary' | 'ghost'} */
	let buttonVariant = "primary";
	let buttonDisabled = false;
	let clickCount = 0;
	let fieldValue = "";
	let textareaValue = "";
	/** @type {string | null} */
	let dropdownValue = null;
	/** @type {{ id: string; label: string } | null} */
	let selectValue = null;
	/** @type {{ id: string; label: string; checked?: boolean }[]} */
	let selectedCheckboxes = [];
	/** @type {{ id: string; label: string } | null} */
	let selectedRadio = null;
	let detailsOpen = false;
	/** @type {string | null} */
	let selectedTab = null;
	let tabChangeCount = 0;
	let accordionChangeCount = 0;
	let summaryItems = [{ key: "Name", value: "Ada Lovelace", href: "#summary-heading" }];
	const dropdownOptions = ["To do", "In progress", "Done"];
	const selectOptions = [
		{ id: "north", label: "North" },
		{ id: "south", label: "South" },
		{ id: "west", label: "West" }
	];
	let checkboxItems = [
		{ id: "tea", label: "Tea", checked: false },
		{ id: "coffee", label: "Coffee", checked: false }
	];
	const radioItems = [
		{ id: "email", label: "Email" },
		{ id: "post", label: "Post" }
	];
	const documentItems = [
		{ title: "Migration guide", href: "?doc=guide", description: "Component migration reference." },
		{ title: "Release notes", href: "?doc=releases", description: "Library release history." }
	];
	const timelineItems = [
		{ title: "Block 5A", content: "Presentational components migrated." },
		{ title: "Block 5B", content: "Form controls and events migrated." }
	];
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

	/** @param {MouseEvent} event */
	function handleButtonCallback(event) {
		addActivity("Button callback", event.type);
	}

	/** @param {{ value: string | null }} detail */
	function handleInputCallback(detail) {
		addActivity("Input callback", detail.value || "(empty value)");
	}

	/** @param {{ value: string | null }} detail */
	function handleChangeCallback(detail) {
		addActivity("Input change callback", detail.value || "(empty value)");
	}

	/** @param {{ value: string | null }} detail */
	function handleTextareaCallback(detail) {
		addActivity("Textarea callback", detail.value || "(empty value)");
	}

	/** @param {{ value: string | object | null; e: Event }} detail */
	function handleDropdownCallback(detail) {
		const selectedValue = detail.value;
		const label =
			typeof selectedValue === "object" && selectedValue !== null && "label" in selectedValue
				? selectedValue.label
				: selectedValue;
		addActivity("Dropdown callback", typeof label === "string" ? label : "(empty value)");
	}

	/** @param {object | string} value */
	function handleSelectCallback(value) {
		const label =
			typeof value === "object" && value !== null && "label" in value ? value.label : value;
		addActivity("Select callback", typeof label === "string" ? label : "(empty value)");
	}

	/** @param {CustomEvent<{ id: string; label: string }>} event */
	function handleSelectEvent(event) {
		addActivity("Select change event", event.detail?.label || "(empty value)");
	}

	function handleSelectClear() {
		addActivity("Select clear callback", "Selection cleared");
	}

	/** @param {{ item: object; e: Event }} detail */
	function handleCheckboxCallback(detail) {
		addActivity(
			"Checkbox callback",
			"label" in detail.item ? String(detail.item.label) : "Selected"
		);
	}

	/** @param {CustomEvent<{ item: object; e: Event }>} event */
	function handleCheckboxEvent(event) {
		addActivity(
			"Checkbox change event",
			"label" in event.detail.item ? String(event.detail.item.label) : "Selected"
		);
	}

	/** @param {{ value: { id: string; label: string }; e: Event }} detail */
	function handleRadioCallback(detail) {
		addActivity("Radio callback", detail.value.label);
	}

	/** @param {CustomEvent<{ value: { id: string; label: string }; e: Event }>} event */
	function handleRadioEvent(event) {
		addActivity("Radio change event", event.detail.value.label);
	}

	/** @param {{ open: boolean; e: Event }} detail */
	function handleDetailsCallback(detail) {
		addActivity("Details callback", detail.open ? "open" : "closed");
	}

	/** @param {CustomEvent<{ open: boolean; e: Event }>} event */
	function handleDetailsEvent(event) {
		addActivity("Details toggle event", event.detail.open ? "open" : "closed");
	}

	/** @param {{ id: string }} detail */
	function handleTabCallback(detail) {
		tabChangeCount += 1;
		addActivity("Tabs callback", detail.id);
	}

	/** @param {CustomEvent<{ id: string }>} event */
	function handleTabEvent(event) {
		addActivity("Tabs change event", event.detail.id);
	}

	/** @param {{ id: string; open: boolean; el: HTMLElement }} detail */
	function handleAccordionCallback(detail) {
		accordionChangeCount += 1;
		addActivity("Accordion callback", `${detail.id}: ${detail.open ? "open" : "closed"}`);
	}

	/** @param {CustomEvent<{ id: string; open: boolean; el: HTMLElement }>} event */
	function handleAccordionEvent(event) {
		addActivity(
			"Accordion toggle event",
			`${event.detail.id}: ${event.detail.open ? "open" : "closed"}`
		);
	}

	/** @param {{ item: object }} detail */
	function handleSummaryCallback(detail) {
		addActivity("Summary callback", "key" in detail.item ? String(detail.item.key) : "Change");
	}

	/** @param {CustomEvent<{ item: object }>} event */
	function handleSummaryEvent(event) {
		addActivity(
			"Summary change event",
			"key" in event.detail.item ? String(event.detail.item.key) : "Change"
		);
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

			<Button
				variant={buttonVariant}
				disabled={buttonDisabled}
				onClick={handleButtonCallback}
				on:click={handleButtonClick}
			>
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
				onInput={handleInputCallback}
				onChange={handleChangeCallback}
			/>
			<p class="workbench__result" aria-live="polite">Current value: {fieldValue || "(empty)"}</p>
		</section>
	</div>

	<div class="workbench__layout">
		<section aria-labelledby="textarea-heading">
			<h2 id="textarea-heading">Textarea</h2>
			<Textarea
				id="workbench-textarea"
				label="Long response"
				charLimit={80}
				bind:value={textareaValue}
				onInput={handleTextareaCallback}
			/>
			<p class="workbench__result">Current value: {textareaValue || "(empty)"}</p>
		</section>

		<section aria-labelledby="dropdown-heading">
			<h2 id="dropdown-heading">Dropdown</h2>
			<Dropdown
				id="workbench-dropdown"
				label="Task status"
				options={dropdownOptions}
				bind:value={dropdownValue}
				onChange={handleDropdownCallback}
			/>
			<p class="workbench__result">Current value: {dropdownValue || "(empty)"}</p>
		</section>
	</div>

	<div class="workbench__layout">
		<section aria-labelledby="checkboxes-heading">
			<h2 id="checkboxes-heading">Checkboxes</h2>
			<Checkboxes
				title="Refreshments"
				items={checkboxItems}
				bind:value={selectedCheckboxes}
				onChange={handleCheckboxCallback}
				on:change={handleCheckboxEvent}
			/>
			<p class="workbench__result">
				Selected: {selectedCheckboxes.map((item) => item.label).join(", ") || "(none)"}
			</p>
		</section>

		<section aria-labelledby="radios-heading">
			<h2 id="radios-heading">Radios</h2>
			<Radios
				id="workbench-contact"
				label="Preferred contact"
				items={radioItems}
				bind:value={selectedRadio}
				onChange={handleRadioCallback}
				on:change={handleRadioEvent}
			/>
			<p class="workbench__result">Selected: {selectedRadio?.label || "(none)"}</p>
		</section>
	</div>

	<div class="workbench__layout">
		<section aria-labelledby="select-heading">
			<h2 id="select-heading">Select</h2>
			<Select
				id="workbench-select"
				label="Region"
				options={selectOptions}
				bind:value={selectValue}
				onChange={handleSelectCallback}
				on:change={handleSelectEvent}
				onClear={handleSelectClear}
			/>
			<p class="workbench__result">Current value: {selectValue?.label || "(empty)"}</p>
		</section>

		<section aria-labelledby="details-heading">
			<h2 id="details-heading">Details</h2>
			<Details
				title="Additional information"
				bind:open={detailsOpen}
				onToggle={handleDetailsCallback}
				on:toggle={handleDetailsEvent}
			>
				<p>Disclosure content preview.</p>
			</Details>
			<p class="workbench__result">State: {detailsOpen ? "open" : "closed"}</p>
		</section>
	</div>

	<div class="workbench__layout">
		<section aria-labelledby="summary-heading">
			<h2 id="summary-heading">Summary</h2>
			<Summary
				title="Your details"
				items={summaryItems}
				onChange={handleSummaryCallback}
				on:change={handleSummaryEvent}
			/>
		</section>

		<section aria-labelledby="paginator-heading">
			<h2 id="paginator-heading">Paginator</h2>
			<Paginator pageCount={5} pageCurrent={3} prevHref="?page=2" nextHref="?page=4" />
		</section>
	</div>

	<div class="workbench__layout">
		<section aria-labelledby="accordion-heading">
			<h2 id="accordion-heading">Accordion</h2>
			<Accordion
				id="workbench-accordion"
				showToggle
				onToggle={handleAccordionCallback}
				on:toggle={handleAccordionEvent}
			>
				<AccordionItem title="First panel">
					<p>First accordion panel content.</p>
				</AccordionItem>
				<AccordionItem title="Second panel">
					<p>Second accordion panel content.</p>
				</AccordionItem>
			</Accordion>
			<p class="workbench__result">Toggle events: {accordionChangeCount}</p>
		</section>

		<section aria-labelledby="tabs-heading">
			<h2 id="tabs-heading">Tabs</h2>
			<Tabs bind:selected={selectedTab} onChange={handleTabCallback} on:change={handleTabEvent}>
				<Tab title="Overview">
					<p>Overview tab content.</p>
				</Tab>
				<Tab title="Details">
					<p>Details tab content.</p>
				</Tab>
			</Tabs>
			<p class="workbench__result">
				Selected tab: {selectedTab || "(none)"}; changes: {tabChangeCount}
			</p>
		</section>
	</div>

	<div class="workbench__layout">
		<section aria-labelledby="grid-heading">
			<h2 id="grid-heading">Grid</h2>
			<Grid colWidth="medium" gridGap="narrow" rowHeight={96}>
				<GridCell><div class="workbench__grid-cell">Cell one</div></GridCell>
				<GridCell colspan={2}
					><div class="workbench__grid-cell">Cell two, spans two columns</div></GridCell
				>
			</Grid>
		</section>

		<section aria-labelledby="document-list-heading">
			<h2 id="document-list-heading">DocumentList</h2>
			<DocumentList items={documentItems} compact>
				<Document
					title="Nested document"
					href="?doc=nested"
					description="Nested child composition."
				/>
			</DocumentList>
		</section>
	</div>

	<div class="workbench__layout">
		<section aria-labelledby="nav-sections-heading">
			<h2 id="nav-sections-heading">NavSections</h2>
			<NavSections contentsLabel="On this page">
				<NavSection id="workbench-context" title="Context registration">
					<p>Parent and child sections share observer and table-of-contents state.</p>
				</NavSection>
				<NavSection id="workbench-snippets" title="Nested snippet" subsection>
					<p>Subsection content preview.</p>
				</NavSection>
			</NavSections>
		</section>

		<section aria-labelledby="timeline-heading">
			<h2 id="timeline-heading">Timeline</h2>
			<Timeline items={timelineItems}>
				<TimelineItem title="Current test">
					<p>Nested timeline item content.</p>
				</TimelineItem>
			</Timeline>
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
