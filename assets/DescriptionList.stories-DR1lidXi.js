import{p as r,g as n,o as i,h as a}from"./iframe-DgZwGItH.js";import{w as p,c,i as m,d as l}from"./create-runtime-stories-xZ2YYh46.js";import{D as u}from"./DescriptionList-DQzT5RQj.js";import"./each-Caa3eqBD.js";import"./html-v461-nDV.js";import"./attributes-2UgTCuWr.js";import"./class-Dzh9Da8g.js";import"./attributes-Co-1QMVx.js";const f=`A component to display metadata in a tabular format.\r
\r
Based on this [ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/description-list).\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { DescriptionList } from "@onsvisual/svelte-components";\r
  \r
  const items = [\r
    { key: "Survey", value: "Bricks & Blocks" },\r
    { key: "RU Refs", value: [49900000118, 49300005832]},\r
    { key: "To", value: "<a href='mailto:'>A Person</a>"}\r
  ];\r
<\/script>\r
\r
<DescriptionList {items}/>\r
\`\`\`\r
`,v=[{key:"Survey",value:"Bricks & Blocks"},{key:"RU Refs",value:[49900000118,49300005832]},{key:"To",value:"<a href='mailto:'>A Person</a>"}],d={title:"Layout/DescriptionList",component:u,tags:["autodocs"],argTypes:{},parameters:p(f)},{Story:D}=l();function e(t,s){r(s,!1),m();const o=i(()=>({items:v}));D(t,{name:"Default",get args(){return n(o)},parameters:{__svelteCsf:{rawCode:"<DescriptionList {...args} />"}}}),a()}e.__docgen={data:[],name:"DescriptionList.stories.svelte"};const _=c(e,d),w=["Default"],x={..._.Default,tags:["svelte-csf-v5"]};export{x as Default,w as __namedExportsOrder,d as default};
