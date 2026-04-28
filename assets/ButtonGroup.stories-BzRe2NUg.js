import{A as H,p as u,al as J,au as W,ag as K,f,i as M,j as g,I as L,Y as S,X as j,G as V,av as C,J as p,k as y,V as R,t as T,K as N,R as P,aw as X,m as q,W as Y}from"./iframe-IP6ocM0a.js";import{s as z,w as Q,c as U,i as Z,d as ee}from"./create-runtime-stories-BvMOJ_th.js";import{s as te}from"./class-B9SFUanI.js";import{s as k,a as ae,c as ne}from"./attributes-CBM4GyKF.js";import{b as le}from"./this-BGHyvDbe.js";import"./attributes-q36Eg1F8.js";const oe=`<span class="ons-warning">This component is experimental</span>

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
`;var se=f("<legend> </legend>"),ie=f('<fieldset class="button-group svelte-1gp7wom"><!> <div class="buttons svelte-1gp7wom"><!></div></fieldset>');function D(o,e){H(e,!0);const[a,r]=S(),n=()=>j(V(b),"$currentValue",a);let t=u(e,"name",3,""),s=u(e,"legend",3,""),i=u(e,"value",15),I=u(e,"visuallyHideLegend",3,!1);const c=J(i());W(()=>{c.set(i())});const b=C(()=>c);W(()=>{n()!==i()&&i(n())}),K("buttonGroup",{groupName:t(),selectedValue:c});var _=ie(),v=y(_);{var G=d=>{var m=se();let B;var E=y(m);T(F=>{B=te(m,1,"svelte-1gp7wom",null,B,F),N(E,s())},[()=>({"ons-u-vh":I()})]),g(d,m)};M(v,d=>{s()&&d(G)})}var h=p(v,2),l=y(h);z(l,()=>e.children??R),g(o,_),L(),r()}D.__docgen={data:[{name:"name",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"legend",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"value",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1,defaultValue:"..."},{name:"visuallyHideLegend",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"children",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1}],name:"ButtonGroup.svelte"};function re(o,e,a){e.set(a())}var ue=f('<div class="button-container svelte-5yjm0"><input type="radio" class="radio-input svelte-5yjm0"/> <label class="radio-label svelte-5yjm0"> </label></div>');function w(o,e){H(e,!0);const[a,r]=S(),n=()=>j(V(_),"$currentSelected",a);let t=u(e,"value",3,""),s=u(e,"id",19,t),i=u(e,"label",19,t);const I=P("buttonGroup"),{groupName:c,selectedValue:b}=I,_=C(()=>b),v=C(()=>n()===t());let G;var h=ue(),l=y(h);l.__change=[re,b,t],le(l,B=>G=B,()=>G);var d=p(l,2),m=y(d);T(()=>{k(l,"id",s()),k(l,"name",c),ae(l,t()),ne(l,V(v)),k(l,"aria-checked",V(v)),k(d,"for",s()),N(m,i())}),g(o,h),L(),r()}X(["change"]);w.__docgen={data:[{name:"value",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."},{name:"label",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."}],name:"ButtonGroupItem.svelte"};const x=(o,e=R)=>{D(o,Y(e,{children:(a,r)=>{var n=pe(),t=q(n);w(t,{value:"1",label:"Option 1"});var s=p(t,2);w(s,{value:"2",label:"Option 2"});var i=p(s,2);w(i,{value:"3",label:"Option 3"}),g(a,n)},$$slots:{default:!0}}))},de={title:"Form elements/ButtonGroup",component:D,tags:["autodocs"],argTypes:{legend:{control:"text"},visuallyHideLegend:{control:"boolean"}},parameters:Q(oe)},{Story:O}=ee();var pe=f("<!> <!> <!>",1),ce=f("<!> <!> <!>",1);function A(o,e){H(e,!1),Z();var a=ce(),r=q(a);O(r,{name:"Default",args:{name:"primary",legend:"Choose an option"},get template(){return x},parameters:{__svelteCsf:{rawCode:`<ButtonGroup {...args}>
	<ButtonGroupItem value="1" label="Option 1" />
	<ButtonGroupItem value="2" label="Option 2" />
	<ButtonGroupItem value="3" label="Option 3" />
</ButtonGroup>`}}});var n=p(r,2);O(n,{name:"With initial value",args:{name:"primary",legend:"Choose an option",value:"2"},get template(){return x},parameters:{__svelteCsf:{rawCode:`<ButtonGroup {...args}>
	<ButtonGroupItem value="1" label="Option 1" />
	<ButtonGroupItem value="2" label="Option 2" />
	<ButtonGroupItem value="3" label="Option 3" />
</ButtonGroup>`}}});var t=p(n,2);O(t,{name:"Visually hide legend",args:{name:"primary",legend:"Choose an option",visuallyHideLegend:!0},get template(){return x},parameters:{__svelteCsf:{rawCode:`<ButtonGroup {...args}>
	<ButtonGroupItem value="1" label="Option 1" />
	<ButtonGroupItem value="2" label="Option 2" />
	<ButtonGroupItem value="3" label="Option 3" />
</ButtonGroup>`}}}),g(o,a),L()}A.__docgen={data:[],name:"ButtonGroup.stories.svelte"};const $=U(A,de),_e=["Default","WithInitialValue","VisuallyHideLegend"],Ge={...$.Default,tags:["svelte-csf-v5"]},he={...$.WithInitialValue,tags:["svelte-csf-v5"]},Be={...$.VisuallyHideLegend,tags:["svelte-csf-v5"]};export{Ge as Default,Be as VisuallyHideLegend,he as WithInitialValue,_e as __namedExportsOrder,de as default};
