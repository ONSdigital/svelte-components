import{ab as m,e as p,ah as c,a as l,ad as d,f}from"./iframe-DjMvT2c-.js";import{c as g,w as u,i as _,d as b}from"./create-runtime-stories-myTZTF-x.js";import{B as v}from"./Breadcrumb-u3peSF17.js";import"./preload-helper-Dp1pzeXC.js";import"./each-BmB-i6yh.js";import"./attributes-ChCi6Xsq.js";import"./Container-DGkyoKVe.js";import"./slot-BP_Qo1ZM.js";import"./class-PrT4n0Js.js";import"./attributes-DayBpKoh.js";import"./style-CM3dwi71.js";import"./Theme-Cnx6TnH6.js";import"./html-YweUsSug.js";import"./svelte-head-BFp_wbq3.js";const h=`Displays a breadcrumb with the current page's parents.\r
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
