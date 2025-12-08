import{p as B,j as S,f as k,g as r,o as e,k as s,e as K,h as x}from"./iframe-BogSXddm.js";import{w as b,c as w,i as D,d as N}from"./create-runtime-stories-BRWdB4wt.js";import{B as O}from"./BarChart-DDLeSso4.js";import"./DotPlotChart.svelte_svelte_type_style_lang-u03soF_D.js";import{d as a}from"./data-C2fm6GRW.js";import"./slot-BP_Qo1ZM.js";import"./style-CcY6orqc.js";import"./attributes-Co-1QMVx.js";import"./this-FsubH6dY.js";import"./misc-BqLNQyZL.js";import"./each-BEdGG6pq.js";import"./attributes-BwU1yLAS.js";import"./class-Dzh9Da8g.js";import"./Legend-DRkSo3CF.js";import"./defaultLocale-DJ2q5QjE.js";import"./linear-CZTuTj73.js";import"./band-Dx0oDd3w.js";import"./actions-zDnBEv3B.js";import"./svelte-head-B1gOl83R.js";const $=`A bar chart component with various modes, plus animation and events.\r
\r
Note: This component is part of the **@onsvisual/svelte-charts** library. See [more examples here](https://onsvisual.github.io/svelte-charts/).\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { BarChart } from "@onsvisual/svelte-charts";\r
\r
  const data = [\r
    { year: 2017, value: 320 },\r
    { year: 2018, value: 640 },\r
    { year: 2019, value: 1600 },\r
    { year: 2020, value: 3840 },\r
  ];\r
<\/script>\r
\r
<BarChart {data} xKey="value" yKey="year" title="Bar chart example" footer="Source: ONS." />\r
\`\`\`\r
`,G={title:"Data visualisation/BarChart",component:O,tags:["autodocs"],argTypes:{mode:{options:["default","stacked","grouped","comparison","marker"],control:{type:"select"}}},parameters:b($)},{Story:t}=N();var M=S("<!> <!> <!> <!> <!>",1);function d(l,u){B(u,!1),D();var n=M(),p=k(n);const v=e(()=>({data:a.filter(C=>C.group=="apples"),xKey:"value",yKey:"year",title:"Simple bar chart",footer:"Source: ONS.",mode:"default"}));t(p,{name:"Default",get args(){return r(v)},parameters:{__svelteCsf:{rawCode:"<BarChart {...args} />"}}});var i=s(p,2);const _=e(()=>({data:a,xKey:"value",yKey:"year",zKey:"group",title:"Stacked bar chart",footer:"Source: ONS.",mode:"default"}));t(i,{name:"Stacked bars",get args(){return r(_)},parameters:{__svelteCsf:{rawCode:"<BarChart {...args} />"}}});var m=s(i,2);const f=e(()=>({data:a,xKey:"value",yKey:"year",zKey:"group",title:"Grouped bar chart",footer:"Source: ONS.",mode:"grouped"}));t(m,{name:"Grouped bars",get args(){return r(f)},parameters:{__svelteCsf:{rawCode:"<BarChart {...args} />"}}});var c=s(m,2);const g=e(()=>({data:a,xKey:"value",yKey:"year",zKey:"group",title:"Comparison marker chart",footer:"Source: ONS.",mode:"comparison"}));t(c,{name:"Comparison markers",get args(){return r(g)},parameters:{__svelteCsf:{rawCode:"<BarChart {...args} />"}}});var y=s(c,2);const h=e(()=>({data:a,xKey:"value",yKey:"year",zKey:"group",title:"Barcode chart",footer:"Source: ONS.",mode:"marker"}));t(y,{name:"Barcode",get args(){return r(h)},parameters:{__svelteCsf:{rawCode:"<BarChart {...args} />"}}}),K(l,n),x()}d.__docgen={data:[],name:"BarChart.stories.svelte"};const o=w(d,G),Z=["Default","StackedBars","GroupedBars","ComparisonMarkers","Barcode"],rr={...o.Default,tags:["svelte-csf-v5"]},er={...o.StackedBars,tags:["svelte-csf-v5"]},ar={...o.GroupedBars,tags:["svelte-csf-v5"]},tr={...o.ComparisonMarkers,tags:["svelte-csf-v5"]},or={...o.Barcode,tags:["svelte-csf-v5"]};export{or as Barcode,tr as ComparisonMarkers,rr as Default,ar as GroupedBars,er as StackedBars,Z as __namedExportsOrder,G as default};
