import{M as i}from"./chunk-PCJTTTQV-83346c68.js";import{p as s,j as e}from"./jsx-runtime-539b76a3.js";import{u as a}from"./index-297ebefe.js";import"./iframe-5246c7f5.js";import"../sb-preview/runtime.js";import"./extends-b40c5bac.js";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-1a79a776.js";import"./index-356e4a49.js";function n(t){const o=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",em:"em",h3:"h3",code:"code",pre:"pre"},a(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Contributing/Writing docs pages",parameters:{...s}}),`
`,e.jsx(o.h1,{id:"needs-updating",children:"!!!NEEDS UPDATING!!!"}),`
`,e.jsx(o.h1,{id:"writing-docs-only-pages",children:"Writing docs-only pages"}),`
`,e.jsx(o.p,{children:"You can write docs-only pages in simple markdown using MDX format."}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:["MDX is ",e.jsx(o.em,{children:"technically"})," a mixture of markdown and React. Unforuntately, there isn't a native Svelte option for markdown pages in Storybook yet. Good news, though, you won't ",e.jsx(o.em,{children:"really"})," need to know React to use it. Just write in markdown and follow the template below for the React bits you'll need."]}),`
`]}),`
`,e.jsx(o.h3,{id:"quickstart",children:"Quickstart"}),`
`,e.jsxs(o.p,{children:["Make a new ",e.jsx(o.code,{children:".stories.mdx"})," file for your docs page in the ",e.jsx(o.code,{children:"src/docs/"})," directory."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{children:`src/
  docs/
    my-docs.stories.mdx
`})}),`
`,e.jsxs(o.p,{children:["Add the following at the top of the file and customise the ",e.jsx(o.code,{children:"title"})," property in the ",e.jsx(o.code,{children:"Meta"})," component for where you want the page to live in the Storybook nav."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-markdown",children:`import { Meta } from '@storybook/addon-docs';
import { parameters } from '../../js/docsPage.js';

<Meta title="SCSS/Special rules" parameters={{ ...parameters }} />

![](https://graphics.thomsonreuters.com/style-assets/images/logos/reuters-graphics-logo/svg/graphics-logo-color-dark.svg)

# My docs page

Your docs TK...
`})}),`
`,e.jsx(o.p,{children:"From there, write whatever you need in markdown."})]})}function c(t={}){const{wrapper:o}=Object.assign({},a(),t.components);return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}const d=()=>{throw new Error("Docs-only story")};d.parameters={docsOnly:!0};const r={title:"Contributing/Writing docs pages",parameters:{...s},tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:c};const k=["__page"];export{k as __namedExportsOrder,d as __page,r as default};
//# sourceMappingURL=writing-docs-stories.stories-89634885.js.map
