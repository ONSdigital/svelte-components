import{p as x,j as o,f as _,k as n,n as $,e as t,h as S}from"./iframe-BMlGGSEh.js";import{w as T,c as y,i as E,d as D}from"./create-runtime-stories-DY8P5Zzy.js";import{s as w}from"./style-CcY6orqc.js";import{E as c}from"./Embed-CqXCaAna.js";import{H as L}from"./Highlight-DS0qdrNc.js";import{S as r}from"./Section-BhXfcRmz.js";import{G as U}from"./Grid-BqAa8ZNq.js";import{S as G}from"./Select-7AW4kYdV.js";import"./attributes-Co-1QMVx.js";import"./slot-BP_Qo1ZM.js";import"./_commonjsHelpers-CqkleIqs.js";import"./class-Dzh9Da8g.js";import"./Container-D8GaV-Ar.js";import"./attributes-In2loFLY.js";import"./Theme-CQg0Djfs.js";import"./svelte-head-Bckk2Lft.js";import"./html-vr7QzKP9.js";import"./utils-VWytQRnm.js";import"./actions-BgYLb0wk.js";import"./Dropdown-Bv1VEJqa.js";import"./each-x1Fw04Zn.js";import"./Input-CqBMbtmj.js";import"./input-BaJHy1em.js";const H=`A full page article template with compact header and footer, suitable for scrollytelling and other feature articles.

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
`,P={title:"Templates/Embedded article",component:c,tags:["autodocs"],argTypes:{},parameters:{...T(H),layout:"fullscreen"}},{Story:A}=D();var C=o("<div><h2>This is a sub-headline</h2> <p>This is a description of the embedded interactive.</p> <!></div>"),Y=o(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat..</p> <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.</p>`,1),B=o('<div class="grid-cell svelte-1yc884b"></div>'),j=o(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>`),k=o(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat.</p>`),M=o("<!> <!> <!> <!> <!>",1);function p(h,v){x(v,!1),E(),A(h,{name:"Default",args:{},asChild:!0,children:(g,O)=>{c(g,{children:(f,R)=>{var s=M(),l=_(s);L(l,{bigText:!1,marginBottom:!1,children:(i,a)=>{var e=C();w(e,"",{},{padding:"0 12px"});var q=n($(e),4);G(q,{label:"Select your area"}),t(i,e)},$$slots:{default:!0}});var u=n(l,2);r(u,{title:"Section title",marginTop:!0,children:(i,a)=>{var e=Y();t(i,e)},$$slots:{default:!0}});var d=n(u,2);U(d,{width:"medium",caption:"This is a caption text",children:(i,a)=>{var e=B();t(i,e)},$$slots:{default:!0}});var m=n(d,2);r(m,{title:"Another section title",children:(i,a)=>{var e=j();t(i,e)},$$slots:{default:!0}});var b=n(m,2);r(b,{title:"Yet another section title",children:(i,a)=>{var e=k();t(i,e)},$$slots:{default:!0}}),t(f,s)},$$slots:{default:!0}})},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Embed>
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
</Embed>`}}}),S()}p.__docgen={data:[],name:"EmbedArticle.stories.svelte"};const N=y(p,P),pe=["Default"],he={...N.Default,tags:["svelte-csf-v5"]};export{he as Default,pe as __namedExportsOrder,P as default};
