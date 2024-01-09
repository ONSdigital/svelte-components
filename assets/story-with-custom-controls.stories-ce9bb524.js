import{M as p}from"./chunk-PCJTTTQV-83346c68.js";import{p as s,j as o}from"./jsx-runtime-539b76a3.js";import{u as a}from"./index-297ebefe.js";import"./iframe-5246c7f5.js";import"../sb-preview/runtime.js";import"./extends-b40c5bac.js";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-1a79a776.js";import"./index-356e4a49.js";function n(t){const e=Object.assign({h1:"h1",p:"p",a:"a",code:"code",pre:"pre"},a(),t.components);return o.jsxs(o.Fragment,{children:[o.jsx(p,{title:"Contributing/Recipes: Story with custom controls",parameters:{...s}}),`
`,o.jsx(e.h1,{id:"needs-updating",children:"!!!NEEDS UPDATING!!!"}),`
`,o.jsx(e.h1,{id:"recipes-story-with-custom-controls",children:"Recipes: Story with custom controls"}),`
`,o.jsxs(e.p,{children:["You can customise the controls in Storybook's built-in ",o.jsx(e.a,{href:"https://storybook.js.org/docs/svelte/essentials/controls",target:"_blank",rel:"nofollow noopener noreferrer",children:"controls panel"})," by passing ",o.jsx(e.a,{href:"https://storybook.js.org/docs/svelte/api/argtypes",target:"_blank",rel:"nofollow noopener noreferrer",children:"argTypes"})," to ",o.jsx(e.code,{children:"Meta"})," like this:"]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-html",children:`<!-- YourComponent.stories.svelte -->
<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import YourComponent from "./YourComponent.svelte";

  const meta = {
    argTypes: {
      // A colour picker for the component's "colour" prop
      colour: { control: "color" },
      // A range picker for the "height" prop
      height: { control: { type: "range", min: 5, max: 100, step: 5 } },
      // A custom dropdown for the "width" prop
      width: {
        control: "select",
        options: ["normal", "wide", "wider", "widest", "fluid"],
      },
      // Turn off control for the "data" prop
      data: { control: false },
    },
  };
<\/script>

<meta title="Components/YourComponent" component="{YourComponent}" {...meta} />

<template let:args>
  <YourComponent {...args} />
</template>

<Story name="Default" />
`})}),`
`,o.jsxs(e.p,{children:["Read more about Storybook's custom controls options ",o.jsx(e.a,{href:"https://storybook.js.org/docs/svelte/essentials/controls",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),"."]})]})}function c(t={}){const{wrapper:e}=Object.assign({},a(),t.components);return e?o.jsx(e,{...t,children:o.jsx(n,{...t})}):n(t)}const i=()=>{throw new Error("Docs-only story")};i.parameters={docsOnly:!0};const r={title:"Contributing/Recipes: Story with custom controls",parameters:{...s},tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:c};const w=["__page"];export{w as __namedExportsOrder,i as __page,r as default};
//# sourceMappingURL=story-with-custom-controls.stories-ce9bb524.js.map
