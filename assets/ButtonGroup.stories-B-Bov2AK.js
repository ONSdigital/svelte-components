import{p as C,a as d,al as X,at as W,aj as Z,j as b,i as z,e as f,h as H,X as j,W as S,g as B,au as x,k as p,n as y,Z as R,t as T,q,O as A,av as F,f as N,_ as J}from"./iframe-BMlGGSEh.js";import{s as K,w as Q,c as U,i as Y,d as ee}from"./create-runtime-stories-DY8P5Zzy.js";import{s as te}from"./class-Dzh9Da8g.js";import{s as G,a as ae,c as ne}from"./attributes-In2loFLY.js";import{b as le}from"./this-DAt889jq.js";import"./attributes-Co-1QMVx.js";const oe=`<span class="ons-warning">This component is experimental</span>

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
`;var se=b("<legend> </legend>"),ie=b('<fieldset class="button-group svelte-1gp7wom"><!> <div class="buttons svelte-1gp7wom"><!></div></fieldset>');function L(o,e){C(e,!0);const[a,i]=j(),n=()=>S(B(I),"$currentValue",a);let t=d(e,"name",3,""),r=d(e,"legend",3,""),s=d(e,"value",15),V=d(e,"visuallyHideLegend",3,!1);const u=X(s());W(()=>{u.set(s())});const I=x(()=>u);W(()=>{n()!==s()&&s(n())}),Z("buttonGroup",{groupName:t(),selectedValue:u});var c=ie(),v=y(c);{var _=m=>{var g=se();let D;var M=y(g);T(P=>{D=te(g,1,"svelte-1gp7wom",null,D,P),q(M,r())},[()=>({"ons-u-vh":V()})]),f(m,g)};z(v,m=>{r()&&m(_)})}var l=p(v,2),h=y(l);K(h,()=>e.children??R),f(o,c),H(),i()}L.__docgen={data:[{name:"name",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"legend",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"value",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1,defaultValue:"..."},{name:"visuallyHideLegend",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"children",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1}],name:"ButtonGroup.svelte"};function re(o,e,a){e.set(a())}var ue=b('<div class="button-container svelte-5yjm0"><input type="radio" class="radio-input svelte-5yjm0"/> <label class="radio-label svelte-5yjm0"> </label></div>');function k(o,e){C(e,!0);const[a,i]=j(),n=()=>S(B(I),"$currentSelected",a);let t=d(e,"value",3,""),r=d(e,"label",19,t);const s=A("buttonGroup"),{groupName:V,selectedValue:u}=s,I=x(()=>u),c=x(()=>n()===t());let v;var _=ue(),l=y(_);l.__change=[re,u,t],le(l,g=>v=g,()=>v);var h=p(l,2),m=y(h);T(()=>{G(l,"id",t()),G(l,"name",V),ae(l,t()),ne(l,B(c)),G(l,"aria-checked",B(c)),G(h,"for",t()),q(m,r())}),f(o,_),H(),i()}F(["change"]);k.__docgen={data:[{name:"value",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"label",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."}],name:"ButtonGroupItem.svelte"};const w=(o,e=R)=>{L(o,J(e,{children:(a,i)=>{var n=pe(),t=N(n);k(t,{value:"1",label:"Option 1"});var r=p(t,2);k(r,{value:"2",label:"Option 2"});var s=p(r,2);k(s,{value:"3",label:"Option 3"}),f(a,n)},$$slots:{default:!0}}))},de={title:"Inputs/ButtonGroup",component:L,tags:["autodocs"],argTypes:{legend:{control:"text"},visuallyHideLegend:{control:"boolean"}},parameters:Q(oe)},{Story:O}=ee();var pe=b("<!> <!> <!>",1),ce=b("<!> <!> <!>",1);function E(o,e){C(e,!1),Y();var a=ce(),i=N(a);O(i,{name:"Default",args:{name:"primary",legend:"Choose an option"},get template(){return w},parameters:{__svelteCsf:{rawCode:`<ButtonGroup {...args}>
	<ButtonGroupItem value="1" label="Option 1" />
	<ButtonGroupItem value="2" label="Option 2" />
	<ButtonGroupItem value="3" label="Option 3" />
</ButtonGroup>`}}});var n=p(i,2);O(n,{name:"With initial value",args:{name:"primary",legend:"Choose an option",value:"2"},get template(){return w},parameters:{__svelteCsf:{rawCode:`<ButtonGroup {...args}>
	<ButtonGroupItem value="1" label="Option 1" />
	<ButtonGroupItem value="2" label="Option 2" />
	<ButtonGroupItem value="3" label="Option 3" />
</ButtonGroup>`}}});var t=p(n,2);O(t,{name:"Visually hide legend",args:{name:"primary",legend:"Choose an option",visuallyHideLegend:!0},get template(){return w},parameters:{__svelteCsf:{rawCode:`<ButtonGroup {...args}>
	<ButtonGroupItem value="1" label="Option 1" />
	<ButtonGroupItem value="2" label="Option 2" />
	<ButtonGroupItem value="3" label="Option 3" />
</ButtonGroup>`}}}),f(o,a),H()}E.__docgen={data:[],name:"ButtonGroup.stories.svelte"};const $=U(E,de),_e=["Default","WithInitialValue","VisuallyHideLegend"],he={...$.Default,tags:["svelte-csf-v5"]},Ge={...$.WithInitialValue,tags:["svelte-csf-v5"]},Be={...$.VisuallyHideLegend,tags:["svelte-csf-v5"]};export{he as Default,Be as VisuallyHideLegend,Ge as WithInitialValue,_e as __namedExportsOrder,de as default};
