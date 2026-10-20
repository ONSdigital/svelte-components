import{ab as H,p as u,aF as P,aL as W,av as j,i as z,aM as J,a as y,ad as D,ay as N,f as V,aA as R,g as B,an as L,ae as p,c as m,as as T,t as F,s as M,ac as K,aN as Q,aO as U,e as q,at as X}from"./iframe-CwT5EAsy.js";import{c as Y,w as Z,i as ee,d as te}from"./create-runtime-stories-BBueoODQ.js";import{s as ae}from"./class-Dvitqb_Y.js";import{s as h,b as ne,c as le}from"./attributes-DBnpCygu.js";import{b as se}from"./this-D3VIVySN.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DayBpKoh.js";const oe=`<span class="ons-warning">This component is experimental</span>\r
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
`;var re=V("<legend> </legend>"),ie=V('<fieldset class="button-group svelte-o751n7"><!> <div class="buttons svelte-o751n7"><!></div></fieldset>');function $(r,e){H(e,!0);const n=()=>R(B(g),"$currentValue",i),[i,l]=N();let t=u(e,"name",3,""),s=u(e,"legend",3,""),o=u(e,"value",15),I=u(e,"visuallyHideLegend",3,!1);const c=P(o());W(()=>{c.set(o())});const g=L(()=>c);W(()=>{n()!==o()&&o(n())}),j("buttonGroup",{groupName:t(),selectedValue:c});var f=ie(),v=m(f);{var x=a=>{var d=re();let G;var O=m(d);F(()=>{G=ae(d,1,"svelte-o751n7",null,G,{"ons-u-vh":I()}),M(O,s())}),y(a,d)};z(v,a=>{s()&&a(x)})}var b=p(v,2),_=m(b);J(_,()=>e.children??T),y(r,f),D(),l()}$.__docgen={data:[{name:"name",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"legend",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"value",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1,defaultValue:"..."},{name:"visuallyHideLegend",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"children",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1}],name:"ButtonGroup.svelte"};var ue=V('<div class="button-container svelte-abte10"><input type="radio" class="radio-input svelte-abte10"/> <label class="radio-label svelte-abte10"> </label></div>');function k(r,e){H(e,!0);const n=()=>R(B(f),"$currentSelected",i),[i,l]=N();let t=u(e,"value",3,""),s=u(e,"id",19,t),o=u(e,"label",19,t);const I=K("buttonGroup"),{groupName:c,selectedValue:g}=I,f=L(()=>g),v=L(()=>n()===t());function x(){g.set(t())}let b;var _=ue(),a=m(_);se(a,O=>b=O,()=>b);var d=p(a,2),G=m(d);F(()=>{h(a,"id",s()),h(a,"name",c),ne(a,t()),le(a,B(v)),h(a,"aria-checked",B(v)),h(d,"for",s()),M(G,o())}),Q("change",a,x),y(r,_),D(),l()}U(["change"]);k.__docgen={data:[{name:"value",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."},{name:"label",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."}],name:"ButtonGroupItem.svelte"};const w=(r,e=T)=>{$(r,X(e,{children:(n,i)=>{var l=A(),t=q(l);k(t,{value:"1",label:"Option 1"});var s=p(t,2);k(s,{value:"2",label:"Option 2"});var o=p(s,2);k(o,{value:"3",label:"Option 3"}),y(n,l)},$$slots:{default:!0}}))},de={title:"Form elements/ButtonGroup",component:$,tags:["autodocs"],argTypes:{legend:{control:"text"},visuallyHideLegend:{control:"boolean"}},parameters:Z(oe)},{Story:C}=te();var A=V("<!> <!> <!>",1);function E(r,e){H(e,!1),ee();var n=A(),i=q(n);C(i,{name:"Default",args:{name:"primary",legend:"Choose an option"},get template(){return w},parameters:{__svelteCsf:{rawCode:`<ButtonGroup {...args}>\r
	<ButtonGroupItem value="1" label="Option 1" />\r
	<ButtonGroupItem value="2" label="Option 2" />\r
	<ButtonGroupItem value="3" label="Option 3" />\r
</ButtonGroup>`}}});var l=p(i,2);C(l,{name:"With initial value",args:{name:"primary",legend:"Choose an option",value:"2"},get template(){return w},parameters:{__svelteCsf:{rawCode:`<ButtonGroup {...args}>\r
	<ButtonGroupItem value="1" label="Option 1" />\r
	<ButtonGroupItem value="2" label="Option 2" />\r
	<ButtonGroupItem value="3" label="Option 3" />\r
</ButtonGroup>`}}});var t=p(l,2);C(t,{name:"Visually hide legend",args:{name:"primary",legend:"Choose an option",visuallyHideLegend:!0},get template(){return w},parameters:{__svelteCsf:{rawCode:`<ButtonGroup {...args}>\r
	<ButtonGroupItem value="1" label="Option 1" />\r
	<ButtonGroupItem value="2" label="Option 2" />\r
	<ButtonGroupItem value="3" label="Option 3" />\r
</ButtonGroup>`}}}),y(r,n),D()}E.__docgen={data:[],name:"ButtonGroup.stories.svelte"};const S=Y(E,de),be=["Default","WithInitialValue","VisuallyHideLegend"],_e={...S.Default,tags:["svelte-csf-v5"]},Ge={...S.WithInitialValue,tags:["svelte-csf-v5"]},he={...S.VisuallyHideLegend,tags:["svelte-csf-v5"]};export{_e as Default,he as VisuallyHideLegend,Ge as WithInitialValue,be as __namedExportsOrder,de as default};
