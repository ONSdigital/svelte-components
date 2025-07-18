import{p as U,r as Q,a as i,j as u,k as p,n as s,i as W,t as S,o as L,q as O,u as X,e as c,h as Z,g as j,f as M,Z as Y,_ as $}from"./iframe-Bt5qH5ZQ.js";import{i as z,w as ee,c as te,d as ae,a as ie}from"./create-runtime-stories-BkV0ZRSv.js";import{s as G}from"./style-CcY6orqc.js";import{s as C,a as se}from"./attributes-Lq-0W55G.js";import{s as T}from"./class-Dzh9Da8g.js";import{e as ne,i as le}from"./each-AUFWX6vF.js";import{s as oe}from"./slot-BP_Qo1ZM.js";import{b as de}from"./misc-9Y-aA5yj.js";import"./attributes-Co-1QMVx.js";var re=u('<span class="ons-label__aria-hidden-description" aria-hidden="true"><span class="ons-label__description ons-radio__label--with-description"> </span></span>'),pe=u('<span class="ons-label__visually-hidden-description ons-u-vh"> </span>'),ce=u('<span><span><input type="radio" class="ons-radio__input ons-js-radio"/> <label> <!></label> <!></span></span>');function F(h,e){U(e,!1);const l=Q();let m=i(e,"id",8,""),V=i(e,"label",8,""),y=i(e,"description",8,""),t=i(e,"item",24,()=>({id:m(),label:V(),description:y()})),q=i(e,"groupId",8),w=i(e,"value",12,null),I=i(e,"compact",8,!1);z();var _=ce();let v;var R=s(_);let D;var f=s(R),o=p(f,2);let k;var g=s(o),H=p(g);{var d=a=>{var n=re(),x=s(n),K=s(x);S(()=>O(K,t().description)),c(a,n)};W(H,a=>{t().description&&a(d)})}var b=p(o,2);{var r=a=>{var n=pe(),x=s(n);S(()=>{C(n,"id",`${m()??""}-label-description-hint`),O(x,t().description)}),c(a,n)};W(b,a=>{t().description&&a(r)})}S((a,n,x)=>{v=T(_,1,"ons-radios__item",null,v,a),D=T(R,1,"ons-radio",null,D,n),C(f,"id",t().id),se(f,t()),C(f,"name",q()),k=T(o,1,"ons-radio__label",null,k,x),C(o,"for",t().id),C(o,"id",`${t().id??""}-label`),C(o,"aria-describedby",t().description?`${t().id}-label-description-hint`:null),O(g,`${t().label??""} `)},[()=>({"ons-radios__item--no-border":I()}),()=>({"ons-radio--no-border":I()}),()=>({"ons-label--with-description":y()})],L),X("change",f,a=>{var n;(n=a==null?void 0:a.target)!=null&&n.checked&&(w(t()),l("change",{value:w(),e:a}))}),c(h,_),Z()}F.__docgen={data:[{name:"id",visibility:"public",description:"Unique ID input",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"label",visibility:"public",description:"Label for input",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"description",visibility:"public",description:"Optional: Extended description for element",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"item",visibility:"public",description:"Optional: Define the item as an object in the form {id, label, description?}",keywords:[],kind:"let",static:!1,readonly:!1,defaultValue:"{ id, label, description }"},{name:"groupId",visibility:"public",description:"ID for radio group (required)",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"value",visibility:"public",description:"Binding selected option",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"null"},static:!1,readonly:!1,defaultValue:"null"},{name:"compact",visibility:"public",description:"Compact mode (no border)",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],name:"Radio.svelte"};var ue=u('<legend class="ons-fieldset__legend ons-u-mb-no"><span> </span></legend>'),me=u('<p class="ons-radios__label"> </p>'),ve=u('<fieldset><!> <div class="ons-input-items"><!> <div class="ons-radios__items"><!> <!></div></div></fieldset>');function A(h,e){let l=i(e,"title",8,""),m=i(e,"hideTitle",8,!1),V=i(e,"id",8,"name"),y=i(e,"label",8,""),t=i(e,"value",12,null),q=i(e,"items",24,()=>[]),w=i(e,"compact",8,!1),I=i(e,"cls",8,"");var _=ve(),v=s(_);{var R=d=>{var b=ue(),r=s(b);let a;var n=s(r);S(x=>{a=T(r,1,"ons-fieldset__legend-title ons-u-pb-no",null,a,x),O(n,l())},[()=>({"ons-u-vh":m()})],L),c(d,b)};W(v,d=>{l()&&d(R)})}var D=p(v,2),f=s(D);{var o=d=>{var b=me(),r=s(b);S(()=>O(r,y())),c(d,b)};W(f,d=>{y()&&d(o)})}var k=p(f,2),g=s(k);oe(g,e,"default",{},null);var H=p(g,2);ne(H,1,q,le,(d,b)=>{F(d,{get item(){return j(b)},get groupId(){return V()},get compact(){return w()},get value(){return t()},set value(r){t(r)},$$events:{change(r){de.call(this,e,r)}},$$legacy:!0})}),S(()=>T(_,1,`ons-fieldset ${I()??""}`)),c(h,_)}A.__docgen={data:[{name:"title",visibility:"public",description:"Title/legend for parent <fieldset>",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"hideTitle",visibility:"public",description:"Visually hide the title/legend",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"id",visibility:"public",description:"Unique ID for radio group (required)",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"name"'},{name:"label",visibility:"public",description:'Descriptive "how to" label for inputs',keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"value",visibility:"public",description:"Binding for ID of selected option",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"null"},static:!1,readonly:!1,defaultValue:"null"},{name:"items",visibility:"public",description:"Optional: Define the radios as an array of {id, label, description?}",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"object[]"},static:!1,readonly:!1,defaultValue:"[]"},{name:"compact",visibility:"public",description:"Compact mode (no border)",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"cls",visibility:"public",description:"Optional: Set an additional CSS class for the component",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],name:"Radios.svelte"};const fe=`A component for defining a group of radio inputs, where the selected item id can be bound to a Svelte variable.

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
`,be=`In this example, the radios are defined explicitly rather than via an array.

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
`,N=(h,e=Y)=>{var l=_e();G(l,"",{},{padding:"12px"});var m=s(l);A(m,$(e)),c(h,l)},ye={title:"Inputs/Radios",component:A,tags:["autodocs"],argTypes:{},parameters:ee(fe)},{Story:B}=ae();let P=[{id:"house",label:"House or bungalow",description:"Includes terraced, semi-detached and detached homes."},{id:"flat",label:"Flat, maisonette or apartment"},{id:"mobile",label:"Caravan or other mobile or temporary structure"}];var _e=u("<div><!></div>"),ge=u("<!> <!> <!>",1),he=u("<div><!></div>"),ke=u("<!> <!> <!>",1);function J(h,e){U(e,!1),z();var l=ke(),m=M(l);const V=L(()=>({label:"Select one",id:"radios",items:P}));B(m,{name:"Default",get args(){return j(V)},get template(){return N},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Radios {...args} />
</div>`}}});var y=p(m,2);const t=L(()=>({id:"radios",items:P,compact:!0}));B(y,{name:"Compact without label",get args(){return j(t)},get template(){return N},parameters:{__svelteCsf:{rawCode:`<div style:padding="12px">
	<Radios {...args} />
</div>`}}});var q=p(y,2);const w=L(()=>ie(be));B(q,{name:"Individually defined radios",asChild:!0,parameters:{...j(w),__svelteCsf:{rawCode:`<div style:padding="12px">
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
</div>`}},children:(I,_)=>{var v=he();G(v,"",{},{padding:"12px"});var R=s(v);A(R,{label:"Select one",children:(D,f)=>{var o=ge(),k=M(o);F(k,{groupId:"radios",id:"house",label:"House or bungalow",description:"Includes terraced, semi-detached and detached homes."});var g=p(k,2);F(g,{groupId:"radios",id:"flat",label:"Flat, maisonette or apartment"});var H=p(g,2);F(H,{groupId:"radios",id:"mobile",label:"Caravan or other mobile or temporary structure"}),c(D,o)},$$slots:{default:!0}}),c(I,v)},$$slots:{default:!0}}),c(h,l),Z()}J.__docgen={data:[],name:"Radios.stories.svelte"};const E=te(J,ye),He=["Default","CompactWithoutLabel","IndividuallyDefinedRadios"],Le={...E.Default,tags:["svelte-csf-v5"]},Oe={...E.CompactWithoutLabel,tags:["svelte-csf-v5"]},Te={...E.IndividuallyDefinedRadios,tags:["svelte-csf-v5"]};export{Oe as CompactWithoutLabel,Le as Default,Te as IndividuallyDefinedRadios,He as __namedExportsOrder,ye as default};
