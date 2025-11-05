import{p as x,j as f,f as B,Z as b,k as o,e as p,h as k,_ as w,n as C,t as m,V as I,q as S}from"./iframe-Cap6nYun.js";import{w as $,c as D,i as L,d as G}from"./create-runtime-stories-BOuZQ2dE.js";import{s as A}from"./style-CcY6orqc.js";import{B as _}from"./Button-8vwIzwgB.js";import"./attributes-Co-1QMVx.js";import"./slot-BP_Qo1ZM.js";import"./attributes-3iI9tcbp.js";import"./class-Dzh9Da8g.js";import"./Icon-X7gPyhL7.js";const O=`A button/link component that can be styled in various ways. It will render as an \`<a>\` link if it has an \`href\` property defined.\r
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
`,t=(d,s=b)=>{var a=H();let l;var c=C(a);_(c,w(s,{children:(r,u)=>{var i=I();m(()=>S(i,s().text)),p(r,i)},$$slots:{default:!0}})),m(()=>{var r;return l=A(a,"",l,{padding:"12px",background:((r=s())==null?void 0:r.variant)==="ghost"?"var(--ons-color-ocean-blue)":null})}),p(d,a)},T={title:"Inputs/Button",component:_,tags:["autodocs"],argTypes:{type:{options:["button","submit","reset"],control:{type:"select"}},variant:{options:["primary","secondary","ghost"],control:{type:"select"}},icon:{options:["","arrow","search","download","tick","print","externalLink"],control:{type:"select"}},iconPosition:{options:["before","after"],control:{type:"select"}}},parameters:$(O)},{Story:n}=G();var H=f("<div><!></div>"),P=f("<!> <!> <!> <!> <!> <!> <!> <!>",1);function y(d,s){x(s,!1),L();var a=P(),l=B(a);n(l,{name:"Default",args:{text:"Primary button"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
>\r
	<Button {...args}>{args.text}</Button>\r
</div>`}}});var c=o(l,2);n(c,{name:"Link",args:{text:"Button-styled link",href:"#"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
>\r
	<Button {...args}>{args.text}</Button>\r
</div>`}}});var r=o(c,2);n(r,{name:"Secondary",args:{text:"Secondary button",variant:"secondary"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
>\r
	<Button {...args}>{args.text}</Button>\r
</div>`}}});var u=o(r,2);n(u,{name:"Ghost",args:{text:"Ghost button",variant:"ghost"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
>\r
	<Button {...args}>{args.text}</Button>\r
</div>`}}});var i=o(u,2);n(i,{name:"Small",args:{text:"Small button",small:!0},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
>\r
	<Button {...args}>{args.text}</Button>\r
</div>`}}});var g=o(i,2);n(g,{name:"Icon before",args:{text:"Download",icon:"download"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
>\r
	<Button {...args}>{args.text}</Button>\r
</div>`}}});var v=o(g,2);n(v,{name:"Icon after",args:{text:"Continue",icon:"arrow",iconPosition:"after"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
>\r
	<Button {...args}>{args.text}</Button>\r
</div>`}}});var h=o(v,2);n(h,{name:"Icon only, hidden text",args:{text:"Search",icon:"search",hideLabel:!0},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
>\r
	<Button {...args}>{args.text}</Button>\r
</div>`}}}),p(d,a),k()}y.__docgen={data:[],name:"Button.stories.svelte"};const e=D(y,T),J=["Default","Link","Secondary","Ghost","Small","IconBefore","IconAfter","IconOnlyHiddenText"],K={...e.Default,tags:["svelte-csf-v5"]},N={...e.Link,tags:["svelte-csf-v5"]},Q={...e.Secondary,tags:["svelte-csf-v5"]},U={...e.Ghost,tags:["svelte-csf-v5"]},W={...e.Small,tags:["svelte-csf-v5"]},X={...e.IconBefore,tags:["svelte-csf-v5"]},Y={...e.IconAfter,tags:["svelte-csf-v5"]},tt={...e.IconOnlyHiddenText,tags:["svelte-csf-v5"]};export{K as Default,U as Ghost,Y as IconAfter,X as IconBefore,tt as IconOnlyHiddenText,N as Link,Q as Secondary,W as Small,J as __namedExportsOrder,T as default};
