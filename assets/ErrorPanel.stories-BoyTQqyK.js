import{p as u,i as x,t as v,a as i,f as l,ae as f,c as n,s as P,ab as b,as as w,ad as k,at as D}from"./iframe-CArMXtmx.js";import{c as S,w as I,i as $,d as C}from"./create-runtime-stories-BEqwKI8x.js";import{s as O}from"./slot-BP_Qo1ZM.js";import{s as V}from"./class-C3cnp_aW.js";import{I as Y}from"./Input-BB3vkZ8M.js";import{s as B}from"./style-qhnr2LWw.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DayBpKoh.js";import"./attributes-BmILT1Qd.js";import"./input-DfoGPF_I.js";var F=l('<p class="ons-panel__error"><strong> </strong></p>'),M=l('<div id="number-of-employees-error"><span class="ons-panel__assistive-text ons-u-vh">Error:</span> <div class="ons-panel__body"><!> <!></div></div>');function p(s,e){let t=u(e,"message",8,null),a=u(e,"cls",8,null);var r=M(),d=f(n(r),2),m=n(d);{var _=o=>{var c=F(),h=n(c),E=n(h);v(()=>P(E,t())),i(o,c)};x(m,o=>{t()&&o(_)})}var y=f(m,2);O(y,e,"default",{},null),v(()=>V(r,1,`ons-panel ons-panel--error ons-panel--no-title ${a()??""}`)),i(s,r)}p.__docgen={data:[{name:"message",visibility:"public",description:"Set an error message",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"ErrorPanel.svelte"};const N=`Use this component to show validation errors by wrapping form inputs and fieldsets.

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
`,R=(s,e=w)=>{var t=j();B(t,"",{},{padding:"12px"});var a=n(t);p(a,D(e,{children:(r,d)=>{Y(r,{})},$$slots:{default:!0}})),i(s,t)},T={title:"Form elements/ErrorPanel",component:p,tags:["autodocs"],argTypes:{},parameters:I(N)},{Story:U}=C();var j=l("<div><!></div>");function g(s,e){b(e,!1),$(),U(s,{name:"Default",args:{message:"You entered the wrong text"},get template(){return R},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<ErrorPanel {...args}>
		<Input />
	</ErrorPanel>
</div>`}}}),k()}g.__docgen={data:[],name:"ErrorPanel.stories.svelte"};const q=S(g,T),Z=["Default"],ee={...q.Default,tags:["svelte-csf-v5"]};export{ee as Default,Z as __namedExportsOrder,T as default};
