import{p as N,j as n,f as b,k as o,V as v,e as i,n as g,g as O,m as R,s as V,h as I}from"./iframe-CwnOGufI.js";import{w as K,c as Q,i as X,d as Z}from"./create-runtime-stories-CLr9y0ZE.js";import{M as ee}from"./Main-D60FsOUn.js";import{H as B}from"./Header-4XAPXrUN.js";import{H as ie}from"./Hero-BKwH1atd.js";import{C as te}from"./Container-C7J1i8p-.js";import{H as oe}from"./Highlight-DF6ywzFX.js";import{S as $}from"./Section-BuamttgW.js";import{G as ne}from"./Grid-CeuyLfyj.js";import{G as q}from"./GridCell-BVaC6hAz.js";import{B as re}from"./Blockquote-V4Gv_Azb.js";import{E as _}from"./Em-NqmiNrIZ.js";import{D as ae}from"./Divider-BUaNTS2m.js";import{S as le,a as x}from"./ScrollerSection-B-hE5CF8.js";import{F as se}from"./Footer-BJUyKeEx.js";import"./slot-BP_Qo1ZM.js";import"./attributes-Bmkkxx_O.js";import"./each-CudjTySy.js";import"./class-Dzh9Da8g.js";import"./attributes-Co-1QMVx.js";import"./style-CcY6orqc.js";import"./event-modifiers-CWmzcjye.js";import"./Theme-eXB4zOrt.js";import"./svelte-head-B3M1AazK.js";import"./html-rJElv6Xv.js";import"./SkipLink-CdiXDaex.js";import"./DescriptionList-CiF6giWB.js";import"./Button-DZ6j7YFS.js";import"./Icon-tphy_rn2.js";import"./utils-VWytQRnm.js";import"./_commonjsHelpers-CqkleIqs.js";import"./this-DBfByQAL.js";const ue=`A full page article template with compact header and footer, suitable for scrollytelling and other feature articles.

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
`,W={...K(ue),layout:"fullscreen"};W.docs.story={inline:!1,iframeHeight:600};const ce={title:"Templates/Feature article",component:B,tags:["autodocs"],argTypes:{},parameters:W},{Story:de}=Z();var pe=n("<p>This is a test paragraph.</p> <p>This is another test paragraph.</p>",1),me=n(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <!> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,1),he=n('<div class="placeholder svelte-1e5bzpi"></div>'),ve=n('<div class="placeholder svelte-1e5bzpi"></div>'),ge=n('<div class="placeholder svelte-1e5bzpi"></div>'),fe=n("<!> <!> <!>",1),be=n(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`),$e=n('<div slot="background"><!></div>'),qe=n("<p>When this first caption is visible, the background will appear <!>.</p>"),_e=n("<p>When this section caption is visible, the background will appear <!>.</p>"),xe=n("<p>When this third caption is visible, the background will appear <!>.</p>"),Se=n('<div slot="foreground"><!> <!> <!></div>'),ke=n(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`),Ce=n("<!> <!> <!> <!> <!> <!> <!> <!>",1),Ee=n("<!> <!> <!>",1);function A(F,M){N(M,!1);const c=["#ddd","#777","#222"];let S=R(c[0]);X(),de(F,{name:"Default",args:{},asChild:!0,children:(Y,De)=>{var k=Ee(),C=b(k);B(C,{compact:!0});var E=o(C,2);ee(E,{children:(J,Pe)=>{var T=Ce(),D=b(T);ie(D,{theme:"blue",title:"This is an article title",lede:"This is a short, introductory sentence",height:400,children:(e,s)=>{var t=v("1 January 2025");i(e,t)},$$slots:{default:!0}});var P=o(D,2);oe(P,{height:400,marginBottom:!1,children:(e,s)=>{var t=pe();i(e,t)},$$slots:{default:!0}});var w=o(P,2);$(w,{title:"Section title",marginTop:!0,children:(e,s)=>{var t=me(),l=o(b(t),2);re(l,{attribution:"A. Person",children:(u,f)=>{var a=v("This is a blockquote, white comprises of a large block of inset text.");i(u,a)},$$slots:{default:!0}}),i(e,t)},$$slots:{default:!0}});var y=o(w,2);ne(y,{colWidth:"medium",caption:"This is a caption text",children:(e,s)=>{var t=fe(),l=b(t);q(l,{children:(a,d)=>{var r=he();i(a,r)},$$slots:{default:!0}});var u=o(l,2);q(u,{children:(a,d)=>{var r=ve();i(a,r)},$$slots:{default:!0}});var f=o(u,2);q(f,{children:(a,d)=>{var r=ge();i(a,r)},$$slots:{default:!0}}),i(e,t)},$$slots:{default:!0}});var H=o(y,2);ae(H,{});var G=o(H,2);$(G,{title:"Another section title",children:(e,s)=>{var t=be();i(e,t)},$$slots:{default:!0}});var L=o(G,2);le(L,{id:"scroller",splitscreen:!0,$$events:{change:e=>{V(S,c[e.detail.index]),console.debug("change",e)},enter:e=>console.debug("enter",e),exit:e=>console.debug("exit",e)},$$slots:{background:(e,s)=>{var t=$e(),l=g(t);te(l,{width:"full",height:"full",get background(){return O(S)}}),i(e,t)},foreground:(e,s)=>{var t=Se(),l=g(t);x(l,{children:(a,d)=>{var r=qe(),p=o(g(r));_(p,{get color(){return c[0]},children:(m,U)=>{var h=v("light grey");i(m,h)},$$slots:{default:!0}}),i(a,r)},$$slots:{default:!0}});var u=o(l,2);x(u,{children:(a,d)=>{var r=_e(),p=o(g(r));_(p,{get color(){return c[1]},children:(m,U)=>{var h=v("dark grey");i(m,h)},$$slots:{default:!0}}),i(a,r)},$$slots:{default:!0}});var f=o(u,2);x(f,{children:(a,d)=>{var r=xe(),p=o(g(r));_(p,{get color(){return c[2]},children:(m,U)=>{var h=v("black");i(m,h)},$$slots:{default:!0}}),i(a,r)},$$slots:{default:!0}}),i(e,t)}}});var j=o(L,2);$(j,{title:"Yet another section title",children:(e,s)=>{var t=ke();i(e,t)},$$slots:{default:!0}}),i(J,T)},$$slots:{default:!0}});var z=o(E,2);se(z,{compact:!0}),i(Y,k)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Header compact />
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
		<div slot="background">
			<Container width="full" height="full" background={scrollerColor} />
		</div>
		<div slot="foreground">
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
		</div>
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
<Footer compact />`}}}),I()}A.__docgen={data:[],name:"FeatureArticle.stories.svelte"};const Te=Q(A,ce),si=["Default"],ui={...Te.Default,tags:["svelte-csf-v5"]};export{ui as Default,si as __namedExportsOrder,ce as default};
