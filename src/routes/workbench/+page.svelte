<script>
	import '$lib/css/main.css';
	import Button from '$lib/components/Button/Button.svelte';
	import Input from '$lib/components/Input/Input.svelte';
	import Notice from '$lib/components/Notice/Notice.svelte';
	import { base } from '$app/paths';

	/** @type {'primary' | 'secondary' | 'ghost'} */
	let buttonVariant = 'primary';
	let buttonDisabled = false;
	let clickCount = 0;
	let fieldValue = '';
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
		addActivity('Button click event', event.detail?.type ?? 'No event detail');
	}

	/** @param {CustomEvent<{ value: string | null; e: Event }>} event */
	function handleInput(event) {
		addActivity('Input event', event.detail.value || '(empty value)');
	}

	/** @param {CustomEvent<{ value: string | null; e: Event }>} event */
	function handleChange(event) {
		addActivity('Input change event', event.detail.value || '(empty value)');
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
			<p class="workbench__result" aria-live="polite">Current value: {fieldValue || '(empty)'}</p>
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