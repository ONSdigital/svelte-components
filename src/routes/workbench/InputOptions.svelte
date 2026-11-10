<script>
	import Details from "$lib/components/Details/Details.svelte";

	/** @typedef {{ name: string; type: string; kind: string; options?: (string | number)[]; nullable?: boolean; initial?: unknown; defaultText?: string; description?: string }} PropOption */
	/** @type {{ componentName: string; fields: PropOption[]; values?: Record<string, unknown>; onChange?: (values: Record<string, unknown>) => void; children?: import("svelte").Snippet }} */
	let { componentName, fields, values = $bindable({}), onChange = () => {}, children } = $props();
	/** @type {Record<string, string>} */
	let errors = $state({});
	/** @type {Record<string, string>} */
	let drafts = $state({});
	const prefix = $props.id();

	/** @param {string} name @param {unknown} value */
	function update(name, value) {
		values = { ...values, [name]: value };
		delete errors[name];
		onChange(values);
	}

	/** @param {string} name */
	function reset(name) {
		const next = { ...values };
		delete next[name];
		delete errors[name];
		delete drafts[name];
		values = next;
		onChange(values);
	}

	function resetAll() {
		values = {};
		errors = {};
		drafts = {};
		onChange(values);
	}

	/** @param {PropOption} field */
	function current(field) {
		return Object.hasOwn(values, field.name) ? values[field.name] : field.initial;
	}

	/** @param {PropOption} field @param {string} text */
	function updateJSON(field, text) {
		drafts[field.name] = text;
		try {
			const parsed = JSON.parse(text);
			if (
				/^\w+\[\]$/.test(field.type) &&
				!Array.isArray(parsed) &&
				!(parsed === null && field.nullable)
			)
				throw new Error("Expected a JSON array.");
			update(field.name, parsed);
		} catch (error) {
			errors[field.name] = error instanceof Error ? error.message : "Invalid JSON";
		}
	}

	/** @param {unknown} value */
	function json(value) {
		return JSON.stringify(value ?? null, null, 2);
	}
</script>

