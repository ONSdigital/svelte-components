import{p as H,a as u,am as X,au as W,ak as Z,j as f,i as z,e as g,h as L,X as S,W as j,g as V,av as C,k as p,n as y,Z as R,t as T,q,O as A,aw as F,f as N,_ as J}from"./iframe-BeI6gv3V.js";import{s as K,w as Q,c as U,i as Y,d as ee}from"./create-runtime-stories-DnOdY0ML.js";import{s as te}from"./class-Dzh9Da8g.js";import{s as B,a as ae,c as ne}from"./attributes-D_V09orS.js";import{b as le}from"./this-BQolPdgt.js";import"./attributes-Co-1QMVx.js";const oe=`<span class="ons-warning">This component is experimental</span>

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
`;var se=f("<legend> </legend>"),ie=f('<fieldset class="button-group svelte-1gp7wom"><!> <div class="buttons svelte-1gp7wom"><!></div></fieldset>');function D(o,e){H(e,!0);const[a,r]=S(),n=()=>j(V(b),"$currentValue",a);let t=u(e,"name",3,""),s=u(e,"legend",3,""),i=u(e,"value",15),I=u(e,"visuallyHideLegend",3,!1);const c=X(i());W(()=>{c.set(i())});const b=C(()=>c);W(()=>{n()!==i()&&i(n())}),Z("buttonGroup",{groupName:t(),selectedValue:c});var _=ie(),v=y(_);{var h=d=>{var m=se();let k;var M=y(m);T(P=>{k=te(m,1,"svelte-1gp7wom",null,k,P),q(M,s())},[()=>({"ons-u-vh":I()})]),g(d,m)};z(v,d=>{s()&&d(h)})}var G=p(v,2),l=y(G);K(l,()=>e.children??R),g(o,_),L(),r()}D.__docgen={data:[{name:"name",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"legend",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"value",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1,defaultValue:"..."},{name:"visuallyHideLegend",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"children",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1}],name:"ButtonGroup.svelte"};function re(o,e,a){e.set(a())}var ue=f('<div class="button-container svelte-5yjm0"><input type="radio" class="radio-input svelte-5yjm0"/> <label class="radio-label svelte-5yjm0"> </label></div>');function w(o,e){H(e,!0);const[a,r]=S(),n=()=>j(V(_),"$currentSelected",a);let t=u(e,"value",3,""),s=u(e,"id",19,t),i=u(e,"label",19,t);const I=A("buttonGroup"),{groupName:c,selectedValue:b}=I,_=C(()=>b),v=C(()=>n()===t());let h;var G=ue(),l=y(G);l.__change=[re,b,t],le(l,k=>h=k,()=>h);var d=p(l,2),m=y(d);T(()=>{B(l,"id",s()),B(l,"name",c),ae(l,t()),ne(l,V(v)),B(l,"aria-checked",V(v)),B(d,"for",s()),q(m,i())}),g(o,G),L(),r()}F(["change"]);w.__docgen={data:[{name:"value",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"id",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."},{name:"label",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:"..."}],name:"ButtonGroupItem.svelte"};const x=(o,e=R)=>{D(o,J(e,{children:(a,r)=>{var n=pe(),t=N(n);w(t,{value:"1",label:"Option 1"});var s=p(t,2);w(s,{value:"2",label:"Option 2"});var i=p(s,2);w(i,{value:"3",label:"Option 3"}),g(a,n)},$$slots:{default:!0}}))},de={title:"Inputs/ButtonGroup",component:D,tags:["autodocs"],argTypes:{legend:{control:"text"},visuallyHideLegend:{control:"boolean"}},parameters:Q(oe)},{Story:O}=ee();var pe=f("<!> <!> <!>",1),ce=f("<!> <!> <!>",1);function E(o,e){H(e,!1),Y();var a=ce(),r=N(a);O(r,{name:"Default",args:{name:"primary",legend:"Choose an option"},get template(){return x},parameters:{__svelteCsf:{rawCode:`<ButtonGroup {...args}>
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
</ButtonGroup>`}}}),g(o,a),L()}E.__docgen={data:[],name:"ButtonGroup.stories.svelte"};const $=U(E,de),_e=["Default","WithInitialValue","VisuallyHideLegend"],he={...$.Default,tags:["svelte-csf-v5"]},Ge={...$.WithInitialValue,tags:["svelte-csf-v5"]},ke={...$.VisuallyHideLegend,tags:["svelte-csf-v5"]};export{he as Default,ke as VisuallyHideLegend,Ge as WithInitialValue,_e as __namedExportsOrder,de as default};
