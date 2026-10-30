import{ab as _,e as g,g as r,ah as n,a as y,ad as h,f as S,H as a}from"./iframe-KpSyCse9.js";import{c as K,w as k,i as $,d as x}from"./create-runtime-stories-B9Qx1gAn.js";import"./DotPlotChart.svelte_svelte_type_style_lang-XznfriWa.js";import{C as w}from"./ColumnChart-mNwrsY95.js";import{d as t}from"./data-C2fm6GRW.js";import"./preload-helper-Dp1pzeXC.js";import"./linear-CZTuTj73.js";import"./slot-BP_Qo1ZM.js";import"./style-DJ2HlsXg.js";import"./attributes-DayBpKoh.js";import"./this-DC7r8CIX.js";import"./attributes-B8eluhLe.js";import"./each-BrzkDhQl.js";import"./class-BXNpPotE.js";import"./actions-BH_rrNEt.js";import"./svelte-head-ifkohPjB.js";import"./Legend-CyAZEp7n.js";import"./band-CZRuDYDE.js";const D=`A column chart component with various modes, plus animation and events.\r
\r
Note: This component is part of the **@onsvisual/svelte-charts** library. See [more examples here](https://onsvisual.github.io/svelte-charts/).\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { ColumnChart } from "@onsvisual/svelte-charts";\r
\r
  const data = [\r
    { year: 2017, value: 320 },\r
    { year: 2018, value: 640 },\r
    { year: 2019, value: 1600 },\r
    { year: 2020, value: 3840 },\r
  ];\r
<\/script>\r
\r
<ColumnChart {data} xKey="value" yKey="year" title="Bar chart example" footer="Source: ONS." />\r
\`\`\`\r
`,b={title:"Data visualisation/ColumnChart",component:w,tags:["autodocs"],argTypes:{mode:{options:["default","stacked","grouped","comparison","marker"],control:{type:"select"}}},parameters:k(D)},{Story:o}=x();var B=S("<!> <!> <!> <!> <!>",1);function c(d,C){_(C,!1),$();var m=B(),l=g(m);{let e=a(()=>({data:t.filter(f=>f.group=="apples"),xKey:"year",yKey:"value",title:"Simple bar chart",footer:"Source: ONS.",mode:"default"}));o(l,{name:"Default",get args(){return r(e)},parameters:{__svelteCsf:{rawCode:"<ColumnChart {...args} />"}}})}var u=n(l,2);{let e=a(()=>({data:t,xKey:"year",yKey:"value",zKey:"group",title:"Stacked bar chart",footer:"Source: ONS.",mode:"default"}));o(u,{name:"Stacked columns",get args(){return r(e)},parameters:{__svelteCsf:{rawCode:"<ColumnChart {...args} />"}}})}var i=n(u,2);{let e=a(()=>({data:t,xKey:"year",yKey:"value",zKey:"group",title:"Grouped bar chart",footer:"Source: ONS.",mode:"grouped"}));o(i,{name:"Grouped columns",get args(){return r(e)},parameters:{__svelteCsf:{rawCode:"<ColumnChart {...args} />"}}})}var p=n(i,2);{let e=a(()=>({data:t,xKey:"year",yKey:"value",zKey:"group",title:"Comparison marker chart",footer:"Source: ONS.",mode:"comparison"}));o(p,{name:"Comparison markers",get args(){return r(e)},parameters:{__svelteCsf:{rawCode:"<ColumnChart {...args} />"}}})}var v=n(p,2);{let e=a(()=>({data:t,xKey:"year",yKey:"value",zKey:"group",title:"Barcode chart",footer:"Source: ONS.",mode:"marker"}));o(v,{name:"Barcode",get args(){return r(e)},parameters:{__svelteCsf:{rawCode:"<ColumnChart {...args} />"}}})}y(d,m),h()}c.__docgen={data:[],name:"ColumnChart.stories.svelte"};const s=K(c,b),U=["Default","StackedColumns","GroupedColumns","ComparisonMarkers","Barcode"],V={...s.Default,tags:["svelte-csf-v5"]},W={...s.StackedColumns,tags:["svelte-csf-v5"]},X={...s.GroupedColumns,tags:["svelte-csf-v5"]},Y={...s.ComparisonMarkers,tags:["svelte-csf-v5"]},Z={...s.Barcode,tags:["svelte-csf-v5"]};export{Z as Barcode,Y as ComparisonMarkers,V as Default,X as GroupedColumns,W as StackedColumns,U as __namedExportsOrder,b as default};
