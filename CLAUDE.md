# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`@onsvisual/svelte-components`: a published npm library of Svelte 5 components that wrap the ONS Design System markup/CSS. Docs are a Storybook site plus an interactive SvelteKit "workbench", both deployed together to GitHub Pages (`https://onsdigital.github.io/svelte-components`) by `.github/workflows/deploy.yml`: on every push to `main` it runs `npm run build` and publishes `storybook-static/` to the `gh-pages` branch, which Pages serves (pull requests only check that it builds).

## Commands

```sh
npm run dev                 # SvelteKit dev server; workbench at http://localhost:5173/svelte-components/workbench/
npm run storybook           # Storybook on :6006
npm test                    # all Vitest tests, single run
npx vitest run src/lib/components/Button/Button.svelte.test.js   # one file
npx vitest run -t "calls onClick"                                 # by test name
npx vitest run --project client   # or --project server
npm run check               # svelte-check (JSDoc types via jsconfig.json)
npm run lint                # prettier --check && eslint (eslint only runs if prettier passes)
npm run format
npm run build:package       # vite build (workbench -> build/) + svelte-package -> dist/ + publint + CSS merge
npm run build               # build:package then build:docs
npm run build:docs          # storybook build + copy build/workbench into storybook-static/ (needs a prior vite build)
```

Known baseline state (see `SVELTE_5_MIGRATION_LOG.md`): `npm run check` and `npm run lint` are not clean repo-wide, and `src/routes/page.svelte.test.js` has a pre-existing failure. Judge changes by not adding new diagnostics/failures in touched files, rather than expecting a green run.

Release process (see README): changes go through a pull request to `main` (Netlify builds a Storybook preview). Then, on `main`: `npm version patch|minor|major -m "v%s"` (updates package.json and package-lock.json, commits as eg. "v2.0.2" and tags it) → `git push --follow-tags` → `npm publish` (the `prepack` script builds the package). The docs deploy automatically when `main` changes, so `npm run build` isn't needed for a release. Version 1 (Svelte 3/4) is maintained on the `v1-legacy` branch and published with the `v1-legacy` npm tag (`publishConfig.tag` in its package.json), never `latest`.

## Architecture

- **`src/lib/index.js`** is the package's public API: every exported component is listed there explicitly (some under aliases, e.g. `Twisty` = `Details`, `Cards` = `Grid`, `Titleblock` = `Hero`). New components must be added here.
- **`src/lib/components/<Name>/`** holds `Name.svelte`, `Name.stories.svelte` (Svelte CSF via `defineMeta`), `docs/*.md` (imported with `?raw` and attached through helpers in `src/lib/js/withParams.js`), and optionally `Name.svelte.test.js`. Story `title` prefixes ("Wrappers", "Layout", "Navigation", "Form elements", ...) must match the sort order in `.storybook/preview.js`.
- **Charts** (`Chart`, `BarChart`, `LineChart`, etc.) are not implemented here: their folders contain only stories/docs, and the components come from `@onsvisual/svelte-charts`. That package and `layercake` must stay in `ssr.noExternal` (`vite.config.js`).
- **`src/lib/templates/`** holds whole-page article templates composed from the components.
- **CSS**: `src/lib/css/main.css` `@import`s the ONS Design System CSS from the ONS CDN, plus local patches. `scripts/css-merge.js` (run in `prepack`/`prepare`) fetches those imports, inlines them, rewrites font URLs and minifies into `dist/css/main.css`, exported as `./css/main.css`.
- **Workbench** (`src/routes/workbench/`): a prerendered SvelteKit route (`adapter-static`, base path `/svelte-components`, `trailingSlash: 'always'`). `prop-schema.server.js` parses every component's source with the Svelte compiler and TypeScript to build editable prop controls automatically. It reads the JSDoc `@type` on the `$props()` destructure, default values and literal-union types, and it also reads chart sources from `node_modules/@onsvisual/svelte-charts`. Hand-written fixtures live in `prop-fixtures.js` and the `*Workbench.svelte` files. `landmarks/` is a separate page so that `Main`/`ErrorPage` don't nest `<main>` elements. `scripts/stage-workbench.js` copies `build/workbench` and `build/_app` into `storybook-static/`.

### Workbench and progressive enhancement (not yet supported)

The workbench pages are prerendered and then hydrated, but the workbench can't yet be used to test progressive enhancement:

- The `/workbench/props/` iframe is prerendered only with its default selection (Button with default fixtures). Other components and prop edits arrive by `postMessage` after hydration (`props/+page.svelte`, in `onMount`), so they are only ever rendered in the browser.
- The "Remount" and "Mount … components" toggles rebuild components in the browser; they don't exercise hydration.
- Nothing shows whether the page is showing server HTML or hydrated output. No test runs with JavaScript disabled or checks for hydration mismatches. The Vitest SSR specs only check that `render` doesn't throw.

