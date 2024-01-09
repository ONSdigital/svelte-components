import{M as i}from"./chunk-PCJTTTQV-83346c68.js";import{p as s,j as e}from"./jsx-runtime-539b76a3.js";import{u as a}from"./index-297ebefe.js";import"./iframe-5246c7f5.js";import"../sb-preview/runtime.js";import"./extends-b40c5bac.js";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-1a79a776.js";import"./index-356e4a49.js";function r(o){const n=Object.assign({h1:"h1",p:"p",a:"a",code:"code",pre:"pre",em:"em",blockquote:"blockquote",strong:"strong"},a(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Contributing/Recipes: Basic story",parameters:{...s}}),`
`,e.jsx(n.h1,{id:"needs-updating",children:"!!!NEEDS UPDATING!!!"}),`
`,e.jsx(n.h1,{id:"recipes-basic-story",children:"Recipes: Basic story"}),`
`,e.jsxs(n.p,{children:["To make a basic story, you'll need to setup a few things from storybook's Svelte ",e.jsx(n.a,{href:"https://storybook.js.org/docs/svelte/api/csf",target:"_blank",rel:"nofollow noopener noreferrer",children:"Component Story Framework (CSF)"})," library."]}),`
`,e.jsxs(n.p,{children:["Once you've setup the ",e.jsx(n.code,{children:"Meta"})," and ",e.jsx(n.code,{children:"Template"})," components as below, you can write a ",e.jsx(n.code,{children:"Story"})," component with an ",e.jsx(n.code,{children:"args"})," prop. In that ",e.jsx(n.code,{children:"args"})," prop you can pass values that will be used to fill in your component's props."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- YourComponent.stories.svelte -->
<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import YourComponent from "./YourComponent.svelte";
<\/script>

<meta title="Components/YourComponent" component="{YourComponent}" />

<template let:args>
  <YourComponent {...args} />
</template>

<Story
  name="Default"
  args="{{
    width: 'normal',
  }}"
/>
`})}),`
`,e.jsxs(n.p,{children:["For example, the ",e.jsx(n.code,{children:"width"})," property in the ",e.jsx(n.code,{children:"Story"})," args above would be passed to your component as though you'd written it like this:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<YourComponent width="normal" />
`})}),`
`,e.jsxs(n.p,{children:["You can define additional stories with ",e.jsx(n.em,{children:"different"})," args to show how your component will render with different props like:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- ... -->

<Story
  name="Default"
  args="{{
    width: 'normal',
  }}"
/>

<Story
  name="Extra wide"
  args="{{
    width: 'wider',
  }}"
/>
`})}),`
`,e.jsxs(n.p,{children:["If you want even more control, you can skip the ",e.jsx(n.code,{children:"args"})," and pass your component directly into the ",e.jsx(n.code,{children:"Story"})," with whatever props you need:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<Story name="Super custom">
  <YourComponent
    width="fluid"
    data="{[
      { id: 'UK', value: 65 },
      { id: 'USA', value: 265 },
    ]}"
  />
</Story>
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Pro tip:"})," If you pass your component in directly, your users won't be able to control its props using Storybook's built-in ",e.jsx(n.a,{href:"https://storybook.js.org/docs/svelte/essentials/controls",target:"_blank",rel:"nofollow noopener noreferrer",children:"controls panel"}),", so it's always best to start with a default example using ",e.jsx(n.code,{children:"args"}),"."]}),`
`]})]})}function l(o={}){const{wrapper:n}=Object.assign({},a(),o.components);return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}const c=()=>{throw new Error("Docs-only story")};c.parameters={docsOnly:!0};const t={title:"Contributing/Recipes: Basic story",parameters:{...s},tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:l};const b=["__page"];export{b as __namedExportsOrder,c as __page,t as default};
//# sourceMappingURL=basic-story.stories-12317a61.js.map
