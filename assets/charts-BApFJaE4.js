import{u as r,j as e,M as a}from"./blocks-D52ZdneF.js";import"./preload-helper-Dp1pzeXC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DwMLuGxz.js";function s(n){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Charts/Using svelte-charts"}),`
`,e.jsx(t.h1,{id:"using-svelte-charts",children:"Using svelte-charts"}),`
`,e.jsxs(t.p,{children:["Most of the charts in this section are examples from the ",e.jsx(t.a,{href:"https://github.com/onsvisual/svelte-charts/",rel:"nofollow",children:"@onsvisual/svelte-charts"})," library. To make use of the charts from that library, it is necessary to install an additional dependency in your project:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-bash",children:`npm install @onsvisual/svelte-charts --save-dev
`})}),`
`,e.jsxs(t.p,{children:["When using these charts, you need to make sure that you import them from the ",e.jsx(t.strong,{children:"svelte-charts"})," library and not the components library, for example:"]}),`
`,e.jsx(t.p,{children:"DataCard (including its internal Sparkline) and Table belong to this components package and use Svelte 5 runes. Chart, BarChart, ColumnChart, LineChart, ScatterChart and DotPlotChart remain owned by the separate chart dependency; their implementation and event APIs are not changed by this migration."}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.a,{href:"https://onsdigital.github.io/svelte-components/workbench/",rel:"nofollow",children:"component workbench"})," includes both local data components and previews of the external chart types. When server-rendering the chart dependency with Vite, include ",e.jsx(t.code,{children:"@onsvisual/svelte-charts"})," and ",e.jsx(t.code,{children:"layercake"})," in ",e.jsx(t.code,{children:"ssr.noExternal"})," so their Svelte source is compiled."]}),`
`,`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<script>
  import { Chart } from  "@onsvisual/svelte-charts";
<\/script>

<Chart {...chart_properties}>
`})})]})}function l(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{l as default};
