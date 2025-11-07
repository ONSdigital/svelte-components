import{p as $,a,aj as J,ao as K,j as b,i as T,t as A,e as o,h as E,n,k as l,o as g,q as M,c as Q,f as j,g as _}from"./iframe-DRONkSsd.js";import{i as R,w as U,c as X,d as Y,a as Z}from"./create-runtime-stories-DLzChHzu.js";import{C}from"./Checkbox-D8c2Nn3d.js";import{e as ee,i as te}from"./each-zMDmBvqu.js";import{s as se}from"./slot-BP_Qo1ZM.js";import{s as N}from"./class-Dzh9Da8g.js";import{b as ae}from"./misc-Ci_myNu_.js";import"./attributes-DfYTFl74.js";import"./input-CzCz5PCV.js";import"./this-yMqGqEwP.js";import"./attributes-Co-1QMVx.js";var le=b('<legend class="ons-fieldset__legend ons-u-mb-no"><span> </span></legend>'),ie=b('<p class="ons-checkboxes__label"> </p>'),ne=b('<fieldset><!> <div class="ons-input-items"><!> <div class="ons-checkboxes__items"><!> <!></div></div></fieldset>');function O(D,e){$(e,!1);let r=a(e,"title",8,null),m=a(e,"hideTitle",8,!1),u=a(e,"label",8,null),c=a(e,"items",8,null),S=a(e,"compact",8,!1),f=a(e,"value",28,()=>[]),w=a(e,"cls",8,null);const I=K([]);J("checkboxes",I),R();var h=ne(),k=n(h);{var q=t=>{var s=le(),i=n(s);let x;var H=n(i);A(p=>{x=N(i,1,"ons-fieldset__legend-title ons-u-pb-no",null,x,p),M(H,r())},[()=>({"ons-u-vh":m()})],g),o(t,s)};T(k,t=>{r()&&t(q)})}var v=l(k,2),d=n(v);{var y=t=>{var s=ie(),i=n(s);A(()=>M(i,u())),o(t,s)};T(d,t=>{u()&&t(y)})}var V=l(d,2),B=n(V);se(B,e,"default",{},null);var F=l(B,2);{var G=t=>{var s=Q(),i=j(s);ee(i,1,c,te,(x,H)=>{C(x,{get item(){return _(H)},get compact(){return S()},get group(){return f()},set group(p){f(p)},$$events:{change(p){ae.call(this,e,p)}},$$legacy:!0})}),o(t,s)};T(F,t=>{Array.isArray(c())&&t(G)})}A(()=>N(h,1,`ons-fieldset ${w()??""}`)),o(D,h),E()}O.__docgen={data:[{name:"title",visibility:"public",description:"Title/legend for parent <fieldset>",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"hideTitle",visibility:"public",description:"Visually hide the title/legend",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"label",visibility:"public",description:'Descriptive "how to" label for inputs',keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"items",visibility:"public",description:"Optional: Define the checkboxes as an array of {id, label, checked, description?}",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"object[]"},static:!1,readonly:!1,defaultValue:"null"},{name:"compact",visibility:"public",description:"Compact mode (no borders)",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"value",visibility:"public",description:'Binding for selected checkboxes (if checkboxes are defined as "items")',keywords:[],kind:"let",type:{kind:"type",type:"array",text:"object[]"},static:!1,readonly:!1,defaultValue:"[]"},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"Checkboxes.svelte"};const oe=`A component for defining a group of [checkbox](/docs/inputs-checkbox--docs) elements, whose checked values can be bound to Svelte variables, or grouped in an array.\r
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
`,re=`In this example, the child textboxes are defined explicitly.\r
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
`,ce={title:"Inputs/Checkboxes",component:O,tags:["autodocs"],argTypes:{},parameters:U(oe)},{Story:L}=Y(),P=[{id:"ice-cream",label:"Ice cream",checked:!0},{id:"sprinkles",label:"Sprinkles",description:"Highly recommended!",checked:!1},{id:"disabled",label:"Disabled option",checked:!1,disabled:!0}];var de=b("<!> <!> <!>",1),pe=b("<!> <!> <!>",1);function z(D,e){$(e,!1),R();var r=pe(),m=j(r);const u=g(()=>({label:"Select items",items:P}));L(m,{name:"Default",get args(){return _(u)},parameters:{__svelteCsf:{rawCode:"<Checkboxes {...args} />"}}});var c=l(m,2);const S=g(()=>({items:P,compact:!0}));L(c,{name:"Compact without label",get args(){return _(S)},parameters:{__svelteCsf:{rawCode:"<Checkboxes {...args} />"}}});var f=l(c,2);const w=g(()=>Z(re));L(f,{name:"Individually defined checkboxes",asChild:!0,parameters:{..._(w),__svelteCsf:{rawCode:`<Checkboxes label="Select items">\r
	<Checkbox id="ice-cream" label="Ice cream" />\r
	<Checkbox id="sprinkles" label="Sprinkles" description="Highly recommended!" />\r
	<Checkbox id="disabled" label="Disabled option" disabled />\r
</Checkboxes>`}},children:(I,h)=>{O(I,{label:"Select items",children:(k,q)=>{var v=de(),d=j(v);C(d,{id:"ice-cream",label:"Ice cream"});var y=l(d,2);C(y,{id:"sprinkles",label:"Sprinkles",description:"Highly recommended!"});var V=l(y,2);C(V,{id:"disabled",label:"Disabled option",disabled:!0}),o(k,v)},$$slots:{default:!0}})},$$slots:{default:!0}}),o(D,r),E()}z.__docgen={data:[],name:"Checkboxes.stories.svelte"};const W=X(z,ce),Ce=["Default","CompactWithoutLabel","IndividuallyDefinedCheckboxes"],De={...W.Default,tags:["svelte-csf-v5"]},Se={...W.CompactWithoutLabel,tags:["svelte-csf-v5"]},we={...W.IndividuallyDefinedCheckboxes,tags:["svelte-csf-v5"]};export{Se as CompactWithoutLabel,De as Default,we as IndividuallyDefinedCheckboxes,Ce as __namedExportsOrder,ce as default};
