import{p as S,a as m,ao as X,au as T,ak as Z,j as G,i as F,e as h,h as W,X as E,W as N,n as k,g as _,av as A,k as f,t as j,q as K,O as J,R as $,f as M,Z as Q,_ as Y}from"./iframe-yAvQPCXH.js";import{w as ee,c as te,i as ae,d as ne}from"./create-runtime-stories-C-ZHg9b5.js";import{s as le}from"./slot-BP_Qo1ZM.js";import{s as P}from"./class-Dzh9Da8g.js";import{s as I,a as oe,c as re}from"./attributes-CZ0E5Nqe.js";import{b as se}from"./this-p_i7pN6D.js";import"./attributes-Co-1QMVx.js";const ie=`<span class="ons-warning">This component is experimental</span>\r
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
`;var ue=G("<legend> </legend>"),de=G('<fieldset class="button-group svelte-z0e72q"><!> <div class="buttons svelte-z0e72q"><!></div></fieldset>');function q(i,e){S(e,!0);const[o,u]=E(),l=()=>N(_(O),"$currentValue",o);let t=m(e,"name",3,""),d=m(e,"legend",3,""),r=m(e,"value",15),B=m(e,"visuallyHideLegend",3,!1);const p=X(r());T(()=>{p.set(r())});const O=A(()=>p);T(()=>{l()!==r()&&r(l())}),Z("buttonGroup",{groupName:t(),selectedValue:p});var c=de(),v=k(c);{var g=a=>{var s=ue();let y;var L=k(s);j(n=>{y=P(s,1,"svelte-z0e72q",null,y,n),K(L,d())},[()=>({"ons-u-vh":B()})]),h(a,s)};F(v,a=>{d()&&a(g)})}var C=f(v,2),w=k(C);le(w,e,"default",{},null),h(i,c),W(),u()}q.__docgen={data:[{name:"name",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"legend",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"value",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1,defaultValue:"..."},{name:"visuallyHideLegend",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],name:"ButtonGroup.svelte"};var pe=G('<div class="button-container svelte-nnmk5h"><input type="radio" class="radio-input svelte-nnmk5h" tabindex="0"/> <label> </label></div>');function x(i,e){S(e,!0);const[o,u]=E(),l=()=>N(_(O),"$currentSelected",o);let t=m(e,"value",3,""),d=m(e,"label",3,"");const r=J("buttonGroup"),{groupName:B,selectedValue:p}=r,O=A(()=>p),c=A(()=>l()===t());function v(){p.set(t())}let g;function C(n){const b=Array.from(document.querySelectorAll(`[name="${B}"]`)),z=b.indexOf(g);let V=-1;if(n.key==="ArrowRight"||n.key==="ArrowDown")V=(z+1)%b.length;else if(n.key==="ArrowLeft"||n.key==="ArrowUp")V=(z-1+b.length)%b.length;else if(n.key==="Enter"||n.key===" "){v();return}V!==-1&&b[V].focus()}var w=pe(),a=k(w);se(a,n=>g=n,()=>g);var s=f(a,2);let y;var L=k(s);j(n=>{I(a,"id",t()),I(a,"name",B),oe(a,t()),re(a,_(c)),I(a,"aria-checked",_(c)),I(s,"for",t()),y=P(s,1,"button svelte-nnmk5h",null,y,n),K(L,d()||t())},[()=>({selected:_(c)})]),$("click",a,v),$("keydown",a,C),$("click",s,v),h(i,w),W(),u()}x.__docgen={data:[{name:"value",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"label",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],name:"ButtonGroupItem.svelte"};const H=(i,e=Q)=>{q(i,Y(e,{children:(o,u)=>{var l=ve(),t=M(l);x(t,{value:"1",label:"Option 1"});var d=f(t,2);x(d,{value:"2",label:"Option 2"});var r=f(d,2);x(r,{value:"3",label:"Option 3"}),h(o,l)},$$slots:{default:!0}}))},ce={title:"Inputs/ButtonGroup",component:q,tags:["autodocs"],argTypes:{legend:{control:"text"},visuallyHideLegend:{control:"boolean"}},parameters:ee(ie)},{Story:D}=ne();var ve=G("<!> <!> <!>",1),me=G("<!> <!> <!>",1);function U(i,e){S(e,!1),ae();var o=me(),u=M(o);D(u,{name:"Default",args:{name:"primary",legend:"Choose an option"},get template(){return H},parameters:{__svelteCsf:{rawCode:`<ButtonGroup {...args}>\r
	<ButtonGroupItem value="1" label="Option 1" />\r
	<ButtonGroupItem value="2" label="Option 2" />\r
	<ButtonGroupItem value="3" label="Option 3" />\r
</ButtonGroup>`}}});var l=f(u,2);D(l,{name:"With initial value",args:{name:"primary",legend:"Choose an option",value:"2"},get template(){return H},parameters:{__svelteCsf:{rawCode:`<ButtonGroup {...args}>\r
	<ButtonGroupItem value="1" label="Option 1" />\r
	<ButtonGroupItem value="2" label="Option 2" />\r
	<ButtonGroupItem value="3" label="Option 3" />\r
</ButtonGroup>`}}});var t=f(l,2);D(t,{name:"Visually hide legend",args:{name:"primary",legend:"Choose an option",visuallyHideLegend:!0},get template(){return H},parameters:{__svelteCsf:{rawCode:`<ButtonGroup {...args}>\r
	<ButtonGroupItem value="1" label="Option 1" />\r
	<ButtonGroupItem value="2" label="Option 2" />\r
	<ButtonGroupItem value="3" label="Option 3" />\r
</ButtonGroup>`}}}),h(i,o),W()}U.__docgen={data:[],name:"ButtonGroup.stories.svelte"};const R=te(U,ce),Ge=["Default","WithInitialValue","VisuallyHideLegend"],Be={...R.Default,tags:["svelte-csf-v5"]},we={...R.WithInitialValue,tags:["svelte-csf-v5"]},Ve={...R.VisuallyHideLegend,tags:["svelte-csf-v5"]};export{Be as Default,Ve as VisuallyHideLegend,we as WithInitialValue,Ge as __namedExportsOrder,ce as default};
