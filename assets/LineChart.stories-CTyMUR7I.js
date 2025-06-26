import{p as v,j as y,f,g as e,o as a,k as l,e as _,h as C}from"./iframe-BBaiAZ6I.js";import{w as L,c as S,i as b,d as K}from"./create-runtime-stories-B9kkyQux.js";import"./DotPlotChart.svelte_svelte_type_style_lang-D4hi5tbs.js";import{L as x}from"./LineChart-8C8I2F5y.js";import{d as t}from"./data-C2fm6GRW.js";import"./linear-CZTuTj73.js";import"./slot-BP_Qo1ZM.js";import"./style-CcY6orqc.js";import"./attributes-Co-1QMVx.js";import"./this-CUQjGD3Z.js";import"./attributes-D_GwmEyU.js";import"./each-Cz2dZcRa.js";import"./class-Dzh9Da8g.js";import"./actions-Dn7WEYR9.js";import"./svelte-head-B4Y8TIws.js";import"./misc-vkVYdL4t.js";import"./Labels-CFKFDZ9r.js";import"./Legend-DDPUdmKa.js";import"./defaultLocale-DJ2q5QjE.js";const k=`A line chart component with various modes, plus animation and events.

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
`,w={title:"Data visualisation/LineChart",component:x,tags:["autodocs"],argTypes:{mode:{options:["default","stacked"],control:{type:"select"}}},parameters:L(k)},{Story:r}=K();var D=y("<!> <!> <!>",1);function p(u,c){v(c,!1),b();var n=D(),o=f(n);const m=a(()=>({data:t,xKey:"year",yKey:"value",zKey:"group",title:"Simple line chart",footer:"Source: ONS.",mode:"default",legend:!0}));r(o,{name:"Default",get args(){return e(m)},parameters:{__svelteCsf:{rawCode:"<LineChart {...args} />"}}});var i=l(o,2);const h=a(()=>({data:t,xKey:"year",yKey:"value",zKey:"group",title:"Line chart with inline labels",footer:"Source: ONS.",mode:"default",padding:{top:0,bottom:28,left:35,right:100},labels:"all"}));r(i,{name:"Line chart with inline labels",get args(){return e(h)},parameters:{__svelteCsf:{rawCode:"<LineChart {...args} />"}}});var d=l(i,2);const g=a(()=>({data:t,xKey:"year",yKey:"value",zKey:"group",title:"Stacked area chart",footer:"Source: ONS.",mode:"stacked",line:!1,legend:!0}));r(d,{name:"Stacked area chart",get args(){return e(g)},parameters:{__svelteCsf:{rawCode:"<LineChart {...args} />"}}}),_(u,n),C()}p.__docgen={data:[],name:"LineChart.stories.svelte"};const s=S(p,w),Q=["Default","LineChartWithInlineLabels","StackedAreaChart"],U={...s.Default,tags:["svelte-csf-v5"]},V={...s.LineChartWithInlineLabels,tags:["svelte-csf-v5"]},X={...s.StackedAreaChart,tags:["svelte-csf-v5"]};export{U as Default,V as LineChartWithInlineLabels,X as StackedAreaChart,Q as __namedExportsOrder,w as default};
