# Svelte 5 Migration Log

This log records migration decisions, component changes, verification results, and follow-up work. Add an entry whenever a material decision is made and after each component block is completed.

## Migration Contract

- Svelte 5 is the supported baseline. The package does not guarantee that components compile under Svelte 3 or 4.
- Relevant event-emitting components should support callback props and dispatched component events under Svelte 5 where practical. Both interfaces should receive equivalent payloads once per user action.
- Migrate one similarity-based component block at a time. Do not begin the next block until focused tests, checks, docs/workbench updates, and this log entry are complete.
- Keep the interactive workbench available locally and on GitHub Pages throughout migration; keep Storybook's root page intact.

## 2026-10-20: Baseline and Initial Setup

### Decisions

- Changed the Svelte peer support target from `3 - 5` to `^5.0.0`; existing runes-based components already require Svelte 5 semantics.
- The callback-prop and dispatched-event compatibility goal applies under Svelte 5 and is not a Svelte 3/4 compiler guarantee.
- Added the SvelteKit workbench under `/svelte-components/workbench/` and staged its prerendered page and assets alongside Storybook for GitHub Pages.
- Added Button and Input examples to the workbench as initial manual smoke tests. Expand it as each component block is migrated.

### Baseline Checks

- `npm ci`: installed dependencies. The existing `prepare` hook reported missing `dist/css` on a clean checkout; installation completed. npm also reported 21 dependency vulnerabilities; they are not addressed as part of this migration setup.
- `npm run check`: failed with 482 errors and 27 warnings in 94 files before migration changes.
- `npm test`: 7 passed, 1 failed. `src/routes/page.svelte.test.js` expects a heading that is not present in the existing home route.
- `npm run lint`: failed at Prettier with formatting warnings in 265 files; ESLint did not run because the command chains it after Prettier.
- `npm run build:package`: passed, including `publint`.
- `npx storybook build`: passed. Existing warnings include legacy accessibility/slot warnings and oversized chunks.

### Changes

- Added the initial interactive workbench route and a script to merge its static output into `storybook-static` without replacing Storybook's root `index.html`.
- Updated package scripts and README instructions for local and deployed workbench use.
- Updated Svelte peer support to `^5.0.0` and configured the GitHub Pages base path and route trailing slash.

### Step 1-4 Verification

- `npm run build:workbench`: passed; SvelteKit prerendered the route to `build/workbench/index.html`.
- `npm run build`: passed, including package build, workbench build, Storybook build, and staging.
- Staged output contains Storybook's root `index.html`, `workbench/index.html`, `.nojekyll`, and all referenced SvelteKit runtime assets.
- Local workbench returned HTTP 200 at `http://127.0.0.1:5173/svelte-components/workbench/`; Button click, Input binding, input/change event logging, and clear-history control were exercised in the browser.
- `npm run deploy` published the build to GitHub Pages. The live route at `https://onsdigital.github.io/svelte-components/workbench/` returns HTTP 200; its Button and Input interactions were verified in-browser.
- At a 375px viewport, page content had no horizontal overflow.
- Post-setup `npm run check`: still 482 errors and 27 warnings in 94 files; the new workbench route adds no diagnostics.
- Post-setup `npm test`: unchanged at 7 passed and 1 failed in `src/routes/page.svelte.test.js`.

### Follow-up

- Steps 1-4 are complete. Continue with component block 5A.

## 2026-10-20: Component Block 5A

### Components

- Migrated `ChangeStat`, `UpdateStatus`, `Icon`, `BackLink`, `Notice`, `Section`, `Divider`, `Em`, and `ErrorPanel` props to Svelte 5 `$props()`.
- Replaced derived `$:` state with `$derived()` in `ChangeStat`, `UpdateStatus`, and `Em`.
- Replaced default slots with optional `children` snippet rendering in `Notice`, `Section`, `Em`, and `ErrorPanel`; ordinary default child content remains supported.
- Preserved component prop names, defaults, classes, and existing presentation behavior.
- Added configurable workbench fixtures for all nine components.

### Verification

