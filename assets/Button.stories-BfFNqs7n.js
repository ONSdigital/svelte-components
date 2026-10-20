import{ab as B,e as b,as as C,ae as r,a as g,ad as k,f,at as w,b as S,t as _,c as I,s as $}from"./iframe-CwT5EAsy.js";import{c as D,w as L,i as G,d as A}from"./create-runtime-stories-BBueoODQ.js";import{B as y}from"./Button-D0BRbZiO.js";import{s as O}from"./style-CZqFqtXy.js";import"./preload-helper-Dp1pzeXC.js";import"./slot-BP_Qo1ZM.js";import"./attributes-DBnpCygu.js";import"./class-Dvitqb_Y.js";import"./attributes-DayBpKoh.js";import"./Icon-qgurLuiN.js";import"./utils-VWytQRnm.js";import"./_commonjsHelpers-CqkleIqs.js";const T=`A button/link component that can be styled in various ways. It will render as an \`<a>\` link if it has an \`href\` property defined.\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { Button } from "@onsvisual/svelte-components";\r
\r
  // Define your own function on click\r
  const handleClick = (e) => console.log(e);\r
<\/script>\r
\r
<!-- Standard button with on:click function -->\r
<Button on:click="{handleClick}">Button text</Button>\r
\r
<!-- Button-styled link with href -->\r
<Button href="#">Link text</Button>\r
\`\`\`\r
`,t=(d,s=C)=>{var a=P();let l;var c=I(a);y(c,w(s,{children:(o,u)=>{var i=S();_(()=>$(i,s().text)),g(o,i)},$$slots:{default:!0}})),_(()=>{var o;return l=O(a,"",l,{padding:"12px",background:((o=s())==null?void 0:o.variant)==="ghost"?"var(--ons-color-ocean-blue)":null})}),g(d,a)},H={title:"Form elements/Button",component:y,tags:["autodocs"],argTypes:{type:{options:["button","submit","reset"],control:{type:"select"}},variant:{options:["primary","secondary","ghost"],control:{type:"select"}},icon:{control:{type:"select"}},iconPosition:{options:["before","after"],control:{type:"select"}}},parameters:L(T)},{Story:e}=A();var P=f("<div><!></div>"),E=f("<!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function x(d,s){B(s,!1),G();var a=E(),l=b(a);e(l,{name:"Default",args:{text:"Primary button"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
>\r
	<Button {...args}>{args.text}</Button>\r
</div>`}}});var c=r(l,2);e(c,{name:"Link",args:{text:"Button-styled link",href:"#"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
>\r
	<Button {...args}>{args.text}</Button>\r
</div>`}}});var o=r(c,2);e(o,{name:"Secondary",args:{text:"Secondary button",variant:"secondary"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
>\r
	<Button {...args}>{args.text}</Button>\r
</div>`}}});var u=r(o,2);e(u,{name:"Ghost",args:{text:"Ghost button",variant:"ghost"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
>\r
	<Button {...args}>{args.text}</Button>\r
</div>`}}});var i=r(u,2);e(i,{name:"Small",args:{text:"Small button",small:!0},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
>\r
	<Button {...args}>{args.text}</Button>\r
</div>`}}});var v=r(i,2);e(v,{name:"Icon before",args:{text:"Download",icon:"download"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
>\r
	<Button {...args}>{args.text}</Button>\r
</div>`}}});var p=r(v,2);e(p,{name:"Icon after",args:{text:"Continue",icon:"arrow",iconPosition:"after"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
>\r
	<Button {...args}>{args.text}</Button>\r
</div>`}}});var m=r(p,2);e(m,{name:"Icon only, hidden text",args:{text:"Search",icon:"search",hideLabel:!0},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
>\r
	<Button {...args}>{args.text}</Button>\r
</div>`}}});var h=r(m,2);e(h,{name:"Custom colour button",args:{text:"Small button",icon:"cross",color:"#00a3a6",small:!0},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
>\r
	<Button {...args}>{args.text}</Button>\r
</div>`}}}),g(d,a),k()}x.__docgen={data:[],name:"Button.stories.svelte"};const n=D(x,H),W=["Default","Link","Secondary","Ghost","Small","IconBefore","IconAfter","IconOnlyHiddenText","CustomColourButton"],X={...n.Default,tags:["svelte-csf-v5"]},Y={...n.Link,tags:["svelte-csf-v5"]},Z={...n.Secondary,tags:["svelte-csf-v5"]},tt={...n.Ghost,tags:["svelte-csf-v5"]},et={...n.Small,tags:["svelte-csf-v5"]},nt={...n.IconBefore,tags:["svelte-csf-v5"]},rt={...n.IconAfter,tags:["svelte-csf-v5"]},ot={...n.IconOnlyHiddenText,tags:["svelte-csf-v5"]},at={...n.CustomColourButton,tags:["svelte-csf-v5"]};export{at as CustomColourButton,X as Default,tt as Ghost,rt as IconAfter,nt as IconBefore,ot as IconOnlyHiddenText,Y as Link,Z as Secondary,et as Small,W as __namedExportsOrder,H as default};
