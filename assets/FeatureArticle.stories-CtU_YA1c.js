import{ad as K,h as f,ah as i,d as b,a as t,ar as Q,g as V,c as $,af as X,f as r,R as Z}from"./iframe-CpnTW6Aq.js";import{c as ee,w as te,i as ie,d as oe}from"./create-runtime-stories-C7cZUBmE.js";import{M as ne}from"./Main-DqP1Vz0n.js";import{H as M}from"./Header-FQyzlnv1.js";import{H as re}from"./Hero-DyzT7Uz0.js";import{C as ae}from"./Container-DX8kexNK.js";import{H as le}from"./Highlight-qPGcDlib.js";import{S as q}from"./Section-BP4IEh7g.js";import{G as se}from"./Grid-BYJ9S2Cu.js";import{G as _}from"./GridCell-BKqWe59T.js";import{B as ce}from"./Blockquote-UOTK-Y3I.js";import{E as x}from"./Em-CnORQlUu.js";import{D as ue}from"./Divider-BZZ97zlD.js";import{S as de,a as S}from"./ScrollerSection-DZn6XBg2.js";import{F as pe}from"./Footer-BN0CEOCk.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DMUiWW_Z.js";import"./each-fvhRyThL.js";import"./class-B_F942N2.js";import"./attributes-DayBpKoh.js";import"./this-VMJU2kKR.js";import"./Theme-C5W1PJ9k.js";import"./html-BFPf_PCX.js";import"./svelte-head-Dh_GIgDE.js";import"./style-BD_XJmem.js";import"./SkipLink-CibVfeIQ.js";import"./DescriptionList-CzXQVwiz.js";import"./Button-BNfwLY_Q.js";import"./Icon-BJpJB_lw.js";import"./utils-VWytQRnm.js";import"./_commonjsHelpers-CqkleIqs.js";import"./window-C3QggaTQ.js";const me=`A full page article template with compact header and footer, suitable for scrollytelling and other feature articles.

Note: The scroller in this example will not preview correctly in the iframe on this page. You can select the example from the menu instead.

<!-- prettier-ignore -->
\`\`\`html
<!-- +page.svelte -->
<script>
  import "@onsvisual/svelte-components/css/main.css"; // This is more typically imported in the global +layout.svelte
  import {
    Header,
    Hero,
    Highlight,
    Section,
    Grid,
    Divider,
    Main,
    Blockquote,
    Em,
    Scroller,
    ScrollerSection,
    Footer,
  } from "@onsvisual/svelte-components";

  const scrollerColors = ["#ddd", "#777", "#222"];
  let scrollerColor = scrollerColors[0];
<\/script>

<Header compact />
<Main>
<Hero
  title="This is an article title"
  lede="This is a short, introductory sentence"
  date="2023-07-04"
>
  <!-- <Checkbox label="Enable animation" variant="ghost" checked={animation} noBorder/> -->
</Hero>

<Highlight marginBottom="{false}">
  <p>This is a test paragraph.</p>
  <p>This is another test paragraph.</p>
</Highlight>

<Section title="Section title" marginTop="{true}">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <Blockquote attribution="A. Person">
    This is a blockquote, white comprises of a large block of inset text.
  </Blockquote>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</Section>

<Grid colwidth="medium" caption="This is a caption text">
  <div class="grid-cell"></div>
  <div class="grid-cell"></div>
  <div class="grid-cell"></div>
</Grid>

<Divider />

<Section title="Another section title">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</Section>

<Scroller
  id="scroller"
  splitscreen
  on:change="{(e) => (scrollerColor = scrollerColors[e.detail.index])}"
>
  <div slot="background">
    <Grid width="full" height="full">
      <div class="placeholder-block" style:background-color="{scrollerColor}"></div>
    </Grid>
  </div>
  <div slot="foreground">
    <ScrollerSection>
      <p>
        When this first caption is visible, the background will appear
        <Em color="{scrollerColors[0]}">light grey</Em>.
      </p>
    </ScrollerSection>
    <ScrollerSection>
      <p>
        When this second caption is visible, the background will appear
        <Em color="{scrollerColors[1]}">dark grey</Em>.
      </p>
    </ScrollerSection>
    <ScrollerSection>
      <p>
        When this third caption is visible, the background will appear
        <Em color="{scrollerColors[2]}">black</Em>.
      </p>
    </ScrollerSection>
  </div>
</Scroller>

<Section title="Yet another section title">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</Section>
</Main>
<Footer compact />
\`\`\`
`,Y={...te(me),layout:"fullscreen"};Y.docs.story={inline:!1,iframeHeight:600};const he={title:"Templates/Feature article",component:M,tags:["autodocs"],argTypes:{},parameters:Y},{Story:ge}=oe();var ve=r("<p>This is a test paragraph.</p> <p>This is another test paragraph.</p>",1),fe=r(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <!> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,1),k=r('<div class="placeholder svelte-1wdzexx"></div>'),C=r("<!> <!> <!>",1),F=r(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`),be=r("<p>When this first caption is visible, the background will appear <!>.</p>"),$e=r("<p>When this section caption is visible, the background will appear <!>.</p>"),qe=r("<p>When this third caption is visible, the background will appear <!>.</p>"),_e=r("<!> <!> <!> <!> <!> <!> <!> <!>",1);function J(R,z){K(z,!1);const p=["#ddd","#777","#222"];let E=Z(p[0]);ie(),ge(R,{name:"Default",args:{},asChild:!0,children:(N,Se)=>{var T=C(),w=f(T);M(w,{compact:!0});var D=i(w,2);ne(D,{children:(j,ke)=>{var y=_e(),P=f(y);re(P,{theme:"blue",title:"This is an article title",lede:"This is a short, introductory sentence",height:400,children:(o,d)=>{var e=b("1 January 2025");t(o,e)},$$slots:{default:!0}});var H=i(P,2);le(H,{height:400,marginBottom:!1,children:(o,d)=>{var e=ve();t(o,e)},$$slots:{default:!0}});var G=i(H,2);q(G,{title:"Section title",marginTop:!0,children:(o,d)=>{var e=fe(),c=i(f(e),2);ce(c,{attribution:"A. Person",children:(u,m)=>{var n=b("This is a blockquote, white comprises of a large block of inset text.");t(u,n)},$$slots:{default:!0}}),t(o,e)},$$slots:{default:!0}});var B=i(G,2);se(B,{colWidth:"medium",caption:"This is a caption text",children:(o,d)=>{var e=C(),c=f(e);_(c,{children:(n,a)=>{var l=k();t(n,l)},$$slots:{default:!0}});var u=i(c,2);_(u,{children:(n,a)=>{var l=k();t(n,l)},$$slots:{default:!0}});var m=i(u,2);_(m,{children:(n,a)=>{var l=k();t(n,l)},$$slots:{default:!0}}),t(o,e)},$$slots:{default:!0}});var L=i(B,2);ue(L,{});var U=i(L,2);q(U,{title:"Another section title",children:(o,d)=>{var e=F();t(o,e)},$$slots:{default:!0}});var W=i(U,2);de(W,{id:"scroller",splitscreen:!0,$$events:{change:e=>{Q(E,p[e.detail.index]),console.debug("change",e)},enter:e=>console.debug("enter",e),exit:e=>console.debug("exit",e)},background:e=>{ae(e,{width:"full",height:"full",get background(){return V(E)}})},foreground:e=>{var c=C(),u=f(c);S(u,{children:(a,l)=>{var s=be(),h=i($(s));x(h,{get color(){return p[0]},children:(g,A)=>{var v=b("light grey");t(g,v)},$$slots:{default:!0}}),t(a,s)},$$slots:{default:!0}});var m=i(u,2);S(m,{children:(a,l)=>{var s=$e(),h=i($(s));x(h,{get color(){return p[1]},children:(g,A)=>{var v=b("dark grey");t(g,v)},$$slots:{default:!0}}),t(a,s)},$$slots:{default:!0}});var n=i(m,2);S(n,{children:(a,l)=>{var s=qe(),h=i($(s));x(h,{get color(){return p[2]},children:(g,A)=>{var v=b("black");t(g,v)},$$slots:{default:!0}}),t(a,s)},$$slots:{default:!0}}),t(e,c)},$$slots:{background:!0,foreground:!0}});var I=i(W,2);q(I,{title:"Yet another section title",children:(o,d)=>{var e=F();t(o,e)},$$slots:{default:!0}}),t(j,y)},$$slots:{default:!0}});var O=i(D,2);pe(O,{compact:!0}),t(N,T)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Header compact />
<Main>
	<Hero
		theme="blue"
		title="This is an article title"
		lede="This is a short, introductory sentence"
		height={400}
	>
		1 January 2025
	</Hero>

	<Highlight height={400} marginBottom={false}>
		<p>This is a test paragraph.</p>
		<p>This is another test paragraph.</p>
	</Highlight>

	<Section title="Section title" marginTop={true}>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
		<Blockquote attribution="A. Person"
			>This is a blockquote, white comprises of a large block of inset text.</Blockquote
		>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</Section>

	<Grid colWidth="medium" caption="This is a caption text">
		<GridCell><div class="placeholder"></div></GridCell>
		<GridCell><div class="placeholder"></div></GridCell>
		<GridCell><div class="placeholder"></div></GridCell>
	</Grid>

	<Divider />

	<Section title="Another section title">
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</Section>

	<Scroller
		id="scroller"
		splitscreen
		on:change={(e) => {
			scrollerColor = scrollerColors[e.detail.index];
			console.debug("change", e);
		}}
		on:enter={(e) => console.debug("enter", e)}
		on:exit={(e) => console.debug("exit", e)}
	>
		{#snippet background()}
			<Container width="full" height="full" background={scrollerColor} />
		{/snippet}
		{#snippet foreground()}
			<ScrollerSection>
				<p>
					When this first caption is visible, the background will appear <Em
						color={scrollerColors[0]}>light grey</Em
					>.
				</p>
			</ScrollerSection>
			<ScrollerSection>
				<p>
					When this section caption is visible, the background will appear <Em
						color={scrollerColors[1]}>dark grey</Em
					>.
				</p>
			</ScrollerSection>
			<ScrollerSection>
				<p>
					When this third caption is visible, the background will appear <Em
						color={scrollerColors[2]}>black</Em
					>.
				</p>
			</ScrollerSection>
		{/snippet}
	</Scroller>

	<Section title="Yet another section title">
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
	</Section>
</Main>
<Footer compact />`}}}),X()}J.__docgen={data:[],name:"FeatureArticle.stories.svelte"};const xe=ee(J,he),ot=["Default"],nt={...xe.Default,tags:["svelte-csf-v5"]};export{nt as Default,ot as __namedExportsOrder,he as default};
