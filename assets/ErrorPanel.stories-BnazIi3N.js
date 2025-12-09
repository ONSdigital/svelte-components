import{a as u,j as l,i as x,t as v,e as i,k as f,n as r,q as P,p as b,Z as k,h as w,_ as D}from"./iframe-CLJGxL-r.js";import{w as S,c as I,i as $,d as C}from"./create-runtime-stories-CX2JR82U.js";import{s as O}from"./style-CcY6orqc.js";import{s as V}from"./slot-BP_Qo1ZM.js";import{s as Y}from"./class-Dzh9Da8g.js";import{I as j}from"./Input-CAk9zTGu.js";import"./attributes-Co-1QMVx.js";import"./attributes-BEkmlMin.js";import"./input-BiGmZqS7.js";var q=l('<p class="ons-panel__error"><strong> </strong></p>'),B=l('<div id="number-of-employees-error"><span class="ons-panel__assistive-text ons-u-vh">Error:</span> <div class="ons-panel__body"><!> <!></div></div>');function p(s,e){let t=u(e,"message",8,null),a=u(e,"cls",8,null);var n=B(),d=f(r(n),2),m=r(d);{var g=o=>{var c=q(),h=r(c),E=r(h);v(()=>P(E,t())),i(o,c)};x(m,o=>{t()&&o(g)})}var y=f(m,2);V(y,e,"default",{},null),v(()=>Y(n,1,`ons-panel ons-panel--error ons-panel--no-title ${a()??""}`)),i(s,n)}p.__docgen={data:[{name:"message",visibility:"public",description:"Set an error message",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"ErrorPanel.svelte"};const M=`Use this component to show validation errors by wrapping form inputs and fieldsets.

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
`,N=(s,e=k)=>{var t=U();O(t,"",{},{padding:"12px"});var a=r(t);p(a,D(e,{children:(n,d)=>{j(n,{})},$$slots:{default:!0}})),i(s,t)},R={title:"Inputs/ErrorPanel",component:p,tags:["autodocs"],argTypes:{},parameters:S(M)},{Story:T}=C();var U=l("<div><!></div>");function _(s,e){b(e,!1),$(),T(s,{name:"Default",args:{message:"You entered the wrong text"},get template(){return N},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<ErrorPanel {...args}>
		<Input />
	</ErrorPanel>
</div>`}}}),w()}_.__docgen={data:[],name:"ErrorPanel.stories.svelte"};const Z=I(_,R),W=["Default"],X={...Z.Default,tags:["svelte-csf-v5"]};export{X as Default,W as __namedExportsOrder,R as default};
