import{ab as H,p as u,aF as P,aL as W,av as j,i as z,aM as J,a as y,ad as D,ay as N,f as V,aA as R,g as B,an as L,ae as p,c as m,as as T,t as F,s as M,ac as K,aN as Q,aO as U,e as q,at as X}from"./iframe-CArMXtmx.js";import{c as Y,w as Z,i as ee,d as te}from"./create-runtime-stories-BEqwKI8x.js";import{s as ae}from"./class-C3cnp_aW.js";import{s as h,b as ne,c as le}from"./attributes-BmILT1Qd.js";import{b as se}from"./this-D9zgv2hp.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DayBpKoh.js";const oe=`<span class="ons-warning">This component is experimental</span>

Radio inputs dressed up as a button group.

<!-- prettier-ignore -->
\`\`\`html
<ButtonGroup name="primary" legend="Choose an option">
      <ButtonGroupItem value="1" label="Option 1" />
      <ButtonGroupItem value="2" label="Option 2" />
      <ButtonGroupItem value="3" label="Option 3" />
</ButtonGroup>
\`\`\`

To see what is selected, bind \`value\` to a variable e.g.

<!-- prettier-ignore -->
\`\`\`html
let selectedValue;

<ButtonGroup name="primary" legend="Choose an option" bind:value="{selectedValue}">
...
</ButtonGroup>
\`\`\`
`;var ie=V("<legend> </legend>"),re=V('<fieldset class="button-group svelte-o751n7"><!> <div class="buttons svelte-o751n7"><!></div></fieldset>');function $(i,e){H(e,!0);const n=()=>R(B(g),"$currentValue",r),[r,l]=N();let t=u(e,"name",3,""),s=u(e,"legend",3,""),o=u(e,"value",15),I=u(e,"visuallyHideLegend",3,!1);const c=P(o());W(()=>{c.set(o())});const g=L(()=>c);W(()=>{n()!==o()&&o(n())}),j("buttonGroup",{groupName:t(),selectedValue:c});var f=re(),v=m(f);{var x=a=>{var d=ie();let G;var O=m(d);F(()=>{G=ae(d,1,"svelte-o751n7",null,G,{"ons-u-vh":I()}),M(O,s())}),y(a,d)};z(v,a=>{s()&&a(x)})}var b=p(v,2),_=m(b);J(_,()=>e.children??T),y(i,f),D(),l()}$.__docgen={data:[{name:"name",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"legend",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"value",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1,defaultValue:"..."},{name:"visuallyHideLegend",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"children",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1}],name:"ButtonGroup.svelte"};var ue=V('<div class="button-container svelte-abte10"><input type="radio" class="radio-input svelte-abte10"/> <label class="radio-label svelte-abte10"> </label></div>');function k(i,e){H(e,!0);const n=()=>R(B(f),"$currentSelected",r),[r,l]=N();let t=u(e,"value",3,""),s=u(e,"id",19,t),o=u(e,"label",19,t);const I=K("buttonGroup"),{groupName:c,selectedValue:g}=I,f=L(()=>g),v=L(()=>n()===t());function x(){g.set(t())}let b;var _=ue(),a=m(_);se(a,O=>b=O,()=>b);var d=p(a,2),G=m(d);F(()=>{h(a,"id",s()),h(a,"name",c),ne(a,t()),le(a,B(v)),h(a,"aria-checked",B(v)),h(d,"for",s()),M(G,o())}),Q("change",a,x),y(i,_),D(),l()}U(["change"]);k.__docgen={data:[{name:"value",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."},{name:"label",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."}],name:"ButtonGroupItem.svelte"};const w=(i,e=T)=>{$(i,X(e,{children:(n,r)=>{var l=A(),t=q(l);k(t,{value:"1",label:"Option 1"});var s=p(t,2);k(s,{value:"2",label:"Option 2"});var o=p(s,2);k(o,{value:"3",label:"Option 3"}),y(n,l)},$$slots:{default:!0}}))},de={title:"Form elements/ButtonGroup",component:$,tags:["autodocs"],argTypes:{legend:{control:"text"},visuallyHideLegend:{control:"boolean"}},parameters:Z(oe)},{Story:C}=te();var A=V("<!> <!> <!>",1);function E(i,e){H(e,!1),ee();var n=A(),r=q(n);C(r,{name:"Default",args:{name:"primary",legend:"Choose an option"},get template(){return w},parameters:{__svelteCsf:{rawCode:`<ButtonGroup {...args}>
	<ButtonGroupItem value="1" label="Option 1" />
	<ButtonGroupItem value="2" label="Option 2" />
	<ButtonGroupItem value="3" label="Option 3" />
</ButtonGroup>`}}});var l=p(r,2);C(l,{name:"With initial value",args:{name:"primary",legend:"Choose an option",value:"2"},get template(){return w},parameters:{__svelteCsf:{rawCode:`<ButtonGroup {...args}>
	<ButtonGroupItem value="1" label="Option 1" />
	<ButtonGroupItem value="2" label="Option 2" />
	<ButtonGroupItem value="3" label="Option 3" />
</ButtonGroup>`}}});var t=p(l,2);C(t,{name:"Visually hide legend",args:{name:"primary",legend:"Choose an option",visuallyHideLegend:!0},get template(){return w},parameters:{__svelteCsf:{rawCode:`<ButtonGroup {...args}>
	<ButtonGroupItem value="1" label="Option 1" />
	<ButtonGroupItem value="2" label="Option 2" />
	<ButtonGroupItem value="3" label="Option 3" />
</ButtonGroup>`}}}),y(i,n),D()}E.__docgen={data:[],name:"ButtonGroup.stories.svelte"};const S=Y(E,de),be=["Default","WithInitialValue","VisuallyHideLegend"],_e={...S.Default,tags:["svelte-csf-v5"]},Ge={...S.WithInitialValue,tags:["svelte-csf-v5"]},he={...S.VisuallyHideLegend,tags:["svelte-csf-v5"]};export{_e as Default,he as VisuallyHideLegend,Ge as WithInitialValue,be as __namedExportsOrder,de as default};
