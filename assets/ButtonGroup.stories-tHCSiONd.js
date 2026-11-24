import{ad as D,p as i,aO as q,aB as A,aA as J,i as K,s as Q,t as L,a as h,af as M,aF as T,f as _,aG as N,g as I,ag as S,ah as d,c as v,n as R,b as F,ae as U,an as X,am as Y,h as E,ax as Z}from"./iframe-f67rGsxv.js";import{c as ee,w as te,i as ae,d as ne}from"./create-runtime-stories-Ua86Psvv.js";import{s as W}from"./class-8kYv-OY_.js";import{s as y,b as le,c as oe}from"./attributes-jbjqwhbX.js";import{b as se}from"./this-BdodwLOJ.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DayBpKoh.js";const ie=`<span class="ons-warning">This component is experimental</span>

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
<script>
  let selectedValue = $state(null);
<\/script>

<ButtonGroup name="primary" legend="Choose an option" bind:value={selectedValue}>
...
</ButtonGroup>
\`\`\`
`;var re=_("<legend> </legend>"),ue=_('<fieldset><!> <div class="buttons svelte-o751n7"><!></div></fieldset>');function $(r,e){D(e,!0);const l=()=>N(I(z),"$currentValue",u),[u,o]=T();let t=i(e,"name",3,""),a=i(e,"legend",3,""),s=i(e,"value",15),C=i(e,"visuallyHideLegend",3,!1),H=i(e,"stackOnMobile",3,!0);const p=q(s());A(()=>{p.set(s())});const z=S(()=>p);A(()=>{l()!==s()&&s(l())}),J("buttonGroup",{groupName:t(),selectedValue:p});var c=ue();let G;var m=v(c);{var k=g=>{var f=re();let B;var j=v(f);L(()=>{B=W(f,1,"svelte-o751n7",null,B,{"ons-u-vh":C()}),F(j,a())}),h(g,f)};K(m,g=>{a()&&g(k)})}var n=d(m,2),b=v(n);Q(b,()=>e.children??R),L(()=>G=W(c,1,"button-group svelte-o751n7",null,G,{"stack-on-mobile":H()})),h(r,c),M(),o()}$.__docgen={data:[{name:"name",visibility:"public",description:"Name attribute shared by the radio inputs in the group",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"legend",visibility:"public",description:"Legend text for the group",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"value",visibility:"public",description:"The selected value (bindable)",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."},{name:"visuallyHideLegend",visibility:"public",description:"Visually hide the legend (it stays available to screen readers)",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"stackOnMobile",visibility:"public",description:"Stack the buttons vertically on small screens",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"true"},{name:"children",visibility:"public",description:"Child content: the ButtonGroupItem components (snippet)",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1}],name:"ButtonGroup.svelte"};var de=_('<div class="button-container svelte-abte10"><input type="radio" class="radio-input svelte-abte10"/> <label class="radio-label svelte-abte10"><span class="label-text svelte-abte10"> </span></label></div>');function V(r,e){D(e,!0);const l=()=>N(I(z),"$currentSelected",u),[u,o]=T();let t=i(e,"value",3,""),a=i(e,"id",19,t),s=i(e,"label",19,t);const C=U("buttonGroup"),{groupName:H,selectedValue:p}=C,z=S(()=>p),c=S(()=>l()===t());function G(){p.set(t())}let m;var k=de(),n=v(k);se(n,B=>m=B,()=>m);var b=d(n,2),g=v(b),f=v(g);L(()=>{y(n,"id",a()),y(n,"name",H),le(n,t()),oe(n,I(c)),y(n,"aria-checked",I(c)),y(b,"for",a()),y(b,"data-label",s()),F(f,s())}),X("change",n,G),h(r,k),M(),o()}Y(["change"]);V.__docgen={data:[{name:"value",visibility:"public",description:"Value set on the parent ButtonGroup when this item is selected",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"id",visibility:"public",description:"ID of the radio input (defaults to `value`)",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."},{name:"label",visibility:"public",description:"Label text (defaults to `value`)",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."}],name:"ButtonGroupItem.svelte"};const w=(r,e=R)=>{$(r,Z(e,{children:(l,u)=>{var o=ce(),t=E(o);V(t,{value:"1",label:"Option 1"});var a=d(t,2);V(a,{value:"2",label:"Option 2"});var s=d(a,2);V(s,{value:"3",label:"Option 3"}),h(l,o)},$$slots:{default:!0}}))},pe={title:"Form elements/ButtonGroup",component:$,tags:["autodocs"],argTypes:{legend:{control:"text"},visuallyHideLegend:{control:"boolean"},stackOnMobile:{control:"boolean"}},parameters:te(ie)},{Story:O}=ne();var ce=_("<!> <!> <!>",1),ve=_("<!> <!> <!> <!>",1);function P(r,e){D(e,!1),ae();var l=ve(),u=E(l);O(u,{name:"Default",args:{name:"primary",legend:"Choose an option"},get template(){return w},parameters:{__svelteCsf:{rawCode:`<ButtonGroup {...args}>
	<ButtonGroupItem value="1" label="Option 1" />
	<ButtonGroupItem value="2" label="Option 2" />
	<ButtonGroupItem value="3" label="Option 3" />
</ButtonGroup>`}}});var o=d(u,2);O(o,{name:"With initial value",args:{name:"primary",legend:"Choose an option",value:"2"},get template(){return w},parameters:{__svelteCsf:{rawCode:`<ButtonGroup {...args}>
	<ButtonGroupItem value="1" label="Option 1" />
	<ButtonGroupItem value="2" label="Option 2" />
	<ButtonGroupItem value="3" label="Option 3" />
</ButtonGroup>`}}});var t=d(o,2);O(t,{name:"Visually hide legend",args:{name:"primary",legend:"Choose an option",visuallyHideLegend:!0},get template(){return w},parameters:{__svelteCsf:{rawCode:`<ButtonGroup {...args}>
	<ButtonGroupItem value="1" label="Option 1" />
	<ButtonGroupItem value="2" label="Option 2" />
	<ButtonGroupItem value="3" label="Option 3" />
</ButtonGroup>`}}});var a=d(t,2);O(a,{name:"Always horizontal",args:{name:"horizontal",legend:"Choose an option",stackOnMobile:!1},get template(){return w},parameters:{__svelteCsf:{rawCode:`<ButtonGroup {...args}>
	<ButtonGroupItem value="1" label="Option 1" />
	<ButtonGroupItem value="2" label="Option 2" />
	<ButtonGroupItem value="3" label="Option 3" />
</ButtonGroup>`}}}),h(r,l),M()}P.__docgen={data:[],name:"ButtonGroup.stories.svelte"};const x=ee(P,pe),Ge=["Default","WithInitialValue","VisuallyHideLegend","AlwaysHorizontal"],ke={...x.Default,tags:["svelte-csf-v5"]},Be={...x.WithInitialValue,tags:["svelte-csf-v5"]},we={...x.VisuallyHideLegend,tags:["svelte-csf-v5"]},Oe={...x.AlwaysHorizontal,tags:["svelte-csf-v5"]};export{Oe as AlwaysHorizontal,ke as Default,we as VisuallyHideLegend,Be as WithInitialValue,Ge as __namedExportsOrder,pe as default};
