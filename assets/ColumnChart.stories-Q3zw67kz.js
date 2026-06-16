import{ab as _,e as g,g as r,ae as n,a as y,ad as h,f as S,H as a}from"./iframe-BR4MEgmA.js";import{c as K,w as k,i as $,d as x}from"./create-runtime-stories-BCU5wvzh.js";import"./DotPlotChart.svelte_svelte_type_style_lang-C3oNwf0_.js";import{C as w}from"./ColumnChart-GWKhvZup.js";import{d as t}from"./data-C2fm6GRW.js";import"./preload-helper-Dp1pzeXC.js";import"./linear-CZTuTj73.js";import"./slot-BP_Qo1ZM.js";import"./style-B5SUVlSu.js";import"./attributes-DayBpKoh.js";import"./this-Cyq7VZGS.js";import"./attributes-Dhuqf2bR.js";import"./each-DhaaMYCt.js";import"./class-BRzkbxqU.js";import"./actions-BDkOwRzx.js";import"./svelte-head-BVcXiqEj.js";import"./misc-DawUTzDN.js";import"./Legend-Bkcf3THB.js";import"./band-CgjqLsv4.js";const b=`A column chart component with various modes, plus animation and events.

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
`,B={title:"Charts/ColumnChart",component:w,tags:["autodocs"],argTypes:{mode:{options:["default","stacked","grouped","comparison","marker"],control:{type:"select"}}},parameters:k(b)},{Story:o}=x();var D=S("<!> <!> <!> <!> <!>",1);function c(d,C){_(C,!1),$();var m=D(),l=g(m);{let e=a(()=>({data:t.filter(f=>f.group=="apples"),xKey:"year",yKey:"value",title:"Simple bar chart",footer:"Source: ONS.",mode:"default"}));o(l,{name:"Default",get args(){return r(e)},parameters:{__svelteCsf:{rawCode:"<ColumnChart {...args} />"}}})}var u=n(l,2);{let e=a(()=>({data:t,xKey:"year",yKey:"value",zKey:"group",title:"Stacked bar chart",footer:"Source: ONS.",mode:"default"}));o(u,{name:"Stacked columns",get args(){return r(e)},parameters:{__svelteCsf:{rawCode:"<ColumnChart {...args} />"}}})}var p=n(u,2);{let e=a(()=>({data:t,xKey:"year",yKey:"value",zKey:"group",title:"Grouped bar chart",footer:"Source: ONS.",mode:"grouped"}));o(p,{name:"Grouped columns",get args(){return r(e)},parameters:{__svelteCsf:{rawCode:"<ColumnChart {...args} />"}}})}var i=n(p,2);{let e=a(()=>({data:t,xKey:"year",yKey:"value",zKey:"group",title:"Comparison marker chart",footer:"Source: ONS.",mode:"comparison"}));o(i,{name:"Comparison markers",get args(){return r(e)},parameters:{__svelteCsf:{rawCode:"<ColumnChart {...args} />"}}})}var v=n(i,2);{let e=a(()=>({data:t,xKey:"year",yKey:"value",zKey:"group",title:"Barcode chart",footer:"Source: ONS.",mode:"marker"}));o(v,{name:"Barcode",get args(){return r(e)},parameters:{__svelteCsf:{rawCode:"<ColumnChart {...args} />"}}})}y(d,m),h()}c.__docgen={data:[],name:"ColumnChart.stories.svelte"};const s=K(c,B),V=["Default","StackedColumns","GroupedColumns","ComparisonMarkers","Barcode"],W={...s.Default,tags:["svelte-csf-v5"]},X={...s.StackedColumns,tags:["svelte-csf-v5"]},Y={...s.GroupedColumns,tags:["svelte-csf-v5"]},Z={...s.ComparisonMarkers,tags:["svelte-csf-v5"]},ee={...s.Barcode,tags:["svelte-csf-v5"]};export{ee as Barcode,Z as ComparisonMarkers,W as Default,Y as GroupedColumns,X as StackedColumns,V as __namedExportsOrder,B as default};
