import{ab as d,e as g,g as a,ah as p,a as v,ad as y,f,H as r}from"./iframe-DjMvT2c-.js";import{c as _,w as C,i as L,d as S}from"./create-runtime-stories-myTZTF-x.js";import"./DotPlotChart.svelte_svelte_type_style_lang-C9zZlpG8.js";import{L as b}from"./LineChart-DDzjw8yq.js";import{d as t}from"./data-C2fm6GRW.js";import"./preload-helper-Dp1pzeXC.js";import"./linear-CZTuTj73.js";import"./slot-BP_Qo1ZM.js";import"./style-CM3dwi71.js";import"./attributes-DayBpKoh.js";import"./this-C3HUEk1G.js";import"./attributes-ChCi6Xsq.js";import"./each-BmB-i6yh.js";import"./class-PrT4n0Js.js";import"./actions-9czv72K2.js";import"./svelte-head-BFp_wbq3.js";import"./Labels-DITaaXp0.js";import"./Legend-ppNe-Org.js";import"./defaultLocale-DJ2q5QjE.js";const K=`A line chart component with various modes, plus animation and events.\r
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