<Details title="Input Options" headingTag="h3" cls="workbench-input-options">
	<div class="options-heading">
		<strong>{componentName}</strong><button type="button" onclick={resetAll}>Reset all</button>
	</div>
	<div class="prop-fields">
		{#each fields as field (field.name)}
			<div class="prop-row">
				<div class="prop-heading">
					<label for={`${prefix}-${field.name}`}>{field.name}</label><code>{field.type}</code
					><button
						type="button"
						onclick={() => reset(field.name)}
						disabled={!Object.hasOwn(values, field.name)}>Reset</button
					>
				</div>
				{#if field.description}<p class="prop-description">{field.description}</p>{/if}
				{#if field.defaultText}<p class="prop-default">
						Default: <code>{field.defaultText}</code>
					</p>{/if}
				{#if field.kind === "reference"}
					<output id={`${prefix}-${field.name}`}>{json(current(field))}</output>
				{:else}
					<div class="prop-control">
						{#if field.kind === "boolean" || field.kind === "callback"}
							<input
								id={`${prefix}-${field.name}`}
								type="checkbox"
								checked={Boolean(current(field))}
								onchange={(event) => update(field.name, event.currentTarget.checked)}
							/>
						{:else if field.kind === "enum"}
							<select
								id={`${prefix}-${field.name}`}
								value={String(current(field) ?? field.options?.[0] ?? "")}
								onchange={(event) =>
									update(
										field.name,
										typeof field.options?.[0] === "number"
											? Number(event.currentTarget.value)
											: event.currentTarget.value
									)}
								>{#each field.options ?? [] as option (option)}<option value={String(option)}
										>{option}</option
									>{/each}</select
							>
						{:else if field.kind === "mixed"}
							<select
								aria-label={`${field.name} value type`}
								value={typeof current(field) === "number" ? "number" : "string"}
								onchange={(event) =>
									update(
										field.name,
										event.currentTarget.value === "number"
											? Number(current(field)) || 0
											: String(current(field) ?? "")
									)}
								><option value="string">Text</option><option value="number">Number</option></select
							>
							<input
								id={`${prefix}-${field.name}`}
								type="text"
								inputmode={typeof current(field) === "number" ? "decimal" : "text"}
								value={String(current(field) ?? "")}
								oninput={(event) => {
									const value = event.currentTarget.value;
									if (typeof current(field) !== "number") update(field.name, value);
									else if (value !== "" && Number.isFinite(Number(value)))
										update(field.name, Number(value));
								}}
							/>
						{:else if field.kind === "number"}
							<input
								id={`${prefix}-${field.name}`}
								type="number"
								step="any"
								value={typeof current(field) === "number" ? Number(current(field)) : ""}
								oninput={(event) => {
									if (event.currentTarget.value !== "")
										update(field.name, event.currentTarget.valueAsNumber);
								}}
							/>
						{:else if field.kind === "json"}
							<textarea
								id={`${prefix}-${field.name}`}
								rows="3"
								spellcheck="false"
								value={drafts[field.name] ?? json(current(field))}
								aria-invalid={Boolean(errors[field.name])}
								aria-describedby={errors[field.name] ? `${prefix}-${field.name}-error` : undefined}
								oninput={(event) => updateJSON(field, event.currentTarget.value)}
							></textarea>
						{:else if field.kind === "snippet"}
							<textarea
								id={`${prefix}-${field.name}`}
								rows="2"
								value={String(current(field) ?? "")}
								oninput={(event) => update(field.name, event.currentTarget.value)}
							></textarea>
						{:else if field.kind === "function"}
							<select
								id={`${prefix}-${field.name}`}
								value={String(current(field) ?? "default")}
								onchange={(event) => update(field.name, event.currentTarget.value)}
								><option value="default">Component default</option><option value="sample"
									>Sample implementation</option
								><option value="empty">Empty result</option></select
							>
						{:else}
							<input
								id={`${prefix}-${field.name}`}
								type="text"
								value={String(current(field) ?? "")}
								oninput={(event) => update(field.name, event.currentTarget.value)}
							/>
						{/if}
						{#if field.nullable}<button
								type="button"
								onclick={() => update(field.name, null)}
								disabled={Object.hasOwn(values, field.name) && values[field.name] === null}
								>Set null</button
							>{/if}
					</div>
				{/if}
				{#if errors[field.name]}<p
						class="prop-error"
						id={`${prefix}-${field.name}-error`}
						role="alert"
					>
						{errors[field.name]}
					</p>{/if}
			</div>
		{/each}
	</div>
	{@render children?.()}
</Details>

<style>
	.options-heading,
	.prop-heading,
	.prop-control {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.375rem;
	}
	.options-heading {
		justify-content: space-between;
		margin-bottom: 0.5rem;
	}
	.prop-fields {
		display: grid;
		gap: 0 1rem;
	}
	.prop-row {
		border-top: 1px solid #b1b4b6;
		padding: 0.375rem 0;
		min-width: 0;
	}
	.prop-heading {
		font-size: 0.875rem;
	}
	.prop-heading label {
		font-weight: bold;
	}
	.prop-heading code {
		font-size: 0.75rem;
		overflow-wrap: anywhere;
		flex: 1;
		min-width: 0;
	}
	.prop-control {
		margin-top: 0.25rem;
	}
	.prop-control input:not([type="checkbox"]),
	select,
	textarea {
		box-sizing: border-box;
		max-width: 100%;
		min-width: 0;
		margin: 0;
		font-size: 0.875rem;
		padding: 0.25rem 0.375rem;
		line-height: 1.25;
	}
	.prop-control input:not([type="checkbox"]),
	select {
		height: 2rem;
		min-height: 2rem;
	}
	.prop-control input:not([type="checkbox"]),
	textarea {
		flex: 1;
		width: 100%;
	}
	textarea {
		min-height: 3.5rem;
		resize: vertical;
		font-size: 0.8125rem;
	}
	button {
		padding: 0.125rem 0.375rem;
		font-size: 0.8125rem;
		line-height: 1.5;
	}
	.prop-description,
	.prop-default {
		margin: 0.125rem 0;
		font-size: 0.75rem;
		line-height: 1.35;
		overflow-wrap: anywhere;
	}
	.prop-error {
		color: #a11;
		margin: 0.25rem 0;
		font-size: 0.8125rem;
	}
	output {
		display: block;
		white-space: pre-wrap;
		overflow-wrap: anywhere;
		font-size: 0.8125rem;
	}
	@media (min-width: 48rem) {
		.prop-fields {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>
