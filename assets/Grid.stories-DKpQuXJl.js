import{p as w,j as d,f as _,Z as W,k as i,e,h as D,_ as y}from"./iframe-Bu7RPEYL.js";import{w as b,c as F,i as N,d as P}from"./create-runtime-stories-tJrnYzbx.js";import{G as f}from"./Grid-BwQTYTSF.js";import{G as n}from"./GridCell-BzVKVjO4.js";import"./slot-BP_Qo1ZM.js";import"./class-Dzh9Da8g.js";import"./attributes-Co-1QMVx.js";import"./Container-5uYbgtz1.js";import"./attributes-BMngCuBp.js";import"./style-CcY6orqc.js";import"./Theme-CducFuyO.js";import"./svelte-head-ItTMlsj-.js";import"./html-Cng3CFI_.js";const S=`A media grid component, useful for images and small multiple charts. Setting \`colwidth\` to **full** allows for a single cell/image/chart with an optional caption.\r
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
`,c=(m,C=W)=>{f(m,y(C,{children:(o,p)=>{var s=L(),t=_(s);n(t,{children:(l,g)=>{var r=j();e(l,r)},$$slots:{default:!0}});var a=i(t,2);n(a,{children:(l,g)=>{var r=k();e(l,r)},$$slots:{default:!0}});var u=i(a,2);n(u,{children:(l,g)=>{var r=A();e(l,r)},$$slots:{default:!0}});var $=i(u,2);n($,{children:(l,g)=>{var r=E();e(l,r)},$$slots:{default:!0}}),e(o,s)},$$slots:{default:!0}}))},x={title:"Layout/Grid",component:f,tags:["autodocs"],argTypes:{width:{control:{type:"select"}},colWidth:{control:{type:"select"}},gridGap:{control:{type:"select"}}},parameters:b(S)},{Story:v}=P();var j=d('<div class="grid-cell svelte-1gbd9n">Grid cell one</div>'),k=d('<div class="grid-cell svelte-1gbd9n">Grid cell two</div>'),A=d('<div class="grid-cell svelte-1gbd9n">Grid cell three</div>'),E=d('<div class="grid-cell svelte-1gbd9n">Grid cell four</div>'),L=d("<!> <!> <!> <!>",1),M=d("<!> <!> <!> <!>",1);function h(m,C){w(C,!1),N();var o=M(),p=_(o);v(p,{name:"Default",args:{},get template(){return c},parameters:{__svelteCsf:{rawCode:`<Grid {...args}>\r
	<GridCell><div class="grid-cell">Grid cell one</div></GridCell>\r
	<GridCell><div class="grid-cell">Grid cell two</div></GridCell>\r
	<GridCell><div class="grid-cell">Grid cell three</div></GridCell>\r
	<GridCell><div class="grid-cell">Grid cell four</div></GridCell>\r
</Grid>`}}});var s=i(p,2);v(s,{name:"Wide columns",args:{colWidth:"wide"},get template(){return c},parameters:{__svelteCsf:{rawCode:`<Grid {...args}>\r
	<GridCell><div class="grid-cell">Grid cell one</div></GridCell>\r
	<GridCell><div class="grid-cell">Grid cell two</div></GridCell>\r
	<GridCell><div class="grid-cell">Grid cell three</div></GridCell>\r
	<GridCell><div class="grid-cell">Grid cell four</div></GridCell>\r
</Grid>`}}});var t=i(s,2);v(t,{name:"Narrow columns",args:{colWidth:"narrow"},get template(){return c},parameters:{__svelteCsf:{rawCode:`<Grid {...args}>\r
	<GridCell><div class="grid-cell">Grid cell one</div></GridCell>\r
	<GridCell><div class="grid-cell">Grid cell two</div></GridCell>\r
	<GridCell><div class="grid-cell">Grid cell three</div></GridCell>\r
	<GridCell><div class="grid-cell">Grid cell four</div></GridCell>\r
</Grid>`}}});var a=i(t,2);v(a,{name:"Full width columns",args:{colWidth:"full"},get template(){return c},parameters:{__svelteCsf:{rawCode:`<Grid {...args}>\r
	<GridCell><div class="grid-cell">Grid cell one</div></GridCell>\r
	<GridCell><div class="grid-cell">Grid cell two</div></GridCell>\r
	<GridCell><div class="grid-cell">Grid cell three</div></GridCell>\r
	<GridCell><div class="grid-cell">Grid cell four</div></GridCell>\r
</Grid>`}}}),e(m,o),D()}h.__docgen={data:[],name:"Grid.stories.svelte"};const G=F(h,x),V=["Default","WideColumns","NarrowColumns","FullWidthColumns"],X={...G.Default,tags:["svelte-csf-v5"]},Y={...G.WideColumns,tags:["svelte-csf-v5"]},ll={...G.NarrowColumns,tags:["svelte-csf-v5"]},rl={...G.FullWidthColumns,tags:["svelte-csf-v5"]};export{X as Default,rl as FullWidthColumns,ll as NarrowColumns,Y as WideColumns,V as __namedExportsOrder,x as default};
