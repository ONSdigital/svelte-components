import{p as B,j as f,f as b,Z as C,k as o,e as g,h as k,_ as w,n as I,t as _,V as S,q as $}from"./iframe-BMlGGSEh.js";import{w as D,c as L,i as G,d as A}from"./create-runtime-stories-DY8P5Zzy.js";import{s as O}from"./style-CcY6orqc.js";import{B as y}from"./Button-CTPJFgvc.js";import"./attributes-Co-1QMVx.js";import"./slot-BP_Qo1ZM.js";import"./attributes-In2loFLY.js";import"./class-Dzh9Da8g.js";import"./Icon-DMa0ss11.js";import"./utils-VWytQRnm.js";import"./_commonjsHelpers-CqkleIqs.js";const T=`A button/link component that can be styled in various ways. It will render as an \`<a>\` link if it has an \`href\` property defined.

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
`,t=(d,r=C)=>{var s=P();let l;var c=I(s);y(c,w(r,{children:(a,u)=>{var i=S();_(()=>$(i,r().text)),g(a,i)},$$slots:{default:!0}})),_(()=>{var a;return l=O(s,"",l,{padding:"12px",background:((a=r())==null?void 0:a.variant)==="ghost"?"var(--ons-color-ocean-blue)":null})}),g(d,s)},H={title:"Inputs/Button",component:y,tags:["autodocs"],argTypes:{type:{options:["button","submit","reset"],control:{type:"select"}},variant:{options:["primary","secondary","ghost"],control:{type:"select"}},icon:{control:{type:"select"}},iconPosition:{options:["before","after"],control:{type:"select"}}},parameters:D(T)},{Story:n}=A();var P=f("<div><!></div>"),j=f("<!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function x(d,r){B(r,!1),G();var s=j(),l=b(s);n(l,{name:"Default",args:{text:"Primary button"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div
	style:padding="12px"
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
>
	<Button {...args}>{args.text}</Button>
</div>`}}});var c=o(l,2);n(c,{name:"Link",args:{text:"Button-styled link",href:"#"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div
	style:padding="12px"
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
>
	<Button {...args}>{args.text}</Button>
</div>`}}});var a=o(c,2);n(a,{name:"Secondary",args:{text:"Secondary button",variant:"secondary"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div
	style:padding="12px"
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
>
	<Button {...args}>{args.text}</Button>
</div>`}}});var u=o(a,2);n(u,{name:"Ghost",args:{text:"Ghost button",variant:"ghost"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div
	style:padding="12px"
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
>
	<Button {...args}>{args.text}</Button>
</div>`}}});var i=o(u,2);n(i,{name:"Small",args:{text:"Small button",small:!0},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div
	style:padding="12px"
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
>
	<Button {...args}>{args.text}</Button>
</div>`}}});var v=o(i,2);n(v,{name:"Icon before",args:{text:"Download",icon:"download"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div
	style:padding="12px"
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
>
	<Button {...args}>{args.text}</Button>
</div>`}}});var p=o(v,2);n(p,{name:"Icon after",args:{text:"Continue",icon:"arrow",iconPosition:"after"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div
	style:padding="12px"
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
>
	<Button {...args}>{args.text}</Button>
</div>`}}});var m=o(p,2);n(m,{name:"Icon only, hidden text",args:{text:"Search",icon:"search",hideLabel:!0},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div
	style:padding="12px"
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
>
	<Button {...args}>{args.text}</Button>
</div>`}}});var h=o(m,2);n(h,{name:"Custom colour button",args:{text:"Small button",icon:"cross",color:"#00a3a6",small:!0},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div
	style:padding="12px"
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
>
	<Button {...args}>{args.text}</Button>
</div>`}}}),g(d,s),k()}x.__docgen={data:[],name:"Button.stories.svelte"};const e=L(x,H),Q=["Default","Link","Secondary","Ghost","Small","IconBefore","IconAfter","IconOnlyHiddenText","CustomColourButton"],U={...e.Default,tags:["svelte-csf-v5"]},W={...e.Link,tags:["svelte-csf-v5"]},X={...e.Secondary,tags:["svelte-csf-v5"]},Y={...e.Ghost,tags:["svelte-csf-v5"]},tt={...e.Small,tags:["svelte-csf-v5"]},nt={...e.IconBefore,tags:["svelte-csf-v5"]},et={...e.IconAfter,tags:["svelte-csf-v5"]},ot={...e.IconOnlyHiddenText,tags:["svelte-csf-v5"]},at={...e.CustomColourButton,tags:["svelte-csf-v5"]};export{at as CustomColourButton,U as Default,Y as Ghost,et as IconAfter,nt as IconBefore,ot as IconOnlyHiddenText,W as Link,X as Secondary,tt as Small,Q as __namedExportsOrder,H as default};
