import{A as m,f as p,m as c,J as l,j as d,I as f}from"./iframe-BvKql7wr.js";import{w as g,c as u,i as _,d as b}from"./create-runtime-stories-Dz4hQJgQ.js";import{B as v}from"./Breadcrumb-C-EhGqS6.js";import"./each-CIPJZAbX.js";import"./attributes-CZhfLBdd.js";import"./Container-BcvMhcKd.js";import"./slot-BP_Qo1ZM.js";import"./class-B9SFUanI.js";import"./attributes-q36Eg1F8.js";import"./style-CNURdi_Z.js";import"./Theme-_7OWe3k5.js";import"./svelte-head-C_t8Rk82.js";import"./html-CWhwRZYC.js";const h=`Displays a breadcrumb with the current page's parents.

Based on [this ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/breadcrumbs).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Breadcrumb } from "@onsvisual/svelte-components";
<\/script>

<Breadcrumb links="{[
  {label: 'Home', href: '/'},
  {label: 'Parent page', href: '/parent'}
]}" />
\`\`\`
`,B={title:"Navigation/Breadcrumb",component:v,tags:["autodocs"],argTypes:{},parameters:g(h)},{Story:r}=b();var k=p("<!> <!>",1);function t(n,o){m(o,!1),_();var e=k(),a=c(e);r(a,{name:"Default",args:{links:[{label:"Home",href:"/"},{label:"Parent page",href:"/parent"}]},parameters:{__svelteCsf:{rawCode:"<Breadcrumb {...args} />"}}});var i=l(a,2);r(i,{name:"Single back link",args:{href:"/"},parameters:{__svelteCsf:{rawCode:"<Breadcrumb {...args} />"}}}),d(n,e),f()}t.__docgen={data:[],name:"Breadcrumb.stories.svelte"};const s=u(t,B),A=["Default","SingleBackLink"],E={...s.Default,tags:["svelte-csf-v5"]},I={...s.SingleBackLink,tags:["svelte-csf-v5"]};export{E as Default,I as SingleBackLink,A as __namedExportsOrder,B as default};
