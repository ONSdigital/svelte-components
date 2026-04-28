import{A as l,f as c,m as g,V as _,J as f,j as m,I as h,W as u,O as v,t as x,K as M}from"./iframe-IP6ocM0a.js";import{w as E,c as b,i as k,d as $}from"./create-runtime-stories-BvMOJ_th.js";import{E as i}from"./Em-CPuvL8Ph.js";import"./slot-BP_Qo1ZM.js";import"./attributes-CBM4GyKF.js";import"./class-B9SFUanI.js";import"./attributes-q36Eg1F8.js";import"./style-CNURdi_Z.js";import"./utils-VWytQRnm.js";import"./_commonjsHelpers-CqkleIqs.js";const w=`A component to visually highlight text. Can be used for inline text or to provide a "badge".

Consists of a \`<mark>\` element with a custom background color, where the highlighted text will automatically appear black or white to maximise contrast.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Em } from "@onsvisual/svelte-components";
<\/script>

<Em color="steelblue">Highlighted text</Em>
\`\`\`
`,s=(a,t=_)=>{i(a,u(t,{children:(e,r)=>{var o=v();x(()=>M(o,t().text)),m(e,o)},$$slots:{default:!0}}))},y={title:"Decorators/Em",component:i,tags:["autodocs"],argTypes:{color:{control:{type:"color"}}},parameters:E(w)},{Story:n}=$();var C=c("<!> <!>",1);function p(a,t){l(t,!1),k();var e=C(),r=g(e);n(r,{name:"Mark mode",args:{text:"Text on grey background"},get template(){return s},parameters:{__svelteCsf:{rawCode:"<Em {...args}>{args.text}</Em>"}}});var o=f(r,2);n(o,{name:"Badge mode",args:{text:"Text on badge",color:"navy",mode:"badge"},get template(){return s},parameters:{__svelteCsf:{rawCode:"<Em {...args}>{args.text}</Em>"}}}),m(a,e),h()}p.__docgen={data:[],name:"Em.stories.svelte"};const d=b(p,y),K=["MarkMode","BadgeMode"],P={...d.MarkMode,tags:["svelte-csf-v5"]},R={...d.BadgeMode,tags:["svelte-csf-v5"]};export{R as BadgeMode,P as MarkMode,K as __namedExportsOrder,y as default};
