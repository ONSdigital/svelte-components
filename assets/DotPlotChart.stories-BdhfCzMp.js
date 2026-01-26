import{p as d,j as h,f as v,g as r,o,k as D,e as _,h as y}from"./iframe-BXL9GsHe.js";import{w as g,c as C,i as x,d as S}from"./create-runtime-stories-BndbA_YL.js";import"./DotPlotChart.svelte_svelte_type_style_lang-B1DrIT_u.js";import{D as P}from"./DotPlotChart-B_t6kIN3.js";import{d as a}from"./data-C2fm6GRW.js";import"./linear-CZTuTj73.js";import"./slot-BP_Qo1ZM.js";import"./style-CcY6orqc.js";import"./attributes-Co-1QMVx.js";import"./this-Cmkl0uHj.js";import"./attributes-keP7PBQf.js";import"./each-C1-l3CJ_.js";import"./class-Dzh9Da8g.js";import"./actions-BtJqSHG1.js";import"./svelte-head-DHjlX2Ux.js";import"./misc-C-1lcr-d.js";import"./band-CBeypfFQ.js";const K=`A dot plot chart component with animation and events.\r
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
`,w={title:"Data visualisation/DotPlotChart",component:P,tags:["autodocs"],argTypes:{},parameters:g(K)},{Story:s}=S();var M=h("<!> <!>",1);function n(l,p){d(p,!1),x();var t=M(),e=v(t);const m=o(()=>({data:a.filter(f=>f.group=="apples"),xKey:"value",yKey:"year",title:"Dot plot chart",footer:"Source: ONS.",mode:"default"}));s(e,{name:"Default",get args(){return r(m)},parameters:{__svelteCsf:{rawCode:"<DotPlotChart {...args} />"}}});var u=D(e,2);const c=o(()=>({data:a,xKey:"value",yKey:"year",zKey:"group",title:"Dot plot with multiple points",footer:"Source: ONS.",mode:"default"}));s(u,{name:"Multiple dots",get args(){return r(c)},parameters:{__svelteCsf:{rawCode:"<DotPlotChart {...args} />"}}}),_(l,t),y()}n.__docgen={data:[],name:"DotPlotChart.stories.svelte"};const i=C(n,w),J=["Default","MultipleDots"],L={...i.Default,tags:["svelte-csf-v5"]},Q={...i.MultipleDots,tags:["svelte-csf-v5"]};export{L as Default,Q as MultipleDots,J as __namedExportsOrder,w as default};
