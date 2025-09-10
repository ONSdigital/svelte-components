import{p as T,j as n,f as F,Z as j,k as o,e,h as H,_ as L,s as N,n as d,V as h,g as O,m as R}from"./iframe-BBKbJiwj.js";import{w as V,c as Y,i as Z,d as z}from"./create-runtime-stories-CdKDuXev.js";import{S as w,a as S}from"./ScrollerSection-WsMvKOLy.js";import{C as A}from"./Container-C9weMWSu.js";import{E as g}from"./Em-Brf7fg1Y.js";import"./slot-BP_Qo1ZM.js";import"./attributes-CZbBqtWD.js";import"./class-Dzh9Da8g.js";import"./attributes-Co-1QMVx.js";import"./style-CcY6orqc.js";import"./this-CPT0qiVX.js";import"./Theme-CVhqRH0I.js";import"./svelte-head-KGQe0riG.js";import"./html-DZ21cXe5.js";import"./utils-B8WOfuUY.js";import"./_commonjsHelpers-CqkleIqs.js";const B=`Components for adding scrollytelling sections to a feature article.

Note: These examples will not preview correctly in the iframes on this page. You can select the examples from the menu instead.

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
`,G={title:"Layout/Scroller",component:w,tags:["autodocs"],argTypes:{},parameters:{...V(B),layout:"fullscreen",docs:{story:{inline:!1,iframeHeight:600}}}},{Story:k}=z();var J=n('<div slot="background"><!></div>'),K=n("<p>When this first caption is visible, the background will appear <!>.</p>"),Q=n("<p>When this first caption is visible, the background will appear <!>.</p>"),U=n("<p>When this first caption is visible, the background will appear <!>.</p>"),X=n('<div slot="foreground"><!> <!> <!></div>'),ee=n("<!> <!>",1);function y(x,D){T(D,!1);const m=(P,M=j)=>{w(P,L(M,{$$events:{change:l=>N(f,t[l.detail.index])},$$slots:{background:(l,q)=>{var i=J(),u=d(i);A(u,{width:"full",height:"full",get background(){return O(f)}}),e(l,i)},foreground:(l,q)=>{var i=X(),u=d(i);S(u,{children:(s,b)=>{var r=K(),a=o(d(r));g(a,{get color(){return t[0]},children:(c,C)=>{var p=h("light grey");e(c,p)},$$slots:{default:!0}}),e(s,r)},$$slots:{default:!0}});var $=o(u,2);S($,{children:(s,b)=>{var r=Q(),a=o(d(r));g(a,{get color(){return t[1]},children:(c,C)=>{var p=h("dark grey");e(c,p)},$$slots:{default:!0}}),e(s,r)},$$slots:{default:!0}});var I=o($,2);S(I,{children:(s,b)=>{var r=U(),a=o(d(r));g(a,{get color(){return t[2]},children:(c,C)=>{var p=h("black");e(c,p)},$$slots:{default:!0}}),e(s,r)},$$slots:{default:!0}}),e(l,i)}}}))},t=["#ddd","#777","#222"];let f=R(t[0]);Z();var v=ee(),_=F(v);k(_,{name:"Default",args:{},get template(){return m},parameters:{__svelteCsf:{rawCode:`<Scroller {...args} on:change={(e) => (scrollerColor = scrollerColors[e.detail.index])}>
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
</Scroller>`}}});var W=o(_,2);k(W,{name:"Split-screen mode",args:{splitscreen:!0},get template(){return m},parameters:{__svelteCsf:{rawCode:`<Scroller {...args} on:change={(e) => (scrollerColor = scrollerColors[e.detail.index])}>
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
</Scroller>`}}}),e(x,v),H()}y.__docgen={data:[],name:"Scroller.stories.svelte"};const E=Y(y,G),fe=["Default","SplitScreenMode"],ve={...E.Default,tags:["svelte-csf-v5"]},_e={...E.SplitScreenMode,tags:["svelte-csf-v5"]};export{ve as Default,_e as SplitScreenMode,fe as __namedExportsOrder,G as default};
