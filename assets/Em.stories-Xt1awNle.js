import{ab as l,e as c,ag as g,ah as _,a as m,ad as f,f as h,av as v,b as u,t as x,s as M}from"./iframe-DjMvT2c-.js";import{c as E,w as b,i as k,d as $}from"./create-runtime-stories-myTZTF-x.js";import{E as i}from"./Em-DheNC_ju.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-ChCi6Xsq.js";import"./class-PrT4n0Js.js";import"./attributes-DayBpKoh.js";import"./style-CM3dwi71.js";import"./utils-VWytQRnm.js";import"./_commonjsHelpers-CqkleIqs.js";const w=`A component to visually highlight text. Can be used for inline text or to provide a "badge".\r
\r
Consists of a \`<mark>\` element with a custom background color, where the highlighted text will automatically appear black or white to maximise contrast.\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { Em } from "@onsvisual/svelte-components";\r
<\/script>\r
\r
<Em color="steelblue">Highlighted text</Em>\r
\`\`\`\r
`,s=(a,t=g)=>{i(a,v(t,{children:(e,r)=>{var o=u();x(()=>M(o,t().text)),m(e,o)},$$slots:{default:!0}}))},y={title:"Decorators/Em",component:i,tags:["autodocs"],argTypes:{color:{control:{type:"color"}}},parameters:b(w)},{Story:n}=$();var C=h("<!> <!>",1);function d(a,t){l(t,!1),k();var e=C(),r=c(e);n(r,{name:"Mark mode",args:{text:"Text on grey background"},get template(){return s},parameters:{__svelteCsf:{rawCode:"<Em {...args}>{args.text}</Em>"}}});var o=_(r,2);n(o,{name:"Badge mode",args:{text:"Text on badge",color:"navy",mode:"badge"},get template(){return s},parameters:{__svelteCsf:{rawCode:"<Em {...args}>{args.text}</Em>"}}}),m(a,e),f()}d.__docgen={data:[],name:"Em.stories.svelte"};const p=E(d,y),q=["MarkMode","BadgeMode"],z={...p.MarkMode,tags:["svelte-csf-v5"]},F={...p.BadgeMode,tags:["svelte-csf-v5"]};export{F as BadgeMode,z as MarkMode,q as __namedExportsOrder,y as default};
