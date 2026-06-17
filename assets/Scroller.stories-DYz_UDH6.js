import{ab as H,e as L,as as O,ae as o,a as e,ad as R,f as u,at as j,c as d,b as S,g as z,al as A,P as B}from"./iframe-CwzZm-HX.js";import{c as G,w as J,i as K,d as N}from"./create-runtime-stories-DdjfTBf5.js";import{S as y,a as h}from"./ScrollerSection-w4PCmBGs.js";import{C as Q}from"./Container-D5QxzAOQ.js";import{E as g}from"./Em-k_BpYwOr.js";import"./preload-helper-Dp1pzeXC.js";import"./slot-BP_Qo1ZM.js";import"./attributes-BRwL7M1-.js";import"./class-hYlXPFSz.js";import"./attributes-DayBpKoh.js";import"./style-CHcH3G0X.js";import"./this-BW5PMg4Q.js";import"./Theme-B5uvAhRC.js";import"./html-Dt5wzgB9.js";import"./svelte-head-D1T7T6hy.js";import"./utils-VWytQRnm.js";import"./_commonjsHelpers-CqkleIqs.js";const U=`Components for adding interactive scrollytelling sections to a feature article.

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
`,E={...J(U),layout:"fullscreen"};E.docs.story={inline:!1,iframeHeight:600};const V={title:"Layout/Scroller",component:y,tags:["autodocs"],argTypes:{},parameters:E},{Story:w}=N();var X=u('<div slot="background"><!></div>'),m=u("<p>When this first caption is visible, the background will appear <!>.</p>"),Y=u('<div slot="foreground"><!> <!> <!></div>'),Z=u("<!> <!>",1);function x(P,W){H(W,!1);const f=(q,I=O)=>{y(q,j(I,{$$events:{change:t=>A(v,n[t.detail.index])},$$slots:{background:(t,T)=>{var l=X(),p=d(l);Q(p,{width:"full",height:"full",get background(){return z(v)}}),e(t,l)},foreground:(t,T)=>{var l=Y(),p=d(l);h(p,{children:(i,C)=>{var r=m(),s=o(d(r));g(s,{get color(){return n[0]},children:(a,k)=>{var c=S("light grey");e(a,c)},$$slots:{default:!0}}),e(i,r)},$$slots:{default:!0}});var b=o(p,2);h(b,{children:(i,C)=>{var r=m(),s=o(d(r));g(s,{get color(){return n[1]},children:(a,k)=>{var c=S("dark grey");e(a,c)},$$slots:{default:!0}}),e(i,r)},$$slots:{default:!0}});var F=o(b,2);h(F,{children:(i,C)=>{var r=m(),s=o(d(r));g(s,{get color(){return n[2]},children:(a,k)=>{var c=S("black");e(a,c)},$$slots:{default:!0}}),e(i,r)},$$slots:{default:!0}}),e(t,l)}}}))},n=["#ddd","#777","#222"];let v=B(n[0]);K();var _=Z(),$=L(_);w($,{name:"Default",args:{},get template(){return f},parameters:{__svelteCsf:{rawCode:`<Scroller {...args} on:change={(e) => (scrollerColor = scrollerColors[e.detail.index])}>
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
</Scroller>`}}});var M=o($,2);w(M,{name:"Split-screen mode",args:{splitscreen:!0},get template(){return f},parameters:{__svelteCsf:{rawCode:`<Scroller {...args} on:change={(e) => (scrollerColor = scrollerColors[e.detail.index])}>
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
</Scroller>`}}}),e(P,_),R()}x.__docgen={data:[],name:"Scroller.stories.svelte"};const D=G(x,V),fe=["Default","SplitScreenMode"],ve={...D.Default,tags:["svelte-csf-v5"]},_e={...D.SplitScreenMode,tags:["svelte-csf-v5"]};export{ve as Default,_e as SplitScreenMode,fe as __namedExportsOrder,V as default};
