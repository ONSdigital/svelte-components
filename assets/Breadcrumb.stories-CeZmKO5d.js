import{ab as m,e as p,ae as c,a as l,ad as d,f}from"./iframe-BieOkgaL.js";import{c as g,w as u,i as _,d as b}from"./create-runtime-stories-CYy4gM-U.js";import{B as v}from"./Breadcrumb-Bc8Kdc1t.js";import"./preload-helper-Dp1pzeXC.js";import"./each-ZGVcLIqw.js";import"./attributes-C9k8Ok3D.js";import"./Container-D9pErKfu.js";import"./slot-BP_Qo1ZM.js";import"./class-B3LrzTQO.js";import"./attributes-DayBpKoh.js";import"./style-BeKZa6WD.js";import"./Theme-UTlT14F4.js";import"./html-BH-9ukWk.js";import"./svelte-head-CVlHd2UQ.js";const h=`Displays a breadcrumb with the current page's parents.\r
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
`,B={title:"Navigation/Breadcrumb",component:v,tags:["autodocs"],argTypes:{},parameters:u(h)},{Story:a}=b();var k=f("<!> <!>",1);function t(n,o){m(o,!1),_();var e=k(),r=p(e);a(r,{name:"Default",args:{links:[{label:"Home",href:"/"},{label:"Parent page",href:"/parent"}]},parameters:{__svelteCsf:{rawCode:"<Breadcrumb {...args} />"}}});var i=c(r,2);a(i,{name:"Single back link",args:{href:"/"},parameters:{__svelteCsf:{rawCode:"<Breadcrumb {...args} />"}}}),l(n,e),d()}t.__docgen={data:[],name:"Breadcrumb.stories.svelte"};const s=g(t,B),R=["Default","SingleBackLink"],T={...s.Default,tags:["svelte-csf-v5"]},j={...s.SingleBackLink,tags:["svelte-csf-v5"]};export{T as Default,j as SingleBackLink,R as __namedExportsOrder,B as default};
