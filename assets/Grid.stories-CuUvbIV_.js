import{ab as D,e as g,ag as y,ah as i,a as e,ad as F,f as G,av as M}from"./iframe-CWf7aFlM.js";import{c as N,w as O,i as S,d as x}from"./create-runtime-stories-DZHrlilD.js";import{G as h}from"./Grid-CgMt-NZB.js";import{G as t}from"./GridCell-D_XgyA3o.js";import"./preload-helper-Dp1pzeXC.js";import"./class-bcIlrV7N.js";import"./attributes-DayBpKoh.js";import"./Container-B-0QdNll.js";import"./slot-BP_Qo1ZM.js";import"./attributes-HyytCBC6.js";import"./style-DKGnerva.js";import"./Theme-kRfsJ7Yx.js";import"./html-CHqp8wE0.js";import"./svelte-head-BAKvAkK-.js";const b=`A media grid component, useful for images and small multiple charts. Setting \`colwidth\` to **full** allows for a single cell/image/chart with an optional caption.\r
\r
Grid content is rendered as a Svelte 5 \`children\` snippet. Existing nested \`<GridCell>\` markup remains unchanged.\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { Grid, GridCell } from "@onsvisual/svelte-components";\r
<\/script>\r
\r
<Grid>\r
  <GridCell>{grid_cell_content}</GridCell>\r
  <GridCell>{grid_cell_content}</GridCell>\r
  <GridCell>{grid_cell_content}</GridCell>\r
</Grid>\r
\`\`\`\r
`,p=(c,v=y)=>{h(c,M(v,{children:(C,o)=>{var d=R(),s=g(d);t(s,{children:(l,$)=>{var m=f();e(l,m)},$$slots:{default:!0}});var a=i(s,2);t(a,{children:(l,$)=>{var m=w();e(l,m)},$$slots:{default:!0}});var r=i(a,2);t(r,{children:(l,$)=>{var m=W();e(l,m)},$$slots:{default:!0}});var n=i(r,2);t(n,{children:(l,$)=>{var m=L();e(l,m)},$$slots:{default:!0}}),e(C,d)},$$slots:{default:!0}}))},E=c=>{h(c,{colWidth:"medium",children:(v,C)=>{var o=P(),d=g(o);t(d,{children:(r,n)=>{var l=f();e(r,l)},$$slots:{default:!0}});var s=i(d,2);t(s,{children:(r,n)=>{var l=w();e(r,l)},$$slots:{default:!0}});var a=i(s,2);t(a,{children:(r,n)=>{var l=W();e(r,l)},$$slots:{default:!0}}),e(v,o)},$$slots:{default:!0}})},k=c=>{h(c,{children:(v,C)=>{var o=P(),d=g(o);t(d,{cls:"ons-col-4@m",children:(r,n)=>{var l=f();e(r,l)},$$slots:{default:!0}});var s=i(d,2);t(s,{cls:"ons-col-4@m",children:(r,n)=>{var l=w();e(r,l)},$$slots:{default:!0}});var a=i(s,2);t(a,{cls:"ons-col-4@m",children:(r,n)=>{var l=W();e(r,l)},$$slots:{default:!0}}),e(v,o)},$$slots:{default:!0}})},A={title:"Layout/Grid",component:h,tags:["autodocs"],argTypes:{width:{control:{type:"select"}},colWidth:{control:{type:"select"}},gridGap:{control:{type:"select"}}},parameters:O(b)},{Story:u}=x();var f=G('<div class="grid-cell svelte-sg8wla">Grid cell one</div>'),w=G('<div class="grid-cell svelte-sg8wla">Grid cell two</div>'),W=G('<div class="grid-cell svelte-sg8wla">Grid cell three</div>'),L=G('<div class="grid-cell svelte-sg8wla">Grid cell four</div>'),R=G("<!> <!> <!> <!>",1),P=G("<!> <!> <!>",1),j=G("<!> <!> <!> <!> <!> <!>",1);function T(c,v){D(v,!1),S();var C=j(),o=g(C);u(o,{name:"Default",args:{},get template(){return p},parameters:{__svelteCsf:{rawCode:`<Grid {...args}>\r
	<GridCell><div class="grid-cell">Grid cell one</div></GridCell>\r
	<GridCell><div class="grid-cell">Grid cell two</div></GridCell>\r
	<GridCell><div class="grid-cell">Grid cell three</div></GridCell>\r
	<GridCell><div class="grid-cell">Grid cell four</div></GridCell>\r
</Grid>`}}});var d=i(o,2);u(d,{name:"Wide columns",args:{colWidth:"wide"},get template(){return p},parameters:{__svelteCsf:{rawCode:`<Grid {...args}>\r
	<GridCell><div class="grid-cell">Grid cell one</div></GridCell>\r
	<GridCell><div class="grid-cell">Grid cell two</div></GridCell>\r
	<GridCell><div class="grid-cell">Grid cell three</div></GridCell>\r
	<GridCell><div class="grid-cell">Grid cell four</div></GridCell>\r
</Grid>`}}});var s=i(d,2);u(s,{name:"Narrow columns",args:{colWidth:"narrow"},get template(){return p},parameters:{__svelteCsf:{rawCode:`<Grid {...args}>\r
	<GridCell><div class="grid-cell">Grid cell one</div></GridCell>\r
	<GridCell><div class="grid-cell">Grid cell two</div></GridCell>\r
	<GridCell><div class="grid-cell">Grid cell three</div></GridCell>\r
	<GridCell><div class="grid-cell">Grid cell four</div></GridCell>\r
</Grid>`}}});var a=i(s,2);u(a,{name:"Full width columns",args:{colWidth:"full"},get template(){return p},parameters:{__svelteCsf:{rawCode:`<Grid {...args}>\r
	<GridCell><div class="grid-cell">Grid cell one</div></GridCell>\r
	<GridCell><div class="grid-cell">Grid cell two</div></GridCell>\r
	<GridCell><div class="grid-cell">Grid cell three</div></GridCell>\r
	<GridCell><div class="grid-cell">Grid cell four</div></GridCell>\r
</Grid>`}}});var r=i(a,2);u(r,{name:"Three columns with medium column width",args:{},get template(){return E},parameters:{__svelteCsf:{rawCode:`<Grid colWidth="medium">\r
	<GridCell><div class="grid-cell">Grid cell one</div></GridCell>\r
	<GridCell><div class="grid-cell">Grid cell two</div></GridCell>\r
	<GridCell><div class="grid-cell">Grid cell three</div></GridCell>\r
</Grid>`}}});var n=i(r,2);u(n,{name:"Three columns with GridCell class override",args:{},get template(){return k},parameters:{__svelteCsf:{rawCode:`<Grid>\r
	<GridCell cls="ons-col-4@m"><div class="grid-cell">Grid cell one</div></GridCell>\r
	<GridCell cls="ons-col-4@m"><div class="grid-cell">Grid cell two</div></GridCell>\r
	<GridCell cls="ons-col-4@m"><div class="grid-cell">Grid cell three</div></GridCell>\r
</Grid>`}}}),e(c,C),F()}T.__docgen={data:[],name:"Grid.stories.svelte"};const _=N(T,A),rl=["Default","WideColumns","NarrowColumns","FullWidthColumns","ThreeColumnsWithMediumColumnWidth","ThreeColumnsWithGridCellClassOverride"],el={..._.Default,tags:["svelte-csf-v5"]},il={..._.WideColumns,tags:["svelte-csf-v5"]},dl={..._.NarrowColumns,tags:["svelte-csf-v5"]},sl={..._.FullWidthColumns,tags:["svelte-csf-v5"]},tl={..._.ThreeColumnsWithMediumColumnWidth,tags:["svelte-csf-v5"]},ol={..._.ThreeColumnsWithGridCellClassOverride,tags:["svelte-csf-v5"]};export{el as Default,sl as FullWidthColumns,dl as NarrowColumns,ol as ThreeColumnsWithGridCellClassOverride,tl as ThreeColumnsWithMediumColumnWidth,il as WideColumns,rl as __namedExportsOrder,A as default};