- Focused block A tests: 15 passed across `ChangeStat`, `UpdateStatus`, and the remaining seven presentational components.
- `npm run check`: remains at the pre-migration baseline of 482 errors and 27 warnings in 94 files; block A and workbench add no diagnostics.
- Targeted Prettier check: passed for all block A and workbench files.
- Targeted ESLint: passed for all block A and workbench files.
- `npm run build:workbench`, `npm run build:docs`, and `npm run build:package`: passed; `publint` reported all good.
- Deployed workbench includes all block A components. Live interactions verified for ChangeStat direction, Notice mode, Section title/visibility, and ErrorPanel message.

### Follow-up

- Block 5A is complete. Proceed to block 5B only after confirming this log entry and the deployed workbench.

## 2026-10-20: Component Block 5B

### Components

- Migrated `Button`, `Input`, `Textarea`, `Dropdown`, `Checkbox`, `Checkboxes`, `Radio`, `Radios`, `Select`, `Details`, `Summary`, and `Paginator` to Svelte 5 props; retained two-way bindings with `$bindable()` where the public API supports them.
- Added callback props alongside dispatched events for the event-emitting controls. Both paths receive the same detail for `Button`, `Input`, `Textarea`, `Dropdown`, checkbox/radio groups, `Details`, and `Summary`; `Select` retains its direct selected-value `change` and `null` `clear` payloads through `onChange`/`onClear`.
- Converted legacy child slots in `Button`, `Checkboxes`, `Radios`, and `Details` to snippets. Button's named `icon` slot is now the `iconSlot` snippet; no existing named icon-slot consumers were found.
- Kept `Paginator` navigation-only; migrated its props and made its decorative arrows hidden from assistive technology.
- Added focused tests for control bindings, callback/event payload parity, group selection, Details open state, Summary actions, and Paginator links. Added workbench fixtures and callback/event documentation.

### Verification

- Combined focused tests for blocks 5A and 5B: 25 passed across 13 test files.
- `npm run check`: 423 errors and 27 warnings in 86 files remain, down from the original 482 errors in 94 files. No diagnostics remain in the migrated 5B component sources or workbench; remaining 5B Storybook `args` diagnostics were present in the initial baseline.
- Targeted ESLint and Prettier checks passed for all changed 5B code, tests, docs, and workbench files.
- `npm run build`: passed, including package build, `publint`, workbench prerender, Storybook build, and staging.
- `npm run deploy`: published the expanded workbench to GitHub Pages. Live interactions verified for Button, Textarea, Dropdown, Checkboxes, Radios, Select, Details, Summary, and Input; Paginator links render with their configured destinations.
- The deployed workbench has no horizontal overflow at a 375px viewport.

### Follow-up

- Block 5B is complete. Proceed to block 5C only after reviewing this entry and the deployed workbench.

## 2026-10-20: Component Block 5C

### Components

- Migrated `Accordion`/`AccordionItem`, `Tabs`/`Tab`, `Grid`/`GridCell`, `NavSections`/`NavSection`, `DocumentList`/`Document`, and `Timeline`/`TimelineItem` to Svelte 5 props and snippets.
- Kept parent/child context contracts intact. Grid now provides reactive context getters for layout values; NavSection and Tab register/unregister their metadata through the existing stores.
- Preserved the Accordion and Tabs browser helpers while typing their DOM boundaries. Accordion toggle and Tabs change support callback props alongside their dispatched events.
- Added focused tests for Accordion toggles, Tab and NavSection registration, Grid layout/context, and data-driven plus nested DocumentList/Timeline content. Added all six families to the workbench and documented the snippet composition APIs.

### Verification

- Focused 5C tests: 8 passed across 7 test files.
- `npm run check`: 336 errors and 25 warnings in 75 files remain, down from the original baseline. No diagnostics remain in 5C component sources or workbench; the remaining family-local diagnostics are preexisting Storybook `args` types.
- `npm run build`: passed, including package build, `publint`, workbench prerender, Storybook build, and staging.
- Targeted ESLint passed with only the established raw-HTML and NavSections DOM-reorder rules excluded; targeted Prettier and `git diff --check` passed.
- Deployed workbench includes all six 5C families. Live Accordion “Show all” and Tabs selection were verified, including callback and dispatched-event logs.
- The deployed workbench renders 26 component sections without horizontal overflow at 375px; the local route returns HTTP 200 at `http://127.0.0.1:5173/svelte-components/workbench/`.

### Follow-up

- Block 5C is complete. Pause before starting block 5D.

## 2026-10-29: Component Block 5D

### Components And APIs

