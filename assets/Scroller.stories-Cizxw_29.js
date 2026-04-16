import{A as F,f as n,m as O,W as j,J as o,j as e,I as A,X as G,C as H,k as d,O as h,G as J,D as L}from"./iframe-Ba9ePtFQ.js";import{w as R,c as X,i as z,d as B}from"./create-runtime-stories-NZufGFTO.js";import{S as w,a as S}from"./ScrollerSection-B5FoMRDC.js";import{C as K}from"./Container-BBF3i5UX.js";import{E as g}from"./Em-DXPKj19V.js";import"./slot-BP_Qo1ZM.js";import"./attributes-_Th04X_A.js";import"./class-B9SFUanI.js";import"./attributes-q36Eg1F8.js";import"./style-CNURdi_Z.js";import"./this-B_FjcWBG.js";import"./Theme-DY_5rM9S.js";import"./svelte-head-BctXyWdE.js";import"./html-D7mn1yyx.js";import"./utils-VWytQRnm.js";import"./_commonjsHelpers-CqkleIqs.js";const N=`Components for adding interactive scrollytelling sections to a feature article.

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { Scroller, ScrollerSection, Container } from "@onsvisual/svelte-components";

  function updateScroller(e) {
    // Function to update scroller background components, using the following props:
    // 1. e.detail.id - the ID of the Scroller
    // 2. e.detail.index - the index of the current ScrollerSection
    // 3. e.detail.sectionId - the (optional) ID of the current ScrollerSection
  }
<\/script>

<Scroller on:change="{updateScroller}" id="{any_unique_id}">
  <div slot="background">
    <!--
      The <Container> component is optional here.
      It is a useful way to set the height and width of the background.
    -->
    <Container width="full" height="full">
      {background_components}
    </Container>
  </div>
  <div slot="foreground">
    <ScrollerSection id="{any_unique_id}">
      <p>First section caption.</p>
    </ScrollerSection>
    <ScrollerSection id="{any_unique_id}">
      <p>Second section caption.</p>
    </ScrollerSection>
    <ScrollerSection id="{any_unique_id}">
      <p>Third section caption.</p>
      </p>
    </ScrollerSection>
  </div>
</Scroller>
\`\`\`
`,y={...R(N),layout:"fullscreen"};y.docs.story={inline:!1,iframeHeight:600};const Q={title:"Layout/Scroller",component:w,tags:["autodocs"],argTypes:{},parameters:y},{Story:k}=B();var U=n('<div slot="background"><!></div>'),V=n("<p>When this first caption is visible, the background will appear <!>.</p>"),Y=n("<p>When this first caption is visible, the background will appear <!>.</p>"),Z=n("<p>When this first caption is visible, the background will appear <!>.</p>"),ee=n('<div slot="foreground"><!> <!> <!></div>'),re=n("<!> <!>",1);function E(D,W){F(W,!1);const m=(I,M=j)=>{w(I,G(M,{$$events:{change:l=>H(f,t[l.detail.index])},$$slots:{background:(l,q)=>{var i=U(),u=d(i);K(u,{width:"full",height:"full",get background(){return J(f)}}),e(l,i)},foreground:(l,q)=>{var i=ee(),u=d(i);S(u,{children:(s,b)=>{var r=V(),a=o(d(r));g(a,{get color(){return t[0]},children:(c,C)=>{var p=h("light grey");e(c,p)},$$slots:{default:!0}}),e(s,r)},$$slots:{default:!0}});var $=o(u,2);S($,{children:(s,b)=>{var r=Y(),a=o(d(r));g(a,{get color(){return t[1]},children:(c,C)=>{var p=h("dark grey");e(c,p)},$$slots:{default:!0}}),e(s,r)},$$slots:{default:!0}});var T=o($,2);S(T,{children:(s,b)=>{var r=Z(),a=o(d(r));g(a,{get color(){return t[2]},children:(c,C)=>{var p=h("black");e(c,p)},$$slots:{default:!0}}),e(s,r)},$$slots:{default:!0}}),e(l,i)}}}))},t=["#ddd","#777","#222"];let f=L(t[0]);z();var v=re(),_=O(v);k(_,{name:"Default",args:{},get template(){return m},parameters:{__svelteCsf:{rawCode:`<Scroller {...args} on:change={(e) => (scrollerColor = scrollerColors[e.detail.index])}>
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
</Scroller>`}}});var P=o(_,2);k(P,{name:"Split-screen mode",args:{splitscreen:!0},get template(){return m},parameters:{__svelteCsf:{rawCode:`<Scroller {...args} on:change={(e) => (scrollerColor = scrollerColors[e.detail.index])}>
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
</Scroller>`}}}),e(D,v),A()}E.__docgen={data:[],name:"Scroller.stories.svelte"};const x=X(E,Q),ve=["Default","SplitScreenMode"],_e={...x.Default,tags:["svelte-csf-v5"]},$e={...x.SplitScreenMode,tags:["svelte-csf-v5"]};export{_e as Default,$e as SplitScreenMode,ve as __namedExportsOrder,Q as default};
