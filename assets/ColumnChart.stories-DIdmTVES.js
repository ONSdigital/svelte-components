import{p as S,j as k,f as K,g as e,o as r,k as s,e as x,h as w}from"./iframe-C7mAxSNS.js";import{w as D,c as B,i as N,d as O}from"./create-runtime-stories-DYxOwgic.js";import"./DotPlotChart.svelte_svelte_type_style_lang-B7qG7XAf.js";import{C as $}from"./ColumnChart-HEzOtJQY.js";import{d as a}from"./data-C2fm6GRW.js";import"./linear-CZTuTj73.js";import"./slot-BP_Qo1ZM.js";import"./style-CcY6orqc.js";import"./attributes-Co-1QMVx.js";import"./this-DGqdPsnR.js";import"./attributes-C0fURmbW.js";import"./each-zDsumnKt.js";import"./class-Dzh9Da8g.js";import"./actions-83bUZoet.js";import"./svelte-head-D_mI_w3M.js";import"./misc-D-oVmW42.js";import"./Legend-BMbcO2HM.js";import"./band-D360NldW.js";const b=`A column chart component with various modes, plus animation and events.

Note: This component is part of the **@onsvisual/svelte-charts** library. See [more examples here](https://onsvisual.github.io/svelte-charts/).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { ColumnChart } from "@onsvisual/svelte-charts";

  const data = [
    { year: 2017, value: 320 },
    { year: 2018, value: 640 },
    { year: 2019, value: 1600 },
    { year: 2020, value: 3840 },
  ];
<\/script>

<ColumnChart {data} xKey="value" yKey="year" title="Bar chart example" footer="Source: ONS." />
\`\`\`
`,G={title:"Data visualisation/ColumnChart",component:$,tags:["autodocs"],argTypes:{mode:{options:["default","stacked","grouped","comparison","marker"],control:{type:"select"}}},parameters:D(b)},{Story:o}=O();var M=k("<!> <!> <!> <!> <!>",1);function u(c,d){S(d,!1),N();var n=M(),m=K(n);const C=r(()=>({data:a.filter(h=>h.group=="apples"),xKey:"year",yKey:"value",title:"Simple bar chart",footer:"Source: ONS.",mode:"default"}));o(m,{name:"Default",get args(){return e(C)},parameters:{__svelteCsf:{rawCode:"<ColumnChart {...args} />"}}});var l=s(m,2);const v=r(()=>({data:a,xKey:"year",yKey:"value",zKey:"group",title:"Stacked bar chart",footer:"Source: ONS.",mode:"default"}));o(l,{name:"Stacked columns",get args(){return e(v)},parameters:{__svelteCsf:{rawCode:"<ColumnChart {...args} />"}}});var p=s(l,2);const _=r(()=>({data:a,xKey:"year",yKey:"value",zKey:"group",title:"Grouped bar chart",footer:"Source: ONS.",mode:"grouped"}));o(p,{name:"Grouped columns",get args(){return e(_)},parameters:{__svelteCsf:{rawCode:"<ColumnChart {...args} />"}}});var i=s(p,2);const f=r(()=>({data:a,xKey:"year",yKey:"value",zKey:"group",title:"Comparison marker chart",footer:"Source: ONS.",mode:"comparison"}));o(i,{name:"Comparison markers",get args(){return e(f)},parameters:{__svelteCsf:{rawCode:"<ColumnChart {...args} />"}}});var g=s(i,2);const y=r(()=>({data:a,xKey:"year",yKey:"value",zKey:"group",title:"Barcode chart",footer:"Source: ONS.",mode:"marker"}));o(g,{name:"Barcode",get args(){return e(y)},parameters:{__svelteCsf:{rawCode:"<ColumnChart {...args} />"}}}),x(c,n),w()}u.__docgen={data:[],name:"ColumnChart.stories.svelte"};const t=B(u,G),Y=["Default","StackedColumns","GroupedColumns","ComparisonMarkers","Barcode"],Z={...t.Default,tags:["svelte-csf-v5"]},ee={...t.StackedColumns,tags:["svelte-csf-v5"]},re={...t.GroupedColumns,tags:["svelte-csf-v5"]},ae={...t.ComparisonMarkers,tags:["svelte-csf-v5"]},oe={...t.Barcode,tags:["svelte-csf-v5"]};export{oe as Barcode,ae as ComparisonMarkers,Z as Default,re as GroupedColumns,ee as StackedColumns,Y as __namedExportsOrder,G as default};
