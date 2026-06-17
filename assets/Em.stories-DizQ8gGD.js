import{ab as l,e as c,as as g,ae as _,a as m,ad as f,f as h,at as u,b as v,t as x,s as M}from"./iframe-CArMXtmx.js";import{c as E,w as b,i as k,d as $}from"./create-runtime-stories-BEqwKI8x.js";import{E as i}from"./Em-CpiWRp1I.js";import"./preload-helper-Dp1pzeXC.js";import"./slot-BP_Qo1ZM.js";import"./attributes-BmILT1Qd.js";import"./class-C3cnp_aW.js";import"./attributes-DayBpKoh.js";import"./style-qhnr2LWw.js";import"./utils-VWytQRnm.js";import"./_commonjsHelpers-CqkleIqs.js";const w=`A component to visually highlight text. Can be used for inline text or to provide a "badge".

Consists of a \`<mark>\` element with a custom background color, where the highlighted text will automatically appear black or white to maximise contrast.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Em } from "@onsvisual/svelte-components";
<\/script>

<Em color="steelblue">Highlighted text</Em>
\`\`\`
`,r=(a,t=g)=>{i(a,u(t,{children:(e,s)=>{var o=v();x(()=>M(o,t().text)),m(e,o)},$$slots:{default:!0}}))},y={title:"Decorators/Em",component:i,tags:["autodocs"],argTypes:{color:{control:{type:"color"}}},parameters:b(w)},{Story:n}=$();var C=h("<!> <!>",1);function p(a,t){l(t,!1),k();var e=C(),s=c(e);n(s,{name:"Mark mode",args:{text:"Text on grey background"},get template(){return r},parameters:{__svelteCsf:{rawCode:"<Em {...args}>{args.text}</Em>"}}});var o=_(s,2);n(o,{name:"Badge mode",args:{text:"Text on badge",color:"navy",mode:"badge"},get template(){return r},parameters:{__svelteCsf:{rawCode:"<Em {...args}>{args.text}</Em>"}}}),m(a,e),f()}p.__docgen={data:[],name:"Em.stories.svelte"};const d=E(p,y),z=["MarkMode","BadgeMode"],F={...d.MarkMode,tags:["svelte-csf-v5"]},G={...d.BadgeMode,tags:["svelte-csf-v5"]};export{G as BadgeMode,F as MarkMode,z as __namedExportsOrder,y as default};
