import{j as e,M as l}from"./blocks-kLkyeaDE.js";import{useMDXComponents as o}from"./index-BDUc_z-5.js";import"./iframe-BT89WHcf.js";import"./_commonjsHelpers-CqkleIqs.js";function s(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Introduction"}),`
`,e.jsx(t.h1,{id:"onsvisualsvelte-components",children:"@onsvisual/svelte-components"}),`
`,e.jsxs("p",{children:[e.jsx("a",{href:"https://www.npmjs.com/package/@onsvisual/svelte-components",children:e.jsx("img",{src:"https://badge.fury.io/js/@onsvisual%2Fsvelte-components.svg",alt:"npm version",style:{display:"inline-block",margin:"0 5px 0 0"}})}),e.jsx("a",{href:"https://github.com/onsvisual/svelte-components",children:e.jsx("img",{src:"https://badgen.net/badge/icon/GitHub?icon=github&label",alt:"GitHub",style:{display:"inline-block",margin:"0 5px 0 0"}})})]}),`
`,e.jsx(t.p,{children:"A library of ONS-branded components for any Svelte or SvelteKit project."}),`
`,e.jsxs(t.p,{children:["The components and styles in this library are built on the HTML and CSS of the ",e.jsx(t.a,{href:"https://service-manual.ons.gov.uk/design-system/",rel:"nofollow",children:"ONS Design System"}),", but with a number of tweaks and additions to make them suitable for a range of interactive data visualisation and data journalism projects."]}),`
`,e.jsx(t.h2,{id:"installing-the-components",children:"Installing the components"}),`
`,e.jsx(t.p,{children:"There are two ways to start a new project using these components."}),`
`,e.jsx(t.h3,{id:"1-use-a-ready-made-template",children:"1. Use a ready-made template"}),`
`,e.jsx(t.p,{children:"When you start a project with one of the following templates, @onsvisual/svelte-components will already be installed:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/ONSvisual/sveltekit-starter",rel:"nofollow",children:"sveltekit-starter"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/ONSvisual/robo-article",rel:"nofollow",children:"robo-article"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/ONSvisual/robo-embed",rel:"nofollow",children:"robo-embed"})}),`
`]}),`
`,e.jsx(t.h3,{id:"2-start-a-new-svelte-kit-project-from-scratch",children:"2. Start a new Svelte Kit project from scratch"}),`
`,e.jsxs(t.p,{children:["If you want to start from scratch, you can set up a ",e.jsx(t.a,{href:"https://kit.svelte.dev/docs/creating-a-project",rel:"nofollow",children:"new Svelte Kit project"}),", then run the following command."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-bash",children:`npm install @onsvisual/svelte-components --save-dev
`})}),`
`,e.jsx(t.h2,{id:"using-the-components",children:"Using the components"}),`
`,e.jsxs(t.p,{children:["When using the components, you need to import both the desired component and the global CSS styles. In a SvelteKit project it is best to import the CSS in the top-level ",e.jsx(t.strong,{children:"+layout.svelte"})," file in your ",e.jsx(t.strong,{children:"src/routes"})," folder, which will apply it to all pages/components in the project."]}),`
`,`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<!-- +layout.svelte -->
<script>
  import "@onsvisual/svelte-components/css/main.css";
<\/script>

<slot/>

<!-- +page.svelte / Component.svelte -->
<script>
  import { Section } from "@onsvisual/svelte-components";
<\/script>

<Section title="Hello world!">I am using an ONS Svelte component.</Section>
`})})]})}function h(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{h as default};
