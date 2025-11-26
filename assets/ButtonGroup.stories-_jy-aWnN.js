import{p as A,a as m,ao as X,au as E,ak as Z,j as G,i as F,e as h,h as S,X as N,W as T,n as k,g as _,av as q,k as f,t as j,q as K,O as J,R as $,f as M,Z as Q,_ as Y}from"./iframe-Do54YzxR.js";import{w as ee,c as te,i as ae,d as ne}from"./create-runtime-stories-CvlW8DiY.js";import{s as le}from"./slot-BP_Qo1ZM.js";import{s as P}from"./class-Dzh9Da8g.js";import{s as V,a as oe,c as re}from"./attributes-C5oDZZfl.js";import{b as se}from"./this-Bj1VAzp0.js";import"./attributes-Co-1QMVx.js";const ie=`Radio inputs dressed up as a button group.\r
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
`;var ue=G("<legend> </legend>"),de=G('<fieldset class="button-group svelte-z0e72q"><!> <div class="buttons svelte-z0e72q"><!></div></fieldset>');function W(i,e){A(e,!0);const[o,u]=N(),l=()=>T(_(O),"$currentValue",o);let t=m(e,"name",3,""),d=m(e,"legend",3,""),r=m(e,"value",7),B=m(e,"visuallyHideLegend",3,!1);const p=X(r());E(()=>{p.set(r())});const O=q(()=>p);E(()=>{l()!==r()&&r(l())}),Z("buttonGroup",{groupName:t(),selectedValue:p});var c=de(),v=k(c);{var y=a=>{var s=ue();let g;var L=k(s);j(n=>{g=P(s,1,"svelte-z0e72q",null,g,n),K(L,d())},[()=>({"ons-u-vh":B()})]),h(a,s)};F(v,a=>{d()&&a(y)})}var C=f(v,2),w=k(C);le(w,e,"default",{},null),h(i,c),S(),u()}W.__docgen={data:[{name:"name",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"legend",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"value",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1},{name:"visuallyHideLegend",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],name:"ButtonGroup.svelte"};var pe=G('<div class="button-container svelte-nnmk5h"><input type="radio" class="radio-input svelte-nnmk5h" tabindex="0"/> <label> </label></div>');function x(i,e){A(e,!0);const[o,u]=N(),l=()=>T(_(O),"$currentSelected",o);let t=m(e,"value",3,""),d=m(e,"label",3,"");const r=J("buttonGroup"),{groupName:B,selectedValue:p}=r,O=q(()=>p),c=q(()=>l()===t());function v(){p.set(t())}let y;function C(n){const b=Array.from(document.querySelectorAll(`[name="${B}"]`)),z=b.indexOf(y);let I=-1;if(n.key==="ArrowRight"||n.key==="ArrowDown")I=(z+1)%b.length;else if(n.key==="ArrowLeft"||n.key==="ArrowUp")I=(z-1+b.length)%b.length;else if(n.key==="Enter"||n.key===" "){v();return}I!==-1&&b[I].focus()}var w=pe(),a=k(w);se(a,n=>y=n,()=>y);var s=f(a,2);let g;var L=k(s);j(n=>{V(a,"id",t()),V(a,"name",B),oe(a,t()),re(a,_(c)),V(a,"aria-checked",_(c)),V(s,"for",t()),g=P(s,1,"button svelte-nnmk5h",null,g,n),K(L,d()||t())},[()=>({selected:_(c)})]),$("click",a,v),$("keydown",a,C),$("click",s,v),h(i,w),S(),u()}x.__docgen={data:[{name:"value",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"label",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],name:"ButtonGroupItem.svelte"};const H=(i,e=Q)=>{W(i,Y(e,{children:(o,u)=>{var l=ve(),t=M(l);x(t,{value:"1",label:"Option 1"});var d=f(t,2);x(d,{value:"2",label:"Option 2"});var r=f(d,2);x(r,{value:"3",label:"Option 3"}),h(o,l)},$$slots:{default:!0}}))},ce={title:"Inputs/ButtonGroup",component:W,tags:["autodocs"],argTypes:{legend:{control:"text"},visuallyHideLegend:{control:"boolean"}},parameters:ee(ie)},{Story:D}=ne();var ve=G("<!> <!> <!>",1),me=G("<!> <!> <!>",1);function U(i,e){A(e,!1),ae();var o=me(),u=M(o);D(u,{name:"Default",args:{name:"primary",legend:"Choose an option"},get template(){return H},parameters:{__svelteCsf:{rawCode:`<ButtonGroup {...args}>\r
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
</ButtonGroup>`}}}),h(i,o),S()}U.__docgen={data:[],name:"ButtonGroup.stories.svelte"};const R=te(U,ce),Ge=["Default","WithInitialValue","VisuallyHideLegend"],Be={...R.Default,tags:["svelte-csf-v5"]},we={...R.WithInitialValue,tags:["svelte-csf-v5"]},Ie={...R.VisuallyHideLegend,tags:["svelte-csf-v5"]};export{Be as Default,Ie as VisuallyHideLegend,we as WithInitialValue,Ge as __namedExportsOrder,ce as default};
