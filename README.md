# @onsvisual/svelte-components

[![npm version](https://badge.fury.io/js/@onsvisual%2Fsvelte-components.svg)](https://www.npmjs.com/package/@onsvisual/svelte-components)

A library of ONS Svelte components for projects large and small. You can find documentation and examples of how to use these components on the [Storybook pages](https://onsdigital.github.io/svelte-components).

## Svelte versions

Version 2 of this library requires **Svelte 5**. Its components are written with runes and snippets. Where components emit events, they support both callback props (eg. `onClick`) and Svelte 4-style dispatched events (`on:click`). If you're upgrading from version 1, see the [Svelte 5 migration guide](SVELTE_5_MIGRATION_GUIDE.md) for the changes (eg. named slots replaced by snippets), and the [migration log](SVELTE_5_MIGRATION_LOG.md) for how the components were checked.

If your project uses **Svelte 3 or 4**, install version 1 instead:

```sh
npm install @onsvisual/svelte-components@v1-legacy
```

Version 1 is kept for legacy projects, but it is no longer developed: it won't get new components, and there's no promise of fixes. The documentation on the Storybook pages is for version 2.

## Documentation

The [Storybook pages](https://onsdigital.github.io/svelte-components) document every component, with examples. The [component workbench](https://onsdigital.github.io/svelte-components/workbench/) lets you try out components and their props. It's also available locally at `http://localhost:5173/svelte-components/workbench/` after running `npm run dev`.

This component library is inspired by Reuters' fantastic [graphics-components](https://github.com/reuters-graphics/graphics-components) library. The components are adapted from the [ONS Design System](https://service-manual.ons.gov.uk/design-system/).

## Making changes

### 1. Make your changes on a branch

1. Create a branch from `main` (eg. `my-new-feature`), make your changes and commit them. Check that the tests pass (`npm test`).
2. Open a pull request to `main`. Netlify builds a preview of the Storybook pages for the reviewer, and a GitHub Actions workflow checks that the package and docs build.

Changes to the docs only (eg. story files) follow the same process, but don't need a new version of the package.

### 2. Publish a new version

Once the pull request has been reviewed and merged:

1. Switch to `main` and get the merged changes: `git checkout main && git pull`
2. Update the version number with `npm version`, choosing the type of change ([semantic versioning](https://semver.org/)):

   | Type    | Use it for                                                      | Command                      | Example       |
   | ------- | --------------------------------------------------------------- | ---------------------------- | ------------- |
   | `patch` | bug fixes                                                       | `npm version patch -m "v%s"` | 2.0.1 → 2.0.2 |
   | `minor` | new components, props or features that don't break existing use | `npm version minor -m "v%s"` | 2.0.1 → 2.1.0 |
   | `major` | breaking changes (eg. a removed or renamed prop)                | `npm version major -m "v%s"` | 2.0.1 → 3.0.0 |

   This updates `package.json` and `package-lock.json`, commits them with the new version as the message (eg. "v2.1.0"), and tags the commit (eg. `v2.1.0`). A minor or major version resets the numbers after it to 0.

3. Push the commit and tag: `git push --follow-tags`
4. Publish to npm: `npm publish`. This builds the package first (`svelte-package`, `publint` and the CSS merge, in the `prepack` script).

The Storybook pages and workbench are built and deployed to GitHub Pages by a GitHub Actions workflow (`.github/workflows/deploy.yml`) whenever `main` changes, so you don't need to build or deploy them yourself. To redeploy without a new commit, run the workflow from the repository's Actions tab. To check the complete build locally, run `npm run build`.
