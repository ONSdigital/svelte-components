import{ad as y,h as g,n as C,ah as e,g as T,a as l,af as S,f as u,ax as w,K as I,d as v}from"./iframe-DAUNLR8O.js";import{c as x,w as A,i as B,d as F,a as b}from"./create-runtime-stories-B5aIRkb-.js";import{L as $,a as h}from"./List-BlSVAfUu.js";import"./preload-helper-Dp1pzeXC.js";import"./each-zFvNCFwR.js";import"./html-D5syok29.js";import"./class-DzLv1wVC.js";import"./attributes-DayBpKoh.js";const N=`A list component with modes for numbered, bulleted, dashed and bare lists. There is also an option to define list items as an array.\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { List, Li } from "@onsvisual/svelte-components";\r
<\/script>\r
\r
<List>\r
  <Li>First list item</Li>\r
  <Li>Second list item</Li>\r
  <Li>Third list item</Li>\r
</List>\r
\`\`\`\r
`,P=`In this example, the list items are defined in an array. The items can include HTML tags.\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { List, Li } from "@onsvisual/svelte-components";\r
\r
  const items = ["<strong>First</strong> list item", "Second list item", "Third list item"];\r
<\/script>\r
\r
<List items="{items}"/>\r
\`\`\`\r
`,m=(p,_=C)=>{$(p,w(_,{children:(L,f)=>{var r=M(),n=g(r);h(n,{children:(t,c)=>{var o=v("First list item");l(t,o)}});var a=e(n,2);h(a,{children:(t,c)=>{var o=v("Second list item");l(t,o)}});var d=e(a,2);h(d,{children:(t,c)=>{var o=v("Third list item");l(t,o)}}),l(L,r)},$$slots:{default:!0}}))},W={title:"Layout/List",component:$,tags:["autodocs"],argTypes:{},parameters:A(N)},{Story:s}=F();var M=u("<!> <!> <!>",1),q=u("<!> <!> <!> <!> <!> <!>",1);function D(p,_){y(_,!1),B();var L=q(),f=g(L);s(f,{name:"Default",args:{},get template(){return m},parameters:{__svelteCsf:{rawCode:`<List {...args}>\r
	<Li>First list item</Li>\r
	<Li>Second list item</Li>\r
	<Li>Third list item</Li>\r
</List>`}}});var r=e(f,2);s(r,{name:"Dashed list",args:{mode:"dash"},get template(){return m},parameters:{__svelteCsf:{rawCode:`<List {...args}>\r
	<Li>First list item</Li>\r
	<Li>Second list item</Li>\r
	<Li>Third list item</Li>\r
</List>`}}});var n=e(r,2);s(n,{name:"Numeric list",args:{mode:"number"},get template(){return m},parameters:{__svelteCsf:{rawCode:`<List {...args}>\r
	<Li>First list item</Li>\r
	<Li>Second list item</Li>\r
	<Li>Third list item</Li>\r
</List>`}}});var a=e(n,2);s(a,{name:"Bare list",args:{mode:"bare"},get template(){return m},parameters:{__svelteCsf:{rawCode:`<List {...args}>\r
	<Li>First list item</Li>\r
	<Li>Second list item</Li>\r
	<Li>Third list item</Li>\r
</List>`}}});var d=e(a,2);s(d,{name:"Inline list",args:{mode:"inline"},get template(){return m},parameters:{__svelteCsf:{rawCode:`<List {...args}>\r
	<Li>First list item</Li>\r
	<Li>Second list item</Li>\r
	<Li>Third list item</Li>\r
</List>`}}});var t=e(d,2);{let c=I(()=>b(P));s(t,{name:"List with items defined by an array",args:{items:["<strong>First</strong> list item","Second list item","Third list item"]},parameters:{...T(c),__svelteCsf:{rawCode:"<List {...args} />"}}})}l(p,L),S()}D.__docgen={data:[],name:"List.stories.svelte"};const i=x(D,W),G=["Default","DashedList","NumericList","BareList","InlineList","ListWithItemsDefinedByAnArray"],J={...i.Default,tags:["svelte-csf-v5"]},Q={...i.DashedList,tags:["svelte-csf-v5"]},U={...i.NumericList,tags:["svelte-csf-v5"]},V={...i.BareList,tags:["svelte-csf-v5"]},X={...i.InlineList,tags:["svelte-csf-v5"]},Y={...i.ListWithItemsDefinedByAnArray,tags:["svelte-csf-v5"]};export{V as BareList,Q as DashedList,J as Default,X as InlineList,Y as ListWithItemsDefinedByAnArray,U as NumericList,G as __namedExportsOrder,W as default};
