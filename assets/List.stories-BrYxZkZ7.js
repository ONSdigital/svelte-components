import{p as y,j as h,f as u,Z as C,k as e,g as T,o as S,e as l,h as w,_ as I,V as v}from"./iframe-Ctfpl9ZJ.js";import{w as x,c as A,i as B,d as F,a as b}from"./create-runtime-stories-DgJbsNY1.js";import{L as $,a as g}from"./List-aMY8aJbu.js";import"./each-a10QJc0s.js";import"./html-Qe-F4bYj.js";import"./slot-BP_Qo1ZM.js";import"./class-Dzh9Da8g.js";import"./attributes-Co-1QMVx.js";const N=`A list component with modes for numbered, bulleted, dashed and bare lists. There is also an option to define list items as an array.

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
`,P=`In this example, the list items are defined in an array. The items can include HTML tags.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { List, Li } from "@onsvisual/svelte-components";

  const items = ["<strong>First</strong> list item", "Second list item", "Third list item"];
<\/script>

<List items="{items}"/>
\`\`\`
`,m=(p,_=C)=>{$(p,I(_,{children:(L,f)=>{var r=M(),n=u(r);g(n,{children:(t,c)=>{var o=v("First list item");l(t,o)},$$slots:{default:!0}});var a=e(n,2);g(a,{children:(t,c)=>{var o=v("Second list item");l(t,o)},$$slots:{default:!0}});var d=e(a,2);g(d,{children:(t,c)=>{var o=v("Third list item");l(t,o)},$$slots:{default:!0}}),l(L,r)},$$slots:{default:!0}}))},W={title:"Layout/List",component:$,tags:["autodocs"],argTypes:{},parameters:x(N)},{Story:s}=F();var M=h("<!> <!> <!>",1),j=h("<!> <!> <!> <!> <!> <!>",1);function D(p,_){y(_,!1),B();var L=j(),f=u(L);s(f,{name:"Default",args:{},get template(){return m},parameters:{__svelteCsf:{rawCode:`<List {...args}>
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
</List>`}}});var t=e(d,2);const c=S(()=>b(P));s(t,{name:"List with items defined by an array",args:{items:["<strong>First</strong> list item","Second list item","Third list item"]},parameters:{...T(c),__svelteCsf:{rawCode:"<List {...args} />"}}}),l(p,L),w()}D.__docgen={data:[],name:"List.stories.svelte"};const i=A(D,W),z=["Default","DashedList","NumericList","BareList","InlineList","ListWithItemsDefinedByAnArray"],G={...i.Default,tags:["svelte-csf-v5"]},J={...i.DashedList,tags:["svelte-csf-v5"]},K={...i.NumericList,tags:["svelte-csf-v5"]},Q={...i.BareList,tags:["svelte-csf-v5"]},U={...i.InlineList,tags:["svelte-csf-v5"]},X={...i.ListWithItemsDefinedByAnArray,tags:["svelte-csf-v5"]};export{Q as BareList,J as DashedList,G as Default,U as InlineList,X as ListWithItemsDefinedByAnArray,K as NumericList,z as __namedExportsOrder,W as default};
