import{ab as d,e as y,g as e,ae as p,a as m,ad as h,f,H as r}from"./iframe-B9boMrJC.js";import{c as S,w as _,i as C,d as b}from"./create-runtime-stories-DkWl6f3Y.js";import"./DotPlotChart.svelte_svelte_type_style_lang-B9uahfju.js";import{S as w}from"./ScatterChart-Cp-hQkvB.js";import{d as t}from"./data-scatter-DUgoSHHp.js";import"./preload-helper-Dp1pzeXC.js";import"./linear-CZTuTj73.js";import"./slot-BP_Qo1ZM.js";import"./style-zbbvqI-D.js";import"./attributes-DayBpKoh.js";import"./this-BoQe_7SS.js";import"./attributes-CrzlrBEy.js";import"./each-CyU2biai.js";import"./class-D6AUwMvg.js";import"./actions-TIycFVDK.js";import"./svelte-head-Bl6bKWWy.js";import"./misc-J6ljfIf-.js";import"./Legend-BKU8EVVr.js";import"./Labels-o8ICj8ZO.js";const K=`A scatter chart component with various modes, plus animation and events.

Note: This component is part of the **@onsvisual/svelte-charts** library. See [more examples here](https://onsvisual.github.io/svelte-charts/).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { ScatterChart } from "@onsvisual/svelte-charts";

  const data = export default [
    { year: 1979, value: 7.19, alt: 12, group: "apples" },
    { year: 1980, value: 7.83, alt: 15, group: "apples" },
    { year: 1981, value: 7.24, alt: 17, group: "apples" },
    { year: 1982, value: 7.44, alt: 28, group: "apples" },
    { year: 1983, value: 7.51, alt: 23, group: "apples" },
    { year: 1984, value: 7.1, alt: 17, group: "apples" },
    { year: 1985, value: 6.91, alt: 11, group: "apples" },
    { year: 1986, value: 7.53, alt: 13, group: "apples" },
    { year: 1987, value: 7.47, alt: 18, group: "apples" },
    { year: 1988, value: 7.48, alt: 20, group: "apples" },
    { year: 1989, value: 7.03, alt: 24, group: "apples" },
    { year: 1990, value: 6.23, alt: 26, group: "bananas" },
    { year: 1991, value: 6.54, alt: 16, group: "bananas" },
    { year: 1992, value: 7.54, alt: 25, group: "bananas" },
    { year: 1993, value: 6.5, alt: 28, group: "bananas" },
    { year: 1994, value: 7.18, alt: 11, group: "bananas" },
    { year: 1995, value: 6.12, alt: 19, group: "bananas" },
    { year: 1996, value: 7.87, alt: 14, group: "bananas" },
    { year: 1997, value: 6.73, alt: 22, group: "bananas" },
    { year: 1998, value: 6.55, alt: 13, group: "bananas" },
    { year: 1999, value: 6.23, alt: 30, group: "bananas" },
    { year: 2000, value: 6.31, alt: 27, group: "bananas" },
    { year: 2001, value: 6.74, alt: 13, group: "cherries" },
    { year: 2002, value: 5.95, alt: 18, group: "cherries" },
    { year: 2003, value: 6.13, alt: 15, group: "cherries" },
    { year: 2004, value: 6.04, alt: 11, group: "cherries" },
    { year: 2005, value: 5.56, alt: 29, group: "cherries" },
    { year: 2006, value: 5.91, alt: 26, group: "cherries" },
    { year: 2007, value: 4.29, alt: 10, group: "cherries" },
    { year: 2008, value: 4.72, alt: 14, group: "cherries" },
    { year: 2009, value: 5.38, alt: 21, group: "cherries" },
    { year: 2010, value: 4.92, alt: 20, group: "cherries" },
    { year: 2011, value: 4.61, alt: 24, group: "dates" },
    { year: 2012, value: 3.62, alt: 19, group: "dates" },
    { year: 2013, value: 5.35, alt: 12, group: "dates" },
    { year: 2014, value: 5.28, alt: 13, group: "dates" },
    { year: 2015, value: 4.63, alt: 28, group: "dates" },
    { year: 2016, value: 4.72, alt: 30, group: "dates" },
  ];
<\/script>

<ScatterChart {data} xKey="year" yKey="value" title="Scatter chart example" footer="Source: ONS." />
\`\`\`
`,x={title:"Charts/ScatterChart",component:w,tags:["autodocs"],argTypes:{},parameters:_(K)},{Story:s}=b();var A=f("<!> <!> <!>",1);function i(c,g){d(g,!1),C();var n=A(),l=y(n);{let a=r(()=>({data:t,xKey:"year",yKey:"value",title:"Simple scatter chart",footer:"Source: ONS."}));s(l,{name:"Default",get args(){return e(a)},parameters:{__svelteCsf:{rawCode:"<ScatterChart {...args} />"}}})}var u=p(l,2);{let a=r(()=>({data:t,xKey:"year",yKey:"value",zKey:"group",rKey:"alt",r:[3,15],title:"Scatter chart radius and groups",footer:"Source: ONS.",legend:!0}));s(u,{name:"Scatter chart radius and groups",get args(){return e(a)},parameters:{__svelteCsf:{rawCode:"<ScatterChart {...args} />"}}})}var v=p(u,2);{let a=r(()=>({data:t,xKey:"value",zKey:"group",rKey:"alt",r:[3,15],title:"Beeswarm chart radius and groups",footer:"Source: ONS.",legend:!0}));s(v,{name:"Beeswarm chart radius and groups",get args(){return e(a)},parameters:{__svelteCsf:{rawCode:"<ScatterChart {...args} />"}}})}m(c,n),h()}i.__docgen={data:[],name:"ScatterChart.stories.svelte"};const o=S(i,x),P=["Default","ScatterChartRadiusAndGroups","BeeswarmChartRadiusAndGroups"],Q={...o.Default,tags:["svelte-csf-v5"]},U={...o.ScatterChartRadiusAndGroups,tags:["svelte-csf-v5"]},V={...o.BeeswarmChartRadiusAndGroups,tags:["svelte-csf-v5"]};export{V as BeeswarmChartRadiusAndGroups,Q as Default,U as ScatterChartRadiusAndGroups,P as __namedExportsOrder,x as default};
