import{p as g,j as h,f as b,Z as u,k as p,e as d,h as _,_ as k,n as f,t as x}from"./iframe-C7mAxSNS.js";import{w as C,c as y,i as w,d as S}from"./create-runtime-stories-DYxOwgic.js";import{s as D}from"./style-CcY6orqc.js";import{C as m}from"./Checkbox-ByrYf4Zf.js";import"./attributes-Co-1QMVx.js";import"./attributes-C0fURmbW.js";import"./class-Dzh9Da8g.js";import"./input-CgZ_MwkC.js";import"./this-DGqdPsnR.js";const G=`A checkbox element with various styling and labelling options. Its "checked" attribute can be bound to a Svelte boolean (true/false) variable.

Based on [this ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/checkboxes).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Checkbox } from "@onsvisual/svelte-components";

  let checked = false;
<\/script>

<Checkbox id="checkbox" label="Select this" bind:checked />
\`\`\`
`,r=(n,t=u)=>{var e=I();let o;var a=f(e);m(a,k(t)),x(()=>{var s,i;return o=D(e,"",o,{padding:"12px",background:((s=t())==null?void 0:s.variant)==="ghost"?"var(--ons-color-ocean-blue)":null,color:((i=t())==null?void 0:i.variant)==="ghost"?"white":null})}),d(n,e)},$={title:"Inputs/Checkbox",component:m,tags:["autodocs"],argTypes:{},parameters:C(G)},{Story:c}=S();var I=h("<div><!></div>"),O=h("<!> <!> <!>",1);function v(n,t){g(t,!1),w();var e=O(),o=b(e);c(o,{name:"Default",args:{id:"checkbox1",label:"Select this"},get template(){return r},parameters:{__svelteCsf:{rawCode:`<div
	style:padding="12px"
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
	style:color={args?.variant === "ghost" ? "white" : null}
>
	<Checkbox {...args} />
</div>`}}});var a=p(o,2);c(a,{name:"Compact",args:{id:"checkbox2",label:"Select this",compact:!0},get template(){return r},parameters:{__svelteCsf:{rawCode:`<div
	style:padding="12px"
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
	style:color={args?.variant === "ghost" ? "white" : null}
>
	<Checkbox {...args} />
</div>`}}});var s=p(a,2);c(s,{name:"Ghost checkbox",args:{id:"checkbox3",label:"Select this",variant:"ghost"},get template(){return r},parameters:{__svelteCsf:{rawCode:`<div
	style:padding="12px"
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
	style:color={args?.variant === "ghost" ? "white" : null}
>
	<Checkbox {...args} />
</div>`}}}),d(n,e),_()}v.__docgen={data:[],name:"Checkbox.stories.svelte"};const l=y(v,$),q=["Default","Compact","GhostCheckbox"],z={...l.Default,tags:["svelte-csf-v5"]},F={...l.Compact,tags:["svelte-csf-v5"]},H={...l.GhostCheckbox,tags:["svelte-csf-v5"]};export{F as Compact,z as Default,H as GhostCheckbox,q as __namedExportsOrder,$ as default};
