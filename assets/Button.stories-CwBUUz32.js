import{p as x,j as f,f as B,Z as b,k as a,e as p,h as k,_ as w,n as C,t as m,V as I,q as S}from"./iframe-BT89WHcf.js";import{w as $,c as D,i as L,d as G}from"./create-runtime-stories-Bd4Sgtpw.js";import{s as A}from"./style-CcY6orqc.js";import{B as _}from"./Button-CJTopwvy.js";import"./attributes-Co-1QMVx.js";import"./slot-BP_Qo1ZM.js";import"./attributes-BZRH9-xu.js";import"./class-Dzh9Da8g.js";import"./Icon-BY1dP40x.js";const O=`A button/link component that can be styled in various ways. It will render as an \`<a>\` link if it has an \`href\` property defined.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Button } from "@onsvisual/svelte-components";

  // Define your own function on click
  const handleClick = (e) => console.log(e);
<\/script>

<!-- Standard button with on:click function -->
<Button on:click="{handleClick}">Button text</Button>

<!-- Button-styled link with href -->
<Button href="#">Link text</Button>
\`\`\`
`,t=(d,r=b)=>{var s=H();let l;var c=C(s);_(c,w(r,{children:(o,u)=>{var i=I();m(()=>S(i,r().text)),p(o,i)},$$slots:{default:!0}})),m(()=>{var o;return l=A(s,"",l,{padding:"12px",background:((o=r())==null?void 0:o.variant)==="ghost"?"var(--ons-color-ocean-blue)":null})}),p(d,s)},T={title:"Inputs/Button",component:_,tags:["autodocs"],argTypes:{type:{options:["button","submit","reset"],control:{type:"select"}},variant:{options:["primary","secondary","ghost"],control:{type:"select"}},icon:{options:["","arrow","search","download","tick","print","externalLink"],control:{type:"select"}},iconPosition:{options:["before","after"],control:{type:"select"}}},parameters:$(O)},{Story:n}=G();var H=f("<div><!></div>"),P=f("<!> <!> <!> <!> <!> <!> <!> <!>",1);function y(d,r){x(r,!1),L();var s=P(),l=B(s);n(l,{name:"Default",args:{text:"Primary button"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div
	style:padding="12px"
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
>
	<Button {...args}>{args.text}</Button>
</div>`}}});var c=a(l,2);n(c,{name:"Link",args:{text:"Button-styled link",href:"#"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div
	style:padding="12px"
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
>
	<Button {...args}>{args.text}</Button>
</div>`}}});var o=a(c,2);n(o,{name:"Secondary",args:{text:"Secondary button",variant:"secondary"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div
	style:padding="12px"
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
>
	<Button {...args}>{args.text}</Button>
</div>`}}});var u=a(o,2);n(u,{name:"Ghost",args:{text:"Ghost button",variant:"ghost"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div
	style:padding="12px"
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
>
	<Button {...args}>{args.text}</Button>
</div>`}}});var i=a(u,2);n(i,{name:"Small",args:{text:"Small button",small:!0},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div
	style:padding="12px"
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
>
	<Button {...args}>{args.text}</Button>
</div>`}}});var g=a(i,2);n(g,{name:"Icon before",args:{text:"Download",icon:"download"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div
	style:padding="12px"
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
>
	<Button {...args}>{args.text}</Button>
</div>`}}});var v=a(g,2);n(v,{name:"Icon after",args:{text:"Continue",icon:"arrow",iconPosition:"after"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div
	style:padding="12px"
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
>
	<Button {...args}>{args.text}</Button>
</div>`}}});var h=a(v,2);n(h,{name:"Icon only, hidden text",args:{text:"Search",icon:"search",hideLabel:!0},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div
	style:padding="12px"
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
>
	<Button {...args}>{args.text}</Button>
</div>`}}}),p(d,s),k()}y.__docgen={data:[],name:"Button.stories.svelte"};const e=D(y,T),J=["Default","Link","Secondary","Ghost","Small","IconBefore","IconAfter","IconOnlyHiddenText"],K={...e.Default,tags:["svelte-csf-v5"]},N={...e.Link,tags:["svelte-csf-v5"]},Q={...e.Secondary,tags:["svelte-csf-v5"]},U={...e.Ghost,tags:["svelte-csf-v5"]},W={...e.Small,tags:["svelte-csf-v5"]},X={...e.IconBefore,tags:["svelte-csf-v5"]},Y={...e.IconAfter,tags:["svelte-csf-v5"]},tt={...e.IconOnlyHiddenText,tags:["svelte-csf-v5"]};export{K as Default,U as Ghost,Y as IconAfter,X as IconBefore,tt as IconOnlyHiddenText,N as Link,Q as Secondary,W as Small,J as __namedExportsOrder,T as default};
