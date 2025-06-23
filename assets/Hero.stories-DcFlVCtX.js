import{p as T,j as b,f,Z as y,g as s,o as i,k as _,e as v,h as A,_ as $,c as B,i as C}from"./iframe-BH0L4b-J.js";import{w as W,c as x,i as N,d as S}from"./create-runtime-stories-DM1Ts2uS.js";import{h as D}from"./html-Ds5b_mAW.js";import{H}from"./Hero-CxyDOZNq.js";import{l}from"./utils-DXjJT5W2.js";import"./slot-BP_Qo1ZM.js";import"./class-Dzh9Da8g.js";import"./attributes-Co-1QMVx.js";import"./style-CcY6orqc.js";import"./Theme-Dg1aZ46z.js";import"./svelte-head-DKv0U8PN.js";import"./Container-DdbGWG9b.js";import"./attributes-DeGcdixA.js";import"./DescriptionList-Dkm1u_qs.js";import"./each-B2_KBlGx.js";import"./Em-7IY-RXkD.js";import"./Button-BoxGPPYO.js";import"./Icon-B9FzAJGb.js";import"./_commonjsHelpers-CqkleIqs.js";const P=`A hero/title block suitable for a standard pages, with optional metadata block.

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
`,c=(g,t=y)=>{H(g,$(t,{children:(o,d)=>{var r=B(),a=f(r);{var u=e=>{var n=B(),h=f(n);D(h,()=>t().content),v(e,n)};C(a,e=>{t().content&&e(u)})}v(o,r)},$$slots:{default:!0}}))},R={title:"Layout/Hero",component:H,tags:["autodocs"],argTypes:{theme:{control:{type:"select"}}},parameters:{...W(P),layout:"fullscreen"}},{Story:m}=S();var E=b("<!> <!> <!> <!>",1);function w(g,t){T(t,!1),N();var o=E(),d=f(o);const r=i(()=>({width:"narrow",title:"Page title",lede:l(1),actionButton:{label:"Get started",href:"#0"},theme:"paleblue"}));m(d,{name:"Hero with action button",get args(){return s(r)},get template(){return c},parameters:{__svelteCsf:{rawCode:`<Hero {...args}>
	{#if args.content}{@html args.content}{/if}
</Hero>`}}});var a=_(d,2);const u=i(()=>({width:"narrow",title:"Page title",lede:l(1),actionButton:{label:"Get started",href:"#0"},theme:"blue"}));m(a,{name:"Blue theme",get args(){return s(u)},get template(){return c},parameters:{__svelteCsf:{rawCode:`<Hero {...args}>
	{#if args.content}{@html args.content}{/if}
</Hero>`}}});var e=_(a,2);const n=i(()=>({title:"This is a longer page title on multiple lines",pageType:"Statistical article",lede:l(1),width:"wide",theme:"grey",natStatBadge:!0,meta:[{key:"Dataset ID",value:"RM169"},{key:"Released",value:"2023-04-04"}]}));m(e,{name:"Article title block",get args(){return s(n)},get template(){return c},parameters:{__svelteCsf:{rawCode:`<Hero {...args}>
	{#if args.content}{@html args.content}{/if}
</Hero>`}}});var h=_(e,2);const k=i(()=>({title:"Norwich",titleBadge:{label:"E07000148",color:"#206095"},lede:l(1),width:"wide",theme:null}));m(h,{name:"Title with badge, no background",get args(){return s(k)},get template(){return c},parameters:{__svelteCsf:{rawCode:`<Hero {...args}>
	{#if args.content}{@html args.content}{/if}
</Hero>`}}}),v(g,o),A()}w.__docgen={data:[],name:"Hero.stories.svelte"};const p=x(w,R),oe=["HeroWithActionButton","BlueTheme","ArticleTitleBlock","TitleWithBadgeNoBackground"],re={...p.HeroWithActionButton,tags:["svelte-csf-v5"]},ae={...p.BlueTheme,tags:["svelte-csf-v5"]},ne={...p.ArticleTitleBlock,tags:["svelte-csf-v5"]},se={...p.TitleWithBadgeNoBackground,tags:["svelte-csf-v5"]};export{ne as ArticleTitleBlock,ae as BlueTheme,re as HeroWithActionButton,se as TitleWithBadgeNoBackground,oe as __namedExportsOrder,R as default};
