import{ab as k,e as h,as as b,g as n,ae as u,a as f,ad as T,f as y,at as $,d as v,i as A,H as s}from"./iframe-CN4WkKQ-.js";import{c as C,w as W,i as N,d as S}from"./create-runtime-stories-BV-tepPQ.js";import{H as B}from"./Hero-DCM7jVnK.js";import{l as i}from"./utils-VWytQRnm.js";import{h as P}from"./html-BktgcCip.js";import"./preload-helper-Dp1pzeXC.js";import"./slot-BP_Qo1ZM.js";import"./class-BufzINp9.js";import"./attributes-DayBpKoh.js";import"./style-k6qvDF7Y.js";import"./Theme-B44m4isP.js";import"./svelte-head-DVBEgYzm.js";import"./Container-yMUs7hSi.js";import"./attributes-BV5RLJ4t.js";import"./DescriptionList-BgeUnB58.js";import"./each-CvkZJ55B.js";import"./Em-Ce1qQvKw.js";import"./Button-C098wg8M.js";import"./Icon-DEDsjgAz.js";import"./_commonjsHelpers-CqkleIqs.js";const D=`A hero/title block suitable for a standard pages, with optional metadata block.

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
`,l=(p,t=b)=>{B(p,$(t,{children:(a,d)=>{var o=v(),r=h(o);{var g=e=>{var _=v(),w=h(_);P(w,()=>t().content),f(e,_)};A(r,e=>{t().content&&e(g)})}f(a,o)},$$slots:{default:!0}}))},O={title:"Layout/Hero",component:B,tags:["autodocs"],argTypes:{theme:{control:{type:"select"}}},parameters:{...W(D),layout:"fullscreen"}},{Story:m}=S();var x=y("<!> <!> <!> <!>",1);function H(p,t){k(t,!1),N();var a=x(),d=h(a);{let e=s(()=>({width:"narrow",title:"Page title",lede:i(1),actionButton:{label:"Get started",href:"#0"},theme:"paleblue"}));m(d,{name:"Hero with action button",get args(){return n(e)},get template(){return l},parameters:{__svelteCsf:{rawCode:`<Hero {...args}>
	{#if args.content}{@html args.content}{/if}
</Hero>`}}})}var o=u(d,2);{let e=s(()=>({width:"narrow",title:"Page title",lede:i(1),actionButton:{label:"Get started",href:"#0"},theme:"blue"}));m(o,{name:"Blue theme",get args(){return n(e)},get template(){return l},parameters:{__svelteCsf:{rawCode:`<Hero {...args}>
	{#if args.content}{@html args.content}{/if}
</Hero>`}}})}var r=u(o,2);{let e=s(()=>({title:"This is a longer page title on multiple lines",pageType:"Statistical article",lede:i(1),width:"wide",theme:"grey",natStatBadge:!0,meta:[{key:"Release date",value:"1 January 2024"},{key:"Last updated",value:"1 January 2025"},{key:"Publisher",value:"ONS"}]}));m(r,{name:"Article title block",get args(){return n(e)},get template(){return l},parameters:{__svelteCsf:{rawCode:`<Hero {...args}>
	{#if args.content}{@html args.content}{/if}
</Hero>`}}})}var g=u(r,2);{let e=s(()=>({title:"Norwich",titleBadge:{label:"E07000148",color:"#206095"},lede:i(1),width:"wide",theme:null}));m(g,{name:"Title with badge, no background",get args(){return n(e)},get template(){return l},parameters:{__svelteCsf:{rawCode:`<Hero {...args}>
	{#if args.content}{@html args.content}{/if}
</Hero>`}}})}f(p,a),T()}H.__docgen={data:[],name:"Hero.stories.svelte"};const c=C(H,O),oe=["HeroWithActionButton","BlueTheme","ArticleTitleBlock","TitleWithBadgeNoBackground"],ae={...c.HeroWithActionButton,tags:["svelte-csf-v5"]},re={...c.BlueTheme,tags:["svelte-csf-v5"]},ne={...c.ArticleTitleBlock,tags:["svelte-csf-v5"]},se={...c.TitleWithBadgeNoBackground,tags:["svelte-csf-v5"]};export{ne as ArticleTitleBlock,re as BlueTheme,ae as HeroWithActionButton,se as TitleWithBadgeNoBackground,oe as __namedExportsOrder,O as default};
