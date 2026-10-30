import{ab as L,p as u,aN as P,aB as W,aA as j,i as z,af as J,a as g,ad as D,aF as N,f as V,aH as R,g as B,ae as H,ah as p,c as m,ag as T,t as F,s as q,ac as K,an as Q,am as U,e as A,ax as X}from"./iframe-KpSyCse9.js";import{c as Y,w as Z,i as ee,d as te}from"./create-runtime-stories-B9Qx1gAn.js";import{s as ae}from"./class-BXNpPotE.js";import{s as G,b as ne,c as le}from"./attributes-B8eluhLe.js";import{b as se}from"./this-DC7r8CIX.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DayBpKoh.js";const oe=`<span class="ons-warning">This component is experimental</span>\r
\r
Radio inputs dressed up as a button group.\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<ButtonGroup name="primary" legend="Choose an option">\r
      <ButtonGroupItem value="1" label="Option 1" />\r
      <ButtonGroupItem value="2" label="Option 2" />\r
      <ButtonGroupItem value="3" label="Option 3" />\r
</ButtonGroup>\r
\`\`\`\r
\r
To see what is selected, bind \`value\` to a variable e.g.\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
let selectedValue;\r
\r
<ButtonGroup name="primary" legend="Choose an option" bind:value="{selectedValue}">\r
...\r
</ButtonGroup>\r
\`\`\`\r
`;var re=V("<legend> </legend>"),ie=V('<fieldset class="button-group svelte-o751n7"><!> <div class="buttons svelte-o751n7"><!></div></fieldset>');function $(r,e){L(e,!0);const n=()=>R(B(y),"$currentValue",i),[i,l]=N();let t=u(e,"name",3,""),s=u(e,"legend",3,""),o=u(e,"value",15),x=u(e,"visuallyHideLegend",3,!1);const c=P(o());W(()=>{c.set(o())});const y=H(()=>c);W(()=>{n()!==o()&&o(n())}),j("buttonGroup",{groupName:t(),selectedValue:c});var f=ie(),v=m(f);{var I=a=>{var d=re();let h;var w=m(d);F(()=>{h=ae(d,1,"svelte-o751n7",null,h,{"ons-u-vh":x()}),q(w,s())}),g(a,d)};z(v,a=>{s()&&a(I)})}var b=p(v,2),_=m(b);J(_,()=>e.children??T),g(r,f),D(),l()}$.__docgen={data:[{name:"name",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"legend",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"value",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1,defaultValue:"..."},{name:"visuallyHideLegend",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"children",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1}],name:"ButtonGroup.svelte"};var ue=V('<div class="button-container svelte-abte10"><input type="radio" class="radio-input svelte-abte10"/> <label class="radio-label svelte-abte10"> </label></div>');function k(r,e){L(e,!0);const n=()=>R(B(f),"$currentSelected",i),[i,l]=N();let t=u(e,"value",3,""),s=u(e,"id",19,t),o=u(e,"label",19,t);const x=K("buttonGroup"),{groupName:c,selectedValue:y}=x,f=H(()=>y),v=H(()=>n()===t());function I(){y.set(t())}let b;var _=ue(),a=m(_);se(a,w=>b=w,()=>b);var d=p(a,2),h=m(d);F(()=>{G(a,"id",s()),G(a,"name",c),ne(a,t()),le(a,B(v)),G(a,"aria-checked",B(v)),G(d,"for",s()),q(h,o())}),Q("change",a,I),g(r,_),D(),l()}U(["change"]);k.__docgen={data:[{name:"value",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."},{name:"label",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."}],name:"ButtonGroupItem.svelte"};const O=(r,e=T)=>{$(r,X(e,{children:(n,i)=>{var l=E(),t=A(l);k(t,{value:"1",label:"Option 1"});var s=p(t,2);k(s,{value:"2",label:"Option 2"});var o=p(s,2);k(o,{value:"3",label:"Option 3"}),g(n,l)},$$slots:{default:!0}}))},de={title:"Form elements/ButtonGroup",component:$,tags:["autodocs"],argTypes:{legend:{control:"text"},visuallyHideLegend:{control:"boolean"}},parameters:Z(oe)},{Story:C}=te();var E=V("<!> <!> <!>",1);function M(r,e){L(e,!1),ee();var n=E(),i=A(n);C(i,{name:"Default",args:{name:"primary",legend:"Choose an option"},get template(){return O},parameters:{__svelteCsf:{rawCode:`<ButtonGroup {...args}>\r
	<ButtonGroupItem value="1" label="Option 1" />\r
	<ButtonGroupItem value="2" label="Option 2" />\r
	<ButtonGroupItem value="3" label="Option 3" />\r
</ButtonGroup>`}}});var l=p(i,2);C(l,{name:"With initial value",args:{name:"primary",legend:"Choose an option",value:"2"},get template(){return O},parameters:{__svelteCsf:{rawCode:`<ButtonGroup {...args}>\r
	<ButtonGroupItem value="1" label="Option 1" />\r
	<ButtonGroupItem value="2" label="Option 2" />\r
	<ButtonGroupItem value="3" label="Option 3" />\r
</ButtonGroup>`}}});var t=p(l,2);C(t,{name:"Visually hide legend",args:{name:"primary",legend:"Choose an option",visuallyHideLegend:!0},get template(){return O},parameters:{__svelteCsf:{rawCode:`<ButtonGroup {...args}>\r
	<ButtonGroupItem value="1" label="Option 1" />\r
	<ButtonGroupItem value="2" label="Option 2" />\r
	<ButtonGroupItem value="3" label="Option 3" />\r
</ButtonGroup>`}}}),g(r,n),D()}M.__docgen={data:[],name:"ButtonGroup.stories.svelte"};const S=Y(M,de),be=["Default","WithInitialValue","VisuallyHideLegend"],_e={...S.Default,tags:["svelte-csf-v5"]},he={...S.WithInitialValue,tags:["svelte-csf-v5"]},Ge={...S.VisuallyHideLegend,tags:["svelte-csf-v5"]};export{_e as Default,Ge as VisuallyHideLegend,he as WithInitialValue,be as __namedExportsOrder,de as default};
