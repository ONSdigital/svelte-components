import{ab as N,p as l,av as Q,i as I,t as V,a as o,ad as P,aG as U,f as _,c as r,ae as i,g as m,s as j,d as X,e as A,an as Y,q as Z,u as ee,H}from"./iframe-BieOkgaL.js";import{i as E,c as te,w as se,d as ae,a as le}from"./create-runtime-stories-CYy4gM-U.js";import{C as x}from"./Checkbox-BObtIW_R.js";import{e as ie,i as ne}from"./each-ZGVcLIqw.js";import{s as re}from"./slot-BP_Qo1ZM.js";import{s as q}from"./class-B3LrzTQO.js";import{b as oe}from"./misc-BxTF2YZt.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-C9k8Ok3D.js";import"./input-tchtlQGS.js";import"./this-a-fmEguH.js";import"./attributes-DayBpKoh.js";var ce=_('<legend class="ons-fieldset__legend ons-u-mb-no"><span> </span></legend>'),de=_('<p class="ons-checkboxes__label"> </p>'),pe=_('<fieldset><!> <div class="ons-input-items"><!> <div class="ons-checkboxes__items"><!> <!></div></div></fieldset>');function L(C,e){N(e,!1);let c=l(e,"title",8,null),u=l(e,"hideTitle",8,!1),d=l(e,"label",8,null),p=l(e,"items",8,null),a=l(e,"compact",8,!1),f=l(e,"value",28,()=>[]),W=l(e,"cls",8,null);const D=U([]);Q("checkboxes",D),E();var h=pe(),b=r(h);{var k=t=>{var s=ce(),n=r(s);let g;var S=r(n);V(()=>{g=q(n,1,"ons-fieldset__legend-title ons-u-pb-no",null,g,{"ons-u-vh":u()}),j(S,c())}),o(t,s)};I(b,t=>{c()&&t(k)})}var v=i(b,2),y=r(v);{var G=t=>{var s=de(),n=r(s);V(()=>j(n,d())),o(t,s)};I(y,t=>{d()&&t(G)})}var R=i(y,2),$=r(R);re($,e,"default",{},null);var z=i($,2);{var J=t=>{var s=X(),n=A(s);ie(n,1,p,ne,(g,S)=>{x(g,{get item(){return m(S)},get compact(){return a()},get group(){return f()},set group(w){f(w)},$$events:{change(w){oe.call(this,e,w)}},$$legacy:!0})}),o(t,s)},K=Y(()=>(Z(p()),ee(()=>Array.isArray(p()))));I(z,t=>{m(K)&&t(J)})}V(()=>q(h,1,`ons-fieldset ${W()??""}`)),o(C,h),P()}L.__docgen={data:[{name:"title",visibility:"public",description:"Title/legend for parent <fieldset>",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"hideTitle",visibility:"public",description:"Visually hide the title/legend",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"label",visibility:"public",description:'Descriptive "how to" label for inputs',keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"items",visibility:"public",description:"Optional: Define the checkboxes as an array of {id, label, checked, description?}",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"object[]"},static:!1,readonly:!1,defaultValue:"null"},{name:"compact",visibility:"public",description:"Compact mode (no borders)",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"value",visibility:"public",description:'Binding for selected checkboxes (if checkboxes are defined as "items")',keywords:[],kind:"let",type:{kind:"type",type:"array",text:"object[]"},static:!1,readonly:!1,defaultValue:"[]"},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"Checkboxes.svelte"};const be=`A component for defining a group of [checkbox](/docs/inputs-checkbox--docs) elements, whose checked values can be bound to Svelte variables, or grouped in an array.\r
\r
Based on [this ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/checkboxes). (Note: In some use cases, it may be preferable to use raw HTML \`<input type="checkbox">\` components and style these using CSS.)\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { Checkboxes } from "@onsvisual/svelte-components";\r
\r
  let items = [\r
    { id: "ice-cream", label: "Ice cream", checked: true },\r
    { id: "sprinkles", label: "Sprinkles", description: "Highly recommended!", checked: false },\r
    { id: "disabled", label: "Disabled option", checked: false, disabled: true },\r
  ];\r
\r
  let selected = []; // An array of the selected items\r
<\/script>\r
\r
<Checkboxes {items} bind:value={selected} label="Select items">\r
\`\`\`\r
`,me=`In this example, the child textboxes are defined explicitly.\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { Checkbox, Checkboxes } from "@onsvisual/svelte-components";\r
\r
  let selected = []; // An array of the selected items\r
<\/script>\r
\r
<Checkboxes label="Select items">\r
  <Checkbox id="ice-cream" label="Ice cream" bind:group={selected} />\r
  <Checkbox id="sprinkles" label="Sprinkles" description="Highly recommended!" bind:group={selected} />\r
  <Checkbox id="disabled" label="Disabled option" bind:group={selected} />\r
</Checkboxes>\r
\`\`\`\r
`,ue={title:"Form elements/Checkboxes",component:L,tags:["autodocs"],argTypes:{},parameters:se(be)},{Story:T}=ae(),B=[{id:"ice-cream",label:"Ice cream",checked:!0},{id:"sprinkles",label:"Sprinkles",description:"Highly recommended!",checked:!1},{id:"disabled",label:"Disabled option",checked:!1,disabled:!0}];var M=_("<!> <!> <!>",1);function F(C,e){N(e,!1),E();var c=M(),u=A(c);{let a=H(()=>({label:"Select items",items:B}));T(u,{name:"Default",get args(){return m(a)},parameters:{__svelteCsf:{rawCode:"<Checkboxes {...args} />"}}})}var d=i(u,2);{let a=H(()=>({items:B,compact:!0}));T(d,{name:"Compact without label",get args(){return m(a)},parameters:{__svelteCsf:{rawCode:"<Checkboxes {...args} />"}}})}var p=i(d,2);{let a=H(()=>le(me));T(p,{name:"Individually defined checkboxes",asChild:!0,parameters:{...m(a),__svelteCsf:{rawCode:`<Checkboxes label="Select items">\r
	<Checkbox id="ice-cream" label="Ice cream" />\r
	<Checkbox id="sprinkles" label="Sprinkles" description="Highly recommended!" />\r
	<Checkbox id="disabled" label="Disabled option" disabled />\r
</Checkboxes>`}},children:(f,W)=>{L(f,{label:"Select items",children:(D,h)=>{var b=M(),k=A(b);x(k,{id:"ice-cream",label:"Ice cream"});var v=i(k,2);x(v,{id:"sprinkles",label:"Sprinkles",description:"Highly recommended!"});var y=i(v,2);x(y,{id:"disabled",label:"Disabled option",disabled:!0}),o(D,b)},$$slots:{default:!0}})},$$slots:{default:!0}})}o(C,c),P()}F.__docgen={data:[],name:"Checkboxes.stories.svelte"};const O=te(F,ue),Ie=["Default","CompactWithoutLabel","IndividuallyDefinedCheckboxes"],Ve={...O.Default,tags:["svelte-csf-v5"]},He={...O.CompactWithoutLabel,tags:["svelte-csf-v5"]},Te={...O.IndividuallyDefinedCheckboxes,tags:["svelte-csf-v5"]};export{He as CompactWithoutLabel,Ve as Default,Te as IndividuallyDefinedCheckboxes,Ie as __namedExportsOrder,ue as default};
