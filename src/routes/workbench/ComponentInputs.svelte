<script>
	import { untrack } from "svelte";
	import { base } from "$app/paths";
	import InputOptions from "./InputOptions.svelte";
	import { editorFields } from "./prop-fixtures.js";

	/** @type {{ schemas: import('./prop-fixtures.js').ComponentSchema[] }} */
	let { schemas } = $props();
	let selected = $state("Button");
	/** @type {Record<string, Record<string, unknown>>} */
	let saved = $state({});
	/** @type {Record<string, unknown>} */
	let values = $state({});
	/** @type {{ type: string; name: string; detail: unknown }[]} */
	let activity = $state([]);
	let remountOnEdit = $state(false);
	let mountKey = $state(0);
	let revision = $state(0);
	let ready = $state(false);
	let height = $state(320);
	let failure = $state("");
	/** @type {HTMLIFrameElement | undefined} */
	let frame = $state();
	const schema = $derived(schemas.find((schema) => schema.name === selected));
	const fields = $derived(schema ? editorFields(schema) : []);

	function selectComponent() {
		values = saved[selected] ?? {};
		activity = [];
		failure = "";
		revision++;
	}

	/** @param {Record<string, unknown>} next */
	function change(next) {
		values = next;
		saved[selected] = next;
		failure = "";
		if (remountOnEdit) {
			ready = false;
			mountKey++;
		}
		revision++;
	}

	function remount() {
		ready = false;
		failure = "";
		mountKey++;
	}

	function send() {
		frame?.contentWindow?.postMessage(
			{ type: "workbench:props", componentName: selected, values: $state.snapshot(values) },
			window.location.origin
		);
	}

	$effect(() => {
		revision;
		selected;
		if (ready && frame) untrack(send);
	});

	/** @param {MessageEvent} event */
	function receive(event) {
		if (
			event.origin !== window.location.origin ||
			event.source !== frame?.contentWindow ||
			!event.data ||
			typeof event.data !== "object"
		)
			return;
		const message = event.data;
		if (message.type === "workbench:ready") {
			ready = true;
			send();
		} else if (message.type === "workbench:height")
			height = Math.min(1000, Math.max(220, Number(message.height) || 320));
		else if (message.type === "workbench:error") failure = String(message.message);
		else if (message.type === "workbench:event") {
			activity = [
				{ type: message.eventType, name: message.name, detail: message.detail },
				...activity
			].slice(0, 12);
			if (message.eventType === "binding") {
				values[message.name] = message.detail;
				saved[selected] = values;
			}
		}
	}
</script>

<svelte:window onmessage={receive} />
<section class="component-inputs" aria-labelledby="component-inputs-heading">
	<h2 id="component-inputs-heading">Component Test Environment</h2>
	<div class="component-picker">
		<label for="prop-component">Component</label><select
			id="prop-component"
			bind:value={selected}
			onchange={selectComponent}
			>{#each schemas as entry (entry.name)}<option value={entry.name}
					>{entry.name}{entry.external
						? " (svelte-charts)"
						: entry.name !== entry.canonical
							? ` (${entry.canonical} alias)`
							: ""}</option
				>{/each}</select
		><button type="button" onclick={remount}>Remount preview</button><label
			><input type="checkbox" bind:checked={remountOnEdit} /> Remount on edit</label
		>
	</div>
	{#if schema}
		{#key selected}<InputOptions componentName={selected} {fields} bind:values onChange={change}
				><p class="json-note">
					Nested function values: <code>{'{"$function":"percent"}'}</code>,
					<code>{'{"$function":"uppercase"}'}</code>, or <code>{'{"$function":"string"}'}</code>.
				</p></InputOptions
			>{/key}
		<h3>{selected} Preview</h3>
		{#if failure}<p class="preview-error" role="alert">{failure}</p>{/if}
		{#key mountKey}<iframe
				bind:this={frame}
				src={`${base}/workbench/props/`}
				title="Component prop preview"
				style:height={`${height}px`}
			></iframe>{/key}
		<div class="activity-heading">
			<h3>Callbacks, Events And Bindings</h3>
			<button type="button" onclick={() => (activity = [])} disabled={!activity.length}
				>Clear</button
			>
		</div>
		<ol class="prop-activity" aria-label="Component prop activity">
			{#each activity as item, index (index)}<li>
					<strong>{item.type}: {item.name}</strong>
					<pre>{JSON.stringify(item.detail, null, 2)}</pre>
				</li>{/each}
		</ol>
	{/if}
</section>

<style>
	.component-inputs {
		border-top: 2px solid #b1b4b6;
		padding: 1.5rem 0;
		min-width: 0;
	}
	.component-picker,
	.activity-heading {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 1rem;
	}
	.component-picker select {
		min-width: 0;
		max-width: 100%;
	}
	iframe {
		width: 100%;
		display: block;
		border: 1px solid #b1b4b6;
		background: white;
	}
	.prop-activity {
		max-height: 20rem;
		overflow: auto;
		padding-left: 1.5rem;
	}
	.prop-activity pre {
		font-size: 0.8125rem;
		white-space: pre-wrap;
		overflow-wrap: anywhere;
		margin: 0.25rem 0 0.75rem;
	}
	.preview-error {
		color: #a11;
		overflow-wrap: anywhere;
	}
	.json-note {
		font-size: 0.875rem;
		overflow-wrap: anywhere;
	}
</style>
