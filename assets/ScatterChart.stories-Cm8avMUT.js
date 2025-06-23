import{p as m,j as h,f,g as a,o as e,k as l,e as S,h as _}from"./iframe-CjnhkhOY.js";import{w as C,c as b,i as w,d as x}from"./create-runtime-stories-BoeWa_ka.js";import"./DotPlotChart.svelte_svelte_type_style_lang-BMjKvij3.js";import{S as K}from"./ScatterChart-BPNUXl8C.js";import{d as r}from"./data-scatter-DUgoSHHp.js";import"./linear-CZTuTj73.js";import"./slot-BP_Qo1ZM.js";import"./style-CcY6orqc.js";import"./attributes-Co-1QMVx.js";import"./this-DXx8Q2lW.js";import"./attributes-DG8kYAl2.js";import"./each-QGPBCYi1.js";import"./class-Dzh9Da8g.js";import"./actions-BxT3FiN6.js";import"./misc-BeAqvTxu.js";import"./Legend-BJSiL9y2.js";import"./Labels-DFL6VDdo.js";const A=`A scatter chart component with various modes, plus animation and events.

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
`,R={title:"Data visualisation/ScatterChart",component:K,tags:["autodocs"],argTypes:{},parameters:C(A)},{Story:t}=x();var D=h("<!> <!> <!>",1);function p(i,c){m(c,!1),w();var o=D(),n=f(o);const g=e(()=>({data:r,xKey:"year",yKey:"value",title:"Simple scatter chart",footer:"Source: ONS."}));t(n,{name:"Default",get args(){return a(g)},parameters:{__svelteCsf:{rawCode:"<ScatterChart {...args} />"}}});var u=l(n,2);const v=e(()=>({data:r,xKey:"year",yKey:"value",zKey:"group",rKey:"alt",r:[3,15],title:"Scatter chart radius and groups",footer:"Source: ONS.",legend:!0}));t(u,{name:"Scatter chart radius and groups",get args(){return a(v)},parameters:{__svelteCsf:{rawCode:"<ScatterChart {...args} />"}}});var y=l(u,2);const d=e(()=>({data:r,xKey:"value",zKey:"group",rKey:"alt",r:[3,15],title:"Beeswarm chart radius and groups",footer:"Source: ONS.",legend:!0}));t(y,{name:"Beeswarm chart radius and groups",get args(){return a(d)},parameters:{__svelteCsf:{rawCode:"<ScatterChart {...args} />"}}}),S(i,o),_()}p.__docgen={data:[],name:"ScatterChart.stories.svelte"};const s=b(p,R),P=["Default","ScatterChartRadiusAndGroups","BeeswarmChartRadiusAndGroups"],Q={...s.Default,tags:["svelte-csf-v5"]},U={...s.ScatterChartRadiusAndGroups,tags:["svelte-csf-v5"]},V={...s.BeeswarmChartRadiusAndGroups,tags:["svelte-csf-v5"]};export{V as BeeswarmChartRadiusAndGroups,Q as Default,U as ScatterChartRadiusAndGroups,P as __namedExportsOrder,R as default};
