import{p as F,j as n,f as j,Z as H,k as o,e,h as L,_ as O,s as R,n as d,V as h,g as V,m as Z}from"./iframe-BeI6gv3V.js";import{w as z,c as A,i as B,d as G}from"./create-runtime-stories-DnOdY0ML.js";import{S as w,a as S}from"./ScrollerSection-DoS1UQZ4.js";import{C as J}from"./Container-Bo938lHN.js";import{E as g}from"./Em-tm6k1W0z.js";import"./slot-BP_Qo1ZM.js";import"./attributes-D_V09orS.js";import"./class-Dzh9Da8g.js";import"./attributes-Co-1QMVx.js";import"./style-CcY6orqc.js";import"./this-BQolPdgt.js";import"./Theme-DHWTzw6P.js";import"./svelte-head-BHKY608q.js";import"./html-DYkAzn1i.js";import"./utils-VWytQRnm.js";import"./_commonjsHelpers-CqkleIqs.js";const K=`Components for adding interactive scrollytelling sections to a feature article.

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
`,y={...z(K),layout:"fullscreen"};y.docs.story={inline:!1,iframeHeight:600};const N={title:"Layout/Scroller",component:w,tags:["autodocs"],argTypes:{},parameters:y},{Story:k}=G();var Q=n('<div slot="background"><!></div>'),U=n("<p>When this first caption is visible, the background will appear <!>.</p>"),X=n("<p>When this first caption is visible, the background will appear <!>.</p>"),Y=n("<p>When this first caption is visible, the background will appear <!>.</p>"),ee=n('<div slot="foreground"><!> <!> <!></div>'),re=n("<!> <!>",1);function E(D,W){F(W,!1);const m=(M,q=H)=>{w(M,O(q,{$$events:{change:l=>R(f,t[l.detail.index])},$$slots:{background:(l,I)=>{var i=Q(),u=d(i);J(u,{width:"full",height:"full",get background(){return V(f)}}),e(l,i)},foreground:(l,I)=>{var i=ee(),u=d(i);S(u,{children:(s,b)=>{var r=U(),a=o(d(r));g(a,{get color(){return t[0]},children:(c,C)=>{var p=h("light grey");e(c,p)},$$slots:{default:!0}}),e(s,r)},$$slots:{default:!0}});var $=o(u,2);S($,{children:(s,b)=>{var r=X(),a=o(d(r));g(a,{get color(){return t[1]},children:(c,C)=>{var p=h("dark grey");e(c,p)},$$slots:{default:!0}}),e(s,r)},$$slots:{default:!0}});var T=o($,2);S(T,{children:(s,b)=>{var r=Y(),a=o(d(r));g(a,{get color(){return t[2]},children:(c,C)=>{var p=h("black");e(c,p)},$$slots:{default:!0}}),e(s,r)},$$slots:{default:!0}}),e(l,i)}}}))},t=["#ddd","#777","#222"];let f=Z(t[0]);B();var v=re(),_=j(v);k(_,{name:"Default",args:{},get template(){return m},parameters:{__svelteCsf:{rawCode:`<Scroller {...args} on:change={(e) => (scrollerColor = scrollerColors[e.detail.index])}>
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
</Scroller>`}}}),e(D,v),L()}E.__docgen={data:[],name:"Scroller.stories.svelte"};const x=A(E,N),ve=["Default","SplitScreenMode"],_e={...x.Default,tags:["svelte-csf-v5"]},$e={...x.SplitScreenMode,tags:["svelte-csf-v5"]};export{_e as Default,$e as SplitScreenMode,ve as __namedExportsOrder,N as default};
