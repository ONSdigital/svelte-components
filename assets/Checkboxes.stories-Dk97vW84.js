import{A as q,p as l,ag as R,al as z,f as b,i as H,t as T,j as o,I as E,k as n,J as a,h as g,K as N,l as Q,m as O,G as _}from"./iframe-DU2bJwNo.js";import{i as F,w as U,c as X,d as Y,a as Z}from"./create-runtime-stories-BaiRa-aW.js";import{C}from"./Checkbox-lWRuWFhX.js";import{e as ee,i as te}from"./each-BdQf2F8v.js";import{s as se}from"./slot-BP_Qo1ZM.js";import{s as P}from"./class-B9SFUanI.js";import{b as le}from"./misc-Cfm_v-pb.js";import"./attributes-D6OZFcxA.js";import"./input-B99lCzr-.js";import"./this-7jtvp3Jc.js";import"./attributes-q36Eg1F8.js";var ae=b('<legend class="ons-fieldset__legend ons-u-mb-no"><span> </span></legend>'),ie=b('<p class="ons-checkboxes__label"> </p>'),ne=b('<fieldset><!> <div class="ons-input-items"><!> <div class="ons-checkboxes__items"><!> <!></div></div></fieldset>');function W(D,e){q(e,!1);let c=l(e,"title",8,null),m=l(e,"hideTitle",8,!1),u=l(e,"label",8,null),r=l(e,"items",8,null),S=l(e,"compact",8,!1),f=l(e,"value",28,()=>[]),w=l(e,"cls",8,null);const I=z([]);R("checkboxes",I),F();var h=ne(),k=n(h);{var B=t=>{var s=ae(),i=n(s);let x;var A=n(i);T(p=>{x=P(i,1,"ons-fieldset__legend-title ons-u-pb-no",null,x,p),N(A,c())},[()=>({"ons-u-vh":m()})],g),o(t,s)};H(k,t=>{c()&&t(B)})}var v=a(k,2),d=n(v);{var y=t=>{var s=ie(),i=n(s);T(()=>N(i,u())),o(t,s)};H(d,t=>{u()&&t(y)})}var V=a(d,2),M=n(V);se(M,e,"default",{},null);var J=a(M,2);{var K=t=>{var s=Q(),i=O(s);ee(i,1,r,te,(x,A)=>{C(x,{get item(){return _(A)},get compact(){return S()},get group(){return f()},set group(p){f(p)},$$events:{change(p){le.call(this,e,p)}},$$legacy:!0})}),o(t,s)};H(J,t=>{Array.isArray(r())&&t(K)})}T(()=>P(h,1,`ons-fieldset ${w()??""}`)),o(D,h),E()}W.__docgen={data:[{name:"title",visibility:"public",description:"Title/legend for parent <fieldset>",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"hideTitle",visibility:"public",description:"Visually hide the title/legend",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"label",visibility:"public",description:'Descriptive "how to" label for inputs',keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"items",visibility:"public",description:"Optional: Define the checkboxes as an array of {id, label, checked, description?}",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"object[]"},static:!1,readonly:!1,defaultValue:"null"},{name:"compact",visibility:"public",description:"Compact mode (no borders)",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"value",visibility:"public",description:'Binding for selected checkboxes (if checkboxes are defined as "items")',keywords:[],kind:"let",type:{kind:"type",type:"array",text:"object[]"},static:!1,readonly:!1,defaultValue:"[]"},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"Checkboxes.svelte"};const oe=`A component for defining a group of [checkbox](/docs/inputs-checkbox--docs) elements, whose checked values can be bound to Svelte variables, or grouped in an array.

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
`,ce=`In this example, the child textboxes are defined explicitly.

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
`,re={title:"Form elements/Checkboxes",component:W,tags:["autodocs"],argTypes:{},parameters:U(oe)},{Story:L}=Y(),$=[{id:"ice-cream",label:"Ice cream",checked:!0},{id:"sprinkles",label:"Sprinkles",description:"Highly recommended!",checked:!1},{id:"disabled",label:"Disabled option",checked:!1,disabled:!0}];var de=b("<!> <!> <!>",1),pe=b("<!> <!> <!>",1);function G(D,e){q(e,!1),F();var c=pe(),m=O(c);const u=g(()=>({label:"Select items",items:$}));L(m,{name:"Default",get args(){return _(u)},parameters:{__svelteCsf:{rawCode:"<Checkboxes {...args} />"}}});var r=a(m,2);const S=g(()=>({items:$,compact:!0}));L(r,{name:"Compact without label",get args(){return _(S)},parameters:{__svelteCsf:{rawCode:"<Checkboxes {...args} />"}}});var f=a(r,2);const w=g(()=>Z(ce));L(f,{name:"Individually defined checkboxes",asChild:!0,parameters:{..._(w),__svelteCsf:{rawCode:`<Checkboxes label="Select items">
	<Checkbox id="ice-cream" label="Ice cream" />
	<Checkbox id="sprinkles" label="Sprinkles" description="Highly recommended!" />
	<Checkbox id="disabled" label="Disabled option" disabled />
</Checkboxes>`}},children:(I,h)=>{W(I,{label:"Select items",children:(k,B)=>{var v=de(),d=O(v);C(d,{id:"ice-cream",label:"Ice cream"});var y=a(d,2);C(y,{id:"sprinkles",label:"Sprinkles",description:"Highly recommended!"});var V=a(y,2);C(V,{id:"disabled",label:"Disabled option",disabled:!0}),o(k,v)},$$slots:{default:!0}})},$$slots:{default:!0}}),o(D,c),E()}G.__docgen={data:[],name:"Checkboxes.stories.svelte"};const j=X(G,re),Ce=["Default","CompactWithoutLabel","IndividuallyDefinedCheckboxes"],De={...j.Default,tags:["svelte-csf-v5"]},Se={...j.CompactWithoutLabel,tags:["svelte-csf-v5"]},we={...j.IndividuallyDefinedCheckboxes,tags:["svelte-csf-v5"]};export{Se as CompactWithoutLabel,De as Default,we as IndividuallyDefinedCheckboxes,Ce as __namedExportsOrder,re as default};
