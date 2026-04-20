import{A as g,f as h,m as b,W as u,J as p,j as m,I as _,X as k,k as f,t as x}from"./iframe-B941gBln.js";import{w as C,c as y,i as w,d as S}from"./create-runtime-stories-CB3f-Q7v.js";import{s as D}from"./style-CNURdi_Z.js";import{C as d}from"./Checkbox-DSZVVaZk.js";import"./attributes-q36Eg1F8.js";import"./attributes-DPG55JBU.js";import"./class-B9SFUanI.js";import"./input-DKh6yRy3.js";import"./this-CTzljyPb.js";const G=`A checkbox element with various styling and labelling options. Its "checked" attribute can be bound to a Svelte boolean (true/false) variable.

Based on [this ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/checkboxes).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Checkbox } from "@onsvisual/svelte-components";

  let checked = false;
<\/script>

<Checkbox id="checkbox" label="Select this" bind:checked />
\`\`\`
`,r=(n,t=u)=>{var e=A();let o;var a=f(e);d(a,k(t)),x(()=>{var s,i;return o=D(e,"",o,{padding:"12px",background:((s=t())==null?void 0:s.variant)==="ghost"?"var(--ons-color-ocean-blue)":null,color:((i=t())==null?void 0:i.variant)==="ghost"?"white":null})}),m(n,e)},$={title:"Form elements/Checkbox",component:d,tags:["autodocs"],argTypes:{},parameters:C(G)},{Story:l}=S();var A=h("<div><!></div>"),I=h("<!> <!> <!>",1);function v(n,t){g(t,!1),w();var e=I(),o=b(e);l(o,{name:"Default",args:{id:"checkbox1",label:"Select this"},get template(){return r},parameters:{__svelteCsf:{rawCode:`<div
	style:padding="12px"
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
	style:color={args?.variant === "ghost" ? "white" : null}
>
	<Checkbox {...args} />
</div>`}}});var a=p(o,2);l(a,{name:"Compact",args:{id:"checkbox2",label:"Select this",compact:!0},get template(){return r},parameters:{__svelteCsf:{rawCode:`<div
	style:padding="12px"
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
	style:color={args?.variant === "ghost" ? "white" : null}
>
	<Checkbox {...args} />
</div>`}}});var s=p(a,2);l(s,{name:"Ghost checkbox",args:{id:"checkbox3",label:"Select this",variant:"ghost"},get template(){return r},parameters:{__svelteCsf:{rawCode:`<div
	style:padding="12px"
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
	style:color={args?.variant === "ghost" ? "white" : null}
>
	<Checkbox {...args} />
</div>`}}}),m(n,e),_()}v.__docgen={data:[],name:"Checkbox.stories.svelte"};const c=y(v,$),T=["Default","Compact","GhostCheckbox"],W={...c.Default,tags:["svelte-csf-v5"]},X={...c.Compact,tags:["svelte-csf-v5"]},q={...c.GhostCheckbox,tags:["svelte-csf-v5"]};export{X as Compact,W as Default,q as GhostCheckbox,T as __namedExportsOrder,$ as default};
