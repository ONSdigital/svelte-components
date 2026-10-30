import{ab as x,e as b,ag as C,ah as o,a as v,ad as k,f as _,ax as w,b as S,t as f,c as I,s as $}from"./iframe-DwMLuGxz.js";import{c as D,w as L,i as A,d as G}from"./create-runtime-stories-CVh0mbf1.js";import{B as y}from"./Button-CImD3eOU.js";import{s as T}from"./style-BhKhrtHX.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-2IKc6IRp.js";import"./class-BbJvXEFO.js";import"./attributes-DayBpKoh.js";import"./Icon-D7Sa4wqw.js";import"./utils-VWytQRnm.js";import"./_commonjsHelpers-CqkleIqs.js";const O='A button/link component that can be styled in various ways. It will render as an `<a>` link if it has an `href` property defined.\n\n## Svelte 5 callbacks\n\nUse the `onClick` callback for a native `MouseEvent`. The dispatched `click` event remains available; its `detail` is that same `MouseEvent`.\n\n```svelte\n<Button onClick={(event) => console.log(event.type)}>Button text</Button>\n```\n\nCustom icon content formerly provided with the named `icon` slot can be passed as an `iconSlot` snippet:\n\n```svelte\n{#snippet customIcon()}\n	<span aria-hidden="true">+</span>\n{/snippet}\n\n<Button iconSlot={customIcon}>Add item</Button>\n```\n\n<!-- prettier-ignore -->\n```html\n<script>\n  import { Button } from "@onsvisual/svelte-components";\n\n  // Define your own function on click\n  const handleClick = (e) => console.log(e);\n<\/script>\n\n<!-- Standard button with on:click function -->\n<Button on:click="{handleClick}">Button text</Button>\n\n<!-- Button-styled link with href -->\n<Button href="#">Link text</Button>\n```\n',t=(d,s=C)=>{var r=P();let l;var c=I(r);y(c,w(s,{children:(a,u)=>{var i=S();f(()=>$(i,s().text)),v(a,i)},$$slots:{default:!0}})),f(()=>{var a;return l=T(r,"",l,{padding:"12px",background:((a=s())==null?void 0:a.variant)==="ghost"?"var(--ons-color-ocean-blue)":null})}),v(d,r)},H={title:"Form elements/Button",component:y,tags:["autodocs"],argTypes:{type:{options:["button","submit","reset"],control:{type:"select"}},variant:{options:["primary","secondary","ghost"],control:{type:"select"}},icon:{control:{type:"select"}},iconPosition:{options:["before","after"],control:{type:"select"}}},parameters:L(O)},{Story:n}=G();var P=_("<div><!></div>"),E=_("<!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function h(d,s){x(s,!1),A();var r=E(),l=b(r);n(l,{name:"Default",args:{text:"Primary button"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
>\r
	<Button {...args}>{args.text}</Button>\r
</div>`}}});var c=o(l,2);n(c,{name:"Link",args:{text:"Button-styled link",href:"#"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
>\r
	<Button {...args}>{args.text}</Button>\r
</div>`}}});var a=o(c,2);n(a,{name:"Secondary",args:{text:"Secondary button",variant:"secondary"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
>\r
	<Button {...args}>{args.text}</Button>\r
</div>`}}});var u=o(a,2);n(u,{name:"Ghost",args:{text:"Ghost button",variant:"ghost"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
>\r
	<Button {...args}>{args.text}</Button>\r
</div>`}}});var i=o(u,2);n(i,{name:"Small",args:{text:"Small button",small:!0},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
>\r
	<Button {...args}>{args.text}</Button>\r
</div>`}}});var p=o(i,2);n(p,{name:"Icon before",args:{text:"Download",icon:"download"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
>\r
	<Button {...args}>{args.text}</Button>\r
</div>`}}});var g=o(p,2);n(g,{name:"Icon after",args:{text:"Continue",icon:"arrow",iconPosition:"after"},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
>\r
	<Button {...args}>{args.text}</Button>\r
</div>`}}});var m=o(g,2);n(m,{name:"Icon only, hidden text",args:{text:"Search",icon:"search",hideLabel:!0},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
>\r
	<Button {...args}>{args.text}</Button>\r
</div>`}}});var B=o(m,2);n(B,{name:"Custom colour button",args:{text:"Small button",icon:"cross",color:"#00a3a6",small:!0},get template(){return t},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
>\r
	<Button {...args}>{args.text}</Button>\r
</div>`}}}),v(d,r),k()}h.__docgen={data:[],name:"Button.stories.svelte"};const e=D(h,H),V=["Default","Link","Secondary","Ghost","Small","IconBefore","IconAfter","IconOnlyHiddenText","CustomColourButton"],W={...e.Default,tags:["svelte-csf-v5"]},X={...e.Link,tags:["svelte-csf-v5"]},Y={...e.Secondary,tags:["svelte-csf-v5"]},Z={...e.Ghost,tags:["svelte-csf-v5"]},tt={...e.Small,tags:["svelte-csf-v5"]},nt={...e.IconBefore,tags:["svelte-csf-v5"]},et={...e.IconAfter,tags:["svelte-csf-v5"]},ot={...e.IconOnlyHiddenText,tags:["svelte-csf-v5"]},at={...e.CustomColourButton,tags:["svelte-csf-v5"]};export{at as CustomColourButton,W as Default,Z as Ghost,et as IconAfter,nt as IconBefore,ot as IconOnlyHiddenText,X as Link,Y as Secondary,tt as Small,V as __namedExportsOrder,H as default};
