import{ab as x,e as $,ae as n,c as _,a as t,ad as S,f as o}from"./iframe-DS7K2bus.js";import{c as T,w as y,i as E,d as D}from"./create-runtime-stories-D4BT_F5C.js";import{E as c}from"./Embed-UWwGLhBP.js";import{H as w}from"./Highlight-Cb3C0_1X.js";import{S as r}from"./Section-ICT_-3tD.js";import{G as L}from"./Grid-COXRxl2S.js";import{S as U}from"./Select-Ckjq1bOa.js";import{s as G}from"./style-DizILqx2.js";import"./preload-helper-Dp1pzeXC.js";import"./slot-BP_Qo1ZM.js";import"./_commonjsHelpers-CqkleIqs.js";import"./class-CmqaDgb3.js";import"./attributes-DayBpKoh.js";import"./Container-Dg5kqeIu.js";import"./attributes-FIFwlWhJ.js";import"./Theme-x47Jxd2-.js";import"./html-Bqe_5ymW.js";import"./svelte-head-NU2wozIh.js";import"./utils-VWytQRnm.js";import"./actions-DibZMMCO.js";import"./Dropdown-B22KxuGI.js";import"./each-DokVoPR8.js";import"./Input-D6bTXAp-.js";import"./input--p9m4V7M.js";const H=`A full page article template with compact header and footer, suitable for scrollytelling and other feature articles.

(Note: The scroller in this example will not preview correctly in the iframe on this page. You can select the example from the menu instead.)

<!-- prettier-ignore -->
\`\`\`html
<!-- +page.svelte -->
<script>
  import "@onsvisual/svelte-components/css/main.css"; // This is more typically imported in the global +layout.svelte
  import { Embed, Highlight, Select, Section, Grid } from "@onsvisual/svelte-components";
<\/script>

<Embed>
  <Highlight bigText={false} marginBottom={false}>
    <div style:padding="0 12px">
      <h2>This is a sub-headline</h2>
      <p>This is a description of the embedded interactive.</p>
      <Select label="Select your area" />
    </div>
  </Highlight>

  <Section title="Section title" marginTop={true}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat..
    </p>
    <p>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.
    </p>
  </Section>

  <Grid width="medium" caption="This is a caption text">
    <div class="grid-cell"></div>
  </Grid>

  <Section title="Another section title">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
  </Section>

  <Section title="Yet another section title">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </Section>
</Embed>
\`\`\`
`,P={title:"Templates/Embedded article",component:c,tags:["autodocs"],argTypes:{},parameters:{...y(H),layout:"fullscreen"}},{Story:A}=D();var C=o("<div><h2>This is a sub-headline</h2> <p>This is a description of the embedded interactive.</p> <!></div>"),Y=o(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat..</p> <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.</p>`,1),B=o('<div class="grid-cell svelte-238w87"></div>'),M=o(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>`),N=o(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat.</p>`),O=o("<!> <!> <!> <!> <!>",1);function p(h,v){x(v,!1),E(),A(h,{name:"Default",args:{},asChild:!0,children:(g,j)=>{c(g,{children:(f,k)=>{var s=O(),l=$(s);w(l,{bigText:!1,marginBottom:!1,children:(i,a)=>{var e=C();G(e,"",{},{padding:"0 12px"});var q=n(_(e),4);U(q,{label:"Select your area"}),t(i,e)},$$slots:{default:!0}});var u=n(l,2);r(u,{title:"Section title",marginTop:!0,children:(i,a)=>{var e=Y();t(i,e)},$$slots:{default:!0}});var d=n(u,2);L(d,{width:"medium",caption:"This is a caption text",children:(i,a)=>{var e=B();t(i,e)},$$slots:{default:!0}});var m=n(d,2);r(m,{title:"Another section title",children:(i,a)=>{var e=M();t(i,e)},$$slots:{default:!0}});var b=n(m,2);r(b,{title:"Yet another section title",children:(i,a)=>{var e=N();t(i,e)},$$slots:{default:!0}}),t(f,s)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Embed>
	<Highlight bigText={false} marginBottom={false}>
		<div style:padding="0 12px">
			<h2>This is a sub-headline</h2>
			<p>This is a description of the embedded interactive.</p>
			<Select label="Select your area" />
		</div>
	</Highlight>

	<Section title="Section title" marginTop={true}>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat..
		</p>
		<p>
			Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
			pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
			mollit anim id est laborum.
		</p>
	</Section>

	<Grid width="medium" caption="This is a caption text">
		<div class="grid-cell"></div>
	</Grid>

	<Section title="Another section title">
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur.
		</p>
	</Section>

	<Section title="Yet another section title">
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat.
		</p>
	</Section>
</Embed>`}}}),S()}p.__docgen={data:[],name:"EmbedArticle.stories.svelte"};const R=T(p,P),he=["Default"],ve={...R.Default,tags:["svelte-csf-v5"]};export{ve as Default,he as __namedExportsOrder,P as default};
