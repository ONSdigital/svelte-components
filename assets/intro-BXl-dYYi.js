import{j as e,M as a}from"./blocks-DnDLOy4L.js";import{useMDXComponents as r}from"./index-BkGkG8h2.js";import"./iframe-BBaiAZ6I.js";import"./_commonjsHelpers-CqkleIqs.js";function n(s){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data visualisation/Using svelte-charts"}),`
`,e.jsx(t.h1,{id:"using-svelte-charts",children:"Using svelte-charts"}),`
`,e.jsxs(t.p,{children:["Most of the charts in this section are examples from the ",e.jsx(t.a,{href:"https://github.com/onsvisual/svelte-charts/",rel:"nofollow",children:"@onsvisual/svelte-charts"})," library. To make use of the charts from that library, it is necessary to install an additional dependency in your project:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-bash",children:`npm install @onsvisual/svelte-charts --save-dev
`})}),`
`,e.jsxs(t.p,{children:["When using these charts, you need to make sure that you import them from the ",e.jsx(t.strong,{children:"svelte-charts"})," library and not the components library, for example:"]}),`
`,`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<script>
  import { Chart } from  "@onsvisual/svelte-charts";
<\/script>

<Chart {...chart_properties}>
`})})]})}function h(s={}){const{wrapper:t}={...r(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(n,{...s})}):n(s)}export{h as default};
