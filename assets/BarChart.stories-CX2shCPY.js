import{p as B,j as S,f as k,g as e,o as r,k as s,e as K,h as x}from"./iframe-C7mAxSNS.js";import{w as b,c as w,i as D,d as N}from"./create-runtime-stories-DYxOwgic.js";import{B as O}from"./BarChart-C4vXGADt.js";import"./DotPlotChart.svelte_svelte_type_style_lang-B7qG7XAf.js";import{d as a}from"./data-C2fm6GRW.js";import"./slot-BP_Qo1ZM.js";import"./style-CcY6orqc.js";import"./attributes-Co-1QMVx.js";import"./this-DGqdPsnR.js";import"./misc-D-oVmW42.js";import"./each-zDsumnKt.js";import"./attributes-C0fURmbW.js";import"./class-Dzh9Da8g.js";import"./Legend-BMbcO2HM.js";import"./defaultLocale-DJ2q5QjE.js";import"./linear-CZTuTj73.js";import"./band-D360NldW.js";import"./actions-83bUZoet.js";import"./svelte-head-D_mI_w3M.js";const $=`A bar chart component with various modes, plus animation and events.

Note: This component is part of the **@onsvisual/svelte-charts** library. See [more examples here](https://onsvisual.github.io/svelte-charts/).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { BarChart } from "@onsvisual/svelte-charts";

  const data = [
    { year: 2017, value: 320 },
    { year: 2018, value: 640 },
    { year: 2019, value: 1600 },
    { year: 2020, value: 3840 },
  ];
<\/script>

<BarChart {data} xKey="value" yKey="year" title="Bar chart example" footer="Source: ONS." />
\`\`\`
`,G={title:"Data visualisation/BarChart",component:O,tags:["autodocs"],argTypes:{mode:{options:["default","stacked","grouped","comparison","marker"],control:{type:"select"}}},parameters:b($)},{Story:t}=N();var M=S("<!> <!> <!> <!> <!>",1);function d(l,u){B(u,!1),D();var n=M(),p=k(n);const v=r(()=>({data:a.filter(C=>C.group=="apples"),xKey:"value",yKey:"year",title:"Simple bar chart",footer:"Source: ONS.",mode:"default"}));t(p,{name:"Default",get args(){return e(v)},parameters:{__svelteCsf:{rawCode:"<BarChart {...args} />"}}});var i=s(p,2);const _=r(()=>({data:a,xKey:"value",yKey:"year",zKey:"group",title:"Stacked bar chart",footer:"Source: ONS.",mode:"default"}));t(i,{name:"Stacked bars",get args(){return e(_)},parameters:{__svelteCsf:{rawCode:"<BarChart {...args} />"}}});var m=s(i,2);const f=r(()=>({data:a,xKey:"value",yKey:"year",zKey:"group",title:"Grouped bar chart",footer:"Source: ONS.",mode:"grouped"}));t(m,{name:"Grouped bars",get args(){return e(f)},parameters:{__svelteCsf:{rawCode:"<BarChart {...args} />"}}});var c=s(m,2);const g=r(()=>({data:a,xKey:"value",yKey:"year",zKey:"group",title:"Comparison marker chart",footer:"Source: ONS.",mode:"comparison"}));t(c,{name:"Comparison markers",get args(){return e(g)},parameters:{__svelteCsf:{rawCode:"<BarChart {...args} />"}}});var y=s(c,2);const h=r(()=>({data:a,xKey:"value",yKey:"year",zKey:"group",title:"Barcode chart",footer:"Source: ONS.",mode:"marker"}));t(y,{name:"Barcode",get args(){return e(h)},parameters:{__svelteCsf:{rawCode:"<BarChart {...args} />"}}}),K(l,n),x()}d.__docgen={data:[],name:"BarChart.stories.svelte"};const o=w(d,G),Z=["Default","StackedBars","GroupedBars","ComparisonMarkers","Barcode"],ee={...o.Default,tags:["svelte-csf-v5"]},re={...o.StackedBars,tags:["svelte-csf-v5"]},ae={...o.GroupedBars,tags:["svelte-csf-v5"]},te={...o.ComparisonMarkers,tags:["svelte-csf-v5"]},oe={...o.Barcode,tags:["svelte-csf-v5"]};export{oe as Barcode,te as ComparisonMarkers,ee as Default,ae as GroupedBars,re as StackedBars,Z as __namedExportsOrder,G as default};
