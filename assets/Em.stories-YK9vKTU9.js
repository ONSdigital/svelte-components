import{p as l,j as c,f as g,Z as _,k as f,e as m,h,_ as u,V as v,t as x,q as M}from"./iframe-Cap6nYun.js";import{w as E,c as k,i as b,d as $}from"./create-runtime-stories-BOuZQ2dE.js";import{E as i}from"./Em-BHMSAhjZ.js";import"./slot-BP_Qo1ZM.js";import"./attributes-3iI9tcbp.js";import"./class-Dzh9Da8g.js";import"./attributes-Co-1QMVx.js";import"./style-CcY6orqc.js";import"./utils-B8WOfuUY.js";import"./_commonjsHelpers-CqkleIqs.js";const w=`A component to visually highlight text. Can be used for inline text or to provide a "badge".\r
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
`,s=(r,t=_)=>{i(r,u(t,{children:(e,a)=>{var o=v();x(()=>M(o,t().text)),m(e,o)},$$slots:{default:!0}}))},y={title:"Decorators/Em",component:i,tags:["autodocs"],argTypes:{color:{control:{type:"color"}}},parameters:E(w)},{Story:n}=$();var C=c("<!> <!>",1);function p(r,t){l(t,!1),b();var e=C(),a=g(e);n(a,{name:"Mark mode",args:{text:"Text on grey background"},get template(){return s},parameters:{__svelteCsf:{rawCode:"<Em {...args}>{args.text}</Em>"}}});var o=f(a,2);n(o,{name:"Badge mode",args:{text:"Text on badge",color:"navy",mode:"badge"},get template(){return s},parameters:{__svelteCsf:{rawCode:"<Em {...args}>{args.text}</Em>"}}}),m(r,e),h()}p.__docgen={data:[],name:"Em.stories.svelte"};const d=k(p,y),R=["MarkMode","BadgeMode"],V={...d.MarkMode,tags:["svelte-csf-v5"]},Z={...d.BadgeMode,tags:["svelte-csf-v5"]};export{Z as BadgeMode,V as MarkMode,R as __namedExportsOrder,y as default};
