import{ab as f,e as d,g as a,ae as v,a as h,ad as D,f as _,H as o}from"./iframe-BqRfKcLk.js";import{c as y,w as g,i as C,d as S}from"./create-runtime-stories-Du911T6H.js";import"./DotPlotChart.svelte_svelte_type_style_lang-CXlvUIQ6.js";import{D as P}from"./DotPlotChart-FHvT6yh2.js";import{d as s}from"./data-C2fm6GRW.js";import"./preload-helper-Dp1pzeXC.js";import"./linear-CZTuTj73.js";import"./slot-BP_Qo1ZM.js";import"./style-DoyTnQz4.js";import"./attributes-DayBpKoh.js";import"./this-tAHoOi8a.js";import"./attributes-CkMeemA2.js";import"./each-kHsERmtw.js";import"./class-37_mtU4-.js";import"./actions-C2CI6RbC.js";import"./svelte-head-BdVrnAEW.js";import"./band-Drp89JYV.js";const x=`A dot plot chart component with animation and events.\r
\r
Note: This component is part of the **@onsvisual/svelte-charts** library. See [more examples here](https://onsvisual.github.io/svelte-charts/).\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { DotPlotChart } from "@onsvisual/svelte-charts";\r
\r
  const data = [\r
    { year: 2017, value: 320 },\r
    { year: 2018, value: 640 },\r
    { year: 2019, value: 1600 },\r
    { year: 2020, value: 3840 },\r
  ];\r
<\/script>\r
\r
<DotPlotChart {data} xKey="value" yKey="year" title="Bar chart example" footer="Source: ONS." />\r
\`\`\`\r
`,K={title:"Data visualisation/DotPlotChart",component:P,tags:["autodocs"],argTypes:{},parameters:g(x)},{Story:l}=S();var w=_("<!> <!>",1);function i(p,m){f(m,!1),C();var e=w(),r=d(e);{let t=o(()=>({data:s.filter(c=>c.group=="apples"),xKey:"value",yKey:"year",title:"Dot plot chart",footer:"Source: ONS.",mode:"default"}));l(r,{name:"Default",get args(){return a(t)},parameters:{__svelteCsf:{rawCode:"<DotPlotChart {...args} />"}}})}var u=v(r,2);{let t=o(()=>({data:s,xKey:"value",yKey:"year",zKey:"group",title:"Dot plot with multiple points",footer:"Source: ONS.",mode:"default"}));l(u,{name:"Multiple dots",get args(){return a(t)},parameters:{__svelteCsf:{rawCode:"<DotPlotChart {...args} />"}}})}h(p,e),D()}i.__docgen={data:[],name:"DotPlotChart.stories.svelte"};const n=y(i,K),I=["Default","MultipleDots"],J={...n.Default,tags:["svelte-csf-v5"]},L={...n.MultipleDots,tags:["svelte-csf-v5"]};export{J as Default,L as MultipleDots,I as __namedExportsOrder,K as default};
