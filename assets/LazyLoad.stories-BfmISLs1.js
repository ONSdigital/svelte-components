import{p as _,a as h,c as u,f as g,i as D,e as l,h as b,j as L,t as k,Z as M,_ as A,n as H}from"./iframe-BMlGGSEh.js";import{i as w,w as S,c as O,d as C}from"./create-runtime-stories-DY8P5Zzy.js";import{e as I,i as V}from"./each-x1Fw04Zn.js";import{s as j}from"./attributes-In2loFLY.js";import{s as E}from"./slot-BP_Qo1ZM.js";import{a as T}from"./actions-BgYLb0wk.js";import{s as B}from"./style-CcY6orqc.js";import"./attributes-Co-1QMVx.js";var P=L("<div></div>");function v(s,o){_(o,!1);let n=h(o,"entered",12,!1),d=h(o,"initialHeight",8,400),p=h(o,"rootMargin",8,200);const m=(t,a)=>{t.forEach(e=>{console.log(e);let i=e.isIntersecting;!n()&&i&&(a.unobserve(e.target),n(!0))})};function r(t){let a={root:document,rootMargin:`${p()}px`};const e=new IntersectionObserver(m,a);return e.observe(t),{destroy:()=>{var i;return(i=e==null?void 0:e.unobserve)==null?void 0:i.call(e,t)}}}w();var f=u(),c=g(f);{var y=t=>{var a=u(),e=g(a);E(e,o,"default",{},null),l(t,a)},z=t=>{var a=P();let e;T(a,i=>r==null?void 0:r(i)),k(()=>e=B(a,"",e,{height:`${+d()||100}px`})),l(t,a)};D(c,t=>{n()?t(y):t(z,!1)})}l(s,f),b()}v.__docgen={data:[{name:"entered",visibility:"public",description:"Bind to this variable to monitor whether the component has entered the viewport (boolean true/false).",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"initialHeight",visibility:"public",description:'Set the initial "placeholder" height of the component in pixels.',keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"400"},{name:"rootMargin",visibility:"public",description:"Set how many pixels from the viewport you want lazy loading to kick in.",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"200"}],name:"LazyLoad.svelte"};const R=`A wrapper component that uses IntersectionObserver to allow the Svelte components or HTML elements it contains to be lazy loaded, ie. to be added to the page (or DOM) only when they enter the viewport.

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
`,W=(s,o=M)=>{var n=u(),d=g(n);I(d,0,()=>Array.from(Array(15).keys()),V,(p,m)=>{v(p,A(o,{children:(r,f)=>{var c=F(),y=H(c);k(()=>j(y,"src",`https://picsum.photos/400/300?random=${m??""}`)),l(r,c)},$$slots:{default:!0}}))}),l(s,n)},Z={title:"Wrappers/LazyLoad",component:v,tags:["autodocs"],argTypes:{},parameters:S(R)},{Story:q}=C();var F=L('<div class="img-container svelte-rybo60"><img alt=""/></div>');function x(s,o){_(o,!1),w(),q(s,{name:"Default",args:{},get template(){return W},parameters:{__svelteCsf:{rawCode:`{#each Array.from(Array(15).keys()) as i}
	<LazyLoad {...args}>
		<div class="img-container">
			<img src="https://picsum.photos/400/300?random={i}" alt="" />
		</div>
	</LazyLoad>
{/each}`}}}),b()}x.__docgen={data:[],name:"LazyLoad.stories.svelte"};const G=O(x,Z),ee=["Default"],te={...G.Default,tags:["svelte-csf-v5"]};export{te as Default,ee as __namedExportsOrder,Z as default};
