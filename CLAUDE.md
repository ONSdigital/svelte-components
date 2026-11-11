# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`@onsvisual/svelte-components`: a published npm library of Svelte 5 components that wrap the ONS Design System markup/CSS. Docs are a Storybook site plus an interactive SvelteKit "workbench", both deployed together to GitHub Pages (`https://onsdigital.github.io/svelte-components`).

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
npm run deploy              # gh-pages publish of storybook-static/
```

Known baseline state (see `SVELTE_5_MIGRATION_LOG.md`): `npm run check` and `npm run lint` are not clean repo-wide, and `src/routes/page.svelte.test.js` has a pre-existing failure. Judge changes by not adding new diagnostics/failures in touched files, rather than expecting a green run.

Release process (from README): commit changes → bump `version` in package.json → `npm run build` → commit/push with the version as the message (e.g. `v1.0.0`) → `npm run deploy` → `npm publish`.

## Architecture

- **`src/lib/index.js`** is the package's public API: every exported component is listed there explicitly (some under aliases, e.g. `Twisty` = `Details`, `Cards` = `Grid`, `Titleblock` = `Hero`). New components must be added here.
- **`src/lib/components/<Name>/`** holds `Name.svelte`, `Name.stories.svelte` (Svelte CSF via `defineMeta`), `docs/*.md` (imported with `?raw` and attached through helpers in `src/lib/js/withParams.js`), and optionally `Name.svelte.test.js`. Story `title` prefixes ("Wrappers", "Layout", "Navigation", "Form elements", ...) must match the sort order in `.storybook/preview.js`.
- **Charts** (`Chart`, `BarChart`, `LineChart`, etc.) are not implemented here: their folders contain only stories/docs, and the components come from `@onsvisual/svelte-charts`. That package and `layercake` must stay in `ssr.noExternal` (`vite.config.js`).
- **`src/lib/templates/`** holds whole-page article templates composed from the components.
- **CSS**: `src/lib/css/main.css` `@import`s the ONS Design System CSS from the ONS CDN, plus local patches. `scripts/css-merge.js` (run in `prepack`/`prepare`) fetches those imports, inlines them, rewrites font URLs and minifies into `dist/css/main.css`, exported as `./css/main.css`.
- **Workbench** (`src/routes/workbench/`): a prerendered SvelteKit route (`adapter-static`, base path `/svelte-components`, `trailingSlash: 'always'`). `prop-schema.server.js` parses every component's source with the Svelte compiler and TypeScript to build editable prop controls automatically. It reads the JSDoc `@type` on the `$props()` destructure, default values and literal-union types, and it also reads chart sources from `node_modules/@onsvisual/svelte-charts`. Hand-written fixtures live in `prop-fixtures.js` and the `*Workbench.svelte` files. `landmarks/` is a separate page so that `Main`/`ErrorPage` don't nest `<main>` elements. `scripts/stage-workbench.js` copies `build/workbench` and `build/_app` into `storybook-static/`.

## Component conventions (Svelte 5)

- Props are written as `let { ... } = $props()` with a single JSDoc `/** @type {{ ... }} */` above it. No TypeScript files: types are JSDoc and get checked by svelte-check. Keep string-literal unions accurate, because the workbench builds its select controls from them.
- Use `$bindable` for two-way bindings, `$derived`/`$state` instead of `$:`, and snippets instead of slots. Default content is the `children` snippet, and named slots became snippet props (mapping in `SVELTE_5_MIGRATION_GUIDE.md`, e.g. Button `iconSlot`, Card `imageContent`/`titleContent`).
- Event-emitting components deliberately support both a callback prop (e.g. `onClick`) and a `createEventDispatcher` event with the same payload as `detail`. Keep both. Tests assert they fire once each with equivalent payloads.
- Some APIs render trusted HTML via `{@html}` (List items, DescriptionList values, Table cells, DataCard captions, Theme head styles). This is an intentional contract with no sanitizer.
- Class overrides use a `cls` prop. Markup and class names follow the ONS Design System (`ons-*`).

## Tests

Vitest has two projects (`vite.config.js`):
- **client**: `src/**/*.svelte.{test,spec}.js`, jsdom + `@testing-library/svelte`. Build snippet props with `createRawSnippet`.
- **server**: other `*.{test,spec}.js` files, node environment, often SSR via `svelte/server` `render` (e.g. the workbench specs check that every component renders with default fixtures).

## Migration docs

`SVELTE_5_MIGRATION_GUIDE.md` is the consumer-facing guide to API changes. `SVELTE_5_MIGRATION_LOG.md` records decisions and verification results per block. By the log's convention, material decisions get an entry there.
