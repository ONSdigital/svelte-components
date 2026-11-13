import{ad as _,h as g,g as a,ah as n,a as y,af as h,f as S,K as r}from"./iframe-UWIgwT_c.js";import{c as K,w as k,i as $,d as x}from"./create-runtime-stories-WntTm4wH.js";import"./DotPlotChart.svelte_svelte_type_style_lang-CkvWOmyi.js";import{C as w}from"./ColumnChart-Bt5GFd1M.js";import{d as t}from"./data-C2fm6GRW.js";import"./preload-helper-Dp1pzeXC.js";import"./linear-CZTuTj73.js";import"./style-JgESTiB5.js";import"./attributes-DayBpKoh.js";import"./this-DkxfCVKA.js";import"./attributes-CxnnJe_I.js";import"./each-28trRlzV.js";import"./class-BWaliKvu.js";import"./actions-CTYXIfQW.js";import"./svelte-head-HqhQydw-.js";import"./Legend-wMgGVeQE.js";import"./band-WUr97oH-.js";const D=`A column chart component with various modes, plus animation and events.

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
`,B={title:"Data visualisation/ColumnChart",component:w,tags:["autodocs"],argTypes:{mode:{options:["default","stacked","grouped","comparison","marker"],control:{type:"select"}}},parameters:k(D)},{Story:o}=x();var N=S("<!> <!> <!> <!> <!>",1);function c(d,C){_(C,!1),$();var m=N(),l=g(m);{let e=r(()=>({data:t.filter(f=>f.group=="apples"),xKey:"year",yKey:"value",title:"Simple bar chart",footer:"Source: ONS.",mode:"default"}));o(l,{name:"Default",get args(){return a(e)},parameters:{__svelteCsf:{rawCode:"<ColumnChart {...args} />"}}})}var u=n(l,2);{let e=r(()=>({data:t,xKey:"year",yKey:"value",zKey:"group",title:"Stacked bar chart",footer:"Source: ONS.",mode:"default"}));o(u,{name:"Stacked columns",get args(){return a(e)},parameters:{__svelteCsf:{rawCode:"<ColumnChart {...args} />"}}})}var i=n(u,2);{let e=r(()=>({data:t,xKey:"year",yKey:"value",zKey:"group",title:"Grouped bar chart",footer:"Source: ONS.",mode:"grouped"}));o(i,{name:"Grouped columns",get args(){return a(e)},parameters:{__svelteCsf:{rawCode:"<ColumnChart {...args} />"}}})}var p=n(i,2);{let e=r(()=>({data:t,xKey:"year",yKey:"value",zKey:"group",title:"Comparison marker chart",footer:"Source: ONS.",mode:"comparison"}));o(p,{name:"Comparison markers",get args(){return a(e)},parameters:{__svelteCsf:{rawCode:"<ColumnChart {...args} />"}}})}var v=n(p,2);{let e=r(()=>({data:t,xKey:"year",yKey:"value",zKey:"group",title:"Barcode chart",footer:"Source: ONS.",mode:"marker"}));o(v,{name:"Barcode",get args(){return a(e)},parameters:{__svelteCsf:{rawCode:"<ColumnChart {...args} />"}}})}y(d,m),h()}c.__docgen={data:[],name:"ColumnChart.stories.svelte"};const s=K(c,B),Q=["Default","StackedColumns","GroupedColumns","ComparisonMarkers","Barcode"],U={...s.Default,tags:["svelte-csf-v5"]},V={...s.StackedColumns,tags:["svelte-csf-v5"]},W={...s.GroupedColumns,tags:["svelte-csf-v5"]},X={...s.ComparisonMarkers,tags:["svelte-csf-v5"]},Y={...s.Barcode,tags:["svelte-csf-v5"]};export{Y as Barcode,X as ComparisonMarkers,U as Default,W as GroupedColumns,V as StackedColumns,Q as __namedExportsOrder,B as default};
