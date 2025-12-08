import{p as T,j as b,f,Z as y,g as s,o as i,k as _,e as v,h as A,_ as $,c as B,i as C}from"./iframe-BogSXddm.js";import{w as W,c as N,i as S,d as x}from"./create-runtime-stories-BRWdB4wt.js";import{h as P}from"./html-BT8KaaCD.js";import{H}from"./Hero-BZX-UlM_.js";import{l}from"./utils-VWytQRnm.js";import"./slot-BP_Qo1ZM.js";import"./class-Dzh9Da8g.js";import"./attributes-Co-1QMVx.js";import"./style-CcY6orqc.js";import"./Theme-C0IZBiI8.js";import"./svelte-head-B1gOl83R.js";import"./Container-DcPHJ3_R.js";import"./attributes-BwU1yLAS.js";import"./DescriptionList-ydkFsKb-.js";import"./each-BEdGG6pq.js";import"./Em-CGroCHvr.js";import"./Button-CYeX2E-N.js";import"./Icon-BL8ttAh1.js";import"./_commonjsHelpers-CqkleIqs.js";const D=`A hero/title block suitable for a standard pages, with optional metadata block.\r
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
`,c=(d,t=y)=>{H(d,$(t,{children:(r,g)=>{var o=B(),a=f(o);{var u=e=>{var n=B(),h=f(n);P(h,()=>t().content),v(e,n)};C(a,e=>{t().content&&e(u)})}v(r,o)},$$slots:{default:!0}}))},O={title:"Layout/Hero",component:H,tags:["autodocs"],argTypes:{theme:{control:{type:"select"}}},parameters:{...W(D),layout:"fullscreen"}},{Story:m}=x();var E=b("<!> <!> <!> <!>",1);function k(d,t){T(t,!1),S();var r=E(),g=f(r);const o=i(()=>({width:"narrow",title:"Page title",lede:l(1),actionButton:{label:"Get started",href:"#0"},theme:"paleblue"}));m(g,{name:"Hero with action button",get args(){return s(o)},get template(){return c},parameters:{__svelteCsf:{rawCode:`<Hero {...args}>\r
	{#if args.content}{@html args.content}{/if}\r
</Hero>`}}});var a=_(g,2);const u=i(()=>({width:"narrow",title:"Page title",lede:l(1),actionButton:{label:"Get started",href:"#0"},theme:"blue"}));m(a,{name:"Blue theme",get args(){return s(u)},get template(){return c},parameters:{__svelteCsf:{rawCode:`<Hero {...args}>\r
	{#if args.content}{@html args.content}{/if}\r
</Hero>`}}});var e=_(a,2);const n=i(()=>({title:"This is a longer page title on multiple lines",pageType:"Statistical article",lede:l(1),width:"wide",theme:"grey",natStatBadge:!0,meta:[{key:"Release date",value:"1 January 2024"},{key:"Last updated",value:"1 January 2025"},{key:"Publisher",value:"ONS"}]}));m(e,{name:"Article title block",get args(){return s(n)},get template(){return c},parameters:{__svelteCsf:{rawCode:`<Hero {...args}>\r
	{#if args.content}{@html args.content}{/if}\r
</Hero>`}}});var h=_(e,2);const w=i(()=>({title:"Norwich",titleBadge:{label:"E07000148",color:"#206095"},lede:l(1),width:"wide",theme:null}));m(h,{name:"Title with badge, no background",get args(){return s(w)},get template(){return c},parameters:{__svelteCsf:{rawCode:`<Hero {...args}>\r
	{#if args.content}{@html args.content}{/if}\r
</Hero>`}}}),v(d,r),A()}k.__docgen={data:[],name:"Hero.stories.svelte"};const p=N(k,O),re=["HeroWithActionButton","BlueTheme","ArticleTitleBlock","TitleWithBadgeNoBackground"],oe={...p.HeroWithActionButton,tags:["svelte-csf-v5"]},ae={...p.BlueTheme,tags:["svelte-csf-v5"]},ne={...p.ArticleTitleBlock,tags:["svelte-csf-v5"]},se={...p.TitleWithBadgeNoBackground,tags:["svelte-csf-v5"]};export{ne as ArticleTitleBlock,ae as BlueTheme,oe as HeroWithActionButton,se as TitleWithBadgeNoBackground,re as __namedExportsOrder,O as default};
