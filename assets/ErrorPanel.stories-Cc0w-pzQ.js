import{p as v,i as E,s as k,t as f,a as i,f as l,ah as u,c as r,n as _,b as P,ad as w,af as D,ax as I}from"./iframe-UWIgwT_c.js";import{c as S,w as $,i as C,d as O}from"./create-runtime-stories-WntTm4wH.js";import{s as V}from"./class-BWaliKvu.js";import{I as Y}from"./Input-CkviwVpw.js";import{s as B}from"./style-JgESTiB5.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DayBpKoh.js";import"./attributes-CxnnJe_I.js";import"./input-0oGdfHgL.js";var F=l('<p class="ons-panel__error"><strong> </strong></p>'),M=l('<div id="number-of-employees-error"><span class="ons-panel__assistive-text ons-u-vh">Error:</span> <div class="ons-panel__body"><!> <!></div></div>');function p(s,e){let t=v(e,"message",3,null),a=v(e,"cls",3,null);var n=M(),d=u(r(n),2),m=r(d);{var y=o=>{var c=F(),x=r(c),b=r(x);f(()=>P(b,t())),i(o,c)};E(m,o=>{t()&&o(y)})}var h=u(m,2);k(h,()=>e.children??_),f(()=>V(n,1,`ons-panel ons-panel--error ons-panel--no-title ${a()??""}`)),i(s,n)}p.__docgen={data:[{name:"children",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"message",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"cls",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"ErrorPanel.svelte"};const N=`Use this component to show validation errors by wrapping form inputs and fieldsets.

Based on [this ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/error).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { ErrorPanel, Input } from "@onsvisual/svelte-components";
<\/script>

<ErrorPanel message="You enterered the wrong text">
  <Input/>
</ErrorPanel>
\`\`\`
`,R=(s,e=_)=>{var t=j();B(t,"",{},{padding:"12px"});var a=r(t);p(a,I(e,{children:(n,d)=>{Y(n,{})},$$slots:{default:!0}})),i(s,t)},T={title:"Form elements/ErrorPanel",component:p,tags:["autodocs"],argTypes:{},parameters:$(N)},{Story:U}=O();var j=l("<div><!></div>");function g(s,e){w(e,!1),C(),U(s,{name:"Default",args:{message:"You entered the wrong text"},get template(){return R},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<ErrorPanel {...args}>
		<Input />
	</ErrorPanel>
</div>`}}}),D()}g.__docgen={data:[],name:"ErrorPanel.stories.svelte"};const q=S(g,T),X=["Default"],Z={...q.Default,tags:["svelte-csf-v5"]};export{Z as Default,X as __namedExportsOrder,T as default};
