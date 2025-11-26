import{p as v,j as y,f,g as e,o as r,k as l,e as _,h as C}from"./iframe-Do54YzxR.js";import{w as L,c as S,i as b,d as K}from"./create-runtime-stories-CvlW8DiY.js";import"./DotPlotChart.svelte_svelte_type_style_lang-CMbQRlHs.js";import{L as x}from"./LineChart-BN13bJes.js";import{d as a}from"./data-C2fm6GRW.js";import"./linear-CZTuTj73.js";import"./slot-BP_Qo1ZM.js";import"./style-CcY6orqc.js";import"./attributes-Co-1QMVx.js";import"./this-Bj1VAzp0.js";import"./attributes-C5oDZZfl.js";import"./each-CKF_uRnG.js";import"./class-Dzh9Da8g.js";import"./actions-BoV5hClZ.js";import"./svelte-head-CxlAXgCI.js";import"./misc-Snz0tHyb.js";import"./Labels-BAGSlN8a.js";import"./Legend-BHLPtiGD.js";import"./defaultLocale-DJ2q5QjE.js";const k=`A line chart component with various modes, plus animation and events.\r
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
`,w={title:"Data visualisation/LineChart",component:x,tags:["autodocs"],argTypes:{mode:{options:["default","stacked"],control:{type:"select"}}},parameters:L(k)},{Story:t}=K();var D=y("<!> <!> <!>",1);function p(u,c){v(c,!1),b();var n=D(),o=f(n);const m=r(()=>({data:a,xKey:"year",yKey:"value",zKey:"group",title:"Simple line chart",footer:"Source: ONS.",mode:"default",legend:!0}));t(o,{name:"Default",get args(){return e(m)},parameters:{__svelteCsf:{rawCode:"<LineChart {...args} />"}}});var i=l(o,2);const h=r(()=>({data:a,xKey:"year",yKey:"value",zKey:"group",title:"Line chart with inline labels",footer:"Source: ONS.",mode:"default",padding:{top:0,bottom:28,left:35,right:100},labels:"all"}));t(i,{name:"Line chart with inline labels",get args(){return e(h)},parameters:{__svelteCsf:{rawCode:"<LineChart {...args} />"}}});var d=l(i,2);const g=r(()=>({data:a,xKey:"year",yKey:"value",zKey:"group",title:"Stacked area chart",footer:"Source: ONS.",mode:"stacked",line:!1,legend:!0}));t(d,{name:"Stacked area chart",get args(){return e(g)},parameters:{__svelteCsf:{rawCode:"<LineChart {...args} />"}}}),_(u,n),C()}p.__docgen={data:[],name:"LineChart.stories.svelte"};const s=S(p,w),Q=["Default","LineChartWithInlineLabels","StackedAreaChart"],U={...s.Default,tags:["svelte-csf-v5"]},V={...s.LineChartWithInlineLabels,tags:["svelte-csf-v5"]},X={...s.StackedAreaChart,tags:["svelte-csf-v5"]};export{U as Default,V as LineChartWithInlineLabels,X as StackedAreaChart,Q as __namedExportsOrder,w as default};
