import{A as w,f as d,m as _,V as W,J as i,j as r,I as D,W as y}from"./iframe-IP6ocM0a.js";import{w as b,c as F,i as N,d as P}from"./create-runtime-stories-BvMOJ_th.js";import{G as f}from"./Grid-BRGALh1p.js";import{G as n}from"./GridCell-BtdR5CDV.js";import"./slot-BP_Qo1ZM.js";import"./class-B9SFUanI.js";import"./attributes-q36Eg1F8.js";import"./Container-BqyVwPrk.js";import"./attributes-CBM4GyKF.js";import"./style-CNURdi_Z.js";import"./Theme-CTze4v6y.js";import"./svelte-head-B4DT0o_2.js";import"./html-BOHkjiZz.js";const S=`A media grid component, useful for images and small multiple charts. Setting \`colwidth\` to **full** allows for a single cell/image/chart with an optional caption.

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
`,c=(m,C=W)=>{f(m,y(C,{children:(o,g)=>{var s=J(),t=_(s);n(t,{children:(l,p)=>{var e=A();r(l,e)},$$slots:{default:!0}});var a=i(t,2);n(a,{children:(l,p)=>{var e=j();r(l,e)},$$slots:{default:!0}});var u=i(a,2);n(u,{children:(l,p)=>{var e=E();r(l,e)},$$slots:{default:!0}});var $=i(u,2);n($,{children:(l,p)=>{var e=I();r(l,e)},$$slots:{default:!0}}),r(o,s)},$$slots:{default:!0}}))},x={title:"Layout/Grid",component:f,tags:["autodocs"],argTypes:{width:{control:{type:"select"}},colWidth:{control:{type:"select"}},gridGap:{control:{type:"select"}}},parameters:b(S)},{Story:v}=P();var A=d('<div class="grid-cell svelte-1gbd9n">Grid cell one</div>'),j=d('<div class="grid-cell svelte-1gbd9n">Grid cell two</div>'),E=d('<div class="grid-cell svelte-1gbd9n">Grid cell three</div>'),I=d('<div class="grid-cell svelte-1gbd9n">Grid cell four</div>'),J=d("<!> <!> <!> <!>",1),L=d("<!> <!> <!> <!>",1);function h(m,C){w(C,!1),N();var o=L(),g=_(o);v(g,{name:"Default",args:{},get template(){return c},parameters:{__svelteCsf:{rawCode:`<Grid {...args}>
	<GridCell><div class="grid-cell">Grid cell one</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell two</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell three</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell four</div></GridCell>
</Grid>`}}});var s=i(g,2);v(s,{name:"Wide columns",args:{colWidth:"wide"},get template(){return c},parameters:{__svelteCsf:{rawCode:`<Grid {...args}>
	<GridCell><div class="grid-cell">Grid cell one</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell two</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell three</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell four</div></GridCell>
</Grid>`}}});var t=i(s,2);v(t,{name:"Narrow columns",args:{colWidth:"narrow"},get template(){return c},parameters:{__svelteCsf:{rawCode:`<Grid {...args}>
	<GridCell><div class="grid-cell">Grid cell one</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell two</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell three</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell four</div></GridCell>
</Grid>`}}});var a=i(t,2);v(a,{name:"Full width columns",args:{colWidth:"full"},get template(){return c},parameters:{__svelteCsf:{rawCode:`<Grid {...args}>
	<GridCell><div class="grid-cell">Grid cell one</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell two</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell three</div></GridCell>
	<GridCell><div class="grid-cell">Grid cell four</div></GridCell>
</Grid>`}}}),r(m,o),D()}h.__docgen={data:[],name:"Grid.stories.svelte"};const G=F(h,x),X=["Default","WideColumns","NarrowColumns","FullWidthColumns"],Y={...G.Default,tags:["svelte-csf-v5"]},Z={...G.WideColumns,tags:["svelte-csf-v5"]},ll={...G.NarrowColumns,tags:["svelte-csf-v5"]},el={...G.FullWidthColumns,tags:["svelte-csf-v5"]};export{Y as Default,el as FullWidthColumns,ll as NarrowColumns,Z as WideColumns,X as __namedExportsOrder,x as default};
