import{p as Q,Q as X,a as i,$ as Y,j as f,n as l,k as u,i as A,t as S,o as O,q as T,R as $,e as m,h as Z,al as ee,g as V,m as te,s as ae,f as N,Z as ie,_ as le}from"./iframe-fMuWBKru.js";import{i as z,w as se,c as ne,d as re,a as oe}from"./create-runtime-stories-D8bYQZX6.js";import{s as G}from"./style-CcY6orqc.js";import{s as C,a as de}from"./attributes-BR6Sanex.js";import{s as F}from"./class-Dzh9Da8g.js";import{b as pe}from"./this-BAuLgJN1.js";import{e as ce,i as ue}from"./each-CE6tiEIM.js";import{s as me}from"./slot-BP_Qo1ZM.js";import{b as fe}from"./misc-D0npc6ra.js";import"./attributes-Co-1QMVx.js";var ve=f('<span class="ons-label__aria-hidden-description" aria-hidden="true"><span class="ons-label__description ons-radio__label--with-description"> </span></span>'),be=f('<span class="ons-label__visually-hidden-description ons-u-vh"> </span>'),ye=f('<span><span><input type="radio" class="ons-radio__input ons-js-radio"/> <label> <!></label> <!></span></span>');function j(h,e){Q(e,!1);const n=X();let v=i(e,"id",8,null),q=i(e,"label",8,null),_=i(e,"description",8,null),a=i(e,"item",24,()=>({id:v(),label:q(),description:_()})),H=i(e,"groupId",8),k=i(e,"value",12,null),x=i(e,"compact",8,!1),b=te();Y(()=>{var t;((t=k())==null?void 0:t.id)===a().id&&ee(b,V(b).checked=!0)}),z();var p=ye();let w;var I=l(p);let R;var r=l(I);pe(r,t=>ae(b,t),()=>V(b));var o=u(r,2);let g;var D=l(o),d=u(D);{var y=t=>{var s=ve(),L=l(s),K=l(L);S(()=>T(K,a().description)),m(t,s)};A(d,t=>{a().description&&t(y)})}var c=u(o,2);{var W=t=>{var s=be(),L=l(s);S(()=>{C(s,"id",`${v()??""}-label-description-hint`),T(L,a().description)}),m(t,s)};A(c,t=>{a().description&&t(W)})}S((t,s,L)=>{w=F(p,1,"ons-radios__item",null,w,t),R=F(I,1,"ons-radio",null,R,s),C(r,"id",a().id),de(r,a()),C(r,"name",H()),g=F(o,1,"ons-radio__label",null,g,L),C(o,"for",a().id),C(o,"id",`${a().id??""}-label`),C(o,"aria-describedby",a().description?`${a().id}-label-description-hint`:null),T(D,`${a().label??""} `)},[()=>({"ons-radios__item--no-border":x()}),()=>({"ons-radio--no-border":x()}),()=>({"ons-label--with-description":_()})],O),$("change",r,t=>{var s;(s=t==null?void 0:t.target)!=null&&s.checked&&(k(a()),n("change",{value:k(),e:t}))}),m(h,p),Z()}j.__docgen={data:[{name:"id",visibility:"public",description:"Unique ID input",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"label",visibility:"public",description:"Label for input",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"description",visibility:"public",description:"Optional: Extended description for element",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"item",visibility:"public",description:"Optional: Define the item as an object in the form {id, label, description?}",keywords:[],kind:"let",static:!1,readonly:!1,defaultValue:"{ id, label, description }"},{name:"groupId",visibility:"public",description:"ID/name for radio group (required)",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"value",visibility:"public",description:"Binding selected option",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"null"},static:!1,readonly:!1,defaultValue:"null"},{name:"compact",visibility:"public",description:"Compact mode (no border)",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],name:"Radio.svelte"};var _e=f('<legend class="ons-fieldset__legend ons-u-mb-no"><span> </span></legend>'),ge=f('<p class="ons-radios__label"> </p>'),he=f('<fieldset><!> <div class="ons-input-items"><!> <div class="ons-radios__items"><!> <!></div></div></fieldset>');function B(h,e){let n=i(e,"title",8,null),v=i(e,"hideTitle",8,!1),q=i(e,"id",8,"radios"),_=i(e,"label",8,null),a=i(e,"value",12,null),H=i(e,"items",24,()=>[]),k=i(e,"compact",8,!1),x=i(e,"cls",8,null);var b=he(),p=l(b);{var w=d=>{var y=_e(),c=l(y);let W;var t=l(c);S(s=>{W=F(c,1,"ons-fieldset__legend-title ons-u-pb-no",null,W,s),T(t,n())},[()=>({"ons-u-vh":v()})],O),m(d,y)};A(p,d=>{n()&&d(w)})}var I=u(p,2),R=l(I);{var r=d=>{var y=ge(),c=l(y);S(()=>T(c,_())),m(d,y)};A(R,d=>{_()&&d(r)})}var o=u(R,2),g=l(o);me(g,e,"default",{},null);var D=u(g,2);ce(D,1,H,ue,(d,y)=>{j(d,{get item(){return V(y)},get groupId(){return q()},get compact(){return k()},get value(){return a()},set value(c){a(c)},$$events:{change(c){fe.call(this,e,c)}},$$legacy:!0})}),S(()=>F(b,1,`ons-fieldset ${x()??""}`)),m(h,b)}B.__docgen={data:[{name:"title",visibility:"public",description:"Title/legend for parent <fieldset>",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"hideTitle",visibility:"public",description:"Visually hide the title/legend",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"id",visibility:"public",description:"Unique ID/name for radio group (required)",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"radios"'},{name:"label",visibility:"public",description:'Descriptive "how to" label for inputs',keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"},{name:"value",visibility:"public",description:"Binding for ID of selected option",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"null"},static:!1,readonly:!1,defaultValue:"null"},{name:"items",visibility:"public",description:"Optional: Define the radios as an array of {id, label, description?}",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"object[]"},static:!1,readonly:!1,defaultValue:"[]"},{name:"compact",visibility:"public",description:"Compact mode (no border)",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"null"}],name:"Radios.svelte"};const ke=`A component for defining a group of radio inputs, where the selected item id can be bound to a Svelte variable.\r
\r
Based on [this ONS Design System component](https://service-manual.ons.gov.uk/design-system/components/radios). (Note: In some use cases, it may be preferable to use raw HTML \`<input type="radio">\` components and style these using CSS.)\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { Radios } from "@onsvisual/svelte-components";\r
\r
  let items = [\r
    {\r
      id: "house",\r
      label: "House or bungalow",\r
      description: "Includes terraced, semi-detached and detached homes.",\r
    },\r
    { id: "flat", label: "Flat, maisonette or apartment" },\r
    { id: "mobile", label: "Caravan or other mobile or temporary structure" },\r
  ];\r
\r
  let selected; // A binding for the selected item\r
<\/script>\r
\r
<Radios {items} bind:value={selected} label="Select one">\r
\`\`\`\r
`,xe=`In this example, the radios are defined explicitly rather than via an array.\r
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
`,P=(h,e=ie)=>{var n=Ie();G(n,"",{},{padding:"12px"});var v=l(n);B(v,le(e)),m(h,n)},we={title:"Inputs/Radios",component:B,tags:["autodocs"],argTypes:{},parameters:se(ke)},{Story:E}=re();let U=[{id:"house",label:"House or bungalow",description:"Includes terraced, semi-detached and detached homes."},{id:"flat",label:"Flat, maisonette or apartment"},{id:"mobile",label:"Caravan or other mobile or temporary structure"}];var Ie=f("<div><!></div>"),Re=f("<!> <!> <!>",1),De=f("<div><!></div>"),Ce=f("<!> <!> <!>",1);function J(h,e){Q(e,!1),z();var n=Ce(),v=N(n);const q=O(()=>({label:"Select one",id:"radios",items:U}));E(v,{name:"Default",get args(){return V(q)},get template(){return P},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">\r
	<Radios {...args} />\r
</div>`}}});var _=u(v,2);const a=O(()=>({id:"radios",items:U,compact:!0}));E(_,{name:"Compact without label",get args(){return V(a)},get template(){return P},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">\r
	<Radios {...args} />\r
</div>`}}});var H=u(_,2);const k=O(()=>oe(xe));E(H,{name:"Individually defined radios",asChild:!0,parameters:{...V(k),__svelteCsf:{rawCode:`<div style:padding="12px">\r
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
</div>`}},children:(x,b)=>{var p=De();G(p,"",{},{padding:"12px"});var w=l(p);B(w,{label:"Select one",children:(I,R)=>{var r=Re(),o=N(r);j(o,{groupId:"radios",id:"house",label:"House or bungalow",description:"Includes terraced, semi-detached and detached homes."});var g=u(o,2);j(g,{groupId:"radios",id:"flat",label:"Flat, maisonette or apartment"});var D=u(g,2);j(D,{groupId:"radios",id:"mobile",label:"Caravan or other mobile or temporary structure"}),m(I,r)},$$slots:{default:!0}}),m(x,p)},$$slots:{default:!0}}),m(h,n),Z()}J.__docgen={data:[],name:"Radios.stories.svelte"};const M=ne(J,we),Ae=["Default","CompactWithoutLabel","IndividuallyDefinedRadios"],Be={...M.Default,tags:["svelte-csf-v5"]},Ee={...M.CompactWithoutLabel,tags:["svelte-csf-v5"]},Me={...M.IndividuallyDefinedRadios,tags:["svelte-csf-v5"]};export{Ee as CompactWithoutLabel,Be as Default,Me as IndividuallyDefinedRadios,Ae as __namedExportsOrder,we as default};
