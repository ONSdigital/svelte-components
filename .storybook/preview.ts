import '../src/css/main.css';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
// @ts-ignore
import Wrapper from './Wrapper.svelte';
import markdown from 'react-syntax-highlighter/dist/esm/languages/prism/markdown';
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss';
import svelte from './svelte-highlighting.js';

SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('svelte', svelte);
SyntaxHighlighter.registerLanguage('markdown', markdown);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewMode: 'docs',
  previewTabs: { 'storybook/docs/panel': { index: -1 } },
  controls: {
    expanded: true,
    sort: 'requiredFirst',
    matchers: {
      color: /(background|colour|Colour)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  options: {
    // https://storybook.js.org/docs/svelte/writing-stories/naming-components-and-hierarchy#sorting-stories
    storySort: {
      includeNames: true,
      order: [
        'Intro',
        'Guides',
        [
          'Using these docs',
          'Customising components with CSS',
          '*',
          'Getting help',
        ],
        'Templates',
        ['Intro', '*'],
        'Wrappers',
        ['Intro', '*'],
        'Layout',
        ['Intro', '*'],
        'Inputs',
        ['Intro', '*'],
        'Decorators',
        ['Intro', '*'],
        '*',
        'Styling',
        ['Intro', '*'],
        'Contributing',
        [
          'Quickstart', 'Component Basics', '*', 'Writing Stories',
          'Recipes: Basic story',
          'Recipes: Story with custom docs',
          'Recipes: Story with custom controls',
          'Recipes: Story with media',
          'Recipes: Story for a component with slots',
          'Writing docs pages',
        ],
      ],
    },
  }
};

export const decorators = [() => Wrapper];
