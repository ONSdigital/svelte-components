# @onsvisual/svelte-components

[![npm version](https://badge.fury.io/js/@onsvisual%2Fsvelte-components.svg)](https://www.npmjs.com/package/@onsvisual/svelte-components)

A library of ONS Svelte components for projects large and small. You can find documentation and examples of how to use these components on the [Storybook pages](https://onsdigital.github.io/svelte-components).

This library targets Svelte 5. Where supported, components expose both callback props and dispatched events for event handling; this does not guarantee compatibility with Svelte 3 or 4.

See the [Svelte 5 migration guide](SVELTE_5_MIGRATION_GUIDE.md) for named-slot replacements and retained APIs, and the [migration log](SVELTE_5_MIGRATION_LOG.md) for verification and outstanding cleanup.

The interactive component workbench is available locally at `http://localhost:5173/svelte-components/workbench/` after running `npm run dev`, and on the [GitHub Pages site](https://onsdigital.github.io/svelte-components/workbench/). Use it to manually exercise components during migration; automated behavior checks remain in Vitest.

This component library is inspired by Reuters' fantastic [graphics-components](https://github.com/reuters-graphics/graphics-components) library. The components are adapted from the [ONS Design System](https://service-manual.ons.gov.uk/design-system/).

**To update the components:**

1. Make changes to components
2. Commit changes locally (describe your changes in the commit message)
3. Increment version number in package.json
4. `npm run build` (build the package + docs)
5. Commit + push changes to GitHub (use version number eg. "v1.0.0" as commit message)
6. `npm publish` (publish new version to NPM)

**To update the docs only:**

1. Update story files (.stories.svelte .stories.mdx etc)
2. Commit + push changes to GitHub

The docs (Storybook and the component workbench) are built and published to GitHub Pages by a GitHub Actions workflow (`.github/workflows/deploy.yml`) whenever changes are pushed to `main`. Pull requests to `main` are built but not published. To publish again without a new commit, run the workflow from the repository's Actions tab.
