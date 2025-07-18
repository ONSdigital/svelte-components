import{p as _,a as u,$ as M,a0 as H,c as h,f as v,i as O,e as c,h as L,g as d,m as S,j as k,s as C,t as w,Z as I,_ as V,n as j}from"./iframe-Bt5qH5ZQ.js";import{i as x,w as E,c as B,d as P}from"./create-runtime-stories-BkV0ZRSv.js";import{e as R,i as T}from"./each-AUFWX6vF.js";import{s as W}from"./attributes-Lq-0W55G.js";import{s as Z}from"./slot-BP_Qo1ZM.js";import{s as $}from"./style-CcY6orqc.js";import{b as q}from"./this-Byi9mWeY.js";import"./attributes-Co-1QMVx.js";var F=k("<div></div>");function g(r,t){_(t,!1);let i=u(t,"entered",12,!1),m=u(t,"initialHeight",8,400),p=u(t,"rootMargin",8,200),o=S(),a;const b=(e,n)=>{e.forEach(s=>{let f=s.isIntersecting;!i()&&f&&(n.unobserve(d(o)),i(!0))})};M(()=>{let e={root:document,rootMargin:`${p()}px`};a=new IntersectionObserver(b,e),a.observe(d(o))}),H(()=>a!=null&&a.unobserve?a.unobserve(d(o)):null),x();var l=h(),y=v(l);{var D=e=>{var n=h(),s=v(n);Z(s,t,"default",{},null),c(e,n)},A=e=>{var n=F();let s;q(n,f=>C(o,f),()=>d(o)),w(()=>s=$(n,"",s,{height:`${+m()||100}px`})),c(e,n)};O(y,e=>{i()?e(D):e(A,!1)})}c(r,l),L()}g.__docgen={data:[{name:"entered",visibility:"public",description:"Bind to this variable to monitor whether the component has entered the viewport (boolean true/false).",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"initialHeight",visibility:"public",description:'Set the initial "placeholder" height of the component in pixels.',keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"400"},{name:"rootMargin",visibility:"public",description:"Set how many pixels from the viewport you want lazy loading to kick in.",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"200"}],name:"LazyLoad.svelte"};const G=`A wrapper component that uses IntersectionObserver to allow the elements it contains to be lazy loaded, ie. to be initialised/mounted only when they enter the viewport (or come close to it).

Optionally, you can use the **initialHeight** to set a placeholder height in pixels (default 400), and you can use **rootMargin** to set how many pixels from the viewport you want lazy loading to kick in (default 200).

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
`,J=(r,t=I)=>{var i=h(),m=v(i);R(m,0,()=>Array.from(Array(15).keys()),T,(p,o)=>{g(p,V(t,{children:(a,b)=>{var l=Q(),y=j(l);w(()=>W(y,"src",`https://picsum.photos/400/300?random=${o??""}`)),c(a,l)},$$slots:{default:!0}}))}),c(r,i)},K={title:"Wrappers/LazyLoad",component:g,tags:["autodocs"],argTypes:{},parameters:E(G)},{Story:N}=P();var Q=k('<div class="img-container svelte-rybo60"><img alt=""/></div>');function z(r,t){_(t,!1),x(),N(r,{name:"Default",args:{},get template(){return J},parameters:{__svelteCsf:{rawCode:`{#each Array.from(Array(15).keys()) as i}
	<LazyLoad {...args}>
		<div class="img-container">
			<img src="https://picsum.photos/400/300?random={i}" alt="" />
		</div>
	</LazyLoad>
{/each}`}}}),L()}z.__docgen={data:[],name:"LazyLoad.stories.svelte"};const U=B(z,K),se=["Default"],re={...U.Default,tags:["svelte-csf-v5"]};export{re as Default,se as __namedExportsOrder,K as default};
