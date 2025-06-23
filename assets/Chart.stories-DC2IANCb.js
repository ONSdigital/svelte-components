import{z as ze,ap as be,I as Se,R as _e,a5 as Oe,a4 as We,aq as Ce,p as U,a as W,l as we,b as Ke,c as E,f as K,i as n,e as L,h as G,g as t,m as Le,s as Be,d as C,_ as c,j as De,o as w,k as I}from"./iframe-BH0L4b-J.js";import{i as M,w as Te,c as Ne,d as Ee,a as He}from"./create-runtime-stories-DM1Ts2uS.js";import{B as P}from"./BarChart-fMymV_Pw.js";import{C as J}from"./ColumnChart-RalX6GcD.js";import{L as q}from"./LineChart-Cy_GQAqD.js";import{S as A}from"./ScatterChart-37AZvE83.js";import{D as je}from"./DotPlotChart-VBVnbd1e.js";import"./DotPlotChart.svelte_svelte_type_style_lang-Ctr-ZZq8.js";import"./slot-BP_Qo1ZM.js";import"./style-CcY6orqc.js";import"./attributes-Co-1QMVx.js";import"./this-VghM3qPk.js";import"./misc-CVNT7ltp.js";import"./each-B2_KBlGx.js";import"./attributes-DeGcdixA.js";import"./class-Dzh9Da8g.js";import"./linear-CZTuTj73.js";import"./Legend-gqw2C8sZ.js";import"./band-Cv0nQXFB.js";import"./actions-DjiAwQe8.js";import"./Labels-CCFGsaNG.js";function ke(b,h,e){var f=b,r=Ce,l,y=ze()?be:Se;_e(()=>{y(r,r=h())&&(l&&Oe(l),l=We(()=>e(f)))})}function Re(b,h){U(h,!1);const e=Le();let f=W(h,"section",8,null),r=W(h,"type",24,()=>{var d;return(d=f())==null?void 0:d.chartType}),l=W(h,"data",8,null),y=W(h,"options",8,null);const S=["left","right","top","bottom"],B=/^\[(?:'[^']*'|"[^"]*"|\d+(?:\.\d+)?)(,?)*]$/;function D(d,_,T,i){i||(i={chartType:d,data:_,...T});let a={},O={left:50,right:0,top:0,bottom:20};return Object.keys(i).filter(s=>!["type","chartType",...S.map(o=>`padding-${o}`)].includes(s)).forEach(s=>{B.test(i[s])?a[s]=JSON.parse(i[s]):a[s]=i[s]}),Array.isArray(i.data)&&Object.keys(i.data[0]).forEach(o=>{["x","y","z","r"].includes(o)?a[`${o}Key`]=o:a[o]=o}),S.forEach(s=>{i[`padding-${s}`]&&(O[s]=+i[`padding-${s}`])}),a.padding=O,!a.legend&&a.legend!==!1&&(a.legend=!!a.zKey),a}we(()=>(C(r()),C(l()),C(y()),C(f())),()=>{Be(e,D(r(),l(),y(),f()))}),Ke(),M();var k=E(),Q=K(k);{var V=d=>{var _=E(),T=K(_);ke(T,()=>t(e).data,i=>{var a=E(),O=K(a);{var R=o=>{P(o,c(()=>t(e)))},s=(o,X)=>{{var Y=x=>{P(x,c(()=>t(e),{color:"#bbb",colorSelect:"#206095",colorHighlight:"grey",overlayFill:!0}))},$=(x,ee)=>{{var te=p=>{J(p,c(()=>t(e)))},re=(p,se)=>{{var oe=u=>{J(u,c(()=>t(e),{color:"#bbb",colorSelect:"#206095",colorHighlight:"grey",overlayFill:!0}))},ae=(u,ie)=>{{var ne=m=>{q(m,c(()=>t(e),{area:!1}))},he=(m,le)=>{{var ce=g=>{q(g,c(()=>t(e),{area:!1,color:"#bbb",lineWidth:1,legend:!1,snapTicks:!1,hover:!0,labels:!0}))},fe=(g,de)=>{{var ye=v=>{A(v,c(()=>t(e)))},xe=(v,pe)=>{{var ue=z=>{A(z,c(()=>t(e),{color:"#bbb",colorSelect:"#206095",colorHighlight:"grey",overlayFill:!0,hover:!0,labels:!0}))},me=(z,ge)=>{{var ve=N=>{je(N,c(()=>t(e)))};n(z,N=>{r().toLowerCase()==="dotplot"&&t(e).xKey&&t(e).yKey&&N(ve)},ge)}};n(v,z=>{r().toLowerCase()==="scatter-highlight"&&t(e).xKey?z(ue):z(me,!1)},pe)}};n(g,v=>{r().toLowerCase()==="scatter"&&t(e).xKey?v(ye):v(xe,!1)},de)}};n(m,g=>{r().toLowerCase()==="line-highlight"&&t(e).xKey&&t(e).yKey?g(ce):g(fe,!1)},le)}};n(u,m=>{r().toLowerCase()==="line"&&t(e).xKey&&t(e).yKey?m(ne):m(he,!1)},ie)}};n(p,u=>{r().toLowerCase()==="column-highlight"&&t(e).xKey&&t(e).yKey?u(oe):u(ae,!1)},se)}};n(x,p=>{r().toLowerCase()==="column"&&t(e).xKey&&t(e).yKey?p(te):p(re,!1)},ee)}};n(o,x=>{r().toLowerCase()==="bar-highlight"&&t(e).xKey&&t(e).yKey?x(Y):x($,!1)},X)}};n(O,o=>{r().toLowerCase()==="bar"&&t(e).xKey&&t(e).yKey?o(R):o(s,!1)})}L(i,a)}),L(d,_)};n(Q,d=>{t(e)&&d(V)})}L(b,k),G()}const Ie=`A wrapper component that offers a simplified way to use charts with sensible preset defaults.

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
`,Pe=`In this use case, all of the data and config are passed into the component via a single \`section\` prop.

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
`,F=[{x:5315,y:"Portsmouth"},{x:5070,y:"Southampton"},{x:4596,y:"Slough"},{x:3969,y:"Reading"},{x:3522,y:"Brighton and Hove"}],Je=[{z:"West Oxfordshire",x:"2002",y:95961},{z:"West Oxfordshire",x:"2003",y:97083},{z:"West Oxfordshire",x:"2004",y:98038},{z:"West Oxfordshire",x:"2005",y:98869},{z:"West Oxfordshire",x:"2006",y:100316},{z:"West Oxfordshire",x:"2007",y:102166},{z:"West Oxfordshire",x:"2008",y:103016},{z:"West Oxfordshire",x:"2009",y:103824},{z:"West Oxfordshire",x:"2010",y:104706},{z:"West Oxfordshire",x:"2011",y:105442},{z:"West Oxfordshire",x:"2012",y:107164},{z:"West Oxfordshire",x:"2013",y:107945},{z:"West Oxfordshire",x:"2014",y:108095},{z:"West Oxfordshire",x:"2015",y:108609},{z:"West Oxfordshire",x:"2016",y:108748},{z:"West Oxfordshire",x:"2017",y:109266},{z:"West Oxfordshire",x:"2018",y:109800},{z:"West Oxfordshire",x:"2019",y:110643},{z:"West Oxfordshire",x:"2020",y:111758},{z:"South Oxfordshire",x:"2002",y:128754},{z:"South Oxfordshire",x:"2003",y:128920},{z:"South Oxfordshire",x:"2004",y:129359},{z:"South Oxfordshire",x:"2005",y:130050},{z:"South Oxfordshire",x:"2006",y:130676},{z:"South Oxfordshire",x:"2007",y:131626},{z:"South Oxfordshire",x:"2008",y:132611},{z:"South Oxfordshire",x:"2009",y:133466},{z:"South Oxfordshire",x:"2010",y:133915},{z:"South Oxfordshire",x:"2011",y:134961},{z:"South Oxfordshire",x:"2012",y:135722},{z:"South Oxfordshire",x:"2013",y:136328},{z:"South Oxfordshire",x:"2014",y:137477},{z:"South Oxfordshire",x:"2015",y:138177},{z:"South Oxfordshire",x:"2016",y:139156},{z:"South Oxfordshire",x:"2017",y:139767},{z:"South Oxfordshire",x:"2018",y:140504},{z:"South Oxfordshire",x:"2019",y:142057},{z:"South Oxfordshire",x:"2020",y:143782},{z:"Winchester",x:"2002",y:107844},{z:"Winchester",x:"2003",y:108515},{z:"Winchester",x:"2004",y:109179},{z:"Winchester",x:"2005",y:109947},{z:"Winchester",x:"2006",y:110628},{z:"Winchester",x:"2007",y:111820},{z:"Winchester",x:"2008",y:113267},{z:"Winchester",x:"2009",y:114505},{z:"Winchester",x:"2010",y:115789},{z:"Winchester",x:"2011",y:116820},{z:"Winchester",x:"2012",y:118074},{z:"Winchester",x:"2013",y:119037},{z:"Winchester",x:"2014",y:120290},{z:"Winchester",x:"2015",y:121734},{z:"Winchester",x:"2016",y:123100},{z:"Winchester",x:"2017",y:123879},{z:"Winchester",x:"2018",y:124295},{z:"Winchester",x:"2019",y:124859},{z:"Winchester",x:"2020",y:125925}],qe={title:"Data visualisation/Chart",component:Re,tags:["autodocs"],argTypes:{},parameters:Te(Ie)},{Story:H}=Ee();var Ae=De("<!> <!> <!>",1);function Z(b,h){U(h,!1),M();var e=Ae(),f=K(e);const r=w(()=>({type:"bar",data:F,options:{id:"chart-density",title:"Densest local authorities in the South East, 2020",footer:"Source: Office for National Statistics","padding-left":"120"}}));H(f,{name:"Bar",get args(){return t(r)},parameters:{__svelteCsf:{rawCode:"<Chart {...args} />"}}});var l=I(f,2);const y=w(()=>({section:{id:"chart-density",chartType:"bar",data:F,title:"Densest local authorities in the South East, 2020",footer:"Source: Office for National Statistics","padding-left":"120"}})),S=w(()=>He(Pe));H(l,{name:"Bar, robo-journalism case",get args(){return t(y)},parameters:{...t(S),__svelteCsf:{rawCode:"<Chart {...args} />"}}});var B=I(l,2);const D=w(()=>({section:{id:"chart-timeseries",chartType:"line-highlight",title:"Largest local authorities in the South East, 2002-2020",footer:"Source: Office for National Statistics",data:Je,selected:"Winchester","padding-top":"20","padding-right":"120","padding-left":"80"}}));H(B,{name:"Line with highlight",get args(){return t(D)},parameters:{__svelteCsf:{rawCode:"<Chart {...args} />"}}}),L(b,e),G()}Z.__docgen={data:[],name:"Chart.stories.svelte"};const j=Ne(Z,qe),ft=["Bar","BarRoboJournalismCase","LineWithHighlight"],dt={...j.Bar,tags:["svelte-csf-v5"]},yt={...j.BarRoboJournalismCase,tags:["svelte-csf-v5"]},xt={...j.LineWithHighlight,tags:["svelte-csf-v5"]};export{dt as Bar,yt as BarRoboJournalismCase,xt as LineWithHighlight,ft as __namedExportsOrder,qe as default};