- Migrated Observe, LazyLoad, Embed, Scroller/ScrollerSection, AnalyticsBanner, Header and navigation variants, Footer, ShareButtons, and the remaining Toolbar family to rune-based props/state and snippet composition. Retained compiler compatibility helpers where needed to preserve SSR path calculation or event modifiers.
- Added Observe `onEnter`/`onExit`, Embed `onLoad`, Scroller `onChange`/`onEnter`/`onExit`, and ToolbarButton `onClick` callback props alongside dispatched events with equivalent payloads. Existing bindings remain available.
- Named slot replacements: Header `before`/`after`, Scroller `background`/`foreground`, and Toolbar `controls` become same-named snippets. ToolbarButton's `custom` slot becomes `customContent`, avoiding a conflict with its existing boolean `custom` prop. Updated stories and component documentation.
- Observers disconnect on disposal; Embed clears its polling timer and removes its Pym child, preserving its string `id` option. Scroller removes shared scroll/resize listeners after its last instance unmounts and now refreshes immediately on intersection entry, including direct jumps into a section.
- Header navigation releases component callbacks/listeners; legacy navigation uses AbortController cleanup. Removed its undefined submenu handler and aligned mobile detection with the stylesheet's 740px breakpoint rather than requiring a host `viewport-sm` class. The standard navigation's shared tick-manager loop remains, with disposed component callbacks removed.
- Toolbar container registry subscriptions and beforeunload listeners now clean up. Help dialogs anchor to the visible button wrapper, including hidden checkbox triggers, and remain within narrow viewports.
- AnalyticsBanner accepts page stores or page-state objects; `analyticsEvent` is SSR-safe. An empty analytics ID keeps the consent UI without loading tracking scripts; rejecting consent updates the usage binding.

### Workbench And Verification

- Added a browser-integration workbench fixture with mount/unmount, observer/lazy-content status, Embed load count, Header variants, Toolbar actions/help, sharing links, consent UI, Footer modes, and a two-section Scroller.
- Added 12 block 5D tests across seven files, covering callback/event parity, observer and timer disposal, navigation cleanup, mobile submenu/help behavior, direct Scroller entry, consent, and full-fixture SSR without browser globals.
- Final suite: 46 tests passed; the sole failure remains the pre-existing home-route heading assertion in `src/routes/page.svelte.test.js`. The workspace runner still included it when a CLI exclusion was supplied.
- `npm run check`: 267 errors and 10 warnings in 66 files, down from block 5C's 336 errors and 25 warnings. The CLI reports no diagnostics in the new fixtures/tests. The editor separately reports two Scroller-test errors treating optional snippets/callbacks as required; the generated package declaration correctly marks them optional, and CLI/runtime checks pass. Repository-wide type errors and accessibility warnings remain unresolved.
- Scoped Prettier: passed. Scoped ESLint remains blocked by four parser errors in existing TypeScript Toolbar components plus four existing Toolbar-story issues (unkeyed each, raw HTML, and two unused arguments); no global lint rules or parser configuration were changed.
- `npm run build`: passed, including package generation, publint, workbench prerender, Storybook and staging. Existing oversized-chunk warnings remain.
- Browser checks covered consent without tracking, repeated mount/unmount, Header variants and mobile menu/search/submenu interaction, Toolbar help steps/toggle/action, and direct Scroller section entry. Desktop 1440px and mobile 390px checks/screenshots showed no horizontal overflow. The final deployed Scroller reached index 1 without a second synthetic scroll, with no browser errors and no Google tracking script.
- `npm run deploy`: published the final Storybook/workbench. The live route returned HTTP 200 and matched the staged HTML after normalizing Git's CRLF-to-LF conversion: https://onsdigital.github.io/svelte-components/workbench/.
- Local production preview remains available at http://127.0.0.1:4173/svelte-components/workbench/.

### Follow-up

- Block 5D is complete. Pause before starting block 5E (charts/data display). No source commit was created by this assistant session; an external source commit appeared during final verification and was preserved.

## 2026-10-30: Component Block 5E

### Scope And Changes

