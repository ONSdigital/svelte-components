import{ab as b,p as h,d as u,e as g,i as D,a as l,ad as _,t as L,f as k,as as M,at as A,c as H}from"./iframe-CN4WkKQ-.js";import{i as w,c as S,w as O,d as C}from"./create-runtime-stories-BV-tepPQ.js";import{s as I}from"./slot-BP_Qo1ZM.js";import{a as V}from"./actions-BqKc_HfO.js";import{s as E}from"./style-k6qvDF7Y.js";import{e as T,i as j}from"./each-CvkZJ55B.js";import{s as B}from"./attributes-BV5RLJ4t.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DayBpKoh.js";var P=k("<div></div>");function v(s,n){b(n,!1);let o=h(n,"entered",12,!1),c=h(n,"initialHeight",8,400),p=h(n,"rootMargin",8,200);const m=(t,a)=>{t.forEach(e=>{let i=e.isIntersecting;!o()&&i&&(a.unobserve(e.target),o(!0))})};function r(t){let a={root:document,rootMargin:`${p()}px`};const e=new IntersectionObserver(m,a);return e.observe(t),{destroy:()=>{var i;return(i=e==null?void 0:e.unobserve)==null?void 0:i.call(e,t)}}}w();var f=u(),d=g(f);{var y=t=>{var a=u(),e=g(a);I(e,n,"default",{},null),l(t,a)},z=t=>{var a=P();let e;V(a,i=>r==null?void 0:r(i)),L(()=>e=E(a,"",e,{height:`${+c()||100}px`})),l(t,a)};D(d,t=>{o()?t(y):t(z,-1)})}l(s,f),_()}v.__docgen={data:[{name:"entered",visibility:"public",description:"Bind to this variable to monitor whether the component has entered the viewport (boolean true/false).",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"initialHeight",visibility:"public",description:'Set the initial "placeholder" height of the component in pixels.',keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"400"},{name:"rootMargin",visibility:"public",description:"Set how many pixels from the viewport you want lazy loading to kick in.",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"200"}],name:"LazyLoad.svelte"};const R=`A wrapper component that uses IntersectionObserver to allow the Svelte components or HTML elements it contains to be lazy loaded, ie. to be added to the page (or DOM) only when they enter the viewport.

Optionally, you can use the **initialHeight** to set a placeholder height in pixels (default 400), and you can use **rootMargin** to set how many pixels before the viewport you want lazy loading to kick in (default 200).

<!-- prettier-ignore -->
\`\`\`html
<script>
  import { LazyLoad } from "@onsvisual/svelte-components";
<\/script>

{#each Array.from(Array(20).keys()) as i}
  <LazyLoad>
    <div class="img-container">
      <img src="https://picsum.photos/400/300?random={i}" alt="" />
    </div>
  </LazyLoad>
{/each}

<style>
  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    background: #eee;
    margin-bottom: 10px;
  }
</style>
\`\`\`
`,W=(s,n=M)=>{var o=u(),c=g(o);T(c,0,()=>Array.from(Array(15).keys()),j,(p,m)=>{v(p,A(n,{children:(r,f)=>{var d=F(),y=H(d);L(()=>B(y,"src",`https://picsum.photos/400/300?random=${m??""}`)),l(r,d)},$$slots:{default:!0}}))}),l(s,o)},$={title:"Wrappers/LazyLoad",component:v,tags:["autodocs"],argTypes:{},parameters:O(R)},{Story:q}=C();var F=k('<div class="img-container svelte-15n4nvi"><img alt=""/></div>');function x(s,n){b(n,!1),w(),q(s,{name:"Default",args:{},get template(){return W},parameters:{__svelteCsf:{rawCode:`{#each Array.from(Array(15).keys()) as i}
	<LazyLoad {...args}>
		<div class="img-container">
			<img src="https://picsum.photos/400/300?random={i}" alt="" />
		</div>
	</LazyLoad>
{/each}`}}}),_()}x.__docgen={data:[],name:"LazyLoad.stories.svelte"};const G=S(x,$),te=["Default"],ae={...G.Default,tags:["svelte-csf-v5"]};export{ae as Default,te as __namedExportsOrder,$ as default};
