import{ab as g,e as y,g as r,ae as n,a as h,ad as C,f as B,H as a}from"./iframe-BBGryJPZ.js";import{c as S,w as K,i as k,d as $}from"./create-runtime-stories-RHRrb2om.js";import{B as b}from"./BarChart-BjkE0rkO.js";import"./DotPlotChart.svelte_svelte_type_style_lang-B4AbvSi_.js";import{d as t}from"./data-C2fm6GRW.js";import"./preload-helper-Dp1pzeXC.js";import"./slot-BP_Qo1ZM.js";import"./style-D1wWjt-p.js";import"./attributes-DayBpKoh.js";import"./this-D-X4lF3T.js";import"./misc-nYiBnrtG.js";import"./each-DZ9IC57e.js";import"./attributes-D1uD_JnJ.js";import"./class-C-3zoa9T.js";import"./Legend-FRhzmWa_.js";import"./defaultLocale-DJ2q5QjE.js";import"./linear-CZTuTj73.js";import"./band-BGPAmxQU.js";import"./actions-Mk5H-RtW.js";import"./svelte-head-Bb_5_Jcm.js";const x=`A bar chart component with various modes, plus animation and events.

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
`,w={title:"Charts/BarChart",component:b,tags:["autodocs"],argTypes:{mode:{options:["default","stacked","grouped","comparison","marker"],control:{type:"select"}}},parameters:K(x)},{Story:o}=$();var D=B("<!> <!> <!> <!> <!>",1);function d(u,v){g(v,!1),k();var m=D(),p=y(m);{let e=a(()=>({data:t.filter(_=>_.group=="apples"),xKey:"value",yKey:"year",title:"Simple bar chart",footer:"Source: ONS.",mode:"default"}));o(p,{name:"Default",get args(){return r(e)},parameters:{__svelteCsf:{rawCode:"<BarChart {...args} />"}}})}var i=n(p,2);{let e=a(()=>({data:t,xKey:"value",yKey:"year",zKey:"group",title:"Stacked bar chart",footer:"Source: ONS.",mode:"default"}));o(i,{name:"Stacked bars",get args(){return r(e)},parameters:{__svelteCsf:{rawCode:"<BarChart {...args} />"}}})}var c=n(i,2);{let e=a(()=>({data:t,xKey:"value",yKey:"year",zKey:"group",title:"Grouped bar chart",footer:"Source: ONS.",mode:"grouped"}));o(c,{name:"Grouped bars",get args(){return r(e)},parameters:{__svelteCsf:{rawCode:"<BarChart {...args} />"}}})}var l=n(c,2);{let e=a(()=>({data:t,xKey:"value",yKey:"year",zKey:"group",title:"Comparison marker chart",footer:"Source: ONS.",mode:"comparison"}));o(l,{name:"Comparison markers",get args(){return r(e)},parameters:{__svelteCsf:{rawCode:"<BarChart {...args} />"}}})}var f=n(l,2);{let e=a(()=>({data:t,xKey:"value",yKey:"year",zKey:"group",title:"Barcode chart",footer:"Source: ONS.",mode:"marker"}));o(f,{name:"Barcode",get args(){return r(e)},parameters:{__svelteCsf:{rawCode:"<BarChart {...args} />"}}})}h(u,m),C()}d.__docgen={data:[],name:"BarChart.stories.svelte"};const s=S(d,w),W=["Default","StackedBars","GroupedBars","ComparisonMarkers","Barcode"],X={...s.Default,tags:["svelte-csf-v5"]},Y={...s.StackedBars,tags:["svelte-csf-v5"]},Z={...s.GroupedBars,tags:["svelte-csf-v5"]},ee={...s.ComparisonMarkers,tags:["svelte-csf-v5"]},re={...s.Barcode,tags:["svelte-csf-v5"]};export{re as Barcode,ee as ComparisonMarkers,X as Default,Z as GroupedBars,Y as StackedBars,W as __namedExportsOrder,w as default};
