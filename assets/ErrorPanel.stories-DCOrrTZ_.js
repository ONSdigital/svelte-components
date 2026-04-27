import{p as u,f as i,i as x,t as v,j as l,J as f,k as n,K as P,A as b,W as k,I as w,X as D}from"./iframe-CfOETbja.js";import{w as S,c as I,i as $,d as C}from"./create-runtime-stories-COP3GmsY.js";import{s as O}from"./style-CNURdi_Z.js";import{s as V}from"./slot-BP_Qo1ZM.js";import{s as Y}from"./class-B9SFUanI.js";import{I as j}from"./Input-BOW3LWXP.js";import"./attributes-q36Eg1F8.js";import"./attributes-SGbATqK1.js";import"./input--oospc3h.js";var A=i('<p class="ons-panel__error"><strong> </strong></p>'),B=i('<div id="number-of-employees-error"><span class="ons-panel__assistive-text ons-u-vh">Error:</span> <div class="ons-panel__body"><!> <!></div></div>');function p(s,e){let t=u(e,"message",8,null),a=u(e,"cls",8,null);var r=B(),d=f(n(r),2),m=n(d);{var g=o=>{var c=A(),h=n(c),E=n(h);v(()=>P(E,t())),l(o,c)};x(m,o=>{t()&&o(g)})}var y=f(m,2);V(y,e,"default",{},null),v(()=>Y(r,1,`ons-panel ons-panel--error ons-panel--no-title ${a()??""}`)),l(s,r)}p.__docgen={data:[{name:"message",visibility:"public",description:"Set an error message",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"ErrorPanel.svelte"};const F=`Use this component to show validation errors by wrapping form inputs and fieldsets.

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
`,J=(s,e=k)=>{var t=N();O(t,"",{},{padding:"12px"});var a=n(t);p(a,D(e,{children:(r,d)=>{j(r,{})},$$slots:{default:!0}})),l(s,t)},K={title:"Form elements/ErrorPanel",component:p,tags:["autodocs"],argTypes:{},parameters:S(F)},{Story:M}=C();var N=i("<div><!></div>");function _(s,e){b(e,!1),$(),M(s,{name:"Default",args:{message:"You entered the wrong text"},get template(){return J},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<ErrorPanel {...args}>
		<Input />
	</ErrorPanel>
</div>`}}}),w()}_.__docgen={data:[],name:"ErrorPanel.stories.svelte"};const R=I(_,K),Q=["Default"],Z={...R.Default,tags:["svelte-csf-v5"]};export{Z as Default,Q as __namedExportsOrder,K as default};
