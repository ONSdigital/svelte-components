# Svelte 5 Migration Guide

This package targets the Svelte 5 compiler/runtime. It does not promise Svelte 3 or 4 compilation. Ordinary child markup remains supported; components render it through their `children` snippet prop.

## Named Slots

Replace named slot content with snippet blocks or snippet props. Content passed with `slot="..."` is no longer rendered, and Svelte gives no error or warning, so search for `slot=` when upgrading (eg. an empty Scroller):

| Component     | Previous Slot                                        | Snippet Prop                   |
| ------------- | ---------------------------------------------------- | ------------------------------ |
| Button        | `icon`                                               | `iconSlot`                     |
| Card          | `image`, `title`                                     | `imageContent`, `titleContent` |
| Hero, Header  | `before`, `after`                                    | `before`, `after`              |
| NavSections   | `before`, `after`, `beforeNav`, `afterNav`, `footer` | Same names                     |
| Scroller      | `background`, `foreground`                           | Same names                     |
| Toolbar       | `controls`                                           | `controls`                     |
| ToolbarButton | `custom`                                             | `customContent`                |

Card's image/title snippet overrides retain their existing linked-card behavior. Its string `image` and `title` props remain available as fallbacks. ToolbarButton's boolean `custom` prop is unchanged.

```svelte
<Card href="/release" title="Release">
	{#snippet titleContent()}<h3>Custom release title</h3>{/snippet}
	<p>Card content</p>
</Card>

<Scroller>
	{#snippet background()}<div>Background content</div>{/snippet}
	{#snippet foreground()}
		<ScrollerSection><p>Caption</p></ScrollerSection>
	{/snippet}
</Scroller>
```

## Events And Bindings

Relevant event-emitting components retain dispatched events under Svelte 5 alongside callback props. Callback arguments match the dispatched event's `detail`; see each component's documentation for payload types. Keeping `createEventDispatcher` and supported `on:event` usage is intentional. Existing two-way bindings use `$bindable`.

Svelte 5 throws an error (`props_invalid_value`) when a parent binds a variable that is `undefined` (eg. `let value = $state()`) to a `$bindable` prop with a default value. Select (`value`, `clearInput`) and Checkbox (`checked`) set their defaults in the component instead, so, as in v1, a bound variable that starts `undefined` is set to the default. `bind:clearInput` gets Select's function for clearing the selection. Other bindable props still have defaults: start bound variables with a value (eg. `$state(null)`).

## Reactive Inputs

- Theme style overrides and Container sizing update when props change.
- ErrorPage accepts page-state objects or page stores; explicit status/message props take precedence over inferred values.
- RelatedContent's default section follows changing title/links unless `related` is supplied.
- Tooltip follows nested child focus, supports changing placement/text/width, and removes listeners and Popper instances on replacement or unmount.
- DataCard/Sparkline and Table update with replacement data; zero values and empty series are covered by their component docs.
- Contents' skip link uses the supplied `skipHref`.

## HTML And External Charts

Existing HTML-rendering APIs remain trusted-input contracts, including List items, DescriptionList values, Table cells, DataCard captions and Theme's generated head styles. Sanitize untrusted content upstream; this migration does not add a sanitizer.

Chart, BarChart, ColumnChart, LineChart, ScatterChart and DotPlotChart are owned by `@onsvisual/svelte-charts`, not this package. Their implementation/event APIs were not migrated here. Vite SSR applications using them should compile `@onsvisual/svelte-charts` and `layercake` through `ssr.noExternal`.

## Validation Status

Component syntax migration is separate from repository-wide diagnostic cleanup and publishing. Consult [the migration log](SVELTE_5_MIGRATION_LOG.md) for the latest checks, known baseline failures and deployment status. The workbench includes dedicated migrated-component fixtures and an isolated Main/ErrorPage page to avoid nested main landmarks.
