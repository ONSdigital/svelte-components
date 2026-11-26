import{ad as g,h as y,g as a,ah as n,a as h,af as C,f as B,K as r}from"./iframe-DgBBsZ9Q.js";import{c as S,w as K,i as k,d as $}from"./create-runtime-stories-DfDjLEdu.js";import{B as x}from"./BarChart-DZTh95q3.js";import"./DotPlotChart.svelte_svelte_type_style_lang-CBhkAtOx.js";import{d as t}from"./data-C2fm6GRW.js";import"./preload-helper-Dp1pzeXC.js";import"./style-C1WXBI3F.js";import"./attributes-DayBpKoh.js";import"./this-CNIwX4zB.js";import"./each-DHxXgraV.js";import"./attributes-DrT5rv50.js";import"./class-m9BR9nCB.js";import"./Legend-C1pw3MBF.js";import"./defaultLocale-DJ2q5QjE.js";import"./linear-CZTuTj73.js";import"./band-ENrkGfyh.js";import"./actions-J3gqVO_v.js";import"./svelte-head-B7AKFDCZ.js";const b=`A bar chart component with various modes, plus animation and events.

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
`,w={title:"Data visualisation/BarChart",component:x,tags:["autodocs"],argTypes:{mode:{options:["default","stacked","grouped","comparison","marker"],control:{type:"select"}}},parameters:K(b)},{Story:o}=$();var D=B("<!> <!> <!> <!> <!>",1);function d(u,v){g(v,!1),k();var i=D(),m=y(i);{let e=r(()=>({data:t.filter(_=>_.group=="apples"),xKey:"value",yKey:"year",title:"Simple bar chart",footer:"Source: ONS.",mode:"default"}));o(m,{name:"Default",get args(){return a(e)},parameters:{__svelteCsf:{rawCode:"<BarChart {...args} />"}}})}var p=n(m,2);{let e=r(()=>({data:t,xKey:"value",yKey:"year",zKey:"group",title:"Stacked bar chart",footer:"Source: ONS.",mode:"default"}));o(p,{name:"Stacked bars",get args(){return a(e)},parameters:{__svelteCsf:{rawCode:"<BarChart {...args} />"}}})}var l=n(p,2);{let e=r(()=>({data:t,xKey:"value",yKey:"year",zKey:"group",title:"Grouped bar chart",footer:"Source: ONS.",mode:"grouped"}));o(l,{name:"Grouped bars",get args(){return a(e)},parameters:{__svelteCsf:{rawCode:"<BarChart {...args} />"}}})}var c=n(l,2);{let e=r(()=>({data:t,xKey:"value",yKey:"year",zKey:"group",title:"Comparison marker chart",footer:"Source: ONS.",mode:"comparison"}));o(c,{name:"Comparison markers",get args(){return a(e)},parameters:{__svelteCsf:{rawCode:"<BarChart {...args} />"}}})}var f=n(c,2);{let e=r(()=>({data:t,xKey:"value",yKey:"year",zKey:"group",title:"Barcode chart",footer:"Source: ONS.",mode:"marker"}));o(f,{name:"Barcode",get args(){return a(e)},parameters:{__svelteCsf:{rawCode:"<BarChart {...args} />"}}})}h(u,i),C()}d.__docgen={data:[],name:"BarChart.stories.svelte"};const s=S(d,w),U=["Default","StackedBars","GroupedBars","ComparisonMarkers","Barcode"],V={...s.Default,tags:["svelte-csf-v5"]},W={...s.StackedBars,tags:["svelte-csf-v5"]},X={...s.GroupedBars,tags:["svelte-csf-v5"]},Y={...s.ComparisonMarkers,tags:["svelte-csf-v5"]},Z={...s.Barcode,tags:["svelte-csf-v5"]};export{Z as Barcode,Y as ComparisonMarkers,V as Default,X as GroupedBars,W as StackedBars,U as __namedExportsOrder,w as default};
