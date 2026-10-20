import{ab as D,e as G,as as L,ae as o,a as d,ad as k,f as W,at as _,b as f,t as h,s as v}from"./iframe-BieOkgaL.js";import{c as x,w as y,i as B,d as I}from"./create-runtime-stories-CYy4gM-U.js";import{l as $}from"./utils-VWytQRnm.js";import{C}from"./Card-CRRrjwRp.js";import{G as P}from"./Grid-D5LAf-iO.js";import"./preload-helper-Dp1pzeXC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./slot-BP_Qo1ZM.js";import"./attributes-C9k8Ok3D.js";import"./class-B3LrzTQO.js";import"./attributes-DayBpKoh.js";import"./GridCell-DPy4CkAo.js";import"./style-BeKZa6WD.js";import"./Container-D9pErKfu.js";import"./Theme-UTlT14F4.js";import"./html-BH-9ukWk.js";import"./svelte-head-CVlHd2UQ.js";const S=`Display content and links as cards. Can be used in combination with the \`<Grid>\` component to combine multiple cards.\r
\r
<!-- prettier-ignore -->\r
\`\`\`html\r
<script>\r
  import { Grid, Card } from "@onsvisual/svelte-components";\r
<\/script>\r
\r
<Grid>\r
  <Card title="Card one">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>\r
  <Card title="Card two">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>\r
  <Card title="Card three">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>\r
</Grid>\r
\`\`\`\r
`,m=(c,t=L)=>{P(c,{children:(n,g)=>{var e=M(),a=G(e);C(a,_({title:"Card one"},t,{children:(s,w)=>{var r=f();h(i=>v(r,i),[()=>$(1)]),d(s,r)},$$slots:{default:!0}}));var l=o(a,2);C(l,_({title:"Card two"},t,{children:(s,w)=>{var r=f();h(i=>v(r,i),[()=>$(1,1)]),d(s,r)},$$slots:{default:!0}}));var b=o(l,2);C(b,_({title:"Card three"},t,{children:(s,w)=>{var r=f();h(i=>v(r,i),[()=>$(1,2)]),d(s,r)},$$slots:{default:!0}})),d(n,e)},$$slots:{default:!0}})},E={title:"Layout/Card",component:C,tags:["autodocs"],argTypes:{},parameters:y(S)},{Story:p}=I();var M=W("<!> <!> <!>",1),O=W("<!> <!> <!> <!>",1);function F(c,t){D(t,!1),B();var n=O(),g=G(n);p(g,{name:"Default",args:{},get template(){return m},parameters:{__svelteCsf:{rawCode:`<Grid>\r
	<Card title="Card one" {...args}>{lipsum(1)}</Card>\r
	<Card title="Card two" {...args}>{lipsum(1, 1)}</Card>\r
	<Card title="Card three" {...args}>{lipsum(1, 2)}</Card>\r
</Grid>`}}});var e=o(g,2);p(e,{name:"Cards with links",args:{href:"#0"},get template(){return m},parameters:{__svelteCsf:{rawCode:`<Grid>\r
	<Card title="Card one" {...args}>{lipsum(1)}</Card>\r
	<Card title="Card two" {...args}>{lipsum(1, 1)}</Card>\r
	<Card title="Card three" {...args}>{lipsum(1, 2)}</Card>\r
</Grid>`}}});var a=o(e,2);p(a,{name:"Featured cards with baseline",args:{mode:"featured",baseline:!0},get template(){return m},parameters:{__svelteCsf:{rawCode:`<Grid>\r
	<Card title="Card one" {...args}>{lipsum(1)}</Card>\r
	<Card title="Card two" {...args}>{lipsum(1, 1)}</Card>\r
	<Card title="Card three" {...args}>{lipsum(1, 2)}</Card>\r
</Grid>`}}});var l=o(a,2);p(l,{name:"Featured cards with image",args:{mode:"featured",image:"https://service-manual.ons.gov.uk/img/small/placeholder-card.png"},get template(){return m},parameters:{__svelteCsf:{rawCode:`<Grid>\r
	<Card title="Card one" {...args}>{lipsum(1)}</Card>\r
	<Card title="Card two" {...args}>{lipsum(1, 1)}</Card>\r
	<Card title="Card three" {...args}>{lipsum(1, 2)}</Card>\r
</Grid>`}}}),d(c,n),k()}F.__docgen={data:[],name:"Card.stories.svelte"};const u=x(F,E),tr=["Default","CardsWithLinks","FeaturedCardsWithBaseline","FeaturedCardsWithImage"],er={...u.Default,tags:["svelte-csf-v5"]},ar={...u.CardsWithLinks,tags:["svelte-csf-v5"]},sr={...u.FeaturedCardsWithBaseline,tags:["svelte-csf-v5"]},ir={...u.FeaturedCardsWithImage,tags:["svelte-csf-v5"]};export{ar as CardsWithLinks,er as Default,sr as FeaturedCardsWithBaseline,ir as FeaturedCardsWithImage,tr as __namedExportsOrder,E as default};
