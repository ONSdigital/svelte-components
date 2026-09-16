import{ab as f,e as d,g as o,ae as v,a as h,ad as D,f as _,H as r}from"./iframe-CPuOiLdi.js";import{c as y,w as g,i as C,d as S}from"./create-runtime-stories-DJNjQXz2.js";import"./DotPlotChart.svelte_svelte_type_style_lang-DDufqR2u.js";import{D as P}from"./DotPlotChart-CQoq2snh.js";import{d as s}from"./data-C2fm6GRW.js";import"./preload-helper-Dp1pzeXC.js";import"./linear-CZTuTj73.js";import"./slot-BP_Qo1ZM.js";import"./style-BoNWNBRN.js";import"./attributes-DayBpKoh.js";import"./this-CN1pHrcI.js";import"./attributes-BU72BVC0.js";import"./each-LWBererG.js";import"./class-45mj1iA8.js";import"./actions-Dm7VJIha.js";import"./svelte-head-Cnj9fIIK.js";import"./misc-BoM4hoqK.js";import"./band-ByPjgexb.js";const x=`A dot plot chart component with animation and events.

Note: This component is part of the **@onsvisual/svelte-charts** library. See [more examples here](https://onsvisual.github.io/svelte-charts/).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { DotPlotChart } from "@onsvisual/svelte-charts";

  const data = [
    { year: 2017, value: 320 },
    { year: 2018, value: 640 },
    { year: 2019, value: 1600 },
    { year: 2020, value: 3840 },
  ];
<\/script>

<DotPlotChart {data} xKey="value" yKey="year" title="Bar chart example" footer="Source: ONS." />
\`\`\`
`,K={title:"Data visualisation/DotPlotChart",component:P,tags:["autodocs"],argTypes:{},parameters:g(x)},{Story:l}=S();var w=_("<!> <!>",1);function i(p,m){f(m,!1),C();var e=w(),a=d(e);{let t=r(()=>({data:s.filter(c=>c.group=="apples"),xKey:"value",yKey:"year",title:"Dot plot chart",footer:"Source: ONS.",mode:"default"}));l(a,{name:"Default",get args(){return o(t)},parameters:{__svelteCsf:{rawCode:"<DotPlotChart {...args} />"}}})}var u=v(a,2);{let t=r(()=>({data:s,xKey:"value",yKey:"year",zKey:"group",title:"Dot plot with multiple points",footer:"Source: ONS.",mode:"default"}));l(u,{name:"Multiple dots",get args(){return o(t)},parameters:{__svelteCsf:{rawCode:"<DotPlotChart {...args} />"}}})}h(p,e),D()}i.__docgen={data:[],name:"DotPlotChart.stories.svelte"};const n=y(i,K),J=["Default","MultipleDots"],L={...n.Default,tags:["svelte-csf-v5"]},Q={...n.MultipleDots,tags:["svelte-csf-v5"]};export{L as Default,Q as MultipleDots,J as __namedExportsOrder,K as default};