- Migrated this package's DataCard, internal Sparkline, and Table to Svelte 5 `$props`, `$state`, and `$derived`. ChangeStat was already completed in 5A and was not changed again.
- Chart, BarChart, ColumnChart, LineChart, ScatterChart, and DotPlotChart are examples imported from `@onsvisual/svelte-charts`, not implementations or public exports owned by this repository. Preserved that dependency and its event APIs; verified its Svelte 5 integration without editing installed package source.
- Sparkline scales, paths, endpoint position and labels now derive from current data and keys. Empty series render an explicit fallback; single-point and constant series remain finite. DataCard now displays numeric zero. Its existing reserved `bar` mode remains unimplemented and is documented as such.
- Table derives inferred columns and displayed rows from current props. Sorting operates on a copied array, retains the selected column/direction across data replacement, and follows column keys rather than positions. Column formatting updates reactively; zero cells no longer render as missing. Existing caption, compact/responsive, row-hover and sticky-header options remain.
- Preserved DataCard caption and Table cell trusted-HTML APIs and documented that they do not sanitize content. Neither local component had a dispatched component-event API requiring a callback-prop counterpart; Table retains native keyboard-operable sort buttons.
- Added `ssr.noExternal` entries for the existing chart dependency and LayerCake so Vite compiles their Svelte source for server rendering. No dependencies or package exports were added.
- Added DataCard zero/empty stories, updated component/chart documentation, and added interactive DataWorkbench fixtures. Controls cover series edge cases, values, Table refresh/inferred columns/layout, direct versus wrapped charts, chart type/data replacement, and mount/unmount. Explicit chart padding keeps endpoint marks and tick labels inside mobile SVG bounds.

### Verification

- Added 15 focused tests across three files: five DataCard/Sparkline cases, three Table cases, and seven fixture/external-chart SSR checks. All passed. Local tests cover replacement data/keys, zero/empty/single/constant series, nonmutating ascending/descending sorting, inferred schemas, formatting, and layout props.
- Full suite: 61 passed, with only the pre-existing home-route heading failure in `src/routes/page.svelte.test.js` (62 total). The SSR tests were rerun successfully after the final fixture framing adjustment.
- `npm run check`: 236 errors and 10 warnings in 65 files, down from 5D's 267 errors and 10 warnings. No CLI or editor diagnostics remain in the changed 5E components, fixtures or tests. Repository-wide diagnostics remain outside this block.
- Scoped ESLint passed with only `svelte/no-at-html-tags` excluded for the two retained, documented HTML APIs. No global lint configuration was changed. Scoped Prettier and patch whitespace checks passed.
- `npm run build`: passed, including package generation, publint, workbench prerender, Storybook and staging. `npm run build:docs` passed again after final chart-padding changes. Existing oversized-chunk warnings remain.
- Browser verification: zero/constant/single/empty DataCard states; keyboard Table sorting; reactive row and inferred-column replacement; fixed-height layout; and fixture remounting. All five external chart types rendered visible, finite SVG marks both directly and through Chart, and all ten combinations updated their marks on data replacement.
- Desktop 1440px and mobile 390px checks/screenshots showed no page overflow. Final mobile checks confirmed marks and tick labels stay inside each chart's SVG bounds for all ten direct/wrapper combinations. No browser page errors were observed during chart switching.
- `npm run deploy`: published the final Storybook/workbench. The live route returned HTTP 200 and matched staged HTML after CRLF-to-LF normalization: https://onsdigital.github.io/svelte-components/workbench/.
- Local production preview remains available at http://127.0.0.1:4174/svelte-components/workbench/.

### Follow-up

- Block 5E is complete. Pause before migration-wide final audit, cleanup or release work; remaining repository diagnostics and any other legacy component surfaces have not been declared resolved. No source commit was created by this assistant session.

## 2026-11-06: Final Component Block (5F)

### Components And Contracts

