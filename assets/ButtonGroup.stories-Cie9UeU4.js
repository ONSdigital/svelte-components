import{ad as S,p as i,aO as j,aB as A,aA as J,i as K,s as Q,t as L,a as _,af as D,aF as R,f as h,aH as T,g as I,ag as M,ah as d,c as v,n as F,b as N,ae as U,an as X,am as Y,h as q,ax as Z}from"./iframe-UWIgwT_c.js";import{c as ee,w as te,i as ae,d as ne}from"./create-runtime-stories-WntTm4wH.js";import{s as W}from"./class-BWaliKvu.js";import{s as f,b as le,c as oe}from"./attributes-CxnnJe_I.js";import{b as se}from"./this-DkxfCVKA.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DayBpKoh.js";const ie=`<span class="ons-warning">This component is experimental</span>

Radio inputs dressed up as a button group.

Items stack vertically on viewports below 740px and remain horizontal on larger screens.
Stacked items share the width of the widest label, including padding, rather than filling the page.
Space is reserved for bold selected labels so the group does not resize when the selection changes.
Set \`stackOnMobile={false}\` to keep a group horizontal at every screen size:

\`\`\`svelte
<ButtonGroup name="horizontal" legend="Choose an option" stackOnMobile={false}>
	<ButtonGroupItem value="1" label="Option 1" />
	<ButtonGroupItem value="2" label="Option 2" />
</ButtonGroup>
\`\`\`

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
`;var re=h("<legend> </legend>"),ue=h('<fieldset><!> <div class="buttons svelte-o751n7"><!></div></fieldset>');function $(r,e){S(e,!0);const l=()=>T(I(z),"$currentValue",u),[u,o]=R();let t=i(e,"name",3,""),a=i(e,"legend",3,""),s=i(e,"value",15),C=i(e,"visuallyHideLegend",3,!1),H=i(e,"stackOnMobile",3,!0);const p=j(s());A(()=>{p.set(s())});const z=M(()=>p);A(()=>{l()!==s()&&s(l())}),J("buttonGroup",{groupName:t(),selectedValue:p});var c=ue();let k;var m=v(c);{var G=g=>{var y=re();let B;var P=v(y);L(()=>{B=W(y,1,"svelte-o751n7",null,B,{"ons-u-vh":C()}),N(P,a())}),_(g,y)};K(m,g=>{a()&&g(G)})}var n=d(m,2),b=v(n);Q(b,()=>e.children??F),L(()=>k=W(c,1,"button-group svelte-o751n7",null,k,{"stack-on-mobile":H()})),_(r,c),D(),o()}$.__docgen={data:[{name:"name",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"legend",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"value",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1,defaultValue:"..."},{name:"visuallyHideLegend",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"stackOnMobile",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"true"},{name:"children",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1}],name:"ButtonGroup.svelte"};var de=h('<div class="button-container svelte-abte10"><input type="radio" class="radio-input svelte-abte10"/> <label class="radio-label svelte-abte10"><span class="label-text svelte-abte10"> </span></label></div>');function V(r,e){S(e,!0);const l=()=>T(I(z),"$currentSelected",u),[u,o]=R();let t=i(e,"value",3,""),a=i(e,"id",19,t),s=i(e,"label",19,t);const C=U("buttonGroup"),{groupName:H,selectedValue:p}=C,z=M(()=>p),c=M(()=>l()===t());function k(){p.set(t())}let m;var G=de(),n=v(G);se(n,B=>m=B,()=>m);var b=d(n,2),g=v(b),y=v(g);L(()=>{f(n,"id",a()),f(n,"name",H),le(n,t()),oe(n,I(c)),f(n,"aria-checked",I(c)),f(b,"for",a()),f(b,"data-label",s()),N(y,s())}),X("change",n,k),_(r,G),D(),o()}Y(["change"]);V.__docgen={data:[{name:"value",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."},{name:"label",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."}],name:"ButtonGroupItem.svelte"};const O=(r,e=F)=>{$(r,Z(e,{children:(l,u)=>{var o=ce(),t=q(o);V(t,{value:"1",label:"Option 1"});var a=d(t,2);V(a,{value:"2",label:"Option 2"});var s=d(a,2);V(s,{value:"3",label:"Option 3"}),_(l,o)},$$slots:{default:!0}}))},pe={title:"Form elements/ButtonGroup",component:$,tags:["autodocs"],argTypes:{legend:{control:"text"},visuallyHideLegend:{control:"boolean"},stackOnMobile:{control:"boolean"}},parameters:te(ie)},{Story:w}=ne();var ce=h("<!> <!> <!>",1),ve=h("<!> <!> <!> <!>",1);function E(r,e){S(e,!1),ae();var l=ve(),u=q(l);w(u,{name:"Default",args:{name:"primary",legend:"Choose an option"},get template(){return O},parameters:{__svelteCsf:{rawCode:`<ButtonGroup {...args}>
	<ButtonGroupItem value="1" label="Option 1" />
	<ButtonGroupItem value="2" label="Option 2" />
	<ButtonGroupItem value="3" label="Option 3" />
</ButtonGroup>`}}});var o=d(u,2);w(o,{name:"With initial value",args:{name:"primary",legend:"Choose an option",value:"2"},get template(){return O},parameters:{__svelteCsf:{rawCode:`<ButtonGroup {...args}>
	<ButtonGroupItem value="1" label="Option 1" />
	<ButtonGroupItem value="2" label="Option 2" />
	<ButtonGroupItem value="3" label="Option 3" />
</ButtonGroup>`}}});var t=d(o,2);w(t,{name:"Visually hide legend",args:{name:"primary",legend:"Choose an option",visuallyHideLegend:!0},get template(){return O},parameters:{__svelteCsf:{rawCode:`<ButtonGroup {...args}>
	<ButtonGroupItem value="1" label="Option 1" />
	<ButtonGroupItem value="2" label="Option 2" />
	<ButtonGroupItem value="3" label="Option 3" />
</ButtonGroup>`}}});var a=d(t,2);w(a,{name:"Always horizontal",args:{name:"horizontal",legend:"Choose an option",stackOnMobile:!1},get template(){return O},parameters:{__svelteCsf:{rawCode:`<ButtonGroup {...args}>
	<ButtonGroupItem value="1" label="Option 1" />
	<ButtonGroupItem value="2" label="Option 2" />
	<ButtonGroupItem value="3" label="Option 3" />
</ButtonGroup>`}}}),_(r,l),D()}E.__docgen={data:[],name:"ButtonGroup.stories.svelte"};const x=ee(E,pe),ke=["Default","WithInitialValue","VisuallyHideLegend","AlwaysHorizontal"],Ge={...x.Default,tags:["svelte-csf-v5"]},Be={...x.WithInitialValue,tags:["svelte-csf-v5"]},Oe={...x.VisuallyHideLegend,tags:["svelte-csf-v5"]},we={...x.AlwaysHorizontal,tags:["svelte-csf-v5"]};export{we as AlwaysHorizontal,Ge as Default,Oe as VisuallyHideLegend,Be as WithInitialValue,ke as __namedExportsOrder,pe as default};
