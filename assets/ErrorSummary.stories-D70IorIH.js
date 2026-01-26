import{a as x,j as l,i as $,t as b,e,k as E,n as s,c as Z,f as V,g as n,q as S,V as q,p as z,Z as G,o as A,h as H,_ as J}from"./iframe-BXL9GsHe.js";import{w as K,c as Q,i as U,d as W,a as X}from"./create-runtime-stories-BndbA_YL.js";import{s as O}from"./style-CcY6orqc.js";import{e as Y,i as ee}from"./each-C1-l3CJ_.js";import{s as re}from"./slot-BP_Qo1ZM.js";import{s as te}from"./attributes-keP7PBQf.js";import{s as se}from"./class-Dzh9Da8g.js";import{L as ae}from"./List-DtO55LN8.js";import"./attributes-Co-1QMVx.js";import"./html-bU5QB4DO.js";var oe=l("<a> </a>"),ie=l("<li><!></li>"),ne=l('<div aria-labelledby="alert" role="alert" tabindex="-1"><div class="ons-panel__header"><h2 id="alert" data-qa="error-header" class="ons-panel__title ons-u-fs-r--b"> </h2></div> <div class="ons-panel__body"><!> <!></div></div>');function _(d,r){let t=x(r,"title",8,null),a=x(r,"items",24,()=>[]),h=x(r,"cls",8,null);var m=ne(),f=s(m),y=s(f),w=s(y),p=E(f,2),u=s(p);{var g=c=>{ae(c,{mode:"number",children:(F,_e)=>{var T=Z(),I=V(T);Y(I,1,a,ee,(L,v)=>{var k=ie(),B=s(k);{var M=o=>{var i=oe(),R=s(i);b(()=>{te(i,"href",n(v).href),S(R,n(v).label)}),e(o,i)},N=o=>{var i=q();b(()=>S(i,n(v).label)),e(o,i)};$(B,o=>{n(v).href?o(M):o(N,!1)})}e(L,k)}),e(F,T)},$$slots:{default:!0}})};$(u,c=>{Array.isArray(a())&&c(g)})}var D=E(u,2);re(D,r,"default",{},null),b(()=>{se(m,1,`ons-panel ons-panel--error ${h()??""}`,"svelte-15gtk6r"),S(w,t())}),e(d,m)}_.__docgen={data:[{name:"title",visibility:"public",description:"Defines the title of the error",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"items",visibility:"public",description:"Define an array of errors/issues in the format {label, href?}",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"object[]"},static:!1,readonly:!1,defaultValue:"[]"},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"ErrorSummary.svelte"};const le=`A panel to summarise errors on a form/input. The errors can be defined in an \`items\` array, or as plain text/html within the component.\r
\r
Based on [this ONS Design System pattern](https://service-manual.ons.gov.uk/design-system/patterns/error-status-pages).\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { ErrorSummary } from "@onsvisual/svelte-components";\r
\r
  const items = [\r
    { label: "First issue description.", href: "#0" },\r
    { label: "Second issue description." },\r
  ];\r
<\/script>\r
\r
<ErrorSummary title="There are 2 problems with your answer" {items} />\r
\`\`\`\r
`,de=`In this example, the \`items\` array is not used, and the error is described using text/html.\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { ErrorSummary } from "@onsvisual/svelte-components";\r
<\/script>\r
\r
<ErrorSummary title="There was an error">\r
  This is a text to describe the error.\r
</ErrorSummary>\r
\`\`\`\r
`,me=(d,r=G)=>{var t=fe();O(t,"",{},{padding:"12px"});var a=s(t);_(a,J(r)),e(d,t)},pe={title:"Inputs/ErrorSummary",component:_,tags:["autodocs"],argTypes:{},parameters:K(le)},{Story:C}=W(),ce=[{label:"First issue description.",href:"#0"},{label:"Second issue description."}];var fe=l("<div><!></div>"),ue=l("<div><!></div>"),ve=l("<!> <!>",1);function P(d,r){z(r,!1),U();var t=ve(),a=V(t);const h=A(()=>({title:"There are 2 problems with your answer",items:ce}));C(a,{name:"Default",get args(){return n(h)},get template(){return me},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">\r
	<ErrorSummary {...args} />\r
</div>`}}});var m=E(a,2);const f=A(()=>X(de));C(m,{name:"Error defined as text",asChild:!0,parameters:{...n(f),__svelteCsf:{rawCode:`<div style:padding="12px">\r
	<ErrorSummary title="There was an error">This is a text to describe the error.</ErrorSummary>\r
</div>`}},children:(y,w)=>{var p=ue();O(p,"",{},{padding:"12px"});var u=s(p);_(u,{title:"There was an error",children:(g,D)=>{var c=q("This is a text to describe the error.");e(g,c)},$$slots:{default:!0}}),e(y,p)},$$slots:{default:!0}}),e(d,t),H()}P.__docgen={data:[],name:"ErrorSummary.stories.svelte"};const j=Q(P,pe),ke=["Default","ErrorDefinedAsText"],$e={...j.Default,tags:["svelte-csf-v5"]},Ae={...j.ErrorDefinedAsText,tags:["svelte-csf-v5"]};export{$e as Default,Ae as ErrorDefinedAsText,ke as __namedExportsOrder,pe as default};
