import{ad as m,h as p,ah as c,a as l,af as d,f}from"./iframe-f67rGsxv.js";import{c as g,w as u,i as _,d as b}from"./create-runtime-stories-Ua86Psvv.js";import{B as h}from"./Breadcrumb-C9NkzKJV.js";import"./preload-helper-Dp1pzeXC.js";import"./each-ByJU7_As.js";import"./attributes-jbjqwhbX.js";import"./Container-CehZZ-GN.js";import"./class-8kYv-OY_.js";import"./attributes-DayBpKoh.js";import"./style-CYmCgZEu.js";import"./Theme-i0A4DriN.js";import"./html-CEdj7H0k.js";import"./svelte-head-BaCDPeSb.js";const v=`Displays a breadcrumb with the current page's parents.

Based on [this ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/breadcrumbs).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Breadcrumb } from "@onsvisual/svelte-components";
<\/script>

<Breadcrumb links={[
  {label: 'Home', href: '/'},
  {label: 'Parent page', href: '/parent'}
]} />
\`\`\`
`,B={title:"Navigation/Breadcrumb",component:h,tags:["autodocs"],argTypes:{},parameters:u(v)},{Story:r}=b();var k=f("<!> <!>",1);function t(n,o){m(o,!1),_();var e=k(),a=p(e);r(a,{name:"Default",args:{links:[{label:"Home",href:"/"},{label:"Parent page",href:"/parent"}]},parameters:{__svelteCsf:{rawCode:"<Breadcrumb {...args} />"}}});var i=c(a,2);r(i,{name:"Single back link",args:{href:"/"},parameters:{__svelteCsf:{rawCode:"<Breadcrumb {...args} />"}}}),l(n,e),d()}t.__docgen={data:[],name:"Breadcrumb.stories.svelte"};const s=g(t,B),M=["Default","SingleBackLink"],R={...s.Default,tags:["svelte-csf-v5"]},T={...s.SingleBackLink,tags:["svelte-csf-v5"]};export{R as Default,T as SingleBackLink,M as __namedExportsOrder,B as default};
