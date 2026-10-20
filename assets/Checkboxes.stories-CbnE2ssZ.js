import{ab as F,al as Z,p as l,ax as $,i as S,af as ee,t as I,a as d,ad as R,aE as te,aL as ae,f as g,ah as i,c,ag as se,g as m,s as P,d as le,e as L,ae as ie,H as V}from"./iframe-DjMvT2c-.js";import{c as ne,w as oe,i as re,d as ce,a as de}from"./create-runtime-stories-myTZTF-x.js";import{C as y}from"./Checkbox-L_HdD7Yu.js";import{e as me}from"./each-BmB-i6yh.js";import{s as j}from"./class-PrT4n0Js.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-ChCi6Xsq.js";import"./input-B7BQplxa.js";import"./this-C3HUEk1G.js";import"./attributes-DayBpKoh.js";var be=g('<legend class="ons-fieldset__legend ons-u-mb-no"><span> </span></legend>'),pe=g('<p class="ons-checkboxes__label"> </p>'),ue=g('<fieldset><!> <div class="ons-input-items"><!> <div class="ons-checkboxes__items"><!> <!></div></div></fieldset>');function T(x,t){F(t,!0);const p=Z();let b=l(t,"title",3,null),u=l(t,"hideTitle",3,!1),h=l(t,"label",3,null),a=l(t,"items",7,null),_=l(t,"compact",3,!1),C=l(t,"value",31,()=>te([])),w=l(t,"cls",3,null),E=l(t,"onChange",3,()=>{});const f=ae([]);$("checkboxes",f);function k(e){E()(e),p("change",e)}var n=ue(),v=c(n);{var G=e=>{var s=be(),o=c(s);let r;var N=c(o);I(()=>{r=j(o,1,"ons-fieldset__legend-title ons-u-pb-no",null,r,{"ons-u-vh":u()}),P(N,b())}),d(e,s)};S(v,e=>{b()&&e(G)})}var J=i(v,2),W=c(J);{var K=e=>{var s=pe(),o=c(s);I(()=>P(o,h())),d(e,s)};S(W,e=>{h()&&e(K)})}var Q=i(W,2),M=c(Q);ee(M,()=>t.children??se);var U=i(M,2);{var X=e=>{var s=le(),o=L(s);me(o,19,a,r=>r.id,(r,N,O)=>{y(r,{get compact(){return _()},onChange:k,get item(){return a()[m(O)]},set item(D){a()[m(O)]=D},get group(){return C()},set group(D){C(D)}})}),d(e,s)},Y=ie(()=>Array.isArray(a()));S(U,e=>{m(Y)&&e(X)})}I(()=>j(n,1,`ons-fieldset ${w()??""}`)),d(x,n),R()}T.__docgen={data:[{name:"children",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"title",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"hideTitle",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"label",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"items",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"CheckboxItem[]"},static:!1,readonly:!1,defaultValue:"null"},{name:"compact",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"value",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"CheckboxItem[]"},static:!1,readonly:!1,defaultValue:"..."},{name:"cls",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"onChange",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"(detail: { item: CheckboxItem; e: Event; }) => void"},static:!1,readonly:!1,defaultValue:"function"}],name:"Checkboxes.svelte"};const he=`A component for defining a group of [checkbox](/docs/inputs-checkbox--docs) elements, whose checked values can be bound to Svelte variables, or grouped in an array.

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
`,fe=`In this example, the child textboxes are defined explicitly.\r
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
`,ke={title:"Form elements/Checkboxes",component:T,tags:["autodocs"],argTypes:{},parameters:oe(he)},{Story:H}=ce(),q=[{id:"ice-cream",label:"Ice cream",checked:!0},{id:"sprinkles",label:"Sprinkles",description:"Highly recommended!",checked:!1},{id:"disabled",label:"Disabled option",checked:!1,disabled:!0}];var B=g("<!> <!> <!>",1);function z(x,t){F(t,!1),re();var p=B(),b=L(p);{let a=V(()=>({label:"Select items",items:q}));H(b,{name:"Default",get args(){return m(a)},parameters:{__svelteCsf:{rawCode:"<Checkboxes {...args} />"}}})}var u=i(b,2);{let a=V(()=>({items:q,compact:!0}));H(u,{name:"Compact without label",get args(){return m(a)},parameters:{__svelteCsf:{rawCode:"<Checkboxes {...args} />"}}})}var h=i(u,2);{let a=V(()=>de(fe));H(h,{name:"Individually defined checkboxes",asChild:!0,parameters:{...m(a),__svelteCsf:{rawCode:`<Checkboxes label="Select items">\r
	<Checkbox id="ice-cream" label="Ice cream" />\r
	<Checkbox id="sprinkles" label="Sprinkles" description="Highly recommended!" />\r
	<Checkbox id="disabled" label="Disabled option" disabled />\r
</Checkboxes>`}},children:(_,C)=>{T(_,{label:"Select items",children:(w,E)=>{var f=B(),k=L(f);y(k,{id:"ice-cream",label:"Ice cream"});var n=i(k,2);y(n,{id:"sprinkles",label:"Sprinkles",description:"Highly recommended!"});var v=i(n,2);y(v,{id:"disabled",label:"Disabled option",disabled:!0}),d(w,f)},$$slots:{default:!0}})},$$slots:{default:!0}})}d(x,p),R()}z.__docgen={data:[],name:"Checkboxes.stories.svelte"};const A=ne(z,ke),Ve=["Default","CompactWithoutLabel","IndividuallyDefinedCheckboxes"],He={...A.Default,tags:["svelte-csf-v5"]},Le={...A.CompactWithoutLabel,tags:["svelte-csf-v5"]},Te={...A.IndividuallyDefinedCheckboxes,tags:["svelte-csf-v5"]};export{Le as CompactWithoutLabel,He as Default,Te as IndividuallyDefinedCheckboxes,Ve as __namedExportsOrder,ke as default};
