import{ab as M,p as l,av as Q,i as I,t as V,a as r,ad as N,aF as U,f as _,c as o,ae as i,g as m,s as j,d as X,e as A,an as Y,q as Z,u as ee,H}from"./iframe-Btj2Y3yR.js";import{i as P,c as te,w as se,d as ae,a as le}from"./create-runtime-stories-Cj_5ws55.js";import{C as x}from"./Checkbox-DP6FaYC-.js";import{e as ie,i as ne}from"./each-DHuLB8C_.js";import{s as oe}from"./slot-BP_Qo1ZM.js";import{s as q}from"./class-cCsrD29L.js";import{b as re}from"./misc-BmqR69s5.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-BwFTOGhD.js";import"./input-DfVKcZ4J.js";import"./this-DsQy5QEW.js";import"./attributes-DayBpKoh.js";var ce=_('<legend class="ons-fieldset__legend ons-u-mb-no"><span> </span></legend>'),de=_('<p class="ons-checkboxes__label"> </p>'),pe=_('<fieldset><!> <div class="ons-input-items"><!> <div class="ons-checkboxes__items"><!> <!></div></div></fieldset>');function L(C,e){M(e,!1);let c=l(e,"title",8,null),u=l(e,"hideTitle",8,!1),d=l(e,"label",8,null),p=l(e,"items",8,null),a=l(e,"compact",8,!1),f=l(e,"value",28,()=>[]),W=l(e,"cls",8,null);const D=U([]);Q("checkboxes",D),P();var h=pe(),b=o(h);{var k=t=>{var s=ce(),n=o(s);let g;var S=o(n);V(()=>{g=q(n,1,"ons-fieldset__legend-title ons-u-pb-no",null,g,{"ons-u-vh":u()}),j(S,c())}),r(t,s)};I(b,t=>{c()&&t(k)})}var v=i(b,2),y=o(v);{var R=t=>{var s=de(),n=o(s);V(()=>j(n,d())),r(t,s)};I(y,t=>{d()&&t(R)})}var z=i(y,2),$=o(z);oe($,e,"default",{},null);var G=i($,2);{var J=t=>{var s=X(),n=A(s);ie(n,1,p,ne,(g,S)=>{x(g,{get item(){return m(S)},get compact(){return a()},get group(){return f()},set group(w){f(w)},$$events:{change(w){re.call(this,e,w)}},$$legacy:!0})}),r(t,s)},K=Y(()=>(Z(p()),ee(()=>Array.isArray(p()))));I(G,t=>{m(K)&&t(J)})}V(()=>q(h,1,`ons-fieldset ${W()??""}`)),r(C,h),N()}L.__docgen={data:[{name:"title",visibility:"public",description:"Title/legend for parent <fieldset>",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"hideTitle",visibility:"public",description:"Visually hide the title/legend",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"label",visibility:"public",description:'Descriptive "how to" label for inputs',keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"items",visibility:"public",description:"Optional: Define the checkboxes as an array of {id, label, checked, description?}",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"object[]"},static:!1,readonly:!1,defaultValue:"null"},{name:"compact",visibility:"public",description:"Compact mode (no borders)",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"value",visibility:"public",description:'Binding for selected checkboxes (if checkboxes are defined as "items")',keywords:[],kind:"let",type:{kind:"type",type:"array",text:"object[]"},static:!1,readonly:!1,defaultValue:"[]"},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"Checkboxes.svelte"};const be=`A component for defining a group of [checkbox](/docs/inputs-checkbox--docs) elements, whose checked values can be bound to Svelte variables, or grouped in an array.

Based on [this ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/checkboxes). (Note: In some use cases, it may be preferable to use raw HTML \`<input type="checkbox">\` components and style these using CSS.)

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Checkboxes } from "@onsvisual/svelte-components";

  let items = [
    { id: "ice-cream", label: "Ice cream", checked: true },
    { id: "sprinkles", label: "Sprinkles", description: "Highly recommended!", checked: false },
    { id: "disabled", label: "Disabled option", checked: false, disabled: true },
  ];

  let selected = []; // An array of the selected items
<\/script>

<Checkboxes {items} bind:value={selected} label="Select items">
\`\`\`
`,me=`In this example, the child textboxes are defined explicitly.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Checkbox, Checkboxes } from "@onsvisual/svelte-components";

  let selected = []; // An array of the selected items
<\/script>

<Checkboxes label="Select items">
  <Checkbox id="ice-cream" label="Ice cream" bind:group={selected} />
  <Checkbox id="sprinkles" label="Sprinkles" description="Highly recommended!" bind:group={selected} />
  <Checkbox id="disabled" label="Disabled option" bind:group={selected} />
</Checkboxes>
\`\`\`
`,ue={title:"Form elements/Checkboxes",component:L,tags:["autodocs"],argTypes:{},parameters:se(be)},{Story:T}=ae(),B=[{id:"ice-cream",label:"Ice cream",checked:!0},{id:"sprinkles",label:"Sprinkles",description:"Highly recommended!",checked:!1},{id:"disabled",label:"Disabled option",checked:!1,disabled:!0}];var F=_("<!> <!> <!>",1);function E(C,e){M(e,!1),P();var c=F(),u=A(c);{let a=H(()=>({label:"Select items",items:B}));T(u,{name:"Default",get args(){return m(a)},parameters:{__svelteCsf:{rawCode:"<Checkboxes {...args} />"}}})}var d=i(u,2);{let a=H(()=>({items:B,compact:!0}));T(d,{name:"Compact without label",get args(){return m(a)},parameters:{__svelteCsf:{rawCode:"<Checkboxes {...args} />"}}})}var p=i(d,2);{let a=H(()=>le(me));T(p,{name:"Individually defined checkboxes",asChild:!0,parameters:{...m(a),__svelteCsf:{rawCode:`<Checkboxes label="Select items">
	<Checkbox id="ice-cream" label="Ice cream" />
	<Checkbox id="sprinkles" label="Sprinkles" description="Highly recommended!" />
	<Checkbox id="disabled" label="Disabled option" disabled />
</Checkboxes>`}},children:(f,W)=>{L(f,{label:"Select items",children:(D,h)=>{var b=F(),k=A(b);x(k,{id:"ice-cream",label:"Ice cream"});var v=i(k,2);x(v,{id:"sprinkles",label:"Sprinkles",description:"Highly recommended!"});var y=i(v,2);x(y,{id:"disabled",label:"Disabled option",disabled:!0}),r(D,b)},$$slots:{default:!0}})},$$slots:{default:!0}})}r(C,c),N()}E.__docgen={data:[],name:"Checkboxes.stories.svelte"};const O=te(E,ue),Ie=["Default","CompactWithoutLabel","IndividuallyDefinedCheckboxes"],Ve={...O.Default,tags:["svelte-csf-v5"]},He={...O.CompactWithoutLabel,tags:["svelte-csf-v5"]},Te={...O.IndividuallyDefinedCheckboxes,tags:["svelte-csf-v5"]};export{He as CompactWithoutLabel,Ve as Default,Te as IndividuallyDefinedCheckboxes,Ie as __namedExportsOrder,ue as default};
