import{p as B,j as f,f as b,Z as C,k as r,e as g,h as k,_ as w,n as I,t as _,V as S,q as $}from"./iframe-fMuWBKru.js";import{w as D,c as L,i as G,d as A}from"./create-runtime-stories-D8bYQZX6.js";import{s as O}from"./style-CcY6orqc.js";import{B as y}from"./Button-BwFFe-En.js";import"./attributes-Co-1QMVx.js";import"./slot-BP_Qo1ZM.js";import"./attributes-BR6Sanex.js";import"./class-Dzh9Da8g.js";import"./Icon-BThoL3Rh.js";import"./utils-VWytQRnm.js";import"./_commonjsHelpers-CqkleIqs.js";const T=`A button/link component that can be styled in various ways. It will render as an \`<a>\` link if it has an \`href\` property defined.\r
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
`,t=(d,s=C)=>{var a=P();let l;var c=I(a);y(c,w(s,{children:(o,u)=>{var i=S();_(()=>$(i,s().text)),g(o,i)},$$slots:{default:!0}})),_(()=>{var o;return l=O(a,"",l,{padding:"12px",background:((o=s())==null?void 0:o.variant)==="ghost"?"var(--ons-color-ocean-blue)":null})}),g(d,a)},H={title:"Inputs/Button",component:y,tags:["autodocs"],argTypes:{type:{options:["button","submit","reset"],control:{type:"select"}},variant:{options:["primary","secondary","ghost"],control:{type:"select"}},icon:{control:{type:"select"}},iconPosition:{options:["before","after"],control:{type:"select"}}},parameters:D(T)},{Story:n}=A();var P=f("<div><!></div>"),j=f("<!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function x(d,s){B(s,!1),G();var a=j(),l=b(a);n(l,{name:"Default",args:{text:"Primary button"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
>\r
	<Button {...args}>{args.text}</Button>\r
</div>`}}});var c=r(l,2);n(c,{name:"Link",args:{text:"Button-styled link",href:"#"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
>\r
	<Button {...args}>{args.text}</Button>\r
</div>`}}});var o=r(c,2);n(o,{name:"Secondary",args:{text:"Secondary button",variant:"secondary"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
>\r
	<Button {...args}>{args.text}</Button>\r
</div>`}}});var u=r(o,2);n(u,{name:"Ghost",args:{text:"Ghost button",variant:"ghost"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
>\r
	<Button {...args}>{args.text}</Button>\r
</div>`}}});var i=r(u,2);n(i,{name:"Small",args:{text:"Small button",small:!0},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
>\r
	<Button {...args}>{args.text}</Button>\r
</div>`}}});var v=r(i,2);n(v,{name:"Icon before",args:{text:"Download",icon:"download"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
>\r
	<Button {...args}>{args.text}</Button>\r
</div>`}}});var p=r(v,2);n(p,{name:"Icon after",args:{text:"Continue",icon:"arrow",iconPosition:"after"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
>\r
	<Button {...args}>{args.text}</Button>\r
</div>`}}});var m=r(p,2);n(m,{name:"Icon only, hidden text",args:{text:"Search",icon:"search",hideLabel:!0},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
>\r
	<Button {...args}>{args.text}</Button>\r
</div>`}}});var h=r(m,2);n(h,{name:"Custom colour button",args:{text:"Small button",icon:"cross",color:"#00a3a6",small:!0},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
>\r
	<Button {...args}>{args.text}</Button>\r
</div>`}}}),g(d,a),k()}x.__docgen={data:[],name:"Button.stories.svelte"};const e=L(x,H),Q=["Default","Link","Secondary","Ghost","Small","IconBefore","IconAfter","IconOnlyHiddenText","CustomColourButton"],U={...e.Default,tags:["svelte-csf-v5"]},W={...e.Link,tags:["svelte-csf-v5"]},X={...e.Secondary,tags:["svelte-csf-v5"]},Y={...e.Ghost,tags:["svelte-csf-v5"]},tt={...e.Small,tags:["svelte-csf-v5"]},nt={...e.IconBefore,tags:["svelte-csf-v5"]},et={...e.IconAfter,tags:["svelte-csf-v5"]},rt={...e.IconOnlyHiddenText,tags:["svelte-csf-v5"]},ot={...e.CustomColourButton,tags:["svelte-csf-v5"]};export{ot as CustomColourButton,U as Default,Y as Ghost,et as IconAfter,nt as IconBefore,rt as IconOnlyHiddenText,W as Link,X as Secondary,tt as Small,Q as __namedExportsOrder,H as default};
