import{ab as f,e as d,g as a,ah as h,a as v,ad as D,f as _,H as o}from"./iframe-CWf7aFlM.js";import{c as y,w as g,i as C,d as S}from"./create-runtime-stories-DZHrlilD.js";import"./DotPlotChart.svelte_svelte_type_style_lang-CPibfm6K.js";import{D as P}from"./DotPlotChart-BfgB5sp8.js";import{d as s}from"./data-C2fm6GRW.js";import"./preload-helper-Dp1pzeXC.js";import"./linear-CZTuTj73.js";import"./slot-BP_Qo1ZM.js";import"./style-DKGnerva.js";import"./attributes-DayBpKoh.js";import"./this-DGMA4ypj.js";import"./attributes-HyytCBC6.js";import"./each-W8R4y-cX.js";import"./class-bcIlrV7N.js";import"./actions-CdxvWulj.js";import"./svelte-head-BAKvAkK-.js";import"./band-DOaP3jCO.js";const x=`A dot plot chart component with animation and events.\r
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
`,K={title:"Data visualisation/DotPlotChart",component:P,tags:["autodocs"],argTypes:{},parameters:g(x)},{Story:l}=S();var w=_("<!> <!>",1);function i(p,m){f(m,!1),C();var e=w(),r=d(e);{let t=o(()=>({data:s.filter(c=>c.group=="apples"),xKey:"value",yKey:"year",title:"Dot plot chart",footer:"Source: ONS.",mode:"default"}));l(r,{name:"Default",get args(){return a(t)},parameters:{__svelteCsf:{rawCode:"<DotPlotChart {...args} />"}}})}var u=h(r,2);{let t=o(()=>({data:s,xKey:"value",yKey:"year",zKey:"group",title:"Dot plot with multiple points",footer:"Source: ONS.",mode:"default"}));l(u,{name:"Multiple dots",get args(){return a(t)},parameters:{__svelteCsf:{rawCode:"<DotPlotChart {...args} />"}}})}v(p,e),D()}i.__docgen={data:[],name:"DotPlotChart.stories.svelte"};const n=y(i,K),I=["Default","MultipleDots"],J={...n.Default,tags:["svelte-csf-v5"]},L={...n.MultipleDots,tags:["svelte-csf-v5"]};export{J as Default,L as MultipleDots,I as __namedExportsOrder,K as default};
