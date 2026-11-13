import{p as g,i as T,s as H,t as x,a as e,f as p,ah as E,c as a,g as n,n as F,b as S,e as J,h as O,d as P,ag as Q,ad as U,af as W,ax as X,K as A}from"./iframe-UWIgwT_c.js";import{c as Y,w as Z,i as ee,d as re,a as te}from"./create-runtime-stories-WntTm4wH.js";import{e as ae,i as se}from"./each-28trRlzV.js";import{s as ie}from"./attributes-CxnnJe_I.js";import{s as ne}from"./class-BWaliKvu.js";import{L as oe}from"./List-Cl0CxGs4.js";import{s as V}from"./style-JgESTiB5.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DayBpKoh.js";import"./html-Dw2gjOR2.js";var le=p("<a> </a>"),de=p("<li><!></li>"),me=p('<div aria-labelledby="alert" role="alert" tabindex="-1"><div class="ons-panel__header"><h2 id="alert" data-qa="error-header" class="ons-panel__title ons-u-fs-r--b"> </h2></div> <div class="ons-panel__body"><!> <!></div></div>');function v(d,r){let t=g(r,"title",3,null),s=g(r,"items",19,()=>[]),h=g(r,"cls",3,null);var i=me(),c=a(i),w=a(c),m=a(w),y=E(c,2),f=a(y);{var D=b=>{oe(b,{mode:"number",children:(K,ye)=>{var k=J(),M=O(k);ae(M,17,s,se,(N,u)=>{var $=de(),R=a($);{var j=o=>{var l=le(),G=a(l);x(()=>{ie(l,"href",n(u).href),S(G,n(u).label)}),e(o,l)},z=o=>{var l=P();x(()=>S(l,n(u).label)),e(o,l)};T(R,o=>{n(u).href?o(j):o(z,-1)})}e(N,$)}),e(K,k)},$$slots:{default:!0}})},_=Q(()=>Array.isArray(s()));T(f,b=>{n(_)&&b(D)})}var I=E(f,2);H(I,()=>r.children??F),x(()=>{ne(i,1,`ons-panel ons-panel--error ${h()??""}`,"svelte-1bkpd5p"),S(m,t())}),e(d,i)}v.__docgen={data:[{name:"title",visibility:"public",description:"- Defines the title of the error",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"items",visibility:"public",description:"- Define an array of errors/issues in the format {label, href?}",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"{ label: string; href?: string | undefined; }[]"},static:!1,readonly:!1,defaultValue:"[]"},{name:"cls",visibility:"public",description:"- Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"children",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1}],name:"ErrorSummary.svelte"};const pe=`A panel to summarise errors on a form/input. The errors can be defined in an \`items\` array, or as plain text/html within the component.

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
`,ce=`In this example, the \`items\` array is not used, and the error is described using text/html.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { ErrorSummary } from "@onsvisual/svelte-components";
<\/script>

<ErrorSummary title="There was an error">
  This is a text to describe the error.
</ErrorSummary>
\`\`\`
`,fe=(d,r=F)=>{var t=q();V(t,"",{},{padding:"12px"});var s=a(t);v(s,X(r)),e(d,t)},ue={title:"Form elements/ErrorSummary",component:v,tags:["autodocs"],argTypes:{},parameters:Z(pe)},{Story:C}=re(),ve=[{label:"First issue description.",href:"#0"},{label:"Second issue description."}];var q=p("<div><!></div>"),he=p("<!> <!>",1);function L(d,r){U(r,!1),ee();var t=he(),s=O(t);{let i=A(()=>({title:"There are 2 problems with your answer",items:ve}));C(s,{name:"Default",get args(){return n(i)},get template(){return fe},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<ErrorSummary {...args} />
</div>`}}})}var h=E(s,2);{let i=A(()=>te(ce));C(h,{name:"Error defined as text",asChild:!0,parameters:{...n(i),__svelteCsf:{rawCode:`<div style:padding="12px">
	<ErrorSummary title="There was an error">This is a text to describe the error.</ErrorSummary>
</div>`}},children:(c,w)=>{var m=q();V(m,"",{},{padding:"12px"});var y=a(m);v(y,{title:"There was an error",children:(f,D)=>{var _=P("This is a text to describe the error.");e(f,_)},$$slots:{default:!0}}),e(c,m)},$$slots:{default:!0}})}e(d,t),W()}L.__docgen={data:[],name:"ErrorSummary.stories.svelte"};const B=Y(L,ue),Te=["Default","ErrorDefinedAsText"],Ae={...B.Default,tags:["svelte-csf-v5"]},Ce={...B.ErrorDefinedAsText,tags:["svelte-csf-v5"]};export{Ae as Default,Ce as ErrorDefinedAsText,Te as __namedExportsOrder,ue as default};
