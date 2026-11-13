import{ad as g,h as b,n as u,ah as h,a as p,af as _,f as d,ax as f,t as k,c as x}from"./iframe-UWIgwT_c.js";import{c as C,w as y,i as w,d as S}from"./create-runtime-stories-WntTm4wH.js";import{C as m}from"./Checkbox-Am_XyXdA.js";import{s as D}from"./style-JgESTiB5.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-CxnnJe_I.js";import"./class-BWaliKvu.js";import"./attributes-DayBpKoh.js";import"./input-0oGdfHgL.js";import"./this-DkxfCVKA.js";const G='A checkbox element with various styling and labelling options. Its "checked" attribute can be bound to a Svelte boolean (true/false) variable.\n\nBased on [this ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/checkboxes).\n\nIn Svelte 5, `onChange` receives `{ item, e }`, where `e` is the native change event. The dispatched `change` event remains supported and carries the same object on `event.detail`.\n\n<!-- prettier-ignore -->\n```html\n<script>\n  import { Checkbox } from "@onsvisual/svelte-components";\n\n  let checked = false;\n<\/script>\n\n<Checkbox id="checkbox" label="Select this" bind:checked />\n```\n',r=(n,t=u)=>{var e=I();let a;var o=x(e);m(o,f(t)),k(()=>{var s,i;return a=D(e,"",a,{padding:"12px",background:((s=t())==null?void 0:s.variant)==="ghost"?"var(--ons-color-ocean-blue)":null,color:((i=t())==null?void 0:i.variant)==="ghost"?"white":null})}),p(n,e)},$={title:"Form elements/Checkbox",component:m,tags:["autodocs"],argTypes:{},parameters:y(G)},{Story:c}=S();var I=d("<div><!></div>"),O=d("<!> <!> <!>",1);function v(n,t){g(t,!1),w();var e=O(),a=b(e);c(a,{name:"Default",args:{id:"checkbox1",label:"Select this"},get template(){return r},parameters:{__svelteCsf:{rawCode:`<div
	style:padding="12px"
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
	style:color={args?.variant === "ghost" ? "white" : null}
>
	<Checkbox {...args} />
</div>`}}});var o=h(a,2);c(o,{name:"Compact",args:{id:"checkbox2",label:"Select this",compact:!0},get template(){return r},parameters:{__svelteCsf:{rawCode:`<div
	style:padding="12px"
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
	style:color={args?.variant === "ghost" ? "white" : null}
>
	<Checkbox {...args} />
</div>`}}});var s=h(o,2);c(s,{name:"Ghost checkbox",args:{id:"checkbox3",label:"Select this",variant:"ghost"},get template(){return r},parameters:{__svelteCsf:{rawCode:`<div
	style:padding="12px"
	style:background={args?.variant === "ghost" ? "var(--ons-color-ocean-blue)" : null}
	style:color={args?.variant === "ghost" ? "white" : null}
>
	<Checkbox {...args} />
</div>`}}}),p(n,e),_()}v.__docgen={data:[],name:"Checkbox.stories.svelte"};const l=C(v,$),z=["Default","Compact","GhostCheckbox"],H={...l.Default,tags:["svelte-csf-v5"]},J={...l.Compact,tags:["svelte-csf-v5"]},K={...l.GhostCheckbox,tags:["svelte-csf-v5"]};export{J as Compact,H as Default,K as GhostCheckbox,z as __namedExportsOrder,$ as default};
