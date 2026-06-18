import{ab as I,e as b,ae as o,b as v,a as i,c as g,g as K,al as Q,ad as V,f as a,P as X}from"./iframe-XxUrRsle.js";import{c as Z,w as ee,i as ie,d as te}from"./create-runtime-stories-DykVR4X3.js";import{M as oe}from"./Main-BEl0Giqt.js";import{H as F}from"./Header-CNemBbHd.js";import{H as ne}from"./Hero-BJvVucX9.js";import{C as re}from"./Container-D-piczFi.js";import{H as ae}from"./Highlight-BvJZAEwS.js";import{S as $}from"./Section-CBCyu-zr.js";import{G as le}from"./Grid-D0iyeht8.js";import{G as q}from"./GridCell-Cfgd8Pmy.js";import{B as se}from"./Blockquote-tlunExAe.js";import{E as _}from"./Em-CZdbeUPC.js";import{D as ce}from"./Divider-DQq0Y2Gf.js";import{S as ue,a as x}from"./ScrollerSection-BxeRA2Im.js";import{F as de}from"./Footer-DNYkNPB6.js";import"./preload-helper-Dp1pzeXC.js";import"./slot-BP_Qo1ZM.js";import"./attributes-BatRrjGE.js";import"./each-C0InHxWc.js";import"./class-BG5bcV41.js";import"./attributes-DayBpKoh.js";import"./this-GdRgnfTn.js";import"./Theme-DGwaPrAi.js";import"./html-fhMkUu1s.js";import"./svelte-head-ClIlEtSV.js";import"./style-C0UaOv8D.js";import"./SkipLink-CIlS5jap.js";import"./DescriptionList-BB5YTqN6.js";import"./Button-eHDDWTyh.js";import"./Icon-Dsk8MIHf.js";import"./utils-VWytQRnm.js";import"./_commonjsHelpers-CqkleIqs.js";const pe=`A full page article template with compact header and footer, suitable for scrollytelling and other feature articles.

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
`,M={...ee(pe),layout:"fullscreen"};M.docs.story={inline:!1,iframeHeight:600};const me={title:"Templates/Feature article",component:F,tags:["autodocs"],argTypes:{},parameters:M},{Story:he}=te();var ve=a("<p>This is a test paragraph.</p> <p>This is another test paragraph.</p>",1),ge=a(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <!> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,1),S=a('<div class="placeholder svelte-1wdzexx"></div>'),W=a("<!> <!> <!>",1),A=a(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`),fe=a('<div slot="background"><!></div>'),be=a("<p>When this first caption is visible, the background will appear <!>.</p>"),$e=a("<p>When this section caption is visible, the background will appear <!>.</p>"),qe=a("<p>When this third caption is visible, the background will appear <!>.</p>"),_e=a('<div slot="foreground"><!> <!> <!></div>'),xe=a("<!> <!> <!> <!> <!> <!> <!> <!>",1);function Y(J,z){I(z,!1);const u=["#ddd","#777","#222"];let k=X(u[0]);ie(),he(J,{name:"Default",args:{},asChild:!0,children:(N,ke)=>{var C=W(),E=b(C);F(E,{compact:!0});var T=o(E,2);oe(T,{children:(R,Ce)=>{var P=xe(),w=b(P);ne(w,{theme:"blue",title:"This is an article title",lede:"This is a short, introductory sentence",height:400,children:(e,s)=>{var t=v("1 January 2025");i(e,t)},$$slots:{default:!0}});var D=o(w,2);ae(D,{height:400,marginBottom:!1,children:(e,s)=>{var t=ve();i(e,t)},$$slots:{default:!0}});var y=o(D,2);$(y,{title:"Section title",marginTop:!0,children:(e,s)=>{var t=ge(),l=o(b(t),2);se(l,{attribution:"A. Person",children:(c,f)=>{var r=v("This is a blockquote, white comprises of a large block of inset text.");i(c,r)},$$slots:{default:!0}}),i(e,t)},$$slots:{default:!0}});var H=o(y,2);le(H,{colWidth:"medium",caption:"This is a caption text",children:(e,s)=>{var t=W(),l=b(t);q(l,{children:(r,d)=>{var n=S();i(r,n)},$$slots:{default:!0}});var c=o(l,2);q(c,{children:(r,d)=>{var n=S();i(r,n)},$$slots:{default:!0}});var f=o(c,2);q(f,{children:(r,d)=>{var n=S();i(r,n)},$$slots:{default:!0}}),i(e,t)},$$slots:{default:!0}});var G=o(H,2);ce(G,{});var B=o(G,2);$(B,{title:"Another section title",children:(e,s)=>{var t=A();i(e,t)},$$slots:{default:!0}});var L=o(B,2);ue(L,{id:"scroller",splitscreen:!0,$$events:{change:e=>{Q(k,u[e.detail.index]),console.debug("change",e)},enter:e=>console.debug("enter",e),exit:e=>console.debug("exit",e)},$$slots:{background:(e,s)=>{var t=fe(),l=g(t);re(l,{width:"full",height:"full",get background(){return K(k)}}),i(e,t)},foreground:(e,s)=>{var t=_e(),l=g(t);x(l,{children:(r,d)=>{var n=be(),p=o(g(n));_(p,{get color(){return u[0]},children:(m,U)=>{var h=v("light grey");i(m,h)},$$slots:{default:!0}}),i(r,n)},$$slots:{default:!0}});var c=o(l,2);x(c,{children:(r,d)=>{var n=$e(),p=o(g(n));_(p,{get color(){return u[1]},children:(m,U)=>{var h=v("dark grey");i(m,h)},$$slots:{default:!0}}),i(r,n)},$$slots:{default:!0}});var f=o(c,2);x(f,{children:(r,d)=>{var n=qe(),p=o(g(n));_(p,{get color(){return u[2]},children:(m,U)=>{var h=v("black");i(m,h)},$$slots:{default:!0}}),i(r,n)},$$slots:{default:!0}}),i(e,t)}}});var j=o(L,2);$(j,{title:"Yet another section title",children:(e,s)=>{var t=A();i(e,t)},$$slots:{default:!0}}),i(R,P)},$$slots:{default:!0}});var O=o(T,2);de(O,{compact:!0}),i(N,C)},$$slots:{default:!0},parameters:{__svelteCsf:{rawCode:`<Header compact />
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
<Footer compact />`}}}),V()}Y.__docgen={data:[],name:"FeatureArticle.stories.svelte"};const Se=Z(Y,me),ni=["Default"],ri={...Se.Default,tags:["svelte-csf-v5"]};export{ri as Default,ni as __namedExportsOrder,me as default};