- Completed the remaining 21 implementation files: Theme, Container, Main, Card, Hero, Highlight, Tooltip, Indent, AnnouncementBanner, Blockquote, DescriptionList, ErrorPage, ErrorSummary, Image, List/Li, PhaseBanner, Breadcrumb, Contents, RelatedContent and SkipLink. Used the official Svelte compiler migrator for straightforward components and manual changes for collision-prone composition and lifecycle behavior.
- Migrated props to `$props`, derived/state values to runes, and child content to snippets. Ordinary child markup remains supported. Card's linked-card `image`/`title` slots become `imageContent`/`titleContent`, preserving string-prop fallbacks and the original linked-card scope. Hero's `before`/`after` slots become same-named snippets.
- Theme styles and Container sizing remain reactive, including client CSS wrappers. ErrorPage supports both page stores and page-state objects with reactive inferred status/message and explicit-prop precedence. RelatedContent's inferred section follows changing title/links. Contents now uses its supplied `skipHref` rather than a hard-coded destination.
- Tooltip now disposes listeners and Popper through effect cleanup, supports reactive placement/text/maximum width, and uses bubbling focus events so nested children trigger keyboard tooltips. Tests cover replacement/unmount cleanup and detached-wrapper events.
- Refined metadata types without restricting rendered metadata values, including numeric zero. Keyed list loops by index where the API does not require unique IDs. Corrected invalid SVG title attributes and redundant role markup in the touched components.
- Preserved trusted-HTML APIs in Theme, DescriptionList and List, alongside previously documented HTML APIs elsewhere. Preserved intentional dispatched-event compatibility and compiler bridges in already-migrated components; no event APIs or external chart implementations were removed.
- Updated FeatureArticle's remaining Scroller named-slot usage to `background`/`foreground` snippets. Added a consolidated migration guide, linked it from README, and updated Card, Hero, Tooltip, ErrorPage, RelatedContent and Contents documentation.

### Workbench And Verification

- Added dedicated remaining-component workbench fixtures for wrappers, composition, Tooltip, content/messaging and navigation. Main/ErrorPage render in a separate prerendered iframe route so their main landmarks are not nested inside the workbench's main element.
- Added 22 focused tests in two files: 19 client behavior checks and three SSR checks, including global Theme head styles and one-main-landmark rendering. All pass; the focused slice was rerun after final metadata compatibility refinements.
- Full suite: 83 passed and one pre-existing home-route heading failure (84 total). This block does not change that unrelated test assertion.
- `npm run check`: 194 errors and 8 warnings in 55 files, down from 5E's 236 errors and 10 warnings. No diagnostics remain in this block's implementation files, new tests or workbench routes. Existing Storybook template-argument typing and other repository-wide diagnostics remain.
- Scoped ESLint passed with only `svelte/no-at-html-tags` excluded for retained, documented HTML/CSS-generation contracts. Scoped Prettier and patch whitespace checks passed. No global lint configuration was changed.
- Library source scan found no remaining `export let`, `<slot>`, reactive `$:` statements or legacy `slot=` consumers in `src/lib/**/*.svelte`. Retained event dispatchers and the existing Header/Analytics compatibility helpers are intentional, not unfinished syntax migration.
- Final `npm run build`: passed, including package generation, publint, workbench/landmark prerender, Storybook and staging. Existing oversized-chunk warnings remain.
- Browser checks passed for theme/size/client-wrapper changes, Card custom snippets, Hero title updates, keyboard Tooltip activation and all placements, reactive related links, Contents' keyboard skip destination, fixture remounting and Main/404/500 iframe views. Popper correctly flips when requested placement lacks room. Images loaded; no page errors, nested main elements or horizontal overflow were observed at desktop 1440px and mobile 390px. Desktop/mobile screenshots were checked.
- `npm run deploy`: published the final documentation/workbench. Both `/svelte-components/workbench/` and `/svelte-components/workbench/landmarks/` returned HTTP 200 and matched staged HTML after CRLF-to-LF normalization.
- Local production preview remains available at http://127.0.0.1:4175/svelte-components/workbench/.

### Follow-up

- Component syntax migration is complete. Pause before repository-wide diagnostic/lint cleanup, final release audit, versioning or npm publication. These remaining gates have not been declared green. No source commit was created by this assistant session.

## 2026-11-13: v2 Compatibility Fixes

Found while upgrading robo-article, robo-embed and robo-scrolly to 2.0.0.

- Select: `value` and `clearInput` are bindable without defaults in `$props()`; their defaults (`null`, and the function that clears the selection) are set in the script. `bind:value` to an `undefined` variable threw `props_invalid_value`, and `bind:clearInput` (bindable in v1) wasn't bindable.
- Checkbox: an initial `checked` value (eg. `bind:checked={true}`) is now shown. `item` defaulted to `checked: false` and the effect that copies `checked` to `item` didn't run at first, so the input started unchecked. `checked` also accepts a bound `undefined` variable, as for Select.
- Scroller (and other components whose named slots became snippet props): `slot="..."` content can't be supported by a runes component (Svelte passes it in a `$$slots` prop that runes components can't read, and `<slot>` can't be used alongside `{@render}`). The migration guide now says that such content is silently not rendered.
- Tests: 7 in `Select.svelte.test.js` and the new `Checkbox.svelte.test.js`, binding props with getters and setters as `bind:` does. The 3 binding tests fail without the fixes. Full suite: 40 files, 188 tests passed. No new `npm run check` diagnostics or ESLint errors in the changed files.
- Not changed: 22 other `$bindable` props with defaults (eg. Dropdown/Input/Textarea/Radios `value`, Details/AccordionItem `open`, Tabs `selected`) still throw if bound to an `undefined` variable.

