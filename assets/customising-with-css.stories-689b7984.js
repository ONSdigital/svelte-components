import{M as a}from"./chunk-PCJTTTQV-83346c68.js";import{p as r,j as e}from"./jsx-runtime-539b76a3.js";import{u as i}from"./index-297ebefe.js";import"./iframe-5246c7f5.js";import"../sb-preview/runtime.js";import"./extends-b40c5bac.js";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-1a79a776.js";import"./index-356e4a49.js";function s(n){const t=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",em:"em",pre:"pre",code:"code",a:"a"},i(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Guides/Customising components with CSS",parameters:{...r}}),`
`,e.jsx(t.h1,{id:"customising-components-with-css",children:"Customising components with CSS"}),`
`,e.jsx(t.p,{children:"One of the most powerful ways to customise components isn't props or, even, Svelte."}),`
`,e.jsx("p",{class:"paragraph",children:e.jsx("span",{class:"highlight bold",children:"It's CSS and your web inspector!"})}),`
`,e.jsx(t.h2,{id:"how-to-do-it",children:"How to do it"}),`
`,e.jsxs(t.p,{children:["There are a few ways to override CSS rules in a Svelte app. The simplest and most blunt is to add an additional global ",e.jsx(t.strong,{children:"app.css"})," file at will override the rules defined in the svelte-components ",e.jsx(t.strong,{children:"main.css"})," file."]}),`
`,e.jsxs(t.p,{children:["You can import this file ",e.jsx(t.em,{children:"after"})," your main.css in your top level +layout.svelte file."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<!-- /src/routes/+layout.svelte -->
<script>
  import "@onsvisual/svelte-components/css/main.css";
  import "../app.css"; // This path depends on where you place your file
<\/script>
`})}),`
`,e.jsx(t.h2,{id:"targetting-a-specific-component",children:"Targetting a specific component"}),`
`,e.jsx(t.p,{children:"If you want to override the CSS a specific instance of a component, you have the option to wrap it with an HTML div and apply the style you want via that element's class."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<div class="my-section">
  <section></section>
</div>

<style>
  /* You can inherited properties and CSS variables like this */
  .my-section {
    background: red;
    color: blue;
    --link: green;
  }
  /* If you want to override CSS that's buried within the component, you need to use Svelte's :global syntax */
  .my-section :global(h2) {
    color: white;
  }
</style>
`})}),`
`,e.jsx(t.h2,{id:"still-not-working",children:"Still not working?"}),`
`,e.jsxs(t.p,{children:["If you're pretty sure you've got the CSS right, but it still doesn't seem to override the style of the component, you may need to add an ",e.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/important",target:"_blank",rel:"nofollow noopener noreferrer",children:"!important"})," declaration."]})]})}function l(n={}){const{wrapper:t}=Object.assign({},i(),n.components);return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}const c=()=>{throw new Error("Docs-only story")};c.parameters={docsOnly:!0};const o={title:"Guides/Customising components with CSS",parameters:{...r},tags:["stories-mdx"],includeStories:["__page"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:l};const S=["__page"];export{S as __namedExportsOrder,c as __page,o as default};
//# sourceMappingURL=customising-with-css.stories-689b7984.js.map
