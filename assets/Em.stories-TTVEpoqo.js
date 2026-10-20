import{ab as p,e as c,al as g,ae as _,a as m,ad as f,f as h,av as v,b as u,t as x,s as M}from"./iframe-BqRfKcLk.js";import{c as E,w as b,i as k,d as $}from"./create-runtime-stories-Du911T6H.js";import{E as i}from"./Em-YLdVDH2Q.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-CkMeemA2.js";import"./class-37_mtU4-.js";import"./attributes-DayBpKoh.js";import"./style-DoyTnQz4.js";import"./utils-VWytQRnm.js";import"./_commonjsHelpers-CqkleIqs.js";const w=`A component to visually highlight text. Can be used for inline text or to provide a "badge".\r
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
`,s=(a,e=g)=>{i(a,v(e,{children:(t,r)=>{var o=u();x(()=>M(o,e().text)),m(t,o)},$$slots:{default:!0}}))},y={title:"Decorators/Em",component:i,tags:["autodocs"],argTypes:{color:{control:{type:"color"}}},parameters:b(w)},{Story:n}=$();var C=h("<!> <!>",1);function d(a,e){p(e,!1),k();var t=C(),r=c(t);n(r,{name:"Mark mode",args:{text:"Text on grey background"},get template(){return s},parameters:{__svelteCsf:{rawCode:"<Em {...args}>{args.text}</Em>"}}});var o=_(r,2);n(o,{name:"Badge mode",args:{text:"Text on badge",color:"navy",mode:"badge"},get template(){return s},parameters:{__svelteCsf:{rawCode:"<Em {...args}>{args.text}</Em>"}}}),m(a,t),f()}d.__docgen={data:[],name:"Em.stories.svelte"};const l=E(d,y),q=["MarkMode","BadgeMode"],z={...l.MarkMode,tags:["svelte-csf-v5"]},F={...l.BadgeMode,tags:["svelte-csf-v5"]};export{F as BadgeMode,z as MarkMode,q as __namedExportsOrder,y as default};
