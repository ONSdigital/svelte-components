import{A as S,f as K,m as k,G as e,h as r,J as s,j as x,I as w}from"./iframe-BbbdPRT3.js";import{w as B,c as D,i as G,d as N}from"./create-runtime-stories-BDNKaz6P.js";import"./DotPlotChart.svelte_svelte_type_style_lang-BE6gq5D1.js";import{C as O}from"./ColumnChart-Doyl8SrC.js";import{d as a}from"./data-C2fm6GRW.js";import"./linear-CZTuTj73.js";import"./slot-BP_Qo1ZM.js";import"./style-CNURdi_Z.js";import"./attributes-q36Eg1F8.js";import"./this-dw19zHaD.js";import"./attributes-D2OsbY2h.js";import"./each-CQ9gxpab.js";import"./class-B9SFUanI.js";import"./actions-DFMsxQvl.js";import"./svelte-head-DScKyvlM.js";import"./misc-BULzqAsZ.js";import"./Legend-OF3bn13p.js";import"./band-B2fMqdK8.js";const $=`A column chart component with various modes, plus animation and events.

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
`,b={title:"Charts/ColumnChart",component:O,tags:["autodocs"],argTypes:{mode:{options:["default","stacked","grouped","comparison","marker"],control:{type:"select"}}},parameters:B($)},{Story:o}=N();var M=K("<!> <!> <!> <!> <!>",1);function i(c,d){S(d,!1),G();var n=M(),m=k(n);const C=r(()=>({data:a.filter(h=>h.group=="apples"),xKey:"year",yKey:"value",title:"Simple bar chart",footer:"Source: ONS.",mode:"default"}));o(m,{name:"Default",get args(){return e(C)},parameters:{__svelteCsf:{rawCode:"<ColumnChart {...args} />"}}});var l=s(m,2);const v=r(()=>({data:a,xKey:"year",yKey:"value",zKey:"group",title:"Stacked bar chart",footer:"Source: ONS.",mode:"default"}));o(l,{name:"Stacked columns",get args(){return e(v)},parameters:{__svelteCsf:{rawCode:"<ColumnChart {...args} />"}}});var p=s(l,2);const _=r(()=>({data:a,xKey:"year",yKey:"value",zKey:"group",title:"Grouped bar chart",footer:"Source: ONS.",mode:"grouped"}));o(p,{name:"Grouped columns",get args(){return e(_)},parameters:{__svelteCsf:{rawCode:"<ColumnChart {...args} />"}}});var u=s(p,2);const f=r(()=>({data:a,xKey:"year",yKey:"value",zKey:"group",title:"Comparison marker chart",footer:"Source: ONS.",mode:"comparison"}));o(u,{name:"Comparison markers",get args(){return e(f)},parameters:{__svelteCsf:{rawCode:"<ColumnChart {...args} />"}}});var y=s(u,2);const g=r(()=>({data:a,xKey:"year",yKey:"value",zKey:"group",title:"Barcode chart",footer:"Source: ONS.",mode:"marker"}));o(y,{name:"Barcode",get args(){return e(g)},parameters:{__svelteCsf:{rawCode:"<ColumnChart {...args} />"}}}),x(c,n),w()}i.__docgen={data:[],name:"ColumnChart.stories.svelte"};const t=D(i,b),Y=["Default","StackedColumns","GroupedColumns","ComparisonMarkers","Barcode"],Z={...t.Default,tags:["svelte-csf-v5"]},ee={...t.StackedColumns,tags:["svelte-csf-v5"]},re={...t.GroupedColumns,tags:["svelte-csf-v5"]},ae={...t.ComparisonMarkers,tags:["svelte-csf-v5"]},oe={...t.Barcode,tags:["svelte-csf-v5"]};export{oe as Barcode,ae as ComparisonMarkers,Z as Default,re as GroupedColumns,ee as StackedColumns,Y as __namedExportsOrder,b as default};
