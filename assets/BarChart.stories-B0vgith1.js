import{ab as g,e as y,g as a,ae as n,a as h,ad as C,f as B,H as r}from"./iframe-FYzU8PR_.js";import{c as S,w as K,i as k,d as $}from"./create-runtime-stories-BKnMRT3c.js";import{B as b}from"./BarChart-DmRPd0-p.js";import"./DotPlotChart.svelte_svelte_type_style_lang-uGN1omVV.js";import{d as t}from"./data-C2fm6GRW.js";import"./preload-helper-Dp1pzeXC.js";import"./slot-BP_Qo1ZM.js";import"./style-CZ6sbEQc.js";import"./attributes-DayBpKoh.js";import"./this-D5qvaGla.js";import"./misc-BIQCbjH1.js";import"./each-UK1-UvBr.js";import"./attributes-OusSqzY0.js";import"./class-DMdh5KUt.js";import"./Legend-CRRjtNDj.js";import"./defaultLocale-DJ2q5QjE.js";import"./linear-CZTuTj73.js";import"./band-DxsK8uY7.js";import"./actions-D1W6bAad.js";import"./svelte-head-HWUYHlIA.js";const x=`A bar chart component with various modes, plus animation and events.

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
`,w={title:"Data visualisation/BarChart",component:b,tags:["autodocs"],argTypes:{mode:{options:["default","stacked","grouped","comparison","marker"],control:{type:"select"}}},parameters:K(x)},{Story:o}=$();var D=B("<!> <!> <!> <!> <!>",1);function d(u,v){g(v,!1),k();var i=D(),m=y(i);{let e=r(()=>({data:t.filter(_=>_.group=="apples"),xKey:"value",yKey:"year",title:"Simple bar chart",footer:"Source: ONS.",mode:"default"}));o(m,{name:"Default",get args(){return a(e)},parameters:{__svelteCsf:{rawCode:"<BarChart {...args} />"}}})}var p=n(m,2);{let e=r(()=>({data:t,xKey:"value",yKey:"year",zKey:"group",title:"Stacked bar chart",footer:"Source: ONS.",mode:"default"}));o(p,{name:"Stacked bars",get args(){return a(e)},parameters:{__svelteCsf:{rawCode:"<BarChart {...args} />"}}})}var l=n(p,2);{let e=r(()=>({data:t,xKey:"value",yKey:"year",zKey:"group",title:"Grouped bar chart",footer:"Source: ONS.",mode:"grouped"}));o(l,{name:"Grouped bars",get args(){return a(e)},parameters:{__svelteCsf:{rawCode:"<BarChart {...args} />"}}})}var c=n(l,2);{let e=r(()=>({data:t,xKey:"value",yKey:"year",zKey:"group",title:"Comparison marker chart",footer:"Source: ONS.",mode:"comparison"}));o(c,{name:"Comparison markers",get args(){return a(e)},parameters:{__svelteCsf:{rawCode:"<BarChart {...args} />"}}})}var f=n(c,2);{let e=r(()=>({data:t,xKey:"value",yKey:"year",zKey:"group",title:"Barcode chart",footer:"Source: ONS.",mode:"marker"}));o(f,{name:"Barcode",get args(){return a(e)},parameters:{__svelteCsf:{rawCode:"<BarChart {...args} />"}}})}h(u,i),C()}d.__docgen={data:[],name:"BarChart.stories.svelte"};const s=S(d,w),W=["Default","StackedBars","GroupedBars","ComparisonMarkers","Barcode"],X={...s.Default,tags:["svelte-csf-v5"]},Y={...s.StackedBars,tags:["svelte-csf-v5"]},Z={...s.GroupedBars,tags:["svelte-csf-v5"]},ee={...s.ComparisonMarkers,tags:["svelte-csf-v5"]},ae={...s.Barcode,tags:["svelte-csf-v5"]};export{ae as Barcode,ee as ComparisonMarkers,X as Default,Z as GroupedBars,Y as StackedBars,W as __namedExportsOrder,w as default};
