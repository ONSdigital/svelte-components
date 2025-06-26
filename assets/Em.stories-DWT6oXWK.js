import{p as l,j as c,f as g,Z as _,k as f,e as m,h,_ as u,V as v,t as x,q as M}from"./iframe-DJCmgmUg.js";import{w as E,c as k,i as b,d as $}from"./create-runtime-stories-j_K_dLYm.js";import{E as i}from"./Em-BHaNn-JL.js";import"./slot-BP_Qo1ZM.js";import"./class-Dzh9Da8g.js";import"./attributes-Co-1QMVx.js";import"./style-CcY6orqc.js";import"./utils-DXjJT5W2.js";import"./_commonjsHelpers-CqkleIqs.js";const w=`A component to visually highlight text. Can be used for inline text or to provide a "badge".

Consists of a \`<mark>\` element with a custom background color, where the highlighted text will automatically appear black or white to maximise contrast.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Em } from "@onsvisual/svelte-components";
<\/script>

<Em color="steelblue">Highlighted text</Em>
\`\`\`
`,r=(a,e=_)=>{i(a,u(e,{children:(t,s)=>{var o=v();x(()=>M(o,e().text)),m(t,o)},$$slots:{default:!0}}))},y={title:"Decorators/Em",component:i,tags:["autodocs"],argTypes:{color:{control:{type:"color"}}},parameters:E(w)},{Story:n}=$();var C=c("<!> <!>",1);function p(a,e){l(e,!1),b();var t=C(),s=g(t);n(s,{name:"Mark mode",args:{text:"Text on grey background"},get template(){return r},parameters:{__svelteCsf:{rawCode:"<Em {...args}>{args.text}</Em>"}}});var o=f(s,2);n(o,{name:"Badge mode",args:{text:"Text on badge",color:"navy",mode:"badge"},get template(){return r},parameters:{__svelteCsf:{rawCode:"<Em {...args}>{args.text}</Em>"}}}),m(a,t),h()}p.__docgen={data:[],name:"Em.stories.svelte"};const d=k(p,y),P=["MarkMode","BadgeMode"],R={...d.MarkMode,tags:["svelte-csf-v5"]},V={...d.BadgeMode,tags:["svelte-csf-v5"]};export{V as BadgeMode,R as MarkMode,P as __namedExportsOrder,y as default};
