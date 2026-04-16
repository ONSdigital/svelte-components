import{A as d,f as h,m as v,G as o,h as a,J as _,j as D,I as y}from"./iframe-DulTi1-A.js";import{w as g,c as C,i as x,d as S}from"./create-runtime-stories-7p13Beub.js";import"./DotPlotChart.svelte_svelte_type_style_lang-CxZTD4lo.js";import{D as P}from"./DotPlotChart-B5WGED-h.js";import{d as r}from"./data-C2fm6GRW.js";import"./linear-CZTuTj73.js";import"./slot-BP_Qo1ZM.js";import"./style-CNURdi_Z.js";import"./attributes-q36Eg1F8.js";import"./this-CnVy7u-r.js";import"./attributes-DoXUNmic.js";import"./each-BmgOXf7X.js";import"./class-B9SFUanI.js";import"./actions-B36pWkR7.js";import"./svelte-head-Bh02Ab5g.js";import"./misc-DPhdxnvm.js";import"./band-CkcKBSYH.js";const K=`A dot plot chart component with animation and events.

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
`,w={title:"Charts/DotPlotChart",component:P,tags:["autodocs"],argTypes:{},parameters:g(K)},{Story:s}=S();var M=h("<!> <!>",1);function n(l,p){d(p,!1),x();var t=M(),e=v(t);const m=a(()=>({data:r.filter(f=>f.group=="apples"),xKey:"value",yKey:"year",title:"Dot plot chart",footer:"Source: ONS.",mode:"default"}));s(e,{name:"Default",get args(){return o(m)},parameters:{__svelteCsf:{rawCode:"<DotPlotChart {...args} />"}}});var u=_(e,2);const c=a(()=>({data:r,xKey:"value",yKey:"year",zKey:"group",title:"Dot plot with multiple points",footer:"Source: ONS.",mode:"default"}));s(u,{name:"Multiple dots",get args(){return o(c)},parameters:{__svelteCsf:{rawCode:"<DotPlotChart {...args} />"}}}),D(l,t),y()}n.__docgen={data:[],name:"DotPlotChart.stories.svelte"};const i=C(n,w),H=["Default","MultipleDots"],L={...i.Default,tags:["svelte-csf-v5"]},Q={...i.MultipleDots,tags:["svelte-csf-v5"]};export{L as Default,Q as MultipleDots,H as __namedExportsOrder,w as default};
