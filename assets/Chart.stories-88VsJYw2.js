import{aP as ne,z as he,aQ as le,ad as k,p as b,aq as ce,as as fe,e as C,h as O,i as D,a as W,af as P,w as i,g as e,R as ye,ar as de,ax as y,ag as d,u as l,ah as N,f as xe,K as S}from"./iframe-UWIgwT_c.js";import{i as J,c as pe,w as ue,d as me,a as ge}from"./create-runtime-stories-WntTm4wH.js";import{B as T}from"./BarChart-yMbaDIie.js";import{C as H}from"./ColumnChart-Bt5GFd1M.js";import{L as j}from"./LineChart-BpQLvmJS.js";import{S as E}from"./ScatterChart-BYH5NJVe.js";import{D as ve}from"./DotPlotChart-C5xQXgs0.js";import"./DotPlotChart.svelte_svelte_type_style_lang-CkvWOmyi.js";import"./preload-helper-Dp1pzeXC.js";import"./style-JgESTiB5.js";import"./attributes-DayBpKoh.js";import"./this-DkxfCVKA.js";import"./each-28trRlzV.js";import"./attributes-CxnnJe_I.js";import"./class-BWaliKvu.js";import"./Legend-wMgGVeQE.js";import"./defaultLocale-DJ2q5QjE.js";import"./linear-CZTuTj73.js";import"./band-WUr97oH-.js";import"./actions-CTYXIfQW.js";import"./Labels-BGtXqkt2.js";import"./svelte-head-HqhQydw-.js";const ze=Symbol("NaN");function be(m,c,t){var x=new le(m),o=!ne();he(()=>{var n=c();n!==n&&(n=ze),o&&n!==null&&typeof n=="object"&&(n={}),x.ensure(n,t)})}function Se(m,c){k(c,!1);const t=ye();let x=b(c,"section",8,null),o=b(c,"type",24,()=>{var u;return(u=x())==null?void 0:u.chartType}),n=b(c,"data",8,null),p=b(c,"options",8,null);const g=["left","right","top","bottom"],F=/^\[(?:'[^']*'|"[^"]*"|\d+(?:\.\d+)?)(,?)*]$/;function q(u,v,_,h){h||(h={chartType:u,data:v,..._});let s={},z={left:50,right:0,top:0,bottom:20};return Object.keys(h).filter(a=>!["type","chartType",...g.map(f=>`padding-${f}`)].includes(a)).forEach(a=>{F.test(h[a])?s[a]=JSON.parse(h[a]):s[a]=h[a]}),Array.isArray(h.data)&&Object.keys(h.data[0]).forEach(f=>{["x","y","z","r"].includes(f)?s[`${f}Key`]=f:s[f]=f}),g.forEach(a=>{h[`padding-${a}`]&&(z[a]=+h[`padding-${a}`])}),s.padding=z,!s.legend&&s.legend!==!1&&(s.legend=!!s.zKey),s}ce(()=>(i(o()),i(n()),i(p()),i(x())),()=>{de(t,q(o(),n(),p(),x()))}),fe(),J();var L=C(),M=O(L);{var G=u=>{var v=C(),_=O(v);be(_,()=>(e(t),l(()=>e(t).data)),h=>{var s=C(),z=O(s);{var B=r=>{T(r,y(()=>e(t)))},a=d(()=>(i(o()),e(t),l(()=>o().toLowerCase()==="bar"&&e(t).xKey&&e(t).yKey))),f=r=>{T(r,y(()=>e(t),{color:"#bbb",colorSelect:"#206095",colorHighlight:"grey",overlayFill:!0}))},I=d(()=>(i(o()),e(t),l(()=>o().toLowerCase()==="bar-highlight"&&e(t).xKey&&e(t).yKey))),Q=r=>{H(r,y(()=>e(t)))},U=d(()=>(i(o()),e(t),l(()=>o().toLowerCase()==="column"&&e(t).xKey&&e(t).yKey))),V=r=>{H(r,y(()=>e(t),{color:"#bbb",colorSelect:"#206095",colorHighlight:"grey",overlayFill:!0}))},X=d(()=>(i(o()),e(t),l(()=>o().toLowerCase()==="column-highlight"&&e(t).xKey&&e(t).yKey))),Y=r=>{j(r,y(()=>e(t),{area:!1}))},Z=d(()=>(i(o()),e(t),l(()=>o().toLowerCase()==="line"&&e(t).xKey&&e(t).yKey))),$=r=>{j(r,y(()=>e(t),{area:!1,color:"#bbb",lineWidth:1,legend:!1,snapTicks:!1,hover:!0,labels:!0}))},ee=d(()=>(i(o()),e(t),l(()=>o().toLowerCase()==="line-highlight"&&e(t).xKey&&e(t).yKey))),te=r=>{E(r,y(()=>e(t)))},re=d(()=>(i(o()),e(t),l(()=>o().toLowerCase()==="scatter"&&e(t).xKey))),oe=r=>{E(r,y(()=>e(t),{color:"#bbb",colorSelect:"#206095",colorHighlight:"grey",overlayFill:!0,hover:!0,labels:!0}))},ae=d(()=>(i(o()),e(t),l(()=>o().toLowerCase()==="scatter-highlight"&&e(t).xKey))),se=r=>{ve(r,y(()=>e(t)))},ie=d(()=>(i(o()),e(t),l(()=>o().toLowerCase()==="dotplot"&&e(t).xKey&&e(t).yKey)));D(z,r=>{e(a)?r(B):e(I)?r(f,1):e(U)?r(Q,2):e(X)?r(V,3):e(Z)?r(Y,4):e(ee)?r($,5):e(re)?r(te,6):e(ae)?r(oe,7):e(ie)&&r(se,8)})}W(h,s)}),W(u,v)};D(M,u=>{e(t)&&u(G)})}W(m,L),P()}const Oe=`A wrapper component that offers a simplified way to use charts with sensible preset defaults.

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
`,R=[{x:5315,y:"Portsmouth"},{x:5070,y:"Southampton"},{x:4596,y:"Slough"},{x:3969,y:"Reading"},{x:3522,y:"Brighton and Hove"}],_e=[{z:"West Oxfordshire",x:"2002",y:95961},{z:"West Oxfordshire",x:"2003",y:97083},{z:"West Oxfordshire",x:"2004",y:98038},{z:"West Oxfordshire",x:"2005",y:98869},{z:"West Oxfordshire",x:"2006",y:100316},{z:"West Oxfordshire",x:"2007",y:102166},{z:"West Oxfordshire",x:"2008",y:103016},{z:"West Oxfordshire",x:"2009",y:103824},{z:"West Oxfordshire",x:"2010",y:104706},{z:"West Oxfordshire",x:"2011",y:105442},{z:"West Oxfordshire",x:"2012",y:107164},{z:"West Oxfordshire",x:"2013",y:107945},{z:"West Oxfordshire",x:"2014",y:108095},{z:"West Oxfordshire",x:"2015",y:108609},{z:"West Oxfordshire",x:"2016",y:108748},{z:"West Oxfordshire",x:"2017",y:109266},{z:"West Oxfordshire",x:"2018",y:109800},{z:"West Oxfordshire",x:"2019",y:110643},{z:"West Oxfordshire",x:"2020",y:111758},{z:"South Oxfordshire",x:"2002",y:128754},{z:"South Oxfordshire",x:"2003",y:128920},{z:"South Oxfordshire",x:"2004",y:129359},{z:"South Oxfordshire",x:"2005",y:130050},{z:"South Oxfordshire",x:"2006",y:130676},{z:"South Oxfordshire",x:"2007",y:131626},{z:"South Oxfordshire",x:"2008",y:132611},{z:"South Oxfordshire",x:"2009",y:133466},{z:"South Oxfordshire",x:"2010",y:133915},{z:"South Oxfordshire",x:"2011",y:134961},{z:"South Oxfordshire",x:"2012",y:135722},{z:"South Oxfordshire",x:"2013",y:136328},{z:"South Oxfordshire",x:"2014",y:137477},{z:"South Oxfordshire",x:"2015",y:138177},{z:"South Oxfordshire",x:"2016",y:139156},{z:"South Oxfordshire",x:"2017",y:139767},{z:"South Oxfordshire",x:"2018",y:140504},{z:"South Oxfordshire",x:"2019",y:142057},{z:"South Oxfordshire",x:"2020",y:143782},{z:"Winchester",x:"2002",y:107844},{z:"Winchester",x:"2003",y:108515},{z:"Winchester",x:"2004",y:109179},{z:"Winchester",x:"2005",y:109947},{z:"Winchester",x:"2006",y:110628},{z:"Winchester",x:"2007",y:111820},{z:"Winchester",x:"2008",y:113267},{z:"Winchester",x:"2009",y:114505},{z:"Winchester",x:"2010",y:115789},{z:"Winchester",x:"2011",y:116820},{z:"Winchester",x:"2012",y:118074},{z:"Winchester",x:"2013",y:119037},{z:"Winchester",x:"2014",y:120290},{z:"Winchester",x:"2015",y:121734},{z:"Winchester",x:"2016",y:123100},{z:"Winchester",x:"2017",y:123879},{z:"Winchester",x:"2018",y:124295},{z:"Winchester",x:"2019",y:124859},{z:"Winchester",x:"2020",y:125925}],Ce={title:"Data visualisation/Chart",component:Se,tags:["autodocs"],argTypes:{},parameters:ue(Oe)},{Story:w}=me();var we=xe("<!> <!> <!>",1);function A(m,c){k(c,!1),J();var t=we(),x=O(t);{let p=S(()=>({type:"bar",data:R,options:{id:"chart-density",title:"Densest local authorities in the South East, 2020",footer:"Source: Office for National Statistics","padding-left":"120"}}));w(x,{name:"Bar",get args(){return e(p)},parameters:{__svelteCsf:{rawCode:"<Chart {...args} />"}}})}var o=N(x,2);{let p=S(()=>({section:{id:"chart-density",chartType:"bar",data:R,title:"Densest local authorities in the South East, 2020",footer:"Source: Office for National Statistics","padding-left":"120"}})),g=S(()=>ge(We));w(o,{name:"Bar, robo-journalism case",get args(){return e(p)},parameters:{...e(g),__svelteCsf:{rawCode:"<Chart {...args} />"}}})}var n=N(o,2);{let p=S(()=>({section:{id:"chart-timeseries",chartType:"line-highlight",title:"Largest local authorities in the South East, 2002-2020",footer:"Source: Office for National Statistics",data:_e,selected:"Winchester","padding-top":"20","padding-right":"120","padding-left":"80"}}));w(n,{name:"Line with highlight",get args(){return e(p)},parameters:{__svelteCsf:{rawCode:"<Chart {...args} />"}}})}W(m,t),P()}A.__docgen={data:[],name:"Chart.stories.svelte"};const K=pe(A,Ce),Xe=["Bar","BarRoboJournalismCase","LineWithHighlight"],Ye={...K.Bar,tags:["svelte-csf-v5"]},Ze={...K.BarRoboJournalismCase,tags:["svelte-csf-v5"]},$e={...K.LineWithHighlight,tags:["svelte-csf-v5"]};export{Ye as Bar,Ze as BarRoboJournalismCase,$e as LineWithHighlight,Xe as __namedExportsOrder,Ce as default};
