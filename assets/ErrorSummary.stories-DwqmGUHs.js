import{p as x,i as A,t as S,a as r,f as u,ae as w,c as i,g as e,s as E,d as J,e as F,u as c,b as O,an as K,q as Q,ab as U,as as W,ad as X,at as Y,H as C}from"./iframe-CArMXtmx.js";import{c as Z,w as ee,i as re,d as te,a as ae}from"./create-runtime-stories-BEqwKI8x.js";import{e as se,i as oe}from"./each-DQgaGWnt.js";import{s as ie}from"./slot-BP_Qo1ZM.js";import{s as ne}from"./attributes-BmILT1Qd.js";import{s as le}from"./class-C3cnp_aW.js";import{L as de}from"./List-BMrDrJbv.js";import{s as P}from"./style-qhnr2LWw.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DayBpKoh.js";import"./html-D5Y59aU2.js";var me=u("<a> </a>"),pe=u("<li><!></li>"),ce=u('<div aria-labelledby="alert" role="alert" tabindex="-1"><div class="ons-panel__header"><h2 id="alert" data-qa="error-header" class="ons-panel__title ons-u-fs-r--b"> </h2></div> <div class="ons-panel__body"><!> <!></div></div>');function _(m,t){let a=x(t,"title",8,null),s=x(t,"items",24,()=>[]),h=x(t,"cls",8,null);var n=ce(),f=i(n),D=i(f),p=i(D),y=w(f,2),v=i(y);{var $=g=>{de(g,{mode:"number",children:(H,be)=>{var T=J(),I=F(T);se(I,1,s,oe,(M,o)=>{var k=pe(),N=i(k);{var R=l=>{var d=me(),G=i(d);S(()=>{ne(d,"href",(e(o),c(()=>e(o).href))),E(G,(e(o),c(()=>e(o).label)))}),r(l,d)},z=l=>{var d=O();S(()=>E(d,(e(o),c(()=>e(o).label)))),r(l,d)};A(N,l=>{e(o),c(()=>e(o).href)?l(R):l(z,-1)})}r(M,k)}),r(H,T)},$$slots:{default:!0}})},b=K(()=>(Q(s()),c(()=>Array.isArray(s()))));A(v,g=>{e(b)&&g($)})}var B=w(v,2);ie(B,t,"default",{},null),S(()=>{le(n,1,`ons-panel ons-panel--error ${h()??""}`,"svelte-1bkpd5p"),E(p,a())}),r(m,n)}_.__docgen={data:[{name:"title",visibility:"public",description:"Defines the title of the error",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"items",visibility:"public",description:"Define an array of errors/issues in the format {label, href?}",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"object[]"},static:!1,readonly:!1,defaultValue:"[]"},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"ErrorSummary.svelte"};const ue=`A panel to summarise errors on a form/input. The errors can be defined in an \`items\` array, or as plain text/html within the component.

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
`,fe=`In this example, the \`items\` array is not used, and the error is described using text/html.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { ErrorSummary } from "@onsvisual/svelte-components";
<\/script>

<ErrorSummary title="There was an error">
  This is a text to describe the error.
</ErrorSummary>
\`\`\`
`,ve=(m,t=W)=>{var a=V();P(a,"",{},{padding:"12px"});var s=i(a);_(s,Y(t)),r(m,a)},_e={title:"Form elements/ErrorSummary",component:_,tags:["autodocs"],argTypes:{},parameters:ee(ue)},{Story:q}=te(),he=[{label:"First issue description.",href:"#0"},{label:"Second issue description."}];var V=u("<div><!></div>"),ye=u("<!> <!>",1);function L(m,t){U(t,!1),re();var a=ye(),s=F(a);{let n=C(()=>({title:"There are 2 problems with your answer",items:he}));q(s,{name:"Default",get args(){return e(n)},get template(){return ve},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<ErrorSummary {...args} />
</div>`}}})}var h=w(s,2);{let n=C(()=>ae(fe));q(h,{name:"Error defined as text",asChild:!0,parameters:{...e(n),__svelteCsf:{rawCode:`<div style:padding="12px">
	<ErrorSummary title="There was an error">This is a text to describe the error.</ErrorSummary>
</div>`}},children:(f,D)=>{var p=V();P(p,"",{},{padding:"12px"});var y=i(p);_(y,{title:"There was an error",children:(v,$)=>{var b=O("This is a text to describe the error.");r(v,b)},$$slots:{default:!0}}),r(f,p)},$$slots:{default:!0}})}r(m,a),X()}L.__docgen={data:[],name:"ErrorSummary.stories.svelte"};const j=Z(L,_e),qe=["Default","ErrorDefinedAsText"],Fe={...j.Default,tags:["svelte-csf-v5"]},Oe={...j.ErrorDefinedAsText,tags:["svelte-csf-v5"]};export{Fe as Default,Oe as ErrorDefinedAsText,qe as __namedExportsOrder,_e as default};
