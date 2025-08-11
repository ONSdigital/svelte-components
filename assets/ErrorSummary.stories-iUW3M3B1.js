import{a as x,j as l,i as $,t as b,e,k as E,n as s,c as Z,f as V,g as n,q as S,V as q,p as z,Z as G,o as A,h as H,_ as J}from"./iframe--x4qF4Cz.js";import{w as K,c as Q,i as U,d as W,a as X}from"./create-runtime-stories-BnfwZkSc.js";import{s as O}from"./style-CcY6orqc.js";import{e as Y,i as ee}from"./each-Df_4uaNX.js";import{s as re}from"./slot-BP_Qo1ZM.js";import{s as te}from"./attributes-DUgS1wvt.js";import{s as se}from"./class-Dzh9Da8g.js";import{L as ae}from"./List-gHqdT9GJ.js";import"./attributes-Co-1QMVx.js";import"./html-zSkhiqJs.js";var oe=l("<a> </a>"),ie=l("<li><!></li>"),ne=l('<div aria-labelledby="alert" role="alert" tabindex="-1"><div class="ons-panel__header"><h2 id="alert" data-qa="error-header" class="ons-panel__title ons-u-fs-r--b"> </h2></div> <div class="ons-panel__body"><!> <!></div></div>');function _(d,r){let t=x(r,"title",8,""),a=x(r,"items",24,()=>[]),h=x(r,"cls",8,"");var m=ne(),f=s(m),y=s(f),w=s(y),p=E(f,2),v=s(p);{var g=c=>{ae(c,{mode:"number",children:(F,_e)=>{var T=Z(),I=V(T);Y(I,1,a,ee,(L,u)=>{var k=ie(),B=s(k);{var M=o=>{var i=oe(),R=s(i);b(()=>{te(i,"href",n(u).href),S(R,n(u).label)}),e(o,i)},N=o=>{var i=q();b(()=>S(i,n(u).label)),e(o,i)};$(B,o=>{n(u).href?o(M):o(N,!1)})}e(L,k)}),e(F,T)},$$slots:{default:!0}})};$(v,c=>{Array.isArray(a())&&c(g)})}var D=E(v,2);re(D,r,"default",{},null),b(()=>{se(m,1,`ons-panel ons-panel--error ${h()??""}`,"svelte-15gtk6r"),S(w,t())}),e(d,m)}_.__docgen={data:[{name:"title",visibility:"public",description:"Defines the title of the error",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"items",visibility:"public",description:"Define an array of errors/issues in the format {label, href?}",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"object[]"},static:!1,readonly:!1,defaultValue:"[]"},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],name:"ErrorSummary.svelte"};const le=`A panel to summarise errors on a form/input. The errors can be defined in an \`items\` array, or as plain text/html within the component.

Based on [this ONS Design System pattern](https://service-manual.ons.gov.uk/design-system/patterns/error-status-pages).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { ErrorSummary } from "@onsvisual/svelte-components";

  const items = [
    { label: "First issue description.", href: "#0" },
    { label: "Second issue description." },
  ];
<\/script>

<ErrorSummary title="There are 2 problems with your answer" {items} />
\`\`\`
`,de=`In this example, the \`items\` array is not used, and the error is described using text/html.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { ErrorSummary } from "@onsvisual/svelte-components";
<\/script>

<ErrorSummary title="There was an error">
  This is a text to describe the error.
</ErrorSummary>
\`\`\`
`,me=(d,r=G)=>{var t=fe();O(t,"",{},{padding:"12px"});var a=s(t);_(a,J(r)),e(d,t)},pe={title:"Inputs/ErrorSummary",component:_,tags:["autodocs"],argTypes:{},parameters:K(le)},{Story:C}=W(),ce=[{label:"First issue description.",href:"#0"},{label:"Second issue description."}];var fe=l("<div><!></div>"),ve=l("<div><!></div>"),ue=l("<!> <!>",1);function P(d,r){z(r,!1),U();var t=ue(),a=V(t);const h=A(()=>({title:"There are 2 problems with your answer",items:ce}));C(a,{name:"Default",get args(){return n(h)},get template(){return me},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<ErrorSummary {...args} />
</div>`}}});var m=E(a,2);const f=A(()=>X(de));C(m,{name:"Error defined as text",asChild:!0,parameters:{...n(f),__svelteCsf:{rawCode:`<div style:padding="12px">
	<ErrorSummary title="There was an error">This is a text to describe the error.</ErrorSummary>
</div>`}},children:(y,w)=>{var p=ve();O(p,"",{},{padding:"12px"});var v=s(p);_(v,{title:"There was an error",children:(g,D)=>{var c=q("This is a text to describe the error.");e(g,c)},$$slots:{default:!0}}),e(y,p)},$$slots:{default:!0}}),e(d,t),H()}P.__docgen={data:[],name:"ErrorSummary.stories.svelte"};const j=Q(P,pe),ke=["Default","ErrorDefinedAsText"],$e={...j.Default,tags:["svelte-csf-v5"]},Ae={...j.ErrorDefinedAsText,tags:["svelte-csf-v5"]};export{$e as Default,Ae as ErrorDefinedAsText,ke as __namedExportsOrder,pe as default};
