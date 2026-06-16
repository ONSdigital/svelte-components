import{p as x,i as N,t as O,a as l,f as p,c as i,ae as c,s as A,ab as B,e as C,as as I,ad as L,at as M,d as V}from"./iframe-BR4MEgmA.js";import{c as P,w as R,i as Y,d as Z}from"./create-runtime-stories-BCU5wvzh.js";import{s as j}from"./slot-BP_Qo1ZM.js";import{s as k}from"./class-BRzkbxqU.js";import{h as q}from"./html-CETvwEQT.js";import{s as z}from"./style-B5SUVlSu.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DayBpKoh.js";var F=p('<div class="ons-panel__icon" aria-hidden="true">!</div>'),G=p('<span class="ons-panel__icon ons-u-fs-r"><svg class="ons-icon" viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg" focusable="false" fill="currentColor" role="img" title="ons-icon-check"><path d="M14.35,3.9l-.71-.71a.5.5,0,0,0-.71,0h0L5.79,10.34,3.07,7.61a.51.51,0,0,0-.71,0l-.71.71a.51.51,0,0,0,0,.71l3.78,3.78a.5.5,0,0,0,.71,0h0L14.35,4.6A.5.5,0,0,0,14.35,3.9Z" transform="translate(-1.51 -3.04)"></path></svg></span>'),H=p('<div><div class="ons-u-bg--tr"><!> <span class="ons-panel__assistive-text ons-u-vh"> </span> <!> <div class="ons-panel__body"><div><!></div></div></div></div>');function _(d,t){let e=x(t,"mode",8,"info"),a=x(t,"cls",8,null);var s=H();let o;var r=i(s),m=i(r);{var $=n=>{var g=F();l(n,g)};N(m,n=>{e()==="warning"&&n($)})}var y=c(m,2),D=i(y),h=c(y,2);{var E=n=>{var g=G();l(n,g)};N(h,n=>{e()==="success"&&n(E)})}var W=c(h,2),S=i(W);let w;var T=i(S);j(T,t,"default",{},null),O(()=>{o=k(s,1,`ons-panel ons-panel--no-title ${a()??""}`,null,o,{"ons-panel--info":e()==="info","ons-panel--warn":e()==="warning","ons-panel--error":e()==="error","ons-panel--success":e()==="success"}),A(D,e()==="warning"?"Warning:":e()==="success"?"Completed:":e()==="error"?"Error:":"Important information:"),w=k(S,1,"default-line-height",null,w,{"ons-u-fs-r":e()!=="warning"})}),l(d,s)}_.__docgen={data:[{name:"mode",visibility:"public",description:"Sets the mode/colour of the notice",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"info",text:'"info"'},{kind:"const",type:"string",value:"success",text:'"success"'},{kind:"const",type:"string",value:"error",text:'"error"'},{kind:"const",type:"string",value:"warning",text:'"warning"'}],text:'"info" | "success" | "error" | "warning"'},static:!1,readonly:!1,defaultValue:'"info"'},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"Notice.svelte"};const J=`Container for displaying notices on a page.

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
`,v=(d,t=I)=>{var e=Q();z(e,"",{},{padding:"12px"});var a=i(e);_(a,M(t,{children:(s,o)=>{var r=V(),m=C(r);q(m,()=>t().content),l(s,r)},$$slots:{default:!0}})),l(d,e)},K={title:"Information and media/Notice",component:_,tags:["autodocs"],argTypes:{mode:{control:{type:"select"}}},parameters:R(J)},{Story:f}=Z();var Q=p("<div><!></div>"),U=p("<!> <!> <!> <!>",1);function b(d,t){B(t,!1),Y();var e=U(),a=C(e);f(a,{name:"Default",args:{content:"This is some helpful information."},get template(){return v},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Notice {...args}>
		{@html args.content}
	</Notice>
</div>`}}});var s=c(a,2);f(s,{name:"Warning style",args:{mode:"warning",content:"This is some important information you need to know."},get template(){return v},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Notice {...args}>
		{@html args.content}
	</Notice>
</div>`}}});var o=c(s,2);f(o,{name:"Success style",args:{mode:"success",content:"You successfully submitted some information."},get template(){return v},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Notice {...args}>
		{@html args.content}
	</Notice>
</div>`}}});var r=c(o,2);f(r,{name:"Error style",args:{mode:"error",content:"An unexpected error has occurred."},get template(){return v},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Notice {...args}>
		{@html args.content}
	</Notice>
</div>`}}}),l(d,e),L()}b.__docgen={data:[],name:"Notice.stories.svelte"};const u=P(b,K),ie=["Default","WarningStyle","SuccessStyle","ErrorStyle"],le={...u.Default,tags:["svelte-csf-v5"]},ce={...u.WarningStyle,tags:["svelte-csf-v5"]},de={...u.SuccessStyle,tags:["svelte-csf-v5"]},pe={...u.ErrorStyle,tags:["svelte-csf-v5"]};export{le as Default,pe as ErrorStyle,de as SuccessStyle,ce as WarningStyle,ie as __namedExportsOrder,K as default};
