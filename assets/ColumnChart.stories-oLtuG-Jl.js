import{ab as _,e as g,g as a,ae as n,a as y,ad as h,f as S,H as r}from"./iframe-sScITiDD.js";import{c as K,w as k,i as $,d as x}from"./create-runtime-stories-zBo7-1R2.js";import"./DotPlotChart.svelte_svelte_type_style_lang-C4OQ2Uti.js";import{C as w}from"./ColumnChart-lKFznmY3.js";import{d as t}from"./data-C2fm6GRW.js";import"./preload-helper-Dp1pzeXC.js";import"./linear-CZTuTj73.js";import"./slot-BP_Qo1ZM.js";import"./style-rPNM_RJR.js";import"./attributes-DayBpKoh.js";import"./this-DzQxfD6Y.js";import"./attributes-BvtExsIM.js";import"./each-B9hld0ni.js";import"./class-DEomZZNA.js";import"./actions-C-infV3j.js";import"./svelte-head-CRwkrD2p.js";import"./misc-D9wx5MhO.js";import"./Legend-CYz3yWXe.js";import"./band-C_9yQ5NZ.js";const D=`A column chart component with various modes, plus animation and events.

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
`,b={title:"Data visualisation/ColumnChart",component:w,tags:["autodocs"],argTypes:{mode:{options:["default","stacked","grouped","comparison","marker"],control:{type:"select"}}},parameters:k(D)},{Story:o}=x();var B=S("<!> <!> <!> <!> <!>",1);function c(d,C){_(C,!1),$();var m=B(),l=g(m);{let e=r(()=>({data:t.filter(f=>f.group=="apples"),xKey:"year",yKey:"value",title:"Simple bar chart",footer:"Source: ONS.",mode:"default"}));o(l,{name:"Default",get args(){return a(e)},parameters:{__svelteCsf:{rawCode:"<ColumnChart {...args} />"}}})}var u=n(l,2);{let e=r(()=>({data:t,xKey:"year",yKey:"value",zKey:"group",title:"Stacked bar chart",footer:"Source: ONS.",mode:"default"}));o(u,{name:"Stacked columns",get args(){return a(e)},parameters:{__svelteCsf:{rawCode:"<ColumnChart {...args} />"}}})}var i=n(u,2);{let e=r(()=>({data:t,xKey:"year",yKey:"value",zKey:"group",title:"Grouped bar chart",footer:"Source: ONS.",mode:"grouped"}));o(i,{name:"Grouped columns",get args(){return a(e)},parameters:{__svelteCsf:{rawCode:"<ColumnChart {...args} />"}}})}var p=n(i,2);{let e=r(()=>({data:t,xKey:"year",yKey:"value",zKey:"group",title:"Comparison marker chart",footer:"Source: ONS.",mode:"comparison"}));o(p,{name:"Comparison markers",get args(){return a(e)},parameters:{__svelteCsf:{rawCode:"<ColumnChart {...args} />"}}})}var v=n(p,2);{let e=r(()=>({data:t,xKey:"year",yKey:"value",zKey:"group",title:"Barcode chart",footer:"Source: ONS.",mode:"marker"}));o(v,{name:"Barcode",get args(){return a(e)},parameters:{__svelteCsf:{rawCode:"<ColumnChart {...args} />"}}})}y(d,m),h()}c.__docgen={data:[],name:"ColumnChart.stories.svelte"};const s=K(c,b),V=["Default","StackedColumns","GroupedColumns","ComparisonMarkers","Barcode"],W={...s.Default,tags:["svelte-csf-v5"]},X={...s.StackedColumns,tags:["svelte-csf-v5"]},Y={...s.GroupedColumns,tags:["svelte-csf-v5"]},Z={...s.ComparisonMarkers,tags:["svelte-csf-v5"]},ee={...s.Barcode,tags:["svelte-csf-v5"]};export{ee as Barcode,Z as ComparisonMarkers,W as Default,Y as GroupedColumns,X as StackedColumns,V as __namedExportsOrder,b as default};
