import{p as m,j as h,f,g as a,o as r,k as l,e as S,h as _}from"./iframe-yAvQPCXH.js";import{w as C,c as b,i as w,d as x}from"./create-runtime-stories-C-ZHg9b5.js";import"./DotPlotChart.svelte_svelte_type_style_lang-B9E4gVZu.js";import{S as K}from"./ScatterChart-b4LYDb-Q.js";import{d as e}from"./data-scatter-DUgoSHHp.js";import"./linear-CZTuTj73.js";import"./slot-BP_Qo1ZM.js";import"./style-CcY6orqc.js";import"./attributes-Co-1QMVx.js";import"./this-p_i7pN6D.js";import"./attributes-CZ0E5Nqe.js";import"./each-f3xhqABg.js";import"./class-Dzh9Da8g.js";import"./actions-CoReH4F0.js";import"./svelte-head-BJjz-nuU.js";import"./misc-xe4xtJWI.js";import"./Legend-BsOFeydj.js";import"./Labels-Dh2ZKhBW.js";const A=`A scatter chart component with various modes, plus animation and events.\r
\r
Note: This component is part of the **@onsvisual/svelte-charts** library. See [more examples here](https://onsvisual.github.io/svelte-charts/).\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { ScatterChart } from "@onsvisual/svelte-charts";\r
\r
  const data = export default [\r
    { year: 1979, value: 7.19, alt: 12, group: "apples" },\r
    { year: 1980, value: 7.83, alt: 15, group: "apples" },\r
    { year: 1981, value: 7.24, alt: 17, group: "apples" },\r
    { year: 1982, value: 7.44, alt: 28, group: "apples" },\r
    { year: 1983, value: 7.51, alt: 23, group: "apples" },\r
    { year: 1984, value: 7.1, alt: 17, group: "apples" },\r
    { year: 1985, value: 6.91, alt: 11, group: "apples" },\r
    { year: 1986, value: 7.53, alt: 13, group: "apples" },\r
    { year: 1987, value: 7.47, alt: 18, group: "apples" },\r
    { year: 1988, value: 7.48, alt: 20, group: "apples" },\r
    { year: 1989, value: 7.03, alt: 24, group: "apples" },\r
    { year: 1990, value: 6.23, alt: 26, group: "bananas" },\r
    { year: 1991, value: 6.54, alt: 16, group: "bananas" },\r
    { year: 1992, value: 7.54, alt: 25, group: "bananas" },\r
    { year: 1993, value: 6.5, alt: 28, group: "bananas" },\r
    { year: 1994, value: 7.18, alt: 11, group: "bananas" },\r
    { year: 1995, value: 6.12, alt: 19, group: "bananas" },\r
    { year: 1996, value: 7.87, alt: 14, group: "bananas" },\r
    { year: 1997, value: 6.73, alt: 22, group: "bananas" },\r
    { year: 1998, value: 6.55, alt: 13, group: "bananas" },\r
    { year: 1999, value: 6.23, alt: 30, group: "bananas" },\r
    { year: 2000, value: 6.31, alt: 27, group: "bananas" },\r
    { year: 2001, value: 6.74, alt: 13, group: "cherries" },\r
    { year: 2002, value: 5.95, alt: 18, group: "cherries" },\r
    { year: 2003, value: 6.13, alt: 15, group: "cherries" },\r
    { year: 2004, value: 6.04, alt: 11, group: "cherries" },\r
    { year: 2005, value: 5.56, alt: 29, group: "cherries" },\r
    { year: 2006, value: 5.91, alt: 26, group: "cherries" },\r
    { year: 2007, value: 4.29, alt: 10, group: "cherries" },\r
    { year: 2008, value: 4.72, alt: 14, group: "cherries" },\r
    { year: 2009, value: 5.38, alt: 21, group: "cherries" },\r
    { year: 2010, value: 4.92, alt: 20, group: "cherries" },\r
    { year: 2011, value: 4.61, alt: 24, group: "dates" },\r
    { year: 2012, value: 3.62, alt: 19, group: "dates" },\r
    { year: 2013, value: 5.35, alt: 12, group: "dates" },\r
    { year: 2014, value: 5.28, alt: 13, group: "dates" },\r
    { year: 2015, value: 4.63, alt: 28, group: "dates" },\r
    { year: 2016, value: 4.72, alt: 30, group: "dates" },\r
  ];\r
<\/script>\r
\r
<ScatterChart {data} xKey="year" yKey="value" title="Scatter chart example" footer="Source: ONS." />\r
\`\`\`\r
`,R={title:"Data visualisation/ScatterChart",component:K,tags:["autodocs"],argTypes:{},parameters:C(A)},{Story:t}=x();var D=h("<!> <!> <!>",1);function p(i,c){m(c,!1),w();var o=D(),n=f(o);const g=r(()=>({data:e,xKey:"year",yKey:"value",title:"Simple scatter chart",footer:"Source: ONS."}));t(n,{name:"Default",get args(){return a(g)},parameters:{__svelteCsf:{rawCode:"<ScatterChart {...args} />"}}});var u=l(n,2);const v=r(()=>({data:e,xKey:"year",yKey:"value",zKey:"group",rKey:"alt",r:[3,15],title:"Scatter chart radius and groups",footer:"Source: ONS.",legend:!0}));t(u,{name:"Scatter chart radius and groups",get args(){return a(v)},parameters:{__svelteCsf:{rawCode:"<ScatterChart {...args} />"}}});var y=l(u,2);const d=r(()=>({data:e,xKey:"value",zKey:"group",rKey:"alt",r:[3,15],title:"Beeswarm chart radius and groups",footer:"Source: ONS.",legend:!0}));t(y,{name:"Beeswarm chart radius and groups",get args(){return a(d)},parameters:{__svelteCsf:{rawCode:"<ScatterChart {...args} />"}}}),S(i,o),_()}p.__docgen={data:[],name:"ScatterChart.stories.svelte"};const s=b(p,R),Q=["Default","ScatterChartRadiusAndGroups","BeeswarmChartRadiusAndGroups"],U={...s.Default,tags:["svelte-csf-v5"]},V={...s.ScatterChartRadiusAndGroups,tags:["svelte-csf-v5"]},W={...s.BeeswarmChartRadiusAndGroups,tags:["svelte-csf-v5"]};export{W as BeeswarmChartRadiusAndGroups,U as Default,V as ScatterChartRadiusAndGroups,Q as __namedExportsOrder,R as default};
