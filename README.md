# @onsvisual/svelte-components

[![npm version](https://badge.fury.io/js/@onsvisual%2Fsvelte-components.svg)](https://www.npmjs.com/package/@onsvisual/svelte-components)

A library of ONS Svelte components for projects large and small. You can find documentation and examples of how to use these components on the [Storybook pages](https://onsdigital.github.io/svelte-components).

This component library is inspired by Reuters' fantastic [graphics-components](https://github.com/reuters-graphics/graphics-components) library. The components are adapted from the [ONS Design System](https://service-manual.ons.gov.uk/design-system/).

**To update the components:**

1. Make changes to components
2. Commit changes locally (describe your changes in the commit message)
3. Increment version number in package.json
4. ```npm run build``` (build the package + docs)
5. Commit + push changes to GitHub (use version number eg. "v1.0.0" as commit message)
6. ```npm run deploy``` (publish docs to GitHub Pages)
7. ```npm publish``` (publish new version to NPM)

**To update the docs only:**

1. Update story files (.stories.svelte .stories.mdx etc)
2. Commit + push changes to GitHub
3. ```npm run build:docs``` (build the docs)
4. ```npm run deploy``` (publish docs to GitHub Pages)
