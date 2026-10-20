import{ab as o,g as n,ad as a,H as i}from"./iframe-BqRfKcLk.js";import{c as m,w as p,i as c,d as l}from"./create-runtime-stories-Du911T6H.js";import{D as u}from"./DescriptionList-Ch1ScJYB.js";import"./preload-helper-Dp1pzeXC.js";import"./each-kHsERmtw.js";import"./html-QDNSwytG.js";import"./attributes-CkMeemA2.js";import"./class-37_mtU4-.js";import"./attributes-DayBpKoh.js";const f=`A component to display metadata in a tabular format.\r
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
`,d=[{key:"Survey",value:"Bricks & Blocks"},{key:"RU Refs",value:[49900000118,49300005832]},{key:"To",value:"<a href='mailto:'>A Person</a>"}],v={title:"Information and media/DescriptionList",component:u,tags:["autodocs"],argTypes:{},parameters:p(f)},{Story:D}=l();function t(e,s){o(s,!1),c();{let r=i(()=>({items:d}));D(e,{name:"Default",get args(){return n(r)},parameters:{__svelteCsf:{rawCode:"<DescriptionList {...args} />"}}})}a()}t.__docgen={data:[],name:"DescriptionList.stories.svelte"};const _=m(t,v),w=["Default"],A={..._.Default,tags:["svelte-csf-v5"]};export{A as Default,w as __namedExportsOrder,v as default};
