import{ad as N,al as Q,p as n,ah as c,i as E,t as R,an as te,a as p,af as P,c as s,f as g,b as T,am as ae,s as ie,n as X,g as O,h as K,ax as ne,K as B}from"./iframe-DdiBZH3h.js";import{c as le,w as se,i as oe,d as de,a as re}from"./create-runtime-stories-AZi_Zqsf.js";import{s as C,b as ce,c as pe}from"./attributes-DFa2Kp7L.js";import{s as j}from"./class-CzCJeWpz.js";import{e as ue}from"./each-BVVoInqu.js";import{s as Y}from"./style-CQNhTFCE.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DayBpKoh.js";var me=g('<span class="ons-label__aria-hidden-description" aria-hidden="true"><span class="ons-label__description ons-radio__label--with-description"> </span></span>'),ve=g('<span class="ons-label__visually-hidden-description ons-u-vh"> </span>'),fe=g('<span><span><input type="radio" class="ons-radio__input ons-js-radio"/> <label> <!></label> <!></span></span>');function q(_,e){N(e,!0);const d=Q();function u(t,l,h){return h?{id:t,label:l,description:h}:{id:t,label:l}}let k=n(e,"id",3,null),D=n(e,"label",3,""),o=n(e,"description",3,null),a=n(e,"item",19,()=>u(k()??"",D()??"",o()??"")),I=n(e,"value",15,null),b=n(e,"compact",3,!1),S=n(e,"onChange",3,()=>{});function V(t){if(t.currentTarget.checked){I(a());const l={value:I(),e:t};S()(l),d("change",l)}}var x=fe();let m;var y=s(x);let w;var r=s(y),v=c(r,2);let F;var H=s(v),L=c(H);{var A=t=>{var l=me(),h=s(l),ee=s(h);R(()=>T(ee,a().description)),p(t,l)};E(L,t=>{a().description&&t(A)})}var i=c(v,2);{var f=t=>{var l=ve(),h=s(l);R(()=>{C(l,"id",`${k()??""}-label-description-hint`),T(h,a().description)}),p(t,l)};E(i,t=>{a().description&&t(f)})}R(()=>{var t;m=j(x,1,"ons-radios__item",null,m,{"ons-radios__item--no-border":b()}),w=j(y,1,"ons-radio",null,w,{"ons-radio--no-border":b()}),C(r,"id",a().id),ce(r,a()),pe(r,((t=I())==null?void 0:t.id)===a().id),C(r,"name",e.groupId),F=j(v,1,"ons-radio__label",null,F,{"ons-label--with-description":o()}),C(v,"for",a().id),C(v,"id",`${a().id??""}-label`),C(v,"aria-describedby",a().description?`${a().id}-label-description-hint`:null),T(H,`${a().label??""} `)}),te("change",r,V),p(_,x),P()}ae(["change"]);q.__docgen={data:[{name:"id",visibility:"public",description:"Unique ID input",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"label",visibility:"public",description:"Label for input",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"description",visibility:"public",description:"Optional: Extended description for element",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"item",visibility:"public",description:"Optional: Define the item as an object in the form {id, label, description?}",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"RadioItem"},static:!1,readonly:!1,defaultValue:"..."},{name:"groupId",visibility:"public",description:"ID/name for radio group (required)",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"value",visibility:"public",description:"Binding selected option",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"RadioItem"},static:!1,readonly:!1,defaultValue:"..."},{name:"compact",visibility:"public",description:"Compact mode (no border)",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"onChange",visibility:"public",description:"Callback for the `change` event, called with the same value as the event's `detail`",keywords:[],kind:"let",type:{kind:"function",text:"(detail: { value: RadioItem; e: Event; }) => void"},static:!1,readonly:!1,defaultValue:"function"}],name:"Radio.svelte"};var be=g('<legend class="ons-fieldset__legend ons-u-mb-no"><span> </span></legend>'),ye=g('<p class="ons-radios__label"> </p>'),he=g('<fieldset><!> <div class="ons-input-items"><!> <div class="ons-radios__items"><!> <!></div></div></fieldset>');function W(_,e){N(e,!0);const d=Q();let u=n(e,"title",3,null),k=n(e,"hideTitle",3,!1),D=n(e,"id",3,"radios"),o=n(e,"label",3,null),a=n(e,"value",15,null),I=n(e,"items",19,()=>[]),b=n(e,"compact",3,!1),S=n(e,"cls",3,null),V=n(e,"onChange",3,()=>{});function x(i){V()(i),d("change",i)}var m=he(),y=s(m);{var w=i=>{var f=be(),t=s(f);let l;var h=s(t);R(()=>{l=j(t,1,"ons-fieldset__legend-title ons-u-pb-no",null,l,{"ons-u-vh":k()}),T(h,u())}),p(i,f)};E(y,i=>{u()&&i(w)})}var r=c(y,2),v=s(r);{var F=i=>{var f=ye(),t=s(f);R(()=>T(t,o())),p(i,f)};E(v,i=>{o()&&i(F)})}var H=c(v,2),L=s(H);ie(L,()=>e.children??X);var A=c(L,2);ue(A,17,I,i=>i.id,(i,f)=>{q(i,{get item(){return O(f)},get groupId(){return D()},get compact(){return b()},onChange:x,get value(){return a()},set value(t){a(t)}})}),R(()=>j(m,1,`ons-fieldset ${S()??""}`)),p(_,m),P()}W.__docgen={data:[{name:"children",visibility:"public",description:"Child content (snippet)",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"title",visibility:"public",description:"Title/legend for parent <fieldset>",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"hideTitle",visibility:"public",description:"Visually hide the title/legend",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"id",visibility:"public",description:"Unique ID/name for radio group (required)",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"radios"'},{name:"label",visibility:"public",description:'Descriptive "how to" label for inputs',keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"value",visibility:"public",description:"Binding for ID of selected option",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"RadioItem"},static:!1,readonly:!1,defaultValue:"..."},{name:"items",visibility:"public",description:"Optional: Define the radios as an array of {id, label, description?}",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"RadioItem[]"},static:!1,readonly:!1,defaultValue:"[]"},{name:"compact",visibility:"public",description:"Compact mode (no border)",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"onChange",visibility:"public",description:"Callback for the `change` event, called with the same value as the event's `detail`",keywords:[],kind:"let",type:{kind:"function",text:"(detail: { value: RadioItem; e: Event; }) => void"},static:!1,readonly:!1,defaultValue:"function"}],name:"Radios.svelte"};const ge=`A component for defining a group of radio inputs, where the selected item id can be bound to a Svelte variable.

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

  let selected; // A binding for the selected item
<\/script>

<Radios {items} bind:value={selected} label="Select one">
\`\`\`
`,_e=`In this example, the radios are defined explicitly rather than via an array.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Radio, Radios } from "@onsvisual/svelte-components";

  let selected; // A binding for the selected item ID
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
`,z=(_,e=X)=>{var d=Z();Y(d,"",{},{padding:"12px"});var u=s(d);W(u,ne(e)),p(_,d)},ke={title:"Form elements/Radios",component:W,tags:["autodocs"],argTypes:{},parameters:se(ge)},{Story:M}=de();let G=[{id:"house",label:"House or bungalow",description:"Includes terraced, semi-detached and detached homes."},{id:"flat",label:"Flat, maisonette or apartment"},{id:"mobile",label:"Caravan or other mobile or temporary structure"}];var Z=g("<div><!></div>"),J=g("<!> <!> <!>",1);function $(_,e){N(e,!1),oe();var d=J(),u=K(d);{let o=B(()=>({label:"Select one",id:"radios",items:G}));M(u,{name:"Default",get args(){return O(o)},get template(){return z},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Radios {...args} />
</div>`}}})}var k=c(u,2);{let o=B(()=>({id:"radios",items:G,compact:!0}));M(k,{name:"Compact without label",get args(){return O(o)},get template(){return z},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Radios {...args} />
</div>`}}})}var D=c(k,2);{let o=B(()=>re(_e));M(D,{name:"Individually defined radios",asChild:!0,parameters:{...O(o),__svelteCsf:{rawCode:`<div style:padding="12px">
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
</div>`}},children:(a,I)=>{var b=Z();Y(b,"",{},{padding:"12px"});var S=s(b);W(S,{label:"Select one",children:(V,x)=>{var m=J(),y=K(m);q(y,{groupId:"radios",id:"house",label:"House or bungalow",description:"Includes terraced, semi-detached and detached homes."});var w=c(y,2);q(w,{groupId:"radios",id:"flat",label:"Flat, maisonette or apartment"});var r=c(w,2);q(r,{groupId:"radios",id:"mobile",label:"Caravan or other mobile or temporary structure"}),p(V,m)},$$slots:{default:!0}}),p(a,b)},$$slots:{default:!0}})}p(_,d),P()}$.__docgen={data:[],name:"Radios.stories.svelte"};const U=le($,ke),Te=["Default","CompactWithoutLabel","IndividuallyDefinedRadios"],je={...U.Default,tags:["svelte-csf-v5"]},qe={...U.CompactWithoutLabel,tags:["svelte-csf-v5"]},Fe={...U.IndividuallyDefinedRadios,tags:["svelte-csf-v5"]};export{qe as CompactWithoutLabel,je as Default,Fe as IndividuallyDefinedRadios,Te as __namedExportsOrder,ke as default};
