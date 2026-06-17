import{ab as f,e as d,g as o,ae as h,a as v,ad as D,f as _,H as r}from"./iframe-BBGryJPZ.js";import{c as y,w as g,i as C,d as S}from"./create-runtime-stories-RHRrb2om.js";import"./DotPlotChart.svelte_svelte_type_style_lang-B4AbvSi_.js";import{D as P}from"./DotPlotChart-DeC7ZZLk.js";import{d as s}from"./data-C2fm6GRW.js";import"./preload-helper-Dp1pzeXC.js";import"./linear-CZTuTj73.js";import"./slot-BP_Qo1ZM.js";import"./style-D1wWjt-p.js";import"./attributes-DayBpKoh.js";import"./this-D-X4lF3T.js";import"./attributes-D1uD_JnJ.js";import"./each-DZ9IC57e.js";import"./class-C-3zoa9T.js";import"./actions-Mk5H-RtW.js";import"./svelte-head-Bb_5_Jcm.js";import"./misc-nYiBnrtG.js";import"./band-BGPAmxQU.js";const x=`A dot plot chart component with animation and events.

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
`,K={title:"Charts/DotPlotChart",component:P,tags:["autodocs"],argTypes:{},parameters:g(x)},{Story:l}=S();var w=_("<!> <!>",1);function i(p,m){f(m,!1),C();var e=w(),a=d(e);{let t=r(()=>({data:s.filter(c=>c.group=="apples"),xKey:"value",yKey:"year",title:"Dot plot chart",footer:"Source: ONS.",mode:"default"}));l(a,{name:"Default",get args(){return o(t)},parameters:{__svelteCsf:{rawCode:"<DotPlotChart {...args} />"}}})}var u=h(a,2);{let t=r(()=>({data:s,xKey:"value",yKey:"year",zKey:"group",title:"Dot plot with multiple points",footer:"Source: ONS.",mode:"default"}));l(u,{name:"Multiple dots",get args(){return o(t)},parameters:{__svelteCsf:{rawCode:"<DotPlotChart {...args} />"}}})}v(p,e),D()}i.__docgen={data:[],name:"DotPlotChart.stories.svelte"};const n=y(i,K),J=["Default","MultipleDots"],L={...n.Default,tags:["svelte-csf-v5"]},Q={...n.MultipleDots,tags:["svelte-csf-v5"]};export{L as Default,Q as MultipleDots,J as __namedExportsOrder,K as default};
