import{ab as g,e as y,g as e,ae as n,a as h,ad as C,f as B,H as a}from"./iframe-CwT5EAsy.js";import{c as S,w as K,i as k,d as $}from"./create-runtime-stories-BBueoODQ.js";import{B as b}from"./BarChart-D4jvQ2ZU.js";import"./DotPlotChart.svelte_svelte_type_style_lang-BWEIfXSP.js";import{d as t}from"./data-C2fm6GRW.js";import"./preload-helper-Dp1pzeXC.js";import"./slot-BP_Qo1ZM.js";import"./style-CZqFqtXy.js";import"./attributes-DayBpKoh.js";import"./this-D3VIVySN.js";import"./misc-5c76ZPtH.js";import"./each-SKCr4DW0.js";import"./attributes-DBnpCygu.js";import"./class-Dvitqb_Y.js";import"./Legend-CAnFed4j.js";import"./defaultLocale-DJ2q5QjE.js";import"./linear-CZTuTj73.js";import"./band-BQKbgZF1.js";import"./actions-CEIi_AOL.js";import"./svelte-head-_gL5VRnT.js";const x=`A bar chart component with various modes, plus animation and events.\r
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
`,w={title:"Data visualisation/BarChart",component:b,tags:["autodocs"],argTypes:{mode:{options:["default","stacked","grouped","comparison","marker"],control:{type:"select"}}},parameters:K(x)},{Story:o}=$();var D=B("<!> <!> <!> <!> <!>",1);function d(u,v){g(v,!1),k();var i=D(),m=y(i);{let r=a(()=>({data:t.filter(_=>_.group=="apples"),xKey:"value",yKey:"year",title:"Simple bar chart",footer:"Source: ONS.",mode:"default"}));o(m,{name:"Default",get args(){return e(r)},parameters:{__svelteCsf:{rawCode:"<BarChart {...args} />"}}})}var p=n(m,2);{let r=a(()=>({data:t,xKey:"value",yKey:"year",zKey:"group",title:"Stacked bar chart",footer:"Source: ONS.",mode:"default"}));o(p,{name:"Stacked bars",get args(){return e(r)},parameters:{__svelteCsf:{rawCode:"<BarChart {...args} />"}}})}var l=n(p,2);{let r=a(()=>({data:t,xKey:"value",yKey:"year",zKey:"group",title:"Grouped bar chart",footer:"Source: ONS.",mode:"grouped"}));o(l,{name:"Grouped bars",get args(){return e(r)},parameters:{__svelteCsf:{rawCode:"<BarChart {...args} />"}}})}var c=n(l,2);{let r=a(()=>({data:t,xKey:"value",yKey:"year",zKey:"group",title:"Comparison marker chart",footer:"Source: ONS.",mode:"comparison"}));o(c,{name:"Comparison markers",get args(){return e(r)},parameters:{__svelteCsf:{rawCode:"<BarChart {...args} />"}}})}var f=n(c,2);{let r=a(()=>({data:t,xKey:"value",yKey:"year",zKey:"group",title:"Barcode chart",footer:"Source: ONS.",mode:"marker"}));o(f,{name:"Barcode",get args(){return e(r)},parameters:{__svelteCsf:{rawCode:"<BarChart {...args} />"}}})}h(u,i),C()}d.__docgen={data:[],name:"BarChart.stories.svelte"};const s=S(d,w),W=["Default","StackedBars","GroupedBars","ComparisonMarkers","Barcode"],X={...s.Default,tags:["svelte-csf-v5"]},Y={...s.StackedBars,tags:["svelte-csf-v5"]},Z={...s.GroupedBars,tags:["svelte-csf-v5"]},rr={...s.ComparisonMarkers,tags:["svelte-csf-v5"]},er={...s.Barcode,tags:["svelte-csf-v5"]};export{er as Barcode,rr as ComparisonMarkers,X as Default,Z as GroupedBars,Y as StackedBars,W as __namedExportsOrder,w as default};
