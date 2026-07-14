import{ab as y,e as h,as as C,ae as e,g as T,a as l,ad as S,f as u,at as w,b as v,H as I}from"./iframe-Cm8Z88bU.js";import{c as b,w as A,i as B,d as F,a as x}from"./create-runtime-stories-B6v954qL.js";import{L as $,a as g}from"./List-jHVtmJB8.js";import"./preload-helper-Dp1pzeXC.js";import"./each-DbrIlhHV.js";import"./html-pXY4jdiE.js";import"./slot-BP_Qo1ZM.js";import"./class-Dwepb_fl.js";import"./attributes-DayBpKoh.js";const N=`A list component with modes for numbered, bulleted, dashed and bare lists. There is also an option to define list items as an array.

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
`,m=(p,_=C)=>{$(p,w(_,{children:(L,f)=>{var r=H(),a=h(r);g(a,{children:(t,c)=>{var o=v("First list item");l(t,o)},$$slots:{default:!0}});var n=e(a,2);g(n,{children:(t,c)=>{var o=v("Second list item");l(t,o)},$$slots:{default:!0}});var d=e(n,2);g(d,{children:(t,c)=>{var o=v("Third list item");l(t,o)},$$slots:{default:!0}}),l(L,r)},$$slots:{default:!0}}))},W={title:"Layout/List",component:$,tags:["autodocs"],argTypes:{},parameters:A(N)},{Story:s}=F();var H=u("<!> <!> <!>",1),M=u("<!> <!> <!> <!> <!> <!>",1);function D(p,_){y(_,!1),B();var L=M(),f=h(L);s(f,{name:"Default",args:{},get template(){return m},parameters:{__svelteCsf:{rawCode:`<List {...args}>
	<Li>First list item</Li>
	<Li>Second list item</Li>
	<Li>Third list item</Li>
</List>`}}});var r=e(f,2);s(r,{name:"Dashed list",args:{mode:"dash"},get template(){return m},parameters:{__svelteCsf:{rawCode:`<List {...args}>
	<Li>First list item</Li>
	<Li>Second list item</Li>
	<Li>Third list item</Li>
</List>`}}});var a=e(r,2);s(a,{name:"Numeric list",args:{mode:"number"},get template(){return m},parameters:{__svelteCsf:{rawCode:`<List {...args}>
	<Li>First list item</Li>
	<Li>Second list item</Li>
	<Li>Third list item</Li>
</List>`}}});var n=e(a,2);s(n,{name:"Bare list",args:{mode:"bare"},get template(){return m},parameters:{__svelteCsf:{rawCode:`<List {...args}>
	<Li>First list item</Li>
	<Li>Second list item</Li>
	<Li>Third list item</Li>
</List>`}}});var d=e(n,2);s(d,{name:"Inline list",args:{mode:"inline"},get template(){return m},parameters:{__svelteCsf:{rawCode:`<List {...args}>
	<Li>First list item</Li>
	<Li>Second list item</Li>
	<Li>Third list item</Li>
</List>`}}});var t=e(d,2);{let c=I(()=>x(P));s(t,{name:"List with items defined by an array",args:{items:["<strong>First</strong> list item","Second list item","Third list item"]},parameters:{...T(c),__svelteCsf:{rawCode:"<List {...args} />"}}})}l(p,L),S()}D.__docgen={data:[],name:"List.stories.svelte"};const i=b(D,W),K=["Default","DashedList","NumericList","BareList","InlineList","ListWithItemsDefinedByAnArray"],Q={...i.Default,tags:["svelte-csf-v5"]},U={...i.DashedList,tags:["svelte-csf-v5"]},V={...i.NumericList,tags:["svelte-csf-v5"]},X={...i.BareList,tags:["svelte-csf-v5"]},Y={...i.InlineList,tags:["svelte-csf-v5"]},Z={...i.ListWithItemsDefinedByAnArray,tags:["svelte-csf-v5"]};export{X as BareList,U as DashedList,Q as Default,Y as InlineList,Z as ListWithItemsDefinedByAnArray,V as NumericList,K as __namedExportsOrder,W as default};
