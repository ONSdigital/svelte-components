import{ad as f,h as d,g as a,ah as h,a as v,af as D,f as _,K as o}from"./iframe-DAUNLR8O.js";import{c as y,w as g,i as C,d as S}from"./create-runtime-stories-B5aIRkb-.js";import"./DotPlotChart.svelte_svelte_type_style_lang-Ddq-juKz.js";import{D as K}from"./DotPlotChart-3AU0uIhI.js";import{d as s}from"./data-C2fm6GRW.js";import"./preload-helper-Dp1pzeXC.js";import"./linear-CZTuTj73.js";import"./style-DnS876Ns.js";import"./attributes-DayBpKoh.js";import"./this-b4uQXChT.js";import"./attributes-C8WLOc0F.js";import"./each-zFvNCFwR.js";import"./class-DzLv1wVC.js";import"./actions-DOqoK0T7.js";import"./svelte-head-CNn9Wnte.js";import"./band-DlxGF9O5.js";const P=`A dot plot chart component with animation and events.\r
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
`,x={title:"Data visualisation/DotPlotChart",component:K,tags:["autodocs"],argTypes:{},parameters:g(P)},{Story:l}=S();var w=_("<!> <!>",1);function i(p,m){f(m,!1),C();var e=w(),r=d(e);{let t=o(()=>({data:s.filter(c=>c.group=="apples"),xKey:"value",yKey:"year",title:"Dot plot chart",footer:"Source: ONS.",mode:"default"}));l(r,{name:"Default",get args(){return a(t)},parameters:{__svelteCsf:{rawCode:"<DotPlotChart {...args} />"}}})}var u=h(r,2);{let t=o(()=>({data:s,xKey:"value",yKey:"year",zKey:"group",title:"Dot plot with multiple points",footer:"Source: ONS.",mode:"default"}));l(u,{name:"Multiple dots",get args(){return a(t)},parameters:{__svelteCsf:{rawCode:"<DotPlotChart {...args} />"}}})}v(p,e),D()}i.__docgen={data:[],name:"DotPlotChart.stories.svelte"};const n=y(i,x),H=["Default","MultipleDots"],I={...n.Default,tags:["svelte-csf-v5"]},J={...n.MultipleDots,tags:["svelte-csf-v5"]};export{I as Default,J as MultipleDots,H as __namedExportsOrder,x as default};
