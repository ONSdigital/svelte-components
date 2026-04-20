import{A as y,f as g,m as u,W as C,J as e,G as T,h as S,j as l,I as w,X as I,O as v}from"./iframe-BwiX6vhX.js";import{w as A,c as x,i as B,d as F,a as b}from"./create-runtime-stories-C3E1k0mr.js";import{L as $,a as h}from"./List-DnDvk-hz.js";import"./each-x2uzLhf4.js";import"./html-D42A-S-n.js";import"./slot-BP_Qo1ZM.js";import"./class-B9SFUanI.js";import"./attributes-q36Eg1F8.js";const N=`A list component with modes for numbered, bulleted, dashed and bare lists. There is also an option to define list items as an array.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { List, Li } from "@onsvisual/svelte-components";
<\/script>

<List>
  <Li>First list item</Li>
  <Li>Second list item</Li>
  <Li>Third list item</Li>
</List>
\`\`\`
`,W=`In this example, the list items are defined in an array. The items can include HTML tags.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { List, Li } from "@onsvisual/svelte-components";

  const items = ["<strong>First</strong> list item", "Second list item", "Third list item"];
<\/script>

<List items="{items}"/>
\`\`\`
`,m=(p,_=C)=>{$(p,I(_,{children:(L,f)=>{var r=M(),n=u(r);h(n,{children:(t,c)=>{var o=v("First list item");l(t,o)},$$slots:{default:!0}});var a=e(n,2);h(a,{children:(t,c)=>{var o=v("Second list item");l(t,o)},$$slots:{default:!0}});var d=e(a,2);h(d,{children:(t,c)=>{var o=v("Third list item");l(t,o)},$$slots:{default:!0}}),l(L,r)},$$slots:{default:!0}}))},P={title:"Layout/List",component:$,tags:["autodocs"],argTypes:{},parameters:A(N)},{Story:s}=F();var M=g("<!> <!> <!>",1),O=g("<!> <!> <!> <!> <!> <!>",1);function D(p,_){y(_,!1),B();var L=O(),f=u(L);s(f,{name:"Default",args:{},get template(){return m},parameters:{__svelteCsf:{rawCode:`<List {...args}>
	<Li>First list item</Li>
	<Li>Second list item</Li>
	<Li>Third list item</Li>
</List>`}}});var r=e(f,2);s(r,{name:"Dashed list",args:{mode:"dash"},get template(){return m},parameters:{__svelteCsf:{rawCode:`<List {...args}>
	<Li>First list item</Li>
	<Li>Second list item</Li>
	<Li>Third list item</Li>
</List>`}}});var n=e(r,2);s(n,{name:"Numeric list",args:{mode:"number"},get template(){return m},parameters:{__svelteCsf:{rawCode:`<List {...args}>
	<Li>First list item</Li>
	<Li>Second list item</Li>
	<Li>Third list item</Li>
</List>`}}});var a=e(n,2);s(a,{name:"Bare list",args:{mode:"bare"},get template(){return m},parameters:{__svelteCsf:{rawCode:`<List {...args}>
	<Li>First list item</Li>
	<Li>Second list item</Li>
	<Li>Third list item</Li>
</List>`}}});var d=e(a,2);s(d,{name:"Inline list",args:{mode:"inline"},get template(){return m},parameters:{__svelteCsf:{rawCode:`<List {...args}>
	<Li>First list item</Li>
	<Li>Second list item</Li>
	<Li>Third list item</Li>
</List>`}}});var t=e(d,2);const c=S(()=>b(W));s(t,{name:"List with items defined by an array",args:{items:["<strong>First</strong> list item","Second list item","Third list item"]},parameters:{...T(c),__svelteCsf:{rawCode:"<List {...args} />"}}}),l(p,L),w()}D.__docgen={data:[],name:"List.stories.svelte"};const i=x(D,P),k=["Default","DashedList","NumericList","BareList","InlineList","ListWithItemsDefinedByAnArray"],z={...i.Default,tags:["svelte-csf-v5"]},K={...i.DashedList,tags:["svelte-csf-v5"]},Q={...i.NumericList,tags:["svelte-csf-v5"]},U={...i.BareList,tags:["svelte-csf-v5"]},V={...i.InlineList,tags:["svelte-csf-v5"]},Y={...i.ListWithItemsDefinedByAnArray,tags:["svelte-csf-v5"]};export{U as BareList,K as DashedList,z as Default,V as InlineList,Y as ListWithItemsDefinedByAnArray,Q as NumericList,k as __namedExportsOrder,P as default};
