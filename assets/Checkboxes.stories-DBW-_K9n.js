import{p as $,a,aj as J,ao as K,j as b,i as T,t as A,e as o,h as E,n,k as i,o as g,q as M,c as Q,f as j,g as _}from"./iframe-KpfOLoBS.js";import{i as R,w as U,c as X,d as Y,a as Z}from"./create-runtime-stories-Hnml5Fan.js";import{C}from"./Checkbox-0WLP9QNx.js";import{e as ee,i as te}from"./each-CuKrsh8O.js";import{s as se}from"./slot-BP_Qo1ZM.js";import{s as N}from"./class-Dzh9Da8g.js";import{b as ae}from"./misc-DbKJ_z_Z.js";import"./attributes-C9gB30n4.js";import"./input-BIhAbFfU.js";import"./this-Ik-RE1sh.js";import"./attributes-Co-1QMVx.js";var ie=b('<legend class="ons-fieldset__legend ons-u-mb-no"><span> </span></legend>'),le=b('<p class="ons-checkboxes__label"> </p>'),ne=b('<fieldset><!> <div class="ons-input-items"><!> <div class="ons-checkboxes__items"><!> <!></div></div></fieldset>');function O(D,e){$(e,!1);let c=a(e,"title",8,""),m=a(e,"hideTitle",8,!1),f=a(e,"label",8,""),r=a(e,"items",8,null),S=a(e,"compact",8,!1),u=a(e,"value",28,()=>[]),w=a(e,"cls",8,"");const I=K([]);J("checkboxes",I),R();var h=ne(),k=n(h);{var q=t=>{var s=ie(),l=n(s);let x;var H=n(l);A(p=>{x=N(l,1,"ons-fieldset__legend-title ons-u-pb-no",null,x,p),M(H,c())},[()=>({"ons-u-vh":m()})],g),o(t,s)};T(k,t=>{c()&&t(q)})}var v=i(k,2),d=n(v);{var y=t=>{var s=le(),l=n(s);A(()=>M(l,f())),o(t,s)};T(d,t=>{f()&&t(y)})}var V=i(d,2),B=n(V);se(B,e,"default",{},null);var F=i(B,2);{var G=t=>{var s=Q(),l=j(s);ee(l,1,r,te,(x,H)=>{C(x,{get item(){return _(H)},get compact(){return S()},get group(){return u()},set group(p){u(p)},$$events:{change(p){ae.call(this,e,p)}},$$legacy:!0})}),o(t,s)};T(F,t=>{Array.isArray(r())&&t(G)})}A(()=>N(h,1,`ons-fieldset ${w()??""}`)),o(D,h),E()}O.__docgen={data:[{name:"title",visibility:"public",description:"Title/legend for parent <fieldset>",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"hideTitle",visibility:"public",description:"Visually hide the title/legend",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"label",visibility:"public",description:'Descriptive "how to" label for inputs',keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"items",visibility:"public",description:"Optional: Define the checkboxes as an array of {id, label, checked, description?}",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"object[]"},static:!1,readonly:!1,defaultValue:"null"},{name:"compact",visibility:"public",description:"Compact mode (no borders)",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"value",visibility:"public",description:'Binding for selected checkboxes (if checkboxes are defined as "items")',keywords:[],kind:"let",type:{kind:"type",type:"array",text:"object[]"},static:!1,readonly:!1,defaultValue:"[]"},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],name:"Checkboxes.svelte"};const oe=`A component for defining a group of [checkbox](/docs/inputs-checkbox--docs) elements, whose checked values can be bound to Svelte variables, or grouped in an array.

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
`,re={title:"Inputs/Checkboxes",component:O,tags:["autodocs"],argTypes:{},parameters:U(oe)},{Story:L}=Y(),P=[{id:"ice-cream",label:"Ice cream",checked:!0},{id:"sprinkles",label:"Sprinkles",description:"Highly recommended!",checked:!1},{id:"disabled",label:"Disabled option",checked:!1,disabled:!0}];var de=b("<!> <!> <!>",1),pe=b("<!> <!> <!>",1);function z(D,e){$(e,!1),R();var c=pe(),m=j(c);const f=g(()=>({label:"Select items",items:P}));L(m,{name:"Default",get args(){return _(f)},parameters:{__svelteCsf:{rawCode:"<Checkboxes {...args} />"}}});var r=i(m,2);const S=g(()=>({items:P,compact:!0}));L(r,{name:"Compact without label",get args(){return _(S)},parameters:{__svelteCsf:{rawCode:"<Checkboxes {...args} />"}}});var u=i(r,2);const w=g(()=>Z(ce));L(u,{name:"Individually defined checkboxes",asChild:!0,parameters:{..._(w),__svelteCsf:{rawCode:`<Checkboxes label="Select items">
	<Checkbox id="ice-cream" label="Ice cream" />
	<Checkbox id="sprinkles" label="Sprinkles" description="Highly recommended!" />
	<Checkbox id="disabled" label="Disabled option" disabled />
</Checkboxes>`}},children:(I,h)=>{O(I,{label:"Select items",children:(k,q)=>{var v=de(),d=j(v);C(d,{id:"ice-cream",label:"Ice cream"});var y=i(d,2);C(y,{id:"sprinkles",label:"Sprinkles",description:"Highly recommended!"});var V=i(y,2);C(V,{id:"disabled",label:"Disabled option",disabled:!0}),o(k,v)},$$slots:{default:!0}})},$$slots:{default:!0}}),o(D,c),E()}z.__docgen={data:[],name:"Checkboxes.stories.svelte"};const W=X(z,re),Ce=["Default","CompactWithoutLabel","IndividuallyDefinedCheckboxes"],De={...W.Default,tags:["svelte-csf-v5"]},Se={...W.CompactWithoutLabel,tags:["svelte-csf-v5"]},we={...W.IndividuallyDefinedCheckboxes,tags:["svelte-csf-v5"]};export{Se as CompactWithoutLabel,De as Default,we as IndividuallyDefinedCheckboxes,Ce as __namedExportsOrder,re as default};
