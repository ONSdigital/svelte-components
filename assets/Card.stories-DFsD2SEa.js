import{p as L,j as W,f as F,Z as x,k as o,e as d,h as b,_ as g,V as f,t as h,o as v,q as $}from"./iframe-BD7JyiWe.js";import{w as y,c as B,i as I,d as P}from"./create-runtime-stories-CfzMKkzB.js";import{l as w}from"./utils-VWytQRnm.js";import{C}from"./Card-DrQkSa0k.js";import{G as q}from"./Grid-D0QUk8Ky.js";import"./_commonjsHelpers-CqkleIqs.js";import"./slot-BP_Qo1ZM.js";import"./attributes-CAz9ePsK.js";import"./class-Dzh9Da8g.js";import"./attributes-Co-1QMVx.js";import"./GridCell-xqT3vB7u.js";import"./style-CcY6orqc.js";import"./Container-VqnNepjz.js";import"./Theme-DxkjnEFV.js";import"./svelte-head-KhQ-w5ip.js";import"./html-CzEqZFLu.js";const S=`Display content and links as cards. Can be used in combination with the \`<Grid>\` component to combine multiple cards.\r
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
`,m=(c,t=x)=>{q(c,{children:(n,_)=>{var e=E(),a=F(e);C(a,g({title:"Card one"},t,{children:(s,G)=>{var r=f();h(i=>$(r,i),[()=>w(1)],v),d(s,r)},$$slots:{default:!0}}));var l=o(a,2);C(l,g({title:"Card two"},t,{children:(s,G)=>{var r=f();h(i=>$(r,i),[()=>w(1,1)],v),d(s,r)},$$slots:{default:!0}}));var D=o(l,2);C(D,g({title:"Card three"},t,{children:(s,G)=>{var r=f();h(i=>$(r,i),[()=>w(1,2)],v),d(s,r)},$$slots:{default:!0}})),d(n,e)},$$slots:{default:!0}})},j={title:"Layout/Card",component:C,tags:["autodocs"],argTypes:{},parameters:y(S)},{Story:p}=P();var E=W("<!> <!> <!>",1),M=W("<!> <!> <!> <!>",1);function k(c,t){L(t,!1),I();var n=M(),_=F(n);p(_,{name:"Default",args:{},get template(){return m},parameters:{__svelteCsf:{rawCode:`<Grid>\r
	<Card title="Card one" {...args}>{lipsum(1)}</Card>\r
	<Card title="Card two" {...args}>{lipsum(1, 1)}</Card>\r
	<Card title="Card three" {...args}>{lipsum(1, 2)}</Card>\r
</Grid>`}}});var e=o(_,2);p(e,{name:"Cards with links",args:{href:"#0"},get template(){return m},parameters:{__svelteCsf:{rawCode:`<Grid>\r
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
</Grid>`}}}),d(c,n),b()}k.__docgen={data:[],name:"Card.stories.svelte"};const u=B(k,j),tr=["Default","CardsWithLinks","FeaturedCardsWithBaseline","FeaturedCardsWithImage"],er={...u.Default,tags:["svelte-csf-v5"]},ar={...u.CardsWithLinks,tags:["svelte-csf-v5"]},sr={...u.FeaturedCardsWithBaseline,tags:["svelte-csf-v5"]},ir={...u.FeaturedCardsWithImage,tags:["svelte-csf-v5"]};export{ar as CardsWithLinks,er as Default,sr as FeaturedCardsWithBaseline,ir as FeaturedCardsWithImage,tr as __namedExportsOrder,j as default};
