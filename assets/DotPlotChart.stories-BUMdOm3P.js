import{ad as f,h as d,g as o,ah as h,a as v,af as D,f as _,K as r}from"./iframe-CpnTW6Aq.js";import{c as y,w as g,i as C,d as S}from"./create-runtime-stories-C7cZUBmE.js";import"./DotPlotChart.svelte_svelte_type_style_lang-B52odkxF.js";import{D as K}from"./DotPlotChart-DoGDiUv8.js";import{d as s}from"./data-C2fm6GRW.js";import"./preload-helper-Dp1pzeXC.js";import"./linear-CZTuTj73.js";import"./style-BD_XJmem.js";import"./attributes-DayBpKoh.js";import"./this-VMJU2kKR.js";import"./attributes-DMUiWW_Z.js";import"./each-fvhRyThL.js";import"./class-B_F942N2.js";import"./actions-D9G4B8FK.js";import"./svelte-head-Dh_GIgDE.js";import"./band-fKV7VZK_.js";const P=`A dot plot chart component with animation and events.

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
`,x={title:"Data visualisation/DotPlotChart",component:K,tags:["autodocs"],argTypes:{},parameters:g(P)},{Story:l}=S();var w=_("<!> <!>",1);function i(p,m){f(m,!1),C();var e=w(),a=d(e);{let t=r(()=>({data:s.filter(c=>c.group=="apples"),xKey:"value",yKey:"year",title:"Dot plot chart",footer:"Source: ONS.",mode:"default"}));l(a,{name:"Default",get args(){return o(t)},parameters:{__svelteCsf:{rawCode:"<DotPlotChart {...args} />"}}})}var u=h(a,2);{let t=r(()=>({data:s,xKey:"value",yKey:"year",zKey:"group",title:"Dot plot with multiple points",footer:"Source: ONS.",mode:"default"}));l(u,{name:"Multiple dots",get args(){return o(t)},parameters:{__svelteCsf:{rawCode:"<DotPlotChart {...args} />"}}})}v(p,e),D()}i.__docgen={data:[],name:"DotPlotChart.stories.svelte"};const n=y(i,x),H=["Default","MultipleDots"],I={...n.Default,tags:["svelte-csf-v5"]},J={...n.MultipleDots,tags:["svelte-csf-v5"]};export{I as Default,J as MultipleDots,H as __namedExportsOrder,x as default};
