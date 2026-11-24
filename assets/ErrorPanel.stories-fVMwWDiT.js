import{p as f,i as E,s as k,t as v,a as i,f as l,ah as u,c as r,n as g,b as P,ad as w,af as S,ax as D}from"./iframe-f67rGsxv.js";import{c as C,w as I,i as $,d as O}from"./create-runtime-stories-Ua86Psvv.js";import{s as V}from"./class-8kYv-OY_.js";import{I as Y}from"./Input-BgNffEnL.js";import{s as B}from"./style-CYmCgZEu.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DayBpKoh.js";import"./attributes-jbjqwhbX.js";import"./input-B9QQkB2o.js";var F=l('<p class="ons-panel__error"><strong> </strong></p>'),M=l('<div id="number-of-employees-error"><span class="ons-panel__assistive-text ons-u-vh">Error:</span> <div class="ons-panel__body"><!> <!></div></div>');function p(s,e){let t=f(e,"message",3,null),a=f(e,"cls",3,null);var n=M(),d=u(r(n),2),m=r(d);{var y=o=>{var c=F(),x=r(c),b=r(x);v(()=>P(b,t())),i(o,c)};E(m,o=>{t()&&o(y)})}var h=u(m,2);k(h,()=>e.children??g),v(()=>V(n,1,`ons-panel ons-panel--error ons-panel--no-title ${a()??""}`)),i(s,n)}p.__docgen={data:[{name:"children",visibility:"public",description:"Child content (snippet)",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"message",visibility:"public",description:"Set an error message",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"ErrorPanel.svelte"};const N=`Use this component to show validation errors by wrapping form inputs and fieldsets.

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
`,R=(s,e=g)=>{var t=j();B(t,"",{},{padding:"12px"});var a=r(t);p(a,D(e,{children:(n,d)=>{Y(n,{})},$$slots:{default:!0}})),i(s,t)},T={title:"Form elements/ErrorPanel",component:p,tags:["autodocs"],argTypes:{},parameters:I(N)},{Story:U}=O();var j=l("<div><!></div>");function _(s,e){w(e,!1),$(),U(s,{name:"Default",args:{message:"You entered the wrong text"},get template(){return R},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<ErrorPanel {...args}>
		<Input />
	</ErrorPanel>
</div>`}}}),S()}_.__docgen={data:[],name:"ErrorPanel.stories.svelte"};const q=C(_,T),X=["Default"],Z={...q.Default,tags:["svelte-csf-v5"]};export{Z as Default,X as __namedExportsOrder,T as default};
