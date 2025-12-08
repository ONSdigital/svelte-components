import{p as A,a as v,ao as X,au as T,ak as Z,j as G,i as F,e as h,h as S,X as E,W as N,n as k,g as _,av as q,k as f,t as j,q as K,O as J,R as $,f as M,Z as Q,_ as Y}from"./iframe-CwnOGufI.js";import{w as ee,c as te,i as ae,d as ne}from"./create-runtime-stories-CLr9y0ZE.js";import{s as le}from"./slot-BP_Qo1ZM.js";import{s as P}from"./class-Dzh9Da8g.js";import{s as V,a as oe,c as se}from"./attributes-Bmkkxx_O.js";import{b as re}from"./this-DBfByQAL.js";import"./attributes-Co-1QMVx.js";const ie=`<span class="ons-warning">This component is experimental</span>

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
`;var ue=G("<legend> </legend>"),de=G('<fieldset class="button-group svelte-z0e72q"><!> <div class="buttons svelte-z0e72q"><!></div></fieldset>');function W(i,e){A(e,!0);const[o,u]=E(),l=()=>N(_(O),"$currentValue",o);let t=v(e,"name",3,""),d=v(e,"legend",3,""),s=v(e,"value",7),B=v(e,"visuallyHideLegend",3,!1);const p=X(s());T(()=>{p.set(s())});const O=q(()=>p);T(()=>{l()!==s()&&s(l())}),Z("buttonGroup",{groupName:t(),selectedValue:p});var c=de(),m=k(c);{var g=a=>{var r=ue();let y;var L=k(r);j(n=>{y=P(r,1,"svelte-z0e72q",null,y,n),K(L,d())},[()=>({"ons-u-vh":B()})]),h(a,r)};F(m,a=>{d()&&a(g)})}var C=f(m,2),w=k(C);le(w,e,"default",{},null),h(i,c),S(),u()}W.__docgen={data:[{name:"name",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"legend",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"value",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1},{name:"visuallyHideLegend",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],name:"ButtonGroup.svelte"};var pe=G('<div class="button-container svelte-nnmk5h"><input type="radio" class="radio-input svelte-nnmk5h" tabindex="0"/> <label> </label></div>');function x(i,e){A(e,!0);const[o,u]=E(),l=()=>N(_(O),"$currentSelected",o);let t=v(e,"value",3,""),d=v(e,"label",3,"");const s=J("buttonGroup"),{groupName:B,selectedValue:p}=s,O=q(()=>p),c=q(()=>l()===t());function m(){p.set(t())}let g;function C(n){const b=Array.from(document.querySelectorAll(`[name="${B}"]`)),z=b.indexOf(g);let I=-1;if(n.key==="ArrowRight"||n.key==="ArrowDown")I=(z+1)%b.length;else if(n.key==="ArrowLeft"||n.key==="ArrowUp")I=(z-1+b.length)%b.length;else if(n.key==="Enter"||n.key===" "){m();return}I!==-1&&b[I].focus()}var w=pe(),a=k(w);re(a,n=>g=n,()=>g);var r=f(a,2);let y;var L=k(r);j(n=>{V(a,"id",t()),V(a,"name",B),oe(a,t()),se(a,_(c)),V(a,"aria-checked",_(c)),V(r,"for",t()),y=P(r,1,"button svelte-nnmk5h",null,y,n),K(L,d()||t())},[()=>({selected:_(c)})]),$("click",a,m),$("keydown",a,C),$("click",r,m),h(i,w),S(),u()}x.__docgen={data:[{name:"value",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"label",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],name:"ButtonGroupItem.svelte"};const H=(i,e=Q)=>{W(i,Y(e,{children:(o,u)=>{var l=me(),t=M(l);x(t,{value:"1",label:"Option 1"});var d=f(t,2);x(d,{value:"2",label:"Option 2"});var s=f(d,2);x(s,{value:"3",label:"Option 3"}),h(o,l)},$$slots:{default:!0}}))},ce={title:"Inputs/ButtonGroup",component:W,tags:["autodocs"],argTypes:{legend:{control:"text"},visuallyHideLegend:{control:"boolean"}},parameters:ee(ie)},{Story:D}=ne();var me=G("<!> <!> <!>",1),ve=G("<!> <!> <!>",1);function U(i,e){A(e,!1),ae();var o=ve(),u=M(o);D(u,{name:"Default",args:{name:"primary",legend:"Choose an option"},get template(){return H},parameters:{__svelteCsf:{rawCode:`<ButtonGroup {...args}>
	<ButtonGroupItem value="1" label="Option 1" />
	<ButtonGroupItem value="2" label="Option 2" />
	<ButtonGroupItem value="3" label="Option 3" />
</ButtonGroup>`}}});var l=f(u,2);D(l,{name:"With initial value",args:{name:"primary",legend:"Choose an option",value:"2"},get template(){return H},parameters:{__svelteCsf:{rawCode:`<ButtonGroup {...args}>
	<ButtonGroupItem value="1" label="Option 1" />
	<ButtonGroupItem value="2" label="Option 2" />
	<ButtonGroupItem value="3" label="Option 3" />
</ButtonGroup>`}}});var t=f(l,2);D(t,{name:"Visually hide legend",args:{name:"primary",legend:"Choose an option",visuallyHideLegend:!0},get template(){return H},parameters:{__svelteCsf:{rawCode:`<ButtonGroup {...args}>
	<ButtonGroupItem value="1" label="Option 1" />
	<ButtonGroupItem value="2" label="Option 2" />
	<ButtonGroupItem value="3" label="Option 3" />
</ButtonGroup>`}}}),h(i,o),S()}U.__docgen={data:[],name:"ButtonGroup.stories.svelte"};const R=te(U,ce),Ge=["Default","WithInitialValue","VisuallyHideLegend"],Be={...R.Default,tags:["svelte-csf-v5"]},we={...R.WithInitialValue,tags:["svelte-csf-v5"]},Ie={...R.VisuallyHideLegend,tags:["svelte-csf-v5"]};export{Be as Default,Ie as VisuallyHideLegend,we as WithInitialValue,Ge as __namedExportsOrder,ce as default};
