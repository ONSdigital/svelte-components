import{ad as m,h as p,ah as c,a as l,af as d,f}from"./iframe-DAUNLR8O.js";import{c as g,w as u,i as _,d as b}from"./create-runtime-stories-B5aIRkb-.js";import{B as h}from"./Breadcrumb-CPgJUiux.js";import"./preload-helper-Dp1pzeXC.js";import"./each-zFvNCFwR.js";import"./attributes-C8WLOc0F.js";import"./Container-SIPjVhMn.js";import"./class-DzLv1wVC.js";import"./attributes-DayBpKoh.js";import"./style-DnS876Ns.js";import"./Theme-pIXUpPy8.js";import"./html-D5syok29.js";import"./svelte-head-CNn9Wnte.js";const v=`Displays a breadcrumb with the current page's parents.\r
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
`,B={title:"Navigation/Breadcrumb",component:h,tags:["autodocs"],argTypes:{},parameters:u(v)},{Story:a}=b();var k=f("<!> <!>",1);function t(n,o){m(o,!1),_();var e=k(),r=p(e);a(r,{name:"Default",args:{links:[{label:"Home",href:"/"},{label:"Parent page",href:"/parent"}]},parameters:{__svelteCsf:{rawCode:"<Breadcrumb {...args} />"}}});var i=c(r,2);a(i,{name:"Single back link",args:{href:"/"},parameters:{__svelteCsf:{rawCode:"<Breadcrumb {...args} />"}}}),l(n,e),d()}t.__docgen={data:[],name:"Breadcrumb.stories.svelte"};const s=g(t,B),M=["Default","SingleBackLink"],R={...s.Default,tags:["svelte-csf-v5"]},T={...s.SingleBackLink,tags:["svelte-csf-v5"]};export{R as Default,T as SingleBackLink,M as __namedExportsOrder,B as default};
