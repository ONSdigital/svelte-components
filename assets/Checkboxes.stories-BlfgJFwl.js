import{ad as F,al as Z,p as i,aA as $,i as D,s as ee,t as I,a as r,af as G,aG as te,aP as ae,f as g,ah as l,c as d,n as se,g as p,b as M,e as ie,h as A,ag as le,K as V}from"./iframe-DdiBZH3h.js";import{c as ne,w as oe,i as ce,d as de,a as re}from"./create-runtime-stories-AZi_Zqsf.js";import{C as y}from"./Checkbox-D_jgmjGF.js";import{e as pe}from"./each-BVVoInqu.js";import{s as N}from"./class-CzCJeWpz.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DFa2Kp7L.js";import"./input-DVK6nrt2.js";import"./this-C010mvN8.js";import"./attributes-DayBpKoh.js";var me=g('<legend class="ons-fieldset__legend ons-u-mb-no"><span> </span></legend>'),be=g('<p class="ons-checkboxes__label"> </p>'),he=g('<fieldset><!> <div class="ons-input-items"><!> <div class="ons-checkboxes__items"><!> <!></div></div></fieldset>');function H(x,t){F(t,!0);const b=Z();let m=i(t,"title",3,null),h=i(t,"hideTitle",3,!1),u=i(t,"label",3,null),a=i(t,"items",7,null),C=i(t,"compact",3,!1),_=i(t,"value",31,()=>te([])),S=i(t,"cls",3,null),O=i(t,"onChange",3,()=>{});const f=ae([]);$("checkboxes",f);function k(e){O()(e),b("change",e)}var n=he(),v=d(n);{var R=e=>{var s=me(),o=d(s);let c;var P=d(o);I(()=>{c=N(o,1,"ons-fieldset__legend-title ons-u-pb-no",null,c,{"ons-u-vh":h()}),M(P,m())}),r(e,s)};D(v,e=>{m()&&e(R)})}var z=l(v,2),W=d(z);{var J=e=>{var s=be(),o=d(s);I(()=>M(o,u())),r(e,s)};D(W,e=>{u()&&e(J)})}var Q=l(W,2),E=d(Q);ee(E,()=>t.children??se);var U=l(E,2);{var X=e=>{var s=ie(),o=A(s);pe(o,19,a,c=>c.id,(c,P,B)=>{y(c,{get compact(){return C()},onChange:k,get item(){return a()[p(B)]},set item(w){a()[p(B)]=w},get group(){return _()},set group(w){_(w)}})}),r(e,s)},Y=le(()=>Array.isArray(a()));D(U,e=>{p(Y)&&e(X)})}I(()=>N(n,1,`ons-fieldset ${S()??""}`)),r(x,n),G()}H.__docgen={data:[{name:"children",visibility:"public",description:"Child content (snippet)",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"title",visibility:"public",description:"Title/legend for parent <fieldset>",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"hideTitle",visibility:"public",description:"Visually hide the title/legend",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"label",visibility:"public",description:'Descriptive "how to" label for inputs',keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"items",visibility:"public",description:"Optional: Define the checkboxes as an array of {id, label, checked, description?}",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"CheckboxItem[]"},static:!1,readonly:!1,defaultValue:"null"},{name:"compact",visibility:"public",description:"Compact mode (no borders)",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"value",visibility:"public",description:'Binding for selected checkboxes (if checkboxes are defined as "items")',keywords:[],kind:"let",type:{kind:"type",type:"array",text:"CheckboxItem[]"},static:!1,readonly:!1,defaultValue:"..."},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"onChange",visibility:"public",description:"Callback for the `change` event, called with the same value as the event's `detail`",keywords:[],kind:"let",type:{kind:"function",text:"(detail: { item: CheckboxItem; e: Event; }) => void"},static:!1,readonly:!1,defaultValue:"function"}],name:"Checkboxes.svelte"};const ue=`A component for defining a group of [checkbox](/docs/inputs-checkbox--docs) elements, whose checked values can be bound to Svelte variables, or grouped in an array.

Based on [this ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/checkboxes). (Note: In some use cases, it may be preferable to use raw HTML \`<input type="checkbox">\` components and style these using CSS.)

In Svelte 5, the group \`onChange\` callback receives \`{ item, e }\` for a changed item. The dispatched \`change\` event remains available with that object on \`event.detail\`.

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
`,fe=`In this example, the child textboxes are defined explicitly.

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
`,ke={title:"Form elements/Checkboxes",component:H,tags:["autodocs"],argTypes:{},parameters:oe(ue)},{Story:T}=de(),j=[{id:"ice-cream",label:"Ice cream",checked:!0},{id:"sprinkles",label:"Sprinkles",description:"Highly recommended!",checked:!1},{id:"disabled",label:"Disabled option",checked:!1,disabled:!0}];var q=g("<!> <!> <!>",1);function K(x,t){F(t,!1),ce();var b=q(),m=A(b);{let a=V(()=>({label:"Select items",items:j}));T(m,{name:"Default",get args(){return p(a)},parameters:{__svelteCsf:{rawCode:"<Checkboxes {...args} />"}}})}var h=l(m,2);{let a=V(()=>({items:j,compact:!0}));T(h,{name:"Compact without label",get args(){return p(a)},parameters:{__svelteCsf:{rawCode:"<Checkboxes {...args} />"}}})}var u=l(h,2);{let a=V(()=>re(fe));T(u,{name:"Individually defined checkboxes",asChild:!0,parameters:{...p(a),__svelteCsf:{rawCode:`<Checkboxes label="Select items">
	<Checkbox id="ice-cream" label="Ice cream" />
	<Checkbox id="sprinkles" label="Sprinkles" description="Highly recommended!" />
	<Checkbox id="disabled" label="Disabled option" disabled />
</Checkboxes>`}},children:(C,_)=>{H(C,{label:"Select items",children:(S,O)=>{var f=q(),k=A(f);y(k,{id:"ice-cream",label:"Ice cream"});var n=l(k,2);y(n,{id:"sprinkles",label:"Sprinkles",description:"Highly recommended!"});var v=l(n,2);y(v,{id:"disabled",label:"Disabled option",disabled:!0}),r(S,f)},$$slots:{default:!0}})},$$slots:{default:!0}})}r(x,b),G()}K.__docgen={data:[],name:"Checkboxes.stories.svelte"};const L=ne(K,ke),Ve=["Default","CompactWithoutLabel","IndividuallyDefinedCheckboxes"],Te={...L.Default,tags:["svelte-csf-v5"]},Ae={...L.CompactWithoutLabel,tags:["svelte-csf-v5"]},He={...L.IndividuallyDefinedCheckboxes,tags:["svelte-csf-v5"]};export{Ae as CompactWithoutLabel,Te as Default,He as IndividuallyDefinedCheckboxes,Ve as __namedExportsOrder,ke as default};
