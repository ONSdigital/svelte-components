import{ab as f,e as d,g as o,ae as v,a as h,ad as D,f as _,H as r}from"./iframe-FYzU8PR_.js";import{c as y,w as g,i as C,d as S}from"./create-runtime-stories-BKnMRT3c.js";import"./DotPlotChart.svelte_svelte_type_style_lang-uGN1omVV.js";import{D as P}from"./DotPlotChart-DaKdVHFO.js";import{d as s}from"./data-C2fm6GRW.js";import"./preload-helper-Dp1pzeXC.js";import"./linear-CZTuTj73.js";import"./slot-BP_Qo1ZM.js";import"./style-CZ6sbEQc.js";import"./attributes-DayBpKoh.js";import"./this-D5qvaGla.js";import"./attributes-OusSqzY0.js";import"./each-UK1-UvBr.js";import"./class-DMdh5KUt.js";import"./actions-D1W6bAad.js";import"./svelte-head-HWUYHlIA.js";import"./misc-BIQCbjH1.js";import"./band-DxsK8uY7.js";const x=`A dot plot chart component with animation and events.

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
