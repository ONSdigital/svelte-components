import{ab as L,p as u,aG as P,aM as W,av as j,i as A,aw as J,a as y,ad as D,az as N,f as V,aB as R,g as B,an as H,ae as p,c as m,as as T,t as M,s as q,ac as K,aN as Q,aO as U,e as z,at as X}from"./iframe-BieOkgaL.js";import{c as Y,w as Z,i as ee,d as te}from"./create-runtime-stories-CYy4gM-U.js";import{s as ae}from"./class-B3LrzTQO.js";import{s as h,b as ne,c as le}from"./attributes-C9k8Ok3D.js";import{b as se}from"./this-a-fmEguH.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DayBpKoh.js";const oe=`<span class="ons-warning">This component is experimental</span>\r
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
`;var re=V("<legend> </legend>"),ie=V('<fieldset class="button-group svelte-o751n7"><!> <div class="buttons svelte-o751n7"><!></div></fieldset>');function $(r,e){L(e,!0);const n=()=>R(B(g),"$currentValue",i),[i,l]=N();let t=u(e,"name",3,""),s=u(e,"legend",3,""),o=u(e,"value",15),I=u(e,"visuallyHideLegend",3,!1);const c=P(o());W(()=>{c.set(o())});const g=H(()=>c);W(()=>{n()!==o()&&o(n())}),j("buttonGroup",{groupName:t(),selectedValue:c});var f=ie(),v=m(f);{var w=a=>{var d=re();let G;var x=m(d);M(()=>{G=ae(d,1,"svelte-o751n7",null,G,{"ons-u-vh":I()}),q(x,s())}),y(a,d)};A(v,a=>{s()&&a(w)})}var b=p(v,2),_=m(b);J(_,()=>e.children??T),y(r,f),D(),l()}$.__docgen={data:[{name:"name",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"legend",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"value",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1,defaultValue:"..."},{name:"visuallyHideLegend",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"children",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1}],name:"ButtonGroup.svelte"};var ue=V('<div class="button-container svelte-abte10"><input type="radio" class="radio-input svelte-abte10"/> <label class="radio-label svelte-abte10"> </label></div>');function k(r,e){L(e,!0);const n=()=>R(B(f),"$currentSelected",i),[i,l]=N();let t=u(e,"value",3,""),s=u(e,"id",19,t),o=u(e,"label",19,t);const I=K("buttonGroup"),{groupName:c,selectedValue:g}=I,f=H(()=>g),v=H(()=>n()===t());function w(){g.set(t())}let b;var _=ue(),a=m(_);se(a,x=>b=x,()=>b);var d=p(a,2),G=m(d);M(()=>{h(a,"id",s()),h(a,"name",c),ne(a,t()),le(a,B(v)),h(a,"aria-checked",B(v)),h(d,"for",s()),q(G,o())}),Q("change",a,w),y(r,_),D(),l()}U(["change"]);k.__docgen={data:[{name:"value",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."},{name:"label",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."}],name:"ButtonGroupItem.svelte"};const O=(r,e=T)=>{$(r,X(e,{children:(n,i)=>{var l=E(),t=z(l);k(t,{value:"1",label:"Option 1"});var s=p(t,2);k(s,{value:"2",label:"Option 2"});var o=p(s,2);k(o,{value:"3",label:"Option 3"}),y(n,l)},$$slots:{default:!0}}))},de={title:"Form elements/ButtonGroup",component:$,tags:["autodocs"],argTypes:{legend:{control:"text"},visuallyHideLegend:{control:"boolean"}},parameters:Z(oe)},{Story:C}=te();var E=V("<!> <!> <!>",1);function F(r,e){L(e,!1),ee();var n=E(),i=z(n);C(i,{name:"Default",args:{name:"primary",legend:"Choose an option"},get template(){return O},parameters:{__svelteCsf:{rawCode:`<ButtonGroup {...args}>\r
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
</ButtonGroup>`}}}),y(r,n),D()}F.__docgen={data:[],name:"ButtonGroup.stories.svelte"};const S=Y(F,de),be=["Default","WithInitialValue","VisuallyHideLegend"],_e={...S.Default,tags:["svelte-csf-v5"]},Ge={...S.WithInitialValue,tags:["svelte-csf-v5"]},he={...S.VisuallyHideLegend,tags:["svelte-csf-v5"]};export{_e as Default,he as VisuallyHideLegend,Ge as WithInitialValue,be as __namedExportsOrder,de as default};
