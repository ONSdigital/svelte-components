import{ad as N,al as Q,p as n,ah as c,i as E,t as R,an as te,a as p,af as P,c as s,f as _,b as T,am as ae,s as ie,n as X,g as O,h as K,ax as ne,K as A}from"./iframe-f67rGsxv.js";import{c as le,w as se,i as oe,d as de,a as re}from"./create-runtime-stories-Ua86Psvv.js";import{s as C,b as ce,c as pe}from"./attributes-jbjqwhbX.js";import{s as j}from"./class-8kYv-OY_.js";import{e as ue}from"./each-ByJU7_As.js";import{s as Y}from"./style-CYmCgZEu.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DayBpKoh.js";var me=_('<span class="ons-label__aria-hidden-description" aria-hidden="true"><span class="ons-label__description ons-radio__label--with-description"> </span></span>'),fe=_('<span class="ons-label__visually-hidden-description ons-u-vh"> </span>'),ve=_('<span><span><input type="radio" class="ons-radio__input ons-js-radio"/> <label> <!></label> <!></span></span>');function q(k,e){N(e,!0);const d=Q();function u(t,l,g){return g?{id:t,label:l,description:g}:{id:t,label:l}}let w=n(e,"id",3,null),D=n(e,"label",3,""),o=n(e,"description",3,null),a=n(e,"item",19,()=>u(w()??"",D()??"",o()??"")),b=n(e,"value",15),y=n(e,"compact",3,!1),S=n(e,"onChange",3,()=>{});b()===void 0&&b(null);function V(t){if(t.currentTarget.checked){b(a());const l={value:b(),e:t};S()(l),d("change",l)}}var I=ve();let m;var h=s(I);let x;var r=s(h),f=c(r,2);let F;var H=s(f),L=c(H);{var B=t=>{var l=me(),g=s(l),ee=s(g);R(()=>T(ee,a().description)),p(t,l)};E(L,t=>{a().description&&t(B)})}var i=c(f,2);{var v=t=>{var l=fe(),g=s(l);R(()=>{C(l,"id",`${w()??""}-label-description-hint`),T(g,a().description)}),p(t,l)};E(i,t=>{a().description&&t(v)})}R(()=>{var t;m=j(I,1,"ons-radios__item",null,m,{"ons-radios__item--no-border":y()}),x=j(h,1,"ons-radio",null,x,{"ons-radio--no-border":y()}),C(r,"id",a().id),ce(r,a()),pe(r,((t=b())==null?void 0:t.id)===a().id),C(r,"name",e.groupId),F=j(f,1,"ons-radio__label",null,F,{"ons-label--with-description":o()}),C(f,"for",a().id),C(f,"id",`${a().id??""}-label`),C(f,"aria-describedby",a().description?`${a().id}-label-description-hint`:null),T(H,`${a().label??""} `)}),te("change",r,V),p(k,I),P()}ae(["change"]);q.__docgen={data:[{name:"id",visibility:"public",description:"Unique ID input",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"label",visibility:"public",description:"Label for input",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"description",visibility:"public",description:"Optional: Extended description for element",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"item",visibility:"public",description:"Optional: Define the item as an object in the form {id, label, description?}",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"RadioItem"},static:!1,readonly:!1,defaultValue:"..."},{name:"groupId",visibility:"public",description:"ID/name for radio group (required)",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"value",visibility:"public",description:"Binding selected option",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"RadioItem"},static:!1,readonly:!1,defaultValue:"..."},{name:"compact",visibility:"public",description:"Compact mode (no border)",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"onChange",visibility:"public",description:"Callback for the `change` event, called with the same value as the event's `detail`",keywords:[],kind:"let",type:{kind:"function",text:"(detail: { value: RadioItem; e: Event; }) => void"},static:!1,readonly:!1,defaultValue:"function"}],name:"Radio.svelte"};var be=_('<legend class="ons-fieldset__legend ons-u-mb-no"><span> </span></legend>'),ye=_('<p class="ons-radios__label"> </p>'),he=_('<fieldset><!> <div class="ons-input-items"><!> <div class="ons-radios__items"><!> <!></div></div></fieldset>');function W(k,e){N(e,!0);const d=Q();let u=n(e,"title",3,null),w=n(e,"hideTitle",3,!1),D=n(e,"id",3,"radios"),o=n(e,"label",3,null),a=n(e,"value",15),b=n(e,"items",19,()=>[]),y=n(e,"compact",3,!1),S=n(e,"cls",3,null),V=n(e,"onChange",3,()=>{});a()===void 0&&a(null);function I(i){V()(i),d("change",i)}var m=he(),h=s(m);{var x=i=>{var v=be(),t=s(v);let l;var g=s(t);R(()=>{l=j(t,1,"ons-fieldset__legend-title ons-u-pb-no",null,l,{"ons-u-vh":w()}),T(g,u())}),p(i,v)};E(h,i=>{u()&&i(x)})}var r=c(h,2),f=s(r);{var F=i=>{var v=ye(),t=s(v);R(()=>T(t,o())),p(i,v)};E(f,i=>{o()&&i(F)})}var H=c(f,2),L=s(H);ie(L,()=>e.children??X);var B=c(L,2);ue(B,17,b,i=>i.id,(i,v)=>{q(i,{get item(){return O(v)},get groupId(){return D()},get compact(){return y()},onChange:I,get value(){return a()},set value(t){a(t)}})}),R(()=>j(m,1,`ons-fieldset ${S()??""}`)),p(k,m),P()}W.__docgen={data:[{name:"children",visibility:"public",description:"Child content (snippet)",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"title",visibility:"public",description:"Title/legend for parent <fieldset>",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"hideTitle",visibility:"public",description:"Visually hide the title/legend",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"id",visibility:"public",description:"Unique ID/name for radio group (required)",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"radios"'},{name:"label",visibility:"public",description:'Descriptive "how to" label for inputs',keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"value",visibility:"public",description:"Binding for ID of selected option",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"RadioItem"},static:!1,readonly:!1,defaultValue:"..."},{name:"items",visibility:"public",description:"Optional: Define the radios as an array of {id, label, description?}",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"RadioItem[]"},static:!1,readonly:!1,defaultValue:"[]"},{name:"compact",visibility:"public",description:"Compact mode (no border)",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"onChange",visibility:"public",description:"Callback for the `change` event, called with the same value as the event's `detail`",keywords:[],kind:"let",type:{kind:"function",text:"(detail: { value: RadioItem; e: Event; }) => void"},static:!1,readonly:!1,defaultValue:"function"}],name:"Radios.svelte"};const ge=`A component for defining a group of radio inputs, where the selected item id can be bound to a Svelte variable.

Based on [this ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/radios). (Note: In some use cases, it may be preferable to use raw HTML \`<input type="radio">\` components and style these using CSS.)

In Svelte 5, the group \`onChange\` callback receives \`{ value, e }\`, where \`value\` is the selected item and \`e\` is the native change event. The dispatched \`change\` event remains supported with the same object on \`event.detail\`.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Radios } from "@onsvisual/svelte-components";

  let items = [
    {
      id: "house",
      label: "House or bungalow",
      description: "Includes terraced, semi-detached and detached homes.",
    },
    { id: "flat", label: "Flat, maisonette or apartment" },
    { id: "mobile", label: "Caravan or other mobile or temporary structure" },
  ];

  let selected = $state(null); // A binding for the selected item
<\/script>

<Radios {items} bind:value={selected} label="Select one" />
\`\`\`
`,_e=`In this example, the radios are defined explicitly rather than via an array.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Radio, Radios } from "@onsvisual/svelte-components";
<\/script>

<Radios label="Select one">
  <Radio
    groupId="radios"
    id="house"
    label="House or bungalow"
    description="Includes terraced, semi-detached and detached homes."
  />
  <Radio groupId="radios" id="flat" label="Flat, maisonette or apartment" />
  <Radio groupId="radios" id="mobile" label="Caravan or other mobile or temporary structure" />
</Radios>
\`\`\`
`,z=(k,e=X)=>{var d=Z();Y(d,"",{},{padding:"12px"});var u=s(d);W(u,ne(e)),p(k,d)},ke={title:"Form elements/Radios",component:W,tags:["autodocs"],argTypes:{},parameters:se(ge)},{Story:M}=de();let G=[{id:"house",label:"House or bungalow",description:"Includes terraced, semi-detached and detached homes."},{id:"flat",label:"Flat, maisonette or apartment"},{id:"mobile",label:"Caravan or other mobile or temporary structure"}];var Z=_("<div><!></div>"),J=_("<!> <!> <!>",1);function $(k,e){N(e,!1),oe();var d=J(),u=K(d);{let o=A(()=>({label:"Select one",id:"radios",items:G}));M(u,{name:"Default",get args(){return O(o)},get template(){return z},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Radios {...args} />
</div>`}}})}var w=c(u,2);{let o=A(()=>({id:"radios",items:G,compact:!0}));M(w,{name:"Compact without label",get args(){return O(o)},get template(){return z},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Radios {...args} />
</div>`}}})}var D=c(w,2);{let o=A(()=>re(_e));M(D,{name:"Individually defined radios",asChild:!0,parameters:{...O(o),__svelteCsf:{rawCode:`<div style:padding="12px">
	<Radios label="Select one">
		<Radio
			groupId="radios"
			id="house"
			label="House or bungalow"
			description="Includes terraced, semi-detached and detached homes."
		/>
		<Radio groupId="radios" id="flat" label="Flat, maisonette or apartment" />
		<Radio groupId="radios" id="mobile" label="Caravan or other mobile or temporary structure" />
	</Radios>
</div>`}},children:(a,b)=>{var y=Z();Y(y,"",{},{padding:"12px"});var S=s(y);W(S,{label:"Select one",children:(V,I)=>{var m=J(),h=K(m);q(h,{groupId:"radios",id:"house",label:"House or bungalow",description:"Includes terraced, semi-detached and detached homes."});var x=c(h,2);q(x,{groupId:"radios",id:"flat",label:"Flat, maisonette or apartment"});var r=c(x,2);q(r,{groupId:"radios",id:"mobile",label:"Caravan or other mobile or temporary structure"}),p(V,m)},$$slots:{default:!0}}),p(a,y)},$$slots:{default:!0}})}p(k,d),P()}$.__docgen={data:[],name:"Radios.stories.svelte"};const U=le($,ke),Te=["Default","CompactWithoutLabel","IndividuallyDefinedRadios"],je={...U.Default,tags:["svelte-csf-v5"]},qe={...U.CompactWithoutLabel,tags:["svelte-csf-v5"]},Fe={...U.IndividuallyDefinedRadios,tags:["svelte-csf-v5"]};export{qe as CompactWithoutLabel,je as Default,Fe as IndividuallyDefinedRadios,Te as __namedExportsOrder,ke as default};
