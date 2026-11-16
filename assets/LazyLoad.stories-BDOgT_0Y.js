import{ad as b,p as h,e as u,h as v,i as D,a as s,af as _,s as M,n as k,t as L,f as w,ax as A,c as S}from"./iframe-DGWWVtAh.js";import{c as H,w as O,i as C,d as I}from"./create-runtime-stories-DpqZ-Xbz.js";import{a as V}from"./actions-DZDtUJQk.js";import{s as E}from"./style-Cmzoymny.js";import{e as T,i as j}from"./each-DEHiEDxj.js";import{s as B}from"./attributes-D8IEiTJ3.js";import"./preload-helper-Dp1pzeXC.js";import"./attributes-DayBpKoh.js";var P=w("<div></div>");function g(i,n){b(n,!0);let o=h(n,"entered",15),d=h(n,"initialHeight",3,400),c=h(n,"rootMargin",3,200);o()===void 0&&o(!1);const p=(e,t)=>{e.forEach(a=>{let y=a.isIntersecting;!o()&&y&&(t.unobserve(a.target),o(!0))})};function r(e){if(typeof IntersectionObserver>"u"){o(!0);return}let t={root:document,rootMargin:`${c()}px`};const a=new IntersectionObserver(p,t);return a.observe(e),{destroy:()=>a.disconnect()}}var m=u(),l=v(m);{var f=e=>{var t=u(),a=v(t);M(a,()=>n.children??k),s(e,t)},z=e=>{var t=P();let a;V(t,y=>r==null?void 0:r(y)),L(()=>a=E(t,"",a,{height:`${+d()||100}px`})),s(e,t)};D(l,e=>{o()?e(f):e(z,-1)})}s(i,m),_()}g.__docgen={data:[{name:"children",visibility:"public",description:"Child content (snippet)",keywords:[],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"entered",visibility:"public",description:"Bind to this variable to monitor whether the component has entered the viewport (boolean true/false).",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"..."},{name:"initialHeight",visibility:"public",description:'Set the initial "placeholder" height of the component in pixels.',keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"400"},{name:"rootMargin",visibility:"public",description:"Set how many pixels from the viewport you want lazy loading to kick in.",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"200"}],name:"LazyLoad.svelte"};const R=`A wrapper component that uses IntersectionObserver to allow the Svelte components or HTML elements it contains to be lazy loaded, ie. to be added to the page (or DOM) only when they enter the viewport.

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
`,W=(i,n=k)=>{var o=u(),d=v(o);T(d,0,()=>Array.from(Array(15).keys()),j,(c,p)=>{g(c,A(n,{children:(r,m)=>{var l=F(),f=S(l);L(()=>B(f,"src",`https://picsum.photos/400/300?random=${p??""}`)),s(r,l)},$$slots:{default:!0}}))}),s(i,o)},$={title:"Wrappers/LazyLoad",component:g,tags:["autodocs"],argTypes:{},parameters:O(R)},{Story:q}=I();var F=w('<div class="img-container svelte-15n4nvi"><img alt=""/></div>');function x(i,n){b(n,!1),C(),q(i,{name:"Default",args:{},get template(){return W},parameters:{__svelteCsf:{rawCode:`{#each Array.from(Array(15).keys()) as i}
	<LazyLoad {...args}>
		<div class="img-container">
			<img src="https://picsum.photos/400/300?random={i}" alt="" />
		</div>
	</LazyLoad>
{/each}`}}}),_()}x.__docgen={data:[],name:"LazyLoad.stories.svelte"};const G=H(x,$),ee=["Default"],te={...G.Default,tags:["svelte-csf-v5"]};export{te as Default,ee as __namedExportsOrder,$ as default};
