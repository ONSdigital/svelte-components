import{p as v,i as x,ak as E,t as u,a as i,f as l,ae as f,c as n,al as _,s as P,ab as w,ad as D,av as I}from"./iframe-BqRfKcLk.js";import{c as S,w as $,i as C,d as O}from"./create-runtime-stories-Du911T6H.js";import{s as V}from"./class-37_mtU4-.js";import{I as Y}from"./Input-C9FOp5jw.js";import{s as B}from"./style-DoyTnQz4.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DayBpKoh.js";import"./attributes-CkMeemA2.js";import"./input-CGF0oqCY.js";var F=l('<p class="ons-panel__error"><strong> </strong></p>'),M=l('<div id="number-of-employees-error"><span class="ons-panel__assistive-text ons-u-vh">Error:</span> <div class="ons-panel__body"><!> <!></div></div>');function p(r,e){let t=v(e,"message",3,null),a=v(e,"cls",3,null);var s=M(),d=f(n(s),2),m=n(d);{var y=o=>{var c=F(),b=n(c),k=n(b);u(()=>P(k,t())),i(o,c)};x(m,o=>{t()&&o(y)})}var h=f(m,2);E(h,()=>e.children??_),u(()=>V(s,1,`ons-panel ons-panel--error ons-panel--no-title ${a()??""}`)),i(r,s)}p.__docgen={data:[{name:"children",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"message",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"cls",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"ErrorPanel.svelte"};const N=`Use this component to show validation errors by wrapping form inputs and fieldsets.\r
\r
Based on [this ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/error).\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { ErrorPanel, Input } from "@onsvisual/svelte-components";\r
<\/script>\r
\r
<ErrorPanel message="You enterered the wrong text">\r
  <Input/>\r
</ErrorPanel>\r
\`\`\`\r
`,R=(r,e=_)=>{var t=j();B(t,"",{},{padding:"12px"});var a=n(t);p(a,I(e,{children:(s,d)=>{Y(s,{})},$$slots:{default:!0}})),i(r,t)},T={title:"Form elements/ErrorPanel",component:p,tags:["autodocs"],argTypes:{},parameters:$(N)},{Story:U}=O();var j=l("<div><!></div>");function g(r,e){w(e,!1),C(),U(r,{name:"Default",args:{message:"You entered the wrong text"},get template(){return R},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">\r
	<ErrorPanel {...args}>\r
		<Input />\r
	</ErrorPanel>\r
</div>`}}}),D()}g.__docgen={data:[],name:"ErrorPanel.stories.svelte"};const q=S(g,T),X=["Default"],Z={...q.Default,tags:["svelte-csf-v5"]};export{Z as Default,X as __namedExportsOrder,T as default};
