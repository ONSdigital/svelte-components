import{ab as l,e as c,as as g,ae as _,a as m,ad as f,f as h,at as u,b as v,t as x,s as M}from"./iframe-CwT5EAsy.js";import{c as E,w as b,i as k,d as $}from"./create-runtime-stories-BBueoODQ.js";import{E as i}from"./Em-XAWLe7pR.js";import"./preload-helper-Dp1pzeXC.js";import"./slot-BP_Qo1ZM.js";import"./attributes-DBnpCygu.js";import"./class-Dvitqb_Y.js";import"./attributes-DayBpKoh.js";import"./style-CZqFqtXy.js";import"./utils-VWytQRnm.js";import"./_commonjsHelpers-CqkleIqs.js";const w=`A component to visually highlight text. Can be used for inline text or to provide a "badge".\r
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
`,s=(a,t=g)=>{i(a,u(t,{children:(e,r)=>{var o=v();x(()=>M(o,t().text)),m(e,o)},$$slots:{default:!0}}))},y={title:"Decorators/Em",component:i,tags:["autodocs"],argTypes:{color:{control:{type:"color"}}},parameters:b(w)},{Story:n}=$();var C=h("<!> <!>",1);function p(a,t){l(t,!1),k();var e=C(),r=c(e);n(r,{name:"Mark mode",args:{text:"Text on grey background"},get template(){return s},parameters:{__svelteCsf:{rawCode:"<Em {...args}>{args.text}</Em>"}}});var o=_(r,2);n(o,{name:"Badge mode",args:{text:"Text on badge",color:"navy",mode:"badge"},get template(){return s},parameters:{__svelteCsf:{rawCode:"<Em {...args}>{args.text}</Em>"}}}),m(a,e),f()}p.__docgen={data:[],name:"Em.stories.svelte"};const d=E(p,y),z=["MarkMode","BadgeMode"],F={...d.MarkMode,tags:["svelte-csf-v5"]},G={...d.BadgeMode,tags:["svelte-csf-v5"]};export{G as BadgeMode,F as MarkMode,z as __namedExportsOrder,y as default};
