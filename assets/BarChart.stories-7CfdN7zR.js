import{A as B,f as S,m as K,G as e,h as r,J as s,j as k,I as x}from"./iframe-BbbdPRT3.js";import{w as b,c as w,i as D,d as G}from"./create-runtime-stories-BDNKaz6P.js";import{B as N}from"./BarChart-DvAUY7W0.js";import"./DotPlotChart.svelte_svelte_type_style_lang-BE6gq5D1.js";import{d as a}from"./data-C2fm6GRW.js";import"./slot-BP_Qo1ZM.js";import"./style-CNURdi_Z.js";import"./attributes-q36Eg1F8.js";import"./this-dw19zHaD.js";import"./misc-BULzqAsZ.js";import"./each-CQ9gxpab.js";import"./attributes-D2OsbY2h.js";import"./class-B9SFUanI.js";import"./Legend-OF3bn13p.js";import"./defaultLocale-DJ2q5QjE.js";import"./linear-CZTuTj73.js";import"./band-B2fMqdK8.js";import"./actions-DFMsxQvl.js";import"./svelte-head-DScKyvlM.js";const O=`A bar chart component with various modes, plus animation and events.

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
`,$={title:"Charts/BarChart",component:N,tags:["autodocs"],argTypes:{mode:{options:["default","stacked","grouped","comparison","marker"],control:{type:"select"}}},parameters:b(O)},{Story:t}=G();var M=S("<!> <!> <!> <!> <!>",1);function d(l,u){B(u,!1),D();var n=M(),p=K(n);const v=r(()=>({data:a.filter(C=>C.group=="apples"),xKey:"value",yKey:"year",title:"Simple bar chart",footer:"Source: ONS.",mode:"default"}));t(p,{name:"Default",get args(){return e(v)},parameters:{__svelteCsf:{rawCode:"<BarChart {...args} />"}}});var i=s(p,2);const _=r(()=>({data:a,xKey:"value",yKey:"year",zKey:"group",title:"Stacked bar chart",footer:"Source: ONS.",mode:"default"}));t(i,{name:"Stacked bars",get args(){return e(_)},parameters:{__svelteCsf:{rawCode:"<BarChart {...args} />"}}});var m=s(i,2);const f=r(()=>({data:a,xKey:"value",yKey:"year",zKey:"group",title:"Grouped bar chart",footer:"Source: ONS.",mode:"grouped"}));t(m,{name:"Grouped bars",get args(){return e(f)},parameters:{__svelteCsf:{rawCode:"<BarChart {...args} />"}}});var c=s(m,2);const y=r(()=>({data:a,xKey:"value",yKey:"year",zKey:"group",title:"Comparison marker chart",footer:"Source: ONS.",mode:"comparison"}));t(c,{name:"Comparison markers",get args(){return e(y)},parameters:{__svelteCsf:{rawCode:"<BarChart {...args} />"}}});var g=s(c,2);const h=r(()=>({data:a,xKey:"value",yKey:"year",zKey:"group",title:"Barcode chart",footer:"Source: ONS.",mode:"marker"}));t(g,{name:"Barcode",get args(){return e(h)},parameters:{__svelteCsf:{rawCode:"<BarChart {...args} />"}}}),k(l,n),x()}d.__docgen={data:[],name:"BarChart.stories.svelte"};const o=w(d,$),Z=["Default","StackedBars","GroupedBars","ComparisonMarkers","Barcode"],ee={...o.Default,tags:["svelte-csf-v5"]},re={...o.StackedBars,tags:["svelte-csf-v5"]},ae={...o.GroupedBars,tags:["svelte-csf-v5"]},te={...o.ComparisonMarkers,tags:["svelte-csf-v5"]},oe={...o.Barcode,tags:["svelte-csf-v5"]};export{oe as Barcode,te as ComparisonMarkers,ee as Default,ae as GroupedBars,re as StackedBars,Z as __namedExportsOrder,$ as default};
