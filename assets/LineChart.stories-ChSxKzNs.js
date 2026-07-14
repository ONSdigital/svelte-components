import{ab as d,e as g,g as a,ae as p,a as v,ad as y,f,H as t}from"./iframe-Bt66Q56T.js";import{c as _,w as C,i as L,d as S}from"./create-runtime-stories-Vm-egtMi.js";import"./DotPlotChart.svelte_svelte_type_style_lang-C9k-lElR.js";import{L as b}from"./LineChart-CC4Wf5MK.js";import{d as r}from"./data-C2fm6GRW.js";import"./preload-helper-Dp1pzeXC.js";import"./linear-CZTuTj73.js";import"./slot-BP_Qo1ZM.js";import"./style-rFapobYZ.js";import"./attributes-DayBpKoh.js";import"./this-DSauSb5O.js";import"./attributes-DiodIQ6B.js";import"./each-B2qHpR90.js";import"./class-Ih76KiUS.js";import"./actions-DNZgy4e8.js";import"./svelte-head-Lwsf21c7.js";import"./misc-ztCYG-oO.js";import"./Labels-BnY0Wgot.js";import"./Legend-D3mz8p9s.js";import"./defaultLocale-DJ2q5QjE.js";const K=`A line chart component with various modes, plus animation and events.

Note: This component is part of the **@onsvisual/svelte-charts** library. See [more examples here](https://onsvisual.github.io/svelte-charts/).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { LineChart } from "@onsvisual/svelte-charts";

  const data = [
    { year: 2017, value: 320, group: "apples" },
    { year: 2017, value: 480, group: "bananas" },
    { year: 2017, value: 640, group: "cherries" },
    { year: 2017, value: 400, group: "dates" },
    { year: 2018, value: 640, group: "apples" },
    { year: 2018, value: 960, group: "bananas" },
    { year: 2018, value: 640, group: "cherries" },
    { year: 2018, value: 400, group: "dates" },
    { year: 2019, value: 1600, group: "apples" },
    { year: 2019, value: 1440, group: "bananas" },
    { year: 2019, value: 960, group: "cherries" },
    { year: 2019, value: 400, group: "dates" },
    { year: 2020, value: 3840, group: "apples" },
    { year: 2020, value: 1920, group: "bananas" },
    { year: 2020, value: 960, group: "cherries" },
    { year: 2020, value: 400, group: "dates" },
  ];
<\/script>

<LineChart {data} xKey="year" yKey="value" zKey="group" title="Line chart example" footer="Source: ONS." legend={true} />
\`\`\`
`,k={title:"Charts/LineChart",component:b,tags:["autodocs"],argTypes:{mode:{options:["default","stacked"],control:{type:"select"}}},parameters:C(K)},{Story:n}=S();var w=f("<!> <!> <!>",1);function u(m,c){d(c,!1),L();var s=w(),i=g(s);{let e=t(()=>({data:r,xKey:"year",yKey:"value",zKey:"group",title:"Simple line chart",footer:"Source: ONS.",mode:"default",legend:!0}));n(i,{name:"Default",get args(){return a(e)},parameters:{__svelteCsf:{rawCode:"<LineChart {...args} />"}}})}var l=p(i,2);{let e=t(()=>({data:r,xKey:"year",yKey:"value",zKey:"group",title:"Line chart with inline labels",footer:"Source: ONS.",mode:"default",padding:{top:0,bottom:28,left:35,right:100},labels:"all"}));n(l,{name:"Line chart with inline labels",get args(){return a(e)},parameters:{__svelteCsf:{rawCode:"<LineChart {...args} />"}}})}var h=p(l,2);{let e=t(()=>({data:r,xKey:"year",yKey:"value",zKey:"group",title:"Stacked area chart",footer:"Source: ONS.",mode:"stacked",line:!1,legend:!0}));n(h,{name:"Stacked area chart",get args(){return a(e)},parameters:{__svelteCsf:{rawCode:"<LineChart {...args} />"}}})}v(m,s),y()}u.__docgen={data:[],name:"LineChart.stories.svelte"};const o=_(u,k),P=["Default","LineChartWithInlineLabels","StackedAreaChart"],Q={...o.Default,tags:["svelte-csf-v5"]},U={...o.LineChartWithInlineLabels,tags:["svelte-csf-v5"]},V={...o.StackedAreaChart,tags:["svelte-csf-v5"]};export{Q as Default,U as LineChartWithInlineLabels,V as StackedAreaChart,P as __namedExportsOrder,k as default};
