import{ab as W,e as _,as as D,ae as i,a as r,ad as y,f as t,at as F}from"./iframe-Cm8Z88bU.js";import{c as N,w as P,i as S,d as b}from"./create-runtime-stories-B6v954qL.js";import{G as f}from"./Grid-DS2Y7155.js";import{G as n}from"./GridCell-Be-aBtMw.js";import"./preload-helper-Dp1pzeXC.js";import"./slot-BP_Qo1ZM.js";import"./class-Dwepb_fl.js";import"./attributes-DayBpKoh.js";import"./Container-CiVLyJpm.js";import"./attributes-CVnBJKWV.js";import"./style-DfLPGW0J.js";import"./Theme-DC97RGld.js";import"./html-pXY4jdiE.js";import"./svelte-head-B28nhOyr.js";const x=`A media grid component, useful for images and small multiple charts. Setting \`colwidth\` to **full** allows for a single cell/image/chart with an optional caption.

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
`,c=(m,C=D)=>{f(m,F(C,{children:(o,p)=>{var d=h(),s=_(d);n(s,{children:(l,g)=>{var e=E();r(l,e)},$$slots:{default:!0}});var a=i(s,2);n(a,{children:(l,g)=>{var e=L();r(l,e)},$$slots:{default:!0}});var u=i(a,2);n(u,{children:(l,g)=>{var e=M();r(l,e)},$$slots:{default:!0}});var $=i(u,2);n($,{children:(l,g)=>{var e=O();r(l,e)},$$slots:{default:!0}}),r(o,d)},$$slots:{default:!0}}))},A={title:"Layout/Grid",component:f,tags:["autodocs"],argTypes:{width:{control:{type:"select"}},colWidth:{control:{type:"select"}},gridGap:{control:{type:"select"}}},parameters:P(x)},{Story:v}=b();var E=t('<div class="grid-cell svelte-sg8wla">Grid cell one</div>'),L=t('<div class="grid-cell svelte-sg8wla">Grid cell two</div>'),M=t('<div class="grid-cell svelte-sg8wla">Grid cell three</div>'),O=t('<div class="grid-cell svelte-sg8wla">Grid cell four</div>'),h=t("<!> <!> <!> <!>",1);function w(m,C){W(C,!1),S();var o=h(),p=_(o);v(p,{name:"Default",args:{},get template(){return c},parameters:{__svelteCsf:{rawCode:`<Grid {...args}>
	<GridCell><div class="grid-cell">Grid cell one</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell two</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell three</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell four</div></GridCell>
</Grid>`}}});var d=i(p,2);v(d,{name:"Wide columns",args:{colWidth:"wide"},get template(){return c},parameters:{__svelteCsf:{rawCode:`<Grid {...args}>
	<GridCell><div class="grid-cell">Grid cell one</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell two</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell three</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell four</div></GridCell>
</Grid>`}}});var s=i(d,2);v(s,{name:"Narrow columns",args:{colWidth:"narrow"},get template(){return c},parameters:{__svelteCsf:{rawCode:`<Grid {...args}>
	<GridCell><div class="grid-cell">Grid cell one</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell two</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell three</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell four</div></GridCell>
</Grid>`}}});var a=i(s,2);v(a,{name:"Full width columns",args:{colWidth:"full"},get template(){return c},parameters:{__svelteCsf:{rawCode:`<Grid {...args}>
	<GridCell><div class="grid-cell">Grid cell one</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell two</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell three</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell four</div></GridCell>
</Grid>`}}}),r(m,o),y()}w.__docgen={data:[],name:"Grid.stories.svelte"};const G=N(w,A),X=["Default","WideColumns","NarrowColumns","FullWidthColumns"],Y={...G.Default,tags:["svelte-csf-v5"]},Z={...G.WideColumns,tags:["svelte-csf-v5"]},ll={...G.NarrowColumns,tags:["svelte-csf-v5"]},el={...G.FullWidthColumns,tags:["svelte-csf-v5"]};export{Y as Default,el as FullWidthColumns,ll as NarrowColumns,Z as WideColumns,X as __namedExportsOrder,A as default};
