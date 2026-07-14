import{ab as K,ai as te,p as i,au as ae,ae as c,i as A,t as S,aj as ie,a as u,ad as Q,c as l,f as k,aI as le,g as V,al as se,q as v,u as y,s as L,P as ne,e as U,as as oe,at as de,H as M}from"./iframe-Bt66Q56T.js";import{i as X,c as re,w as pe,d as ce,a as ue}from"./create-runtime-stories-Vm-egtMi.js";import{s as C,b as me}from"./attributes-DiodIQ6B.js";import{s as O}from"./class-Ih76KiUS.js";import{b as fe}from"./this-DSauSb5O.js";import{e as be,i as ve}from"./each-B2qHpR90.js";import{s as ye}from"./slot-BP_Qo1ZM.js";import{b as _e}from"./misc-ztCYG-oO.js";import{s as Y}from"./style-rFapobYZ.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DayBpKoh.js";var ge=k('<span class="ons-label__aria-hidden-description" aria-hidden="true"><span class="ons-label__description ons-radio__label--with-description"> </span></span>'),he=k('<span class="ons-label__visually-hidden-description ons-u-vh"> </span>'),ke=k('<span><span><input type="radio" class="ons-radio__input ons-js-radio"/> <label> <!></label> <!></span></span>');function T(w,t){K(t,!1);const s=te();let m=i(t,"id",8,null),R=i(t,"label",8,null),x=i(t,"description",8,null),e=i(t,"item",24,()=>({id:m(),label:R(),description:x()})),q=i(t,"groupId",8),D=i(t,"value",12,null),_=i(t,"compact",8,!1),d=ne();ae(()=>{var a;((a=D())==null?void 0:a.id)===e().id&&le(d,V(d).checked=!0)}),X();var g=ke();let H;var I=l(g);let h;var n=l(I);fe(n,a=>se(d,a),()=>V(d));var r=c(n,2);let F;var j=l(r),o=c(j);{var f=a=>{var b=ge(),E=l(b),ee=l(E);S(()=>L(ee,(v(e()),y(()=>e().description)))),u(a,b)};A(o,a=>{v(e()),y(()=>e().description)&&a(f)})}var p=c(r,2);{var W=a=>{var b=he(),E=l(b);S(()=>{C(b,"id",`${m()??""}-label-description-hint`),L(E,(v(e()),y(()=>e().description)))}),u(a,b)};A(p,a=>{v(e()),y(()=>e().description)&&a(W)})}S(()=>{H=O(g,1,"ons-radios__item",null,H,{"ons-radios__item--no-border":_()}),h=O(I,1,"ons-radio",null,h,{"ons-radio--no-border":_()}),C(n,"id",(v(e()),y(()=>e().id))),me(n,e()),C(n,"name",q()),F=O(r,1,"ons-radio__label",null,F,{"ons-label--with-description":x()}),C(r,"for",(v(e()),y(()=>e().id))),C(r,"id",`${v(e()),y(()=>e().id)??""}-label`),C(r,"aria-describedby",(v(e()),y(()=>e().description?`${e().id}-label-description-hint`:null))),L(j,`${v(e()),y(()=>e().label)??""} `)}),ie("change",n,a=>{var b;(b=a==null?void 0:a.target)!=null&&b.checked&&(D(e()),s("change",{value:D(),e:a}))}),u(w,g),Q()}T.__docgen={data:[{name:"id",visibility:"public",description:"Unique ID input",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"label",visibility:"public",description:"Label for input",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"description",visibility:"public",description:"Optional: Extended description for element",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"item",visibility:"public",description:"Optional: Define the item as an object in the form {id, label, description?}",keywords:[],kind:"let",static:!1,readonly:!1,defaultValue:"{ id, label, description }"},{name:"groupId",visibility:"public",description:"ID/name for radio group (required)",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"value",visibility:"public",description:"Binding selected option",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"null"},static:!1,readonly:!1,defaultValue:"null"},{name:"compact",visibility:"public",description:"Compact mode (no border)",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],name:"Radio.svelte"};var we=k('<legend class="ons-fieldset__legend ons-u-mb-no"><span> </span></legend>'),xe=k('<p class="ons-radios__label"> </p>'),Ie=k('<fieldset><!> <div class="ons-input-items"><!> <div class="ons-radios__items"><!> <!></div></div></fieldset>');function B(w,t){let s=i(t,"title",8,null),m=i(t,"hideTitle",8,!1),R=i(t,"id",8,"radios"),x=i(t,"label",8,null),e=i(t,"value",12,null),q=i(t,"items",24,()=>[]),D=i(t,"compact",8,!1),_=i(t,"cls",8,null);var d=Ie(),g=l(d);{var H=o=>{var f=we(),p=l(f);let W;var a=l(p);S(()=>{W=O(p,1,"ons-fieldset__legend-title ons-u-pb-no",null,W,{"ons-u-vh":m()}),L(a,s())}),u(o,f)};A(g,o=>{s()&&o(H)})}var I=c(g,2),h=l(I);{var n=o=>{var f=xe(),p=l(f);S(()=>L(p,x())),u(o,f)};A(h,o=>{x()&&o(n)})}var r=c(h,2),F=l(r);ye(F,t,"default",{},null);var j=c(F,2);be(j,1,q,ve,(o,f)=>{T(o,{get item(){return V(f)},get groupId(){return R()},get compact(){return D()},get value(){return e()},set value(p){e(p)},$$events:{change(p){_e.call(this,t,p)}},$$legacy:!0})}),S(()=>O(d,1,`ons-fieldset ${_()??""}`)),u(w,d)}B.__docgen={data:[{name:"title",visibility:"public",description:"Title/legend for parent <fieldset>",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"hideTitle",visibility:"public",description:"Visually hide the title/legend",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"id",visibility:"public",description:"Unique ID/name for radio group (required)",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"radios"'},{name:"label",visibility:"public",description:'Descriptive "how to" label for inputs',keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"value",visibility:"public",description:"Binding for ID of selected option",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"null"},static:!1,readonly:!1,defaultValue:"null"},{name:"items",visibility:"public",description:"Optional: Define the radios as an array of {id, label, description?}",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"object[]"},static:!1,readonly:!1,defaultValue:"[]"},{name:"compact",visibility:"public",description:"Compact mode (no border)",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"Radios.svelte"};const Re=`A component for defining a group of radio inputs, where the selected item id can be bound to a Svelte variable.

Based on [this ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/radios). (Note: In some use cases, it may be preferable to use raw HTML \`<input type="radio">\` components and style these using CSS.)

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
`,De=`In this example, the radios are defined explicitly rather than via an array.

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
`,z=(w,t=oe)=>{var s=Z();Y(s,"",{},{padding:"12px"});var m=l(s);B(m,de(t)),u(w,s)},Ce={title:"Form elements/Radios",component:B,tags:["autodocs"],argTypes:{},parameters:pe(Re)},{Story:P}=ce();let G=[{id:"house",label:"House or bungalow",description:"Includes terraced, semi-detached and detached homes."},{id:"flat",label:"Flat, maisonette or apartment"},{id:"mobile",label:"Caravan or other mobile or temporary structure"}];var Z=k("<div><!></div>"),J=k("<!> <!> <!>",1);function $(w,t){K(t,!1),X();var s=J(),m=U(s);{let e=M(()=>({label:"Select one",id:"radios",items:G}));P(m,{name:"Default",get args(){return V(e)},get template(){return z},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Radios {...args} />
</div>`}}})}var R=c(m,2);{let e=M(()=>({id:"radios",items:G,compact:!0}));P(R,{name:"Compact without label",get args(){return V(e)},get template(){return z},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Radios {...args} />
</div>`}}})}var x=c(R,2);{let e=M(()=>ue(De));P(x,{name:"Individually defined radios",asChild:!0,parameters:{...V(e),__svelteCsf:{rawCode:`<div style:padding="12px">
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
</div>`}},children:(q,D)=>{var _=Z();Y(_,"",{},{padding:"12px"});var d=l(_);B(d,{label:"Select one",children:(g,H)=>{var I=J(),h=U(I);T(h,{groupId:"radios",id:"house",label:"House or bungalow",description:"Includes terraced, semi-detached and detached homes."});var n=c(h,2);T(n,{groupId:"radios",id:"flat",label:"Flat, maisonette or apartment"});var r=c(n,2);T(r,{groupId:"radios",id:"mobile",label:"Caravan or other mobile or temporary structure"}),u(g,I)},$$slots:{default:!0}}),u(q,_)},$$slots:{default:!0}})}u(w,s),Q()}$.__docgen={data:[],name:"Radios.stories.svelte"};const N=re($,Ce),Be=["Default","CompactWithoutLabel","IndividuallyDefinedRadios"],Ee={...N.Default,tags:["svelte-csf-v5"]},Me={...N.CompactWithoutLabel,tags:["svelte-csf-v5"]},Pe={...N.IndividuallyDefinedRadios,tags:["svelte-csf-v5"]};export{Me as CompactWithoutLabel,Ee as Default,Pe as IndividuallyDefinedRadios,Be as __namedExportsOrder,Ce as default};
