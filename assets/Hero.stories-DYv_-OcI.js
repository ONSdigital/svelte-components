import{ad as w,h,n as T,g as n,ah as u,a as f,af as b,f as y,ax as $,e as v,i as A,K as s}from"./iframe-DAUNLR8O.js";import{c as C,w as S,i as W,d as N}from"./create-runtime-stories-B5aIRkb-.js";import{H as B}from"./Hero-D4nQO3kJ.js";import{l as i}from"./utils-VWytQRnm.js";import{h as P}from"./html-D5syok29.js";import"./preload-helper-Dp1pzeXC.js";import"./class-DzLv1wVC.js";import"./attributes-DayBpKoh.js";import"./style-DnS876Ns.js";import"./Theme-pIXUpPy8.js";import"./svelte-head-CNn9Wnte.js";import"./Container-SIPjVhMn.js";import"./attributes-C8WLOc0F.js";import"./DescriptionList-CpzBelBe.js";import"./each-zFvNCFwR.js";import"./Em-2ZaUQO2v.js";import"./Button-CgnpRuJL.js";import"./Icon-BVFr5jfQ.js";import"./_commonjsHelpers-CqkleIqs.js";const O=`A hero/title block suitable for a standard pages, with optional metadata block.

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
`,l=(p,t=T)=>{B(p,$(t,{children:(a,d)=>{var r=v(),o=h(r);{var g=e=>{var _=v(),k=h(_);P(k,()=>t().content),f(e,_)};A(o,e=>{t().content&&e(g)})}f(a,r)},$$slots:{default:!0}}))},x={title:"Layout/Hero",component:B,tags:["autodocs"],argTypes:{theme:{control:{type:"select"}}},parameters:{...S(O),layout:"fullscreen"}},{Story:m}=N();var D=y("<!> <!> <!> <!>",1);function H(p,t){w(t,!1),W();var a=D(),d=h(a);{let e=s(()=>({width:"narrow",title:"Page title",lede:i(1),actionButton:{label:"Get started",href:"#0"},theme:"paleblue"}));m(d,{name:"Hero with action button",get args(){return n(e)},get template(){return l},parameters:{__svelteCsf:{rawCode:`<Hero {...args}>\r
	{#if args.content}{@html args.content}{/if}\r
</Hero>`}}})}var r=u(d,2);{let e=s(()=>({width:"narrow",title:"Page title",lede:i(1),actionButton:{label:"Get started",href:"#0"},theme:"blue"}));m(r,{name:"Blue theme",get args(){return n(e)},get template(){return l},parameters:{__svelteCsf:{rawCode:`<Hero {...args}>\r
	{#if args.content}{@html args.content}{/if}\r
</Hero>`}}})}var o=u(r,2);{let e=s(()=>({title:"This is a longer page title on multiple lines",pageType:"Statistical article",lede:i(1),width:"wide",theme:"grey",natStatBadge:!0,meta:[{key:"Release date",value:"1 January 2024"},{key:"Last updated",value:"1 January 2025"},{key:"Publisher",value:"ONS"}]}));m(o,{name:"Article title block",get args(){return n(e)},get template(){return l},parameters:{__svelteCsf:{rawCode:`<Hero {...args}>\r
	{#if args.content}{@html args.content}{/if}\r
</Hero>`}}})}var g=u(o,2);{let e=s(()=>({title:"Norwich",titleBadge:{label:"E07000148",color:"#206095"},lede:i(1),width:"wide",theme:null}));m(g,{name:"Title with badge, no background",get args(){return n(e)},get template(){return l},parameters:{__svelteCsf:{rawCode:`<Hero {...args}>\r
	{#if args.content}{@html args.content}{/if}\r
</Hero>`}}})}f(p,a),b()}H.__docgen={data:[],name:"Hero.stories.svelte"};const c=C(H,x),te=["HeroWithActionButton","BlueTheme","ArticleTitleBlock","TitleWithBadgeNoBackground"],re={...c.HeroWithActionButton,tags:["svelte-csf-v5"]},ae={...c.BlueTheme,tags:["svelte-csf-v5"]},oe={...c.ArticleTitleBlock,tags:["svelte-csf-v5"]},ne={...c.TitleWithBadgeNoBackground,tags:["svelte-csf-v5"]};export{oe as ArticleTitleBlock,ae as BlueTheme,re as HeroWithActionButton,ne as TitleWithBadgeNoBackground,te as __namedExportsOrder,x as default};
