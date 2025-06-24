import{p as j,j as n,f as b,k as o,V as v,e as i,n as g,g as N,m as O,s as R,h as V}from"./iframe-CbtXQGpi.js";import{w as I,c as K,i as Q,d as X}from"./create-runtime-stories-C0J-SdQq.js";import{M as Z}from"./Main-VkzQYbS7.js";import{H as B}from"./Header-CBUIMAmq.js";import{H as ee}from"./Hero-BrVNFqK4.js";import{C as ie}from"./Container-CzvVM84S.js";import{H as te}from"./Highlight-DY58YUD5.js";import{S as $}from"./Section-0ipe927m.js";import{G as oe}from"./Grid-J5_aqMQ6.js";import{G as q}from"./GridCell-9VmnBLYO.js";import{B as ne}from"./Blockquote-CbJndWCa.js";import{E as _}from"./Em-DtKTP4yq.js";import{D as re}from"./Divider-DIbFLZD4.js";import{S as ae,a as x}from"./ScrollerSection-iazHUUdk.js";import{F as le}from"./Footer-ym41teHd.js";import"./slot-BP_Qo1ZM.js";import"./attributes-DtFI45NK.js";import"./each-DwLTWgD7.js";import"./class-Dzh9Da8g.js";import"./attributes-Co-1QMVx.js";import"./style-CcY6orqc.js";import"./event-modifiers-CWmzcjye.js";import"./Theme-D58XjzIJ.js";import"./svelte-head-CIbjcyE-.js";import"./html-BPrvTsL-.js";import"./SkipLink-CvYpeNWc.js";import"./DescriptionList-CNwXDNv_.js";import"./Button-DAOEkieK.js";import"./Icon-BaVyJOvi.js";import"./utils-DXjJT5W2.js";import"./_commonjsHelpers-CqkleIqs.js";import"./this-BKjj9g-C.js";const se=`A full page article template with compact header and footer, suitable for scrollytelling and other feature articles.

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
`,ue={title:"Templates/Feature article",component:B,tags:["autodocs"],argTypes:{},parameters:{...I(se),layout:"fullscreen",docs:{story:{inline:!1,iframeHeight:600}}}},{Story:ce}=X();var de=n("<p>This is a test paragraph.</p> <p>This is another test paragraph.</p>",1),pe=n(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <!> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,1),me=n('<div class="placeholder svelte-1e5bzpi"></div>'),he=n('<div class="placeholder svelte-1e5bzpi"></div>'),ve=n('<div class="placeholder svelte-1e5bzpi"></div>'),ge=n("<!> <!> <!>",1),fe=n(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`),be=n('<div slot="background"><!></div>'),$e=n("<p>When this first caption is visible, the background will appear <!>.</p>"),qe=n("<p>When this section caption is visible, the background will appear <!>.</p>"),_e=n("<p>When this third caption is visible, the background will appear <!>.</p>"),xe=n('<div slot="foreground"><!> <!> <!></div>'),Se=n(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`),ke=n("<!> <!> <!> <!> <!> <!> <!> <!>",1),Ce=n("<!> <!> <!>",1);function W(A,F){j(F,!1);const c=["#ddd","#777","#222"];let S=O(c[0]);Q(),ce(A,{name:"Default",args:{},asChild:!0,children:(M,Te)=>{var k=Ce(),C=b(k);B(C,{compact:!0});var E=o(C,2);Z(E,{children:(z,De)=>{var T=ke(),D=b(T);ee(D,{theme:"blue",title:"This is an article title",lede:"This is a short, introductory sentence",height:400,children:(e,s)=>{var t=v("1 January 2025");i(e,t)},$$slots:{default:!0}});var P=o(D,2);te(P,{height:400,marginBottom:!1,children:(e,s)=>{var t=de();i(e,t)},$$slots:{default:!0}});var w=o(P,2);$(w,{title:"Section title",marginTop:!0,children:(e,s)=>{var t=pe(),l=o(b(t),2);ne(l,{attribution:"A. Person",children:(u,f)=>{var a=v("This is a blockquote, white comprises of a large block of inset text.");i(u,a)},$$slots:{default:!0}}),i(e,t)},$$slots:{default:!0}});var y=o(w,2);oe(y,{colWidth:"medium",caption:"This is a caption text",children:(e,s)=>{var t=ge(),l=b(t);q(l,{children:(a,d)=>{var r=me();i(a,r)},$$slots:{default:!0}});var u=o(l,2);q(u,{children:(a,d)=>{var r=he();i(a,r)},$$slots:{default:!0}});var f=o(u,2);q(f,{children:(a,d)=>{var r=ve();i(a,r)},$$slots:{default:!0}}),i(e,t)},$$slots:{default:!0}});var H=o(y,2);re(H,{});var G=o(H,2);$(G,{title:"Another section title",children:(e,s)=>{var t=fe();i(e,t)},$$slots:{default:!0}});var L=o(G,2);ae(L,{id:"scroller",splitscreen:!0,$$events:{change:e=>{R(S,c[e.detail.index]),console.debug("change",e)},enter:e=>console.debug("enter",e),exit:e=>console.debug("exit",e)},$$slots:{background:(e,s)=>{var t=be(),l=g(t);ie(l,{width:"full",height:"full",get background(){return N(S)}}),i(e,t)},foreground:(e,s)=>{var t=xe(),l=g(t);x(l,{children:(a,d)=>{var r=$e(),p=o(g(r));_(p,{get color(){return c[0]},children:(m,U)=>{var h=v("light grey");i(m,h)},$$slots:{default:!0}}),i(a,r)},$$slots:{default:!0}});var u=o(l,2);x(u,{children:(a,d)=>{var r=qe(),p=o(g(r));_(p,{get color(){return c[1]},children:(m,U)=>{var h=v("dark grey");i(m,h)},$$slots:{default:!0}}),i(a,r)},$$slots:{default:!0}});var f=o(u,2);x(f,{children:(a,d)=>{var r=_e(),p=o(g(r));_(p,{get color(){return c[2]},children:(m,U)=>{var h=v("black");i(m,h)},$$slots:{default:!0}}),i(a,r)},$$slots:{default:!0}}),i(e,t)}}});var J=o(L,2);$(J,{title:"Yet another section title",children:(e,s)=>{var t=Se();i(e,t)},$$slots:{default:!0}}),i(z,T)},$$slots:{default:!0}});var Y=o(E,2);le(Y,{compact:!0}),i(M,k)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Header compact />
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
<Footer compact />`}}}),V()}W.__docgen={data:[],name:"FeatureArticle.stories.svelte"};const Ee=K(W,ue),li=["Default"],si={...Ee.Default,tags:["svelte-csf-v5"]};export{si as Default,li as __namedExportsOrder,ue as default};
