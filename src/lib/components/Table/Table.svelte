<script>
	import { formatter, isNumeric, ascending, descending } from "../../js/utils.js";

	/** @typedef {Record<string, unknown>} Row */
	/** @typedef {{ key: string; label: string; numeric?: boolean; dp?: number; formatter?: (value: number) => string }} Column */
	/** @type {{ title?: string | null; compact?: boolean; sortable?: boolean; responsive?: boolean; rowHover?: boolean; height?: number | "auto"; data?: Row[]; columns?: Column[]; cls?: string | null }} */
	let {
		title = null,
		compact = false,
		sortable = false,
		responsive = false,
		rowHover = false,
		height = "auto",
		data = [],
		columns,
		cls = null
	} = $props();
	/** @type {{ key: string; direction: "ascending" | "descending" } | null} */
	let activeSort = $state(null);
	const resolvedColumns = $derived(
		columns ?? Object.keys(data[0] ?? {}).map((key) => ({ key, label: key }))
	);
	const formatters = $derived(
		resolvedColumns.map((column) => column.formatter || formatter(column.dp))
	);
	const sort = $derived(
		resolvedColumns.map((column) =>
			activeSort?.key === column.key ? activeSort.direction : "none"
		)
	);
	const sortedData = $derived.by(() => {
		const rows = [...data];
		const column = resolvedColumns.find((column) => column.key === activeSort?.key);
		if (column && activeSort) {
			const compare = activeSort.direction === "ascending" ? ascending : descending;
			rows.sort((first, second) => compare(first[column.key], second[column.key]));
		}
		return rows;
	});

	/** @param {Column} column */
	function sortBy(column) {
		activeSort = {
			key: column.key,
			direction:
				activeSort?.key === column.key && activeSort.direction === "ascending"
					? "descending"
					: "ascending"
		};
	}

	/** @param {Row} row @param {Column} column @param {number} index */
	function cellContent(row, column, index) {
		const value = row[column.key];
		if (column.numeric && isNumeric(value)) return formatters[index](Number(value));
		return value == null || value === "" ? "&ndash;" : String(value);
	}
</script>

<div
	class={cls}
	style:overflow={typeof height === "number" ? "auto" : null}
	style:height={typeof height === "number" ? `${height}px` : null}
	style:display={typeof height !== "number" ? "contents" : null}
>
	<table
		class="ons-table"
		class:ons-table--sortable={sortable}
		class:ons-table--compact={compact}
		class:ons-table--responsive={responsive}
		class:ons-table--row-hover={rowHover}
		class:sticky-header={typeof height === "number"}
		data-aria-sort={sortable ? "Sort by" : null}
		data-aria-asc={sortable ? "ascending" : null}
		data-aria-desc={sortable ? "descending" : null}
	>
		{#if title}<caption class="ons-table__caption">{title}</caption>{/if}
		<thead class="ons-table__head">
			<tr class="ons-table__row">
				{#each resolvedColumns as col, i (col.key)}
					{#if sortable}
						<th
							scope="col"
							class="ons-table__header"
							class:ons-table__header--numeric={col.numeric}
							aria-sort={sort[i]}
						>
							<button
								aria-label="Sort by {col.label}"
								type="button"
								data-index={i}
								class="ons-table__sort-button"
								onclick={() => sortBy(col)}
							>
								{col.label}<svg
									class="ons-icon"
									viewBox="0 0 12 19"
									xmlns="http://www.w3.org/2000/svg"
									focusable="false"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										class="ons-topTriangle"
										d="M6 0l6 7.2H0L6 0zm0 18.6l6-7.2H0l6 7.2zm0 3.6l6 7.2H0l6-7.2z"
									></path>
									<path class="ons-bottomTriangle" d="M6 18.6l6-7.2H0l6 7.2zm0 3.6l6 7.2H0l6-7.2z"
									></path>
								</svg>
							</button>
						</th>
					{:else}
						<th
							scope="col"
							class="ons-table__header"
							class:ons-table__header--numeric={col.numeric}
						>
							<span class="ons-table__header-text">{col.label}</span>
						</th>
					{/if}
				{/each}
			</tr>
		</thead>
		<tbody class="ons-table__body">
			{#each sortedData as row, rowIndex (rowIndex)}
				<tr class="ons-table__row">
					{#each resolvedColumns as col, i (col.key)}
						<td
							class="ons-table__cell"
							class:ons-table__cell--numeric={col.numeric}
							data-th={col.label}>{@html cellContent(row, col, i)}</td
						>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	table.sticky-header thead.ons-table__head {
		position: sticky;
		top: 0;
		background: var(--ons-color-page-light);
		border-bottom: none;
	}
	table.sticky-header thead.ons-table__head th {
		box-shadow: 0px -2px var(--ons-color-borders) inset;
		border-bottom: none;
	}
</style>
