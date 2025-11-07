import{p as m,j as p,f as c,k as l,e as d,h as f}from"./iframe-DRONkSsd.js";import{w as u,c as g,i as _,d as b}from"./create-runtime-stories-DLzChHzu.js";import{B as h}from"./Breadcrumb-CNimg858.js";import"./each-zMDmBvqu.js";import"./attributes-DfYTFl74.js";import"./Container-CNLKX1lb.js";import"./slot-BP_Qo1ZM.js";import"./class-Dzh9Da8g.js";import"./attributes-Co-1QMVx.js";import"./style-CcY6orqc.js";import"./Theme-B9AdG2tz.js";import"./svelte-head-Cva_wJZN.js";import"./html-pjAgaoPw.js";const v=`Displays a breadcrumb with the current page's parents.\r
\r
Based on [this ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/breadcrumbs).\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { Breadcrumb } from "@onsvisual/svelte-components";\r
<\/script>\r
\r
<Breadcrumb links="{[\r
  {label: 'Home', href: '/'},\r
  {label: 'Parent page', href: '/parent'}\r
]}" />\r
\`\`\`\r
`,k={title:"Layout/Breadcrumb",component:h,tags:["autodocs"],argTypes:{},parameters:u(v)},{Story:a}=b();var B=p("<!> <!>",1);function t(n,o){m(o,!1),_();var e=B(),r=c(e);a(r,{name:"Default",args:{links:[{label:"Home",href:"/"},{label:"Parent page",href:"/parent"}]},parameters:{__svelteCsf:{rawCode:"<Breadcrumb {...args} />"}}});var i=l(r,2);a(i,{name:"Single back link",args:{href:"/"},parameters:{__svelteCsf:{rawCode:"<Breadcrumb {...args} />"}}}),d(n,e),f()}t.__docgen={data:[],name:"Breadcrumb.stories.svelte"};const s=g(t,k),M=["Default","SingleBackLink"],N={...s.Default,tags:["svelte-csf-v5"]},R={...s.SingleBackLink,tags:["svelte-csf-v5"]};export{N as Default,R as SingleBackLink,M as __namedExportsOrder,k as default};
