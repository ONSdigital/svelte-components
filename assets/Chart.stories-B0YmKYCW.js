import{U as ze,ao as be,M as Se,o as _e,a2 as Oe,a1 as We,ap as Ce,A as U,p as W,B as we,F as Ke,l as N,m as K,i as n,j as L,I as G,G as t,D as Le,C as Be,E as C,W as c,f as De,h as w,J as I}from"./iframe-rn-CYE4_.js";import{i as M,w as Te,c as Ee,d as Ne,a as He}from"./create-runtime-stories-DUShD_-p.js";import{B as J}from"./BarChart-CdlP7XZo.js";import{C as P}from"./ColumnChart-B0uVYjSm.js";import{L as A}from"./LineChart-D6F6s5E4.js";import{S as F}from"./ScatterChart-BmhlWwqd.js";import{D as je}from"./DotPlotChart-CpHZUXgH.js";import"./DotPlotChart.svelte_svelte_type_style_lang-BmNzGF0W.js";import"./slot-BP_Qo1ZM.js";import"./style-CNURdi_Z.js";import"./attributes-q36Eg1F8.js";import"./this-Du894LZY.js";import"./misc-Dj3SCh_7.js";import"./each-CTmPshpe.js";import"./attributes-DzjqHavG.js";import"./class-B9SFUanI.js";import"./Legend-ZPKZFjXz.js";import"./defaultLocale-DJ2q5QjE.js";import"./linear-CZTuTj73.js";import"./band-BgGrnoyD.js";import"./actions-BC6T21ly.js";import"./Labels-CWv2_JpE.js";import"./svelte-head-FdOH6T_E.js";function ke(b,h,e){var f=b,r=Ce,l,y=ze()?be:Se;_e(()=>{y(r,r=h())&&(l&&Oe(l),l=We(()=>e(f)))})}function Re(b,h){U(h,!1);const e=Le();let f=W(h,"section",8,null),r=W(h,"type",24,()=>{var d;return(d=f())==null?void 0:d.chartType}),l=W(h,"data",8,null),y=W(h,"options",8,null);const S=["left","right","top","bottom"],B=/^\[(?:'[^']*'|"[^"]*"|\d+(?:\.\d+)?)(,?)*]$/;function D(d,_,T,i){i||(i={chartType:d,data:_,...T});let a={},O={left:50,right:0,top:0,bottom:20};return Object.keys(i).filter(o=>!["type","chartType",...S.map(s=>`padding-${s}`)].includes(o)).forEach(o=>{B.test(i[o])?a[o]=JSON.parse(i[o]):a[o]=i[o]}),Array.isArray(i.data)&&Object.keys(i.data[0]).forEach(s=>{["x","y","z","r"].includes(s)?a[`${s}Key`]=s:a[s]=s}),S.forEach(o=>{i[`padding-${o}`]&&(O[o]=+i[`padding-${o}`])}),a.padding=O,!a.legend&&a.legend!==!1&&(a.legend=!!a.zKey),a}we(()=>(C(r()),C(l()),C(y()),C(f())),()=>{Be(e,D(r(),l(),y(),f()))}),Ke(),M();var k=N(),Q=K(k);{var V=d=>{var _=N(),T=K(_);ke(T,()=>t(e).data,i=>{var a=N(),O=K(a);{var R=s=>{J(s,c(()=>t(e)))},o=(s,X)=>{{var Y=x=>{J(x,c(()=>t(e),{color:"#bbb",colorSelect:"#206095",colorHighlight:"grey",overlayFill:!0}))},$=(x,ee)=>{{var te=p=>{P(p,c(()=>t(e)))},re=(p,oe)=>{{var se=u=>{P(u,c(()=>t(e),{color:"#bbb",colorSelect:"#206095",colorHighlight:"grey",overlayFill:!0}))},ae=(u,ie)=>{{var ne=m=>{A(m,c(()=>t(e),{area:!1}))},he=(m,le)=>{{var ce=g=>{A(g,c(()=>t(e),{area:!1,color:"#bbb",lineWidth:1,legend:!1,snapTicks:!1,hover:!0,labels:!0}))},fe=(g,de)=>{{var ye=v=>{F(v,c(()=>t(e)))},xe=(v,pe)=>{{var ue=z=>{F(z,c(()=>t(e),{color:"#bbb",colorSelect:"#206095",colorHighlight:"grey",overlayFill:!0,hover:!0,labels:!0}))},me=(z,ge)=>{{var ve=E=>{je(E,c(()=>t(e)))};n(z,E=>{r().toLowerCase()==="dotplot"&&t(e).xKey&&t(e).yKey&&E(ve)},ge)}};n(v,z=>{r().toLowerCase()==="scatter-highlight"&&t(e).xKey?z(ue):z(me,!1)},pe)}};n(g,v=>{r().toLowerCase()==="scatter"&&t(e).xKey?v(ye):v(xe,!1)},de)}};n(m,g=>{r().toLowerCase()==="line-highlight"&&t(e).xKey&&t(e).yKey?g(ce):g(fe,!1)},le)}};n(u,m=>{r().toLowerCase()==="line"&&t(e).xKey&&t(e).yKey?m(ne):m(he,!1)},ie)}};n(p,u=>{r().toLowerCase()==="column-highlight"&&t(e).xKey&&t(e).yKey?u(se):u(ae,!1)},oe)}};n(x,p=>{r().toLowerCase()==="column"&&t(e).xKey&&t(e).yKey?p(te):p(re,!1)},ee)}};n(s,x=>{r().toLowerCase()==="bar-highlight"&&t(e).xKey&&t(e).yKey?x(Y):x($,!1)},X)}};n(O,s=>{r().toLowerCase()==="bar"&&t(e).xKey&&t(e).yKey?s(R):s(o,!1)})}L(i,a)}),L(d,_)};n(Q,d=>{t(e)&&d(V)})}L(b,k),G()}const Ie=`A wrapper component that offers a simplified way to use charts with sensible preset defaults.

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
`,Je=`In this use case, all of the data and config are passed into the component via a single \`section\` prop.

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
`,q=[{x:5315,y:"Portsmouth"},{x:5070,y:"Southampton"},{x:4596,y:"Slough"},{x:3969,y:"Reading"},{x:3522,y:"Brighton and Hove"}],Pe=[{z:"West Oxfordshire",x:"2002",y:95961},{z:"West Oxfordshire",x:"2003",y:97083},{z:"West Oxfordshire",x:"2004",y:98038},{z:"West Oxfordshire",x:"2005",y:98869},{z:"West Oxfordshire",x:"2006",y:100316},{z:"West Oxfordshire",x:"2007",y:102166},{z:"West Oxfordshire",x:"2008",y:103016},{z:"West Oxfordshire",x:"2009",y:103824},{z:"West Oxfordshire",x:"2010",y:104706},{z:"West Oxfordshire",x:"2011",y:105442},{z:"West Oxfordshire",x:"2012",y:107164},{z:"West Oxfordshire",x:"2013",y:107945},{z:"West Oxfordshire",x:"2014",y:108095},{z:"West Oxfordshire",x:"2015",y:108609},{z:"West Oxfordshire",x:"2016",y:108748},{z:"West Oxfordshire",x:"2017",y:109266},{z:"West Oxfordshire",x:"2018",y:109800},{z:"West Oxfordshire",x:"2019",y:110643},{z:"West Oxfordshire",x:"2020",y:111758},{z:"South Oxfordshire",x:"2002",y:128754},{z:"South Oxfordshire",x:"2003",y:128920},{z:"South Oxfordshire",x:"2004",y:129359},{z:"South Oxfordshire",x:"2005",y:130050},{z:"South Oxfordshire",x:"2006",y:130676},{z:"South Oxfordshire",x:"2007",y:131626},{z:"South Oxfordshire",x:"2008",y:132611},{z:"South Oxfordshire",x:"2009",y:133466},{z:"South Oxfordshire",x:"2010",y:133915},{z:"South Oxfordshire",x:"2011",y:134961},{z:"South Oxfordshire",x:"2012",y:135722},{z:"South Oxfordshire",x:"2013",y:136328},{z:"South Oxfordshire",x:"2014",y:137477},{z:"South Oxfordshire",x:"2015",y:138177},{z:"South Oxfordshire",x:"2016",y:139156},{z:"South Oxfordshire",x:"2017",y:139767},{z:"South Oxfordshire",x:"2018",y:140504},{z:"South Oxfordshire",x:"2019",y:142057},{z:"South Oxfordshire",x:"2020",y:143782},{z:"Winchester",x:"2002",y:107844},{z:"Winchester",x:"2003",y:108515},{z:"Winchester",x:"2004",y:109179},{z:"Winchester",x:"2005",y:109947},{z:"Winchester",x:"2006",y:110628},{z:"Winchester",x:"2007",y:111820},{z:"Winchester",x:"2008",y:113267},{z:"Winchester",x:"2009",y:114505},{z:"Winchester",x:"2010",y:115789},{z:"Winchester",x:"2011",y:116820},{z:"Winchester",x:"2012",y:118074},{z:"Winchester",x:"2013",y:119037},{z:"Winchester",x:"2014",y:120290},{z:"Winchester",x:"2015",y:121734},{z:"Winchester",x:"2016",y:123100},{z:"Winchester",x:"2017",y:123879},{z:"Winchester",x:"2018",y:124295},{z:"Winchester",x:"2019",y:124859},{z:"Winchester",x:"2020",y:125925}],Ae={title:"Charts/Chart",component:Re,tags:["autodocs"],argTypes:{},parameters:Te(Ie)},{Story:H}=Ne();var Fe=De("<!> <!> <!>",1);function Z(b,h){U(h,!1),M();var e=Fe(),f=K(e);const r=w(()=>({type:"bar",data:q,options:{id:"chart-density",title:"Densest local authorities in the South East, 2020",footer:"Source: Office for National Statistics","padding-left":"120"}}));H(f,{name:"Bar",get args(){return t(r)},parameters:{__svelteCsf:{rawCode:"<Chart {...args} />"}}});var l=I(f,2);const y=w(()=>({section:{id:"chart-density",chartType:"bar",data:q,title:"Densest local authorities in the South East, 2020",footer:"Source: Office for National Statistics","padding-left":"120"}})),S=w(()=>He(Je));H(l,{name:"Bar, robo-journalism case",get args(){return t(y)},parameters:{...t(S),__svelteCsf:{rawCode:"<Chart {...args} />"}}});var B=I(l,2);const D=w(()=>({section:{id:"chart-timeseries",chartType:"line-highlight",title:"Largest local authorities in the South East, 2002-2020",footer:"Source: Office for National Statistics",data:Pe,selected:"Winchester","padding-top":"20","padding-right":"120","padding-left":"80"}}));H(B,{name:"Line with highlight",get args(){return t(D)},parameters:{__svelteCsf:{rawCode:"<Chart {...args} />"}}}),L(b,e),G()}Z.__docgen={data:[],name:"Chart.stories.svelte"};const j=Ee(Z,Ae),yt=["Bar","BarRoboJournalismCase","LineWithHighlight"],xt={...j.Bar,tags:["svelte-csf-v5"]},pt={...j.BarRoboJournalismCase,tags:["svelte-csf-v5"]},ut={...j.LineWithHighlight,tags:["svelte-csf-v5"]};export{xt as Bar,pt as BarRoboJournalismCase,ut as LineWithHighlight,yt as __namedExportsOrder,Ae as default};
