import{p as x,f as m,i as N,t as A,j as l,k as i,h as I,K as O,J as c,A as B,m as C,W as L,I as M,X as V,l as j}from"./iframe-BbbdPRT3.js";import{w as q,c as J,i as K,d as P}from"./create-runtime-stories-BDNKaz6P.js";import{h as R}from"./html-C3umIGRJ.js";import{s as X}from"./style-CNURdi_Z.js";import{s as Y}from"./slot-BP_Qo1ZM.js";import{s as k}from"./class-B9SFUanI.js";import"./attributes-q36Eg1F8.js";var Z=m('<div class="ons-panel__icon" aria-hidden="true">!</div>'),z=m('<span class="ons-panel__icon ons-u-fs-r"><svg class="ons-icon" viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg" focusable="false" fill="currentColor" role="img" title="ons-icon-check"><path d="M14.35,3.9l-.71-.71a.5.5,0,0,0-.71,0h0L5.79,10.34,3.07,7.61a.51.51,0,0,0-.71,0l-.71.71a.51.51,0,0,0,0,.71l3.78,3.78a.5.5,0,0,0,.71,0h0L14.35,4.6A.5.5,0,0,0,14.35,3.9Z" transform="translate(-1.51 -3.04)"></path></svg></span>'),F=m('<div><div class="ons-u-bg--tr"><!> <span class="ons-panel__assistive-text ons-u-vh"> </span> <!> <div class="ons-panel__body"><div><!></div></div></div></div>');function _(d,s){let e=x(s,"mode",8,"info"),a=x(s,"cls",8,null);var n=F();let o;var r=i(n),v=i(r);{var $=t=>{var p=Z();l(t,p)};N(v,t=>{e()==="warning"&&t($)})}var y=c(v,2),D=i(y),h=c(y,2);{var E=t=>{var p=z();l(t,p)};N(h,t=>{e()==="success"&&t(E)})}var W=c(h,2),S=i(W);let w;var T=i(S);Y(T,s,"default",{},null),A((t,p)=>{o=k(n,1,`ons-panel ons-panel--no-title ${a()??""}`,null,o,t),O(D,e()==="warning"?"Warning:":e()==="success"?"Completed:":e()==="error"?"Error:":"Important information:"),w=k(S,1,"default-line-height",null,w,p)},[()=>({"ons-panel--info":e()==="info","ons-panel--warn":e()==="warning","ons-panel--error":e()==="error","ons-panel--success":e()==="success"}),()=>({"ons-u-fs-r":e()!=="warning"})],I),l(d,n)}_.__docgen={data:[{name:"mode",visibility:"public",description:"Sets the mode/colour of the notice",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"info",text:'"info"'},{kind:"const",type:"string",value:"success",text:'"success"'},{kind:"const",type:"string",value:"error",text:'"error"'},{kind:"const",type:"string",value:"warning",text:'"warning"'}],text:'"info" | "success" | "error" | "warning"'},static:!1,readonly:!1,defaultValue:'"info"'},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"Notice.svelte"};const G=`Container for displaying notices on a page.

Based on this [ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/panel).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Notice } from "@onsvisual/svelte-components";
<\/script>

<Notice>
  <p>This is the text of the notice.</p>
</Notice>
\`\`\`
`,f=(d,s=L)=>{var e=Q();X(e,"",{},{padding:"12px"});var a=i(e);_(a,V(s,{children:(n,o)=>{var r=j(),v=C(r);R(v,()=>s().content),l(n,r)},$$slots:{default:!0}})),l(d,e)},H={title:"Information and media/Notice",component:_,tags:["autodocs"],argTypes:{mode:{control:{type:"select"}}},parameters:q(G)},{Story:u}=P();var Q=m("<div><!></div>"),U=m("<!> <!> <!> <!>",1);function b(d,s){B(s,!1),K();var e=U(),a=C(e);u(a,{name:"Default",args:{content:"This is some helpful information."},get template(){return f},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Notice {...args}>
		{@html args.content}
	</Notice>
</div>`}}});var n=c(a,2);u(n,{name:"Warning style",args:{mode:"warning",content:"This is some important information you need to know."},get template(){return f},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Notice {...args}>
		{@html args.content}
	</Notice>
</div>`}}});var o=c(n,2);u(o,{name:"Success style",args:{mode:"success",content:"You successfully submitted some information."},get template(){return f},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Notice {...args}>
		{@html args.content}
	</Notice>
</div>`}}});var r=c(o,2);u(r,{name:"Error style",args:{mode:"error",content:"An unexpected error has occurred."},get template(){return f},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Notice {...args}>
		{@html args.content}
	</Notice>
</div>`}}}),l(d,e),M()}b.__docgen={data:[],name:"Notice.stories.svelte"};const g=J(b,H),ie=["Default","WarningStyle","SuccessStyle","ErrorStyle"],le={...g.Default,tags:["svelte-csf-v5"]},ce={...g.WarningStyle,tags:["svelte-csf-v5"]},de={...g.SuccessStyle,tags:["svelte-csf-v5"]},pe={...g.ErrorStyle,tags:["svelte-csf-v5"]};export{le as Default,pe as ErrorStyle,de as SuccessStyle,ce as WarningStyle,ie as __namedExportsOrder,H as default};
