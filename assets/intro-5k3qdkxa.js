import{j as e,M as o}from"./blocks-Cf4CDMDi.js";import{useMDXComponents as i}from"./index-DusxGbLL.js";import"./iframe-Ctfpl9ZJ.js";import"./_commonjsHelpers-CqkleIqs.js";function n(s){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Templates/Using templates"}),`
`,e.jsx(t.h1,{id:"using-templates",children:"Using templates"}),`
`,e.jsxs(t.p,{children:["This section includes a series of starter templates constructed from multiple components within this library. Similar templates to these examples are included in the ",e.jsx(t.a,{href:"https://github.com/ONSvisual/sveltekit-starter",rel:"nofollow",children:"sveltekit-starter"})," project, which is typically the easiest way to use them."]}),`
`,e.jsxs(t.p,{children:["When using these templates in an existing SvelteKit project (or one built from scratch), you will need to include the ",e.jsx(t.strong,{children:"main.css"})," file from this library, which is best imported to your top-level ",e.jsx(t.code,{children:"+layout.svelte"})," file in Svelte Kit. By doing this, you will not need to include it on individual pages."]}),`
`,`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<!-- /src/routes/+layout.svelte -->
<script>
  import "@onsvisual/svelte-components/css/main.css";
<\/script>

<slot />
`})})]})}function m(s={}){const{wrapper:t}={...i(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(n,{...s})}):n(s)}export{m as default};