For now, test it manually: load the built site (`npm run build && npm run preview`) with JavaScript disabled to see the prerendered fixtures, and use `npm run dev` to get Svelte's dev-only `hydration_mismatch` console warnings.

To support it properly:

1. Read the selected component and its props from the URL so that combination is rendered on the server. Prerendered pages can't read query strings (SvelteKit throws if `url.searchParams` is accessed during prerender), and GitHub Pages only serves static files. So for the deployed site, use a path parameter with prerendered `entries` (e.g. `/workbench/props/[component]/` with default fixtures, or named fixture presets). Arbitrary prop values from the query string can only be server-rendered by `npm run dev`, with `prerender = false` on that route. `adapter-static` output has no server, so `npm run preview` can't do it either.
2. Add a visible "hydrated" flag set in `onMount`, so the two states can be told apart.
3. Add browser tests (e.g. Playwright) per fixture: with JavaScript disabled, check the core content and links work; with JavaScript enabled, check that no hydration warnings appear and the interactions work.

## Component conventions (Svelte 5)

- Props are written as `let { ... } = $props()` with a single JSDoc `/** @type {{ ... }} */` above it. No TypeScript files: types are JSDoc and get checked by svelte-check. Keep string-literal unions accurate, because the workbench builds its select controls from them.
- Use `$bindable` for two-way bindings, `$derived`/`$state` instead of `$:`, and snippets instead of slots. Default content is the `children` snippet, and named slots became snippet props (mapping in `SVELTE_5_MIGRATION_GUIDE.md`, e.g. Button `iconSlot`, Card `imageContent`/`titleContent`).
- Don't give a `$bindable` prop a default in `$props()` (`value = $bindable(null)`). Svelte 5 throws `props_invalid_value` when a parent binds a variable that is `undefined` (eg. `let value = $state()`, or `let value;` in a legacy component) to a prop with a default, which worked in v1. Declare it as `value = $bindable()` and set the default in the script: `if (value === undefined) value = null;`. That also writes the default back to the bound variable, as v1 did. Select (`value`, `clearInput`) and Checkbox (`checked`) follow this; see "Known issues" for the props that don't yet.
- Event-emitting components deliberately support both a callback prop (e.g. `onClick`) and a `createEventDispatcher` event with the same payload as `detail`. Keep both. Tests assert they fire once each with equivalent payloads.
- Some APIs render trusted HTML via `{@html}` (List items, DescriptionList values, Table cells, DataCard captions, Theme head styles). This is an intentional contract with no sanitizer.
- Class overrides use a `cls` prop. Markup and class names follow the ONS Design System (`ons-*`).

## Tests

Vitest has two projects (`vite.config.js`):

- **client**: `src/**/*.svelte.{test,spec}.js`, jsdom + `@testing-library/svelte`. Build snippet props with `createRawSnippet`.
- To test a binding, pass the prop as a getter/setter pair (which is how `bind:` is compiled), from `$state` in the test file. Define it with `get`/`set` in an object literal or `Object.defineProperty`, not by spreading an object, which copies the getter's value. ESLint doesn't give `.svelte.test.js` files the runes globals, so those tests start with `/* global $state */` (see `Select.svelte.test.js` and `Checkbox.svelte.test.js`).
- **server**: other `*.{test,spec}.js` files, node environment, often SSR via `svelte/server` `render` (e.g. the workbench specs check that every component renders with default fixtures).

## Known issues

- **Bindable props with defaults (should be fixed).** These still have defaults in `$props()`, so binding them to a variable that starts `undefined` throws `props_invalid_value` (see the `$bindable` convention above for the fix, and the Select/Checkbox tests for how to test it): AccordionItem `open`; AnalyticsBanner `usageCookies`; Checkbox `item`, `group`; Checkboxes `value`; Details `open`; Dropdown `value`; Embed `pymChild`; Input `value`; LazyLoad `entered`; Observe `visible`; Radio `value`; Radios `value`; Scroller `count`, `index`, `sectionId`, `offset`, `progress`, `visible`; Tabs `selected`; Textarea `value`; ToolbarButton `selected`. Until they're fixed, the migration guide tells users to start bound variables with a value.

## Migration docs

`SVELTE_5_MIGRATION_GUIDE.md` is the consumer-facing guide to API changes. `SVELTE_5_MIGRATION_LOG.md` records decisions and verification results per block. By the log's convention, material decisions get an entry there.
