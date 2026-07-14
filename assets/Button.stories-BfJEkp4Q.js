import{ab as B,e as b,as as C,ae as o,a as g,ad as k,f,at as w,b as S,t as _,c as I,s as $}from"./iframe-Cm8Z88bU.js";import{c as D,w as L,i as G,d as A}from"./create-runtime-stories-B6v954qL.js";import{B as y}from"./Button-Ve6nUd_8.js";import{s as O}from"./style-DfLPGW0J.js";import"./preload-helper-Dp1pzeXC.js";import"./slot-BP_Qo1ZM.js";import"./attributes-CVnBJKWV.js";import"./class-Dwepb_fl.js";import"./attributes-DayBpKoh.js";import"./Icon-BALvD4eI.js";import"./utils-VWytQRnm.js";import"./_commonjsHelpers-CqkleIqs.js";const T=`A button/link component that can be styled in various ways. It will render as an \`<a>\` link if it has an \`href\` property defined.

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
`,t=(d,r=C)=>{var s=P();let l;var c=I(s);y(c,w(r,{children:(a,u)=>{var i=S();_(()=>$(i,r().text)),g(a,i)},$$slots:{default:!0}})),_(()=>{var a;return l=O(s,"",l,{padding:"12px",background:((a=r())==null?void 0:a.variant)==="ghost"?"var(--ons-color-ocean-blue)":null})}),g(d,s)},H={title:"Form elements/Button",component:y,tags:["autodocs"],argTypes:{type:{options:["button","submit","reset"],control:{type:"select"}},variant:{options:["primary","secondary","ghost"],control:{type:"select"}},icon:{control:{type:"select"}},iconPosition:{options:["before","after"],control:{type:"select"}}},parameters:L(T)},{Story:e}=A();var P=f("<div><!></div>"),E=f("<!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function x(d,r){B(r,!1),G();var s=E(),l=b(s);e(l,{name:"Default",args:{text:"Primary button"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div
	style:padding="12px"
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
>
	<Button {...args}>{args.text}</Button>
</div>`}}});var c=o(l,2);e(c,{name:"Link",args:{text:"Button-styled link",href:"#"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div
	style:padding="12px"
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
>
	<Button {...args}>{args.text}</Button>
</div>`}}});var a=o(c,2);e(a,{name:"Secondary",args:{text:"Secondary button",variant:"secondary"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div
	style:padding="12px"
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
>
	<Button {...args}>{args.text}</Button>
</div>`}}});var u=o(a,2);e(u,{name:"Ghost",args:{text:"Ghost button",variant:"ghost"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div
	style:padding="12px"
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
>
	<Button {...args}>{args.text}</Button>
</div>`}}});var i=o(u,2);e(i,{name:"Small",args:{text:"Small button",small:!0},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div
	style:padding="12px"
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
>
	<Button {...args}>{args.text}</Button>
</div>`}}});var v=o(i,2);e(v,{name:"Icon before",args:{text:"Download",icon:"download"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div
	style:padding="12px"
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
>
	<Button {...args}>{args.text}</Button>
</div>`}}});var p=o(v,2);e(p,{name:"Icon after",args:{text:"Continue",icon:"arrow",iconPosition:"after"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div
	style:padding="12px"
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
>
	<Button {...args}>{args.text}</Button>
</div>`}}});var m=o(p,2);e(m,{name:"Icon only, hidden text",args:{text:"Search",icon:"search",hideLabel:!0},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div
	style:padding="12px"
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
>
	<Button {...args}>{args.text}</Button>
</div>`}}});var h=o(m,2);e(h,{name:"Custom colour button",args:{text:"Small button",icon:"cross",color:"#00a3a6",small:!0},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div
	style:padding="12px"
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
>
	<Button {...args}>{args.text}</Button>
</div>`}}}),g(d,s),k()}x.__docgen={data:[],name:"Button.stories.svelte"};const n=D(x,H),W=["Default","Link","Secondary","Ghost","Small","IconBefore","IconAfter","IconOnlyHiddenText","CustomColourButton"],X={...n.Default,tags:["svelte-csf-v5"]},Y={...n.Link,tags:["svelte-csf-v5"]},Z={...n.Secondary,tags:["svelte-csf-v5"]},tt={...n.Ghost,tags:["svelte-csf-v5"]},et={...n.Small,tags:["svelte-csf-v5"]},nt={...n.IconBefore,tags:["svelte-csf-v5"]},ot={...n.IconAfter,tags:["svelte-csf-v5"]},at={...n.IconOnlyHiddenText,tags:["svelte-csf-v5"]},st={...n.CustomColourButton,tags:["svelte-csf-v5"]};export{st as CustomColourButton,X as Default,tt as Ghost,ot as IconAfter,nt as IconBefore,at as IconOnlyHiddenText,Y as Link,Z as Secondary,et as Small,W as __namedExportsOrder,H as default};
