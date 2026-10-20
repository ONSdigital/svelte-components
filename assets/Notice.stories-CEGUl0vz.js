import{p as x,i as k,ak as B,t as I,a as l,f as p,ae as c,c as i,al as b,s as L,ab as M,e as C,ad as O,av as V,d as P}from"./iframe-BqRfKcLk.js";import{c as R,w as Y,i as Z,d as j}from"./create-runtime-stories-Du911T6H.js";import{s as N}from"./class-37_mtU4-.js";import{h as q}from"./html-QDNSwytG.js";import{s as z}from"./style-DoyTnQz4.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DayBpKoh.js";var F=p('<div class="ons-panel__icon" aria-hidden="true">!</div>'),G=p('<span class="ons-panel__icon ons-u-fs-r"><svg class="ons-icon" viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg" focusable="false" fill="currentColor" role="img" title="ons-icon-check"><path d="M14.35,3.9l-.71-.71a.5.5,0,0,0-.71,0h0L5.79,10.34,3.07,7.61a.51.51,0,0,0-.71,0l-.71.71a.51.51,0,0,0,0,.71l3.78,3.78a.5.5,0,0,0,.71,0h0L14.35,4.6A.5.5,0,0,0,14.35,3.9Z" transform="translate(-1.51 -3.04)"></path></svg></span>'),H=p('<div><div class="ons-u-bg--tr"><!> <span class="ons-panel__assistive-text ons-u-vh"> </span> <!> <div class="ons-panel__body"><div><!></div></div></div></div>');function _(d,t){let e=x(t,"mode",3,"info"),r=x(t,"cls",3,null);var s=H();let a;var o=i(s),v=i(o);{var D=n=>{var g=F();l(n,g)};k(v,n=>{e()==="warning"&&n(D)})}var y=c(v,2),E=i(y),h=c(y,2);{var W=n=>{var g=G();l(n,g)};k(h,n=>{e()==="success"&&n(W)})}var T=c(h,2),w=i(T);let S;var A=i(w);B(A,()=>t.children??b),I(()=>{a=N(s,1,`ons-panel ons-panel--no-title ${r()??""}`,null,a,{"ons-panel--info":e()==="info","ons-panel--warn":e()==="warning","ons-panel--error":e()==="error","ons-panel--success":e()==="success"}),L(E,e()==="warning"?"Warning:":e()==="success"?"Completed:":e()==="error"?"Error:":"Important information:"),S=N(w,1,"default-line-height",null,S,{"ons-u-fs-r":e()!=="warning"})}),l(d,s)}_.__docgen={data:[{name:"children",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"mode",visibility:"public",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"info",text:'"info"'},{kind:"const",type:"string",value:"success",text:'"success"'},{kind:"const",type:"string",value:"error",text:'"error"'},{kind:"const",type:"string",value:"warning",text:'"warning"'}],text:'"info" | "success" | "error" | "warning"'},static:!1,readonly:!1,defaultValue:'"info"'},{name:"cls",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"Notice.svelte"};const J=`Container for displaying notices on a page.\r
\r
Based on this [ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/panel).\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { Notice } from "@onsvisual/svelte-components";\r
<\/script>\r
\r
<Notice>\r
  <p>This is the text of the notice.</p>\r
</Notice>\r
\`\`\`\r
`,m=(d,t=b)=>{var e=Q();z(e,"",{},{padding:"12px"});var r=i(e);_(r,V(t,{children:(s,a)=>{var o=P(),v=C(o);q(v,()=>t().content),l(s,o)},$$slots:{default:!0}})),l(d,e)},K={title:"Information and media/Notice",component:_,tags:["autodocs"],argTypes:{mode:{control:{type:"select"}}},parameters:Y(J)},{Story:f}=j();var Q=p("<div><!></div>"),U=p("<!> <!> <!> <!>",1);function $(d,t){M(t,!1),Z();var e=U(),r=C(e);f(r,{name:"Default",args:{content:"This is some helpful information."},get template(){return m},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">\r
	<Notice {...args}>\r
		{@html args.content}\r
	</Notice>\r
</div>`}}});var s=c(r,2);f(s,{name:"Warning style",args:{mode:"warning",content:"This is some important information you need to know."},get template(){return m},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">\r
	<Notice {...args}>\r
		{@html args.content}\r
	</Notice>\r
</div>`}}});var a=c(s,2);f(a,{name:"Success style",args:{mode:"success",content:"You successfully submitted some information."},get template(){return m},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">\r
	<Notice {...args}>\r
		{@html args.content}\r
	</Notice>\r
</div>`}}});var o=c(a,2);f(o,{name:"Error style",args:{mode:"error",content:"An unexpected error has occurred."},get template(){return m},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">\r
	<Notice {...args}>\r
		{@html args.content}\r
	</Notice>\r
</div>`}}}),l(d,e),O()}$.__docgen={data:[],name:"Notice.stories.svelte"};const u=R($,K),oe=["Default","WarningStyle","SuccessStyle","ErrorStyle"],ie={...u.Default,tags:["svelte-csf-v5"]},le={...u.WarningStyle,tags:["svelte-csf-v5"]},ce={...u.SuccessStyle,tags:["svelte-csf-v5"]},de={...u.ErrorStyle,tags:["svelte-csf-v5"]};export{ie as Default,de as ErrorStyle,ce as SuccessStyle,le as WarningStyle,oe as __namedExportsOrder,K as default};
