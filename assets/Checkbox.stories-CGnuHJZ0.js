import{p as g,j as h,f as b,Z as u,k as p,e as d,h as _,_ as k,n as f,t as x}from"./iframe-DZk-GI4f.js";import{w as C,c as y,i as w,d as S}from"./create-runtime-stories-CzT9f7Ym.js";import{s as D}from"./style-CcY6orqc.js";import{C as m}from"./Checkbox-DpBV2Ll3.js";import"./attributes-Co-1QMVx.js";import"./attributes-CkDADBTK.js";import"./class-Dzh9Da8g.js";import"./input-D2Tjb4Br.js";import"./this-BJu20llR.js";const G=`A checkbox element with various styling and labelling options. Its "checked" attribute can be bound to a Svelte boolean (true/false) variable.\r
\r
Based on [this ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/checkboxes).\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { Checkbox } from "@onsvisual/svelte-components";\r
\r
  let checked = false;\r
<\/script>\r
\r
<Checkbox id="checkbox" label="Select this" bind:checked />\r
\`\`\`\r
`,n=(r,t=u)=>{var e=I();let o;var a=f(e);m(a,k(t)),x(()=>{var s,i;return o=D(e,"",o,{padding:"12px",background:((s=t())==null?void 0:s.variant)==="ghost"?"var(--ons-color-ocean-blue)":null,color:((i=t())==null?void 0:i.variant)==="ghost"?"white":null})}),d(r,e)},$={title:"Inputs/Checkbox",component:m,tags:["autodocs"],argTypes:{},parameters:C(G)},{Story:c}=S();var I=h("<div><!></div>"),O=h("<!> <!> <!>",1);function v(r,t){g(t,!1),w();var e=O(),o=b(e);c(o,{name:"Default",args:{id:"checkbox1",label:"Select this"},get template(){return n},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
	style:color={args?.variant === "ghost" ? "white" : null}\r
>\r
	<Checkbox {...args} />\r
</div>`}}});var a=p(o,2);c(a,{name:"Compact",args:{id:"checkbox2",label:"Select this",compact:!0},get template(){return n},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
	style:color={args?.variant === "ghost" ? "white" : null}\r
>\r
	<Checkbox {...args} />\r
</div>`}}});var s=p(a,2);c(s,{name:"Ghost checkbox",args:{id:"checkbox3",label:"Select this",variant:"ghost"},get template(){return n},parameters:{__svelteCsf:{rawCode:`<div\r
	style:padding="12px"\r
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}\r
	style:color={args?.variant === "ghost" ? "white" : null}\r
>\r
	<Checkbox {...args} />\r
</div>`}}}),d(r,e),_()}v.__docgen={data:[],name:"Checkbox.stories.svelte"};const l=y(v,$),q=["Default","Compact","GhostCheckbox"],z={...l.Default,tags:["svelte-csf-v5"]},F={...l.Compact,tags:["svelte-csf-v5"]},H={...l.GhostCheckbox,tags:["svelte-csf-v5"]};export{F as Compact,z as Default,H as GhostCheckbox,q as __namedExportsOrder,$ as default};
