import{ab as d,e as g,g as a,ah as p,a as v,ad as y,f,H as r}from"./iframe-CWf7aFlM.js";import{c as _,w as C,i as L,d as S}from"./create-runtime-stories-DZHrlilD.js";import"./DotPlotChart.svelte_svelte_type_style_lang-CPibfm6K.js";import{L as b}from"./LineChart-C_vUbxdZ.js";import{d as t}from"./data-C2fm6GRW.js";import"./preload-helper-Dp1pzeXC.js";import"./linear-CZTuTj73.js";import"./slot-BP_Qo1ZM.js";import"./style-DKGnerva.js";import"./attributes-DayBpKoh.js";import"./this-DGMA4ypj.js";import"./attributes-HyytCBC6.js";import"./each-W8R4y-cX.js";import"./class-bcIlrV7N.js";import"./actions-CdxvWulj.js";import"./svelte-head-BAKvAkK-.js";import"./Labels-BG4x9d4p.js";import"./Legend-BF-oRmrI.js";import"./defaultLocale-DJ2q5QjE.js";const K=`A line chart component with various modes, plus animation and events.\r
\r
Note: This component is part of the **@onsvisual/svelte-charts** library. See [more examples here](https://onsvisual.github.io/svelte-charts/).\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { LineChart } from "@onsvisual/svelte-charts";\r
\r
  const data = [\r
    { year: 2017, value: 320, group: "apples" },\r
    { year: 2017, value: 480, group: "bananas" },\r
    { year: 2017, value: 640, group: "cherries" },\r
    { year: 2017, value: 400, group: "dates" },\r
    { year: 2018, value: 640, group: "apples" },\r
    { year: 2018, value: 960, group: "bananas" },\r
    { year: 2018, value: 640, group: "cherries" },\r
    { year: 2018, value: 400, group: "dates" },\r
    { year: 2019, value: 1600, group: "apples" },\r
    { year: 2019, value: 1440, group: "bananas" },\r
    { year: 2019, value: 960, group: "cherries" },\r
    { year: 2019, value: 400, group: "dates" },\r
    { year: 2020, value: 3840, group: "apples" },\r
    { year: 2020, value: 1920, group: "bananas" },\r
    { year: 2020, value: 960, group: "cherries" },\r
    { year: 2020, value: 400, group: "dates" },\r
  ];\r
<\/script>\r
\r
<LineChart {data} xKey="year" yKey="value" zKey="group" title="Line chart example" footer="Source: ONS." legend={true} />\r
\`\`\`\r
`,k={title:"Data visualisation/LineChart",component:b,tags:["autodocs"],argTypes:{mode:{options:["default","stacked"],control:{type:"select"}}},parameters:C(K)},{Story:n}=S();var w=f("<!> <!> <!>",1);function u(m,c){d(c,!1),L();var o=w(),i=g(o);{let e=r(()=>({data:t,xKey:"year",yKey:"value",zKey:"group",title:"Simple line chart",footer:"Source: ONS.",mode:"default",legend:!0}));n(i,{name:"Default",get args(){return a(e)},parameters:{__svelteCsf:{rawCode:"<LineChart {...args} />"}}})}var l=p(i,2);{let e=r(()=>({data:t,xKey:"year",yKey:"value",zKey:"group",title:"Line chart with inline labels",footer:"Source: ONS.",mode:"default",padding:{top:0,bottom:28,left:35,right:100},labels:"all"}));n(l,{name:"Line chart with inline labels",get args(){return a(e)},parameters:{__svelteCsf:{rawCode:"<LineChart {...args} />"}}})}var h=p(l,2);{let e=r(()=>({data:t,xKey:"year",yKey:"value",zKey:"group",title:"Stacked area chart",footer:"Source: ONS.",mode:"stacked",line:!1,legend:!0}));n(h,{name:"Stacked area chart",get args(){return a(e)},parameters:{__svelteCsf:{rawCode:"<LineChart {...args} />"}}})}v(m,o),y()}u.__docgen={data:[],name:"LineChart.stories.svelte"};const s=_(u,k),J=["Default","LineChartWithInlineLabels","StackedAreaChart"],P={...s.Default,tags:["svelte-csf-v5"]},Q={...s.LineChartWithInlineLabels,tags:["svelte-csf-v5"]},U={...s.StackedAreaChart,tags:["svelte-csf-v5"]};export{P as Default,Q as LineChartWithInlineLabels,U as StackedAreaChart,J as __namedExportsOrder,k as default};
