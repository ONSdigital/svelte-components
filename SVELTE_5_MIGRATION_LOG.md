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

- Steps 1-4 are complete. Start component block A only after reviewing the migration contract and baseline record above.