import{ab as D,e as g,as as y,ae as i,a as r,ad as F,f as G,at as M}from"./iframe-sScITiDD.js";import{c as N,w as O,i as S,d as b}from"./create-runtime-stories-zBo7-1R2.js";import{G as h}from"./Grid-BfZbM4t2.js";import{G as t}from"./GridCell-a5bNieEB.js";import"./preload-helper-Dp1pzeXC.js";import"./slot-BP_Qo1ZM.js";import"./class-DEomZZNA.js";import"./attributes-DayBpKoh.js";import"./Container-DvDCBbBm.js";import"./attributes-BvtExsIM.js";import"./style-rPNM_RJR.js";import"./Theme-QVREDFdx.js";import"./html-Cd1V8gGP.js";import"./svelte-head-CRwkrD2p.js";const x=`A media grid component, useful for images and small multiple charts. Setting \`colwidth\` to **full** allows for a single cell/image/chart with an optional caption.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Grid, GridCell } from "@onsvisual/svelte-components";
<\/script>

<Grid>
  <GridCell>{grid_cell_content}</GridCell>
  <GridCell>{grid_cell_content}</GridCell>
  <GridCell>{grid_cell_content}</GridCell>
</Grid>
\`\`\`
`,p=(c,v=y)=>{h(c,M(v,{children:(C,o)=>{var d=j(),s=g(d);t(s,{children:(l,$)=>{var m=f();r(l,m)},$$slots:{default:!0}});var a=i(s,2);t(a,{children:(l,$)=>{var m=w();r(l,m)},$$slots:{default:!0}});var e=i(a,2);t(e,{children:(l,$)=>{var m=W();r(l,m)},$$slots:{default:!0}});var n=i(e,2);t(n,{children:(l,$)=>{var m=R();r(l,m)},$$slots:{default:!0}}),r(C,d)},$$slots:{default:!0}}))},A=c=>{h(c,{colWidth:"medium",children:(v,C)=>{var o=P(),d=g(o);t(d,{children:(e,n)=>{var l=f();r(e,l)},$$slots:{default:!0}});var s=i(d,2);t(s,{children:(e,n)=>{var l=w();r(e,l)},$$slots:{default:!0}});var a=i(s,2);t(a,{children:(e,n)=>{var l=W();r(e,l)},$$slots:{default:!0}}),r(v,o)},$$slots:{default:!0}})},E=c=>{h(c,{children:(v,C)=>{var o=P(),d=g(o);t(d,{cls:"ons-col-4@m",children:(e,n)=>{var l=f();r(e,l)},$$slots:{default:!0}});var s=i(d,2);t(s,{cls:"ons-col-4@m",children:(e,n)=>{var l=w();r(e,l)},$$slots:{default:!0}});var a=i(s,2);t(a,{cls:"ons-col-4@m",children:(e,n)=>{var l=W();r(e,l)},$$slots:{default:!0}}),r(v,o)},$$slots:{default:!0}})},L={title:"Layout/Grid",component:h,tags:["autodocs"],argTypes:{width:{control:{type:"select"}},colWidth:{control:{type:"select"}},gridGap:{control:{type:"select"}}},parameters:O(x)},{Story:u}=b();var f=G('<div class="grid-cell svelte-sg8wla">Grid cell one</div>'),w=G('<div class="grid-cell svelte-sg8wla">Grid cell two</div>'),W=G('<div class="grid-cell svelte-sg8wla">Grid cell three</div>'),R=G('<div class="grid-cell svelte-sg8wla">Grid cell four</div>'),j=G("<!> <!> <!> <!>",1),P=G("<!> <!> <!>",1),k=G("<!> <!> <!> <!> <!> <!>",1);function T(c,v){D(v,!1),S();var C=k(),o=g(C);u(o,{name:"Default",args:{},get template(){return p},parameters:{__svelteCsf:{rawCode:`<Grid {...args}>
	<GridCell><div class="grid-cell">Grid cell one</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell two</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell three</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell four</div></GridCell>
</Grid>`}}});var d=i(o,2);u(d,{name:"Wide columns",args:{colWidth:"wide"},get template(){return p},parameters:{__svelteCsf:{rawCode:`<Grid {...args}>
	<GridCell><div class="grid-cell">Grid cell one</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell two</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell three</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell four</div></GridCell>
</Grid>`}}});var s=i(d,2);u(s,{name:"Narrow columns",args:{colWidth:"narrow"},get template(){return p},parameters:{__svelteCsf:{rawCode:`<Grid {...args}>
	<GridCell><div class="grid-cell">Grid cell one</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell two</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell three</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell four</div></GridCell>
</Grid>`}}});var a=i(s,2);u(a,{name:"Full width columns",args:{colWidth:"full"},get template(){return p},parameters:{__svelteCsf:{rawCode:`<Grid {...args}>
	<GridCell><div class="grid-cell">Grid cell one</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell two</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell three</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell four</div></GridCell>
</Grid>`}}});var e=i(a,2);u(e,{name:"Three columns with medium column width",args:{},get template(){return A},parameters:{__svelteCsf:{rawCode:`<Grid colWidth="medium">
	<GridCell><div class="grid-cell">Grid cell one</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell two</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell three</div></GridCell>
</Grid>`}}});var n=i(e,2);u(n,{name:"Three columns with GridCell class override",args:{},get template(){return E},parameters:{__svelteCsf:{rawCode:`<Grid>
	<GridCell cls="ons-col-4@m"><div class="grid-cell">Grid cell one</div></GridCell>
	<GridCell cls="ons-col-4@m"><div class="grid-cell">Grid cell two</div></GridCell>
	<GridCell cls="ons-col-4@m"><div class="grid-cell">Grid cell three</div></GridCell>
</Grid>`}}}),r(c,C),F()}T.__docgen={data:[],name:"Grid.stories.svelte"};const _=N(T,L),el=["Default","WideColumns","NarrowColumns","FullWidthColumns","ThreeColumnsWithMediumColumnWidth","ThreeColumnsWithGridCellClassOverride"],rl={..._.Default,tags:["svelte-csf-v5"]},il={..._.WideColumns,tags:["svelte-csf-v5"]},dl={..._.NarrowColumns,tags:["svelte-csf-v5"]},sl={..._.FullWidthColumns,tags:["svelte-csf-v5"]},tl={..._.ThreeColumnsWithMediumColumnWidth,tags:["svelte-csf-v5"]},ol={..._.ThreeColumnsWithGridCellClassOverride,tags:["svelte-csf-v5"]};export{rl as Default,sl as FullWidthColumns,dl as NarrowColumns,ol as ThreeColumnsWithGridCellClassOverride,tl as ThreeColumnsWithMediumColumnWidth,il as WideColumns,el as __namedExportsOrder,L as default};
