import{aJ as ne,x as he,aK as le,ab as R,p as b,ak as ce,am as fe,d as C,e as O,i as N,a as W,ad as P,q as i,g as e,P as de,al as ye,at as d,an as y,u as l,ae as T,f as xe,H as S}from"./iframe-BR4MEgmA.js";import{i as J,c as pe,w as ue,d as me,a as ge}from"./create-runtime-stories-BCU5wvzh.js";import{B as D}from"./BarChart-CQHFg3YV.js";import{C as H}from"./ColumnChart-GWKhvZup.js";import{L as j}from"./LineChart-DimfOUFn.js";import{S as k}from"./ScatterChart-CBMg8sBi.js";import{D as ve}from"./DotPlotChart-Dk8vwjde.js";import"./DotPlotChart.svelte_svelte_type_style_lang-C3oNwf0_.js";import"./preload-helper-Dp1pzeXC.js";import"./slot-BP_Qo1ZM.js";import"./style-B5SUVlSu.js";import"./attributes-DayBpKoh.js";import"./this-Cyq7VZGS.js";import"./misc-DawUTzDN.js";import"./each-DhaaMYCt.js";import"./attributes-Dhuqf2bR.js";import"./class-BRzkbxqU.js";import"./Legend-Bkcf3THB.js";import"./defaultLocale-DJ2q5QjE.js";import"./linear-CZTuTj73.js";import"./band-CgjqLsv4.js";import"./actions-BDkOwRzx.js";import"./Labels-3K5C5jzD.js";import"./svelte-head-BVcXiqEj.js";const ze=Symbol("NaN");function be(m,c,t){var x=new le(m),o=!ne();he(()=>{var n=c();n!==n&&(n=ze),o&&n!==null&&typeof n=="object"&&(n={}),x.ensure(n,t)})}function Se(m,c){R(c,!1);const t=de();let x=b(c,"section",8,null),o=b(c,"type",24,()=>{var u;return(u=x())==null?void 0:u.chartType}),n=b(c,"data",8,null),p=b(c,"options",8,null);const g=["left","right","top","bottom"],F=/^\[(?:'[^']*'|"[^"]*"|\d+(?:\.\d+)?)(,?)*]$/;function q(u,v,_,h){h||(h={chartType:u,data:v,..._});let s={},z={left:50,right:0,top:0,bottom:20};return Object.keys(h).filter(a=>!["type","chartType",...g.map(f=>`padding-${f}`)].includes(a)).forEach(a=>{F.test(h[a])?s[a]=JSON.parse(h[a]):s[a]=h[a]}),Array.isArray(h.data)&&Object.keys(h.data[0]).forEach(f=>{["x","y","z","r"].includes(f)?s[`${f}Key`]=f:s[f]=f}),g.forEach(a=>{h[`padding-${a}`]&&(z[a]=+h[`padding-${a}`])}),s.padding=z,!s.legend&&s.legend!==!1&&(s.legend=!!s.zKey),s}ce(()=>(i(o()),i(n()),i(p()),i(x())),()=>{ye(t,q(o(),n(),p(),x()))}),fe(),J();var L=C(),M=O(L);{var G=u=>{var v=C(),_=O(v);be(_,()=>(e(t),l(()=>e(t).data)),h=>{var s=C(),z=O(s);{var B=r=>{D(r,d(()=>e(t)))},a=y(()=>(i(o()),e(t),l(()=>o().toLowerCase()==="bar"&&e(t).xKey&&e(t).yKey))),f=r=>{D(r,d(()=>e(t),{color:"#bbb",colorSelect:"#206095",colorHighlight:"grey",overlayFill:!0}))},I=y(()=>(i(o()),e(t),l(()=>o().toLowerCase()==="bar-highlight"&&e(t).xKey&&e(t).yKey))),U=r=>{H(r,d(()=>e(t)))},Q=y(()=>(i(o()),e(t),l(()=>o().toLowerCase()==="column"&&e(t).xKey&&e(t).yKey))),V=r=>{H(r,d(()=>e(t),{color:"#bbb",colorSelect:"#206095",colorHighlight:"grey",overlayFill:!0}))},X=y(()=>(i(o()),e(t),l(()=>o().toLowerCase()==="column-highlight"&&e(t).xKey&&e(t).yKey))),Y=r=>{j(r,d(()=>e(t),{area:!1}))},Z=y(()=>(i(o()),e(t),l(()=>o().toLowerCase()==="line"&&e(t).xKey&&e(t).yKey))),$=r=>{j(r,d(()=>e(t),{area:!1,color:"#bbb",lineWidth:1,legend:!1,snapTicks:!1,hover:!0,labels:!0}))},ee=y(()=>(i(o()),e(t),l(()=>o().toLowerCase()==="line-highlight"&&e(t).xKey&&e(t).yKey))),te=r=>{k(r,d(()=>e(t)))},re=y(()=>(i(o()),e(t),l(()=>o().toLowerCase()==="scatter"&&e(t).xKey))),oe=r=>{k(r,d(()=>e(t),{color:"#bbb",colorSelect:"#206095",colorHighlight:"grey",overlayFill:!0,hover:!0,labels:!0}))},ae=y(()=>(i(o()),e(t),l(()=>o().toLowerCase()==="scatter-highlight"&&e(t).xKey))),se=r=>{ve(r,d(()=>e(t)))},ie=y(()=>(i(o()),e(t),l(()=>o().toLowerCase()==="dotplot"&&e(t).xKey&&e(t).yKey)));N(z,r=>{e(a)?r(B):e(I)?r(f,1):e(Q)?r(U,2):e(X)?r(V,3):e(Z)?r(Y,4):e(ee)?r($,5):e(re)?r(te,6):e(ae)?r(oe,7):e(ie)&&r(se,8)})}W(h,s)}),W(u,v)};N(M,u=>{e(t)&&u(G)})}W(m,L),P()}const Oe=`A wrapper component that offers a simplified way to use charts with sensible preset defaults.

The config for this component can either be defined via \`type\`, \`data\` and \`options\` props, or via a single comboned \`section\` object. The latter use case is optimised for robo-journalism projects (see second example below).

Note: This component is part of the **@onsvisual/svelte-charts** library. See [more examples here](https://onsvisual.github.io/svelte-charts/).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Chart } from "@onsvisual/svelte-charts";

  const data = [
    {"x": 5315, "y": "Portsmouth"},
    {"x": 5070, "y": "Southampton"},
    {"x": 4596, "y": "Slough"},
    {"x": 3969, "y": "Reading"},
    {"x": 3522, "y": "Brighton and Hove"}
  ];
  const options = {
    "id": "chart-density",
    "title": "Densest local authorities in the South East, 2020",
    "footer": "Source: Office for National Statistics",
    "padding-left": "120"
  };
<\/script>

<Chart
  type="bar"
  data="{data}"
  options="{options}"/>
\`\`\`
`,We=`In this use case, all of the data and config are passed into the component via a single \`section\` prop.

This is optimised for robo-journalism projects, where a chart is defined within a section block in a PUG template. The component is used in this way within the [robo-embed](https://github.com/ONSvisual/robo-embed/) and [robo-article](https://github.com/ONSvisual/robo-article/) templates.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Chart } from "@onsvisual/svelte-charts";

  //the section is normally generated by the pug file
  const section = {
    "id": "chart-density",
    "chartType": "bar",
    "title": "Densest local authorities in the South East, 2020",
    "footer": "Source: Office for National Statistics",
    "data": [
      {"x": 5315, "y": "Portsmouth"},
      {"x": 5070, "y": "Southampton"},
      {"x": 4596, "y": "Slough"},
      {"x": 3969, "y": "Reading"},
      {"x": 3522, "y": "Brighton and Hove"}
    ],
    "padding-left": "120"
  };
<\/script>

<Chart {section}/>
\`\`\`
`,E=[{x:5315,y:"Portsmouth"},{x:5070,y:"Southampton"},{x:4596,y:"Slough"},{x:3969,y:"Reading"},{x:3522,y:"Brighton and Hove"}],_e=[{z:"West Oxfordshire",x:"2002",y:95961},{z:"West Oxfordshire",x:"2003",y:97083},{z:"West Oxfordshire",x:"2004",y:98038},{z:"West Oxfordshire",x:"2005",y:98869},{z:"West Oxfordshire",x:"2006",y:100316},{z:"West Oxfordshire",x:"2007",y:102166},{z:"West Oxfordshire",x:"2008",y:103016},{z:"West Oxfordshire",x:"2009",y:103824},{z:"West Oxfordshire",x:"2010",y:104706},{z:"West Oxfordshire",x:"2011",y:105442},{z:"West Oxfordshire",x:"2012",y:107164},{z:"West Oxfordshire",x:"2013",y:107945},{z:"West Oxfordshire",x:"2014",y:108095},{z:"West Oxfordshire",x:"2015",y:108609},{z:"West Oxfordshire",x:"2016",y:108748},{z:"West Oxfordshire",x:"2017",y:109266},{z:"West Oxfordshire",x:"2018",y:109800},{z:"West Oxfordshire",x:"2019",y:110643},{z:"West Oxfordshire",x:"2020",y:111758},{z:"South Oxfordshire",x:"2002",y:128754},{z:"South Oxfordshire",x:"2003",y:128920},{z:"South Oxfordshire",x:"2004",y:129359},{z:"South Oxfordshire",x:"2005",y:130050},{z:"South Oxfordshire",x:"2006",y:130676},{z:"South Oxfordshire",x:"2007",y:131626},{z:"South Oxfordshire",x:"2008",y:132611},{z:"South Oxfordshire",x:"2009",y:133466},{z:"South Oxfordshire",x:"2010",y:133915},{z:"South Oxfordshire",x:"2011",y:134961},{z:"South Oxfordshire",x:"2012",y:135722},{z:"South Oxfordshire",x:"2013",y:136328},{z:"South Oxfordshire",x:"2014",y:137477},{z:"South Oxfordshire",x:"2015",y:138177},{z:"South Oxfordshire",x:"2016",y:139156},{z:"South Oxfordshire",x:"2017",y:139767},{z:"South Oxfordshire",x:"2018",y:140504},{z:"South Oxfordshire",x:"2019",y:142057},{z:"South Oxfordshire",x:"2020",y:143782},{z:"Winchester",x:"2002",y:107844},{z:"Winchester",x:"2003",y:108515},{z:"Winchester",x:"2004",y:109179},{z:"Winchester",x:"2005",y:109947},{z:"Winchester",x:"2006",y:110628},{z:"Winchester",x:"2007",y:111820},{z:"Winchester",x:"2008",y:113267},{z:"Winchester",x:"2009",y:114505},{z:"Winchester",x:"2010",y:115789},{z:"Winchester",x:"2011",y:116820},{z:"Winchester",x:"2012",y:118074},{z:"Winchester",x:"2013",y:119037},{z:"Winchester",x:"2014",y:120290},{z:"Winchester",x:"2015",y:121734},{z:"Winchester",x:"2016",y:123100},{z:"Winchester",x:"2017",y:123879},{z:"Winchester",x:"2018",y:124295},{z:"Winchester",x:"2019",y:124859},{z:"Winchester",x:"2020",y:125925}],Ce={title:"Charts/Chart",component:Se,tags:["autodocs"],argTypes:{},parameters:ue(Oe)},{Story:w}=me();var we=xe("<!> <!> <!>",1);function A(m,c){R(c,!1),J();var t=we(),x=O(t);{let p=S(()=>({type:"bar",data:E,options:{id:"chart-density",title:"Densest local authorities in the South East, 2020",footer:"Source: Office for National Statistics","padding-left":"120"}}));w(x,{name:"Bar",get args(){return e(p)},parameters:{__svelteCsf:{rawCode:"<Chart {...args} />"}}})}var o=T(x,2);{let p=S(()=>({section:{id:"chart-density",chartType:"bar",data:E,title:"Densest local authorities in the South East, 2020",footer:"Source: Office for National Statistics","padding-left":"120"}})),g=S(()=>ge(We));w(o,{name:"Bar, robo-journalism case",get args(){return e(p)},parameters:{...e(g),__svelteCsf:{rawCode:"<Chart {...args} />"}}})}var n=T(o,2);{let p=S(()=>({section:{id:"chart-timeseries",chartType:"line-highlight",title:"Largest local authorities in the South East, 2002-2020",footer:"Source: Office for National Statistics",data:_e,selected:"Winchester","padding-top":"20","padding-right":"120","padding-left":"80"}}));w(n,{name:"Line with highlight",get args(){return e(p)},parameters:{__svelteCsf:{rawCode:"<Chart {...args} />"}}})}W(m,t),P()}A.__docgen={data:[],name:"Chart.stories.svelte"};const K=pe(A,Ce),Ze=["Bar","BarRoboJournalismCase","LineWithHighlight"],$e={...K.Bar,tags:["svelte-csf-v5"]},et={...K.BarRoboJournalismCase,tags:["svelte-csf-v5"]},tt={...K.LineWithHighlight,tags:["svelte-csf-v5"]};export{$e as Bar,et as BarRoboJournalismCase,tt as LineWithHighlight,Ze as __namedExportsOrder,Ce as default};
