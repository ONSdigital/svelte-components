import{A as T,f as b,m as f,W as y,G as s,h as i,J as _,j as v,I as A,X as $,l as B,i as C}from"./iframe-Ba9ePtFQ.js";import{w as W,c as N,i as S,d as x}from"./create-runtime-stories-NZufGFTO.js";import{h as P}from"./html-D7mn1yyx.js";import{H}from"./Hero-BY5QGaCp.js";import{l}from"./utils-VWytQRnm.js";import"./slot-BP_Qo1ZM.js";import"./class-B9SFUanI.js";import"./attributes-q36Eg1F8.js";import"./style-CNURdi_Z.js";import"./Theme-DY_5rM9S.js";import"./svelte-head-BctXyWdE.js";import"./Container-BBF3i5UX.js";import"./attributes-_Th04X_A.js";import"./DescriptionList-BmanHVPG.js";import"./each-CcrXM59y.js";import"./Em-DXPKj19V.js";import"./Button-BhRqNVh6.js";import"./Icon-BvI0Atu9.js";import"./_commonjsHelpers-CqkleIqs.js";const D=`A hero/title block suitable for a standard pages, with optional metadata block.

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
`,m=(d,t=y)=>{H(d,$(t,{children:(o,g)=>{var r=B(),a=f(r);{var u=e=>{var n=B(),h=f(n);P(h,()=>t().content),v(e,n)};C(a,e=>{t().content&&e(u)})}v(o,r)},$$slots:{default:!0}}))},G={title:"Layout/Hero",component:H,tags:["autodocs"],argTypes:{theme:{control:{type:"select"}}},parameters:{...W(D),layout:"fullscreen"}},{Story:c}=x();var J=b("<!> <!> <!> <!>",1);function w(d,t){T(t,!1),S();var o=J(),g=f(o);const r=i(()=>({width:"narrow",title:"Page title",lede:l(1),actionButton:{label:"Get started",href:"#0"},theme:"paleblue"}));c(g,{name:"Hero with action button",get args(){return s(r)},get template(){return m},parameters:{__svelteCsf:{rawCode:`<Hero {...args}>
	{#if args.content}{@html args.content}{/if}
</Hero>`}}});var a=_(g,2);const u=i(()=>({width:"narrow",title:"Page title",lede:l(1),actionButton:{label:"Get started",href:"#0"},theme:"blue"}));c(a,{name:"Blue theme",get args(){return s(u)},get template(){return m},parameters:{__svelteCsf:{rawCode:`<Hero {...args}>
	{#if args.content}{@html args.content}{/if}
</Hero>`}}});var e=_(a,2);const n=i(()=>({title:"This is a longer page title on multiple lines",pageType:"Statistical article",lede:l(1),width:"wide",theme:"grey",natStatBadge:!0,meta:[{key:"Release date",value:"1 January 2024"},{key:"Last updated",value:"1 January 2025"},{key:"Publisher",value:"ONS"}]}));c(e,{name:"Article title block",get args(){return s(n)},get template(){return m},parameters:{__svelteCsf:{rawCode:`<Hero {...args}>
	{#if args.content}{@html args.content}{/if}
</Hero>`}}});var h=_(e,2);const k=i(()=>({title:"Norwich",titleBadge:{label:"E07000148",color:"#206095"},lede:l(1),width:"wide",theme:null}));c(h,{name:"Title with badge, no background",get args(){return s(k)},get template(){return m},parameters:{__svelteCsf:{rawCode:`<Hero {...args}>
	{#if args.content}{@html args.content}{/if}
</Hero>`}}}),v(d,o),A()}w.__docgen={data:[],name:"Hero.stories.svelte"};const p=N(w,G),oe=["HeroWithActionButton","BlueTheme","ArticleTitleBlock","TitleWithBadgeNoBackground"],re={...p.HeroWithActionButton,tags:["svelte-csf-v5"]},ae={...p.BlueTheme,tags:["svelte-csf-v5"]},ne={...p.ArticleTitleBlock,tags:["svelte-csf-v5"]},se={...p.TitleWithBadgeNoBackground,tags:["svelte-csf-v5"]};export{ne as ArticleTitleBlock,ae as BlueTheme,re as HeroWithActionButton,se as TitleWithBadgeNoBackground,oe as __namedExportsOrder,G as default};
