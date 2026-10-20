import{ab as P,al as U,p as n,ah as c,i as A,t as C,an as te,a as u,ad as B,c as s,f as h,s as H,am as ae,af as ie,ag as X,g as W,e as G,av as ne,H as N}from"./iframe-DjMvT2c-.js";import{c as le,w as se,i as oe,d as de,a as re}from"./create-runtime-stories-myTZTF-x.js";import{s as I,b as ce,c as ue}from"./attributes-ChCi6Xsq.js";import{s as T}from"./class-PrT4n0Js.js";import{e as pe}from"./each-BmB-i6yh.js";import{s as Y}from"./style-CM3dwi71.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DayBpKoh.js";var me=h('<span class="ons-label__aria-hidden-description" aria-hidden="true"><span class="ons-label__description ons-radio__label--with-description"> </span></span>'),ve=h('<span class="ons-label__visually-hidden-description ons-u-vh"> </span>'),fe=h('<span><span><input type="radio" class="ons-radio__input ons-js-radio"/> <label> <!></label> <!></span></span>');function F(_,e){P(e,!0);const d=U();function p(t,l,g){return g?{id:t,label:l,description:g}:{id:t,label:l}}let k=n(e,"id",3,null),D=n(e,"label",3,""),o=n(e,"description",3,null),a=n(e,"item",19,()=>p(k()??"",D()??"",o()??"")),x=n(e,"value",15,null),y=n(e,"compact",3,!1),V=n(e,"onChange",3,()=>{});function S(t){if(t.currentTarget.checked){x(a());const l={value:x(),e:t};V()(l),d("change",l)}}var R=fe();let m;var b=s(R);let w;var r=s(b),v=c(r,2);let j;var L=s(v),E=c(L);{var M=t=>{var l=me(),g=s(l),ee=s(g);C(()=>H(ee,a().description)),u(t,l)};A(E,t=>{a().description&&t(M)})}var i=c(v,2);{var f=t=>{var l=ve(),g=s(l);C(()=>{I(l,"id",`${k()??""}-label-description-hint`),H(g,a().description)}),u(t,l)};A(i,t=>{a().description&&t(f)})}C(()=>{var t;m=T(R,1,"ons-radios__item",null,m,{"ons-radios__item--no-border":y()}),w=T(b,1,"ons-radio",null,w,{"ons-radio--no-border":y()}),I(r,"id",a().id),ce(r,a()),ue(r,((t=x())==null?void 0:t.id)===a().id),I(r,"name",e.groupId),j=T(v,1,"ons-radio__label",null,j,{"ons-label--with-description":o()}),I(v,"for",a().id),I(v,"id",`${a().id??""}-label`),I(v,"aria-describedby",a().description?`${a().id}-label-description-hint`:null),H(L,`${a().label??""} `)}),te("change",r,S),u(_,R),B()}ae(["change"]);F.__docgen={data:[{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"label",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"description",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"item",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"RadioItem"},static:!1,readonly:!1,defaultValue:"..."},{name:"groupId",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"value",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"RadioItem"},static:!1,readonly:!1,defaultValue:"..."},{name:"compact",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"onChange",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"(detail: { value: RadioItem; e: Event; }) => void"},static:!1,readonly:!1,defaultValue:"function"}],name:"Radio.svelte"};var ye=h('<legend class="ons-fieldset__legend ons-u-mb-no"><span> </span></legend>'),be=h('<p class="ons-radios__label"> </p>'),ge=h('<fieldset><!> <div class="ons-input-items"><!> <div class="ons-radios__items"><!> <!></div></div></fieldset>');function q(_,e){P(e,!0);const d=U();let p=n(e,"title",3,null),k=n(e,"hideTitle",3,!1),D=n(e,"id",3,"radios"),o=n(e,"label",3,null),a=n(e,"value",15,null),x=n(e,"items",19,()=>[]),y=n(e,"compact",3,!1),V=n(e,"cls",3,null),S=n(e,"onChange",3,()=>{});function R(i){S()(i),d("change",i)}var m=ge(),b=s(m);{var w=i=>{var f=ye(),t=s(f);let l;var g=s(t);C(()=>{l=T(t,1,"ons-fieldset__legend-title ons-u-pb-no",null,l,{"ons-u-vh":k()}),H(g,p())}),u(i,f)};A(b,i=>{p()&&i(w)})}var r=c(b,2),v=s(r);{var j=i=>{var f=be(),t=s(f);C(()=>H(t,o())),u(i,f)};A(v,i=>{o()&&i(j)})}var L=c(v,2),E=s(L);ie(E,()=>e.children??X);var M=c(E,2);pe(M,17,x,i=>i.id,(i,f)=>{F(i,{get item(){return W(f)},get groupId(){return D()},get compact(){return y()},onChange:R,get value(){return a()},set value(t){a(t)}})}),C(()=>T(m,1,`ons-fieldset ${V()??""}`)),u(_,m),B()}q.__docgen={data:[{name:"children",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"title",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"hideTitle",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"radios"'},{name:"label",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"value",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"object",text:"RadioItem"},static:!1,readonly:!1,defaultValue:"..."},{name:"items",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"RadioItem[]"},static:!1,readonly:!1,defaultValue:"[]"},{name:"compact",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"cls",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"onChange",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"(detail: { value: RadioItem; e: Event; }) => void"},static:!1,readonly:!1,defaultValue:"function"}],name:"Radios.svelte"};const he=`A component for defining a group of radio inputs, where the selected item id can be bound to a Svelte variable.

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
`,_e=`In this example, the radios are defined explicitly rather than via an array.\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { Radio, Radios } from "@onsvisual/svelte-components";\r
\r
  let selected; // A binding for the selected item ID\r
<\/script>\r
\r
<Radios label="Select one">\r
  <Radio\r
    groupId="radios"\r
    id="house"\r
    label="House or bungalow"\r
    description="Includes terraced, semi-detached and detached homes."\r
  />\r
  <Radio groupId="radios" id="flat" label="Flat, maisonette or apartment" />\r
  <Radio groupId="radios" id="mobile" label="Caravan or other mobile or temporary structure" />\r
</Radios>\r
\`\`\`\r
`,J=(_,e=X)=>{var d=Z();Y(d,"",{},{padding:"12px"});var p=s(d);q(p,ne(e)),u(_,d)},ke={title:"Form elements/Radios",component:q,tags:["autodocs"],argTypes:{},parameters:se(he)},{Story:O}=de();let K=[{id:"house",label:"House or bungalow",description:"Includes terraced, semi-detached and detached homes."},{id:"flat",label:"Flat, maisonette or apartment"},{id:"mobile",label:"Caravan or other mobile or temporary structure"}];var Z=h("<div><!></div>"),Q=h("<!> <!> <!>",1);function $(_,e){P(e,!1),oe();var d=Q(),p=G(d);{let o=N(()=>({label:"Select one",id:"radios",items:K}));O(p,{name:"Default",get args(){return W(o)},get template(){return J},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">\r
	<Radios {...args} />\r
</div>`}}})}var k=c(p,2);{let o=N(()=>({id:"radios",items:K,compact:!0}));O(k,{name:"Compact without label",get args(){return W(o)},get template(){return J},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">\r
	<Radios {...args} />\r
</div>`}}})}var D=c(k,2);{let o=N(()=>re(_e));O(D,{name:"Individually defined radios",asChild:!0,parameters:{...W(o),__svelteCsf:{rawCode:`<div style:padding="12px">\r
	<Radios label="Select one">\r
		<Radio\r
			groupId="radios"\r
			id="house"\r
			label="House or bungalow"\r
			description="Includes terraced, semi-detached and detached homes."\r
		/>\r
		<Radio groupId="radios" id="flat" label="Flat, maisonette or apartment" />\r
		<Radio groupId="radios" id="mobile" label="Caravan or other mobile or temporary structure" />\r
	</Radios>\r
</div>`}},children:(a,x)=>{var y=Z();Y(y,"",{},{padding:"12px"});var V=s(y);q(V,{label:"Select one",children:(S,R)=>{var m=Q(),b=G(m);F(b,{groupId:"radios",id:"house",label:"House or bungalow",description:"Includes terraced, semi-detached and detached homes."});var w=c(b,2);F(w,{groupId:"radios",id:"flat",label:"Flat, maisonette or apartment"});var r=c(w,2);F(r,{groupId:"radios",id:"mobile",label:"Caravan or other mobile or temporary structure"}),u(S,m)},$$slots:{default:!0}}),u(a,y)},$$slots:{default:!0}})}u(_,d),B()}$.__docgen={data:[],name:"Radios.stories.svelte"};const z=le($,ke),He=["Default","CompactWithoutLabel","IndividuallyDefinedRadios"],Te={...z.Default,tags:["svelte-csf-v5"]},Fe={...z.CompactWithoutLabel,tags:["svelte-csf-v5"]},je={...z.IndividuallyDefinedRadios,tags:["svelte-csf-v5"]};export{Fe as CompactWithoutLabel,Te as Default,je as IndividuallyDefinedRadios,He as __namedExportsOrder,ke as default};
