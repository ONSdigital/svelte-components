import{ad as q,al as Y,p as i,aA as Z,i as D,s as ee,t as I,a as r,af as F,aO as te,f as x,ah as l,c as d,n as ae,g as p,b as N,e as se,h as A,ag as ie,K as V}from"./iframe-DGWWVtAh.js";import{c as le,w as ne,i as oe,d as ce,a as de}from"./create-runtime-stories-DpqZ-Xbz.js";import{C as g}from"./Checkbox-B-YXWTOx.js";import{e as re}from"./each-DEHiEDxj.js";import{s as P}from"./class-5fErMqfb.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-D8IEiTJ3.js";import"./input-BuCpUmvc.js";import"./this-DO141c5g.js";import"./attributes-DayBpKoh.js";var pe=x('<legend class="ons-fieldset__legend ons-u-mb-no"><span> </span></legend>'),me=x('<p class="ons-checkboxes__label"> </p>'),be=x('<fieldset><!> <div class="ons-input-items"><!> <div class="ons-checkboxes__items"><!> <!></div></div></fieldset>');function H(C,t){q(t,!0);const h=Y();let m=i(t,"title",3,null),u=i(t,"hideTitle",3,!1),f=i(t,"label",3,null),a=i(t,"items",7,null),_=i(t,"compact",3,!1),b=i(t,"value",15),S=i(t,"cls",3,null),O=i(t,"onChange",3,()=>{});b()===void 0&&b([]);const k=te([]);Z("checkboxes",k);function v(e){O()(e),h("change",e)}var n=be(),y=d(n);{var R=e=>{var s=pe(),o=d(s);let c;var B=d(o);I(()=>{c=P(o,1,"ons-fieldset__legend-title ons-u-pb-no",null,c,{"ons-u-vh":u()}),N(B,m())}),r(e,s)};D(y,e=>{m()&&e(R)})}var z=l(y,2),W=d(z);{var G=e=>{var s=me(),o=d(s);I(()=>N(o,f())),r(e,s)};D(W,e=>{f()&&e(G)})}var J=l(W,2),E=d(J);ee(E,()=>t.children??ae);var Q=l(E,2);{var U=e=>{var s=se(),o=A(s);re(o,19,a,c=>c.id,(c,B,M)=>{g(c,{get compact(){return _()},onChange:v,get item(){return a()[p(M)]},set item(w){a()[p(M)]=w},get group(){return b()},set group(w){b(w)}})}),r(e,s)},X=ie(()=>Array.isArray(a()));D(Q,e=>{p(X)&&e(U)})}I(()=>P(n,1,`ons-fieldset ${S()??""}`)),r(C,n),F()}H.__docgen={data:[{name:"children",visibility:"public",description:"Child content (snippet)",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"title",visibility:"public",description:"Title/legend for parent <fieldset>",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"hideTitle",visibility:"public",description:"Visually hide the title/legend",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"label",visibility:"public",description:'Descriptive "how to" label for inputs',keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"items",visibility:"public",description:"Optional: Define the checkboxes as an array of {id, label, checked, description?}",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"CheckboxItem[]"},static:!1,readonly:!1,defaultValue:"null"},{name:"compact",visibility:"public",description:"Compact mode (no borders)",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"value",visibility:"public",description:'Binding for selected checkboxes (if checkboxes are defined as "items")',keywords:[],kind:"let",type:{kind:"type",type:"array",text:"CheckboxItem[]"},static:!1,readonly:!1,defaultValue:"..."},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"onChange",visibility:"public",description:"Callback for the `change` event, called with the same value as the event's `detail`",keywords:[],kind:"let",type:{kind:"function",text:"(detail: { item: CheckboxItem; e: Event; }) => void"},static:!1,readonly:!1,defaultValue:"function"}],name:"Checkboxes.svelte"};const he=`A component for defining a group of [checkbox](/docs/inputs-checkbox--docs) elements, whose checked values can be bound to Svelte variables, or grouped in an array.

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

  let selected = $state([]); // An array of the selected items
<\/script>

<Checkboxes {items} bind:value={selected} label="Select items" />
\`\`\`
`,ue=`In this example, the child textboxes are defined explicitly.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Checkbox, Checkboxes } from "@onsvisual/svelte-components";

  let selected = $state([]); // An array of the selected items
<\/script>

<Checkboxes label="Select items">
  <Checkbox id="ice-cream" label="Ice cream" bind:group={selected} />
  <Checkbox id="sprinkles" label="Sprinkles" description="Highly recommended!" bind:group={selected} />
  <Checkbox id="disabled" label="Disabled option" bind:group={selected} />
</Checkboxes>
\`\`\`
`,fe={title:"Form elements/Checkboxes",component:H,tags:["autodocs"],argTypes:{},parameters:ne(he)},{Story:T}=ce(),$=[{id:"ice-cream",label:"Ice cream",checked:!0},{id:"sprinkles",label:"Sprinkles",description:"Highly recommended!",checked:!1},{id:"disabled",label:"Disabled option",checked:!1,disabled:!0}];var j=x("<!> <!> <!>",1);function K(C,t){q(t,!1),oe();var h=j(),m=A(h);{let a=V(()=>({label:"Select items",items:$}));T(m,{name:"Default",get args(){return p(a)},parameters:{__svelteCsf:{rawCode:"<Checkboxes {...args} />"}}})}var u=l(m,2);{let a=V(()=>({items:$,compact:!0}));T(u,{name:"Compact without label",get args(){return p(a)},parameters:{__svelteCsf:{rawCode:"<Checkboxes {...args} />"}}})}var f=l(u,2);{let a=V(()=>de(ue));T(f,{name:"Individually defined checkboxes",asChild:!0,parameters:{...p(a),__svelteCsf:{rawCode:`<Checkboxes label="Select items">
	<Checkbox id="ice-cream" label="Ice cream" />
	<Checkbox id="sprinkles" label="Sprinkles" description="Highly recommended!" />
	<Checkbox id="disabled" label="Disabled option" disabled />
</Checkboxes>`}},children:(_,b)=>{H(_,{label:"Select items",children:(S,O)=>{var k=j(),v=A(k);g(v,{id:"ice-cream",label:"Ice cream"});var n=l(v,2);g(n,{id:"sprinkles",label:"Sprinkles",description:"Highly recommended!"});var y=l(n,2);g(y,{id:"disabled",label:"Disabled option",disabled:!0}),r(S,k)},$$slots:{default:!0}})},$$slots:{default:!0}})}r(C,h),F()}K.__docgen={data:[],name:"Checkboxes.stories.svelte"};const L=le(K,fe),Ie=["Default","CompactWithoutLabel","IndividuallyDefinedCheckboxes"],Ve={...L.Default,tags:["svelte-csf-v5"]},Te={...L.CompactWithoutLabel,tags:["svelte-csf-v5"]},Ae={...L.IndividuallyDefinedCheckboxes,tags:["svelte-csf-v5"]};export{Te as CompactWithoutLabel,Ve as Default,Ae as IndividuallyDefinedCheckboxes,Ie as __namedExportsOrder,fe as default};
