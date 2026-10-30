import{ab as F,e as z,ag as H,ah as o,a as r,ad as L,f as g,ax as O,ar as R,c,b as p,g as j,P as A}from"./iframe-DwMLuGxz.js";import{c as B,w as G,i as J,d as K}from"./create-runtime-stories-CVh0mbf1.js";import{S as y,a as d}from"./ScrollerSection-CKQvROGb.js";import{C as N}from"./Container-B_Q2q-8y.js";import{E as u}from"./Em-n9TkMBqW.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-2IKc6IRp.js";import"./class-BbJvXEFO.js";import"./attributes-DayBpKoh.js";import"./style-BhKhrtHX.js";import"./this-Dk0ZMTRe.js";import"./window-BQsvB4lF.js";import"./slot-BP_Qo1ZM.js";import"./Theme-Cyy9OYAS.js";import"./html-CPoz4ccc.js";import"./svelte-head-BWRd0uFg.js";import"./utils-VWytQRnm.js";import"./_commonjsHelpers-CqkleIqs.js";const Q=`Components for adding interactive scrollytelling sections to a feature article.

Svelte 5 uses \`background\` and \`foreground\` snippets in place of named slots. \`onChange\`, \`onEnter\`, and \`onExit\` receive \`{ id, index, sectionId }\`; the retained \`on:change\`, \`on:enter\`, and \`on:exit\` events expose the same payload through \`event.detail\`. Existing output bindings remain available. Shared scroll/resize listeners are removed after the last Scroller unmounts.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Scroller, ScrollerSection, Container } from "@onsvisual/svelte-components";

  function updateScroller(detail) {
    // Function to update scroller background components, using the following props:
    // 1. detail.id - the ID of the Scroller
    // 2. detail.index - the index of the current ScrollerSection
    // 3. detail.sectionId - the (optional) ID of the current ScrollerSection
  }
<\/script>

<Scroller onChange={updateScroller} id="{any_unique_id}">
  {#snippet background()}
    <!--
      The <Container> component is optional here.
      It is a useful way to set the height and width of the background.
    -->
    <Container width="full" height="full">
      {background_components}
    </Container>
  {/snippet}
  {#snippet foreground()}
    <ScrollerSection id="{any_unique_id}">
      <p>First section caption.</p>
    </ScrollerSection>
    <ScrollerSection id="{any_unique_id}">
      <p>Second section caption.</p>
    </ScrollerSection>
    <ScrollerSection id="{any_unique_id}">
      <p>Third section caption.</p>
    </ScrollerSection>
  {/snippet}
</Scroller>
\`\`\`
`,E={...G(Q),layout:"fullscreen"};E.docs.story={inline:!1,iframeHeight:600};const U={title:"Layout/Scroller",component:y,tags:["autodocs"],argTypes:{},parameters:E},{Story:w}=K();var h=g("<p>When this first caption is visible, the background will appear <!>.</p>"),V=g("<div><!> <!> <!></div>"),X=g("<!> <!>",1);function x(P,W){F(W,!1);const S=(M,q=H)=>{y(M,O(q,{onChange:t=>R(m,n[t.index??0]),background:t=>{N(t,{width:"full",height:"full",get background(){return j(m)}})},foreground:t=>{var _=V(),b=c(_);d(b,{children:(l,$)=>{var e=h(),i=o(c(e));u(i,{get color(){return n[0]},children:(s,k)=>{var a=p("light grey");r(s,a)},$$slots:{default:!0}}),r(l,e)},$$slots:{default:!0}});var C=o(b,2);d(C,{children:(l,$)=>{var e=h(),i=o(c(e));u(i,{get color(){return n[1]},children:(s,k)=>{var a=p("dark grey");r(s,a)},$$slots:{default:!0}}),r(l,e)},$$slots:{default:!0}});var T=o(C,2);d(T,{children:(l,$)=>{var e=h(),i=o(c(e));u(i,{get color(){return n[2]},children:(s,k)=>{var a=p("black");r(s,a)},$$slots:{default:!0}}),r(l,e)},$$slots:{default:!0}}),r(t,_)},$$slots:{background:!0,foreground:!0}}))},n=["#ddd","#777","#222"];let m=A(n[0]);J();var f=X(),v=z(f);w(v,{name:"Default",args:{},get template(){return S},parameters:{__svelteCsf:{rawCode:`<Scroller {...args} onChange={(detail) => (scrollerColor = scrollerColors[detail.index ?? 0])}>
	{#snippet background()}
		<Container width="full" height="full" background={scrollerColor} />
	{/snippet}
	{#snippet foreground()}
		<div>
			<ScrollerSection>
				<p>
					When this first caption is visible, the background will appear <Em
						color={scrollerColors[0]}>light grey</Em
					>.
				</p>
			</ScrollerSection>
			<ScrollerSection>
				<p>
					When this first caption is visible, the background will appear <Em
						color={scrollerColors[1]}>dark grey</Em
					>.
				</p>
			</ScrollerSection>
			<ScrollerSection>
				<p>
					When this first caption is visible, the background will appear <Em
						color={scrollerColors[2]}>black</Em
					>.
				</p>
			</ScrollerSection>
		</div>
	{/snippet}
</Scroller>`}}});var I=o(v,2);w(I,{name:"Split-screen mode",args:{splitscreen:!0},get template(){return S},parameters:{__svelteCsf:{rawCode:`<Scroller {...args} onChange={(detail) => (scrollerColor = scrollerColors[detail.index ?? 0])}>
	{#snippet background()}
		<Container width="full" height="full" background={scrollerColor} />
	{/snippet}
	{#snippet foreground()}
		<div>
			<ScrollerSection>
				<p>
					When this first caption is visible, the background will appear <Em
						color={scrollerColors[0]}>light grey</Em
					>.
				</p>
			</ScrollerSection>
			<ScrollerSection>
				<p>
					When this first caption is visible, the background will appear <Em
						color={scrollerColors[1]}>dark grey</Em
					>.
				</p>
			</ScrollerSection>
			<ScrollerSection>
				<p>
					When this first caption is visible, the background will appear <Em
						color={scrollerColors[2]}>black</Em
					>.
				</p>
			</ScrollerSection>
		</div>
	{/snippet}
</Scroller>`}}}),r(P,f),L()}x.__docgen={data:[],name:"Scroller.stories.svelte"};const D=B(x,U),ve=["Default","SplitScreenMode"],_e={...D.Default,tags:["svelte-csf-v5"]},be={...D.SplitScreenMode,tags:["svelte-csf-v5"]};export{_e as Default,be as SplitScreenMode,ve as __namedExportsOrder,U as default};
