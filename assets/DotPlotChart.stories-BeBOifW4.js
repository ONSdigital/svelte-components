import{p as d,j as h,f as v,g as o,o as a,k as D,e as _,h as y}from"./iframe-kaTzlrrs.js";import{w as g,c as C,i as x,d as S}from"./create-runtime-stories-3AedxPmw.js";import"./DotPlotChart.svelte_svelte_type_style_lang-CLhNqgYQ.js";import{D as P}from"./DotPlotChart-CzmSY4ly.js";import{d as r}from"./data-C2fm6GRW.js";import"./linear-CZTuTj73.js";import"./slot-BP_Qo1ZM.js";import"./style-CcY6orqc.js";import"./attributes-Co-1QMVx.js";import"./this-BGCrOjS5.js";import"./attributes-csV9YCyL.js";import"./each-D0DDHHF7.js";import"./class-Dzh9Da8g.js";import"./actions-jIdM8UPs.js";import"./svelte-head-DyapV3L3.js";import"./misc-DdP_AE4c.js";import"./band-BS7LDcRv.js";const K=`A dot plot chart component with animation and events.

Note: This component is part of the **@onsvisual/svelte-charts** library. See [more examples here](https://onsvisual.github.io/svelte-charts/).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { DotPlotChart } from "@onsvisual/svelte-charts";

  const data = [
    { year: 2017, value: 320 },
    { year: 2018, value: 640 },
    { year: 2019, value: 1600 },
    { year: 2020, value: 3840 },
  ];
<\/script>

<DotPlotChart {data} xKey="value" yKey="year" title="Bar chart example" footer="Source: ONS." />
\`\`\`
`,w={title:"Data visualisation/DotPlotChart",component:P,tags:["autodocs"],argTypes:{},parameters:g(K)},{Story:s}=S();var M=h("<!> <!>",1);function n(l,p){d(p,!1),x();var t=M(),e=v(t);const m=a(()=>({data:r.filter(f=>f.group=="apples"),xKey:"value",yKey:"year",title:"Dot plot chart",footer:"Source: ONS.",mode:"default"}));s(e,{name:"Default",get args(){return o(m)},parameters:{__svelteCsf:{rawCode:"<DotPlotChart {...args} />"}}});var u=D(e,2);const c=a(()=>({data:r,xKey:"value",yKey:"year",zKey:"group",title:"Dot plot with multiple points",footer:"Source: ONS.",mode:"default"}));s(u,{name:"Multiple dots",get args(){return o(c)},parameters:{__svelteCsf:{rawCode:"<DotPlotChart {...args} />"}}}),_(l,t),y()}n.__docgen={data:[],name:"DotPlotChart.stories.svelte"};const i=C(n,w),J=["Default","MultipleDots"],L={...i.Default,tags:["svelte-csf-v5"]},Q={...i.MultipleDots,tags:["svelte-csf-v5"]};export{L as Default,Q as MultipleDots,J as __namedExportsOrder,w as default};
