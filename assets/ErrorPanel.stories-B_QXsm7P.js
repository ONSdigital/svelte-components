import{a as u,j as l,i as x,t as v,e as i,k as f,n,q as P,p as b,Z as k,h as w,_ as D}from"./iframe-DblgdR9c.js";import{w as S,c as I,i as $,d as C}from"./create-runtime-stories-VjmG1RUC.js";import{s as O}from"./style-CcY6orqc.js";import{s as V}from"./slot-BP_Qo1ZM.js";import{s as Y}from"./class-Dzh9Da8g.js";import{I as j}from"./Input-ann8JfZv.js";import"./attributes-Co-1QMVx.js";import"./attributes-CRQ3k2v3.js";import"./input-ctfnhuMm.js";var q=l('<p class="ons-panel__error"><strong> </strong></p>'),B=l('<div id="number-of-employees-error"><span class="ons-panel__assistive-text ons-u-vh">Error:</span> <div class="ons-panel__body"><!> <!></div></div>');function p(r,e){let t=u(e,"message",8,null),a=u(e,"cls",8,null);var s=B(),d=f(n(s),2),m=n(d);{var g=o=>{var c=q(),h=n(c),E=n(h);v(()=>P(E,t())),i(o,c)};x(m,o=>{t()&&o(g)})}var y=f(m,2);V(y,e,"default",{},null),v(()=>Y(s,1,`ons-panel ons-panel--error ons-panel--no-title ${a()??""}`)),i(r,s)}p.__docgen={data:[{name:"message",visibility:"public",description:"Set an error message",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"ErrorPanel.svelte"};const M=`Use this component to show validation errors by wrapping form inputs and fieldsets.\r
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
`,N=(r,e=k)=>{var t=U();O(t,"",{},{padding:"12px"});var a=n(t);p(a,D(e,{children:(s,d)=>{j(s,{})},$$slots:{default:!0}})),i(r,t)},R={title:"Inputs/ErrorPanel",component:p,tags:["autodocs"],argTypes:{},parameters:S(M)},{Story:T}=C();var U=l("<div><!></div>");function _(r,e){b(e,!1),$(),T(r,{name:"Default",args:{message:"You entered the wrong text"},get template(){return N},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">\r
	<ErrorPanel {...args}>\r
		<Input />\r
	</ErrorPanel>\r
</div>`}}}),w()}_.__docgen={data:[],name:"ErrorPanel.stories.svelte"};const Z=I(_,R),W=["Default"],X={...Z.Default,tags:["svelte-csf-v5"]};export{X as Default,W as __namedExportsOrder,R as default};
