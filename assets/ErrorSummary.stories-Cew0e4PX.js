import{p as b,f as l,i as $,t as g,j as e,J as E,k as s,l as M,m as O,G as n,K as S,O as F,A as N,W as R,h as A,I as W,X}from"./iframe-Ba9ePtFQ.js";import{w as z,c as H,i as Q,d as U,a as Y}from"./create-runtime-stories-NZufGFTO.js";import{s as P}from"./style-CNURdi_Z.js";import{e as Z,i as ee}from"./each-CcrXM59y.js";import{s as re}from"./slot-BP_Qo1ZM.js";import{s as te}from"./attributes-_Th04X_A.js";import{s as se}from"./class-B9SFUanI.js";import{L as ae}from"./List-oJaFcanC.js";import"./attributes-q36Eg1F8.js";import"./html-D7mn1yyx.js";var oe=l("<a> </a>"),ie=l("<li><!></li>"),ne=l('<div aria-labelledby="alert" role="alert" tabindex="-1"><div class="ons-panel__header"><h2 id="alert" data-qa="error-header" class="ons-panel__title ons-u-fs-r--b"> </h2></div> <div class="ons-panel__body"><!> <!></div></div>');function _(d,r){let t=b(r,"title",8,null),a=b(r,"items",24,()=>[]),h=b(r,"cls",8,null);var m=ne(),f=s(m),y=s(f),w=s(y),p=E(f,2),v=s(p);{var x=c=>{ae(c,{mode:"number",children:(q,_e)=>{var T=M(),I=O(T);Z(I,1,a,ee,(L,u)=>{var k=ie(),B=s(k);{var G=o=>{var i=oe(),K=s(i);g(()=>{te(i,"href",n(u).href),S(K,n(u).label)}),e(o,i)},J=o=>{var i=F();g(()=>S(i,n(u).label)),e(o,i)};$(B,o=>{n(u).href?o(G):o(J,!1)})}e(L,k)}),e(q,T)},$$slots:{default:!0}})};$(v,c=>{Array.isArray(a())&&c(x)})}var D=E(v,2);re(D,r,"default",{},null),g(()=>{se(m,1,`ons-panel ons-panel--error ${h()??""}`,"svelte-15gtk6r"),S(w,t())}),e(d,m)}_.__docgen={data:[{name:"title",visibility:"public",description:"Defines the title of the error",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"items",visibility:"public",description:"Define an array of errors/issues in the format {label, href?}",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"object[]"},static:!1,readonly:!1,defaultValue:"[]"},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"ErrorSummary.svelte"};const le=`A panel to summarise errors on a form/input. The errors can be defined in an \`items\` array, or as plain text/html within the component.

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
`,me=(d,r=R)=>{var t=fe();P(t,"",{},{padding:"12px"});var a=s(t);_(a,X(r)),e(d,t)},pe={title:"Form elements/ErrorSummary",component:_,tags:["autodocs"],argTypes:{},parameters:z(le)},{Story:C}=U(),ce=[{label:"First issue description.",href:"#0"},{label:"Second issue description."}];var fe=l("<div><!></div>"),ve=l("<div><!></div>"),ue=l("<!> <!>",1);function V(d,r){N(r,!1),Q();var t=ue(),a=O(t);const h=A(()=>({title:"There are 2 problems with your answer",items:ce}));C(a,{name:"Default",get args(){return n(h)},get template(){return me},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<ErrorSummary {...args} />
</div>`}}});var m=E(a,2);const f=A(()=>Y(de));C(m,{name:"Error defined as text",asChild:!0,parameters:{...n(f),__svelteCsf:{rawCode:`<div style:padding="12px">
	<ErrorSummary title="There was an error">This is a text to describe the error.</ErrorSummary>
</div>`}},children:(y,w)=>{var p=ve();P(p,"",{},{padding:"12px"});var v=s(p);_(v,{title:"There was an error",children:(x,D)=>{var c=F("This is a text to describe the error.");e(x,c)},$$slots:{default:!0}}),e(y,p)},$$slots:{default:!0}}),e(d,t),W()}V.__docgen={data:[],name:"ErrorSummary.stories.svelte"};const j=H(V,pe),ke=["Default","ErrorDefinedAsText"],$e={...j.Default,tags:["svelte-csf-v5"]},Ae={...j.ErrorDefinedAsText,tags:["svelte-csf-v5"]};export{$e as Default,Ae as ErrorDefinedAsText,ke as __namedExportsOrder,pe as default};