## 2026-11-16: Prop Descriptions Restored

In v1 the JSDoc comment on each `export let` gave Storybook's docs table, and editor IntelliSense, a description of the prop. Most v2 components typed their props with one inline `/** @type {{ ... }} */`. A comment can't be nested inside it, so v2 props had no descriptions in either place.

- Decision: props are typed with `@typedef {Object} Props` and `@property {Type} [name] Description` tags, which Storybook 10's Svelte docgen (`getDocumentationComment` on the props type) and `svelte-package`'s `.d.ts` output both read. The TypeScript Toolbar components get a `/** */` comment on each member of their props type instead. CLAUDE.md's component conventions now say this.
- `scripts/prop-docs.js --write` converted the 52 inline-typed components. It kept each member's type text exactly as it was and copied descriptions from the `v1-legacy` branch. Snippet props (from the slot mapping in the migration guide) and `on*` callbacks that match a dispatched event got template descriptions. In the 21 components that already used typedefs, it removed the leading `- ` from descriptions, which Storybook showed. ButtonGroup, ButtonGroupItem and ToolControl had untyped props, so their typedefs were written by hand. ButtonGroup's store also got a `Writable<string | undefined>` type, to keep `npm run check` from reporting a new error.
- Workbench fix: `prop-schema.server.js` collected typedefs with `ts.getJSDocTags()`, which leaves out `@typedef` tags. So typedef-typed components such as Blockquote, Hero and Breadcrumb lost their types in the workbench: props fell back to `unknown`/JSON, with no enum selects or snippet detection. It now reads the typedef tags from the statement's JSDoc comments and removes the leading `- ` from descriptions. A new spec in `prop-schema.spec.js` covers this.
- `npm run docs:props` writes `PROP_DOCS_REPORT.md`. It lists the 45 props still without descriptions (in EmbedParent, HeaderNav, HeaderNavCompact, HeaderNavLegacy, ToolbarButton, ToolbarIcon and ToolbarDivider), and the descriptions written for v2 rather than copied from v1, for review. Scroller `onExit`, HelpModal `onClose` and the Dropdown/Input/Textarea `onBlur` callbacks were described by hand, because their events are dispatched from a shared `else` branch.
- Verification: a script that reproduces Storybook's docgen gave the same prop names, optionality and types for all 80 components before and after, except for the types added to the three untyped components. 503 of 548 props now have descriptions. The workbench schema is unchanged for the converted components, and the typedef components now have their proper types and controls. Full suite: 41 files, 193 tests passed. `npm run check`: no new diagnostics in the changed files. `npm run build:package` passed, and descriptions appear in `dist/**/*.svelte.d.ts`.
- Follow-up: wrote the remaining 45 descriptions (EmbedParent, HeaderNav, HeaderNavCompact, HeaderNavLegacy, ToolbarButton, ToolbarIcon, ToolbarDivider), reusing wording from matching props in Header, Embed, Icon and Button. All 548 props now have descriptions. Corrected ToolbarButton `children` (it's the help modal content) and Toolbar `classes` (it applies to the toolbar). ToolbarIcon `type` and ToolbarButton `icon` are now typed as the list of toolbar icons, so the workbench shows a dropdown; `Toolbar.stories.svelte` got a matching type for its button data. The workbench now also reads `/** */` member comments in TypeScript components.

## 2026-11-16: Toolbar Components Converted From TypeScript

HelpModal, ToolbarButton, ToolbarDivider and ToolbarsContainer were the only `lang="ts"` components. ESLint couldn't parse them, because the repo's config has no TypeScript parser for `.svelte` files. They now use plain JavaScript like every other component: `@typedef {Object} Props` for props, and JSDoc `@type` comments in place of `getContext<T>()`, `$state<T>()`, `writable<T>()` and `createEventDispatcher<T>()` generics. Once ESLint could read HelpModal, it found an unused `fly` import, which was removed.

- Verification: a script that reproduces Storybook's docgen, and the workbench schema, gave the same props, types and descriptions for all four components before and after. `npm run check` reports only the warnings these files already had. ESLint passes on the four files. Full suite: 41 files, 193 tests passed.

## 2026-11-16: Docs For Coding Agents

To help people build apps with coding agents (Claude Code and GitHub Copilot), the package now includes `llms.txt` and `llms-full.txt`, generated from the source by `scripts/agent-docs.js`. They're shipped in `dist/` and published on the docs site.

- Contents:
  - `llms.txt`: setup, the rules for using the components with Svelte 5, the ONS Design System version included in the CSS (read from `src/lib/css/main.css`), an index of the components with links to their Storybook pages, and a short section on `@onsvisual/svelte-charts` and `@onsvisual/svelte-maps`.
  - `llms-full.txt`: the same, plus each component's props (type, default, bindable, description) and the first example from its docs.
- The props that throw `props_invalid_value` when bound to an `undefined` variable are listed from the source: bindable props that have a default. The list matches CLAUDE.md's known issues, and it gets shorter as each one is fixed.
- Docs examples: 11 examples led with Svelte 4 syntax (`on:change`, `let value;` bindings) and have been rewritten for Svelte 5. The `let value;` bindings would have thrown `props_invalid_value` for Dropdown, Input, Textarea, Observe, Radios and Checkboxes. Other fixes: the Textarea example showed `Input`, and the Dropdown and Select examples defined `values` but passed `options`. 8 more examples didn't compile, because of unclosed component tags, commas between attributes, `etc...` inside an array, and `export default` inside a script. 24 quoted attributes (`prop="{x}"`) were unquoted, as Svelte 5 warns that they'll be strings in future.
- Tests: `src/agent-docs.spec.js` (every export, every prop described, Design System version, no Svelte 4 syntax in examples) and `src/docs-examples.spec.js`, which compiles all 88 docs examples in runes mode. Full suite: 43 files, 286 tests passed.

## 2026-11-16: Bindable Props Accept Undefined Bound Variables

Fixes the known issue recorded in "v2 Compatibility Fixes": 22 bindable props in 16 components had defaults in `$props()`, so binding them to a variable that started `undefined` threw `props_invalid_value`. Each is now declared as `$bindable()`, with its default set in the script (`if (value === undefined) value = null;`), as Select and Checkbox `checked` already were. As in v1, a bound `undefined` variable is set to the default.

- The props: AccordionItem `open`, AnalyticsBanner `usageCookies`, Checkbox `item` and `group`, Checkboxes `value`, Details `open`, Dropdown `value`, Embed `pymChild`, Input `value`, LazyLoad `entered`, Observe `visible`, Radio `value`, Radios `value`, Scroller `count`, `index`, `sectionId`, `offset`, `progress` and `visible`, Tabs `selected`, Textarea `value`, and ToolbarButton `selected`.
- Types: TypeScript doesn't narrow a prop after its default is set, so the event payloads use `value ?? null` (Dropdown, Input, Textarea) and `index ?? null`/`sectionId ?? null` (Scroller), and Checkbox's change handler casts `item`. Behaviour is unchanged, because the values are never `undefined` once the defaults are set. Checkbox's default `item` reads the initial `id`, `label` and `description`, as the `$props()` default did, so the `state_referenced_locally` warning is ignored there.
- Workbench and agent docs: `prop-schema.server.js` and `parseProps()` read defaults from the `if (x === undefined) x = ...` lines, so the workbench's initial values are unchanged. The defaults that Select, EmbedParent and Checkbox `checked` already set in the script now show too. `llms.txt` no longer lists props that throw.
- Tests: `BindableDefaults.svelte.test.js` binds each of the 22 props to an `undefined` variable and checks that the component renders and the variable gets the default. All 16 cases fail before the fix. `src/bindable-defaults.spec.js` fails if a bindable prop gets a default in `$props()` again. Full suite: 45 files, 303 tests passed. `npm run check`: no new diagnostics.
- Docs: removed "Known issues" from CLAUDE.md, and updated the migration guide's bindings section.
