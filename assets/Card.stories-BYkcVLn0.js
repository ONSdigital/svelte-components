import{ab as D,e as G,as as L,ae as o,a as d,ad as k,f as W,at as _,b as f,t as h,s as v}from"./iframe-BcdENC7h.js";import{c as x,w as y,i as B,d as I}from"./create-runtime-stories-COFYPYU4.js";import{l as $}from"./utils-VWytQRnm.js";import{C}from"./Card--h2Vpda0.js";import{G as P}from"./Grid-DMMRE_Xa.js";import"./preload-helper-Dp1pzeXC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./slot-BP_Qo1ZM.js";import"./attributes-BzKq5yPS.js";import"./class-C7BSudz7.js";import"./attributes-DayBpKoh.js";import"./GridCell-R6ibjTO7.js";import"./style-CI2VMp_K.js";import"./Container-B7rT0CwL.js";import"./Theme-D5q6hWpf.js";import"./html-lwdYkK5D.js";import"./svelte-head-Cfrs9Ucy.js";const S=`Display content and links as cards. Can be used in combination with the \`<Grid>\` component to combine multiple cards.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Grid, Card } from "@onsvisual/svelte-components";
<\/script>

<Grid>
  <Card title="Card one">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
  <Card title="Card two">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
  <Card title="Card three">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>
</Grid>
\`\`\`
`,m=(c,e=L)=>{P(c,{children:(n,g)=>{var r=M(),a=G(r);C(a,_({title:"Card one"},e,{children:(s,w)=>{var t=f();h(i=>v(t,i),[()=>$(1)]),d(s,t)},$$slots:{default:!0}}));var l=o(a,2);C(l,_({title:"Card two"},e,{children:(s,w)=>{var t=f();h(i=>v(t,i),[()=>$(1,1)]),d(s,t)},$$slots:{default:!0}}));var b=o(l,2);C(b,_({title:"Card three"},e,{children:(s,w)=>{var t=f();h(i=>v(t,i),[()=>$(1,2)]),d(s,t)},$$slots:{default:!0}})),d(n,r)},$$slots:{default:!0}})},E={title:"Layout/Card",component:C,tags:["autodocs"],argTypes:{},parameters:y(S)},{Story:p}=I();var M=W("<!> <!> <!>",1),O=W("<!> <!> <!> <!>",1);function F(c,e){D(e,!1),B();var n=O(),g=G(n);p(g,{name:"Default",args:{},get template(){return m},parameters:{__svelteCsf:{rawCode:`<Grid>
	<Card title="Card one" {...args}>{lipsum(1)}</Card>
	<Card title="Card two" {...args}>{lipsum(1, 1)}</Card>
	<Card title="Card three" {...args}>{lipsum(1, 2)}</Card>
</Grid>`}}});var r=o(g,2);p(r,{name:"Cards with links",args:{href:"#0"},get template(){return m},parameters:{__svelteCsf:{rawCode:`<Grid>
	<Card title="Card one" {...args}>{lipsum(1)}</Card>
	<Card title="Card two" {...args}>{lipsum(1, 1)}</Card>
	<Card title="Card three" {...args}>{lipsum(1, 2)}</Card>
</Grid>`}}});var a=o(r,2);p(a,{name:"Featured cards with baseline",args:{mode:"featured",baseline:!0},get template(){return m},parameters:{__svelteCsf:{rawCode:`<Grid>
	<Card title="Card one" {...args}>{lipsum(1)}</Card>
	<Card title="Card two" {...args}>{lipsum(1, 1)}</Card>
	<Card title="Card three" {...args}>{lipsum(1, 2)}</Card>
</Grid>`}}});var l=o(a,2);p(l,{name:"Featured cards with image",args:{mode:"featured",image:"https://service-manual.ons.gov.uk/img/small/placeholder-card.png"},get template(){return m},parameters:{__svelteCsf:{rawCode:`<Grid>
	<Card title="Card one" {...args}>{lipsum(1)}</Card>
	<Card title="Card two" {...args}>{lipsum(1, 1)}</Card>
	<Card title="Card three" {...args}>{lipsum(1, 2)}</Card>
</Grid>`}}}),d(c,n),k()}F.__docgen={data:[],name:"Card.stories.svelte"};const u=x(F,E),et=["Default","CardsWithLinks","FeaturedCardsWithBaseline","FeaturedCardsWithImage"],rt={...u.Default,tags:["svelte-csf-v5"]},at={...u.CardsWithLinks,tags:["svelte-csf-v5"]},st={...u.FeaturedCardsWithBaseline,tags:["svelte-csf-v5"]},it={...u.FeaturedCardsWithImage,tags:["svelte-csf-v5"]};export{at as CardsWithLinks,rt as Default,st as FeaturedCardsWithBaseline,it as FeaturedCardsWithImage,et as __namedExportsOrder,E as default};
