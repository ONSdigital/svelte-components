import{ab as k,e as h,ag as b,g as n,ah as u,a as f,ad as T,f as y,av as $,d as v,i as A,H as s}from"./iframe-CWf7aFlM.js";import{c as C,w as W,i as N,d as S}from"./create-runtime-stories-DZHrlilD.js";import{H as B}from"./Hero-leUZLbOd.js";import{l as i}from"./utils-VWytQRnm.js";import{h as P}from"./html-CHqp8wE0.js";import"./preload-helper-Dp1pzeXC.js";import"./slot-BP_Qo1ZM.js";import"./class-bcIlrV7N.js";import"./attributes-DayBpKoh.js";import"./style-DKGnerva.js";import"./Theme-kRfsJ7Yx.js";import"./svelte-head-BAKvAkK-.js";import"./Container-B-0QdNll.js";import"./attributes-HyytCBC6.js";import"./DescriptionList-BEBZ9rIq.js";import"./each-W8R4y-cX.js";import"./Em-HV51idCI.js";import"./Button-v-cUiy-8.js";import"./Icon-DbTxsviM.js";import"./_commonjsHelpers-CqkleIqs.js";const D=`A hero/title block suitable for a standard pages, with optional metadata block.\r
\r
Based on this [ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/hero).\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { Hero } from "@onsvisual/svelte-components";\r
<\/script>\r
\r
<Hero title="Page title" lede="A description of the page">\r
  {optional_additonal_content}\r
</Hero>\r
\`\`\`\r
`,l=(p,t=b)=>{B(p,$(t,{children:(o,d)=>{var r=v(),a=h(r);{var g=e=>{var _=v(),w=h(_);P(w,()=>t().content),f(e,_)};A(a,e=>{t().content&&e(g)})}f(o,r)},$$slots:{default:!0}}))},O={title:"Layout/Hero",component:B,tags:["autodocs"],argTypes:{theme:{control:{type:"select"}}},parameters:{...W(D),layout:"fullscreen"}},{Story:m}=S();var x=y("<!> <!> <!> <!>",1);function H(p,t){k(t,!1),N();var o=x(),d=h(o);{let e=s(()=>({width:"narrow",title:"Page title",lede:i(1),actionButton:{label:"Get started",href:"#0"},theme:"paleblue"}));m(d,{name:"Hero with action button",get args(){return n(e)},get template(){return l},parameters:{__svelteCsf:{rawCode:`<Hero {...args}>\r
	{#if args.content}{@html args.content}{/if}\r
</Hero>`}}})}var r=u(d,2);{let e=s(()=>({width:"narrow",title:"Page title",lede:i(1),actionButton:{label:"Get started",href:"#0"},theme:"blue"}));m(r,{name:"Blue theme",get args(){return n(e)},get template(){return l},parameters:{__svelteCsf:{rawCode:`<Hero {...args}>\r
	{#if args.content}{@html args.content}{/if}\r
</Hero>`}}})}var a=u(r,2);{let e=s(()=>({title:"This is a longer page title on multiple lines",pageType:"Statistical article",lede:i(1),width:"wide",theme:"grey",natStatBadge:!0,meta:[{key:"Release date",value:"1 January 2024"},{key:"Last updated",value:"1 January 2025"},{key:"Publisher",value:"ONS"}]}));m(a,{name:"Article title block",get args(){return n(e)},get template(){return l},parameters:{__svelteCsf:{rawCode:`<Hero {...args}>\r
	{#if args.content}{@html args.content}{/if}\r
</Hero>`}}})}var g=u(a,2);{let e=s(()=>({title:"Norwich",titleBadge:{label:"E07000148",color:"#206095"},lede:i(1),width:"wide",theme:null}));m(g,{name:"Title with badge, no background",get args(){return n(e)},get template(){return l},parameters:{__svelteCsf:{rawCode:`<Hero {...args}>\r
	{#if args.content}{@html args.content}{/if}\r
</Hero>`}}})}f(p,o),T()}H.__docgen={data:[],name:"Hero.stories.svelte"};const c=C(H,O),re=["HeroWithActionButton","BlueTheme","ArticleTitleBlock","TitleWithBadgeNoBackground"],oe={...c.HeroWithActionButton,tags:["svelte-csf-v5"]},ae={...c.BlueTheme,tags:["svelte-csf-v5"]},ne={...c.ArticleTitleBlock,tags:["svelte-csf-v5"]},se={...c.TitleWithBadgeNoBackground,tags:["svelte-csf-v5"]};export{ne as ArticleTitleBlock,ae as BlueTheme,oe as HeroWithActionButton,se as TitleWithBadgeNoBackground,re as __namedExportsOrder,O as default};
