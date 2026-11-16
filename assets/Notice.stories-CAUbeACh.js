import{p as x,i as k,s as A,t as B,a as l,f as p,ah as c,c as i,n as C,b as I,ad as L,h as b,af as M,ax as V,e as P}from"./iframe-DGWWVtAh.js";import{c as R,w as Y,i as Z,d as j}from"./create-runtime-stories-DpqZ-Xbz.js";import{s as N}from"./class-5fErMqfb.js";import{h as q}from"./html-CLPjfGOu.js";import{s as z}from"./style-Cmzoymny.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DayBpKoh.js";var F=p('<div class="ons-panel__icon" aria-hidden="true">!</div>'),G=p('<span class="ons-panel__icon ons-u-fs-r"><svg class="ons-icon" viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg" focusable="false" fill="currentColor" role="img" title="ons-icon-check"><path d="M14.35,3.9l-.71-.71a.5.5,0,0,0-.71,0h0L5.79,10.34,3.07,7.61a.51.51,0,0,0-.71,0l-.71.71a.51.51,0,0,0,0,.71l3.78,3.78a.5.5,0,0,0,.71,0h0L14.35,4.6A.5.5,0,0,0,14.35,3.9Z" transform="translate(-1.51 -3.04)"></path></svg></span>'),H=p('<div><div class="ons-u-bg--tr"><!> <span class="ons-panel__assistive-text ons-u-vh"> </span> <!> <div class="ons-panel__body"><div><!></div></div></div></div>');function _(d,t){let e=x(t,"mode",3,"info"),a=x(t,"cls",3,null);var n=H();let o;var r=i(n),v=i(r);{var D=s=>{var g=F();l(s,g)};k(v,s=>{e()==="warning"&&s(D)})}var y=c(v,2),E=i(y),h=c(y,2);{var W=s=>{var g=G();l(s,g)};k(h,s=>{e()==="success"&&s(W)})}var T=c(h,2),S=i(T);let w;var O=i(S);A(O,()=>t.children??C),B(()=>{o=N(n,1,`ons-panel ons-panel--no-title ${a()??""}`,null,o,{"ons-panel--info":e()==="info","ons-panel--warn":e()==="warning","ons-panel--error":e()==="error","ons-panel--success":e()==="success"}),I(E,e()==="warning"?"Warning:":e()==="success"?"Completed:":e()==="error"?"Error:":"Important information:"),w=N(S,1,"default-line-height",null,w,{"ons-u-fs-r":e()!=="warning"})}),l(d,n)}_.__docgen={data:[{name:"children",visibility:"public",description:"Child content (snippet)",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"mode",visibility:"public",description:"Sets the mode/colour of the notice",keywords:[],kind:"let",type:{kind:"union",type:[{kind:"const",type:"string",value:"info",text:'"info"'},{kind:"const",type:"string",value:"success",text:'"success"'},{kind:"const",type:"string",value:"error",text:'"error"'},{kind:"const",type:"string",value:"warning",text:'"warning"'}],text:'"info" | "success" | "error" | "warning"'},static:!1,readonly:!1,defaultValue:'"info"'},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"Notice.svelte"};const J=`Container for displaying notices on a page.

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
`,m=(d,t=C)=>{var e=Q();z(e,"",{},{padding:"12px"});var a=i(e);_(a,V(t,{children:(n,o)=>{var r=P(),v=b(r);q(v,()=>t().content),l(n,r)},$$slots:{default:!0}})),l(d,e)},K={title:"Information and media/Notice",component:_,tags:["autodocs"],argTypes:{mode:{control:{type:"select"}}},parameters:Y(J)},{Story:f}=j();var Q=p("<div><!></div>"),U=p("<!> <!> <!> <!>",1);function $(d,t){L(t,!1),Z();var e=U(),a=b(e);f(a,{name:"Default",args:{content:"This is some helpful information."},get template(){return m},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Notice {...args}>
		{@html args.content}
	</Notice>
</div>`}}});var n=c(a,2);f(n,{name:"Warning style",args:{mode:"warning",content:"This is some important information you need to know."},get template(){return m},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Notice {...args}>
		{@html args.content}
	</Notice>
</div>`}}});var o=c(n,2);f(o,{name:"Success style",args:{mode:"success",content:"You successfully submitted some information."},get template(){return m},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Notice {...args}>
		{@html args.content}
	</Notice>
</div>`}}});var r=c(o,2);f(r,{name:"Error style",args:{mode:"error",content:"An unexpected error has occurred."},get template(){return m},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Notice {...args}>
		{@html args.content}
	</Notice>
</div>`}}}),l(d,e),M()}$.__docgen={data:[],name:"Notice.stories.svelte"};const u=R($,K),re=["Default","WarningStyle","SuccessStyle","ErrorStyle"],ie={...u.Default,tags:["svelte-csf-v5"]},le={...u.WarningStyle,tags:["svelte-csf-v5"]},ce={...u.SuccessStyle,tags:["svelte-csf-v5"]},de={...u.ErrorStyle,tags:["svelte-csf-v5"]};export{ie as Default,de as ErrorStyle,ce as SuccessStyle,le as WarningStyle,re as __namedExportsOrder,K as default};
