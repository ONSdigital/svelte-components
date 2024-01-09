import{M as m}from"./chunk-PCJTTTQV-83346c68.js";import{p as s,j as e}from"./jsx-runtime-539b76a3.js";import{u as i}from"./index-297ebefe.js";import"./iframe-5246c7f5.js";import"../sb-preview/runtime.js";import"./extends-b40c5bac.js";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-1a79a776.js";import"./index-356e4a49.js";function r(o){const t=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},i(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Contributing/Recipes: Story with media",parameters:{...s}}),`
`,e.jsx(t.h1,{id:"needs-updating",children:"!!!NEEDS UPDATING!!!"}),`
`,e.jsx(t.h1,{id:"recipes-story-with-media",children:"Recipes: Story with media"}),`
`,e.jsx(t.p,{children:"To use media files in your stories, import them directly."}),`
`,e.jsxs(t.p,{children:["First, add a media file in a ",e.jsx(t.code,{children:"stories"})," directory in your component folder like this:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`YourComponent/
  YourComponent.svelte
  YourComponent.stories.svelte
  stories/
    imgs/
      myImage.jpg
`})}),`
`,e.jsx(t.p,{children:"Now, import your media file directly in your code, which will resolve to the URL of the file."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<!-- YourComponent.stories.svelte -->
<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import YourComponent from "./YourComponent.svelte";

  // 🖼️ Import media you need in stories directly in code!
  import myImageSrc from "./stories/imgs/myImage.jpg";
<\/script>

<meta title="Components/YourComponent" component="{YourComponent}" />

<template let:args>
  <YourComponent {...args} />
</template>

<Story
  name="Basic"
  args="{{
    src: myImageSrc,
    altText: 'My image in the component',
  }}"
/>
`})})]})}function a(o={}){const{wrapper:t}=Object.assign({},i(),o.components);return t?e.jsx(t,{...o,children:e.jsx(r,{...o})}):r(o)}const p=()=>{throw new Error("Docs-only story")};p.parameters={docsOnly:!0};const n={title:"Contributing/Recipes: Story with media",parameters:{...s},tags:["stories-mdx"],includeStories:["__page"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:a};const w=["__page"];export{w as __namedExportsOrder,p as __page,n as default};
//# sourceMappingURL=story-with-media.stories-f9b215ae.js.map
