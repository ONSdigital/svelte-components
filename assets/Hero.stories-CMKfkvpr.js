import{ad as w,h,n as T,g as n,ah as u,a as f,af as b,f as y,ax as $,e as v,i as A,K as s}from"./iframe-Dor9yFeR.js";import{c as C,w as S,i as W,d as N}from"./create-runtime-stories-Ov4k61O4.js";import{H as B}from"./Hero-BJzNlRFq.js";import{l as i}from"./utils-VWytQRnm.js";import{h as P}from"./html-Chv61kl2.js";import"./preload-helper-Dp1pzeXC.js";import"./class-DGB2XOf_.js";import"./attributes-DayBpKoh.js";import"./style-DYzlhi1l.js";import"./Theme-zQMmbuDO.js";import"./svelte-head-B8YjKLoQ.js";import"./Container-BWY13NOp.js";import"./attributes-BzEeyqaH.js";import"./DescriptionList-CYMf1j2V.js";import"./each-CyuE_Zrq.js";import"./Em-B4M0bYI1.js";import"./Button-Cpk2YSbZ.js";import"./Icon-Ck6iqZNF.js";import"./_commonjsHelpers-CqkleIqs.js";const O=`A hero/title block suitable for a standard pages, with optional metadata block.

Svelte 5 uses \`before\` and \`after\` snippets in place of those named slots. Ordinary child markup remains supported through \`children\`. Title, introduction, metadata and theme inputs update reactively.

Based on this [ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/hero).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Hero } from "@onsvisual/svelte-components";
<\/script>

<Hero title="Page title" lede="A description of the page">
  {optional_additonal_content}
</Hero>
\`\`\`
`,l=(p,t=T)=>{B(p,$(t,{children:(o,d)=>{var a=v(),r=h(a);{var g=e=>{var _=v(),k=h(_);P(k,()=>t().content),f(e,_)};A(r,e=>{t().content&&e(g)})}f(o,a)},$$slots:{default:!0}}))},x={title:"Layout/Hero",component:B,tags:["autodocs"],argTypes:{theme:{control:{type:"select"}}},parameters:{...S(O),layout:"fullscreen"}},{Story:m}=N();var D=y("<!> <!> <!> <!>",1);function H(p,t){w(t,!1),W();var o=D(),d=h(o);{let e=s(()=>({width:"narrow",title:"Page title",lede:i(1),actionButton:{label:"Get started",href:"#0"},theme:"paleblue"}));m(d,{name:"Hero with action button",get args(){return n(e)},get template(){return l},parameters:{__svelteCsf:{rawCode:`<Hero {...args}>
	{#if args.content}{@html args.content}{/if}
</Hero>`}}})}var a=u(d,2);{let e=s(()=>({width:"narrow",title:"Page title",lede:i(1),actionButton:{label:"Get started",href:"#0"},theme:"blue"}));m(a,{name:"Blue theme",get args(){return n(e)},get template(){return l},parameters:{__svelteCsf:{rawCode:`<Hero {...args}>
	{#if args.content}{@html args.content}{/if}
</Hero>`}}})}var r=u(a,2);{let e=s(()=>({title:"This is a longer page title on multiple lines",pageType:"Statistical article",lede:i(1),width:"wide",theme:"grey",natStatBadge:!0,meta:[{key:"Release date",value:"1 January 2024"},{key:"Last updated",value:"1 January 2025"},{key:"Publisher",value:"ONS"}]}));m(r,{name:"Article title block",get args(){return n(e)},get template(){return l},parameters:{__svelteCsf:{rawCode:`<Hero {...args}>
	{#if args.content}{@html args.content}{/if}
</Hero>`}}})}var g=u(r,2);{let e=s(()=>({title:"Norwich",titleBadge:{label:"E07000148",color:"#206095"},lede:i(1),width:"wide",theme:null}));m(g,{name:"Title with badge, no background",get args(){return n(e)},get template(){return l},parameters:{__svelteCsf:{rawCode:`<Hero {...args}>
	{#if args.content}{@html args.content}{/if}
</Hero>`}}})}f(p,o),b()}H.__docgen={data:[],name:"Hero.stories.svelte"};const c=C(H,x),te=["HeroWithActionButton","BlueTheme","ArticleTitleBlock","TitleWithBadgeNoBackground"],ae={...c.HeroWithActionButton,tags:["svelte-csf-v5"]},oe={...c.BlueTheme,tags:["svelte-csf-v5"]},re={...c.ArticleTitleBlock,tags:["svelte-csf-v5"]},ne={...c.TitleWithBadgeNoBackground,tags:["svelte-csf-v5"]};export{re as ArticleTitleBlock,oe as BlueTheme,ae as HeroWithActionButton,ne as TitleWithBadgeNoBackground,te as __namedExportsOrder,x as default};
